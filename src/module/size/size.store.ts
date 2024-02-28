import { RecoilStore } from '@core/recoil-store';

export type SizeStoreProps = {
  width: number;
  height: number;
};

export class SizeStore extends RecoilStore<SizeStoreProps> {
  useGeneralPageHeight(): number {
    return this.useValue().height - 70;
  }

  useGeneralPageContentHeight(): number {
    return this.useValue().height - 100;
  }

  useGeneralPageBoxMaxWidth() {
    const width = this.useValue().width;

    return width < 468 ? width - 20 : 486;
  }

  useDialogContentMinWidth() {
    const width = this.useValue().width;

    return width < 469 ? undefined : 420;
  }

  useFlexDirection(width: number) {
    const size = this.useValue();

    if (size.width < width) {
      return 'column';
    } else {
      return 'row';
    }
  }

  useSignFormWidth(): string | number {
    const width = this.useValue().width;

    if (width < 469) {
      return width - 50;
    } else {
      return '100%';
    }
  }
}

export const sizeStore = new SizeStore({
  width: window.innerWidth,
  height: window.innerHeight,
});
