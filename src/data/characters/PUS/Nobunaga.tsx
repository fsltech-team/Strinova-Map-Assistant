import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";

const character: characterData = {
		faction: factions.PUS,
		id: PUS.Nobunaga,
		defense: {
			canvasImage: import.meta.env.BASE_URL + 'images/remote/7d4208d9_7UuX5VTR8AYWD2o.png',
			bodyImage: import.meta.env.BASE_URL + 'images/remote/2e63f1ea_nvuOWPyjXK3Fif9.png',
			skills: {
				active: {
					skillIcon: import.meta.env.BASE_URL + 'images/remote/e8762604_VJFzGhSyXmsiHpO.png',
					generateOnCanvas: active
				},
				passive: {
					skillIcon: import.meta.env.BASE_URL + 'images/remote/0acc8676_AHsc9o8W25UlpNa.png',
					generateOnCanvas: passive
				},
				tactical: {
					skillIcon: import.meta.env.BASE_URL + 'images/remote/62a963ca_MTjuAvcKSq6RNiU.png',
					generateOnCanvas: tactical
				},
				ultimate: {
					skillIcon: import.meta.env.BASE_URL + 'images/remote/ae864240_Vr78sb9T32ADMuy.png',
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