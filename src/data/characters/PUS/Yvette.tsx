import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
	faction: factions.PUS,
	id: PUS.Yvette,
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Yvette/icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Yvette/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Yvette/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Yvette/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Yvette/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Yvette/ultimate.png',
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