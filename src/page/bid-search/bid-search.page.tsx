import { FC } from 'react';
import { CommonComponent, FormComponent, InputComponent } from '@/component';
import { bidSearchStore } from '@/store';
import { DateTime } from 'luxon';

export const BidSearchPage: FC = () => {
  const { loading, query, data } = bidSearchStore.useValue();

  const onSearch = bidSearchStore.useGetData();
  const onChangeBgnDt = bidSearchStore.useChangeDate('inqryBgnDt');
  const onChangeEndDt = bidSearchStore.useChangeDate('inqryEndDt');

  return (
    <CommonComponent.Loader loading={loading}>
      <FormComponent.Calender
        label="조회시작일자"
        value={DateTime.fromFormat(query.inqryBgnDt as string, 'yyyy-MM-dd')}
        onChange={onChangeBgnDt}
      />
      <FormComponent.Calender
        label="조회종료일자"
        value={DateTime.fromFormat(query.inqryEndDt as string, 'yyyy-MM-dd')}
        onChange={onChangeEndDt}
      />
      <FormComponent.Search>
        {['입찰공고', '개찰결과', '최종낙찰자'].map((task) => (
          <InputComponent.Radio
            id={`bid-search-radio-${task}`}
            labelText={task}
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
    </CommonComponent.Loader>
  );
};
