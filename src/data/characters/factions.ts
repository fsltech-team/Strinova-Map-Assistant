export enum factions {
	PUS = "PUS",
	TheScissors = "TheScissors",
	Urbino = "Urbino"
}

export enum PUS {
	Michele = "Michele",
	Nobunaga = "Nobunaga",
	Kokona = "Kokona",
	Yvette = "Yvette",
	Flavia = "Flavia",
	Yugiri = "Yugiri",
	Leona = "Leona",
	Chiyo = "Chiyo"
}

export enum TheScissors {
	Ming = "Ming",
	Lawine = "Lawine",
	Meredith = "Meredith",
	Reiichi = "Reiichi",
	Kanami = "Kanami",
	Eika = "Eika",
	Fragrans = "Fragrans",
	Mara = "Mara"
}

export enum Urbino {
	Celestia = "Celestia",
	Audrey = "Audrey",
	Maddelena = "Maddelena",
	Fuchsia = "Fuchsia",
	BaiMo = "BaiMo",
	Galatea = "Galatea",
	Cielle = "Cielle"
}

type factionData = {
	[key in factions]: {
		faction: factions;
		previewImage: string;
	}
}

export const factionsData: factionData = {
	PUS: {
		faction: factions.PUS,
		previewImage: import.meta.env.BASE_URL + "images/remote/4ef46da3_1El6anYx4qhPbo2.png"
	},
	TheScissors: {
		faction: factions.TheScissors,
		previewImage: import.meta.env.BASE_URL + "images/remote/ab662df9_PY4HMU7fbQ32Dr1.png"
	},
	Urbino: {
		faction: factions.Urbino,
		previewImage: import.meta.env.BASE_URL + "images/remote/b366d340_hyPUcLZdMNaeOjI.png"
	}
}