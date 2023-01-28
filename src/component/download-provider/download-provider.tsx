import {
  FC,
  Fragment,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import csvDownload from 'json-to-csv-export';
import { exportToExcel } from 'react-json-to-excel';
import { DownloadProviderProps, DownloadTargetOptionType } from './types';
import { DateTime } from 'luxon';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

export const DownloadProvider: FC<DownloadProviderProps> = ({
  children,
  rows,
  resetRows,
  filename,
}) => {
  const [options, setOptions] = useState<DownloadTargetOptionType>({
    csv: false,
    xlsx: true,
  });

  const onChangeEvent = useCallback(
    (key: string) => (_: SyntheticEvent<Element, Event>, checked: boolean) => {
      setOptions((prev) => ({ ...prev, [key]: checked }));
    },
    [setOptions],
  );

  const createFileName = useCallback(
    (filename: string, exp: keyof DownloadTargetOptionType) => {
      return (
        [filename, DateTime.local().toFormat('yyyy-MM-dd-HHmmss')].join('-') +
        `.${exp}`
      );
    },
    [],
  );

  const renderOptionLabel = useCallback((key: string) => {
    switch (key) {
      case 'csv':
        return 'CSV 다운로드';

      case 'xlsx':
        return 'Excel 다운로드';
    }
  }, []);

  useEffect(() => {
    if ((!options.csv && !options.xlsx) || !rows || rows.length < 1) {
      return;
    }

    if (options.csv) {
      csvDownload({
        data: rows,
        filename: createFileName(filename, 'csv'),
        delimiter: ',',
      });
    }

    if (options.xlsx) {
      exportToExcel(
        [{ sheetName: filename, details: rows }],
        createFileName(filename, 'xlsx'),
        true,
      );
    }

    resetRows();
  }, [options, rows, resetRows, filename, createFileName]);

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
        {Object.entries(options).map(([key, value]) => (
          <FormControlLabel
            key={`download-option-${key}`}
            control={<Checkbox size="small" />}
            label={renderOptionLabel(key)}
            value={key}
            checked={value}
            onChange={onChangeEvent(key)}
            componentsProps={{
              typography: { fontSize: 13 },
            }}
          />
        ))}
      </FormGroup>
      {children}
    </Fragment>
  );
};
