import React, { useState, useContext } from 'react'
import { Button, Modal } from '@douyinfe/semi-ui'
import { MdKeyboard } from 'react-icons/md'
import { LanguageContext } from '../../contexts/LanguageContext.ts'

const ShortcutsModal: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const currentLanguage = useContext(LanguageContext)
  const data = currentLanguage.shortcutsModal

  return (
    <>
      <Button
        type="tertiary"
        icon={<MdKeyboard size='1.2rem' style={{ color: 'rgba(var(--semi-grey-9), 1)' }} />}
        onClick={() => setVisible(true)}
        style={{ marginRight: '4px' }}
      />
      <Modal
        title={data.title}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        width={520}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '4px 0' }}>
          {data.sections.map((section, si) => (
            <div key={si}>
              <div style={{
                fontWeight: 600,
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--semi-color-text-2)',
                marginBottom: '8px',
                paddingBottom: '4px',
                borderBottom: '1px solid var(--semi-color-border)'
              }}>
                {section.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {section.items.map((item, ii) => (
                  <div key={ii} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '5px 6px',
                    borderRadius: '6px',
                    transition: 'background 0.15s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--semi-color-fill-0)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <span style={{ color: 'var(--semi-color-text-0)', fontSize: '14px' }}>
                      {item.description}
                    </span>
                    <span style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                      {item.key.split('+').map((k, ki) => (
                        <React.Fragment key={ki}>
                          {ki > 0 && <span style={{ color: 'var(--semi-color-text-2)', alignSelf: 'center', fontSize: '12px' }}>+</span>}
                          <kbd style={{
                            display: 'inline-block',
                            padding: '2px 8px',
                            borderRadius: '5px',
                            border: '1px solid var(--semi-color-border)',
                            background: 'var(--semi-color-fill-1)',
                            color: 'var(--semi-color-text-0)',
                            fontFamily: 'monospace',
                            fontSize: '12px',
                            fontWeight: 600,
                            boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
                            lineHeight: '1.6'
                          }}>
                            {k.trim()}
                          </kbd>
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  )
}

export default ShortcutsModal
