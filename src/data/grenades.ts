export enum grenades {
  Flashbang = 'Flashbang',
  FragGrenade = 'FragGrenade',
  HealingGrenade = 'HealingGrenade',
  Interceptor = 'Interceptor',
  SlowGrenade = 'SlowGrenade',
  SmokeBomb = 'SmokeBomb',
  Alarm = 'Alarm',
  WindstormGrenade = 'WindstormGrenade',
  SnowBall = 'SnowBall',
}

export interface grenadeData {
  grenade: grenades;
  imageLink: string;
}

export const grenadeData: grenadeData[] = [
  {
    grenade: grenades.SmokeBomb,
    imageLink: 'https://cdn.sa.net/2025/04/22/4HUeCu6j3KdzfFy.png',
  },
  {
    grenade: grenades.SnowBall,
    imageLink: 'https://s2.loli.net/2024/09/24/siyl1V9OETwdntX.png',
  },
  {
    grenade: grenades.Alarm,
    imageLink: 'https://cdn.sa.net/2025/04/22/w3ufEYUP89tlJq4.png',
  },
  {
    grenade: grenades.SlowGrenade,
    imageLink: 'https://cdn.sa.net/2025/04/22/t42oXRpBiEDYFWq.png',
  },
  {
    grenade: grenades.HealingGrenade,
    imageLink: 'https://cdn.sa.net/2025/04/22/X2MtclAev6NERfa.png',
  },
  {
    grenade: grenades.FragGrenade,
    imageLink: 'https://cdn.sa.net/2025/04/22/dFuTREQAbfCGY9p.png',
  },
  {
    grenade: grenades.Flashbang,
    imageLink: 'https://cdn.sa.net/2025/04/22/JTyFboHSYk7Dd94.png',
  },
  {
    grenade: grenades.WindstormGrenade,
    imageLink: 'https://cdn.sa.net/2025/04/22/xPqkuA3wTUyGStV.png',
  },
  {
    grenade: grenades.Interceptor,
    imageLink: 'https://cdn.sa.net/2025/04/22/b8jqTHJZxtEPgy5.png',
  },
];

export enum others {
  Bomb = 'Bomb',
  BombA = 'BombA',
  BombB = 'BombB',
  BombC = 'BombC',
  Focus = 'Focus',
  Warning = 'Warning',
  Flag = 'Flag',
  Danger = 'Danger',
}

export interface otherData {
  other: others;
  imageLink: string;
}

export const otherData: otherData[] = [
  {
    other: others.Bomb,
    imageLink: 'https://cdn.sa.net/2025/02/15/lvcYUqwA7rMsfEu.png',
  },
  {
    other: others.BombA,
    imageLink: 'https://cdn.sa.net/2025/02/15/1jothFAux6P95Ve.png',
  },
  {
    other: others.BombB,
    imageLink: 'https://cdn.sa.net/2025/02/15/TvUCl3QqiFyKj2r.png',
  },
  {
    other: others.BombC,
    imageLink: 'https://cdn.sa.net/2025/02/15/6NUMSbevIiap534.png',
  },
  {
    other: others.Focus,
    imageLink: 'https://cdn.sa.net/2025/02/15/SeVw3s7OgrbyaCz.png',
  },
  {
    other: others.Warning,
    imageLink: 'https://cdn.sa.net/2025/02/15/7Ev1A5tIfQgiJLl.png',
  },
  {
    other: others.Flag,
    imageLink: 'https://cdn.sa.net/2025/02/15/Yr62e537ER4Musv.png',
  },
  {
    other: others.Danger,
    imageLink: 'https://cdn.sa.net/2025/02/15/M1RvciEu7AwTpnt.png',
  },
];
