import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Reiichi,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Reiichi/icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Reiichi/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Reiichi/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Reiichi/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Reiichi/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Reiichi/ultimate.png',
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