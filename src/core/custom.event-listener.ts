abstract class ICustomEvent<T> extends CustomEvent<T> {
  constructor(detail?: T) {
    super(ICustomEvent.name, { detail });
  }
}

export class CustomEventMap<T = any> {
  constructor(readonly event: typeof ICustomEvent<T>, readonly handler: (e: ICustomEvent<T>) => void) {}
}

export type CustomEventListnerCleanupFunction = () => void;

export class CustomEventListener {
  addEventListeners(...eventMaps: CustomEventMap[]): CustomEventListnerCleanupFunction {
    for (const { event, handler } of eventMaps) {
      window.addEventListener(event.name, (e) => handler(e as CustomEvent));
    }

    return () => {
      for (const { event, handler } of eventMaps) {
        window.removeEventListener(event.name, (e) => handler(e as CustomEvent));
      }
    };
  }
}

export const customEventListener = new CustomEventListener();
