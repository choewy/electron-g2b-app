import { RecoilStore } from '@core/recoil-store';

import { ProfileDto } from './dto/profile.dto';

export type AuthStoreProps = {
  ok: boolean | null;
  profile: ProfileDto;
  verify: boolean;
};

export class AuthStore extends RecoilStore<AuthStoreProps> {}
export const authStore = new AuthStore({
  ok: null,
  profile: new ProfileDto(),
  verify: false,
});
