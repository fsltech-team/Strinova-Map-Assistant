import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Audrey,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Audrey/a_icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Audrey/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Audrey/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Audrey/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Audrey/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Audrey/ultimate.png',
				generateOnCanvas: ultimate
			}
		}
	},
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Audrey/d_icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Audrey/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Audrey/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Audrey/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Audrey/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Audrey/ultimate.png',
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