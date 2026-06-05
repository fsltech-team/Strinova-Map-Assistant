import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Lawine,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/remote/2c0a3294_DeK5afJoAhpyNcM.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/2b9823d2_f8dgSBZ2zsvV1jL.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/7defb0bc_gOFlGIzPjxbpYKw.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/070302fd_8AxLszwVIg17WGq.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/a82368fe_E5OzUcFg3DsjGuH.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/a83d2571_HuEnVYb8Mr5e24I.png',
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