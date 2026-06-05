export interface AreaEffectData {
  id: string;
  name: string;
  imageLink?: string;
  shape: 'circle' | 'rect';
  radius?: number; // For circle, in meters
  width?: number; // For rect, in meters
  height?: number; // For rect, in meters
  color: string;
}

export const areaEffectsData: AreaEffectData[] = [
  {
    id: "smoke_grenade",
    name: "Grenade Fumigène",
    imageLink: import.meta.env.BASE_URL + "images/remote/03acfeef_4HUeCu6j3KdzfFy.png",
    shape: 'circle',
    radius: 5, // 10m diameter
    color: "#808080"
  },
  {
    id: "yugiri",
    name: "Poison Yugiri",
    imageLink: import.meta.env.BASE_URL + "images/remote/41e1144b_3W2iX0m9WlX0x3e.png",
    shape: 'circle',
    radius: 6.5, // 13m diameter
    color: "#536330"
  },
  {
    id: "square_zone_20x20m",
    name: "Zone Carrée 20x20m",
    shape: 'rect',
    width: 20,
    height: 20,
    color: "#e91e63"
  },
  {
    id: "line_40m",
    name: "Trait 40m",
    shape: 'rect',
    width: 40,
    height: 0.1,
    color: "#9c27b0"
  }
];
