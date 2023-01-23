export type FirebaseKeywordDataType = {
  uid: string;
  type: 'include' | 'exclude';
  keyword: string;
};

export type FirebaseKeywordDataOmitType = Omit<FirebaseKeywordDataType, 'uid'>;
