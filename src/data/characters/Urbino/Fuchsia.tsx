import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Fuchsia,
	attack: {
		canvasImage: 'https://s2.loli.net/2024/09/29/5Vbc3mYw8KJtTDC.png',
		bodyImage: 'https://cdn.sa.net/2025/04/22/4UIkVEQ1C6tounx.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/tkQ3jlHGeRTDPyn.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/5ZCmFuQhoP3zYnV.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/rOxFKuLX7e5QWhw.png',
				generateOnCanvas: ultimate
			},
			sub: {
				skillIcon: 'https://cdn.sa.net/2024/11/19/PxS2mWOR6TILZF9.png',
				generateOnCanvas: sub
			}
		}
	},
	defense: {
		canvasImage: 'https://s2.loli.net/2024/09/29/TU81atfzDKiRV2o.png',
		bodyImage: 'https://cdn.sa.net/2025/04/22/4UIkVEQ1C6tounx.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/tkQ3jlHGeRTDPyn.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/5ZCmFuQhoP3zYnV.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/rOxFKuLX7e5QWhw.png',
				generateOnCanvas: ultimate
			},
			sub: {
				skillIcon: 'https://cdn.sa.net/2024/11/19/PxS2mWOR6TILZF9.png',
				generateOnCanvas: sub
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

function sub() {
	return;
}

export default character;