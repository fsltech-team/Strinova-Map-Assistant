import { MapName, mapList } from '../data/maplist';

export const getCurrentAppState = ({ presentMap, mapPrepareMode, drawCanvasEditor, canvasItems }: any) => {
    return ({ v: '1.1.0', map: presentMap, mapHighlight: mapPrepareMode, editor: drawCanvasEditor?.export.toJson(), items: canvasItems } as any)
}

export const loadCurrentAppState = ({ json, setPresentMap, setPresentMapURL, setMapPrepareMode, drawCanvasEditor, setCanvasItems, currentPresentMap, currentCanvasItems, currentMapPrepareMode }: any) => {
    if (json.map in MapName && json.map !== currentPresentMap) {
        setPresentMap(json.map)
        for (const mapinfo of mapList) {
            if (mapinfo.map === json.map) {
                drawCanvasEditor?.reset()
                setPresentMapURL({ imgPrepareLink: mapinfo.imgPrepareLink, imgBlankLink: mapinfo.imgBlankLink })
            }
        }
    }
    if(json.mapHighlight != null && json.mapHighlight !== currentMapPrepareMode) {
        setMapPrepareMode(json.mapHighlight)
    }
    if (json.editor) {
        // Safe to reset because this instance only handles drawings, not the map
        drawCanvasEditor?.reset()
        drawCanvasEditor?.import.json(json.editor)
    }
    if (json.items && setCanvasItems) {
        const currentItemsJson = JSON.stringify(currentCanvasItems)
        const incomingItemsJson = JSON.stringify(json.items)
        if (currentItemsJson !== incomingItemsJson) {
            setCanvasItems(json.items)
        }
    }
}

export const save = ({ presentMap, mapPrepareMode, drawCanvasEditor, canvasItems }: any) => {
    const a = document.createElement("a")
    const file = new Blob(
        [JSON.stringify(getCurrentAppState({ presentMap, mapPrepareMode, drawCanvasEditor, canvasItems }))],
        { type: 'text/plain' }
    )
    const Presentdate = new Date()
    const presenttime = Presentdate.getFullYear().toString() + (Presentdate.getMonth() + 1 < 10 ? "0" : "") + (Presentdate.getMonth() + 1).toString() + (Presentdate.getDate() < 10 ? "0" : "") + Presentdate.getDate().toString() + Presentdate.getHours().toString() + Presentdate.getMinutes().toString() + Presentdate.getSeconds().toString()
    a.href = URL.createObjectURL(file)
    a.download = `SMA_${presentMap.replace(/ /g, '_')}_${presenttime}.json`
    a.click()
}

export const load = ({ setPresentMap, setPresentMapURL, setMapPrepareMode, drawCanvasEditor, setCanvasItems }: any) => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = ".json"
    input.addEventListener("change", function (e) {
        const file = (e.target as any).files[0]
        const reader = new FileReader()
        reader.onload = function (e) {
            loadCurrentAppState({ setPresentMap, setPresentMapURL, setMapPrepareMode, drawCanvasEditor, setCanvasItems, json: JSON.parse(e.target!.result as string) })
        }
        reader.readAsText(file)
    });
    input.click()
}
