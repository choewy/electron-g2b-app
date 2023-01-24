import { SearchTaskType } from './types';

export const bidTasks: SearchTaskType[] = [
  { text: '전체', endPoint: '' },
  { text: '물품', endPoint: 'getBidPblancListInfoThngPPSSrch' },
  { text: '공사', endPoint: 'getBidPblancListInfoCnstwkPPSSrch' },
  { text: '용역', endPoint: 'getBidPblancListInfoServcPPSSrch' },
  { text: '외자', endPoint: 'getBidPblancListInfoFrgcptPPSSrch' },
  { text: '기타', endPoint: 'getBidPblancListInfoEtcPPSSrch' },
];
