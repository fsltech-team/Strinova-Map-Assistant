import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Fuchsia,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Fuchsia/a_icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Fuchsia/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Fuchsia/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Fuchsia/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Fuchsia/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Fuchsia/ultimate.png',
				generateOnCanvas: ultimate
			}
		}
	},
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Fuchsia/d_icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Fuchsia/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Fuchsia/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Fuchsia/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Fuchsia/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Fuchsia/ultimate.png',
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