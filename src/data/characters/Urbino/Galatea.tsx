import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.Galatea,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/remote/399e47c3_wpBbSjafRNFD43K.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/f2eadf27_n3XUCkglqNYsyJP.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/29932aaa_UQVBxmGPD9q1tsr.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/0c3d212d_VmDbBPl9ezv5ZgU.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/d9e2b922_bNl54Ze1D7wWkJH.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/35e3fca7_xGpjiLgcUtTJbno.png',
				generateOnCanvas: ultimate
			}
		}	
	},
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/remote/ef48fbb2_t1vlASe5DNRHVZq.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/f2eadf27_n3XUCkglqNYsyJP.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/29932aaa_UQVBxmGPD9q1tsr.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/0c3d212d_VmDbBPl9ezv5ZgU.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/d9e2b922_bNl54Ze1D7wWkJH.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/35e3fca7_xGpjiLgcUtTJbno.png',
				generateOnCanvas: ultimate
			}
		}
	},
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