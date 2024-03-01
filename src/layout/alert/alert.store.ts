import { useCallback, useEffect, useState } from 'react';
import { VariantType, enqueueSnackbar } from 'notistack';

import { RecoilStore } from '@core/recoil-store';
import { CustomEventMap, customEventListener } from '@core/custom.event-listener';
import { AlertEvent } from './alert.event';

export type AlertStoreProps = {
  id?: string;
  variant: VariantType;
  message: string;
};

export class AlertStore extends RecoilStore<AlertStoreProps[]> {
  useEnqueue() {
    const setAlert = this.useSetState();

    return useCallback(
      (props: AlertStoreProps) => {
        setAlert((prev) => [...prev, props]);
      },
      [setAlert],
    );
  }

  useDequeue(): null | AlertStoreProps {
    const [alerts, setAlerts] = this.useState();
    const [target, setTarget] = useState<AlertStoreProps | null>(null);

    useEffect(() => {
      if (alerts.length === 0) {
        return;
      }

      const target = alerts[0];

      setTarget(target);
      setAlerts((prev) => prev.filter((alert) => alert.id !== target.id));
    }, [alerts, setTarget, setTarget]);

    return target;
  }

  useListener() {
    const useEnqueue = this.useEnqueue();

    useEffect(() => {
      const eventMaps = [new CustomEventMap(AlertEvent, (e) => useEnqueue(e.detail))];
      const cleanupFunction = customEventListener.addEventListeners(...eventMaps);

      return () => cleanupFunction();
    }, []);
  }

  useConsumer() {
    const target = this.useDequeue();

    useEffect(() => {
      if (target == null) {
        return;
      }

      enqueueSnackbar({
        variant: target.variant,
        message: target.message,
      });
    }, [target, enqueueSnackbar]);
  }
}
export const alertStore = new AlertStore([]);
