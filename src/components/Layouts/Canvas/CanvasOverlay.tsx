import React, { useState, useEffect } from 'react'
import { CanvasItem as CanvasItemType } from '../../appShell'
import CanvasItem from './CanvasItem'

interface CanvasOverlayProps {
  items: CanvasItemType[]
  onUpdateItem: (id: string, updates: Partial<CanvasItemType>) => void
  onDeleteItem: (id: string) => void
  style?: React.CSSProperties
  canvasTransform: { x: number; y: number; scale: number }
}

const CanvasOverlay: React.FC<CanvasOverlayProps> = ({ items, onUpdateItem, onDeleteItem, style, canvasTransform }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // If clicking on the canvas container but not on an item, deselect
      if (target.closest('.drawCanvas') && !target.closest('.canvas-item-container')) {
        setSelectedId(null)
      }
    }
    window.addEventListener('mousedown', handleOutsideClick)
    return () => window.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  const transform = {
    x: 0, // Parent is already centered
    y: 0,
    scale: canvasTransform.scale
  }

  return (
    <div
      className='canvas-overlay no-select'
      style={{
        ...style,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
      <div
        style={{
          position: 'absolute',
          left: `${transform.x}px`,
          top: `${transform.y}px`,
          width: `${1000 * transform.scale}px`,
          height: `${1000 * transform.scale}px`,
          pointerEvents: 'none'
        }}>
        {items.map((item) => (
          <CanvasItem
            key={item.id}
            item={item}
            isSelected={selectedId === item.id}
            onSelect={setSelectedId}
            onUpdate={onUpdateItem}
            onDelete={onDeleteItem}
          />
        ))}
      </div>
    </div>
  )
}

export default CanvasOverlay
