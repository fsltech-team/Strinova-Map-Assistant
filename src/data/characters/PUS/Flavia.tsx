import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
	faction: factions.PUS,
	id: PUS.Flavia,
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Flavia/icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Flavia/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Flavia/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Flavia/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Flavia/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Flavia/ultimate.png',
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