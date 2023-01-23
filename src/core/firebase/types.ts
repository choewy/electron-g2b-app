export type FirebaseKeywordType = 'include' | 'exclude';

export type FirebaseKeywordDataType = {
  uid: string;
  type: 'include' | 'exclude';
  keyword: string;
  createdAt: string;
};

export type FirebaseKeywordRowType = FirebaseKeywordDataType & {
  id: string;
};

export type FirebaseKeywordDataOmitType = Omit<
  Omit<FirebaseKeywordDataType, 'uid'>,
  'createdAt'
>;
