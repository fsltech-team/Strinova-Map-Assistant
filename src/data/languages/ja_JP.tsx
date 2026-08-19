import { FaGithub } from "react-icons/fa";
import { Languages } from "../../types/interface";

export default {
	language: Languages.ja_JP,
	title: 'Strinova マップアシスタント',
	announcement: "Announcement",
	friendlink: "Friend Link",
	sitelist: "Switch Server",
	announcementdata: {
		notshowntoday: "Not show today",
		pin: {
			title: "Update",
			date: "2026.8.14",
			summary: "新キャラクター「ノノ（Nora）」を追加",
			data: {}
		},
		history: []
	},
	friendlinkdata: {
		classify: {
			official: "official",
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
			},{
				name: "Wiki FR",
				icon: <></>,
				url: "https://strinova.org/wiki/Main_Page/fr",
			}],
		others:
			[{
				name: "自建房助手",
				icon: <img style={{ height: "35px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-1))", marginRight: "8px" }} src={import.meta.env.BASE_URL + 'images/remote/696fe7d4_pmYnw16rL2PQWBy.png'} />,
				url: "https://klbq.fsltech.cn/",
			},
			{
				name: "Linkrachi974",
				icon: <img style={{ height: "35px", filter: "drop-shadow(0 0 2px rgba(var(--semi-grey-1))", marginRight: "8px" }} src={import.meta.env.BASE_URL + 'images/remote/profileLinkrachi.png'} />,
				url: "https://www.youtube.com/@linkrachi974",
			}],
		contact: {
			content: <div style={{ width: "100%", textAlign: "center" }}>
				添加友链请联系 <a href='mailto:fsltech@email.cn'>fsltech@email.cn</a>
			</div>
		}
	},
	sitelistdata: {
		content: <>
			<div>为了提供更快的访问速度以及减轻服务器压力，</div>
			<div>我们开设了不同节点</div>
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
			<div><strong>卡拉彼丘地图助手</strong>是一款开源应用，</div>
			<div>因此你可以免费在 GPL-3.0 开源协议的范畴下使用本应用。</div>
			<div>美术资料与部分UI版权归原作者与官方所有，</div>
			<div>请咨询对应作者与官方授权！</div>
			<br />
			<div>但即便如此，你的赞助也可以给予开发者前进的动力，让这个项目变得更好。</div>
			<div>无论你使用何种形式赞助，你都可以在<strong>卡拉彼丘地图助手</strong>的 GitHub 项目主页和网站展示您的信息（个人主页、公司主页、GitHub 资料页等）。</div>
			<div>如需展示，请在留言中留下需要展示的内容或将内容连同赞助收据发送至 <a href='mailto:fsltech@email.cn'>fsltech@email.cn</a></div>
		</>,
		global: "国际",
		CN: "中国境内",
		list: "赞助列表"
	},
	sidebar: {
		attact: 'Attack',
		defense: 'Defense',
		mapsetting: 'マップの設定',
		character: 'キャラクター（超弦体）',
		skill: 'スキル',
		grenade: '戦術アイテム',
		other: 'Others',
		lineup: '戦術アイテムのポイント',
		skilllineup: 'スキルポイント',
		mobaisuperjump: '白墨スーパージャンプ',
		bugpoint: 'プログラムエラー',
		bugpointwarning: (
			<div style={{ fontSize: '12px', textAlign: 'left' }}>
				<div>ここにリストされているエラーは参照用です！</div>
				<div>私たちはこれらの脆弱性を悪用する禁止令には責任を負いません。</div>
			</div>
		),
		learnmore: '詳細',
		supportus: 'SUPPORT US',
		supportusContent: <></>
	},
	mapsetting: {
		choosemap: 'マップ',
		maps: {
			WindyTown: 'ウィンディタウン',
			SpaceLab: 'スペース研究センター',
			Khesmet: '科斯迷特',
			CauchyDistrict: 'コーシー街区',
			EulerPort: 'オイラー港',
			Area88: '88街区',
			Base404: '404基地',
			Ocarnus: '奥卡努斯',
			LebrunCity: 'Lebrun City'
		},
		TeamHighlight: 'チームハイライト',
		TeamHighlightOptions: {
			prepare: '表示',
			blank: '非表示'
		},
		Landmarks: 'ランドマーク'
	},
	lineupsetting: {
		spotmark: 'スポットマーク',
		spotmarks: {
			disable: '無効',
			available: '可能なものだけ',
			all: '全て'
		}
	},
	skilllineupsetting: {
		spotmark: 'スポットマーク',
		spotmarks: {
			disable: '無効',
			available: '可能なものだけ',
			all: '全て'
		}
	},
	mobaisuperjumpsetting: {
		spotmark: 'スポットマーク',
		spotmarks: {
			disable: '無効',
			available: '可能なものだけ',
			all: '全て'
		}
	},
	bugpointsetting: {
		spotmark: 'スポットマーク',
		spotmarks: {
			disable: '無効',
			available: '可能なものだけ',
			all: '全て'
		}
	},
	factions: {
		PUS: 'PUS',
		TheScissors: 'シザーズ',
		Urbino: 'ウルビノ'
	},
	characters: {
		PUS: {
			Michele: 'ミシェル',
			Nobunaga: '信長',
			Kokona: '心夏',
			Yvette: 'イヴェット',
			Flavia: 'フラヴィア',
			Yugiri: "ユウギリ",
			Leona: "Leona",
			Chiyo: "Chiyo"
		},
		TheScissors: {
			Ming: 'ミン',
			Lawine: 'ラヴィーネ',
			Meredith: 'メレディス',
			Reiichi: '令一',
			Kanami: '香奈美',
			Eika: 'アイカ',
			Fragrans: 'フラグランス',
			Mara:'マーラー',
			Nora: 'ノノ'
		},
		Urbino: {
			Celestia: '星理恵',
			Audrey: 'オードリー',
			Maddelena: 'マダレーナ',
			Fuchsia: 'フューシャ',
			BaiMo: '白墨',
			Galatea: 'ガラテア',
			Cielle: 'Cielle'
		}
	},
	characterInfo: {
		Michele: {
			Name: "ミシェル",
			Type: "センチネル",
			skillActiveName: `にゃんこタレット`,
			skillActiveDescription: `ミシェルはプレイヤー以外の表面に付着する小型タレットを設置する。タレットは範囲内の敵を自動攻撃し、減速させる。`,
			skillPassiveName: `キャットセンス`,
			skillPassiveDescription: `ミシェルにダメージを与えた敵は、ミシェルと味方に一時的に可視化される。`,
			skillTacticalName: `キャットタレット`,
			skillTacticalDescription: `指定した方向にタレット猫を召喚する。タレット猫は範囲内の敵に向けて減速弾を発射し、敵の射撃速度と移動速度を低下させる。`,
			skillUltimateName: `ウルトラにゃんこ`,
			skillUltimateDescription: `強力な火力を持つ大型ドローンを展開する。広範囲の敵を自動攻撃し、大ダメージを与える。`,
		},
		Nobunaga: {
			Name: "信",
			Type: "センチネル",
			skillActiveName: `監視の瞳`,
			skillActiveDescription: `任意の表面にウォッチャーアイを設置し、接近した敵を探知して味方に位置を共有する。`,
			skillPassiveName: `パルスブラスター`,
			skillPassiveDescription: `射撃でパルスエネルギーをチャージし、最大チャージ時の次弾で敵のレーダーを妨害するパルスを放つ。`,
			skillTacticalName: `パルスマイン`,
			skillTacticalDescription: `目標エリアにパルスマインを投擲する。敵が接近すると爆発し、範囲内の全敵のアーマーを破壊し、短時間減速と弦化不可状態を付与する。`,
			skillUltimateName: `パルスオーバーロード`,
			skillUltimateDescription: `電磁パルス波を放ち、広範囲の敵のスキル使用を封じ、位置を可視化する。`,
		},
		Kokona: {
			Name: "心夏",
			Type: "サポート",
			skillActiveName: `回復ドローン`,
			skillActiveDescription: `自身または味方に追従する回復ドローンを配備し、HPを持続的に回復する。`,
			skillPassiveName: `ラピッドレスキュー`,
			skillPassiveDescription: `倒れた味方を素早く蘇生し、蘇生時に追加の一時アーマーを付与する。`,
			skillTacticalName: `メディカルステーション`,
			skillTacticalDescription: `その場にメディカルステーションを設置する。ステーションは周囲の味方のHPを持続的に回復し、被ダメージ軽減効果を付与する。`,
			skillUltimateName: `リコンストラクション`,
			skillUltimateDescription: `再構築フィールドを展開し、遠隔の倒れた味方を蘇生するとともに範囲内の味方のHPを全回復する。`,
		},
		Yvette: {
			Name: "イヴェット",
			Type: "コントローラー",
			skillActiveName: `ベアチャージ`,
			skillActiveDescription: `フェイを召喚して突進させ、氷の道を生成する。氷の上の敵は足を滑らせて移動制限と被ダメージ増加状態になる。`,
			skillPassiveName: `スノーカモフラージュ`,
			skillPassiveDescription: `静止時にカモフラージュ状態になり、敵が至近距離に来るまで姿を隠す。`,
			skillTacticalName: `アイスピラー`,
			skillTacticalDescription: `目標エリアに雪玉を投げ、遮蔽物に当たると破壊可能な氷の壁を生成する。敵が氷壁に近づくと足を滑らせて被ダメージ増加状態になる。`,
			skillUltimateName: `ブリザードブラスト`,
			skillUltimateDescription: `巨大なフロストベアを召喚して極寒エリアを生成し、敵の射撃速度と武器操作性を著しく低下させる。`,
		},
		Flavia: {
			Name: "フラビア",
			Type: "デュエリスト",
			skillActiveName: `ファントムミラージュ`,
			skillActiveDescription: `蝶が追従している間、HPダメージを受けると一時的に無敵となり、敵の視界を遮るファントムオーブを残す。`,
			skillPassiveName: `輪廻の環`,
			skillPassiveDescription: `微ダメージを受けるとスキルのクールダウンが短縮され、大ダメージを受けると一時的にアルティメットポイントを獲得する。`,
			skillTacticalName: `幻惑の霧`,
			skillTacticalDescription: `その場に持続する幻境の霧を生成する。霧に入った敵は視界を奪われ減速し、フラビアは霧の中でステルス状態になる。`,
			skillUltimateName: `胡蝶の夢`,
			skillUltimateDescription: `周囲にファントムドメインを展開する。致命ダメージを無効化し、外部の敵からは攻撃時のみ視認可能となる。`,
		},
		Yugiri: {
			Name: "憂霧",
			Type: "コントローラー",
			skillActiveName: `腐食の毒霧`,
			skillActiveDescription: `毒液装置を設置し、腐食ガスを放出して周囲の敵の最大アーマー値を一時的に低下させる。`,
			skillPassiveName: `トキシックバースト`,
			skillPassiveDescription: `武器攻撃で持続ダメージを与えると毒素が爆発し、追加ダメージを与えて最大アーマーを削る。`,
			skillTacticalName: `腐食溶液`,
			skillTacticalDescription: `目標エリアに毒液装置を投擲する。着地時に爆発して腐食エリアを生成し、範囲内の敵にダメージと減速を与え、弦化状態の敵には追加ダメージを与える。`,
			skillUltimateName: `ヴェノムウェイブ`,
			skillUltimateDescription: `前進する巨大な毒雲を召喚し、通過する敵のアーマーを腐食させて大ダメージを与える。`,
		},
		Leona: {
			Name: "レオナ",
			Type: "センチネル",
			skillActiveName: `キネティックバリア`,
			skillActiveDescription: `任意の角度でキネティックブロックを生成する。ブロックは最大16個まで設置可能。`,
			skillPassiveName: `ワークライフバランス`,
			skillPassiveDescription: `弦化中にエネルギーを持続回復する。50%以上で移動速度上昇、50%以下でアーマーが徐々に回復する。`,
			skillTacticalName: `防弾ガラス`,
			skillTacticalDescription: `設置したブロックの表面に一方向防弾ガラスを設置する。移動やスキルは妨げず、敵の銃弾のみを遮断する。防弾ガラスは最大3枚まで同時に存在可能。`,
			skillUltimateName: `ピュアフォートレス`,
			skillUltimateDescription: `エネルギーを全快し、既存および新規ブロックを恒久的に透明化して味方の射撃と視界を通すようにする。`,
		},
		Chiyo: {
			Name: "千代",
			Type: "デュエリスト",
			skillActiveName: `爆ぜる瞬華`,
			skillActiveDescription: `表面に吸着する爆発矢を放つ。手動で早期起爆するか、一定時間後に自動爆発する。`,
			skillPassiveName: `明鏡止水`,
			skillPassiveDescription: `集中力を徐々にチャージする。最大時に攻撃を命中させると集中力を消費して威力を強化する。`,
			skillTacticalName: `貫雲の矢`,
			skillTacticalDescription: `チャージ後に目標方向へスナイパーアローを放ち、命中部位に応じて大ダメージと急減衰する減速効果を与える。`,
			skillUltimateName: `天破楓燼`,
			skillUltimateDescription: `味方付近の敵を透視し、遮蔽物を貫通する強力なチャージ爆発矢を放つ。`,
		},
		Ming: {
			Name: "明",
			Type: "デュエリスト",
			skillActiveName: `破甲電球`,
			skillActiveDescription: `電球を発射し、接触・最大距離または手動再発動で起爆。範囲内の敵のアーマーを破壊し減速させる。`,
			skillPassiveName: `吸能の鎧`,
			skillPassiveDescription: `武器やスキルで敵のアーマーにダメージを与えると、そのダメージに応じて自身のアーマーを回復する。`,
			skillTacticalName: `フラッシュスフィア`,
			skillTacticalDescription: `閃光の電球を発射する。再発動または最大飛翔時間経過で起爆し、周囲の全敵に盲目効果を与える。起爆前のディレイ中は破壊可能。`,
			skillUltimateName: `強雷鋳甲`,
			skillUltimateDescription: `一時アーマーを獲得し、射撃に減速効果を付与する。アーマーを削ることで持続時間を延長できる。`,
		},
		Lawine: {
			Name: "ラヴィーネ",
			Type: "イニシエーター",
			skillActiveName: `影狩り`,
			skillActiveDescription: `パルスナイフを投擲して磁場を展開し、範囲内の敵をスキャンして味方に可視化する。最大3回スキャン可能。`,
			skillPassiveName: `影映し`,
			skillPassiveDescription: `メイン武器で敵にダメージを与えると、敵が一時的にラヴィーネに可視化される。`,
			skillTacticalName: `フラッシュブレード`,
			skillTacticalDescription: `目標エリアへ閃光の飛刃を投擲する。遮蔽物に接触すると起爆し、周囲の敵の視界を奪う。`,
			skillUltimateName: `影の帳`,
			skillUltimateDescription: `長方形のステルスフィールドを生成する。中に入ると透明化し移動速度が上昇する。`,
		},
		Meredith: {
			Name: "メレディス",
			Type: "コントローラー",
			skillActiveName: `風塵`,
			skillActiveDescription: `弦力オーブを放ち、着弾地点に砂嵐を生成する。範囲内の敵の移動速度とリロード速度を低下させ、HPを削る。`,
			skillPassiveName: `マミータイム`,
			skillPassiveDescription: `空中でのエイム時やスキル使用時に落下速度を低下させる。`,
			skillTacticalName: `ブラインドサンド`,
			skillTacticalDescription: `目標エリアに砂球を投擲する。着地時に砂煙を展開して敵の視界を遮り、内部の敵のリロード速度を低下させる。`,
			skillUltimateName: `流砂大葬`,
			skillUltimateDescription: `ピラミッドを展開して巨大な砂嵐を巻き起こし、敵を中心へと引き寄せながら視界を遮りHPを削る。`,
		},
		Reiichi: {
			Name: "令",
			Type: "コントローラー",
			skillActiveName: `破暁の帳`,
			skillActiveDescription: `傘を用いて縦または横に光の幕を展開し、敵の射線と視界を遮断する。`,
			skillPassiveName: `黎明の洞察`,
			skillPassiveDescription: `ADS中にスナイパーエネルギーをチャージし、最大時に前方の扇形エリアをスキャンして敵を可視化する。`,
			skillTacticalName: `聖障突進`,
			skillTacticalDescription: `前方へ短距離ダッシュし、ダッシュ軌道上に敵の銃弾を一時的に遮断する光のスクリーンを残す。`,
			skillUltimateName: `庇護の聖屏`,
			skillUltimateDescription: `破暁の帳を即座に再装填し、敵の銃弾を遮断する防御スクリーンへと強化する。`,
		},
		Kanami: {
			Name: "香奈美",
			Type: "イニシエーター",
			skillActiveName: `旋律の残響`,
			skillActiveDescription: `表面に吸着するメロディ弾を撃ち出し、共鳴パルスで周囲の敵を可視化・探知する。`,
			skillPassiveName: `交響爆音`,
			skillPassiveDescription: `弾丸命中時に音波マークを付与し、壁越しの敵と設置物を一時的に可視化する。`,
			skillTacticalName: `リズムサイクロン`,
			skillTacticalDescription: `目標方向へ音波の旋風を放つ。経路上の敵をノックバックさせ、スコープの照準を激しく揺らす妨害を与える。`,
			skillUltimateName: `ショウタイム`,
			skillUltimateDescription: `ホログラムステージを展開し、爆音で敵のADS照準をブレさせながら中心へと引き寄せる。`,
		},
		Eika: {
			Name: "アイカ",
			Type: "デュエリスト",
			skillActiveName: `灼熱の檻`,
			skillActiveDescription: `炎の檻を生成する。檻の境界を越える敵に大ダメージの燃焼ダメージを与える。`,
			skillPassiveName: `ソーラーフレア`,
			skillPassiveDescription: `銃撃を命中させて熱量を蓄積し、最大時にスキルを強化して追加効果を発動する。`,
			skillTacticalName: `エクスプロージョンボム`,
			skillTacticalDescription: `高熱のグレネードを発射し、敵や地形に命中すると爆発して範囲炎ダメージを与え、地面を炎上させる。`,
			skillUltimateName: `フレイムストーム`,
			skillUltimateDescription: `最大3つの火炎嵐を放ち、敵を上空へ巻き上げながら継続的な炎ダメージを与える。`,
		},
		Fragrans: {
			Name: "フラグランス",
			Type: "サポート",
			skillActiveName: `活力のトワレ`,
			skillActiveDescription: `香水エリアを放ち、範囲内の味方の射撃速度と移動速度を上昇させる。`,
			skillPassiveName: `癒しのアロマ`,
			skillPassiveDescription: `周囲の味方と自身のヘルスを持続的に自動回復する。`,
			skillTacticalName: `アロマミスト`,
			skillTacticalDescription: `目標エリアへ治癒の香霧を放ち、範囲内の味方に一時的な最大HP上昇と被弾で中断されない持続回復を付与する。`,
			skillUltimateName: `激情のパルファム`,
			skillUltimateDescription: `自身を中心とした強力な香水エリアを展開し、味方の射撃速度・移動速度・HP回復を大幅強化し自身に高倍率ダメージ軽減を付与する。`,
		},
		Mara: {
			Name: "マーラー",
			Type: "デュエリスト",
			skillActiveName: `ファントムグリップ`,
			skillActiveDescription: `前方に幽霊の手を放ち、最も近い敵の魂のオーブを引き出して減速させる。マーラーのみがこのオーブを銃撃でき、オーブへのダメージは敵のアーマーを無視してHPに直接ダメージを与える。`,
			skillPassiveName: `ソウルイーター`,
			skillPassiveDescription: `HPが減っている敵に武器でダメージを与えると、与ダメージに応じて自身のHPを回復し、アーマー無視の追加HPダメージを与える。この効果はソウルオーブにも適用される。`,
			skillTacticalName: `亡霊歩行`,
			skillTacticalDescription: `発動後、弦化時にステルス状態となり移動速度が上昇する。敵が接近すると姿を現す。アルティメット発動中は検知範囲がさらに縮小する。`,
			skillUltimateName: `死神降臨`,
			skillUltimateDescription: `最も近い敵に死の刻印を付与し、沈黙とマーラーのみに見える看破状態にする。対象のダウン・撃破に関与すると刻印が周囲の最も近い敵へと転移し時間がリセットされる。`,
		},
		Nora: {
			Name: "ノノ",
			Type: "イニシエーター",
			skillActiveName: `術式・霊影狩`,
			skillActiveDescription: `念霊を召喚して目標エリアへ飛行させる。念霊は範囲内の敵を透視・可視化し、最も近い敵をロックオンして攻撃し、ダメージとスコープのぼかし効果を与える。`,
			skillPassiveName: `術式・虚歩`,
			skillPassiveDescription: `一定時間ごとに、追加で3段目のジャンプが可能になる。`,
			skillTacticalName: `術式・幽暗破`,
			skillTacticalDescription: `念霊に指示を出し、遮蔽物を貫通する暗弦エネルギーを目標方向に発射する。敵に命中するか手動再発動で爆発し、周囲の敵にダメージと減速を与え、一定時間のエネルギー収束後にさらに激しい大爆発を引き起こす。`,
			skillUltimateName: `禁呪・暗翳狂狩宴`,
			skillUltimateDescription: `式神「空」の分身を大量に召喚して範囲内の敵を追跡する。「空」は敵に接近すると攻撃を行い、ダメージを与えて感知能力を制限する。`,
		},
		Celestia: {
			Name: "星理恵",
			Type: "サポート",
			skillActiveName: `ステラアーク`,
			skillActiveDescription: `味方に星光エネルギーを付与して一時アーマーを与え、戻ってきた星光で自身にも一時アーマーを付与する。`,
			skillPassiveName: `コズミックウォード`,
			skillPassiveDescription: `近くにいる味方と自身のアーマーを持続的に自動修復する。`,
			skillTacticalName: `アストラルアーマー`,
			skillTacticalDescription: `指定エリアに星光フィールドを生成する。フィールド内の味方はアーマーを急速回復し、一時的な移動速度上昇を獲得する。`,
			skillUltimateName: `星空の扉`,
			skillUltimateDescription: `味方を選択して大量の一時アーマーを付与し、チャージ完了後にその味方の位置へテレポートする。`,
		},
		Audrey: {
			Name: "オードリー",
			Type: "センチネル",
			skillActiveName: `火力全開`,
			skillActiveDescription: `マシンガンをバイポッド展開モードに移行させ、連射速度・装弾数・反動安定性を大幅に強化する。`,
			skillPassiveName: `ロイヤルシールド`,
			skillPassiveDescription: `ADS時や展開モード時に前面ガンシールドを展開して正面からの被弾を防ぐ。`,
			skillTacticalName: `アラートレーダー`,
			skillTacticalDescription: `地面に小型レーダーを設置する。敵が索敵範囲に入ると警報が鳴り、その敵の位置を一時的に可视化する。`,
			skillUltimateName: `戦術爆撃`,
			skillUltimateDescription: `6連発グレネードランチャーを装備し、着弾地点を火炎地帯にして継続ダメージを与える。`,
		},
		Maddelena: {
			Name: "マダレーナ",
			Type: "コントローラー",
			skillActiveName: `ペイントバインド`,
			skillActiveDescription: `インク弾を発射して着弾地点にペイントエリアを展開し、踏んだ敵を減速させ弦化を禁止する。`,
			skillPassiveName: `ペイントフットステップ`,
			skillPassiveDescription: `武器を命中させた敵にインクを付着させ、足跡を残して移動経路を可視化する。`,
			skillTacticalName: `ペイントサージ`,
			skillTacticalDescription: `ペイントバブルを発射する。着弾時に破裂して広範囲にインクを撒き散らし、インク上の敵は弦化不能かつ減速状態になる。`,
			skillUltimateName: `ペイントバブル`,
			skillUltimateDescription: `巨大なペイントバブルを発射して敵を閉じ込め、攻撃と弦化を封じながらダメージを与える。`,
		},
		Fuchsia: {
			Name: "フューシャ",
			Type: "デュエリスト",
			skillActiveName: `ブラッドハント`,
			skillActiveDescription: `周囲の低HPの敵の気配を感知し、障害物越しに一時的に輪郭を透視する。`,
			skillPassiveName: `ブラッドリカバー`,
			skillPassiveDescription: `キルやアシスト時にアドレナリンパックをドロップさせ、回収時にHP回復と移動速度上昇を獲得する。`,
			skillTacticalName: `クリムゾンラッシュ`,
			skillTacticalDescription: `狂熱状態となり前方へ突進する。突進中は行動不能無効となり、敵に命中するとダメージを与えて自身のHPを回復する。`,
			skillUltimateName: `ブラッディフレンジー`,
			skillUltimateDescription: `狂乱状態となり連射速度・リロード速度・移動速度が大幅上昇し、キル時にHPを回復する。`,
		},
		BaiMo: {
			Name: "白墨",
			Type: "デュエリスト",
			skillActiveName: `空で踊るぜ`,
			skillActiveDescription: `弦化状態で前方へ素早く突進し、ショットガンに弾を2発装填しながら一時無敵となる。`,
			skillPassiveName: `ヒップホップバースト`,
			skillPassiveDescription: `単発射撃で50以上のダメージを与えると、瞬間的な移動速度ブーストを獲得する。`,
			skillTacticalName: `グラフィティボム`,
			skillTacticalDescription: `壁や地面にグラフィティ爆弾をスプレーする。敵が接近すると自動で爆発し、範囲ダメージと視界妨害を与える。`,
			skillUltimateName: `ストリートへ帰還`,
			skillUltimateDescription: `リスポーンビーコンを設置する。死亡時や手動再発動時にビーコンの位置へHP全快でテレポートする。`,
		},
		Galatea: {
			Name: "ガラテア",
			Type: "イニシエーター",
			skillActiveName: `ピルエット`,
			skillActiveDescription: `カードを放ち、着弾地点に破壊可能な分身を生成する。インタラクションで位置を入れ替えることができ、分身は周囲の敵を探知する。`,
			skillPassiveName: `ミスディレクション`,
			skillPassiveDescription: `壁張りつき解除時に分身を残す。分身が破壊されるとクールダウンが発生する。`,
			skillTacticalName: `ブラインドカード`,
			skillTacticalDescription: `目標へ幻影のカードを投擲する。カードが爆発すると範囲内の敵の視界を奪い、敵を惑わす幻影を残す。`,
			skillUltimateName: `イリュージョン`,
			skillUltimateDescription: `前方に3枚のカードを放ち、3体の分身を同時生成して自在にテレポートする。`,
		},
		Cielle: {
			Name: "汐",
			Type: "デュエリスト",
			skillActiveName: `機動シールド`,
			skillActiveDescription: `エネルギーシールドを展開して被ダメージを遮断する。シールド展開中は前方に突進可能。シールドがダメージを受けるとアーマーが回復し、解除後は徐々に自己修復する。`,
			skillPassiveName: `自動装填チャンバー`,
			skillPassiveDescription: `武器を一時的に収めると自動でリロードされる。シールド突進後や手動起爆後に武器を収めるとHPが回復する。`,
			skillTacticalName: `グラビティリンク`,
			skillTacticalDescription: `破壊可能な重力オーブを発射し、敵を中心へと引き寄せて着弾時にダメージを与え、敵の召喚物には追加ダメージを与える。`,
			skillUltimateName: `アブソリュートディフェンス`,
			skillUltimateDescription: `エネルギーシールドを強化・再生し、シールドの耐久度を増加させ、突進のクールダウンを短縮して効果を大幅に強化する。`,
		},
	},
	characterTypes: {
		Sentinel: 'センチネル',
		Support: 'サポート',
		Controller: 'コントローラー',
		Duellist: 'デュエリスト',
		Initiator: 'イニシエーター'
	},
	grenades: {
		Flashbang: '閃光弹',
		FragGrenade: 'フラググレネード',
		HealingGrenade: '回復グレネード',
		Interceptor: 'インターセプター',
		SlowGrenade: '减速ボム',
		SmokeBomb: '煙幕弾',
		Alarm: '警報器',
		WindstormGrenade: '風雷ボム',
		SnowBall: '雪玉',
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
		mark: 'マーク',
		straightline: '直線',
		arrowline: 'Arrow Line',
		color: 'カラー',
		undo: '戻す',
		clear: '消去',
		clearwarning: {
			title: '全てのマークを消去しますか?',
			content: 'この操作は元に戻せません',
			ok: '確認',
			cancel: 'キャンセル',
			success: '全てのマークを消去しました',
			failure: 'マークの削除に失敗しました'
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