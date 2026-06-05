import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
	faction: factions.PUS,
	id: PUS.Flavia,
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/remote/1f571ffb_jC98Rq3NhrUXYWK.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/4e5a6c41_ZcVRCBUJ8PGwn46.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/a9b5293e_58dg6OpPntlviqW.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/eb8bf55a_u5tV9xaNyjUL6EM.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/da2d140a_lYbBufA6raXvQ1n.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/daea7250_ezsVQS62bY5iBcG.png',
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