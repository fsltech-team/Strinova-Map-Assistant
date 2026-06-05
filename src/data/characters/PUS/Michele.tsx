import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";

const character: characterData = {
	faction: factions.PUS,
	id: PUS.Michele,
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Michele/icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Michele/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Michele/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Michele/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Michele/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Michele/ultimate.png',
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