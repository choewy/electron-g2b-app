import { SvgIconComponent } from '@mui/icons-material';
import { Fragment, lazy, LazyExoticComponent } from 'react';
import { Route } from 'react-router-dom';
import { RouterMetadata } from './types';

const RouterGuard = lazy(() => import('./guard'));

export class Router implements RouterMetadata {
  constructor(
    public readonly text: string,
    public readonly path: string,
    public readonly icon?: SvgIconComponent,
    public readonly element?: LazyExoticComponent<any>,
  ) {}
}

export abstract class RouterAbstract {
  public static all(): Router[] {
    return Object.values(this);
  }

  public static render(guard: boolean) {
    const routers = Object.values(this).map((router: Router) => (
      <Route
        key={JSON.stringify(router)}
        path={router.path.startsWith('/') ? router.path.slice(1) : router.path}
        element={router.element && <router.element />}
      />
    ));

    return guard === false ? (
      <Fragment>{routers}</Fragment>
    ) : (
      <Route element={<RouterGuard />}>{routers}</Route>
    );
  }
}
