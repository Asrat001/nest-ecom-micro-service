import { SetMetadata } from '@nestjs/common';

// set routes to public
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
