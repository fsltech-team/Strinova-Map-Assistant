import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Celestia,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Celestia/a_icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Celestia/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Celestia/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Celestia/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Celestia/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Celestia/ultimate.png',
				generateOnCanvas: ultimate
			}
		}
	},
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Celestia/d_icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Celestia/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Celestia/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Celestia/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Celestia/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Celestia/ultimate.png',
				generateOnCanvas: ultimate
			}
		}
	},
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