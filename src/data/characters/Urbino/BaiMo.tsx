import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
	faction: factions.Urbino,
	id: Urbino.BaiMo,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/remote/7c8c2d42_jt4621ivFRfbEqD.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/87e6036d_o5QTWCxraMFvZuw.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/f231bd6d_eUzu75aSXVw2kQF.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/1521309d_xvVheX57uGJMI2k.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/000421b5_y1ojEJpIOrqbfUm.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/45436d9e_VkyGJKzHYr4pnlm.png',
				generateOnCanvas: ultimate
			}
			
		}
	},
	defense: {	
		canvasImage: import.meta.env.BASE_URL + 'images/remote/01ca04c5_2KrCPXp5k1e6wfm.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/87e6036d_o5QTWCxraMFvZuw.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/f231bd6d_eUzu75aSXVw2kQF.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/1521309d_xvVheX57uGJMI2k.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/000421b5_y1ojEJpIOrqbfUm.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/45436d9e_VkyGJKzHYr4pnlm.png',
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