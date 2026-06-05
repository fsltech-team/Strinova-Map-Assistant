import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Audrey,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/remote/59e66937_qD7YufUpTmbzX1x.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/8254a356_GAv1ONZDR4sphmM.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/82a0b83e_9PqOBd7owjJrRVp.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/d58129a7_pfyJk2RLYsXlBFg.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/434029c7_iUDp2MuxwXVcd7a.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/c758ab58_E6tTWi1Suls5Y9R.png',
				generateOnCanvas: ultimate
			}
		}
	},
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/remote/22f8a2ec_IVhuSTZvYmk4CNj.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/8254a356_GAv1ONZDR4sphmM.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/82a0b83e_9PqOBd7owjJrRVp.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/d58129a7_pfyJk2RLYsXlBFg.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/434029c7_iUDp2MuxwXVcd7a.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/c758ab58_E6tTWi1Suls5Y9R.png',
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