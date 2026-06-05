import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Mara,
	attack: {
		canvasImage: import.meta.env.BASE_URL + 'images/remote/7555455e_ZKzhmI6U3lPcLb5.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/f6ae7b74_Y5fqMzeLCNB63dT.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/cc633479_WNG8b9KAy154uLj.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/b2b8c180_agB2vCobZk4efJM.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/5b8ff4bc_cK4BS6k3DXndMjx.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/19f52ed6_vDMeEWlitLqTBIQ.png',
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