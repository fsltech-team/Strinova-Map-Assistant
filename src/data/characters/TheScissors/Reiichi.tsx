import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Reiichi,
	attack: {
		canvasImage: 'https://s2.loli.net/2024/09/29/txSOyYkT4pXhGBn.png',
		bodyImage: 'https://cdn.sa.net/2025/04/22/Tu2C4q3OdFX6Ulk.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/25/C6qts5xeVpS1N4E.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/25/iuSvZDYnFTzmBrl.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/25/bESOlDh9oURvFC3.png',
				generateOnCanvas: ultimate
			},
			sub: {
				skillIcon: 'https://cdn.sa.net/2024/11/19/daOIybnpUr8QtVz.png',
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