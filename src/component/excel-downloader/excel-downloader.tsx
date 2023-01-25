import { DateTime } from 'luxon';
import { FC, useCallback, useEffect, useState } from 'react';
import { JsonToExcel } from 'react-json-to-excel';
import { ExcelDownloaderProps } from './types';

export const ExcelDownloader: FC<ExcelDownloaderProps> = ({
  classType,
  title,
  data,
  onReset,
}) => {
  const id = 'excel-download-link';

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
      const div = document.getElementById(id);

      if (!div) {
        return;
      }

      const linkDiv = div.childNodes[0] as HTMLDivElement;

      if (!linkDiv) {
        return;
      }

      const button = linkDiv.childNodes[0] as HTMLButtonElement;

      if (!button) {
        return;
      }

      button.click();

      return () => {
        onReset();
        setFilename('');
      };
    }
  }, [filename, onReset, setFilename]);

  return (
    <div hidden={true} id={id}>
      <JsonToExcel
        title={title}
        fileName={filename}
        data={data ? data.map((row) => new classType(row)) : []}
      />
    </div>
  );
};
