import { Disposable, HookEvent, HookHandler, IHookRegistry, RegisteredHook } from './types';

export class HookRegistry implements IHookRegistry {
  private hooks: Map<HookEvent, Set<RegisteredHook>> = new Map();

  public register<T extends HookEvent>(event: T, handler: HookHandler<T>): Disposable {
    const hookId = crypto.randomUUID();
    const registeredHook: RegisteredHook = {
      id: hookId,
      event,
      handler,
    };

    if (!this.hooks.has(event)) {
      this.hooks.set(event, new Set());
    }
    
    this.hooks.get(event)!.add(registeredHook);

    return {
      dispose: () => {
        const hooksForEvent = this.hooks.get(event);
        if (hooksForEvent) {
          hooksForEvent.delete(registeredHook);
        }
      },
    };
  }

  public async emit<T extends HookEvent>(event: T, payload: unknown): Promise<unknown[]> {
    const hooksForEvent = this.hooks.get(event);
    if (!hooksForEvent || hooksForEvent.size === 0) {
      return [];
    }

    const results: unknown[] = [];
    for (const hook of hooksForEvent) {
      try {
        const result = await hook.handler(payload);
        results.push(result);
      } catch (error) {
        console.error(`Error executing hook ${hook.id} for event ${event}:`, error);
        // We don't throw here to prevent a failing hook from halting the pipeline
      }
    }
    
    return results;
  }

  public list(): RegisteredHook[] {
    const allHooks: RegisteredHook[] = [];
    this.hooks.forEach((hooks) => {
      allHooks.push(...Array.from(hooks));
    });
    return allHooks;
  }
}

// Global registry instance
export const registry = new HookRegistry();
