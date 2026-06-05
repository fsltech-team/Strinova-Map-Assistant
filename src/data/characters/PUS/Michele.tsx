import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";

const character: characterData = {
	faction: factions.PUS,
	id: PUS.Michele,
	defense: {
		canvasImage: import.meta.env.BASE_URL + 'images/remote/72af1d33_29JH5SlaTdCwgFR.png',
		bodyImage: import.meta.env.BASE_URL + 'images/remote/c4014084_2MLSe7fg8tsQ3br.png',
		skills: {
			active: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/721cbee2_8iCzWDaNQPSxqvw.png',
				generateOnCanvas: active
			},
			passive: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/e0b6aedf_ANhKZ6GDzOIjPtf.png',
				generateOnCanvas: passive
			},
			tactical: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/421def9e_fvrVnE8Ocl21Dpz.png',
				generateOnCanvas: tactical
			},
			ultimate: {
				skillIcon: import.meta.env.BASE_URL + 'images/remote/23cfae05_UGeEvYfXiSgD4zr.png',
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