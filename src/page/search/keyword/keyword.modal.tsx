import { keywordStore } from '@/store';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { FC } from 'react';
import { KeywordDeleteModalProps } from './types';

export const KeywordDeleteModal: FC<KeywordDeleteModalProps> = ({
  hidden,
  onLoad,
}) => {
  const deleteDocId = keywordStore.useValue().deleteDocId;
  const onDelete = keywordStore.useDeleteCallback(deleteDocId, onLoad);
  const onCloseEvent = keywordStore.useToggleDeleteModalEvent();

  return (
    <Dialog open={!hidden && !!deleteDocId} onClose={onCloseEvent('')}>
      <DialogTitle>키워드 삭제</DialogTitle>
      <DialogContent>
        <DialogContentText>
          키워드를 삭제하시겠습니까? 삭제한 이후에는 복구할 수 없습니다.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onDelete}>삭제</Button>
        <Button onClick={onCloseEvent('')}>취소</Button>
      </DialogActions>
    </Dialog>
  );
};
