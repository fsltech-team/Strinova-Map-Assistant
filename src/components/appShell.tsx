
import React, { useState } from 'react';
import { i18nData, Languages } from '../data/i18n';
import { Layout } from '@douyinfe/semi-ui';
import { characterData, characterRegistry } from '../data/characters/characterRegistry';
import { MapName, mapList } from '../data/maplist';
import { save, load } from '../data/stateManagement';
import { mapTools, colorPalette } from '../utils/canvasConstants';
import DrawMap from './Layouts/Canvas/drawCanvas';
import MapCanvas from './Layouts/Canvas/mapCanvas';
import FooterContent from './Layouts/FooterContent';
import HeaderContent from './Layouts/HeaderContent';
import SiderContent from './Layouts/Sider/SiderContent.tsx';
import SiderTools from './Layouts/SiderTools';
import SkillSider from './Layouts/SkillSider';
import usePikaso from 'pikaso-react-hook';
import { getLanguage, LanguageContext, saveLanguage } from '../contexts/LanguageContext.ts'
import { getTheme, saveTheme, ThemeContext, ThemeType } from '../contexts/ThemeContext.ts'

interface AppShellProps {
	characterData: characterRegistry
}

const AppShell: React.FC<AppShellProps> = ({ characterData }) => {
	const [drawCanvasRef, drawCanvasEditor] = usePikaso({
		selection: {
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

	const [selectedCharacter, setSelectedCharacter] = useState<characterData | null>(null)

	const [canvasTool, setTool] = useState<mapTools>('SELECT')
	const [penColor, setpenColor] = useState(colorPalette[2])

	const [penWidth, setpenWidth] = useState(2)
	const [lineWidth, setLineWidth] = useState(2)

	const [mapPrepareMode, setMapPrepareMode] = useState(true)
	const [currentSiderSide, setCurrentSiderSide] = useState<'attack' | 'defense'>('attack')
	const [presentMapURL, setPresentMapURL] = useState({
		imgPrepareLink: mapList[0].imgPrepareLink,
		imgBlankLink: mapList[0].imgBlankLink
	})

	const { Header, Footer, Sider, Content } = Layout

	const currentLanguage = i18nData[presentLanguage]

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

	const saveFile = () => {
		save({ presentMap, drawCanvasEditor })
	}

	const loadFile = () => {
		load({ setPresentMap, setPresentMapURL, drawCanvasEditor })
	}

	const canvases = (
		<div id="capture" style={{ overflow: 'hidden', position: 'relative', top: 0, left: 0, width: '100%', height: '100%' }}>
			<div className='no-select' style={{ position: "absolute", bottom: "20px", opacity: 0.1, fontSize: "25px", marginLeft: "30px" }}>
				<div>Strinova Map Assistant</div>
				<div style={{ fontSize: "18px" }}>strinova.fsltech.cn</div>
			</div>
			<MapCanvas
				currentMap={mapPrepareMode ? presentMapURL.imgPrepareLink : presentMapURL.imgBlankLink}
				pikasoEditor={drawMapEditor}
				setCurrentMap={setPresentMap}
				pikasoRef={drawMapRef}
				style={{ position: 'absolute', top: '0', left: '0' }}
			/>
			<DrawMap
				pikasoRef={drawCanvasRef}
				pikasoEditor={drawCanvasEditor}
				currentMap={mapPrepareMode ? presentMapURL.imgPrepareLink : presentMapURL.imgBlankLink}
				canvasTool={canvasTool}
				lineWidth={lineWidth}
				penColor={penColor}
				penWidth={penWidth}
			/>
		</div>
	);

	return (
		<LanguageContext.Provider value={currentLanguage}>
			<ThemeContext.Provider value={presentTheme}>
				<Layout
					style={{
						border: '1px solid var(--semi-color-border)',
						height: '100%',
						width: '100%',
						minHeight: '720px',
						minWidth: '1280px'
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
						<Sider style={{ backgroundColor: 'var(--semi-color-bg-1)', width: '320px' }}>
							<SiderContent characterRegistry={characterData} setSelectedCharacter={setSelectedCharacter} setSiderSide={setCurrentSiderSide} />
						</Sider>
						<Sider
							style={{
								backgroundColor: 'var(--semi-color-bg-1)',
								width: '4rem',
								height: '100%',
								border: '1px solid var(--semi-color-border)'
							}}>
							<SkillSider currentSiderSide={currentSiderSide} selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter} />
						</Sider>
						<Content
							style={{
								backgroundColor: 'var(--semi-color-bg-2)',
								height: '100%',
								display: 'flex',
								placeItems: 'center',
								padding: '0 auto'
							}}>
							{canvases}
						</Content>
						<Sider style={{ backgroundColor: 'var(--semi-color-bg-1)', width: '4rem' }}>
							<SiderTools
								canvasTool={canvasTool}
								setTool={setTool}
								penColor={penColor}
								penWidth={penWidth}
								setpenWidth={setpenWidth}
								setLineWidth={setLineWidth}
								lineWidth={lineWidth}
								editor={drawCanvasEditor}
								setPenColor={setpenColor}
								save={saveFile}
								load={loadFile}
							/>
						</Sider>
					</Layout>
					<Footer style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
						<FooterContent />
					</Footer>
				</Layout>
			</ThemeContext.Provider>
		</LanguageContext.Provider>
	);
};

export default AppShell;