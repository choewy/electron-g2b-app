export type AlertStore = {
  info: string;
  success: string;
  warning: string;
  error: string;
};

export type AlertKey = keyof AlertStore;
