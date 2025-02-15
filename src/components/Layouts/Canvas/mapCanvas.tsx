import React, { useLayoutEffect } from 'react'
import { Pikaso, type BaseShapes } from 'pikaso'

interface PikasoMapProps {
  pikasoRef: React.RefObject<HTMLDivElement>
  pikasoEditor: Pikaso<BaseShapes> | null
  currentMap: string
  style?: React.CSSProperties
  panelcollaps: boolean
}

const MapCanvas: React.FC<PikasoMapProps> = ({ pikasoRef, pikasoEditor, currentMap, style, panelcollaps }) => {
  let rescaleTO: any
  const rescaleEditor = (timeout: number = 0) => {
    clearTimeout(rescaleTO)
    rescaleTO = setTimeout(() => {
      requestAnimationFrame(() => {
        if (!pikasoEditor) return
        const scaleSize = 1000
        pikasoEditor?.board.stage.setSize({width: scaleSize, height: scaleSize})
        pikasoEditor?.board.rescale()
    
        const image = new Image()
        image.src = currentMap
        
        image.onload = () => {
          const scale = image.height / pikasoEditor!.board.stage.height()
          pikasoEditor?.board.background.setImageFromUrl(currentMap, {
            size: 'contain',
            x: pikasoEditor.board.stage.width() / 2 - image.width / 2 / scale
          })
          // pikasoEditor?.board.rescale()
        }
      })
    },timeout)
  }

  useLayoutEffect(() => {
    rescaleEditor()
    window.addEventListener('resize', ()=>rescaleEditor())
    return () => {
      window.removeEventListener('resize', ()=>rescaleEditor())
    }
  }, [
    currentMap,
    pikasoEditor?.board.background,
  ])
  

  useLayoutEffect(() => {
    rescaleEditor(100)
  }, [panelcollaps])

  return (
    <div
      ref={pikasoRef}
      style={{ ...style, width: '100%', height: '100%' }}
      className='drawMap'></div>
  )
}

export default MapCanvas
