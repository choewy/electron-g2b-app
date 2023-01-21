import {
  FC,
  ChangeEvent,
  Fragment,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { IconButton, ListItem, ListItemText } from '@mui/material';
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Delete as DeleteIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';
import { KeywordSettingItemProps } from './types';
import { keywordStore } from '@/store';
import { FormComponent, InputComponent } from '@/component';

export const KeywordSettingItem: FC<KeywordSettingItemProps> = ({
  title,
  row,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>(row.keyword);

  const onEdit = useCallback(
    (editable: boolean) => () => setEditMode(editable),
    [setEditMode],
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    },
    [setKeyword],
  );

  const onDelete = keywordStore.useDelete(title, row);
  const onUpdate = keywordStore.useUpdate(title, row, keyword, setEditMode);

  useEffect(() => {
    setKeyword(row.keyword);
  }, [row, setKeyword]);

  return (
    <ListItem
      disableGutters
      secondaryAction={
        <Fragment>
          {!editMode && (
            <IconButton onClick={onEdit(true)}>
              <EditIcon />
            </IconButton>
          )}
          {editMode && (
            <IconButton onClick={onUpdate}>
              <SaveIcon />
            </IconButton>
          )}
          {!editMode && (
            <IconButton onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
          )}
          {editMode && (
            <IconButton onClick={onEdit(false)}>
              <CancelIcon />
            </IconButton>
          )}
        </Fragment>
      }
    >
      {editMode ? (
        <FormComponent.Row onSubmit={onUpdate}>
          <InputComponent.Text value={keyword} onChange={onChange} />
        </FormComponent.Row>
      ) : (
        <ListItemText primary={row.keyword} />
      )}
    </ListItem>
  );
};
