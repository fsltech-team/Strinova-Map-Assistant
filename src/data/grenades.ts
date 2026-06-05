
export enum grenades {
	Flashbang = "Flashbang",
	FragGrenade = "FragGrenade",
	HealingGrenade = "HealingGrenade",
	Interceptor = "Interceptor",
	SlowGrenade = "SlowGrenade",
	SmokeBomb = "SmokeBomb",
	Alarm = "Alarm",
	WindstormGrenade = "WindstormGrenade",
	SnowBall = "SnowBall",
	ShieldBarrier = "ShieldBarrier"
}

export interface grenadeData {
	grenade: grenades;
	imageLink: string;
}

export const grenadeData: grenadeData[] = [
	{
		grenade: grenades.SmokeBomb,
		imageLink: import.meta.env.BASE_URL + "images/grenade/smokeBomb.png"
	},
	{
		grenade: grenades.SnowBall,
		imageLink: import.meta.env.BASE_URL + "images/grenade/snowBall.png"
	},
	{
		grenade: grenades.Alarm,
		imageLink: import.meta.env.BASE_URL + "images/grenade/alarm.png"
	},
	{
		grenade: grenades.SlowGrenade,
		imageLink: import.meta.env.BASE_URL + "images/grenade/slowGrenade.png"
	},
	{
		grenade: grenades.HealingGrenade,
		imageLink: import.meta.env.BASE_URL + "images/grenade/healingGrenade.png"
	},
	{
		grenade: grenades.FragGrenade,
		imageLink: import.meta.env.BASE_URL + "images/grenade/fragGrenade.png"
	},
	{
		grenade: grenades.Flashbang,
		imageLink: import.meta.env.BASE_URL + "images/grenade/flashbang.png"
	},
	{
		grenade: grenades.WindstormGrenade,
		imageLink: import.meta.env.BASE_URL + "images/grenade/windstormGrenade.png"
	},
	{
		grenade: grenades.Interceptor,
		imageLink: import.meta.env.BASE_URL + "images/grenade/interceptor.png"
	},
	{
		grenade: grenades.ShieldBarrier,
		imageLink: import.meta.env.BASE_URL + "images/grenade/shieldBarrier.png"
	}
]




export enum others {
	Bomb = "Bomb",
	BombA = "BombA",
	BombB = "BombB",
	BombC = "BombC",
	Focus = "Focus",
	Warning = "Warning",
	Flag = "Flag",
	Danger = "Danger",
}

export interface otherData {
	other: others;
	imageLink: string;
}

export const otherData: otherData[] = [
	{
		other: others.Bomb,
		imageLink: import.meta.env.BASE_URL + "images/pin/bomb.png"
	},
	{
		other: others.BombA,
		imageLink: import.meta.env.BASE_URL + "images/pin/bombA.png"
	},
	{
		other: others.BombB,
		imageLink: import.meta.env.BASE_URL + "images/pin/bombB.png"
	},
	{
		other: others.BombC,
		imageLink: import.meta.env.BASE_URL + "images/pin/bombC.png"
	},
	{
		other: others.Focus,
		imageLink: import.meta.env.BASE_URL + "images/pin/focus.png"
	},
	{
		other: others.Warning,
		imageLink: import.meta.env.BASE_URL + "images/pin/warning.png"
	},
	{
		other: others.Flag,
		imageLink: import.meta.env.BASE_URL + "images/pin/flag.png"
	},
	{
		other: others.Danger,
		imageLink: import.meta.env.BASE_URL + "images/pin/danger.png"
	},
]