import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Ming,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Ming/icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Ming/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Ming/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Ming/passive.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Ming/sub.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Ming/ultimate.png',
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