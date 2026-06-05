import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.BaiMo,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/BaiMo/a_icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/BaiMo/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/BaiMo/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/BaiMo/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/BaiMo/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/BaiMo/ultimate.png',
				generateOnCanvas: ultimate
			}
			
		}
	},
	defense: {	
		canvasImage: import.meta.env.BASE_URL + 'images/character/BaiMo/d_icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/BaiMo/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/BaiMo/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/BaiMo/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/BaiMo/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/BaiMo/ultimate.png',
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