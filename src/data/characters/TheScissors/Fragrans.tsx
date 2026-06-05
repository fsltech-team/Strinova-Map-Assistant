import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Fragrans,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/remote/fa72cb3c_AM58XCKyixJlTGO.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/598755c0_6cwHibDP9QmfuVC.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/ddc13f1f_L9j3uWBrl5hNyzx.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/d07d8431_B3HDdTpLjAyYQ74.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/8f282e0d_JrTleR2xkfPysaA.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/639cf6c5_5Xk9PUOlwFsgE6B.png',
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