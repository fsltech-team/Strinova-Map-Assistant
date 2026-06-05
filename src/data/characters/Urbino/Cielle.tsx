import { characterData } from "../characterRegistry";
import { factions, Urbino } from "../factions";


const character: characterData = {
  faction: factions.Urbino,
  id: Urbino.Cielle,
  attack: {
    canvasImage: import.meta.env.BASE_URL + 'images/character/Cielle/a_icon.png',
    bodyImage: import.meta.env.BASE_URL + 'images/character/Cielle/body.png',
    skills: {
      active: {
        skillIcon: import.meta.env.BASE_URL + 'images/character/Cielle/active.png',
        generateOnCanvas: active
      },
      passive: {
        skillIcon: import.meta.env.BASE_URL + 'images/character/Cielle/passive.png',
        generateOnCanvas: passive
      },
      tactical: {
        skillIcon: import.meta.env.BASE_URL + 'images/character/Cielle/sub.png',
        generateOnCanvas: tactical
      },
      ultimate: {
        skillIcon: import.meta.env.BASE_URL + 'images/character/Cielle/ultimate.png',
        generateOnCanvas: ultimate
      }
    }
  },
  defense: {
    canvasImage: import.meta.env.BASE_URL + 'images/character/Cielle/d_icon.png',
    bodyImage: import.meta.env.BASE_URL + 'images/character/Cielle/body.png',
    skills: {
      active: {
        skillIcon: import.meta.env.BASE_URL + 'images/character/Cielle/active.png',
        generateOnCanvas: active
      },
      passive: {
        skillIcon: import.meta.env.BASE_URL + 'images/character/Cielle/passive.png',
        generateOnCanvas: passive
      },
      tactical: {
        skillIcon: import.meta.env.BASE_URL + 'images/character/Cielle/sub.png',
        generateOnCanvas: tactical
      },
      ultimate: {
        skillIcon: import.meta.env.BASE_URL + 'images/character/Cielle/ultimate.png',
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