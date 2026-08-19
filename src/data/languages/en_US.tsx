import { FaGithub } from "react-icons/fa";
import { Languages } from "../../types/interface";

export default {
	language: Languages.en_US,
	title: 'Strinova Map Assistant',
	announcement: "Announcement",
	friendlink: "Friend Link",
	sitelist: "Switch Server",
	announcementdata: {
		notshowntoday: "Got it",
		pin: {
			title: "Update",
			date: "2026.8.14",
			summary: "Added new character Nora",
			data: {}
		},
		history: []
	},
	friendlinkdata: {
		classify: {
			official: "Official",
			wiki: "Wiki",
			others: "Others"
		},
		official:
			[{
				name: "",
				icon: <img style={{ height: "35px", filter: "brightness(1000%) drop-shadow(0 0 2px rgba(var(--semi-grey-7))" }} src={import.meta.env.BASE_URL + 'images/remote/80381b7b_sec_ordlogo.png'} />,
				url: "https://klbq.qq.com/",
			}, {
				name: "",
				icon: <img style={{ height: "22px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-9))" }} src={import.meta.env.BASE_URL + 'images/remote/72d02e43_logo-white.png'} />,
				url: "https://www.strinova.com/",
			}],
		wiki:
			[{
				name: "",
				icon: <img style={{ height: "32px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-9))" }} src={import.meta.env.BASE_URL + 'images/remote/cfb7e6cb_NQTMvDZ5ah4omYR.png'} />,
				url: "https://wiki.biligame.com/klbq/",
			}, {
				name: "Strinovajp Wiki",
				icon: <></>,
				url: "https://www.strinovajp-wiki.jp/index.html",
			}, {
				name: "",
				icon: <img style={{ height: "22px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-1))" }} src={import.meta.env.BASE_URL + 'images/remote/b1b81f36_R4UxmBPGd2f8kQ7.webp'} />,
				url: "https://strinova.wiki.gg/wiki/Strinova_Wiki",
			}, {
				name: "Miraheze Meta",
				icon: <></>,
				url: "https://strinova.org/wiki/",
			}, {
				name: "日本語wiki",
				icon: <img style={{ height: "28px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-1))", marginRight: "8px" }} src={import.meta.env.BASE_URL + 'images/remote/e4a1f9f8_atwiki_logo_small.svg'} />,
				url: "https://w.atwiki.jp/calabiyau_jp/",
			},
			{
				name: "Wiki FR",
				icon: <></>,
				url: "https://strinova.org/wiki/Main_Page/fr",
			}
		],
		others:
			[{
				name: "自建房助手",
				icon: <img style={{ height: "35px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-1))", marginRight: "8px" }} src={import.meta.env.BASE_URL + 'images/remote/696fe7d4_pmYnw16rL2PQWBy.png'} />,
				url: "https://klbq.fsltech.cn/",
			},{
				name: "Linkrachi974",
				icon: <img style={{ height: "35px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-1))", marginRight: "8px" }} src={import.meta.env.BASE_URL + 'images/remote/profileLinkrachi.png'} />,
				url: "https://www.youtube.com/@linkrachi974",
			}],
		contact: {
			content: <div style={{ width: "100%", textAlign: "center" }}>
				Add friend link contact <a href='mailto:fsltech@email.cn'>fsltech@email.cn</a>
			</div>
		}
	},
	sitelistdata: {
		content: <>
			<div>We set several sites for better connection.</div>
		</>,
		Global: [
			{
				icon: <><FaGithub style={{ color: "rgba(var(--semi-grey-9), 1)", fontSize: "20px", marginRight: "10px" }} /></>,
				content: "Github Page",
				url: "https://strinova.fsltech.cn/"
			}
		],
		CN: [],
	},
	supportusdata: {
		content: <>
			<div><strong>STRINOVA MAP ASSISTANT</strong> is an open-source React project.</div>
			<div>So you can use it freely under license GPL-3.0.</div>
			<div>Some image source may need further permission.</div>
			<div>Please ask the official.</div>
			<br />
			<div>Even thougth, you can donate to the developers to make this project better.</div>
			<div>Whatever support you gave ,your would be listed on <strong>STRINOVA MAP ASSISTANT</strong>'s namelist.</div>
			<div>Contact <a href='mailto:fsltech@email.cn'>fsltech@email.cn</a> if you have any more requests.</div>
		</>,
		global: "International",
		CN: "CN",
		list: "Support List"
	},
	sidebar: {
		attact: 'Attack',
		defense: 'Defense',
		mapsetting: 'Map Setting',
		character: 'Character',
		skill: 'Skills',
		grenade: 'Grenades',
		other: 'Others',
		lineup: 'Grenade Lineups',
		skilllineup: 'Skill Lineups',
		mobaisuperjump: 'Baimo Super Jumps',
		bugpoint: 'Bugs',
		bugpointwarning: (
			<div style={{ fontSize: '12px', textAlign: 'left' }}>
				<div>Bugs listed here are for your information only!</div>
				<div>We are not responsible for any bans for abusing any of these bugs.</div>
			</div>
		),
		learnmore: 'Learn More',
		supportus: 'SUPPORT US',
		supportusContent: <></>
	},
	mapsetting: {
		choosemap: 'Map',
		maps: {
			WindyTown: 'Windy Town',
			SpaceLab: 'Space Lab',
			Khesmet: 'Khesmet',
			CauchyDistrict: 'Cauchy District',
			EulerPort: 'Port Euler',
			Area88: 'Area 88',
			Base404: 'Base 404',
			Ocarnus: 'Ocarnus',
			LebrunCity: 'Lebrun City'
		},
		TeamHighlight: 'Team Highlight',
		TeamHighlightOptions: {
			prepare: 'Show',
			blank: 'Hide'
		},
		Landmarks: 'Landmarks'
	},
	lineupsetting: {
		spotmark: 'Spot Mark',
		spotmarks: {
			disable: 'Disable',
			available: 'Available Only',
			all: 'All'
		}
	},
	skilllineupsetting: {
		spotmark: 'Spot Mark',
		spotmarks: {
			disable: 'Disable',
			available: 'Available Only',
			all: 'All'
		}
	},
	mobaisuperjumpsetting: {
		spotmark: 'Spot Mark',
		spotmarks: {
			disable: 'Disable',
			available: 'Available Only',
			all: 'All'
		}
	},
	bugpointsetting: {
		spotmark: 'Spot Mark',
		spotmarks: {
			disable: 'Disable',
			available: 'Available Only',
			all: 'All'
		}
	},
	factions: {
		PUS: 'PUS',
		TheScissors: 'The Scissors',
		Urbino: 'Urbino'
	},
	characters: {
		PUS: {
			Michele: 'Michele Li',
			Nobunaga: 'Nobunaga',
			Kokona: 'Kokona',
			Yvette: 'Yvette',
			Flavia: 'Flavia',
			Yugiri: "Yugiri",
			Leona: "Leona",
			Chiyo: "Chiyo"
		},
		TheScissors: {
			Ming: 'Ming',
			Lawine: 'Lawine',
			Meredith: 'Meredith',
			Reiichi: 'Reiichi',
			Kanami: 'Kanami',
			Eika: 'Eika',
			Fragrans: 'Fragrans',
			Mara: 'Mara',
			Nora: 'Nora'
		},
		Urbino: {
			Celestia: 'Celestia',
			Audrey: 'Audrey',
			Maddelena: 'Maddelena',
			Fuchsia: 'Fuchsia',
			BaiMo: 'Bai Mo',
			Galatea: 'Galatea',
			Cielle: 'Cielle'
		}
	},
	characterInfo: {
		Michele: {
			Name: "Michele",
			Type: "Sentinel",
			skillActiveName: `Meow Meow! Turret`,
			skillActiveDescription: `Michele throws a small turret that attaches to any surface (except players). The turret automatically attacks enemies, dealing damage and slowing them down.`,
			skillPassiveName: `Cat Sense`,
			skillPassiveDescription: `Enemies that damage Michele will be highlighted for Michele and her teammates.`,
			skillTacticalName: `Meow Sentry`,
			skillTacticalDescription: `Michele summons a Turret Cat in the target direction that fires slowing bullets at enemies within range, reducing their fire rate and movement speed.`,
			skillUltimateName: `Ultra! Meow Meow!`,
			skillUltimateDescription: `Michele deploys a big Meow Meow Drone with powerful firepower. It automatically attacks enemies with increased damage and range.`,
		},
		Nobunaga: {
			Name: "Nobunaga",
			Type: "Sentinel",
			skillActiveName: `All-Seeing Eye`,
			skillActiveDescription: `Nobunaga places a Watcher Eye on any surface that detects and highlights approaching enemies within its radius.`,
			skillPassiveName: `Pulse Blaster`,
			skillPassiveDescription: `Firing with primary weapon charges pulse energy. When fully charged, the next shot emits a pulse wave that disables enemy radar.`,
			skillTacticalName: `Pulse Mine`,
			skillTacticalDescription: `Nobunaga tosses a pulse mine towards the target area that detonates when enemies approach, shattering their armor and temporarily slowing them and preventing Stringification.`,
			skillUltimateName: `Pulse Overload`,
			skillUltimateDescription: `Nobunaga unleashes an electromagnetic pulse wave, silencing enemy abilities and revealing all enemies in a large radius.`,
		},
		Kokona: {
			Name: "Kokona",
			Type: "Support",
			skillActiveName: `Healing Drone`,
			skillActiveDescription: `Kokona deploys a healing drone to follow a selected ally or herself, continuously restoring health.`,
			skillPassiveName: `Rapid Rescue`,
			skillPassiveDescription: `Kokona revives fallen teammates faster and grants them temporary bonus armor upon revival.`,
			skillTacticalName: `Medical Station`,
			skillTacticalDescription: `Kokona places a medical station at her location that continuously restores HP and grants damage reduction to nearby allies.`,
			skillUltimateName: `Paper Reconstruction`,
			skillUltimateDescription: `Kokona channels a reconstructive field that can revive distant fallen teammates and restore full health to all allies in range.`,
		},
		Yvette: {
			Name: "Yvette",
			Type: "Controller",
			skillActiveName: `Bear Charge`,
			skillActiveDescription: `Yvette summons Fay to charge forward, leaving an icy trail on impact. Enemies on the trail slip, lose mobility, and become vulnerable.`,
			skillPassiveName: `Snow Camouflage`,
			skillPassiveDescription: `Yvette enters camouflage when remaining stationary, only becoming visible when enemies get very close.`,
			skillTacticalName: `Ice Pillar`,
			skillTacticalDescription: `Throws a snowball towards the target area that creates a destructible ice wall upon impacting obstacles. Enemies approaching the wall will slide and become vulnerable.`,
			skillUltimateName: `Blizzard Blast`,
			skillUltimateDescription: `Yvette summons a giant Frost Bear to create polar freezing zones that cause enemies to slip, reducing their fire rate and weapon handling.`,
		},
		Flavia: {
			Name: "Flavia",
			Type: "Duelist",
			skillActiveName: `Phantom Mirage`,
			skillActiveDescription: `While butterflies follow Flavia, taking HP damage grants temporary invulnerability and leaves a phantom orb that obstructs enemy vision.`,
			skillPassiveName: `Rebirth Cycle`,
			skillPassiveDescription: `Taking small amounts of damage reduces active skill cooldown. Taking heavy damage temporarily grants ultimate points for the current round.`,
			skillTacticalName: `Mirage Escape`,
			skillTacticalDescription: `Flavia creates a persistent phantom mist at her location. Enemies entering the mist are blinded and slowed, while Flavia becomes invisible inside it.`,
			skillUltimateName: `Butterfly Dream`,
			skillUltimateDescription: `Flavia creates a phantom domain around herself. Lethal damage triggers a brief invulnerability state, and enemies outside can only see Flavia when attacked.`,
		},
		Yugiri: {
			Name: "Yugiri",
			Type: "Controller",
			skillActiveName: `Corrosive Mist`,
			skillActiveDescription: `Yugiri deploys a toxic dispenser that releases corrosive gas, temporarily reducing the maximum armor of nearby enemies.`,
			skillPassiveName: `Toxin Burst`,
			skillPassiveDescription: `Dealing continuous weapon damage triggers a toxin burst that inflicts additional damage and reduces the target's max armor.`,
			skillTacticalName: `Corrosive Solution`,
			skillTacticalDescription: `Yugiri throws a toxic device towards the target area that bursts upon landing, creating a corrosive zone that deals damage and slows enemies, inflicting bonus damage on Stringified enemies.`,
			skillUltimateName: `Venom Wave`,
			skillUltimateDescription: `Yugiri summons a massive advancing toxic wave that rolls forward, corroding armor and dealing heavy damage to enemies caught in its path.`,
		},
		Leona: {
			Name: "Leona",
			Type: "Sentinel",
			skillActiveName: `Kinetic Barrier`,
			skillActiveDescription: `Leona builds square kinetic blocks on surfaces in two selectable angles. Creating blocks consumes skill charges and energy. Up to 16 blocks can exist simultaneously.`,
			skillPassiveName: `Work-Life Balance`,
			skillPassiveDescription: `Leona continuously regenerates string energy in Stringified state. Above 50% energy, movement speed increases; below 50%, armor gradually regenerates.`,
			skillTacticalName: `Bulletproof Window`,
			skillTacticalDescription: `Leona places one-way bulletproof glass horizontally or vertically on placed blocks. The glass does not block movement or skills, only enemy bullets. Up to 3 windows can exist simultaneously.`,
			skillUltimateName: `Pure Fortress`,
			skillUltimateDescription: `Leona fully recharges her energy and permanently turns existing and newly placed blocks transparent, allowing allies to see and shoot through them.`,
		},
		Chiyo: {
			Name: "Chiyo",
			Type: "Duelist",
			skillActiveName: `Blossom Burst`,
			skillActiveDescription: `Chiyo fires an explosive arrow that sticks to surfaces, which can be manually detonated early or automatically explodes at maximum duration.`,
			skillPassiveName: `Focused Stance`,
			skillPassiveDescription: `Chiyo passively gathers concentration. When fully charged, landing attacks consumes focus to temporarily enhance damage output.`,
			skillTacticalName: `Cloud Piercer`,
			skillTacticalDescription: `Charges up and fires a sniper arrow in the target direction, dealing heavy damage based on hit location and inflicting a rapidly decaying slow.`,
			skillUltimateName: `Heaven Shatter`,
			skillUltimateDescription: `Briefly reveals enemies near teammates, then charges and fires a massive piercing arrow that penetrates obstacles and detonates on impact.`,
		},
		Ming: {
			Name: "Ming",
			Type: "Duelist",
			skillActiveName: `Shock Orb`,
			skillActiveDescription: `Ming launches an electric orb that detonates upon hitting enemies, reaching max distance, or manual reactivation, destroying enemy armor and slowing them down.`,
			skillPassiveName: `Armor Drain`,
			skillPassiveDescription: `Damaging enemy armor or shields with weapons or active skill restores Ming's own armor proportional to the damage dealt.`,
			skillTacticalName: `Flash Sphere`,
			skillTacticalDescription: `Ming launches a flash energy sphere that can be manually detonated or explodes after maximum flight time, blinding all nearby enemies. The sphere can be destroyed during its brief pre-detonation delay.`,
			skillUltimateName: `Thunder Forge`,
			skillUltimateDescription: `Ming gains temporary armor and imbues her shots with stacking slows. Damaging enemy armor extends the ultimate duration and restores temporary armor.`,
		},
		Lawine: {
			Name: "Lawine",
			Type: "Initiator",
			skillActiveName: `Pulse Knife`,
			skillActiveDescription: `Throws the Pulse Knife to create a large magnetic field, revealing enemies within range to Lawine and her teammates. Up to 3 scans can be performed.`,
			skillPassiveName: `Exposure Trace`,
			skillPassiveDescription: `Enemies hit by Lawine's primary weapon are briefly highlighted for Lawine only.`,
			skillTacticalName: `Flash Blade`,
			skillTacticalDescription: `Lawine throws a flash dagger towards the target area that explodes upon hitting obstacles, blinding surrounding enemies.`,
			skillUltimateName: `Escape The Shadow`,
			skillUltimateDescription: `Lawine creates a rectangular stealth field. Entering the field grants invisibility and bonus movement speed.`,
		},
		Meredith: {
			Name: "Meredith",
			Type: "Controller",
			skillActiveName: `Sand Heatwave`,
			skillActiveDescription: `Meredith fires an energy orb that creates a sandstorm field on impact. Enemies inside are slowed, have reduced reload speed, and take continuous HP damage.`,
			skillPassiveName: `Time Warp`,
			skillPassiveDescription: `Reduces Meredith's falling speed when aiming, using skills, or throwing grenades in mid-air.`,
			skillTacticalName: `Blinding Sand`,
			skillTacticalDescription: `Meredith throws a sand orb towards the target area that explodes into a sand veil on landing, blocking enemy vision and reducing the reload speed of enemies within.`,
			skillUltimateName: `Quicksand Burial`,
			skillUltimateDescription: `Meredith deploys a massive sand vortex that pulls enemies towards the center, impairs vision, slows them, and continuously drains HP.`,
		},
		Reiichi: {
			Name: "Reiichi",
			Type: "Controller",
			skillActiveName: `Dawn Curtain`,
			skillActiveDescription: `Reiichi uses his umbrella to project a curtain of paper light horizontally or vertically, blocking enemy line of sight.`,
			skillPassiveName: `Dawn Insight`,
			skillPassiveDescription: `While aiming down sights, Reiichi charges sniper energy. At full charge, it scans a cone in front and reveals detected enemies to the team.`,
			skillTacticalName: `Sacred Screen Rush`,
			skillTacticalDescription: `Reiichi dashes forward a short distance, leaving behind a light barrier along the dash path that temporarily blocks enemy bullets.`,
			skillUltimateName: `Sacred Screen of Refuge`,
			skillUltimateDescription: `Instantly refreshes Dawn Curtain and upgrades it to block enemy projectiles. Existing screens are also enhanced.`,
		},
		Kanami: {
			Name: "Kanami",
			Type: "Initiator",
			skillActiveName: `Symphony Resonance`,
			skillActiveDescription: `Kanami shoots a resonant melody bullet that sticks to surfaces, pulsing to reveal and highlight all nearby enemies.`,
			skillPassiveName: `Sonic Boom`,
			skillPassiveDescription: `Primary weapon hits create a sonic mark, briefly revealing the target and nearby utility through walls.`,
			skillTacticalName: `Rhythm Cyclone`,
			skillTacticalDescription: `Kanami launches a sonic cyclone in the target direction that knocks back enemies in its path and causes severe aim disturbance to their scopes.`,
			skillUltimateName: `Showtime`,
			skillUltimateDescription: `Kanami summons a stage hologram of herself. The loud concert glitches enemy scopes in ADS while slowing and pulling enemies toward the center.`,
		},
		Eika: {
			Name: "Eika",
			Type: "Duelist",
			skillActiveName: `Infernal Cage`,
			skillActiveDescription: `Eika creates a cage of roaring flames. Enemies passing through the cage walls suffer heavy burn damage.`,
			skillPassiveName: `Solar Flare`,
			skillPassiveDescription: `Hitting enemies with weapon fire accumulates heat. At maximum heat, skills consume heat to gain enhanced damage and effects.`,
			skillTacticalName: `Explosive Fireball`,
			skillTacticalDescription: `Eika launches a high-explosive fireball that detonates on impact with enemies or terrain, dealing AoE fire damage and setting the ground ablaze.`,
			skillUltimateName: `Flame Storm`,
			skillUltimateDescription: `Eika unleashes up to 3 swirling firestorms that launch enemies into the air, dealing heavy continuous fire damage.`,
		},
		Fragrans: {
			Name: "Fragrans",
			Type: "Support",
			skillActiveName: `Vibrant Fragrance`,
			skillActiveDescription: `Fragrans releases perfume that creates an aromatic zone, granting allies increased fire rate and movement speed.`,
			skillPassiveName: `Soothing Aroma`,
			skillPassiveDescription: `Fragrans naturally emits a healing aroma, continuously regenerating health for herself and nearby teammates.`,
			skillTacticalName: `Healing Miasma`,
			skillTacticalDescription: `Fragrans releases a healing fragrance to the target area, granting nearby allies bonus temporary max HP and continuous healing uninterrupted by damage.`,
			skillUltimateName: `Intense Fragrance`,
			skillUltimateDescription: `Fragrans creates a powerful fragrance zone that dramatically boosts ally fire rate, movement speed, and HP regeneration while granting her high damage reduction.`,
		},
		Mara: {
			Name: "Mara",
			Type: "Duelist",
			skillActiveName: `Phantom Grip`,
			skillActiveDescription: `Mara casts a phantom hand that targets the nearest standing enemy, pulling a Soul Orb from their body and slowing them down. Only Mara can attack the Soul Orb with her weapon. Damaging the Soul Orb partially inflicts armor-ignoring HP damage on the enemy. The Soul Orb shrinks when the enemy sidesteps or glides.`,
			skillPassiveName: `Soul Reaver`,
			skillPassiveDescription: `Mara recovers a portion of HP and deals extra armor-ignoring DMG when using her weapon on non-full-HP enemies. This recovery effect also applies to the Soul Orb DMG from her Active Skill.`,
			skillTacticalName: `Death Stride`,
			skillTacticalDescription: `When activated, Mara enters stealth while Stringified and gains increased movement speed. She only becomes visible when enemies get close. During her Ultimate, the detection radius is further reduced.`,
			skillUltimateName: `Grim Reaper`,
			skillUltimateDescription: `Mara marks the nearest enemy, silencing them and revealing them only to her. If Mara assists in knocking down or eliminating the target, the mark transfers to the nearest standing enemy and resets its duration until Mara dies or the duration expires.`,
		},
		Nora: {
			Name: "Nora",
			Type: "Initiator",
			skillActiveName: `Shadow Pursuit`,
			skillActiveDescription: `Summons a spirit to fly towards the target area. The spirit reveals enemies within its range and locks onto the nearest enemy to attack, dealing damage and blurring their scope vision.`,
			skillPassiveName: `Void Step`,
			skillPassiveDescription: `Periodically grants an additional triple jump.`,
			skillTacticalName: `Nether Blast`,
			skillTacticalDescription: `Commands the spirit to launch cover-penetrating dark string energy in the target direction. It explodes on contact with players or when reactivated, dealing damage and slowing surrounding enemies, followed by a more powerful secondary explosion after a brief gathering period.`,
			skillUltimateName: `Darkstring Frenzy`,
			skillUltimateDescription: `Summons multiple avatars of Sora to track enemies within range. Upon approaching enemies, Sora attacks, dealing damage and impairing their sensory perception.`,
		},
		Celestia: {
			Name: "Celestia",
			Type: "Support",
			skillActiveName: `Guardian Starlight`,
			skillActiveDescription: `Celestia throws starlight energy to an ally to grant temporary armor, which then returns to Celestia to grant her temporary armor as well.`,
			skillPassiveName: `Cosmic Ward`,
			skillPassiveDescription: `Celestia continuously regenerates armor for herself and nearby teammates when in proximity.`,
			skillTacticalName: `Astral Armor Field`,
			skillTacticalDescription: `Celestia creates a starlight field in the designated area. Allies inside rapidly restore armor and gain a brief movement speed boost.`,
			skillUltimateName: `Astral Gate`,
			skillUltimateDescription: `Celestia selects an ally to grant massive temporary armor to both, channels energy, and teleports directly to that ally's side.`,
		},
		Audrey: {
			Name: "Audrey",
			Type: "Sentinel",
			skillActiveName: `Heavy Firepower`,
			skillActiveDescription: `Audrey deploys her machine gun into a bipod turret mode, greatly increasing fire rate, magazine capacity, and recoil stability.`,
			skillPassiveName: `Royal Shield`,
			skillPassiveDescription: `When aiming down sights or in deployed mode, a frontal gun shield activates to absorb incoming bullet damage.`,
			skillTacticalName: `Warning Radar`,
			skillTacticalDescription: `Audrey places a compact radar on the ground that triggers an alarm when enemies enter its detection range, briefly revealing their positions.`,
			skillUltimateName: `Tactical Bombardment`,
			skillUltimateDescription: `Audrey equips a 6-round grenade launcher that bombards the target area, creating lingering incendiary fire zones on impact.`,
		},
		Maddelena: {
			Name: "Maddelena",
			Type: "Controller",
			skillActiveName: `Paint Shackles`,
			skillActiveDescription: `Maddelena shoots a paint projectile that spreads paint on impact, slowing enemies and preventing them from Stringifying.`,
			skillPassiveName: `Paint Footsteps`,
			skillPassiveDescription: `Damaging enemies with weapons coats them in paint, creating colored footsteps that reveal their movement direction.`,
			skillTacticalName: `Paint Surge`,
			skillTacticalDescription: `Maddelena launches a paint bubble that bursts on impact, splattering paint across the ground. Enemies stepping on the paint cannot Stringify and are slowed.`,
			skillUltimateName: `Paint Bubble`,
			skillUltimateDescription: `Maddelena shoots a giant paint bubble that traps enemies inside, preventing weapon firing and Stringification while dealing damage.`,
		},
		Fuchsia: {
			Name: "Fuchsia",
			Type: "Duelist",
			skillActiveName: `Scent Tracker`,
			skillActiveDescription: `Fuchsia senses the scent of nearby low-health enemies, briefly revealing their silhouettes through obstacles.`,
			skillPassiveName: `Battle Sustenance`,
			skillPassiveDescription: `Securing a kill or assist spawns an adrenaline pack at the enemy's location that restores HP and provides a speed boost.`,
			skillTacticalName: `Crimson Rush`,
			skillTacticalDescription: `Fuchsia enters a frenzy and dashes forward with CC immunity, dealing damage and restoring a portion of her HP upon hitting an enemy.`,
			skillUltimateName: `Blood Frenzy`,
			skillUltimateDescription: `Fuchsia enters an enraged state with significantly boosted fire rate, reload speed, and movement speed, gaining HP on kills.`,
		},
		BaiMo: {
			Name: "BaiMo",
			Type: "Duelist",
			skillActiveName: `Sky Dancer`,
			skillActiveDescription: `BaiMo dashes forward in Stringified state, reloading 2 rounds into his shotgun and gaining temporary invincibility frames.`,
			skillPassiveName: `Hip-Hop Burst`,
			skillPassiveDescription: `Landing single-shot damage exceeding 50 points grants a sudden burst of movement speed.`,
			skillTacticalName: `Explosive Graffiti`,
			skillTacticalDescription: `BaiMo sprays a graffiti bomb on walls or ground that automatically detonates when enemies approach, dealing AoE damage and obscuring their vision.`,
			skillUltimateName: `Back to the Streets`,
			skillUltimateDescription: `BaiMo places a respawn beacon. Upon death or manual reactivation, BaiMo teleports back to the beacon with fully restored HP.`,
		},
		Galatea: {
			Name: "Galatea",
			Type: "Initiator",
			skillActiveName: `Card Flash`,
			skillActiveDescription: `Galatea throws a curved card that creates a destructible decoy on landing. She can press the interact button to instantly swap positions with it. Decoys reveal nearby enemies.`,
			skillPassiveName: `Deceptive Shadow`,
			skillPassiveDescription: `Detaching from a wall leaves a decoy behind. When destroyed, this passive enters cooldown.`,
			skillTacticalName: `Blinding Mirage`,
			skillTacticalDescription: `Galatea throws an illusion card towards the target that detonates to blind enemies in range and creates a deceptive phantom decoy.`,
			skillUltimateName: `Card Trickery`,
			skillUltimateDescription: `Galatea scatters 3 cards in an arc, generating 3 phantom decoys simultaneously and allowing multiple teleports between them.`,
		},
		Cielle: {
			Name: "Cielle",
			Type: "Duelist",
			skillActiveName: `Mobile Shield`,
			skillActiveDescription: `Cielle deploys an energy shield to block DMG. Cielle can charge forward as long as the shield is active. Her armor is restored when the shield takes DMG. It gradually repairs itself after deactivation. Sniper rifles deal extra DMG to it.`,
			skillPassiveName: `Automatic Chamber`,
			skillPassiveDescription: `After briefly holstering your weapon, it reloads automatically. When Cielle holsters her weapon after a shield charge or manual detonation, she recovers HP.`,
			skillTacticalName: `Gravitational Link`,
			skillTacticalDescription: `Cielle launches a gravitational device that, after a brief delay, pulls surrounding enemies to its center and inflicts a slowing effect.`,
			skillUltimateName: `Absolute Defense`,
			skillUltimateDescription: `Cielle improves and regenerates the energy shield, increasing its durability, reducing charge cooldown, and strengthening its effects.`,
		},
	},
	characterTypes: {
		Sentinel: 'Sentinel',
		Support: 'Support',
		Controller: 'Controller',
		Duellist: 'Duelist',
		Initiator: 'Initiator'
	},
	grenades: {
		Flashbang: 'Flashbang',
		FragGrenade: 'Frag Grenade',
		HealingGrenade: 'Healing Grenade',
		Interceptor: 'Interceptor',
		SlowGrenade: 'Slow Grenade',
		SmokeBomb: 'Smoke Bomb',
		Alarm: 'Alarm',
		WindstormGrenade: 'Windstorm Grenade',
		SnowBall: 'Snow Ball',
		ShieldBarrier: 'Shield Barrier'
	},
	others: {
		Bomb: 'Bomb',
		BombA: 'Bomb A',
		BombB: 'Bomb B',
		BombC: 'Bomb C',
		Focus: 'Focus',
		Warning: 'Warning',
		Flag: 'Flag',
		Danger: 'Danger',
	},
	markbox: {
		mark: 'Mark',
		straightline: 'Straight Line',
		arrowline: 'Arrow Line',
		color: 'Color',
		undo: 'Undo',
		clear: 'Clear',
		clearwarning: {
			title: 'Confirm to clear all marks?',
			content: 'This action cannot be undone',
			ok: 'Confirm',
			cancel: 'Cancel',
			success: 'Cleared all markings',
			failure: 'Failed to clear markings'
		}
	},
	shortcutsModal: {
		title: 'Keyboard Shortcuts',
		sections: [
			{
				title: 'Tools',
				items: [
					{ key: 'S', description: 'Select tool' },

					{ key: 'D', description: 'Pencil / Free draw tool' },
					{ key: 'E', description: 'Straight line tool' },
					{ key: 'A', description: 'Arrow line tool' },
					{ key: 'C', description: 'Circle tool' },
					{ key: 'R', description: 'Rectangle tool' },
					{ key: 'T', description: 'Text tool' },
				]
			},
			{
				title: 'History',
				items: [
					{ key: 'Ctrl + Z', description: 'Undo last action' },
					{ key: 'Ctrl + Y', description: 'Redo last action' },
				]
			},
			{
				title: 'File',
				items: [
					{ key: 'Ctrl + S', description: 'Save file' },
					{ key: 'Ctrl + O', description: 'Load file' },
					{ key: 'Ctrl + I', description: 'Export as image' },
				]
			},
			{
				title: 'Canvas',
				items: [
					{ key: 'Alt + Click', description: 'Move magnifier target' },
					{ key: 'Shift + Drag', description: 'Snap rotation (15°)' },
				]
			},
		]
	}
}