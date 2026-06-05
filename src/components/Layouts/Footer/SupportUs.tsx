import { useContext } from 'react'
import { Typography, Divider } from '@douyinfe/semi-ui';
import SupportUsList from './SupportUsList.tsx';
import { LanguageContext } from '../../../contexts/LanguageContext.ts'
import { IoMdHeart } from "react-icons/io";
import FooterModal from './FooterModal.tsx'

const { Title } = Typography;

const SupportUs: React.FC = () => {
  const lang = useContext(LanguageContext);
  const langData = lang.supportusdata

  const children =  (
    <>
      {langData.content}
      <SupportUsList />
      <br />
      <Divider margin='12px' />
      <div><Title heading={6}>{langData.global}</Title></div>
      <div onClick={() => { open("https://ko-fi.com/MiekoHikari", "_blank") }}>
        <img src={import.meta.env.BASE_URL + 'images/remote/1b6597bf_LpQN1lIvu97HdMy.webp'} style={{ height: "50px", marginTop: "10px" }} />
      </div>
      <Divider margin='12px' />
      <div><Title heading={6}>{langData.CN}</Title></div>
      <div onClick={() => { open("https://afdian.com/a/fsltech", "_blank") }} style={{ display: "flex", height: "50px" }}>
        <img src={import.meta.env.BASE_URL + 'images/remote/82eff57c_Xw74impc6osJDCL.png'} style={{ height: "50px", marginTop: "10px", marginLeft: "5px" }} />
        <div style={{ display: "flex", height: "100%", placeItems: "center", fontSize: "20px", marginLeft: "20px", marginTop: "10px", color: "rgba(var(--semi-grey-9), 1)" }}><strong>爱发电</strong></div>
      </div>
    </>
  );

  return <FooterModal icon={<IoMdHeart style={{marginRight: "5px"}} />} title={lang.sidebar.supportus} children={children} />
};

export default SupportUs;
