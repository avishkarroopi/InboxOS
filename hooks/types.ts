export type HookEvent =
  | 'email:received'
  | 'email:pre-send'
  | 'email:post-send'
  | 'email:classified'
  | 'email:archived'
  | 'sync:started'
  | 'sync:completed'
  | 'ai:summary-generated'
  | 'ai:draft-generated';

export interface Disposable {
  dispose: () => void;
}

export type HookHandler<T extends HookEvent, P = unknown, R = unknown> = (payload: P) => Promise<R> | R;

export interface RegisteredHook {
  id: string;
  event: HookEvent;
  // eslint-disable-next-line @typescript-eslint/ban-types
  handler: Function;
}

export interface IHookRegistry {
  register<T extends HookEvent>(event: T, handler: HookHandler<T>): Disposable;
  emit<T extends HookEvent>(event: T, payload: unknown): Promise<unknown[]>;
  list(): RegisteredHook[];
}
