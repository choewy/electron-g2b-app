import CSVLink from 'react-json-to-csv';
import { DateTime } from 'luxon';
import { FC, useCallback, useEffect, useState } from 'react';
import { CsvDownloaderProps } from './types';

export const CsvDownloader: FC<CsvDownloaderProps> = ({
  classType,
  data,
  title,
  onReset,
}) => {
  const ID = 'csv-download-link';

  const [filename, setFilename] = useState<string>('');

  const onChangeFilename = useCallback(() => {
    setFilename(
      [title, DateTime.local().toFormat('yyyy-MM-dd-HHmmss')].join('-'),
    );
  }, [setFilename]);

  useEffect(() => {
    if (data.length) {
      onChangeFilename();
    }
  }, [data, onChangeFilename]);

  useEffect(() => {
    if (filename) {
      document.getElementById(ID)?.click();

      return () => {
        onReset();
        setFilename('');
      };
    }
  }, [filename, onReset, setFilename]);

  return (
    <CSVLink
      id={ID}
      hidden={true}
      filename={filename}
      data={data.map((row) => new classType(row))}
    />
  );
};
