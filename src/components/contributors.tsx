import { Col, Row, Tag } from '@douyinfe/semi-ui';
import { FaGithub, FaTwitch } from 'react-icons/fa';
import { FaBilibili, FaXTwitter } from "react-icons/fa6";

interface ContributeBoxPops {
    learnmore?: string;
}

const contributeList = [
    {
        job: ["sponser", "code"],
        name: "爱走位的KN",
        icon: "https://avatars.githubusercontent.com/u/83012768?v=4",
        github: "https://github.com/ShrLeeKNsword/",
        bili: "https://space.bilibili.com/403314450",
        X: "",
        twich: "",
    },
    {
        job: ["code", "translation"],
        name: "MiekoHikari",
        icon: "https://avatars.githubusercontent.com/u/77004524?v=4",
        github: "https://github.com/MiekoHikari/",
        bili: "",
        X: "https://x.com/MiekoHikariEN",
        twich: "https://www.twitch.tv/miekohikari",
    },
    {
        job: ["translation"],
        name: "サルミナ(salutemenow)",
        icon: "https://s2.loli.net/2024/09/28/58XqieRV36aOCUx.webp",
        github: "",
        bili: "",
        X: "https://x.com/salutemenowjp",
        twich: "https://www.twitch.tv/salute_me_now_",
    },
    {
        job: ["translation"],
        name: "restart0x",
        icon: "https://s2.loli.net/2024/11/08/HgB9Dqo6CPsL7Ql.jpg",
        github: "",
        bili: "https://space.bilibili.com/497387234",
        X: "",
        twich: "",
    },
    {
        job: ["code"],
        name: "Sheppsu",
        icon: "https://avatars.githubusercontent.com/u/49356627?v=4",
        github: "https://github.com/Sheppsu",
        bili: "",
        X: "",
        twich: "",
    },
    {
        job: ["code"],
        name: "Jsynk",
        icon: "https://avatars.githubusercontent.com/u/14832958?v=4",
        github: "https://github.com/Jsynk",
        bili: "",
        X: "",
        twich: "",
    },
    {
        job: ["code"],
        name: "Haru Yakumo",
        icon: "https://cdn.sa.net/2025/04/22/fF9G5vbJRCckiLI.webp",
        github: "https://github.com/huequica",
        bili: "",
        X: "https://x.com/huequica",
        twich: "https://twitch.tv/huequica",
    },
]

const ContributeBox = (props: ContributeBoxPops) => {
    return <div style={{ maxHeight: "800px", width: "400px", paddingTop: "5px", paddingBottom: "5px" }}>
        <div className='none-scrollbar' style={{ height: "100%", width: "100%", overflowY: "scroll" }}>
            {contributeList.map((child) => {
                return <div key={child.name} style={{ height: "60px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "5px", color: "rgba(var(--semi-grey-9), 1)" }}>
                    <Row style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                        <Col span={1}></Col>
                        <Col span={4}><img src={child.icon} style={{ height: "50px", borderRadius: "50%", marginRight: "10px" }}></img></Col>
                        <Col span={10} style={{ textAlign: "left", fontSize: "15px", fontWeight: "bold" }}>
                            <div style={{ width: "100%", marginBottom: "3px", marginTop: "3px" }}>{child.name}</div>
                            {child.job.map((childchild) => {
                                return <Tag size="small" color='light-blue' style={{ marginRight: "5px", marginBottom: "2px", marginTop: "2px" }}>{childchild}</Tag>
                            })}
                        </Col>
                        <Col span={7} style={{ textAlign: "right", display: "flex", alignItems: "right", justifyContent: "right" }}>
                            {child.github != "" ? <a href={child.github} target='_blank' style={{ margin: "5px" }}><FaGithub /></a> : <div style={{ width: "25px", height: "100%", textAlign: "center", marginTop: "2px" }}>/</div>}
                            {child.bili != "" ? <a href={child.bili} target='_blank' style={{ margin: "5px" }}><FaBilibili /></a> : <div style={{ width: "25px", height: "100%", textAlign: "center", marginTop: "2px" }}>/</div>}
                            {child.X != "" ? <a href={child.X} target='_blank' style={{ margin: "5px" }}><FaXTwitter /></a> : <div style={{ width: "25px", height: "100%", textAlign: "center", marginTop: "2px" }}>/</div>}
                            {child.twich != "" ? <a href={child.twich} target='_blank' style={{ margin: "5px" }}><FaTwitch /></a> : <div style={{ width: "25px", height: "100%", textAlign: "center", marginTop: "2px" }}>/</div>}
                        </Col>
                        <Col span={2} style={{}}></Col>
                    </Row>
                </div>
            })}
        </div>
        {props.learnmore != "" || props.learnmore != undefined ? <div style={{ fontSize: "15px", fontWeight: "bold", textAlign: 'center', display: "flex", alignItems: "center", justifyContent: "center", height: "30px", margin: "5px", color: "rgba(var(--semi-grey-9), 1)" }}>{props.learnmore}</div> : <></>}
    </div>
}

export default ContributeBox;