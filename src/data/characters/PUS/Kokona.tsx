import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";

const character: characterData = {
	faction: factions.PUS,
	id: PUS.Kokona,
	defense: {
		canvasImage: 'https://s2.loli.net/2024/09/29/jtlryiY8WHIGAMq.png',
		bodyImage: 'https://cdn.sa.net/2025/04/22/nEpdV1chgeNuiry.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/9zFsMYumpwJZrTg.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/V8NijM5onGulX9m.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/tilQp18zRheBMaJ.png',
				generateOnCanvas: ultimate
			},
			sub: {
				skillIcon: 'https://cdn.sa.net/2024/11/19/7lenAEosyt96kbZ.png',
				generateOnCanvas: sub
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

function sub() {
	return;
}

export default character;