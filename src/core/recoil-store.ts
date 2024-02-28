import { v4 } from 'uuid';
import {
  atom,
  RecoilState,
  Resetter,
  SetterOrUpdater,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';

export abstract class RecoilStore<D> {
  private readonly store: RecoilState<D>;

  constructor(private readonly init: D) {
    this.store = atom({
      key: v4(),
      default: init,
    });
  }

  getInitValue(): D {
    return this.init;
  }

  useValue(): D {
    return useRecoilValue(this.store);
  }

  useState(): [D, SetterOrUpdater<D>] {
    return useRecoilState(this.store);
  }

  useSetState(): SetterOrUpdater<D> {
    return useSetRecoilState(this.store);
  }

  useResetState(): Resetter {
    return useResetRecoilState(this.store);
  }
}
