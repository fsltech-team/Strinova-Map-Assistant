import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Meredith,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/remote/e65fec21_C4QmVOhp1rB9Gd6.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/e182fcc9_UvzslOa738JMjBn.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/6e989e80_KWYZTSQmjOHJ2RX.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/5d1830bd_O8kRqCVEDoK6T3p.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/df91e02c_7sSae9nRhO2Ddzg.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/86fb1ee3_V8KZrx9sY7QBlaP.png',
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