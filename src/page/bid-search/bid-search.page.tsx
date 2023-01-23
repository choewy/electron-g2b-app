import { FC } from 'react';
import { FormComponent, InputComponent } from '@/component';
import { bidSearchStore } from '@/store';
import { DateTime } from 'luxon';

export const BidSearchPage: FC = () => {
  const { loading, query, data } = bidSearchStore.useValue();

  const onSearch = bidSearchStore.useGetData();
  const onChangeBgnDt = bidSearchStore.useChangeDate('inqryBgnDt');
  const onChangeEndDt = bidSearchStore.useChangeDate('inqryEndDt');

  return (
    <FormComponent.Search onSubmit={onSearch}>
      <InputComponent.Calender
        label="조회시작일자"
        value={DateTime.fromFormat(query.inqryBgnDt as string, 'yyyyMMdd0000')}
        onChange={onChangeBgnDt}
      />
      <InputComponent.Calender
        label="조회종료일자"
        value={DateTime.fromFormat(query.inqryEndDt as string, 'yyyyMMdd0000')}
        onChange={onChangeEndDt}
      />
      {['공고게시일시', '개찰일시'].map((option, i) => (
        <InputComponent.Radio
          id={`bid-search-option-radio-${i + 1}`}
          labelText={option}
        />
      ))}
      {[
        '전체',
        '물품',
        '공사',
        '용역',
        '리스',
        '외자',
        '비축',
        '민간',
        '기타',
      ].map((option) => (
        <InputComponent.Check
          id={`bid-search-radio-${option}`}
          labelText={option}
        />
      ))}
      <InputComponent.Text />
      <button onClick={onSearch}>조회</button>
    </FormComponent.Search>
  );
};
