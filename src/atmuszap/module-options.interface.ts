import { ModuleMetadata } from '@nestjs/common';

export type AtmusZapModuleOptions = {
  apiKey: string;
  apiUrl?: string;
};

export interface AtmusZapModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useFactory?: (...args: any[]) => Promise<AtmusZapModuleOptions> | AtmusZapModuleOptions;
  inject?: any[];
}
