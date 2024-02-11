import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { AtmusZapService } from './atmuszap.service';
import { ATMUSZAP_CONFIG_OPTIONS } from './constants';
import { AtmusZapModuleAsyncOptions, AtmusZapModuleOptions } from './module-options.interface';
import { InstancesService, WebhooksService, WebsocketsService } from './services';

@Global()
@Module({})
export class AtmusZapModule {
  static register(options: AtmusZapModuleOptions) {
    return {
      module: AtmusZapModule,
      imports: [
        HttpModule.register({
          baseURL: 'https://wa.atmuszap.com.br',
          headers: {
            Accept: 'application/json',
            apikey: options.apiKey,
          },
        }),
      ],
      providers: [
        { provide: ATMUSZAP_CONFIG_OPTIONS, useValue: options },
        AtmusZapService,
        InstancesService,
        WebhooksService,
        WebsocketsService,
      ],
      exports: [AtmusZapService],
    };
  }

  static registerAsync(options: AtmusZapModuleAsyncOptions): DynamicModule {
    const asyncProviders = this.createAsyncProviders(options);
    return {
      module: AtmusZapModule,
      imports: options.imports || [],
      providers: [...asyncProviders, AtmusZapService, InstancesService, WebhooksService, WebsocketsService],
      exports: [AtmusZapService],
    };
  }

  private static createAsyncProviders(options: AtmusZapModuleAsyncOptions): Provider[] {
    return [
      {
        provide: ATMUSZAP_CONFIG_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      },
    ];
  }
}
