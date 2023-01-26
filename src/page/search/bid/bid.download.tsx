import { CsvDownloader, ExcelDownloader } from '@/component';
import {
  Alert,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { FC, Fragment, SyntheticEvent, useCallback, useState } from 'react';
import { BidDownloadProps } from './types';

export const BidDownload: FC<BidDownloadProps> = ({ rows }) => {
  const [download, setDownload] = useState<{ csv: boolean; excel: boolean }>({
    csv: false,
    excel: true,
  });

  const downloadLabel = useCallback((key: string) => {
    switch (key) {
      case 'csv':
        return 'CSV 다운로드';

      case 'excel':
        return 'Excel 다운로드';
    }
  }, []);

  const onChangeEvent = useCallback(
    (key: string) => (_: SyntheticEvent<Element, Event>, checked: boolean) => {
      setDownload((prev) => ({ ...prev, [key]: checked }));
    },
    [setDownload],
  );

  const csvDownload = useCallback(() => {
    return <CsvDownloader title="나라장터입찰공고" data={rows} />;
  }, [rows]);

  const excelDownload = useCallback(() => {
    return <ExcelDownloader title="나라장터입찰공고" data={rows} />;
  }, [rows]);

  return (
    <Fragment>
      <FormGroup
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 1,
        }}
      >
        {Object.entries(download).map(([key, value]) => (
          <FormControlLabel
            key={`bid-download-${key}`}
            control={<Checkbox size="small" />}
            label={downloadLabel(key)}
            value={key}
            checked={value}
            onChange={onChangeEvent(key)}
            componentsProps={{
              typography: { fontSize: 13 },
            }}
          />
        ))}
        {download.csv && csvDownload()}
        {download.excel && excelDownload()}
      </FormGroup>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Alert
          severity="warning"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 500,
          }}
        >
          Windows에서는 CSV 파일이 정상적으로 보이지 않을 수 있습니다.
        </Alert>
      </Box>
    </Fragment>
  );
};
