import { FormEvent, FunctionComponent, useCallback, useState } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

import { AlertEvent } from '@layout/alert/alert.event';

import { keywordsStore } from '@module/keyword/keyword.store';
import { KeywordType } from '@module/keyword/dto/enums';
import { keywordAxios } from '@module/keyword/keyword.axios';
import { CreateKeywordDto } from '@module/keyword/dto/create-keyword.dto';

export const CreateKeywordDialog: FunctionComponent = () => {
  const [{ query, dialog }, setKeywords] = keywordsStore.useState();

  const type = query.type === KeywordType.Include ? '검색어' : '제외어';

  const [text, setText] = useState<string>('');

  const onClose = useCallback(() => {
    setKeywords((prev) => ({
      ...prev,
      dialog: { ...prev.dialog, create: { open: false } },
    }));
    setText('');
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const { error, data } = await keywordAxios.create(new CreateKeywordDto(query.type, text));

      if (error) {
        AlertEvent.warning(error.message).dispatch();
      } else {
        AlertEvent.success(`${type}가 등록되었습니다.`).dispatch();

        setKeywords((prev) => ({
          ...prev,
          rows: [data, ...prev.rows],
          dialog: { ...prev.dialog, create: { open: false } },
        }));
      }
    },
    [query.type, text],
  );

  return (
    <Dialog component="form" open={dialog.create.open} onSubmit={onSubmit} onClose={onClose}>
      <DialogTitle>{type} 등록</DialogTitle>
      <DialogContent>
        <TextField label="키워드" value={text} onChange={(e) => setText(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button variant="text" type="submit">
          등록
        </Button>
        <Button variant="text" onClick={onClose}>
          취소
        </Button>
      </DialogActions>
    </Dialog>
  );
};
