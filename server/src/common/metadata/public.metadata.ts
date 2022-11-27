import { SetMetadata } from '@nestjs/common';
import { MetadataKey, Scope } from './enums';

export const Public = () => SetMetadata(MetadataKey.Scope, Scope.Public);
