import React, { useState, useRef } from 'react'
import { CanvasItem as CanvasItemType } from '../../appShell'

interface CanvasItemProps {
  item: CanvasItemType
  onUpdate: (id: string, updates: Partial<CanvasItemType>) => void
  onDelete: (id: string) => void
  isSelected: boolean
  onSelect: (id: string) => void
}

const CanvasItem: React.FC<CanvasItemProps> = ({ item, onUpdate, onDelete, isSelected, onSelect }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [isRotating, setIsRotating] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(item.value)
  const dragStartPos = useRef({ x: 0, y: 0 })
  const itemStartPos = useRef({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleRotatePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation()
    setIsRotating(true)
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }

  const handleRotatePointerMove = (e: React.PointerEvent) => {
    if (!isRotating) return
    const container = containerRef.current?.parentElement
    if (!container) return

    const rect = container.getBoundingClientRect()
    const centerX = rect.left + (item.x / 1000) * rect.width
    const centerY = rect.top + (item.y / 1000) * rect.height

    const dx = e.clientX - centerX
    const dy = e.clientY - centerY

    let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90
    if (angle < 0) angle += 360

    if (e.shiftKey) {
      angle = Math.round(angle / 15) * 15
    } else {
      angle = Math.round(angle)
    }

    onUpdate(item.id, { rotation: angle })
  }

  const handleRotatePointerUp = (e: React.PointerEvent) => {
    setIsRotating(false)
    if ((e.target as HTMLElement).hasPointerCapture(e.pointerId)) {
      ;(e.target as HTMLElement).releasePointerCapture(e.pointerId)
    }
  }

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isEditing) return
    e.stopPropagation()
    onSelect(item.id)
    setIsDragging(true)
    dragStartPos.current = { x: e.clientX, y: e.clientY }
    itemStartPos.current = { x: item.x, y: item.y }
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || isEditing) return

    // Calculate movement in pixels
    const dx = e.clientX - dragStartPos.current.x
    const dy = e.clientY - dragStartPos.current.y

    // Convert pixels to 1000x1000 units
    const container = e.currentTarget.parentElement as HTMLElement
    const rect = container.getBoundingClientRect()

    const scaleX = 1000 / rect.width
    const scaleY = 1000 / rect.height

    onUpdate(item.id, {
      x: itemStartPos.current.x + dx * scaleX,
      y: itemStartPos.current.y + dy * scaleY
    })
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false)
    if ((e.target as HTMLElement).hasPointerCapture(e.pointerId)) {
      ;(e.target as HTMLElement).releasePointerCapture(e.pointerId)
    }
  }

  const style: React.CSSProperties = {
    position: 'absolute',
    left: `${(item.x / 1000) * 100}%`,
    top: `${(item.y / 1000) * 100}%`,
    transform: `translate(-50%, -50%) rotate(${item.rotation || 0}deg)`,
    cursor: isEditing ? 'text' : isDragging ? 'grabbing' : 'grab',
    userSelect: 'none',
    pointerEvents: 'auto',
    border: isSelected ? '2px solid rgba(77, 238, 234, 1)' : '2px solid transparent',
    padding: '2px',
    borderRadius: '4px',
    zIndex: isSelected ? 100 : 10,
    transition: isDragging ? 'none' : 'border 0.2s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  return (
    <div
      ref={containerRef}
      className='canvas-item-container'
      style={style}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onKeyDown={(e) => e.key === 'Delete' && isSelected && !isEditing && onDelete(item.id)}
      onDoubleClick={() => {
        if (item.type === 'text') {
          setIsEditing(true)
          setEditValue(item.value)
        }
      }}
      tabIndex={0}>
      {item.type === 'image' ? (
        <img
          src={item.value}
          alt={item.name}
          draggable={false}
          style={{ width: item.width ? `${item.width}px` : '35px', pointerEvents: 'none' }}
        />
      ) : item.type === 'areaEffect' ? (
        <svg width={item.width} height={item.height} style={{ overflow: 'visible' }}>
          {item.shape === 'rect' ? (
            <rect
              x={0}
              y={0}
              width={item.width || 0}
              height={item.height || 0}
              fill={item.color}
              fillOpacity={0.3}
              stroke={item.color}
              strokeWidth={2}
            />
          ) : (
            <circle
              cx={(item.width || 0) / 2}
              cy={(item.height || 0) / 2}
              r={(item.width || 0) / 2}
              fill={item.color}
              fillOpacity={0.3}
              stroke={item.color}
              strokeWidth={2}
            />
          )}
        </svg>
      ) : isEditing ? (
        <input
          autoFocus
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={() => {
            setIsEditing(false)
            onUpdate(item.id, { value: editValue })
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              ;(e.currentTarget as HTMLInputElement).blur()
            }
          }}
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            outline: 'none',
            color: item.color || 'white',
            fontSize: item.fontSize,
            fontWeight: 'bold',
            textAlign: 'center',
            width: 'auto',
            minWidth: '50px'
          }}
        />
      ) : (
        <div style={{ color: item.color, fontSize: item.fontSize, fontWeight: 'bold', whiteSpace: 'nowrap' }}>
          {item.value}
        </div>
      )}
      {isSelected && item.type !== 'areaEffect' && (
        <div
          style={{
            position: 'absolute',
            bottom: '-30px',
            display: 'flex',
            gap: '5px',
            background: 'rgba(0,0,0,0.6)',
            padding: '2px 5px',
            borderRadius: '10px',
            pointerEvents: 'auto'
          }}>
          <button
            onClick={(e) => {
              e.stopPropagation()
              const step = item.type === 'text' ? 2 : 5
              if (item.type === 'text') {
                onUpdate(item.id, { fontSize: (item.fontSize || 16) + step })
              } else {
                onUpdate(item.id, {
                  width: (item.width || 35) + step,
                  height: (item.height || 35) + step / (item.width! / item.height!)
                })
              }
            }}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>
            +
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              const step = item.type === 'text' ? 2 : 5
              if (item.type === 'text') {
                onUpdate(item.id, { fontSize: Math.max(8, (item.fontSize || 16) - step) })
              } else {
                onUpdate(item.id, {
                  width: Math.max(10, (item.width || 35) - step),
                  height: Math.max(10, (item.height || 35) - step / (item.width! / item.height!))
                })
              }
            }}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>
            -
          </button>
        </div>
      )}
      {isSelected && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onDelete(item.id)
          }}
          style={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            background: '#ff4d4f',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            cursor: 'pointer',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 110
          }}>
          ×
        </button>
      )}
      {isSelected && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '-30px',
              left: '50%',
              width: '2px',
              height: '30px',
              background: 'rgba(77, 238, 234, 1)',
              transform: 'translateX(-50%)',
              pointerEvents: 'none'
            }}
          />
          <div
            onPointerDown={handleRotatePointerDown}
            onPointerMove={handleRotatePointerMove}
            onPointerUp={handleRotatePointerUp}
            style={{
              position: 'absolute',
              top: '-36px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '12px',
              height: '12px',
              background: 'white',
              border: '2px solid rgba(77, 238, 234, 1)',
              borderRadius: '50%',
              cursor: 'crosshair',
              zIndex: 120,
              pointerEvents: 'auto'
            }}
          />
        </>
      )}
    </div>
  )
}

export default CanvasItem
