import React, { useContext } from 'react';
import { i18nData } from '../../data/i18n';
import { Button, Nav, Select, Toast } from '@douyinfe/semi-ui';
import Title from '@douyinfe/semi-ui/lib/es/typography/title';
import { MapName } from '../../data/maplist';
import {
  MdOutlineTranslate,
  MdLightMode,
  MdDarkMode,
  MdCastConnected,
  MdContentCopy,
} from 'react-icons/md';
import ChangeMapButton from '../buttons/changeMapButton';
import ChangeHighlightButton from '../buttons/changeHighlightButton';
import Pikaso, { BaseShapes } from 'pikaso';
import Announcement from '../announcement';
import { LanguageContext } from '../../contexts/LanguageContext.ts';
import { ThemeContext, ThemeType } from '../../contexts/ThemeContext.ts';
import { Languages } from '../../types/interface.ts';

interface HeaderContentProps {
  changeLanguage: (lang: Languages) => void;
  changeTheme: (theme: ThemeType) => void;
  currentMap: MapName;
  mapPrepareMode: boolean;
  setPresentMap: React.Dispatch<React.SetStateAction<MapName>>;
  setPresentMapURL: React.Dispatch<
    React.SetStateAction<{ imgPrepareLink: string; imgBlankLink: string }>
  >;
  setMapPrepareMode: React.Dispatch<React.SetStateAction<boolean>>;
  editor: Pikaso<BaseShapes> | null;
  share: React.Dispatch<React.SetStateAction<void>>;
}

const HeaderContent: React.FC<HeaderContentProps> = ({
  changeLanguage,
  changeTheme,
  currentMap,
  mapPrepareMode,
  setPresentMap,
  setPresentMapURL,
  setMapPrepareMode,
  editor,
  share,
}) => {
  const currentLanguage = useContext(LanguageContext);
  const currentTheme = useContext(ThemeContext);

  const switchTheme = () => {
    changeTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(location.href).then(
      function () {
        /* on clipboard success */
      },
      function () {
        /* on clipboard failed */
      },
    );
    Toast.success('Copied');
  };

  return (
    <div style={{ width: '100%' }}>
      <Nav
        mode='horizontal'
        className='none-scrollbar minWidthAvailable'
        style={{ overflow: 'auto hidden', maxWidth: '100svw' }}>
        <Nav.Header>
          <Title style={{ whiteSpace: 'nowrap' }}>
            {currentLanguage.title}
          </Title>
        </Nav.Header>
        <div
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: '10px',
          }}>
          <ChangeMapButton
            editor={editor}
            currentLanguage={currentLanguage}
            currentMap={currentMap}
            setPresentMap={setPresentMap}
            setPresentMapURL={setPresentMapURL}
          />
        </div>
        <div
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: '10px',
          }}>
          <ChangeHighlightButton
            content={currentLanguage.mapsetting.TeamHighlight}
            mapPrepareMode={mapPrepareMode}
            setMapPrepareMode={setMapPrepareMode}
          />
        </div>
        <div style={{}}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button
              icon={<MdCastConnected style={{ fontSize: 32 }} />}
              size={'large'}
              onClick={() => {
                share();
              }}
              style={{ margin: '2px' }}
            />
            <Button
              icon={<MdContentCopy style={{ fontSize: 32 }} />}
              size={'large'}
              onClick={() => {
                copyUrl();
              }}
              style={{ margin: '2px' }}
            />
          </div>
        </div>
        <Nav.Footer>
          <Announcement
            name={currentLanguage.announcement}
            content={currentLanguage.announcementdata}
          />
          <Button
            icon={
              currentTheme === 'light' ? (
                <MdLightMode
                  size='1rem'
                  style={{ padding: '0 1rem' }}
                  color='rgba(var(--semi-grey-9), 1)'
                />
              ) : (
                <MdDarkMode
                  size='1rem'
                  style={{ padding: '0 1rem' }}
                  color='rgba(var(--semi-grey-9), 1)'
                />
              )
            }
            onClick={switchTheme}
          />
          <MdOutlineTranslate
            size='1.5rem'
            style={{ padding: '0 1rem' }}
            color='rgba(var(--semi-grey-9), 1)'
          />
          <Select
            defaultValue={currentLanguage.language}
            onChange={(value) => changeLanguage(value as Languages)}>
            {Object.keys(i18nData).map((key) => (
              <Select.Option key={key} value={key}>
                {Languages[key as keyof typeof Languages]}
              </Select.Option>
            ))}
          </Select>
        </Nav.Footer>
      </Nav>
    </div>
  );
};

export default HeaderContent;
