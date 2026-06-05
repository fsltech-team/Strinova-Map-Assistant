import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Fuchsia,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/remote/86ba76e3_5Vbc3mYw8KJtTDC.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/62d2ef4e_4UIkVEQ1C6tounx.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/f68f21f7_tkQ3jlHGeRTDPyn.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/81449a18_5ZCmFuQhoP3zYnV.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/1a82db67_PxS2mWOR6TILZF9.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/d4121809_rOxFKuLX7e5QWhw.png',
				generateOnCanvas: ultimate
			}
		}
	},
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/remote/5c952eb1_TU81atfzDKiRV2o.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/62d2ef4e_4UIkVEQ1C6tounx.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/f68f21f7_tkQ3jlHGeRTDPyn.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/81449a18_5ZCmFuQhoP3zYnV.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/1a82db67_PxS2mWOR6TILZF9.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/d4121809_rOxFKuLX7e5QWhw.png',
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