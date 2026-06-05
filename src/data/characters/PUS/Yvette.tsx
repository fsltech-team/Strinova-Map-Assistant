import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
	faction: factions.PUS,
	id: PUS.Yvette,
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/remote/27720b57_eIVFmswk3tUlOcR.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/fa6cc966_AjGNVF4JLazbfHP.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/53aa8a5b_ESH6FNKQjbafMZn.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/30617d8a_2hqoyUWsnbA83BP.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/d94a72ee_Hzo6W4y8ib5ceqf.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/15a053ce_32VnSv59tPwTIhl.png',
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