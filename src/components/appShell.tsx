
import React, { useState, useLayoutEffect } from 'react';
import { i18nData } from '../data/i18n';
import { Layout, LocaleProvider } from '@douyinfe/semi-ui';
import { characterRegistry } from '../data/characters/characterRegistry';
import { MapName, mapList } from '../data/maplist';
import { save, load, loadCurrentAppState } from '../data/stateManagement';
import { mapTools, loadColors } from '../utils/canvasConstants';
import DrawMap from './Layouts/Canvas/drawCanvas';
import MapCanvas from './Layouts/Canvas/mapCanvas';
import CanvasOverlay from './Layouts/Canvas/CanvasOverlay';
import FooterContent from './Layouts/Footer/FooterContent.tsx';
import HeaderContent from './Layouts/HeaderContent';
import SiderContent from './Layouts/Sider/SiderContent.tsx';
import SiderTools from './Layouts/SiderTools';
import Magnifier from './Magnifier/Magnifier';
import usePikaso from 'pikaso-react-hook';
import { getLanguage, LanguageContext, saveLanguage } from '../contexts/LanguageContext.ts'
import { getTheme, saveTheme, ThemeContext, ThemeType } from '../contexts/ThemeContext.ts'

import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { Languages } from '../types/interface.ts';

import { Locale } from '@douyinfe/semi-ui/lib/es/locale/interface';
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN';
import ja_JP from '@douyinfe/semi-ui/lib/es/locale/source/ja_JP';
import fr_FR from '@douyinfe/semi-ui/lib/es/locale/source/fr';

interface AppShellProps {
	characterData: characterRegistry
}

export interface CanvasItem {
	id: string
	type: 'image' | 'text' | 'areaEffect'
	name?: string
	value: string // image URL or text content
	x: number // 1000x1000 stage space
	y: number
	color?: string
	fontSize?: number
	width?: number
	height?: number
	rotation?: number
	shape?: 'circle' | 'rect'
}

const AppShell: React.FC<AppShellProps> = ({ characterData }) => {
	const [drawCanvasRef, drawCanvasEditor] = usePikaso({
		width: 1000,
		height: 1000,
		selection: {
			interactive: true,
			transformer: {
				borderStroke: 'rgba(77, 238, 234, 1)',
				anchorStroke: 'rgba(77, 238, 234, 1)',
				anchorFill: 'rgba(77, 238, 234, 1)'
			},
			zone: {
				fill: 'rgba(77, 238, 234, 0.1)',
				stroke: 'rgba(77, 238, 234, 1)'
			}
		}
	})
	const [drawMapRef, drawMapEditor] = usePikaso({
		width: 1000,
		height: 1000,
		selection: {
			interactive: false,
			keyboard: {
				enabled: false
			}
		},
		disableCanvasContextMenu: true,
		history: {
			keyboard: {
				enabled: false
			}
		}
	})

	const [presentLanguage, setPresentLanguage] = useState<Languages>(getLanguage)
	const [presentMap, setPresentMap] = useState(MapName.WindyTown)
	const [presentTheme, setPresentTheme] = useState<ThemeType>(getTheme)
	const [panelcollaps, setPanelcollaps] = useState(false)
	const [magnifierVisible, setMagnifierVisible] = useState(false)
	const [magnifierTargetPos, setMagnifierTargetPos] = useState({ x: 500, y: 500 })

	const colorPalette = loadColors()
	const [canvasTool, setTool] = useState<mapTools>('SELECT')
	const [penColor, setpenColor] = useState(colorPalette[2])
	const [colors, setColors] = useState<Array<string>>(colorPalette)
	const [selectedColor, setSelectedColor] = useState(-1)

	const [penWidth, setpenWidth] = useState(2)
	const [lineWidth, setLineWidth] = useState(2)
	const [fontSize, setFontSize] = useState(2)

	const [mapPrepareMode, setMapPrepareMode] = useState(true)
	const [canvasItems, setCanvasItems] = useState<CanvasItem[]>([])

	const [presentMapURL, setPresentMapURL] = useState({
		imgPrepareLink: mapList[0].imgPrepareLink,
		imgBlankLink: mapList[0].imgBlankLink
	})

	const { Header, Footer, Sider, Content } = Layout

	const currentLanguage = i18nData[presentLanguage as keyof typeof i18nData]

	document.body.setAttribute("theme-mode", presentTheme)

	const setLanguage = (lang: Languages) => {
		setPresentLanguage(lang)
		saveLanguage(lang)
	}

	const setTheme = (theme: ThemeType) => {
		setPresentTheme(theme)
		saveTheme(theme)
		document.body.setAttribute("theme-mode", theme)
	}

	const handleAddCanvasItem = (item: Omit<CanvasItem, 'id'>) => {
		const newItem: CanvasItem = {
			...item,
			id: Math.random().toString(36).substring(2, 9)
		}
		setCanvasItems(prev => [...prev, newItem])
	}

	const handleUpdateCanvasItem = (id: string, updates: Partial<CanvasItem>) => {
		setCanvasItems(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item))
	}

	const handleDeleteCanvasItem = (id: string) => {
		setCanvasItems(prev => prev.filter(item => item.id !== id))
	}

	const saveFile = () => {
		save({ presentMap, mapPrepareMode, drawCanvasEditor, canvasItems })
	}

	const loadFile = () => {
		load({ setPresentMap, setPresentMapURL, setMapPrepareMode, drawCanvasEditor, setCanvasItems })
	}

	const loadJson = (json: any) => {
		loadCurrentAppState({ json, setPresentMap, setPresentMapURL, setMapPrepareMode, drawCanvasEditor, setCanvasItems })
	}

	// Shared centering logic
	const [canvasTransform, setCanvasTransform] = useState({ x: 0, y: 0, scale: 1 })
	useLayoutEffect(() => {
		const sync = () => {
			const container = document.getElementById('capture')
			if (!container) return
			const rect = container.getBoundingClientRect()
			const scale = Math.min(rect.width / 1000, rect.height / 1000)
			const x = (rect.width - 1000 * scale) / 2
			const y = (rect.height - 1000 * scale) / 2
			setCanvasTransform({ x, y, scale })
		}
		sync()
		window.addEventListener('resize', sync)
		return () => window.removeEventListener('resize', sync)
	}, [panelcollaps])

	const canvases = (
		<div id="capture" 
			onPointerDown={(e) => {
				// Only update magnifier target if it's visible AND the Alt key is pressed.
				// This prevents the magnifier from jumping when selecting icons or drawing.
				if (magnifierVisible && e.altKey) {
					// Convert click to logical 0-1000
					const rect = e.currentTarget.getBoundingClientRect()
					const x = ((e.clientX - rect.left - canvasTransform.x) / canvasTransform.scale / 1000) * 1000
					const y = ((e.clientY - rect.top - canvasTransform.y) / canvasTransform.scale / 1000) * 1000
					setMagnifierTargetPos({ x, y })
				}
			}}
			style={{ 
			overflow: 'hidden', 
			position: 'relative', 
			top: 0, 
			left: 0, 
			width: '100%', 
			height: '100%',
			userSelect: 'none',
			WebkitUserSelect: 'none'
		}}>
			<div className='no-select' style={{ position: "absolute", bottom: "20px", opacity: 0.1, fontSize: "25px", marginLeft: "30px" }}>
				<div>Strinova Map Assistant</div>
				<div style={{ fontSize: "18px" }}>khaos-experiences.fr/sma</div>
			</div>
			<div style={{
				position: 'absolute',
				left: `${canvasTransform.x}px`,
				top: `${canvasTransform.y}px`,
				width: `${1000 * canvasTransform.scale}px`,
				height: `${1000 * canvasTransform.scale}px`,
			}}>
				<MapCanvas
					currentMap={mapPrepareMode ? presentMapURL.imgPrepareLink : presentMapURL.imgBlankLink}
					pikasoEditor={drawMapEditor}
					pikasoRef={drawMapRef}
					style={{ position: 'absolute', top: '0', left: '0', pointerEvents: 'none', zIndex: 1 }}
					panelcollaps={panelcollaps}
					canvasTransform={canvasTransform}
				/>
				<DrawMap
					pikasoRef={drawCanvasRef}
					pikasoEditor={drawCanvasEditor}
					currentMap={mapPrepareMode ? presentMapURL.imgPrepareLink : presentMapURL.imgBlankLink}
					canvasTool={canvasTool}
					setTool={setTool}
					lineWidth={lineWidth}
					fontSize={fontSize}
					penColor={penColor}
					penWidth={penWidth}
					load={loadJson}
					panelcollaps={panelcollaps}
					onAddItem={handleAddCanvasItem}
					style={{ position: 'absolute', top: '0', left: '0', pointerEvents: 'auto', zIndex: 10 }}
					canvasTransform={canvasTransform}
					meterScale={mapList.find(m => m.map === presentMap)?.meterScale || 10}
				/>
				<CanvasOverlay
					items={canvasItems}
					onUpdateItem={handleUpdateCanvasItem}
					onDeleteItem={handleDeleteCanvasItem}
					style={{ position: 'absolute', top: '0', left: '0', zIndex: 20 }}
					canvasTransform={canvasTransform}
				/>
			</div>
		</div>
	);

	const localeMap: {
		[key in Languages]: Locale
	} = {
		English: en_US,
		日本語: ja_JP,
		简体中文: zh_CN,
		Français: fr_FR,
	}

	return (
		<LocaleProvider locale={localeMap[presentLanguage]}>
			<LanguageContext.Provider value={currentLanguage}>
				<ThemeContext.Provider value={presentTheme}>
					<Layout
						style={{
							border: '1px solid var(--semi-color-border)',
							height: '100%',
							width: '100%',
						}}>
						<Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
							{/* This takes language mode because of the language switcher */}
							<HeaderContent
								editor={drawCanvasEditor}
								currentMap={presentMap}
								changeLanguage={setLanguage}
								changeTheme={setTheme}
								setPresentMap={setPresentMap}
								setPresentMapURL={setPresentMapURL}
								mapPrepareMode={mapPrepareMode}
								setMapPrepareMode={setMapPrepareMode}
							/>
						</Header>
						<Layout>
							<Sider style={{ backgroundColor: 'var(--semi-color-bg-1)', height: "100%", position: "relative" }}>
								<SiderContent characterRegistry={characterData} collaps={panelcollaps} />
								<button
									style={{ position: "absolute", width: "50px", height: "50px", backgroundColor: "var(--semi-color-bg-1)", color: "var(--semi-color-bg-7)" }}
									onClick={() => setPanelcollaps(!panelcollaps)}>
									{panelcollaps ? <TbLayoutSidebarLeftExpand /> : <TbLayoutSidebarLeftCollapse />}
								</button>
							</Sider>
							<Content
								style={{
									backgroundColor: 'var(--semi-color-bg-2)',
									height: '100%',
									width: "100%",
									display: 'flex',
									placeItems: 'center',
									padding: '0 auto'
								}}>
								{canvases}
							</Content>
							<span className='minHeightAvailable' style={{ overflowX: 'hidden', overflowY: 'auto', maxHeight: 'calc(100svh - 7.5rem)', minWidth:'3.5rem' }}>
								<span style={{display: 'table'}}>
									<Sider style={{ backgroundColor: 'var(--semi-color-bg-1)', width: '3.5rem' }}>
										<SiderTools
											canvasTool={canvasTool}
											setTool={setTool}
											penColor={penColor}
											penWidth={penWidth}
											setpenWidth={setpenWidth}
											setLineWidth={setLineWidth}
											lineWidth={lineWidth}
											fontSize={fontSize}
											setFontSize={setFontSize}
											editor={drawCanvasEditor}
											setPenColor={setpenColor}
											colors={colors}
											setColors={setColors}
											selectedColor={selectedColor}
											setSelectedColor={setSelectedColor}
											save={saveFile}
											load={loadFile}
											magnifierVisible={magnifierVisible}
											setMagnifierVisible={setMagnifierVisible}
										/>
									</Sider>
								</span>
							</span>
						</Layout>
						<Footer style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
							<FooterContent />
						</Footer>
					</Layout>
					<Magnifier 
						visible={magnifierVisible} 
						onClose={() => setMagnifierVisible(false)} 
						targetPos={magnifierTargetPos}
						items={canvasItems}
						canvasTransform={canvasTransform}
					/>
				</ThemeContext.Provider>
			</LanguageContext.Provider>
		</LocaleProvider>
	);
};

export default AppShell;