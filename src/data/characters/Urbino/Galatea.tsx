import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Galatea,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Galatea/a_icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Galatea/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Galatea/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Galatea/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Galatea/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Galatea/ultimate.png',
				generateOnCanvas: ultimate
			}
		}	
	},
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Galatea/d_icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Galatea/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Galatea/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Galatea/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Galatea/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Galatea/ultimate.png',
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