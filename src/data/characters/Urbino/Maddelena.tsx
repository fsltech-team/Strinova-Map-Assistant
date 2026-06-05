import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Maddelena,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Maddelena/a_icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Maddelena/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Maddelena/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Maddelena/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Maddelena/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Maddelena/ultimate.png',
				generateOnCanvas: ultimate
			}
		}	
	},
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Maddelena/d_icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Maddelena/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Maddelena/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Maddelena/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Maddelena/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Maddelena/ultimate.png',
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