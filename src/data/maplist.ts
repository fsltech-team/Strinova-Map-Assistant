// The value of each key represents the corresponding key in the language file
export enum MapName {
  WindyTown = "WindyTown",
  SpaceLab = "SpaceLab",
  Khesmet = "Khesmet",
  EulerPort = "EulerPort",
  CauchyDistrict = "CauchyDistrict",
  Area88 = "Area88",
  Base404 = "Base404",
  Ocarnus = "Ocarnus",
  LebrunCity = "LebrunCity"
}

interface MapList {
  map: MapName;
  imgPrepareLink: string;
  imgBlankLink: string;
  meterScale: number; // Pixels per meter in the 1000x1000 canvas coordinate space
}

export const mapList: MapList[] = [
  {
    map: MapName.WindyTown,
    imgPrepareLink: import.meta.env.BASE_URL + "images/map/WindyTown_P.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/map/WindyTown_B.png",
    meterScale: 10
  }, {
    map: MapName.SpaceLab,
    imgPrepareLink: import.meta.env.BASE_URL + "images/map/SpaceLab_P.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/map/SpaceLab_B.png",
    meterScale: 10
  }, {
    map: MapName.Khesmet,
    imgPrepareLink: import.meta.env.BASE_URL + "images/map/Khesmet_P.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/map/Khesmet_B.png",
    meterScale: 10
  }, {
    map: MapName.EulerPort,
    imgPrepareLink: import.meta.env.BASE_URL + "images/map/EulerPort_P.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/map/EulerPort_B.png",
    meterScale: 10
  }, {
    map: MapName.CauchyDistrict,
    imgPrepareLink: import.meta.env.BASE_URL + "images/map/CauchyDistrict_P.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/map/CauchyDistrict_B.png",
    meterScale: 10
  }, {
    map: MapName.Area88,
    imgPrepareLink: import.meta.env.BASE_URL + "images/map/Area88_P.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/map/Area88_B.png",
    meterScale: 10
  }, {
    map: MapName.Base404,
    imgPrepareLink: import.meta.env.BASE_URL + "images/map/Base404_P.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/map/Base404_B.png",
    meterScale: 10
  }, {
    map: MapName.Ocarnus,
    imgPrepareLink: import.meta.env.BASE_URL + "images/map/Ocarnus_P.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/map/Ocarnus_B.png",
    meterScale: 10
  }, {
    map: MapName.LebrunCity,
    imgPrepareLink: import.meta.env.BASE_URL + "images/map/LebrunCity_P.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/map/LebrunCity_B.png",
    meterScale: 5.5
  }
];

