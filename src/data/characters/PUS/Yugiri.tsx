import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
	faction: factions.PUS,
	id: PUS.Yugiri,
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Yugiri/icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Yugiri/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Yugiri/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Yugiri/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Yugiri/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Yugiri/ultimate.png',
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