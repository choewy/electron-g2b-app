import { FunctionComponent, useCallback } from 'react';

import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Paper, Tab, Tabs } from '@mui/material';

import { DateTextField } from '@component/textfields/date-textfield';
import { searchStore } from '@module/search/search.store';
import { SearchType } from '@module/search/dto/enums';
import { searchAxios } from '@module/search/search.axios';
import { StartSearchDto } from '@module/search/dto/start-search.dto';
import { AlertEvent } from '@layout/alert/alert.event';

export const SearchForm: FunctionComponent = () => {
  const [{ query, ...search }, setSearch] = searchStore.useState();

  const types = searchStore.useTypes();

  const onClickSearch = useCallback(async () => {
    const { error, data } = await searchAxios.search(
      query.type,
      new StartSearchDto(query.startDate, query.endDate, query.types),
    );

    if (error) {
      AlertEvent.warning(error.message).dispatch();
    } else {
      AlertEvent.success('데이터 수집이 시작되었습니다.').dispatch();

      setSearch((prev) => ({ ...prev, [data.type]: true }));
    }
  }, [query, setSearch]);

  return (
    <Paper sx={{ padding: 2 }}>
      <Tabs
        centered
        value={query.type}
        onChange={(_, value) =>
          setSearch((prev) => ({
            ...prev,
            query: {
              ...prev.query,
              type: value,
              types: value === SearchType.Bids ? [0, 1, 2, 3, 4] : [0, 1, 2, 3],
            },
          }))
        }
      >
        <Tab value={SearchType.Bids} label="입찰공고" />
        <Tab value={SearchType.Hrcs} label="사전규격" />
      </Tabs>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <DateTextField
          label="검색시작일자"
          size="small"
          value={query.startDate}
          max={query.endDate}
          onChange={(e) =>
            setSearch((prev) => ({
              ...prev,
              query: { ...prev.query, startDate: e.target.value },
            }))
          }
        />
        <DateTextField
          label="검색종료일자"
          size="small"
          value={query.endDate}
          min={query.startDate}
          onChange={(e) =>
            setSearch((prev) => ({
              ...prev,
              query: { ...prev.query, endDate: e.target.value },
            }))
          }
        />
      </Box>
      <FormGroup
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {types.map((type, i) => (
          <FormControlLabel
            key={[query.type, type, i].join('-')}
            componentsProps={{ typography: { fontSize: 12 } }}
            control={<Checkbox size="small" />}
            label={type}
            value={i}
            checked={query.types.includes(i)}
            onChange={(_, checked) =>
              setSearch((prev) => ({
                ...prev,
                query: {
                  ...prev.query,
                  types: checked ? [...prev.query.types, i] : prev.query.types.filter((v) => v !== i),
                },
              }))
            }
          />
        ))}
      </FormGroup>
      <FormControl>
        <Button disabled={search[query.type]} onClick={onClickSearch}>
          검색
        </Button>
      </FormControl>
    </Paper>
  );
};
