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
      date: '2026.8.14',
      summary: 'Ajout du nouveau personnage Nora',
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
    	Type: "Sentinelle",
    	skillActiveName: `Tourelle miaou`,
    	skillActiveDescription: `Michele lance une tourelle qui se fixe sur n'importe quelle surface pour attaquer automatiquement les ennemis et les ralentir.`,
    	skillPassiveName: `Sens félin`,
    	skillPassiveDescription: `Les ennemis infligeant des dégâts à Michele sont temporairement révélés à toute l'équipe.`,
    	skillTacticalName: `Tourelle féline`,
    	skillTacticalDescription: `Michele invoque un chat-tourelle dans la direction ciblée qui tire des projectiles ralentissants sur les ennemis à portée, réduisant leur cadence de tir et leur vitesse de déplacement.`,
    	skillUltimateName: `Méga miaou`,
    	skillUltimateDescription: `Michele déploie un grand drone d'assaut lourd qui bombarde automatiquement les ennemis dans une large zone.`,
    },
    Nobunaga: {
    	Name: "Nobunaga",
    	Type: "Sentinelle",
    	skillActiveName: `Œil omniscient`,
    	skillActiveDescription: `Nobunaga place un œil de veille sur une surface pour détecter et révéler les ennemis proches.`,
    	skillPassiveName: `Tir à impulsions`,
    	skillPassiveDescription: `Tirer avec l'arme principale charge une impulsion électromagnétique qui brouille le radar ennemi.`,
    	skillTacticalName: `Mine à impulsions`,
    	skillTacticalDescription: `Nobunaga lance une mine à impulsions qui explose à l'approche des ennemis, détruisant leur armure et leur infligeant un ralentissement temporaire ainsi que l'interdiction de se transposer.`,
    	skillUltimateName: `Surcharge à impulsions`,
    	skillUltimateDescription: `Nobunaga libère une onde électromagnétique géante qui neutralise les compétences ennemies et révèle leur position.`,
    },
    Kokona: {
    	Name: "Kokona",
    	Type: "Support",
    	skillActiveName: `Drone de soin`,
    	skillActiveDescription: `Kokona déploie un drone médical pour soigner continuellement un allié sélectionné ou elle-même.`,
    	skillPassiveName: `Secours rapide`,
    	skillPassiveDescription: `Kokona réanime ses coéquipiers plus rapidement et leur octroie une armure temporaire.`,
    	skillTacticalName: `Station de soin`,
    	skillTacticalDescription: `Kokona déploie une station médicale sur place qui restaure continuellement les PV des alliés proches et leur confère une réduction des dégâts.`,
    	skillUltimateName: `Reconstruction`,
    	skillUltimateDescription: `Kokona canalise un champ de soin à distance qui réanime les alliés tombés et restaure tous les PV à portée.`,
    },
    Yvette: {
    	Name: "Yvette",
    	Type: "Contrôleur",
    	skillActiveName: `Assaut de nounours`,
    	skillActiveDescription: `Yvette invoque Fay pour charger, laissant de la glace en cas de collision avec des obstacles. Les ennemis à portée dérapent et deviennent plus vulnérables.`,
    	skillPassiveName: `Dissimulation`,
    	skillPassiveDescription: `Yvette reste immobile pour entrer en mode camouflage furtif, et ne devient visible que lorsque les ennemis se rapprochent.`,
    	skillTacticalName: `Pilier de givre`,
    	skillTacticalDescription: `Yvette lance une boule de glace pour créer un grand pilier qui fait déraper les ennemis proches et les rend vulnérables. Une fois détruit, le pilier laisse une surface gelée pouvant être brisée manuellement.`,
    	skillUltimateName: `Pluie de givre`,
    	skillUltimateDescription: `Yvette invoque un Ours de givre pour créer des Zones polaires, faisant déraper les ennemis, les rendant vulnérables et réduisant leur cadence de tir et leur ergonomie des armes.`,
    },
    Flavia: {
    	Name: "Flavia",
    	Type: "Duelliste",
    	skillActiveName: `Mirage fantôme`,
    	skillActiveDescription: `Pendant que les papillons suivent Flavia, subir des DÉG de PV la rend temporairement invincible et invoque un orbe fantôme à son emplacement. Cet orbe limite la vision des ennemis et peut être détruit.`,
    	skillPassiveName: `Nouvelle genèse`,
    	skillPassiveDescription: `Subir de faibles DÉG réduit le TdR de la compétence active de Flavia. Subir des DÉG importants accorde temporairement des points ultimes temporaires à Flavia, valables pour la manche en cours.`,
    	skillTacticalName: `Ombrerêve`,
    	skillTacticalDescription: `Flavia crée une fumée hallucinogène qui désoriente les ennemis à l'intérieur. Tant que Flavia est dans la fumée, son armure est restaurée en continu, sans être affectée par les dégâts.`,
    	skillUltimateName: `Papillonnement fantôme`,
    	skillUltimateDescription: `Flavia crée une Zone fantôme autour de vous. À l'intérieur, les attaques ennemies fatales déclenchent un bref état d'invincibilité. Les ennemis situés à l'extérieur ne peuvent voir Flavia que lorsqu'ils sont attaqués.`,
    },
    Yugiri: {
    	Name: "Yugiri",
    	Type: "Contrôleur",
    	skillActiveName: `Brume corrosive`,
    	skillActiveDescription: `Yugiri déploie un dispositif en forme d'escargot qui corrode temporairement l'armure max des ennemis proches. Jusqu'à 3 dispositifs peuvent exister à la fois.`,
    	skillPassiveName: `Explosion de toxine`,
    	skillPassiveDescription: `Après avoir infligé suffisamment de DÉG de PV avec l'arme principale, elle inflige des DÉG supplémentaires à la cible et aux ennemis proches, réduisant temporairement leur armure max.`,
    	skillTacticalName: `Solution corrosive`,
    	skillTacticalDescription: `Yugiri lance un appareil corrosif sur la zone cible, infligeant des dégâts et ralentissant en continu les ennemis à l'intérieur.`,
    	skillUltimateName: `Formation venimeuse`,
    	skillUltimateDescription: `Yugiri invoque un immense nuage qui se déplace vers l'avant, réduisant temporairement l'armure max des ennemis sur son passage.`,
    },
    Leona: {
    	Name: "Leona",
    	Type: "Sentinelle",
    	skillActiveName: `Barrière cinétique`,
    	skillActiveDescription: `Leona génère des blocs carrés sur diverses surfaces avec deux options d'angle. La création de blocs consomme des points de compétence et de l'énergie. Les blocs peuvent être facilement détruits par des armes de mêlée, et jusqu'à 16 blocs peuvent exister simultanément.`,
    	skillPassiveName: `Équilibre travail-vie privée`,
    	skillPassiveDescription: `Leona restaure continuellement l'énergie et augmente la vitesse de déplacement. L'armure se restaure progressivement après une période d'immobilité.`,
    	skillTacticalName: `Vitre pare-balle`,
    	skillTacticalDescription: `Leona utilise des points de compétence et de l'énergie des cordes pour créer une vitre pare-balle dans une zone désignée. Jusqu'à 3 vitres pare-balles peuvent exister à la fois.`,
    	skillUltimateName: `Forteresse de pureté`,
    	skillUltimateDescription: `Leona remplit la barre d'énergie et restaure des charges de compétence active. Pendant la durée de la compétence, les blocs existants deviennent définitivement transparents et ne bloquent plus les chemins ni les balles alliées.`,
    },
    Chiyo: {
    	Name: "Chiyo",
    	Type: "Duelliste",
    	skillActiveName: `Explosion de brillance`,
    	skillActiveDescription: `Chiyo tire une flèche explosive qui adhère aux surfaces et peut être déclenchée prématurément, ou explose automatiquement à la fin de sa durée.`,
    	skillPassiveName: `Volonté constante`,
    	skillPassiveDescription: `Chiyo bénéficie d'une récupération progressive de la concentration, qui ralentit brièvement après les attaques. Une fois pleine, la concentration est consommée pour augmenter les DÉG pendant un court instant.`,
    	skillTacticalName: `Perce-nuage`,
    	skillTacticalDescription: `Chiyo charge et tire une flèche sur la cible, infligeant des DÉG élevés et un effet de ralentissement qui s'estompe rapidement en fonction du point d'impact.`,
    	skillUltimateName: `Brise-ciel`,
    	skillUltimateDescription: `Chiyo révèle temporairement les ennemis proches de vos alliés et tire une flèche explosive perforante et chargée sur la cible. La flèche explose lorsqu'elle atteint sa portée maximale ou touche un ennemi.`,
    },
    Ming: {
    	Name: "Ming",
    	Type: "Duelliste",
    	skillActiveName: `Explosion fragmentée`,
    	skillActiveDescription: `Ming tire une orbe électrique qui explose au moindre contact ou en atteignant sa portée maximale, drainant les points d'armure des ennemis à portée tout en les ralentissant. Sa détonation peut être provoquée manuellement.`,
    	skillPassiveName: `Égide d'absorption`,
    	skillPassiveDescription: `Les armes de Ming infligent des DÉG supplémentaires à l'armure ennemie. Endommager l'armure ennemie régénère la vôtre.`,
    	skillTacticalName: `Orbe de choc`,
    	skillTacticalDescription: `Ming tire un orbe de choc qui explose sur commande ou à portée maximale, étourdissant et réduisant la cadence de tir des ennemis proches, avec un effet de visée floue.`,
    	skillUltimateName: `Pic de protection`,
    	skillUltimateDescription: `Ming obtient une armure temporaire et applique un effet de ralentissement avec ses tirs. Infligez des dégâts à l'armure ennemie avec des armes ou des compétences pour prolonger la durée de la compétence et restaurer l'armure temporaire.`,
    },
    Lawine: {
    	Name: "Lawine",
    	Type: "Initiator",
    	skillActiveName: `Dague à impulsions`,
    	skillActiveDescription: `Lawine lance une dague à impulsions pour créer un champ qui révèle les ennemis dans la zone.`,
    	skillPassiveName: `Ombre de révélation`,
    	skillPassiveDescription: `Lorsque l'arme principale de Lawine touche un ennemi, son emplacement est brièvement révélé.`,
    	skillTacticalName: `Lame des ombres`,
    	skillTacticalDescription: `Lawine lance une dague à impulsions pour infliger des DÉG de zone, brouiller les lunettes et infliger des DÉG supplémentaires aux invocations ennemies.`,
    	skillUltimateName: `Experte en furtivité`,
    	skillUltimateDescription: `Lawine crée une zone furtive devant vous, ce qui vous fait devenir invisible et augmente votre vitesse de déplacement en rentrant dedans. Attaquer ou interagir brièvement révèle votre position.`,
    },
    Meredith: {
    	Name: "Meredith",
    	Type: "Contrôleur",
    	skillActiveName: `Tempête de sable`,
    	skillActiveDescription: `Meredith lance une orbe d'énergie qui crée un champ de sable lorsqu'elle touche un ennemi ou un obstacle. Tous les ennemis à l'intérieur sont ralentis, leur vitesse de rechargement est réduite et leur santé diminue progressivement.`,
    	skillPassiveName: `Anneaux d'ordre zéro`,
    	skillPassiveDescription: `Dans les airs, viser ou lancer des compétences et grenades ralentit la vitesse de descente de Meredith.`,
    	skillTacticalName: `Sable aveuglant`,
    	skillTacticalDescription: `Meredith lance un orbe d'énergie pour créer une tempête de sable qui bloque la vision et réduit la vitesse de rechargement des ennemis.`,
    	skillUltimateName: `Ensablement`,
    	skillUltimateDescription: `Meredith lance un artéfact pyramidal pour créer une tempête de sable massive qui aveugle les ennemis, draine leurs PV et les attire vers le centre.`,
    },
    Reiichi: {
    	Name: "Reiichi",
    	Type: "Contrôleur",
    	skillActiveName: `Voile de l'aube`,
    	skillActiveDescription: `Reiichi utilise son parapluie pour créer un rideau de lumière qui obscurcit le champ de vision ennemi.`,
    	skillPassiveName: `Clairvoyance de l'aube`,
    	skillPassiveDescription: `En visée, Reiichi accumule de l'énergie avec son sniper. À pleine charge, il scanne une zone devant lui et révèle les ennemis pour lui et ses coéquipiers.`,
    	skillTacticalName: `Ruée sainte`,
    	skillTacticalDescription: `Reiichi effectue une courte ruée vers l'avant, laissant derrière lui une barrière lumineuse qui bloque temporairement les projectiles ennemis.`,
    	skillUltimateName: `Écran sacré`,
    	skillUltimateDescription: `Rafraîchit immédiatement le Voile de l'aube et le renforce pour qu'il bloque les balles ennemies.`,
    },
    Kanami: {
    	Name: "Kanami",
    	Type: "Initiator",
    	skillActiveName: `Chambre d'écho`,
    	skillActiveDescription: `Kanami tire un Disque sonar pour révéler les ennemis dans la zone.`,
    	skillPassiveName: `Révélation d'écho`,
    	skillPassiveDescription: `Les tirs de l'arme principale créent une Zone sonar, révélant les ennemis à l'intérieur à Kanami.`,
    	skillTacticalName: `Cyclone rythmique`,
    	skillTacticalDescription: `Kanami projette un cyclone sonique vers l'avant qui repousse les ennemis sur son passage et perturbe fortement leur visée.`,
    	skillUltimateName: `Showtime`,
    	skillUltimateDescription: `Kanami invoque une figure holographique qui joue de la musique, ralentissant, étourdissant et désorientant les ennemis, réduisant ainsi leur cadence de tir.`,
    },
    Eika: {
    	Name: "Eika",
    	Type: "Duelliste",
    	skillActiveName: `Purgatoire`,
    	skillActiveDescription: `Eika invoque une Cage de flammes. Tant qu'Eika et ses ennemis sont à l'intérieur, son arme principale inflige des DÉG de brûlure supplémentaires. Les ennemis qui franchissent les parois de la cage subissent des DÉG de brûlure.`,
    	skillPassiveName: `Batterie solaire`,
    	skillPassiveDescription: `Chaque tir sur un ennemi accumule de la chaleur. Lorsque la chaleur est au maximum, les compétences consomment automatiquement de la chaleur pour des effets renforcés.`,
    	skillTacticalName: `Boule de feu explosive`,
    	skillTacticalDescription: `Eika lance une boule de feu explosive qui inflige des DÉG de zone et enflamme le sol.`,
    	skillUltimateName: `Tempête de flammes`,
    	skillUltimateDescription: `Eika projette jusqu'à 3 tornades de feu qui projettent les ennemis dans les airs et infligent d'importants dégâts continus.`,
    },
    Fragrans: {
    	Name: "Fragrans",
    	Type: "Support",
    	skillActiveName: `Parfum revigorant`,
    	skillActiveDescription: `Fragrans libère des parfums qui créent une zone aromatique augmentant la cadence de tir et la vitesse de déplacement des alliés.`,
    	skillPassiveName: `Arôme apaisant`,
    	skillPassiveDescription: `Fragrans diffuse en continu un arôme curatif qui régénère automatiquement ses PV et ceux des alliés proches.`,
    	skillTacticalName: `Miasme`,
    	skillTacticalDescription: `Fragrans lance un parfum de soin qui confère aux alliés présents dans la zone une augmentation temporaire des PV max et des soins en continu, non affectés par les DÉG.`,
    	skillUltimateName: `Arôme euphorique`,
    	skillUltimateDescription: `Fragrans crée un puissant champ aromatique qui augmente en continu la cadence de tir, la vitesse de déplacement et la régénération des PV des alliés, tout en lui accordant une réduction massive des dégâts subis.`,
    },
    Mara: {
    	Name: "Mara",
    	Type: "Duelliste",
    	skillActiveName: `Poignée fantôme`,
    	skillActiveDescription: `Mara lance une main fantôme pour cibler l'ennemi debout le plus proche, lui arracher un orbe d'âme et le ralentir. L'orbe d'âme ne peut être touché que par vous, infligeant à l'ennemi des DÉG de PV sans tenir compte de l'armure.`,
    	skillPassiveName: `Pilleur d'âmes`,
    	skillPassiveDescription: `Mara inflige des DÉG aux ennemis qui n'ont pas tous leurs PV pour infliger des DÉG de PV supplémentaires sans tenir compte de l'armure, et restaurer ses propres PV.`,
    	skillTacticalName: `Approche de la Faucheuse`,
    	skillTacticalDescription: `Mara se transpose pour entrer en furtivité. Elle deviendra visible lorsqu'elle sera à proximité des ennemis. La vitesse de déplacement augmente et elle bénéficie d'une réduction des DÉG supplémentaire lors de la transposition.`,
    	skillUltimateName: `Faucheuse`,
    	skillUltimateDescription: `Mara marque l'ennemi le plus proche, ce qui le réduit au silence et révèle sa position. Si Mara neutralise ou élimine la cible, la marque est transférée à l'ennemi debout le plus proche à portée et sa durée est réinitialisée.`,
    },
    Nora: {
    	Name: "Nora",
    	Type: "Initiator",
    	skillActiveName: `Poursuite de l'ombre`,
    	skillActiveDescription: `Invoque un esprit qui vole vers la zone ciblée. L'esprit révèle les ennemis à portée et se verrouille sur l'ennemi le plus proche pour l'attaquer, infligeant des dégâts et brouillant sa visée à la lunette.`,
    	skillPassiveName: `Pas du vide`,
    	skillPassiveDescription: `Permet d'effectuer périodiquement un troisième saut supplémentaire.`,
    	skillTacticalName: `Frappe d'outre-tombe`,
    	skillTacticalDescription: `Ordonne à l'esprit de projeter de l'énergie sombre perforant les abris dans la direction ciblée. Elle explose au contact d'un ennemi ou lors d'une réactivation, infligeant des dégâts et un ralentissement, puis génère une explosion secondaire encore plus puissante après un court temps de convergence.`,
    	skillUltimateName: `Frénésie d'ombres`,
    	skillUltimateDescription: `Invoque de multiples clones de Sora pour traquer les ennemis à portée. En s'approchant des ennemis, Sora attaque, infligeant des dégâts et limitant leurs capacités de perception.`,
    },
    Celestia: {
    	Name: "Celestia",
    	Type: "Support",
    	skillActiveName: `Astre gardien`,
    	skillActiveDescription: `Celestia octroie une armure temporaire à un coéquipier sélectionné et à elle-même. La compétence la cible automatiquement lorsqu'aucun coéquipier n'est en vue.`,
    	skillPassiveName: `Récupération cosmique`,
    	skillPassiveDescription: `Celestia restaure en continu son armure et celle de ses alliés proches.`,
    	skillTacticalName: `Étoile rayonnante`,
    	skillTacticalDescription: `Celestia crée un champ astral dans la zone désignée, restaurant rapidement l'armure des alliés à l'intérieur et leur conférant un bonus de vitesse.`,
    	skillUltimateName: `Porte stellaire`,
    	skillUltimateDescription: `Celestia confère une grande quantité d'armure temporaire à un allié et à elle-même, puis se téléporte instantanément auprès de cet allié.`,
    },
    Audrey: {
    	Name: "Audrey",
    	Type: "Sentinelle",
    	skillActiveName: `Feu nourri`,
    	skillActiveDescription: `Audrey déploie sa mitrailleuse sur bipied, augmentant considérablement la cadence de tir, la capacité du chargeur et la stabilité.`,
    	skillPassiveName: `Bouclier royal`,
    	skillPassiveDescription: `En visée ou en mode déployé, un bouclier frontal s'active pour bloquer les tirs ennemis.`,
    	skillTacticalName: `Tourelle à grenades`,
    	skillTacticalDescription: `Audrey place un radar d'alerte au sol qui détecte les ennemis proches et les révèle brièvement.`,
    	skillUltimateName: `Bombardement tactique`,
    	skillUltimateDescription: `Audrey s'équipe d'un lance-grenades à 6 coups qui bombarde la zone cible et crée des zones enflammées.`,
    },
    Maddelena: {
    	Name: "Maddelena",
    	Type: "Contrôleur",
    	skillActiveName: `Entrave de peinture`,
    	skillActiveDescription: `Maddelena tire un projectile de peinture qui éclabousse le sol, ralentissant les ennemis et empêchant la transposition.`,
    	skillPassiveName: `Empreintes de peinture`,
    	skillPassiveDescription: `Toucher des ennemis avec des armes les recouvre de peinture, laissant des traces de pas colorées qui révèlent leur trajectoire.`,
    	skillTacticalName: `Seau de peinture`,
    	skillTacticalDescription: `Maddelena projette une bulle de peinture qui éclate à l'impact, éclaboussant le sol. Les ennemis marchant dessus ne peuvent plus se transposer et sont ralentis.`,
    	skillUltimateName: `Bulle de peinture`,
    	skillUltimateDescription: `Maddelena tire une bulle de peinture géante qui emprisonne les ennemis à l'intérieur, empêchant le tir et la transposition tout en infligeant des dégâts.`,
    },
    Fuchsia: {
    	Name: "Fuchsia",
    	Type: "Duelliste",
    	skillActiveName: `Pistage sanguinaire`,
    	skillActiveDescription: `Fuchsia détecte l'odeur des ennemis affaiblis proches, révélant temporairement leur silhouette à travers les obstacles.`,
    	skillPassiveName: `Subsistance de combat`,
    	skillPassiveDescription: `Éliminer un ennemi fait apparaître un pack d'adrénaline qui restaure des PV et confère un bonus de vitesse.`,
    	skillTacticalName: `Ruée écarlate`,
    	skillTacticalDescription: `Fuchsia entre en frénésie et fonce vers l'avant avec une immunité aux contrôles, infligeant des dégâts et restaurant une partie de ses PV à l'impact.`,
    	skillUltimateName: `Frénésie sanguinaire`,
    	skillUltimateDescription: `Fuchsia entre dans un état de rage augmentant drastiquement sa cadence de tir, sa vitesse de rechargement et sa vitesse de déplacement.`,
    },
    BaiMo: {
    	Name: "BaiMo",
    	Type: "Duelliste",
    	skillActiveName: `Danse aérienne`,
    	skillActiveDescription: `BaiMo s'élance vers l'avant en transposition, rechargeant 2 cartouches dans son fusil à pompe et devenant temporairement invincible.`,
    	skillPassiveName: `Éclat Hip-Hop`,
    	skillPassiveDescription: `Infliger plus de 50 points de dégâts en un seul tir confère une accélération soudaine.`,
    	skillTacticalName: `Graffiti explosif`,
    	skillTacticalDescription: `BaiMo applique un graffiti explosif sur les murs ou le sol qui explose à l'approche des ennemis, infligeant des dégâts de zone et obscurcissant leur vision.`,
    	skillUltimateName: `Retour dans la rue`,
    	skillUltimateDescription: `BaiMo déploie une balise de réapparition. En cas de mort ou de réactivation, il se téléporte instantanément à la balise avec tous ses PV restaurés.`,
    },
    Galatea: {
    	Name: "Galatea",
    	Type: "Initiator",
    	skillActiveName: `Flash de cartes`,
    	skillActiveDescription: `Galatea lance une carte créant un leurre destructible à l'impact. Elle peut échanger instantanément sa position avec le leurre, qui révèle les ennemis proches.`,
    	skillPassiveName: `Ombre trompeuse`,
    	skillPassiveDescription: `Se détacher d'un mur laisse un clone derrière soi. Lorsqu'il est détruit, ce passif entre en temps de recharge.`,
    	skillTacticalName: `Ombre aveuglante`,
    	skillTacticalDescription: `Galatea lance une carte illusoire qui explose pour aveugler les ennemis dans la zone et laisser un leurre trompeur.`,
    	skillUltimateName: `Tour de passe-passe`,
    	skillUltimateDescription: `Galatea disperse 3 cartes en arc de cercle, créant 3 leurres simultanés entre lesquels elle peut se téléporter librement.`,
    },
    Cielle: {
    	Name: "Cielle",
    	Type: "Duelliste",
    	skillActiveName: `Bouclier mobile`,
    	skillActiveDescription: `Cielle déploie un bouclier d'énergie pour bloquer les DÉG. Elle peut charger vers l'avant tant que le bouclier est actif. Son armure se régénère lorsque le bouclier subit des dégâts.`,
    	skillPassiveName: `Chambre automatique`,
    	skillPassiveDescription: `Rengainer brièvement l'arme la recharge automatiquement. Rengainer après une charge au bouclier ou une détonation restaure des PV.`,
    	skillTacticalName: `Liaison gravitationnelle`,
    	skillTacticalDescription: `Cielle projette un dispositif gravitationnel qui attire les ennemis vers son centre après un court délai et les ralentit.`,
    	skillUltimateName: `Défense absolue`,
    	skillUltimateDescription: `Cielle renforce et régénère son bouclier énergétique, augmentant sa durabilité et réduisant le temps de recharge de sa charge.`,
    },
  },
  characterTypes: {
    Sentinel: 'Sentinelle',
    Support: 'Support',
    Controller: 'Contrôleur',
    Duellist: 'Duelliste',
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
