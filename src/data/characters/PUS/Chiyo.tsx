import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
  faction: factions.PUS,
  id: PUS.Chiyo,
  defense: {
    canvasImage: import.meta.env.BASE_URL + 'images/remote/chiyo_icone.png',
    bodyImage: import.meta.env.BASE_URL + 'images/remote/chiyo.png',
    skills: {
      active: {
        skillIcon: import.meta.env.BASE_URL + 'images/remote/activeskill_chiyo.png',
        generateOnCanvas: active
      },
      passive: {
        skillIcon: import.meta.env.BASE_URL + 'images/remote/passiveskill_chiyo.png',
        generateOnCanvas: passive
      },
      tactical: {
        skillIcon: import.meta.env.BASE_URL + 'images/remote/tacticalskill_chiyo.png',
        generateOnCanvas: tactical
      },
      ultimate: {
        skillIcon: import.meta.env.BASE_URL + 'images/remote/ultimate_chiyo.png',
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