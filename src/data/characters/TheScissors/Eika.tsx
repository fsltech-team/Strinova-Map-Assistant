import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Eika,
	attack: {
		canvasImage: 'https://s2.loli.net/2024/09/29/SrnDsxX5bAiBNcE.png',
		bodyImage: 'https://cdn.sa.net/2025/04/22/SMVIPh4fqWzRruy.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/SPYXJZwHGObnrmV.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/JYfa5PdE6r4Kcio.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/sFgyUNK7iWtcvfp.png',
				generateOnCanvas: ultimate
			},
			sub: {
				skillIcon: 'https://cdn.sa.net/2024/11/19/to7dWPDVuUFRsIn.png',
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