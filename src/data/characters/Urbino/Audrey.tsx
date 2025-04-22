import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Audrey,
	attack: {
		canvasImage: 'https://s2.loli.net/2024/09/29/qD7YufUpTmbzX1x.png',
		bodyImage: 'https://cdn.sa.net/2025/04/22/GAv1ONZDR4sphmM.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/26/9PqOBd7owjJrRVp.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/26/pfyJk2RLYsXlBFg.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/26/E6tTWi1Suls5Y9R.png',
				generateOnCanvas: ultimate
			},
			sub: {
				skillIcon: 'https://cdn.sa.net/2024/11/19/iUDp2MuxwXVcd7a.png',
				generateOnCanvas: sub
			}
		}
	},
	defense: {
		canvasImage: 'https://s2.loli.net/2024/09/29/IVhuSTZvYmk4CNj.png',
		bodyImage: 'https://cdn.sa.net/2025/04/22/GAv1ONZDR4sphmM.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/09/26/9PqOBd7owjJrRVp.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/09/26/pfyJk2RLYsXlBFg.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/09/26/E6tTWi1Suls5Y9R.png',
				generateOnCanvas: ultimate
			},
			sub: {
				skillIcon: 'https://cdn.sa.net/2024/11/19/iUDp2MuxwXVcd7a.png',
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