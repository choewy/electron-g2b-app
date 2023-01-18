export type StoreDefaultType = {
  loading?: boolean;
};

export type StoreCallbackType = {
  func: (...args: any[]) => void | Promise<void>;
  args?: any[];
};
