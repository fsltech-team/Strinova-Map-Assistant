import { FaGithub } from 'react-icons/fa'
import { Languages } from '../../types/interface'

export default {
  language: Languages.fr_FR,
  title: 'Strinova Map Assistant',
  announcement: 'Annonce',
  friendlink: "Liens d'amis",
  sitelist: 'Changer de serveur',
  announcementdata: {
    notshowntoday: 'Compris',
    pin: {
      title: 'Mise à jours',
      date: '2026.3.25',
      summary: 'Correction de bugs, ajout de la langue française',
      data: {}
    },
    history: []
  },
  friendlinkdata: {
    classify: {
      official: 'Officiel',
      wiki: 'Wiki',
      others: 'Autres'
    },
    official: [
      {
        name: '',
        icon: (
          <img
            style={{ height: '35px', filter: 'brightness(1000%) drop-shadow(0 0 2px rgba(var(--semi-grey-7))' }}
            src={import.meta.env.BASE_URL + 'images/remote/80381b7b_sec_ordlogo.png'}
          />
        ),
        url: 'https://klbq.qq.com/'
      },
      {
        name: '',
        icon: (
          <img
            style={{ height: '22px', filter: 'drop-shadow(0 0 2px rgba(var(--semi-grey-9))' }}
            src={import.meta.env.BASE_URL + 'images/remote/72d02e43_logo-white.png'}
          />
        ),
        url: 'https://www.strinova.com/'
      }
    ],
    wiki: [
      {
        name: '',
        icon: (
          <img
            style={{ height: '32px', filter: 'drop-shadow(0 0 2px rgba(var(--semi-grey-9))' }}
            src={import.meta.env.BASE_URL + 'images/remote/cfb7e6cb_NQTMvDZ5ah4omYR.png'}
          />
        ),
        url: 'https://wiki.biligame.com/klbq/'
      },
      {
        name: 'Strinovajp Wiki',
        icon: <></>,
        url: 'https://www.strinovajp-wiki.jp/index.html'
      },
      {
        name: '',
        icon: (
          <img
            style={{ height: '22px', filter: 'drop-shadow(0 0 2px rgba(var(--semi-grey-1))' }}
            src={import.meta.env.BASE_URL + 'images/remote/b1b81f36_R4UxmBPGd2f8kQ7.webp'}
          />
        ),
        url: 'https://strinova.wiki.gg/wiki/Strinova_Wiki'
      },
      {
        name: 'Miraheze Meta',
        icon: <></>,
        url: 'https://strinova.org/wiki/'
      },
      {
        name: '日本語wiki',
        icon: (
          <img
            style={{ height: '28px', filter: 'drop-shadow(0 0 2px rgba(var(--semi-grey-1))', marginRight: '8px' }}
            src={import.meta.env.BASE_URL + 'images/remote/e4a1f9f8_atwiki_logo_small.svg'}
          />
        ),
        url: 'https://w.atwiki.jp/calabiyau_jp/'
      },
      {
        name: 'Wiki FR',
        icon: <></>,
        url: 'https://strinova.org/wiki/Main_Page/fr'
      }
    ],
    others: [
      {
        name: '自建房助手',
        icon: (
          <img
            style={{ height: '35px', filter: 'drop-shadow(0 0 2px rgba(var(--semi-grey-1))', marginRight: '8px' }}
            src={import.meta.env.BASE_URL + 'images/remote/696fe7d4_pmYnw16rL2PQWBy.png'}
          />
        ),
        url: 'https://klbq.fsltech.cn/'
      },
      {
        name: 'Linkrachi974',
        icon: (
          <img
            style={{ height: '35px', filter: 'drop-shadow(0 0 2px rgba(var(--semi-grey-1))', marginRight: '8px' }}
            src={import.meta.env.BASE_URL + 'images/remote/profileLinkrachi.png'}
          />
        ),
        url: 'https://www.youtube.com/@linkrachi974'
      }
    ],
    contact: {
      content: (
        <div style={{ width: '100%', textAlign: 'center' }}>
          Pour s'ajouter en tant qu'ami, contactez <a href='mailto:fsltech@email.cn'>fsltech@email.cn</a>
        </div>
      )
    }
  },
  sitelistdata: {
    content: (
      <>
        <div>Nous avons configuré plusieurs sites pour une meilleure connexion. ( pas encore opérationnel )</div>
      </>
    ),
    Global: [
      {
        icon: (
          <>
            <FaGithub style={{ color: 'rgba(var(--semi-grey-9), 1)', fontSize: '20px', marginRight: '10px' }} />
          </>
        ),
        content: 'Github Page',
        url: 'https://khaos-experiences.fr/sma/'
      }
    ],
    CN: []
  },
  supportusdata: {
    content: (
      <>
        <div>
          <strong>STRINOVA MAP ASSISTANT</strong> est un projet open-source.
        </div>
        <div>Donc vous pouvez l'utiliser librement sous licence GPL-3.0.</div>
        <div>Certaines images peuvent nécessiter une autorisation.</div>
        <div>Veuillez contacter l'officiel.</div>
        <br />
        <div>Même si c'est le cas, votre soutien peut motiver les développeurs à améliorer ce projet.</div>
        <div>
          Quel que soit le soutien que vous apportez, vous serez répertorié sur la liste des noms de{' '}
          <strong>STRINOVA MAP ASSISTANT</strong>.
        </div>
        <div>
          Contactez <a href='mailto:fsltech@email.cn'>fsltech@email.cn</a> si vous avez d'autres questions.
        </div>
      </>
    ),
    global: 'International',
    CN: 'CN',
    list: 'Support List'
  },
  sidebar: {
    attact: 'Attaque',
    defense: 'Défense',
    mapsetting: 'Paramètre de la carte',
    character: 'Personnage',
    skill: 'Compétences',
    grenade: 'Grenades',
    other: 'Autres',
    lineup: 'Grenade Lineups',
    skilllineup: 'Skill Lineups',
    mobaisuperjump: 'Baimo Super Jumps',
    bugpoint: 'Bugs',
    bugpointwarning: (
      <div style={{ fontSize: '12px', textAlign: 'left' }}>
        <div>Les bugs listés ici sont à titre indicatif !</div>
        <div>Nous ne sommes pas responsables des interdictions pour l'abus de ces bugs.</div>
      </div>
    ),
    learnmore: 'En savoir plus',
    supportus: 'Soutien',
    supportusContent: <></>
  },
  mapsetting: {
    choosemap: 'Carte',
    maps: {
      WindyTown: 'Windy Town',
      SpaceLab: 'Space Lab',
      Khesmet: 'Khesmet',
      CauchyDistrict: 'Cauchy District',
      EulerPort: 'Port Euler',
      Area88: 'Area 88',
      Base404: 'Base 404',
      Ocarnus: 'Ocarnus',
      LebrunCity: 'Lembrun'
    },
    TeamHighlight: 'Team Highlight',
    TeamHighlightOptions: {
      prepare: 'Afficher',
      blank: 'Cacher'
    },
    Landmarks: 'Landmarks'
  },
  lineupsetting: {
    spotmark: 'Spot Mark',
    spotmarks: {
      disable: 'Désactiver',
      available: 'Disponible',
      all: 'Tout'
    }
  },
  skilllineupsetting: {
    spotmark: 'Spot Mark',
    spotmarks: {
      disable: 'Désactiver',
      available: 'Disponible',
      all: 'Tout'
    }
  },
  mobaisuperjumpsetting: {
    spotmark: 'Spot Mark',
    spotmarks: {
      disable: 'Désactiver',
      available: 'Disponible',
      all: 'Tout'
    }
  },
  bugpointsetting: {
    spotmark: 'Spot Mark',
    spotmarks: {
      disable: 'Désactiver',
      available: 'Disponible',
      all: 'Tout'
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
      Yugiri: 'Yugiri',
      Leona: 'Leona',
      Chiyo: 'Chiyo'
    },
    TheScissors: {
      Ming: 'Ming',
      Lawine: 'Lawine',
      Meredith: 'Meredith',
      Reiichi: 'Reiichi',
      Kanami: 'Kanami',
      Eika: 'Eika',
      Fragrans: 'Fragrans',
      Mara: 'Mara'
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
      Name: 'Michele',
      Type: 'Sentinel',
      skillActiveName: `Chat gardien`,
      skillActiveDescription: `Michele lance une petite tourelle qui s'attache à n'importe quelle surface (sauf les joueurs). La tourelle attaque automatiquement les ennemis (10 dégâts/seconde) et les ralentit.`,
      skillPassiveName: `Traque féline`,
      skillPassiveDescription: `Les ennemis qui ont blessé Michele seront mis en évidence pour Michele et ses coéquipiers.`,
      skillTacticalName: `Piège félin`,
      skillTacticalDescription: `Michele lance un piège félin qui s'active automatiquement lors de la détection, infligeant des dégâts à tous les ennemis proches.`,
      skillUltimateName: `Chat laser féroce`,
      skillUltimateDescription: `Michele déploie un gros drone Meow Meow avec une puissance de feu impressionnante. Il attaquera automatiquement les ennemis avec de gros dégats.`
    },
    Nobunaga: {
      Name: 'Nobunaga',
      Type: 'Sentinel',
      skillActiveName: `Œil gardien`,
      skillActiveDescription: `Nobunaga déploie un Œil gardien pour augmenter la cadence de tir, l'ergonomie des armes et régénérer l'armure lorsque vous êtes à sa portée. Connectez des Yeux gardiens pour renforcer ces bonus.`,
      skillPassiveName: `Tir aveuglant`,
      skillPassiveDescription: `Nobunaga charge de l'énergie en mode ADS. Une fois chargée au maximum, vos tirs sur les ennemis réduiront la précision de leurs armes.`,
      skillTacticalName: `Mine à impulsions`,
      skillTacticalDescription: `Nobunaga lance une mine qui s'active en détectant des ennemis et inflige progressivement des DÉG à tous ceux qui se trouvent à portée, y compris vous-même.`,
      skillUltimateName: `Surcharge d'impulsions`,
      skillUltimateDescription: `Nobunaga déploie un générateur d'impulsions émettant des ondes périodiques. Les ennemis touchés sont révélés et réduits au silence.`
    },
    Kokona: {
      Name: 'Kokona',
      Type: 'Support',
      skillActiveName: `Drone de soin`,
      skillActiveDescription: `Kokona déploie un drone sur vous-même ou sur un coéquipier pour restaurer l'armure et soigner tous les alliés proches.`,
      skillPassiveName: `Premiers secours`,
      skillPassiveDescription: `Kokona régénère lentement les PV lorsque vous ne subissez pas de dégâts. Lorsque vous aidez un allié, déployez un drone de soutien pour le secourir automatiquement.`,
      skillTacticalName: `Station de soin`,
      skillTacticalDescription: `Kokona déploie un drone pour générer une zone de soin qui restaure continuellement les PV des alliés se trouvant à l'intérieur. L'effet de soin n'est pas interrompu par les DÉG.`,
      skillUltimateName: `Reconstruction`,
      skillUltimateDescription: `Kokona sélectionne un coéquipier : ranimez-le à proximité s'il est à terre. S'il est en vie, augmentez temporairement sa cadence de tir, sa vitesse de déplacement et son ergonomie des armes, tout en réduisant les dégâts subis.`
    },
    Yvette: {
      Name: 'Yvette',
      Type: 'Controller',
      skillActiveName: `Assaut de nounours`,
      skillActiveDescription: `Yvette invoque Fay pour charger, laissant de la glace en cas de collision avec des obstacles. Les ennemis à portée dérapent et deviennent plus vulnérables.`,
      skillPassiveName: `Dissimulation`,
      skillPassiveDescription: `Yvette reste immobile pour entrer en mode camouflage furtif, et ne devient visible que lorsque les ennemis se rapprochent.`,
      skillTacticalName: `subName`,
      skillTacticalDescription: `Yvette lance une boule de glace pour créer un grand pilier qui fait déraper les ennemis proches et les rend vulnérables. Une fois détruit, le pilier laisse une surface gelée être brisée manuellement.`,
      skillUltimateName: `Pluie de givre`,
      skillUltimateDescription: `Yvette invoque un Ours de givre pour créer des Zones polaires, faisant déraper les ennemis, les rendant vulnérables et réduisant leur cadence de tir et leur ergonomie des armes.`
    },
    Flavia: {
      Name: 'Flavia',
      Type: 'Duellist',
      skillActiveName: `Mirage fantôme`,
      skillActiveDescription: `Pendant que les papillons suivent Flavia, subir des DÉG de PV la rend temporairement invincible et invoque un orbe fantôme à son emplacement. Cet orbe limite la vision des ennemis et peut être détruit.`,
      skillPassiveName: `Nouvelle genèse`,
      skillPassiveDescription: `Subir de faibles DÉG réduit le TdR de la compétence active de Flavia. Subir des DÉG importants accorde temporairement des points ultimes temporaires à Flavia, valables pour la manche en cours.'`,
      skillTacticalName: `Ombrerêve`,
      skillTacticalDescription: `Flavia crée une fumée hallucinogène qui désoriente les ennemis à l'intérieur. Tant que Flavia est dans la fumée, son armure est restaurée en continu, sans être affectée par les dégâts.`,
      skillUltimateName: `Papillonnement fantôme`,
      skillUltimateDescription: `Flavia crée une Zone fantôme autour de vous. À l'intérieur, les attaques ennemies fatales déclenchent un bref état d'invincibilité. Les ennemis situés à l'extérieur ne peuvent voir Flavia que lorsqu'ils sont attaqués.`
    },
    Yugiri: {
      Name: 'Yugiri',
      Type: 'Controller',
      skillActiveName: `Brume corrosive`,
      skillActiveDescription: `Yugiri déploie un dispositif en forme d'escargot qui corrode temporairement l'armure max des ennemis proches. Jusqu'à 3 dispositifs peuvent exister à la fois.`,
      skillPassiveName: `Explosion de toxine`,
      skillPassiveDescription: `Après avoir infligé suffisamment de DÉG de PV avec l'arme principale, elle inflige des DÉG supplémentaires à la cible et aux ennemis proches, réduisant temporairement leur armure max.`,
      skillTacticalName: `Solution corrosive`,
      skillTacticalDescription: `Yugiri lance un appareil corrosif sur la zone cible, infligeant des dégâts et ralentissant en continu les ennemis à l'intérieur.`,
      skillUltimateName: `Formation venimeuse`,
      skillUltimateDescription: `Yugiri invoque un immense nuage qui se déplace vers l'avant, réduisant temporairement l'armure max des ennemis sur son passage.`
    },
    Leona: {
      Name: 'Leona',
      Type: 'Sentinel',
      skillActiveName: `Barrière cinétique`,
      skillActiveDescription: `Leona génère des blocs carrés sur diverses surfaces avec deux options d'angle. La création de blocs consomme des points de compétence et de l'énergie. Les blocs peuvent être facilement détruits par des armes de mêlée, et jusqu'à 16 blocs peuvent exister simultanément.`,
      skillPassiveName: `Équilibre travail-vie privée`,
      skillPassiveDescription: `Leona restaure continuellement l'énergie et augmente la vitesse de déplacement. L'armure se restaure progressivement après une période d'immobilité.`,
      skillTacticalName: `Vitre pare-balle`,
      skillTacticalDescription: `Leona utilise des points de compétence et de l'énergie des cordes pour créer une vitre pare-balle dans une zone désignée. Jusqu'à 3 vitres pare-balles peuvent exister à la fois.`,
      skillUltimateName: `Forteresse de pureté`,
      skillUltimateDescription: `Leona remplit la barre d'énergie et restaure des charges de compétence active. Pendant la durée de la compétence, les blocs existants deviennent définitivement transparents et ne bloquent plus les chemins ni les balles alliées.`
    },
    Chiyo: {
      Name: 'Chiyo',
      Type: 'Duellist',
      skillActiveName: `Explosion de brillance`,
      skillActiveDescription: `Chiyo tire une flèche explosive qui adhère aux surfaces et peut être déclenchée prématurément, ou explose automatiquement à la fin de sa durée.`,
      skillPassiveName: `Volonté constante`,
      skillPassiveDescription: `Chiyo bénéficie d'une récupération progressive de la concentration, qui ralentit brièvement après les attaques. Une fois pleine, la concentration est consommée pour augmenter les DÉG pendant un court instant.`,
      skillTacticalName: `Perce-nuage`,
      skillTacticalDescription: `Chiyo charge et tire une flèche sur la cible, infligeant des DÉG élevés et un effet de ralentissement qui s'estompe rapidement en fonction du point d'impact.`,
      skillUltimateName: `Brise-ciel`,
      skillUltimateDescription: `Chiyo révèle temporairement les ennemis proches de vos alliés et tire une flèche explosive perforante et chargée sur la cible. La flèche explose lorsqu'elle atteint sa portée maximale ou touche un ennemi.`
    },
    Ming: {
      Name: 'Ming',
      Type: 'Duellist',
      skillActiveName: `Explosion fragmentée`,
      skillActiveDescription: `Ming tire une orbe électrique qui explose au moindre contact ou en atteignant sa portée maximale, drainant les points d'armure des ennemis à portée tout en les ralentissant. Sa détonation peut être provoquée manuellement.`,
      skillPassiveName: `Égide d'absorption`,
      skillPassiveDescription: `Les armes de Ming infligent des DÉG supplémentaires à l'armure ennemie. Endommager l'armure ennemie régénère la vôtre.`,
      skillTacticalName: `Orbe de choc`,
      skillTacticalDescription: `Ming tire un orbe de choc qui explose sur commande ou à portée maximale, étourdissant et réduisant la cadence de tir des ennemis proches, avec un effet de visée floue.`,
      skillUltimateName: `Pic de protection`,
      skillUltimateDescription: `Ming obtient une armure temporaire et applique un effet de ralentissement avec ses tirs. Infligez des dégâts à l'armure ennemie avec des armes ou des compétences pour prolonger la durée de la compétence et restaurer l'armure temporaire.`
    },
    Lawine: {
      Name: 'Lawine',
      Type: 'Initiator',
      skillActiveName: `Dague à impulsions`,
      skillActiveDescription: `Lawine lance une dague à impulsions pour créer un champ qui révèle les ennemis dans la zone`,
      skillPassiveName: `Ombre de révélation`,
      skillPassiveDescription: `Lorsque l'arme principale de Lawine touche un ennemi, son emplacement est brièvement révélé.`,
      skillTacticalName: `Lame des ombres`,
      skillTacticalDescription: `Lawine lance une dague à impulsions pour infliger des DÉG de zone, brouiller les lunettes et infliger des DÉG supplémentaires aux invocations ennemies.`,
      skillUltimateName: `Experte en furtivité`,
      skillUltimateDescription: `Lawine crée une zone furtive devant vous, ce qui vous fait devenir invisible et augmente votre vitesse de déplacement en rentrant dedans. Attaquer ou interagir brièvement révèle votre position.`
    },
    Meredith: {
      Name: 'Meredith',
      Type: 'Controller',
      skillActiveName: `Tempête de sable`,
      skillActiveDescription: `Meredith lance une orbe d'énergie qui crée un champ de sable lorsqu'elle touche un ennemi ou un obstacle. Tous les ennemis à l'intérieur sont ralentis, leur vitesse de rechargement est réduite et leur santé diminue progressivement.`,
      skillPassiveName: `Time Warp`,
      skillPassiveDescription: `Reduce Meredith's falling speed when aiming, using skills and nades.`,
      skillTacticalName: `subName`,
      skillTacticalDescription: `subDescription`,
      skillUltimateName: `Quicksand Burial`,
      skillUltimateDescription: `Meredith throws a pyramid artifact and create a massive sandstorm. All enemy inside will be near-sighted, HP reduced overtime, slowed down while being pulled to the center. Allies also got near-sighted.`
    },
    Reiichi: {
      Name: 'Reiichi',
      Type: 'Controller',
      skillActiveName: `Tempête de sable`,
      skillActiveDescription: `Reiichi lance un orbe d'énergie pour créer une Tempête de sable au point d'impact, réduisant temporairement sa vitesse de déplacement, l'ergonomie des armes et les PV de l'ennemi.`,
      skillPassiveName: `Anneaux d'ordre zéro`,
      skillPassiveDescription: `Dans les airs, Reiichi peut viser ou tirer qui ralentit sa descente.`,
      skillTacticalName: `Sable aveuglant`,
      skillTacticalDescription: `Reiichi lance un orbe d'énergie pour créer une tempête de sable qui bloque la vision.`,
      skillUltimateName: `Ensablement`,
      skillUltimateDescription: `Reiichi invoque un Haboob pour obscurcir le champ de vision et drainer temporairement les PV ennemis.`
    },
    Kanami: {
      Name: 'Kanami',
      Type: 'Initiator',
      skillActiveName: `Chambre d'écho`,
      skillActiveDescription: `Kanami tire un Disque sonar pour révéler les ennemis dans la zone.`,
      skillPassiveName: `Révélation d'écho`,
      skillPassiveDescription: `Les tirs de l'arme principale créent une Zone sonar, révélant les ennemis à l'intérieur à Kanami.`,
      skillTacticalName: `Piège sonique`,
      skillTacticalDescription: `Kanami lance un mini haut-parleur pour ralentir brièvement les ennemis qui sont à sa portée.`,
      skillUltimateName: `Showtime`,
      skillUltimateDescription: `Kanami invoque une figure holographique qui joue de la musique, ralentissant, étourdissant et désorientant les ennemis, réduisant ainsi leur cadence de tir.`
    },
    Eika: {
      Name: 'Eika',
      Type: 'Duellist',
      skillActiveName: `Purgatoire`,
      skillActiveDescription: `Eika invoque une Cage de flammes. Tant qu'Eika et ses ennemis sont à l'intérieur, son arme principale inflige des DÉG de brûlure supplémentaires. Les ennemis qui franchissent les parois de la cage subissent des DÉG de brûlure, ainsi que des DÉG supplémentaires pour les ennemis en transposition ou lorsque la chaleur est au maximum. Si la cage est vide, elle se dissipe.`,
      skillPassiveName: `Batterie solaire`,
      skillPassiveDescription: `Chaque tir sur un ennemi accumule de la chaleur. Lorsque la chaleur est au maximum, les DÉG infligés aux ennemis en transposition augmentent. Les compétences consomment automatiquement de la chaleur pour des effets renforcés.`,
      skillTacticalName: `Boule de feu explosive`,
      skillTacticalDescription: `Eika lance une boule de feu explosive qui inflige des DÉG supplémentaires aux ennemis en transposition. Eika consomme 100 points de chaleur pour obtenir une augmentation des DÉG et un effet de ralentissement.`,
      skillUltimateName: `Tempête de feu`,
      skillUltimateDescription: `Eika déclenche une Tempête de feu pour forcer les ennemis à planer et leur infliger des DÉG de brûlure. Lorsque la chaleur est au maximum, la tempête est plus étendue, inflige plus de DÉG et met les ennemis en évidence.`
    },
    Fragrans: {
      Name: 'Fragrans',
      Type: 'Support',
      skillActiveName: `Pic de parfum`,
      skillActiveDescription: `Fragrans libère du parfum pour créer un champ aromatique qui augmente la cadence de tir ou la vitesse de déplacement des alliés. L'effet s'estompe progressivement.`,
      skillPassiveName: `Aura d'élixir`,
      skillPassiveDescription: `Fragrans libère un parfum curatif pour restaurer lentement ses PV ainsi que ceux de ses coéquipiers à proximité.`,
      skillTacticalName: `Miasme`,
      skillTacticalDescription: `Fragrans lance un parfum de soin qui confère aux alliés présents dans la zone une augmentation temporaire des PV max et des soins en continu, non affectés par les DÉG.`,
      skillUltimateName: `Arôme euphorique`,
      skillUltimateDescription: `Fragrans crée un puissant champ aromatique qui augmente en continu la cadence de tir, la vitesse de déplacement et la régénération des PV des alliés. Les armes ne peuvent pas être utilisées pendant la création du champ, mais Fragrans bénéficie d'une importante réduction des DÉG.`
    },
    Mara: {
      Name: 'Mara',
      Type: 'Duellist',
      skillActiveName: `Poignée fantôme`,
      skillActiveDescription: `Mara lance une main fantôme pour cibler l'ennemi debout le plus proche, lui arracher un orbe d'âme et le ralentir. L'orbe d'âme ne peut être touché que par vous, infligeant à l'ennemi des DÉG de PV sans tenir compte de l'armure.`,
      skillPassiveName: `Pilleur d'âmes`,
      skillPassiveDescription: `Mara inflige des DÉG aux ennemis qui n'ont pas tous leurs PV pour infliger des DÉG de PV supplémentaires sans tenir compte de l'armure, et restaurer ses propres PV.`,
      skillTacticalName: `Approche de la Faucheuse`,
      skillTacticalDescription: `Mara se transpose pour entrer en furtivité. Elle deviendra visible lorsqu'elle sera à proximité des ennemis. La vitesse de déplacement augmente et elle bénéficie d'une réduction des DÉG supplémentaire lors de la transposition.`,
      skillUltimateName: `Faucheuse`,
      skillUltimateDescription: `Mara marque l'ennemi le plus proche, ce qui le réduit au silence et révèle sa position. Si Mara neutralise ou élimine la cible, la marque est transférée à l'ennemi debout le plus proche à portée et sa durée est réinitialisée.`
    },
    Celestia: {
      Name: 'Celestia',
      Type: 'Support',
      skillActiveName: `Astre gardien`,
      skillActiveDescription: `Celestia octroie une armure temporaire à un coéquipier sélectionné et à elle-même. La compétence la cible automatiquement lorsqu'aucun coéquipier n'est en vue.`,
      skillPassiveName: `Récupération cosmique`,
      skillPassiveDescription: `Celestia restaure en continu son armure et celle de ses alliés proches.`,
      skillTacticalName: `Étoile rayonnante`,
      skillTacticalDescription: `Celestia lance une fusée stellaire pour créer une zone de récupération d'armure qui octroie aux alliés une armure temporaire ainsi qu'une régénération d'armure en continu lorsqu'ils se trouvent à l'intérieur. Cet effet n'est pas interrompu par les DÉG.`,
      skillUltimateName: `Porte astrale`,
      skillUltimateDescription: `Celestia choisit un coéquipier pour vous donner à tous les deux une armure temporaire et commencer à charger. Celestia se téléporte vers lui une fois la charge terminée.`
    },
    Audrey: {
      Name: 'Audrey',
      Type: 'Sentinel',
      skillActiveName: `Feu nourri`,
      skillActiveDescription: `Audrey passe en mode Déploiement ; le tir continu peut provoquer une surchauffe.`,
      skillPassiveName: `Bouclier royal`,
      skillPassiveDescription: `Audrey génère un bouclier frontal lorsque vous passez en mode Déploiement ou ADS, avec une capacité de bouclier accrue en mode Déploiement.`,
      skillTacticalName: `Tourelle à grenades`,
      skillTacticalDescription: `Audrey déploie une tourelle à grenades qui tire automatiquement des grenades explosives sur les ennemis en vue.`,
      skillUltimateName: `Bombardement`,
      skillUltimateDescription: `Audrey tire jusqu'à 6 grenades, créant une mer de flammes qui inflige des dégâts continus à tous les ennemis à portée.`
    },
    Maddelena: {
      Name: 'Maddelena',
      Type: 'Controller',
      skillActiveName: `Carcan coloré`,
      skillActiveDescription: `Maddelena tire un jet de peinture qui bloque la transposition des ennemis à portée, les ralentit, et révèle leurs empreintes.`,
      skillPassiveName: `Traces de peinture`,
      skillPassiveDescription: `Les coups de l'arme principale ralentissent les ennemis et révèlent leurs traces.`,
      skillTacticalName: `Seau de peinture`,
      skillTacticalDescription: `Maddelena projette des bulles de peinture vers l'avant, qui bloquent les balles des ennemis, les ralentissements et la transposition des ennemis proches. Les bulles éclatent après avoir subi le maximum de DÉG.`,
      skillUltimateName: `Bulle de peinture`,
      skillUltimateDescription: `Maddelena tire une bulle géante qui bloque la transposition des ennemis qui se trouvent à l'intérieur et révèle leurs traces. Lorsqu'elle éclate, elle ralentit les ennemis dans la zone et les rend vulnérables.`
    },
    Fuchsia: {
      Name: 'Fuchsia',
      Type: 'Duellist',
      skillActiveName: `Superprédatrice`,
      skillActiveDescription: `Fuchsia détecte les ennemis proches : les cibles qui possèdent tous leurs PV apparaissent brièvement, tandis que celles qui ont moins de PV restent visibles plus longtemps, uniquement par elle. Quand Fuchsia détecte les ennemis augmente sa vitesse de déplacement ainsi que les DÉG qu'elle leur inflige.`,
      skillPassiveName: `Festin de chasse`,
      skillPassiveDescription: `Des cristaux d'énergie sont largués lorsque Fuchsia participe à une élimination. Fuchsia absorbe les cristaux pour restaurer ses PV. La première absorption augmente les PV max.`,
      skillTacticalName: `Ruée écarlate`,
      skillTacticalDescription: `Fuchsia consomme une petite quantité de PV pour bénéficier d'un court boost de la vitesse de déplacement, restaurant progressivement les PV perdus une fois le boost terminé.`,
      skillUltimateName: `Bain de sang`,
      skillUltimateDescription: `Fuchsia augmente considérablement sa cadence de tir et l'ergonomie des armes, mettant en évidence les ennemis qui se trouvent dans le champ de vision de sa compétence active. Quand Fuchsia absorbe des cristaux d'énergie prolonge la durée de cet effet.`
    },
    BaiMo: {
      Name: 'BaiMo',
      Type: 'Duellist',
      skillActiveName: `Valse de choc`,
      skillActiveDescription: `Baimo se transpose pour foncer vers l'avant et recharger son arme principale. Quand BaiMo touche des ennemis, il récupère un peu de TdR.`,
      skillPassiveName: ` Foulée agile`,
      skillPassiveDescription: `BaiMo augmente brièvement sa vitesse de déplacement lorsqu'il utilise une compétence active, subit des DÉG infligés par une arme ou une arme de jet, ou qu'il évite les balles en transposition.`,
      skillTacticalName: `Graffiti explosif`,
      skillTacticalDescription: `BaiMo lance une bombe de peinture explosive qui ralentit, étourdit et réduit la cadence de tir des ennemis proches.`,
      skillUltimateName: `Bagarreur de rue`,
      skillUltimateDescription: `BaiMo place une balise pour réapparaître instantanément s'il est à terre ou s'il est éliminé. Quand BaiMo appuie à nouveau sur la touche de compétence, il revient à la balise.`
    },
    Galatea: {
      Name: 'Galatea',
      Type: 'Initiator',
      skillActiveName: `Carte de bluff`,
      skillActiveDescription: `Galatea lance une carte qui crée un leurre à l'impact. Quand Galatea appuie sur la touche d'interaction, elle se téléporte auprès du leurre.`,
      skillPassiveName: `Imposture`,
      skillPassiveDescription: `Galatea laisse un leurre lorsqu'elle se détache d'un mur. Si le leurre est endommagé, l'effet entre en TdR. Dès leur création, tous les leurres révèlent brièvement les ennemis proches. De plus, attaquer un leurre révèle la position des attaquants.`,
      skillTacticalName: `Ombre aveuglante`,
      skillTacticalDescription: `Galatea invoque un leurre vers lequel il est impossible de se téléporter. S'il est détruit, il aveugle tous les ennemis proches.`,
      skillUltimateName: `Mirage`,
      skillUltimateDescription: `Galatea lance des cartes vers l'avant pour créer trois leurres de téléportation à différents emplacements et actualiser la compétence active.`
    },
    Cielle: {
      Name: 'Cielle',
      Type: 'Duellist',
      skillActiveName: `Bouclier mobile`,
      skillActiveDescription: `Cielle déploie un bouclier énergétique pour bloquer les DÉG. Cielle peut charger en avant tant que le bouclier est actif. Son armure est restaurée lorsque le bouclier subit des DÉG. Ce dernier se répare progressivement après sa désactivation. Les fusils de précision lui infligent des DÉG supplémentaires.`,
      skillPassiveName: `Chambre automatique`,
      skillPassiveDescription: `Cielle après avoir brièvement rengainé votre arme, celle-ci se recharge automatiquement. Quand Cielle rengaine son arme après une charge de bouclier ou une détonation manuelle, elle récupère des PV.`,
      skillTacticalName: `Liaison gravitationnelle`,
      skillTacticalDescription: `Cielle lance une orbe de gravité destructible qui attire les ennemis vers son centre, inflige des DÉG à l'atterrissage et inflige des DÉG supplémentaires aux invocations ennemies.`,
      skillUltimateName: `Défense absolue`,
      skillUltimateDescription: `Cielle améliore et régénère le bouclier énergétique, ce qui augmente ses PV, réduit le temps de recharge de la charge et renforce ses effets.`
    }
  },
  characterTypes: {
    Sentinel: 'Sentinel',
    Support: 'Support',
    Controller: 'Controller',
    Duellist: 'Duellist',
    Initiator: 'Initiator'
  },
  grenades: {
    Flashbang: 'Grenade Flash',
    FragGrenade: 'Grenade Fragmentation',
    HealingGrenade: 'Grenade de soins',
    Interceptor: 'Grenade Intercepteur',
    SlowGrenade: 'Grenade Ralentissement',
    SmokeBomb: 'Grenade Fumigène',
    Alarm: 'Grenade Alarme',
    WindstormGrenade: 'Grenade Tempête',
    SnowBall: 'Boule de neige',
    ShieldBarrier: 'Shield Barrier'
  },
  others: {
    Bomb: 'Bombe',
    BombA: 'Bombe A',
    BombB: 'Bombe B',
    BombC: 'Bombe C',
    Focus: 'Focus',
    Warning: 'Attention',
    Flag: 'Drapeau',
    Danger: 'Danger'
  },
  markbox: {
    mark: 'Marqueur',
    straightline: 'Ligne droite',
    arrowline: 'Ligne fléchée',
    color: 'Couleur',
    undo: 'Annuler',
    clear: 'Effacer',
    clearwarning: {
      title: 'Confirmer pour effacer tous les marqueurs?',
      content: 'Cette action ne peut pas être annulée',
      ok: 'Confirmer',
      cancel: 'Annuler',
      success: 'Marqueurs effacés',
      failure: "Échec de l'effacement des marqueurs"
    }
  },
  shortcutsModal: {
    title: 'Raccourcis clavier',
    sections: [
      {
        title: 'Outils',
        items: [
          { key: 'S', description: 'Outil de sélection' },

          { key: 'D', description: 'Outil crayon / dessin libre' },
          { key: 'E', description: 'Outil ligne droite' },
          { key: 'A', description: 'Outil ligne fléchée' },
          { key: 'C', description: 'Outil cercle' },
          { key: 'R', description: 'Outil rectangle' },
          { key: 'T', description: 'Outil texte' },
        ]
      },
      {
        title: 'Historique',
        items: [
          { key: 'Ctrl + Z', description: 'Annuler la dernière action' },
          { key: 'Ctrl + Y', description: 'Rétablir la dernière action' },
        ]
      },
      {
        title: 'Fichier',
        items: [
          { key: 'Ctrl + S', description: 'Sauvegarder le fichier' },
          { key: 'Ctrl + O', description: 'Charger un fichier' },
          { key: 'Ctrl + I', description: 'Exporter en image' },
        ]
      },
      {
        title: 'Canevas',
        items: [
          { key: 'Alt + Clic', description: 'Déplacer la cible de la loupe' },
          { key: 'Maj + Glisser', description: 'Rotation crantée (15°)' },
        ]
      },
    ]
  }
}
