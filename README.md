![Strinova Map Assistant](https://repository-images.githubusercontent.com/861667818/85c06c11-28ec-4bad-aff7-3fe0e50a82c9)

# Strinova Map Assistant

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=38C2FF&width=435&lines=Map+Marking;Strategy+Discussing;Lineup+Learning)](https://git.io/typing-svg)

![Static Badge](https://img.shields.io/badge/React.js-blue) ![Static Badge](https://img.shields.io/badge/Typescript-blue) ![Static Badge](https://img.shields.io/badge/License-GPL3.0-orange)

[**Strinova Map Assistant (khaos-experiences.fr/sma/)**](https://khaos-experiences.fr/sma/)

## What is our Project?

Our project is for:

- Marking map for strategy
- Line-up tutorial and sharing
- Bug point avoiding
- Zoomed canvas magnifier overlay
- Character skill & grenade lineup viewer
- …

## How is the progress?

🚧 **Developing**

We've finished:

- Map marking canvas with drawing tools (pencil, line, arrow)
- Character icon drag & drop on canvas
- Interactive canvas items (text, images) with selection, resize and drag
- Grenade and skill icon overlays
- Magnifier (zoomed view overlay)
- Multi-language support (zh_CN, en_US, ja_JP, fr_FR)
- Global hotkeys and keyboard shortcuts modal
- Header navigation with integrated language and theme toggles
- New characters (Cielle, Chiyo) and maps (Lebrun City)

## Requirements

- [volta](https://volta.sh)
  - This project is using [volta](https://volta.sh/) to manage the node version and package manager.

## Getting Started

1. [install volta](https://docs.volta.sh/guide/getting-started) (Skip if you have already installed it.)
2. `npm ci`
3. `npm run dev`

## How to contact us?

See the bottom of our website, our social media is over there.

---

## ⚖️ GNU GPL v3 — Notice of Modifications

> This project is licensed under the **GNU General Public License v3.0**.  
> In compliance with Section 5(a) of the GPL, all modified versions must carry prominent notices stating that they have been changed.  
> The following section lists all modifications made to this repository by **Alexis CERDA** ([@AlexisCerda](https://github.com/alexiscerda/)), in addition to the original work by [ShrLeeKNsword](https://github.com/ShrLeeKNsword) and other contributors.

### Modifier Information

| Field           | Value                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Name**        | Alexis CERDA                                                                                             |
| **GitHub**      | [@AlexisCerda](https://github.com/alexiscerda/)                                                          |
| **Role**        | Code contributor, French translator                                                                      |
| **Fork/Branch** | `main` (local fork of [ShrLeeKNsword/klbq-map-assist](https://github.com/ShrLeeKNsword/klbq-map-assist)) |

---

### Summary of Modifications by Alexis CERDA

All commits below were authored by **Alexis CERDA** between **2026-03-25** and **2026-05-03**.

---

#### `7ce2713` — 2026-03-25 · _[ADD] Ajout du français dans les langues et de moi dans les contributeurs_

**First contribution.** Added French (`fr_FR`) as a supported language, added myself to the contributors list, and introduced the **Tactical Skill** feature. The tactical skill concept was already partially pre-built in the codebase under the name `subname`; this commit renames and properly implements it.

**Files modified:**

- `src/components/appShell.tsx`
- `src/components/contributors.tsx`
- `src/data/dragAndDrop.ts`
- `src/data/i18n.tsx`
- `src/data/languages/en_US.tsx`
- `src/data/languages/fr_FR.tsx` _(new)_
- `src/types/interface.ts`

---

#### `24154a1` — 2026-03-25 · _feat: Implement initial character data for multiple factions, add localization files, and create core layout components_

Refactored the character data structure to properly integrate the **Tactical Skill** system introduced in `7ce2713`. Added data for **two new characters** (not a full faction rewrite). Updated the type definitions and localization files to support the new structure.

**Files modified/created:**

- `src/components/Layouts/Footer/FooterContent.tsx`
- `src/components/Layouts/Sider/SiderItem.tsx`
- `src/data/characters/PUS/` _(2 new characters added)_
- `src/data/characters/characterRegistry.ts`
- `src/data/characters/factions.ts`
- `src/data/languages/en_US.tsx`
- `src/data/languages/fr_FR.tsx`
- `src/data/languages/ja_JP.tsx`
- `src/data/languages/zh_CN.tsx`
- `src/types/interface.ts`

---

#### `2fcec40` — 2026-03-25 · _Remplacer toutes les images qui sont sur un serveur distant en Local pour les soucis d'autorisations_

Replaced all remotely hosted images (served from an external server) with locally bundled copies in `public/images/remote/` to fix cross-origin authorization issues and allow the application to work offline/standalone.

**Files created:** 180+ image/asset files under `public/images/remote/` (PNG, WebP, SVG, JPG formats).

---

#### `c974bbd` — 2026-03-25 · _feat: Implement core map canvas functionality, including drawing tools, map selection, and initial application structure_

Reworked how the canvas **renders dropped entities** (icons placed on the map). This does not affect the drag-and-drop mechanism itself, only how the items are visually represented and managed once they land on the canvas. Also created the initial canvas and map selector components.

**Files modified/created:**

- `src/App.tsx`
- `src/components/Layouts/Canvas/drawCanvas.tsx`
- `src/components/Layouts/Canvas/mapCanvas.tsx`
- `src/components/Layouts/Footer/FooterContent.tsx`
- `src/components/buttons/changeMapButton.tsx`

---

#### `a96811a` — 2026-03-25 · _feat: implement interactive canvas with drawing tools and draggable text and image items_

Modified the existing text and image item system to conform to the new canvas entity rendering model introduced in `c974bbd`. Did **not** add new text support — adapted the pre-existing implementation to match the new architecture.

**Files modified:**

- `src/components/Layouts/Canvas/CanvasItem.tsx`
- `src/components/Layouts/Canvas/CanvasOverlay.tsx`
- `src/components/Layouts/Canvas/drawCanvas.tsx`
- `src/components/appShell.tsx`
- `src/data/stateManagement.ts`

---

#### `c0dd2ac` — 2026-03-25 · _feat: Add core canvas drawing functionality with an interactive item overlay_

Major bug fixes related to canvas.

**Files modified:**

- `src/components/Layouts/Canvas/CanvasOverlay.tsx`
- `src/components/Layouts/Canvas/drawCanvas.tsx`

---

#### `0d8370a` — 2026-03-25 · _feat: Introduce CanvasItem and CanvasOverlay components for interactive canvas elements with selection, dragging, editing, and resizing capabilities_

Introduced the `CanvasItem` and `CanvasOverlay` components responsible for rendering interactive elements on the canvas, supporting selection, drag, resize, and inline editing.

**Files created:**

- `src/components/Layouts/Canvas/CanvasItem.tsx`
- `src/components/Layouts/Canvas/CanvasOverlay.tsx`

---

#### `c21f404` — 2026-03-26 · _feat: Implement the main application shell component and live sharing functionality_

> ⚠️ Commit message is misleading. The LiveShare functionality present in this commit was **not working** and was subsequently removed. The actual contribution here is the main `appShell` component scaffold that assembles all layout panels together.

**Files modified/created:**

- `src/components/appShell.tsx`
- `src/data/liveShare.ts` _(present but non-functional — removed in next commit)_

---

#### `86a6ecf` — 2026-03-26 · _feat: Introduce core canvas drawing application including tools, layout, and state management, and remove peerjs_

Major refactor: **removed the non-functional LiveShare/PeerJS system** entirely and replaced it with the **Magnifier zoom tool**. Completed the drawing toolbar integration, connected all canvas layers, and finalized state management.

**Files modified:**

- `package.json` _(removed peerjs dependency)_
- `src/components/Layouts/Canvas/CanvasItem.tsx`
- `src/components/Layouts/Canvas/CanvasOverlay.tsx`
- `src/components/Layouts/Canvas/drawCanvas.tsx`
- `src/components/Layouts/Canvas/mapCanvas.tsx`
- `src/components/Layouts/HeaderContent.tsx`
- `src/components/Layouts/SiderTools.tsx`
- `src/components/Magnifier/Magnifier.tsx` _(zoom tool integrated here)_
- `src/components/appShell.tsx`
- `src/data/liveShare.ts` _(removed)_
- `src/data/stateManagement.ts`

---

#### `315764d` — 2026-03-26 · _feat: Add Magnifier component for a draggable and resizable zoomed view of the canvas, including map, drawings, and item overlays_

Created the `Magnifier` component: a floating, draggable and resizable panel that shows a magnified/zoomed view of a section of the canvas, synchronised with the main map, drawing, and overlay layers.

**Files created:**

- `src/components/Magnifier/Magnifier.tsx`

---

#### `047eaa7` — 2026-03-26 · _[add] add Linkrachi in Friend Link and the wiki strinova french_

Added the Linkrachi content creator to the friend link section and added the French Strinova wiki as a resource link.

**Files modified:**

- `public/images/remote/profileLinkrachi.png` _(new)_
- `src/data/languages/en_US.tsx`
- `src/data/languages/fr_FR.tsx`
- `src/data/languages/ja_JP.tsx`
- `src/data/languages/zh_CN.tsx`

---

#### `b78a978` — 2026-03-26 · _feat: Add character data, localization support, contributor and layout components, and game assets_

> ℹ️ **VPS deployment build.** This commit consolidates all prior changes into a single deployment snapshot for the personal VPS at `khaos-experiences.fr/sma/`. It does not introduce new features — it mirrors the cumulative state of the previous commits with the Vite base path set to `/sma/`. No new modifications beyond deployment configuration.

**Vite config change:** `base` set to `/sma/` for subdirectory hosting.

---

#### `49db49b` — 2026-03-26 · _chore: Update Vite base path from `/sma/` to `/`_

> ℹ️ **VPS deployment fix.** Reverted the Vite `base` config from `/sma/` back to `/` after the previous deployment commit. No functional changes.

**Files modified:**

- `vite.config.ts`

---

#### `900be18` — 2026-03-30 · _[ADD] ajouts des images des attaques de cielle et chiyo et des MAJ des annonces en anglais dans les 3 autres langues que le fr_

Added skill and attack images for Cielle and Chiyo, and synchronized English announcements to other languages.

---

#### `40b1163` — 2026-03-30 · _[ADD] images de personnage de cielle et chiyo_

Added character portraits for Cielle and Chiyo.

---

#### `e9af490` — 2026-03-31 · _[ADD] images icone de cielle et chiyo_

Added map icons for Cielle and Chiyo.

---

#### `4311c80` — 2026-05-02 · _feat: initialize core AppShell layout, internationalization, and map drawing canvas features_

Added Lebrun City map assets and updated translations.

---

#### `044d044` — 2026-05-02 · _feat: implement canvas drawing logic and sidebar tool controls for map editing_

Implemented additional canvas drawing logic and connected sidebar tool controls.

---

#### `8e51694` — 2026-05-02 · _feat: add header navigation with integrated language/theme toggles and a new keyboard shortcuts modal support_

Added header navigation, theme/language toggles, and introduced the keyboard shortcuts modal.

---

#### `7c05d16` — 2026-05-03 · _feat: implement interactive map canvas, editor components, and multi-language support_

Major updates to interactive map canvas, editor sidebars, and translation files.

---

#### `b44f67f` — 2026-05-03 · _feat: implement SiderTools component with canvas controls, internationalization support, and global hotkeys._

Refined the SiderTools component, connected canvas controls, and fully implemented global hotkeys.

---

### Scope of Changes Overview

| Category               | Details                                                          |
| ---------------------- | ---------------------------------------------------------------- |
| **Major fixes**        | Fixed canvas issues                                              |
| **New components**     | `CanvasItem`, `CanvasOverlay`, `Magnifier`, `ShortcutsModal`     |
| **New data files**     | 4 new characters (including Cielle, Chiyo) and Lebrun City map   |
| **New feature**        | Tactical Skill system, Global Hotkeys, Theme Toggles             |
| **New language**       | French (`fr_FR`) — full translation of UI strings                |
| **Images localized**   | 180+ remotely-served images downloaded and bundled locally       |
| **Dependency removed** | Removed `peerjs` from `package.json`                             |
| **Contributor entry**  | Added Alexis CERDA to `contributors.tsx`                         |
| **Friend links**       | Added Linkrachi and French Strinova wiki                         |

---

## Contributors

| Contributor                                           | Role                     |
| ----------------------------------------------------- | ------------------------ |
| [爱走位的KN](https://github.com/ShrLeeKNsword/)       | Sponsor, Code            |
| [Alexis CERDA](https://github.com/alexiscerda/)       | Code, French Translation |
| [MiekoHikari](https://github.com/MiekoHikari/)        | Code, Translation        |
| [サルミナ (salutemenow)](https://x.com/salutemenowjp) | Japanese Translation     |
| [restart0x](https://space.bilibili.com/497387234)     | Translation              |
| [Sheppsu](https://github.com/Sheppsu)                 | Code                     |
| [Jsynk](https://github.com/Jsynk)                     | Code                     |
| [huequica](https://github.com/huequica)               | Code                     |

---

## License

This project is licensed under the **GNU General Public License v3.0**.  
See [LICENSE](./LICENSE) for the full license text.

Copyright © 2024 ShrLeeKNsword and contributors.  
Modifications Copyright © 2026 Alexis CERDA.
