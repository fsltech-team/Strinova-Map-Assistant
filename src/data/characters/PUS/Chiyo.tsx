import { characterData } from "../characterRegistry";
import { factions, PUS } from "../factions";


const character: characterData = {
  faction: factions.PUS,
  id: PUS.Chiyo,
  defense: {
    canvasImage: import.meta.env.BASE_URL + 'images/character/Chiyo/icon.png',
    bodyImage: import.meta.env.BASE_URL + 'images/character/Chiyo/body.png',
    skills: {
      active: {
        skillIcon: import.meta.env.BASE_URL + 'images/character/Chiyo/active.png',
        generateOnCanvas: active
      },
      passive: {
        skillIcon: import.meta.env.BASE_URL + 'images/character/Chiyo/passive.png',
        generateOnCanvas: passive
      },
      tactical: {
        skillIcon: import.meta.env.BASE_URL + 'images/character/Chiyo/sub.png',
        generateOnCanvas: tactical
      },
      ultimate: {
        skillIcon: import.meta.env.BASE_URL + 'images/character/Chiyo/ultimate.png',
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