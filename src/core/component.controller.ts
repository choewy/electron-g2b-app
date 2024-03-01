import { useEffect, useState } from 'react';
import { SetterOrUpdater } from 'recoil';

export abstract class ComponentController<T, Dependencies = any> {
  protected readonly init: T;
  protected readonly state: T;
  protected readonly setState: SetterOrUpdater<T>;

  constructor(
    protected intializer: (args?: Dependencies) => T,
    protected dependencies?: Dependencies,
    options?: { ignoreDependencies?: boolean },
  ) {
    const [state, setState] = useState<T>(intializer(dependencies));

    this.init = intializer(dependencies);
    this.state = state;
    this.setState = setState;

    if (options?.ignoreDependencies) {
      return;
    }

    useEffect(() => {
      if (dependencies == null) {
        return;
      }

      setState(intializer(dependencies));
    }, [dependencies]);
  }
}
