import { MapName, mapList } from '../data/maplist';

export const getCurrentAppState = ({
  presentMap,
  mapPrepareMode,
  drawCanvasEditor,
}: any) => {
  return {
    v: '1.0.0',
    map: presentMap,
    mapHighlight: mapPrepareMode,
    editor: drawCanvasEditor?.export.toJson(),
  } as any;
};

export const loadCurrentAppState = ({
  json,
  setPresentMap,
  setPresentMapURL,
  setMapPrepareMode,
  drawCanvasEditor,
}: any) => {
  if (json.map in MapName) {
    setPresentMap(json.map);
    for (const mapinfo of mapList) {
      if (mapinfo.map === json.map) {
        drawCanvasEditor?.reset();
        setPresentMapURL({
          imgPrepareLink: mapinfo.imgPrepareLink,
          imgBlankLink: mapinfo.imgBlankLink,
        });
      }
    }
  }
  if (json.mapHighlight != null) {
    setMapPrepareMode(json.mapHighlight);
  }
  if (json.editor) {
    drawCanvasEditor?.import.json(json.editor);
  }
};

export const save = ({ presentMap, mapPrepareMode, drawCanvasEditor }: any) => {
  const a = document.createElement('a');
  const file = new Blob(
    [
      JSON.stringify(
        getCurrentAppState({ presentMap, mapPrepareMode, drawCanvasEditor }),
      ),
    ],
    { type: 'text/plain' },
  );
  const Presentdate = new Date();
  const presenttime =
    Presentdate.getFullYear().toString() +
    (Presentdate.getMonth() + 1 < 10 ? '0' : '') +
    (Presentdate.getMonth() + 1).toString() +
    (Presentdate.getDate() < 10 ? '0' : '') +
    Presentdate.getDate().toString() +
    Presentdate.getHours().toString() +
    Presentdate.getMinutes().toString() +
    Presentdate.getSeconds().toString();
  a.href = URL.createObjectURL(file);
  a.download = `SMA_${presentMap.replace(/ /g, '_')}_${presenttime}.json`;
  a.click();
};

export const load = ({
  setPresentMap,
  setPresentMapURL,
  setMapPrepareMode,
  drawCanvasEditor,
}: any) => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.addEventListener('change', function (e) {
    const file = (e.target as any).files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      loadCurrentAppState({
        setPresentMap,
        setPresentMapURL,
        setMapPrepareMode,
        drawCanvasEditor,
        json: JSON.parse(e.target!.result as string),
      });
    };
    reader.readAsText(file);
  });
  input.click();
};
