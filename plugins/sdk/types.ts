import { IHookRegistry } from '../../hooks/types';

export type PluginPermission = 
  | 'read:emails'
  | 'write:emails'
  | 'read:contacts'
  | 'write:contacts'
  | 'network:outbound';

export interface PluginStorage {
  get(key: string): Promise<unknown>;
  set(key: string, value: unknown): Promise<void>;
  delete(key: string): Promise<void>;
}

export interface Logger {
  info(message: string, ...args: unknown[]): void;
  warn(message: string, ...args: unknown[]): void;
  error(message: string, ...args: unknown[]): void;
}

export interface PluginAPI {
  sendEmail(draft: unknown): Promise<void>;
  archiveEmail(id: string): Promise<void>;
  // Sandboxed subset of core capabilities
}

export interface PluginContext {
  hooks: IHookRegistry;
  api: PluginAPI;
  storage: PluginStorage;
  logger: Logger;
}

export interface IPlugin {
  id: string;
  name: string;
  version: string;
  permissions: PluginPermission[];
  
  activate(context: PluginContext): Promise<void>;
  deactivate(): Promise<void>;
}
