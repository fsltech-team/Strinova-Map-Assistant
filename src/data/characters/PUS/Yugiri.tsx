import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
	faction: factions.PUS,
	id: PUS.Yugiri,
	defense: {
		canvasImage: 'https://s2.loli.net/2024/11/10/Jq58o4vKDYUCcl1.png',
		bodyImage: 'https://cdn.sa.net/2025/04/22/JZ2543e9CUYDh8p.png',
		skills: {
			active: {
				skillIcon: 'https://s2.loli.net/2024/11/10/oW4UsSziGHnhLx2.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: 'https://s2.loli.net/2024/11/10/jBC3dyGxKzmpQf2.png',
				generateOnCanvas: passive
			},
			ultimate: {
				skillIcon: 'https://s2.loli.net/2024/11/10/T3huK4YzAXmrV8N.png',
				generateOnCanvas: ultimate
			},
			sub: {
				skillIcon: 'https://cdn.sa.net/2024/11/19/T4QIuUewCitmjbM.png',
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