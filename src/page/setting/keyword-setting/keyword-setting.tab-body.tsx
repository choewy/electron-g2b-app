import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { CommonComponent, FormComponent, InputComponent } from '@/component';
import { keywordStore } from '@/store';
import { KeywordSettingTabContentProps } from './types';
import { KeywordSettingItem } from './keyword-setting.item';
import { FixedSizeList } from 'react-window';

export const KeywordSettingTabBody: FC<KeywordSettingTabContentProps> = ({
  title,
  hidden,
}) => {
  const [keyword, setKeyword] = useState<string>('');
  const onLoad = keywordStore.useLoad(title);
  const onAppend = keywordStore.useAppend(title, keyword, setKeyword);

  const { loading, rows } = keywordStore.useValue();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    },
    [setKeyword],
  );

  useEffect(() => {
    if (!hidden) {
      onLoad();
    }
  }, [hidden, onLoad]);

  return (
    <Box sx={{ width: '100%', height: '100%', maxWidth: '480px' }}>
      <CommonComponent.Loader loading={loading}>
        <FormComponent.Row onSubmit={onAppend}>
          <InputComponent.Text value={keyword} onChange={onChange} />
        </FormComponent.Row>
        <Box sx={{ overflowY: 'scroll' }}>
          <List>
            {rows &&
              rows.map((row) => (
                <KeywordSettingItem
                  key={`keyword-setting-${title}-item-${row.rowIndex}`}
                  title={title}
                  row={row}
                />
              ))}
          </List>
        </Box>
      </CommonComponent.Loader>
    </Box>
  );
};
