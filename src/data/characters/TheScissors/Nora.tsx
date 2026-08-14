import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";

const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Nora,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Nora/icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Nora/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Nora/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Nora/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Nora/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Nora/ultimate.png',
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
