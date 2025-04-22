import { characterData } from "../characterRegistry";
import { factions, TheScissors } from "../factions";


const character: characterData = {
	faction: factions.TheScissors,
	id: TheScissors.Mara,
	attack: {
		canvasImage: 'https://cdn.sa.net/2025/04/22/ZKzhmI6U3lPcLb5.png',
		bodyImage: 'https://cdn.sa.net/2025/04/22/Y5fqMzeLCNB63dT.png',
		skills: {
			active: {
				skillIcon: 'https://cdn.sa.net/2025/04/22/WNG8b9KAy154uLj.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://cdn.sa.net/2025/04/22/agB2vCobZk4efJM.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://cdn.sa.net/2025/04/22/vDMeEWlitLqTBIQ.png',
				generateOnCanvas: ultimate
			},
			sub: {
				skillIcon: 'https://cdn.sa.net/2025/04/22/cK4BS6k3DXndMjx.png',
				generateOnCanvas: sub
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

function sub() {
	return;
}

export default character;