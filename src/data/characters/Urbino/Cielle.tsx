import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
  faction: factions.Urbino,
  id: Urbino.Cielle,
  attack: {
    canvasImage: import.meta.env.BASE_URL + 'images/remote/cielle_icone_red.png',
    bodyImage: import.meta.env.BASE_URL + 'images/remote/cielle.png',
    skills: {
      active: {
        skillIcon: import.meta.env.BASE_URL + 'images/remote/activeskill_cielle.png',
        generateOnCanvas: active
      },
      passive: {
        skillIcon: import.meta.env.BASE_URL + 'images/remote/passiveskill_cielle.png',
        generateOnCanvas: passive
      },
      tactical: {
        skillIcon: import.meta.env.BASE_URL + 'images/remote/tacticalskill_cielle.png',
        generateOnCanvas: tactical
      },
      ultimate: {
        skillIcon: import.meta.env.BASE_URL + 'images/remote/ultimate_cielle.png',
        generateOnCanvas: ultimate
      }
    }
  },
  defense: {
    canvasImage: import.meta.env.BASE_URL + 'images/remote/cielle_icone.png',
    bodyImage: import.meta.env.BASE_URL + 'images/remote/cielle.png',
    skills: {
      active: {
        skillIcon: import.meta.env.BASE_URL + 'images/remote/activeskill_cielle.png',
        generateOnCanvas: active
      },
      passive: {
        skillIcon: import.meta.env.BASE_URL + 'images/remote/passiveskill_cielle.png',
        generateOnCanvas: passive
      },
      tactical: {
        skillIcon: import.meta.env.BASE_URL + 'images/remote/tacticalskill_cielle.png',
        generateOnCanvas: tactical
      },
      ultimate: {
        skillIcon: import.meta.env.BASE_URL + 'images/remote/ultimate_cielle.png',
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