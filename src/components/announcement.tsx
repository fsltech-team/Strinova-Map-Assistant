import { useState } from 'react';
import { Modal, Button, Typography, Divider, Tag } from '@douyinfe/semi-ui';
import { MdOutlineAnnouncement, MdPushPin } from 'react-icons/md';

interface AnnouncementForm {
  title: string;
  date: string;
  summary: string;
  data: object;
}

interface AnnouncementData {
  notshowntoday: string;
  pin: AnnouncementForm;
  history: Array<AnnouncementForm> | null | undefined;
}

interface AnnouncementPops {
  name: string;
  content: AnnouncementData;
}

// 设置 cookie
function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// 获取 cookie
function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp(
      `(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`,
    ),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// 删除 cookie
function deleteCookie(name: string) {
  setCookie(name, '', -1);
}

const { Title } = Typography;

const Announcement = (props: AnnouncementPops) => {
  const presentdate = new Date();
  const [visible, setVisible] = useState(
    getCookie('today_announcement')
      ? getCookie('today_announcement') === presentdate.getDate().toString()
        ? false
        : () => {
            deleteCookie('today_announcement');
            return true;
          }
      : true,
  );
  const showDialog = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
    if (!getCookie('today_announcement')) {
      setCookie('today_announcement', presentdate.getDate().toString(), 1);
    }
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleAfterClose = () => {
    console.log('After Close callback executed');
  };

  return (
    <>
      <Button
        type='tertiary'
        onClick={showDialog}
        style={{ marginRight: '10px' }}>
        <MdOutlineAnnouncement
          style={{
            color: 'rgba(var(--semi-grey-9), 1)',
            fontSize: '15px',
            marginRight: '5px',
            marginTop: '3px',
          }}
        />
        {props.name}
      </Button>
      <Modal
        title={props.name}
        visible={visible}
        onOk={handleOk}
        afterClose={handleAfterClose} //>=1.16.0
        onCancel={handleCancel}
        closeOnEsc={true}
        okText={props.content.notshowntoday}>
        <div>
          <div style={{ display: 'flex' }}>
            <MdPushPin
              style={{ marginTop: '3px', marginRight: '5px', fontSize: '18px' }}
            />
            <Title heading={6}>
              {props.content.pin.title}
              <Tag shape='circle' color='cyan' style={{ marginLeft: '5px' }}>
                {props.content.pin.date}
              </Tag>
            </Title>
          </div>
          <Divider margin='8px' />
          <div>{props.content.pin.summary}</div>
        </div>
      </Modal>
    </>
  );
};

export default Announcement;
