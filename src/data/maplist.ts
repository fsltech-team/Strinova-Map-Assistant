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
    imgPrepareLink: import.meta.env.BASE_URL + "images/remote/5f1848f2_Shk6rXTwvAlDGMC.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/remote/2b94e98c_85uxWct3DeRByTO.png",
    meterScale: 10
  }, {
    map: MapName.SpaceLab,
    imgPrepareLink: import.meta.env.BASE_URL + "images/remote/f346f819_QI6hnMtsJpSCKgE.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/remote/ca2efd37_KxUYEBqdlyZ92rC.png",
    meterScale: 10
  }, {
    map: MapName.Khesmet,
    imgPrepareLink: import.meta.env.BASE_URL + "images/remote/736fc2bb_QnNZHhT4wDbFxIO.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/remote/2a54ee5d_jroCB9iqR1l5LDp.png",
    meterScale: 10
  }, {
    map: MapName.EulerPort,
    imgPrepareLink: import.meta.env.BASE_URL + "images/remote/0b26c763_Md2Pa1HKtJyk7oO.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/remote/7be470fc_NGWk2HXwSvmdgOY.png",
    meterScale: 10
  }, {
    map: MapName.CauchyDistrict,
    imgPrepareLink: import.meta.env.BASE_URL + "images/remote/de201f9a_Uw3ftVPQOLu5MCj.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/remote/82e0a783_cLDQtdwAJyr2k7T.png",
    meterScale: 10
  }, {
    map: MapName.Area88,
    imgPrepareLink: import.meta.env.BASE_URL + "images/remote/ca1abe94_wouqxsUy1JaP8l6.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/remote/11864963_YBUsSC78oOrx16W.png",
    meterScale: 10
  }, {
    map: MapName.Base404,
    imgPrepareLink: import.meta.env.BASE_URL + "images/remote/b7b985fc_XfMi4qcV5zmTy78.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/remote/a26771f2_pjGMHJClRsXEoAf.png",
    meterScale: 10
  }, {
    map: MapName.Ocarnus,
    imgPrepareLink: import.meta.env.BASE_URL + "images/remote/60ad943a_HAisD5nj9Plz4dV.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/remote/50252dc5_pzYjVHbdiL3qn7c.webp",
    meterScale: 10
  }, {
    map: MapName.LebrunCity,
    imgPrepareLink: import.meta.env.BASE_URL + "images/remote/lebruncity_prepare.png",
    imgBlankLink: import.meta.env.BASE_URL + "images/remote/lebruncity_blank.png",
    meterScale: 5.5
  }
];

