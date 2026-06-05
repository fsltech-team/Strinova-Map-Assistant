import React, { useLayoutEffect, useRef, useCallback } from 'react'
import { Pikaso, type BaseShapes } from 'pikaso'

interface PikasoMapProps {
  pikasoRef: React.RefObject<HTMLDivElement>
  pikasoEditor: Pikaso<BaseShapes> | null
  currentMap: string
  style?: React.CSSProperties
  panelcollaps: boolean
  canvasTransform: { x: number, y: number, scale: number }
}

const MapCanvas: React.FC<PikasoMapProps> = ({ pikasoRef, pikasoEditor, currentMap, style, panelcollaps, canvasTransform }) => {
  const rescaleTO = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rescaleEditor = useCallback((timeout: number = 0) => {
    if (rescaleTO.current !== null) clearTimeout(rescaleTO.current)
    rescaleTO.current = setTimeout(() => {
      requestAnimationFrame(() => {
        if (!pikasoEditor) return
        const size = 1000 * canvasTransform.scale
        pikasoEditor.board.stage.setSize({
          width: size,
          height: size
        })
        pikasoEditor.board.rescale()
    
        pikasoEditor.board.background.setImageFromUrl(currentMap, {
          size: 'contain'
        })
      })
    }, timeout)
  }, [pikasoEditor, currentMap, canvasTransform.scale])

  useLayoutEffect(() => {
    const handleResize = () => rescaleEditor()
    rescaleEditor()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [rescaleEditor, currentMap, pikasoEditor?.board.background])

  useLayoutEffect(() => {
    rescaleEditor(100)
  }, [rescaleEditor, panelcollaps])

  return (
    <div
      ref={pikasoRef}
      style={{ ...style, width: '100%', height: '100%' }}
      className='drawMap'></div>
  )
}

export default MapCanvas
