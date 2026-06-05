import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
	faction: factions.PUS,
	id: PUS.Leona,
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Leona/icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Leona/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Leona/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Leona/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Leona/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Leona/ultimate.png',
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