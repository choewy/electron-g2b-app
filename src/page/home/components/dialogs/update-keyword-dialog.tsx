import { FormEvent, FunctionComponent, useCallback, useEffect, useState } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { KeywordType } from '@module/keyword/dto/enums';
import { keywordsStore } from '@module/keyword/keyword.store';
import { keywordAxios } from '@module/keyword/keyword.axios';
import { SetKeywordDto } from '@module/keyword/dto/set-keyword.dto';
import { AlertEvent } from '@layout/alert/alert.event';

export const UpdateKeywordDialog: FunctionComponent = () => {
  const [{ rows, dialog }, setKeywords] = keywordsStore.useState();
  const target = rows.find((row) => row.id === dialog.update.id) ?? null;

  let type = '';

  if (target) {
    type = target.type === KeywordType.Include ? '검색어' : '제외어';
  }

  const [text, setText] = useState<string>('');

  const onClose = useCallback(() => {
    setKeywords((prev) => ({
      ...prev,
      dialog: {
        ...prev.dialog,
        update: { ...prev.dialog.update, open: false },
      },
    }));
    setText('');
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (target === null) {
        return;
      }

      const { error, data } = await keywordAxios.updateKeyword(dialog.update.id, new SetKeywordDto(target.type, text));

      if (error) {
        AlertEvent.warning(error.message).dispatch();
      } else {
        AlertEvent.success(`${type}가 저장되었습니다.`).dispatch();

        setKeywords((prev) => ({
          ...prev,
          rows: prev.rows.map((row) => (row.id === data.id ? data : row)),
          dialog: {
            ...prev.dialog,
            update: { ...prev.dialog.update, open: false },
          },
        }));
      }
    },
    [dialog.update.id, target, text],
  );

  useEffect(() => {
    if (target) {
      setText(target.text);
    }
  }, [target]);

  return (
    <Dialog component="form" open={dialog.update.open} onSubmit={onSubmit} onClose={onClose}>
      <DialogTitle>{type} 수정</DialogTitle>
      <DialogContent>
        <TextField label="키워드" value={text} onChange={(e) => setText(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button variant="text" type="submit">
          저장
        </Button>
        <Button variant="text" onClick={onClose}>
          취소
        </Button>
      </DialogActions>
    </Dialog>
  );
};
