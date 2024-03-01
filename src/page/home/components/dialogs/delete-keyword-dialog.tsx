import { FunctionComponent, useCallback } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import { AlertEvent } from '@layout/alert/alert.event';

import { keywordsStore } from '@module/keyword/keyword.store';
import { KeywordType } from '@module/keyword/dto/enums';
import { keywordAxios } from '@module/keyword/keyword.axios';

export const DeleteKeywordDialog: FunctionComponent = () => {
  const [{ rows, dialog }, setKeywords] = keywordsStore.useState();

  const target = rows.find((row) => row.id === dialog.delete.id) ?? null;

  let type = '';

  if (target) {
    type = target.type === KeywordType.Include ? '검색어' : '제외어';
  }

  const onClose = useCallback(() => {
    setKeywords((prev) => ({
      ...prev,
      dialog: {
        ...prev.dialog,
        delete: { ...prev.dialog.delete, open: false },
      },
    }));
  }, []);

  const onClick = useCallback(async () => {
    const { data, error } = await keywordAxios.deleteKeyword(dialog.delete.id);

    if (error) {
      AlertEvent.warning(error.message).dispatch();
    } else {
      AlertEvent.success(`${type}가 삭제되었습니다.`).dispatch();

      setKeywords((prev) => ({
        ...prev,
        rows: prev.rows.filter((row) => row.id !== data.id),
        dialog: {
          ...prev.dialog,
          delete: { ...prev.dialog.delete, open: false },
        },
      }));
    }
  }, [dialog.delete.id]);

  return (
    <Dialog open={dialog.delete.open} onClose={onClose}>
      <DialogTitle>{type}를 삭제하시겠습니까?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {type}({target?.text})를 삭제하시겠습니까? 삭제한 데이터는 복구할 수 없습니다.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={onClick}>
          삭제
        </Button>
        <Button variant="text" onClick={onClose}>
          취소
        </Button>
      </DialogActions>
    </Dialog>
  );
};
