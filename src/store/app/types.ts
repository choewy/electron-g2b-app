export type AppMessageType = {
  info?: string;
  warn?: string;
  error?: string;
};

export type AppStoreType = {
  title: string;
  isOpenSidebar: boolean;
  loading: boolean;
  messages: AppMessageType;
};
