import { Injectable } from '@nestjs/common';
import {
  MercuriusDriverConfig,
  MercuriusDriverConfigFactory,
  MercuriusGatewayDriver,
} from '../../../../lib';

@Injectable()
export class ConfigService implements MercuriusDriverConfigFactory {
  public createGqlOptions(): Partial<MercuriusDriverConfig> {
    return {
      driver: MercuriusGatewayDriver,
      gateway: {
        services: [
          { name: 'users', url: 'http://localhost:3011/graphql' },
          { name: 'posts', url: 'http://localhost:3012/graphql' },
        ],
      },
    };
  }
}
