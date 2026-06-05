
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
		imageLink: import.meta.env.BASE_URL + "images/remote/03acfeef_4HUeCu6j3KdzfFy.png"
	},
	{
		grenade: grenades.SnowBall,
		imageLink: import.meta.env.BASE_URL + "images/remote/d24e8c6d_siyl1V9OETwdntX.png"
	},
	{
		grenade: grenades.Alarm,
		imageLink: import.meta.env.BASE_URL + "images/remote/a3423b14_w3ufEYUP89tlJq4.png"
	},
	{
		grenade: grenades.SlowGrenade,
		imageLink: import.meta.env.BASE_URL + "images/remote/c562332e_t42oXRpBiEDYFWq.png"
	},
	{
		grenade: grenades.HealingGrenade,
		imageLink: import.meta.env.BASE_URL + "images/remote/aa32b9cf_X2MtclAev6NERfa.png"
	},
	{
		grenade: grenades.FragGrenade,
		imageLink: import.meta.env.BASE_URL + "images/remote/3adda4fd_dFuTREQAbfCGY9p.png"
	},
	{
		grenade: grenades.Flashbang,
		imageLink: import.meta.env.BASE_URL + "images/remote/19db55de_JTyFboHSYk7Dd94.png"
	},
	{
		grenade: grenades.WindstormGrenade,
		imageLink: import.meta.env.BASE_URL + "images/remote/9b57f587_xPqkuA3wTUyGStV.png"
	},
	{
		grenade: grenades.Interceptor,
		imageLink: import.meta.env.BASE_URL + "images/remote/b26be4a1_b8jqTHJZxtEPgy5.png"
	},
	{
		grenade: grenades.ShieldBarrier,
		imageLink: import.meta.env.BASE_URL + "images/remote/shield_barrier.png"
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
		imageLink: import.meta.env.BASE_URL + "images/remote/4e9a687a_lvcYUqwA7rMsfEu.png"
	},
	{
		other: others.BombA,
		imageLink: import.meta.env.BASE_URL + "images/remote/e55067e3_1jothFAux6P95Ve.png"
	},
	{
		other: others.BombB,
		imageLink: import.meta.env.BASE_URL + "images/remote/4f7c7cc1_TvUCl3QqiFyKj2r.png"
	},
	{
		other: others.BombC,
		imageLink: import.meta.env.BASE_URL + "images/remote/018cdf30_6NUMSbevIiap534.png"
	},
	{
		other: others.Focus,
		imageLink: import.meta.env.BASE_URL + "images/remote/b82fb571_SeVw3s7OgrbyaCz.png"
	},
	{
		other: others.Warning,
		imageLink: import.meta.env.BASE_URL + "images/remote/8bbd4a69_7Ev1A5tIfQgiJLl.png"
	},
	{
		other: others.Flag,
		imageLink: import.meta.env.BASE_URL + "images/remote/e6d167ee_Yr62e537ER4Musv.png"
	},
	{
		other: others.Danger,
		imageLink: import.meta.env.BASE_URL + "images/remote/0503a2e4_M1RvciEu7AwTpnt.png"
	},
]