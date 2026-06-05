import { Popover, Tooltip } from '@douyinfe/semi-ui'
import React, { useContext } from 'react'
import { FaGithub, FaDiscord, FaQq } from 'react-icons/fa'
import ContributeBox from '../../contributors.tsx'
import SupportUs from './SupportUs.tsx'
import SiteList from './SiteList.tsx'
import FriendLink from './FriendLink.tsx'
import { LanguageContext } from '../../../contexts/LanguageContext.ts'

const FooterContent: React.FC = () => {
  const currentLanguage = useContext(LanguageContext)

  return (
    <div className="minWidthAvailable" style={{ marginLeft: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto hidden', maxWidth: '100svw' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', color: "rgba(var(--semi-grey-9), 1)", height: '4rem' }}>
        <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank' rel='nofollow' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img
            decoding='async'
            loading='lazy'
            src={import.meta.env.BASE_URL + 'images/remote/1f0afb4b_TPdoKCrgVb4i37J.png'}
            width='107'
            height='38'
            style={{ marginRight: '20px', marginTop: '5px' }}
          />
        </a>
        <div style={{ marginBottom: '0px', display: 'flex', flexDirection: 'row', gap: '0.3rem', whiteSpace: 'nowrap' }}>
          {'© 番石榴网络科技工作室 & '}
          <Popover content={<ContributeBox learnmore={currentLanguage.sidebar.learnmore} />} position={'top'}>
            <a>Contributors</a>
          </Popover>
        </div>
        <div style={{ height: 'max', display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '10px', marginTop: '6px' }}>
          <Tooltip content='Github repository'>
            <span>
              <a href='https://github.com/AlexisCerda/Strinova-Map-Assistant' target='_blank' style={{}}>
                <FaGithub />
              </a>
            </span>
          </Tooltip>
          <Tooltip content='Discord channel'>
            <span>
              <a href='https://discord.gg/Zn6fWgT4Sb' target='_blank' style={{ marginLeft: '5px' }}>
                <FaDiscord />
              </a>
            </span>
          </Tooltip>
          <Tooltip content='QQ群'>
            <span>
              <a href='https://qm.qq.com/q/E96Z4s8eze' target='_blank' style={{ marginLeft: '5px' }}>
                <FaQq />
              </a>
            </span>
          </Tooltip>
        </div>
        <div style={{ marginBottom: '0px', display: 'flex', flexDirection: 'row' }}>
          <FriendLink />
          <SiteList />
          <SupportUs />
        </div>
      </div>
    </div>
  )
}

export default FooterContent
