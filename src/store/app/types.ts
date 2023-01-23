export type AppMessageType = {
  info?: string;
  error?: string;
};

export type AppStoreType = {
  title: string;
  isOpenSidebar: boolean;
  loading: boolean;
  messages: AppMessageType;
};
