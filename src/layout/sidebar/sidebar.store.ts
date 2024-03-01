import { RecoilStore } from '@core/recoil-store';

export class SidebarStore extends RecoilStore<boolean> {}
export const sidebarStore = new SidebarStore(false);
