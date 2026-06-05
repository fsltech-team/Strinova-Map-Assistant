import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Reiichi,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/remote/3788ee06_txSOyYkT4pXhGBn.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/0954400a_Tu2C4q3OdFX6Ulk.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/70040a4d_C6qts5xeVpS1N4E.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/bb0edf84_iuSvZDYnFTzmBrl.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/0f8129a0_daOIybnpUr8QtVz.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/0a8b8c21_bESOlDh9oURvFC3.png',
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