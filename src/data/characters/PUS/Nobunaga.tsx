import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";

const character: characterData = {
		faction: factions.PUS,
		id: PUS.Nobunaga,
		defense: {
			canvasImage: import.meta.env.BASE_URL + 'images/character/Nobunaga/icon.png',
			bodyImage: import.meta.env.BASE_URL + 'images/character/Nobunaga/body.png',
			skills: {
				active: {
					skillIcon: import.meta.env.BASE_URL + 'images/character/Nobunaga/active.png',
					generateOnCanvas: active
				},
				passive: {
					skillIcon: import.meta.env.BASE_URL + 'images/character/Nobunaga/passive.png',
					generateOnCanvas: passive
				},
				tactical: {
					skillIcon: import.meta.env.BASE_URL + 'images/character/Nobunaga/sub.png',
					generateOnCanvas: tactical
				},
				ultimate: {
					skillIcon: import.meta.env.BASE_URL + 'images/character/Nobunaga/ultimate.png',
					generateOnCanvas: ultimate
				}
			}
		}
}

function active() {
	return;
}

function passive() {
	return;
}

function ultimate() {
	return;
}

function tactical() {
	return;
}

export default character;