import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
	faction: factions.PUS,
	id: PUS.Leona,
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/remote/7994385d_WY9ijCwS7e4OPNM.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/91422b07_snfMAvm1384Qc5h.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/0b05116b_8bA3kca54WlQi96.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/f2bfc901_A45ZR1MXwovaijc.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/0b6bd9eb_so6fhJX7Lp1YAPN.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/b30ab458_snt2Q9EovlWj7Nx.png',
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