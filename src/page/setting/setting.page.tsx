import { KEYWORD_TITLES } from '@/sheet';
import { FC, SyntheticEvent, useCallback, useState } from 'react';
import {
  KeywordSettingTabBody,
  KeywordSettingTabPanel,
  KeywordSettingTabs,
} from './keyword-setting';

export const SettingPage: FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const onChangeTabIndex = useCallback(
    (_: SyntheticEvent<Element, Event>, index: number) => {
      setTabIndex(index);
    },
    [setTabIndex],
  );

  return (
    <KeywordSettingTabs value={tabIndex} onChange={onChangeTabIndex}>
      {KEYWORD_TITLES.map((title) => {
        const hidden = KEYWORD_TITLES[tabIndex] !== title;
        return (
          <KeywordSettingTabPanel
            key={`keyword-setting-tabs-${title}`}
            hidden={hidden}
          >
            <KeywordSettingTabBody title={title} hidden={hidden} />
          </KeywordSettingTabPanel>
        );
      })}
    </KeywordSettingTabs>
  );
};
