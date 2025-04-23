import { characterData } from '../characterRegistry';
import { factions, TheScissors } from '../factions';

const character: characterData = {
  faction: factions.TheScissors,
  id: TheScissors.Kanami,
  attack: {
    canvasImage: 'https://s2.loli.net/2024/09/29/7DHOLqvWMzmlch3.png',
    bodyImage: 'https://cdn.sa.net/2025/04/22/v843gf6RWlFsPx7.png',
    skills: {
      active: {
        skillIcon: 'https://s2.loli.net/2024/09/25/UBJqoYz835GvVxy.png',
        generateOnCanvas: active,
      },
      passive: {
        skillIcon: 'https://s2.loli.net/2024/09/25/OHbINYGSQhFazcd.png',
        generateOnCanvas: passive,
      },
      ultimate: {
        skillIcon: 'https://s2.loli.net/2024/09/25/YH3Phg5XQumsbCM.png',
        generateOnCanvas: ultimate,
      },
      sub: {
        skillIcon: 'https://cdn.sa.net/2024/11/19/jOP3fQIlYxCvZSN.png',
        generateOnCanvas: sub,
      },
    },
  },
};

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
