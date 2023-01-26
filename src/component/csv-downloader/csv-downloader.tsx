import CSVLink from 'react-json-to-csv';
import { DateTime } from 'luxon';
import { FC, useCallback, useEffect, useState } from 'react';
import { CsvDownloaderProps } from './types';

export const CsvDownloader: FC<CsvDownloaderProps> = ({ data, title }) => {
  const id = 'csv-download-link';

  const [filename, setFilename] = useState<string>('');

  const onChangeFilename = useCallback(() => {
    setFilename(
      [title, DateTime.local().toFormat('yyyy-MM-dd-HHmmss')].join('-'),
    );
  }, [setFilename]);

  useEffect(() => {
    if (data && data.length) {
      onChangeFilename();
    }
  }, [data, onChangeFilename]);

  useEffect(() => {
    if (filename) {
      const link = document.getElementById(id);

      if (!link) {
        return;
      }

      link.click();
      setFilename('');
    }
  }, [filename, setFilename]);

  return <CSVLink id={id} hidden={true} filename={filename} data={data} />;
};
