import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Eika,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/character/Eika/icon.png',
		bodyImage: import.meta.env.BASE_URL + 'images/character/Eika/body.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Eika/active.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Eika/passive.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Eika/ultimate.png',
				generateOnCanvas: ultimate
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/character/Eika/sub.png',
				generateOnCanvas: tactical
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