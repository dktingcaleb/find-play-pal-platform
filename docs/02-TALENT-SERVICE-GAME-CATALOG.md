# Find Playpal — Talent, Service & Game Catalog

**Status:** Early Draft  
**Version:** 0.1  
**Source:** `Talent List.xlsx`  
**Module Type:** Product Feature / Service Taxonomy  
**Purpose:** Define the current known Talent / Service categories, supported games, platform grouping, bilingual display names, and game-rank reference data used by Find Playpal.

> This document preserves the current source data as much as possible. Missing, inconsistent, duplicated, or potentially legacy entries are intentionally not silently corrected. They should remain `TBD`, `REVIEW`, or `LEGACY CANDIDATE` until explicitly approved.

---

# 1. Feature Overview

Find Playpal currently supports multiple types of companion services.

The source data suggests three major service groups:

1. **Mobile Game Services**
2. **PC Game Services**
3. **Voice & Other Services**

For supported competitive games, the platform may also associate a user / Playpal with a **game rank**.

This document defines the current catalog only.

Detailed UI behavior, pricing rules, qualification requirements, booking rules, and service-creation logic are not yet defined in this source.

---

# 2. Core Data Concept

The current source implies the following conceptual structure:

```text
Talent / Service
    ↓
Service Group
    ↓
Game Category
    ↓
Game
    ↓
Platform
    ↓
Rank (when applicable)
```

Example:

```text
Mobile Game
→ MOBA
→ Honor of Kings
→ Mobile
→ Rank
```

Voice and non-game services do not necessarily require a game or rank.

Example:

```text
Other Service
→ Voice Chat
```

**Final data model: TBD**

---

# 3. Platform Groups

Current known platform groups:

- Mobile
- PC
- Voice & Others

Whether Console should exist as a separate platform is not defined in the source.

**Console support: TBD**

---

# 4. Mobile Game Catalog

## 4.1 MOBA

| No. | English | 中文 | Source Marker |
|---:|---|---|---|
| 1 | Wild Rift | TBD | M |
| 2 | 王者荣耀 | 王者荣耀 | M |
| 3 | Honor of Kings | Honor of Kings | M |
| 4 | Mobile Legends : Bang Bang | TBD | M |

### Notes

- `王者荣耀` appears in the English column in one source row.
- `Honor of Kings` also appears as a separate row.
- It is not yet confirmed whether these represent separate regional entries, duplicated entries, or intentional aliases.
- The rank sheet also contains `Arena of Valor / 传说对决`, which is not listed in the current Mobile MOBA catalog.

**Status:** REVIEW

---

## 4.2 Battle Royale

| No. | English | 中文 | Source Marker |
|---:|---|---|---|
| 1 | PUBG M | 绝地求生 M | M |
| 2 | Game for Peace | 和平精英 | M |
| 3 | Free Fire | 我要活下去 | M |
| 4 | Sausage Man | 香肠派对 | M |

---

## 4.3 First Person Shooting Game

| No. | English | 中文 | Source Marker |
|---:|---|---|---|
| 1 | COD M | 使命召唤 M | M |
| 2 | Delta Force | 三角洲行动 | M |

---

## 4.4 Shooting Game

No games are currently populated in the source.

**Status:** TBD

---

## 4.5 Survival Game

| No. | English | 中文 | Source Marker |
|---:|---|---|---|
| 1 | Identity V | 第五人格 | M |
| 2 | Dead by Daylight | Dead by Daylight | M |
| 3 | Once Human | 七日世界 | M |

---

## 4.6 Horror Game

No games are currently populated in the source.

**Status:** TBD

---

## 4.7 Party Game

| No. | English | 中文 | Source Marker |
|---:|---|---|---|
| 1 | Stumble Guys | Stumble Guys | M |

---

# 5. PC Game Catalog

## 5.1 MOBA

| No. | English | 中文 |
|---:|---|---|
| 1 | League of Legend | TBD |
| 2 | Dota 2 | TBD |
| 3 | Deadlock | TBD |
| 4 | Supervive | TBD |

### Notes

- English names and Chinese display names should be normalized later.
- The current source spelling is preserved.

**Status:** REVIEW

---

## 5.2 Battle Royale

| No. | English | 中文 |
|---:|---|---|
| 1 | PUBG | 绝地求生 |
| 2 | APEX | APEX |
| 3 | NARAKA | 永劫无间 |
| 4 | Vampire: The Masquerade – Bloodhunt | 吸血鬼之避世—血猎 |
| 5 | Fortnite | 堡垒之夜 |
| 6 | TBD | TBD |

---

## 5.3 First Person Shooting Game

| No. | English | 中文 |
|---:|---|---|
| 1 | COD | 使命召唤 |
| 2 | Valorant | 特战英豪 |
| 3 | Counter-Strike 2 | 反恐精英2 |
| 4 | Overwatch 2 | 斗阵特攻2 |
| 5 | Delta Force | 三角洲行动 |
| 6 | Escape from Tarkov | 逃离塔科夫 |

---

## 5.4 Shooting Game

| No. | English | 中文 |
|---:|---|---|
| 1 | Payday 3 | 劫薪日3 |
| 2 | Left 4 Dead 2 | 求生之路2 |
| 3 | Back 4 Blood | 喋血复仇 |
| 4 | Helldivers 2 | 绝地战兵2 |
| 5 | Marvel Rivals | 漫威争锋 |
| 6 | World War Z | 僵尸世界大战 |
| 7 | Remnant 2 | 遗迹2 |
| 8 | The First Descendant | 第一后裔 |

---

## 5.5 Survival Game

| No. | English | 中文 |
|---:|---|---|
| 1 | Dead by Daylight | 黎明杀机 |
| 2 | The Outlast Trials | 逃生实验 |
| 3 | Once Human | 七日世界 |
| 4 | TBD | TBD |
| 5 | TBD | TBD |

---

## 5.6 Horror Game

| No. | English | 中文 |
|---:|---|---|
| 1 | Phasmophobia | 恐鬼症 |
| 2 | Devour | Devour |
| 3 | Lethal Company | 致命公司 |
| 4 | Dying Light 2 Stay Human | 消逝的光芒2 坚守人性 |
| 5 | R.E.P.O. | R.E.P.O. |

---

## 5.7 MMO

| No. | English | 中文 |
|---:|---|---|
| 1 | Path of Exile 2 | 流放之路2 |
| 2 | Diablo IV | 暗黑破坏神IV |

---

## 5.8 Party Game

| No. | English | 中文 |
|---:|---|---|
| 1 | Fall Guys | 糖豆人 |
| 2 | Among Us | Among Us |
| 3 | Stumble Guys | Stumble Guys |
| 4 | Party Animals | 猛兽派对 |
| 5 | Roblox | Roblox |
| 6 | Overcooked! 2 | Overcooked! 2 |
| 7 | Peak | Peak |

---

## 5.9 Others Game

| No. | English | 中文 |
|---:|---|---|
| 1 | Steam | TBD |
| 2 | TBD | TBD |
| 3 | TBD | TBD |
| 4 | TBD | TBD |
| 5 | TBD | TBD |
| 6 | TBD | TBD |
| 7 | TBD | TBD |

### Notes

`Steam` is currently listed under `Others Game` in the source.

Whether this represents:

- an "other Steam game" option,
- a platform-level option,
- a placeholder,
- or a legacy entry

is not defined.

**Status:** REVIEW

---

# 6. Voice & Other Services

The source defines a separate non-game service group named `Others Service`.

| No. | English | 中文 |
|---:|---|---|
| 1 | Singing | 唱歌 |
| 2 | Voice Chat | 陪聊 |
| 3 | Safe Space | 树洞 |
| 4 | Talk-To-Sleep | 哄睡觉 |
| 5 | Watch Movie | 看电影 |
| 6 | Astrology | 命理运势 |
| 7 | Alarm Bot | 小闹钟 |
| 8 | Virtual Lover | 虚拟恋人 |
| 9 | Others Game | 其它游戏 |
| 10 | TBD | TBD |

## Notes

`Others Game / 其它游戏` appears inside the Voice & Other Services source list.

Its final relationship to the PC `Others Game` category is not yet defined.

**Status:** REVIEW

---

# 7. Rank System

The source contains rank mappings for selected competitive games.

The rank data is grouped into:

- Battle Royale
- Shooters
- MOBAs

The source also contains a generic `排位 / ranking` column within each group.

It is not yet confirmed whether this generic ranking represents:

- a normalized Find Playpal rank tier,
- a sorting tier,
- a qualification tier,
- or a reference mapping.

**Generic ranking purpose: TBD**

---

# 8. Battle Royale Rank Reference

## 8.1 Generic Battle Royale Ranking

| Level | 中文 | English |
|---:|---|---|
| 1 | 宗师 | grandmaster |
| 2 | 无敌战神 | conqueror |
| 3 | 无敌战神 | TBD |
| 4 | 巅峰 | grand master |
| 5 | 传说 | legendary |
| 6 | 猎杀者 | predator |
| 7 | 猎杀者 | predator |
| 8 | 无间修罗 | asura |

**Purpose of this generic mapping: TBD**

---

## 8.2 PUBG

| Order | 中文 | English |
|---:|---|---|
| 1 | 青铜 | bronze |
| 2 | 白银 | silver |
| 3 | 黄金 | gold |
| 4 | 铂金 | platinum |
| 5 | 钻石 | diamond |
| 6 | 精英 | elite |
| 7 | 大师 | master |
| 8 | 宗师 | grandmaster |

---

## 8.3 PUBG M

| Order | 中文 | English |
|---:|---|---|
| 1 | 热血青铜 | bronze |
| 2 | 不屈白银 | silver |
| 3 | 英勇黄金 | gold |
| 4 | 坚韧白金 | platinum |
| 5 | 不朽星钻 | diamond |
| 6 | 荣耀皇冠 | crown |
| 7 | 超级王牌 | ace |
| 8 | 无敌战神 | conqueror |

---

## 8.4 Game for Peace

| Order | 中文 | English |
|---:|---|---|
| 1 | 热血青铜 | TBD |
| 2 | 不屈白银 | TBD |
| 3 | 英勇黄金 | TBD |
| 4 | 坚韧白金 | TBD |
| 5 | 不朽星钻 | TBD |
| 6 | 荣耀皇冠 | TBD |
| 7 | 超级王牌 | TBD |
| 8 | 无敌战神 | TBD |

---

## 8.5 Free Fire

| Order | 中文 | English |
|---:|---|---|
| 1 | 青铜 | bronze |
| 2 | 白银 | silver |
| 3 | 黄金 | gold |
| 4 | 铂金 | platinum |
| 5 | 钻石 | diamond |
| 6 | 宗师 | heroic |
| 7 | 巅峰 | grand master |

---

## 8.6 Sausage Man

| Order | 中文 | English |
|---:|---|---|
| 1 | 青铜 | bronze |
| 2 | 白银 | silver |
| 3 | 黄金 | gold |
| 4 | 铂金 | platinum |
| 5 | 钻石 | diamond |
| 6 | 大师 | master |
| 7 | 巅峰 | pinnacle |
| 8 | 传说 | legendary |

---

## 8.7 APEX

| Order | 中文 | English |
|---:|---|---|
| 1 | 青铜 | bronze |
| 2 | 银牌 | silver |
| 3 | 金牌 | gold |
| 4 | 铂金 | platinum |
| 5 | 钻石 | diamond |
| 6 | 大师 | master |
| 7 | 猎杀者 | predator |

---

## 8.8 APEX M

| Order | 中文 | English |
|---:|---|---|
| 1 | 青铜 | bronze |
| 2 | 白银 | silver |
| 3 | 黄金 | gold |
| 4 | 白金 | platinum |
| 5 | 钻石 | diamond |
| 6 | 大师 | master |
| 7 | 猎杀者 | predator |

### Notes

`APEX M` exists in the rank source but is not currently listed in the Mobile Game Catalog.

**Status:** LEGACY CANDIDATE / REVIEW

---

## 8.9 NARAKA

| Order | 中文 | English |
|---:|---|---|
| 1 | 青铜 | bronze |
| 2 | 白银 | silver |
| 3 | 黄金 | gold |
| 4 | 铂金 | platinum |
| 5 | 陨星 | solar |
| 6 | 蚀月 | empyrean |
| 7 | 坠日 | astral |
| 8 | 无间修罗 | asura |

---

# 9. Shooter Rank Reference

## 9.1 Generic Shooter Ranking

| Level | 中文 | English |
|---:|---|---|
| 1 | 大神 | pro |
| 2 | 战神 | legendary |
| 3 | 辐能战魂 | radiant |
| 4 | global elite | global elite |
| 5 | 500强 | top 500 |

**Purpose of this generic mapping: TBD**

---

## 9.2 COD

| Order | 中文 | English |
|---:|---|---|
| 1 | 新手 | newbie |
| 2 | 高手 | elite |
| 3 | 大神 | pro |

The current source does not contain additional COD ranks.

---

## 9.3 COD M

| Order | 中文 | English |
|---:|---|---|
| 1 | 新秀 | rookie |
| 2 | 专家 | veteran |
| 3 | 达人 | elite |
| 4 | 精英 | pro |
| 5 | 大师 | master |
| 6 | 传奇 | grandmaster |
| 7 | 战神 | legendary |

---

## 9.4 Valorant

| Order | 中文 | English |
|---:|---|---|
| 1 | 黑铁 | iron |
| 2 | 青铜 | bronze |
| 3 | 白银 | silver |
| 4 | 金牌 | gold |
| 5 | 铂金 | platinum |
| 6 | 钻石 | diamond |
| 7 | 超凡入圣 | ascendant |
| 8 | 神话 | immortal |
| 9 | 辐能战魂 | radiant |

---

## 9.5 Counter-Strike / CS:GO Source Mapping

| Order | English Rank |
|---:|---|
| 1 | silver |
| 2 | gold nova |
| 3 | master guardian |
| 4 | distinguished master guardian |
| 5 | legendary eagle master |
| 6 | global elite |

### Notes

The rank source labels this game as `反恐精英 / cs:go`, while the current PC catalog lists `Counter-Strike 2 / 反恐精英2`.

**Status:** REVIEW / POSSIBLE LEGACY NAMING

---

## 9.6 Overwatch 2

| Order | 中文 | English |
|---:|---|---|
| 1 | 青铜 | bronze |
| 2 | 白银 | silver |
| 3 | 黄金 | gold |
| 4 | 白金 | platinum |
| 5 | 钻石 | diamond |
| 6 | 大师 | master |
| 7 | 宗师 | grandmaster |
| 8 | 500强 | top 500 |

---

# 10. MOBA Rank Reference

## 10.1 Generic MOBA Ranking

| Level | 中文 | English |
|---:|---|---|
| 1 | 永恒传说 | eternal legend |
| 2 | 传奇王者 | legendary king |
| 3 | 菁英 | challenger |
| 4 | 菁英 | challenger |
| 5 | TBD | mythic glory |
| 6 | 冠世一绝 | immortal |

**Purpose of this generic mapping: TBD**

---

## 10.2 Arena of Valor

| Order | 中文 | English |
|---:|---|---|
| 1 | 青铜 | bronze |
| 2 | 白银 | silver |
| 3 | 黄金 | gold |
| 4 | 铂金 | platinum |
| 5 | 钻石 | diamond |
| 6 | 星耀 | veteran |
| 7 | 战场传说 | master |
| 8 | 璀璨传说 | legendary |
| 9 | 永恒传说 | eternal legend |

### Notes

`Arena of Valor / 传说对决` exists in the rank source but not in the current Mobile Game Catalog.

**Status:** REVIEW

---

## 10.3 Honor of Kings

| Order | 中文 | English |
|---:|---|---|
| 1 | 青铜 | bronze |
| 2 | 白银 | silver |
| 3 | 黄金 | gold |
| 4 | 铂金 | platinum |
| 5 | 钻石 | diamond |
| 6 | 星耀 | master star |
| 7 | 最强王者 | super king |
| 8 | 无双王者 | peerless king |
| 9 | 荣耀王者 | king of glory |
| 10 | 传奇王者 | legendary king |

---

## 10.4 League of Legends: Wild Rift

| Order | 中文 | English |
|---:|---|---|
| 1 | 黑铁 | iron |
| 2 | 铜牌 | bronze |
| 3 | 银牌 | silver |
| 4 | 金牌 | gold |
| 5 | 白金 | platinum |
| 6 | 翡翠 | emerald |
| 7 | 钻石 | diamond |
| 8 | 大师 | master |
| 9 | 宗师 | grandmaster |
| 10 | 菁英 | challenger |

---

## 10.5 League of Legends

| Order | 中文 | English |
|---:|---|---|
| 1 | 铁牌 | iron |
| 2 | 铜牌 | bronze |
| 3 | 银牌 | silver |
| 4 | 金牌 | gold |
| 5 | 白金 | platinum |
| 6 | 翡翠 | emerald |
| 7 | 钻石 | diamond |
| 8 | 大师 | master |
| 9 | 宗师 | grandmaster |
| 10 | 菁英 | challenger |

---

## 10.6 Mobile Legends: Bang Bang

The source contains the following English rank sequence:

| Order | English |
|---:|---|
| 1 | warrior |
| 2 | elite |
| 3 | master |
| 4 | grandmaster |
| 5 | epic |
| 6 | legend |
| 7 | mythic |
| 8 | mythic glory |

Chinese labels are not populated in the source.

**Chinese display names: TBD**

---

## 10.7 Dota 2

| Order | 中文 | English |
|---:|---|---|
| 1 | 先锋 | herald |
| 2 | 卫士 | guardian |
| 3 | 中军 | crusader |
| 4 | 统帅 | archon |
| 5 | 一代传奇 | legend |
| 6 | 万古流芳 | ancient |
| 7 | 超凡入圣 | divine |
| 8 | 冠世一绝 | immortal |

---

# 11. Current Source Conflicts / Review Items

The following issues exist in the current source and should not be automatically resolved by AI.

## 11.1 Duplicate or Alias Game Names

Potential examples:

- 王者荣耀
- Honor of Kings

Their final relationship is not defined.

---

## 11.2 Rank-Only Games

Games appearing in the Rank sheet but not clearly present in the current game catalog include:

- Arena of Valor / 传说对决
- APEX M

These may be:

- legacy games,
- future games,
- aliases,
- or omitted catalog entries.

**Decision: TBD**

---

## 11.3 Catalog vs Rank Naming Differences

Examples include:

- `Counter-Strike 2` in the game catalog
- `CS:GO` in the rank source

AI must not silently merge or rename these entries without approval.

---

## 11.4 Missing Chinese / English Names

Several entries contain only one language.

Missing translations should remain `TBD` until approved.

---

## 11.5 Empty Slots

Several source sections intentionally or historically contain numbered empty rows.

These are preserved conceptually as available / undecided slots, but they should not automatically appear in production UI.

**Production behavior: TBD**

---

## 11.6 Category Overlap

Some games may conceptually fit more than one category.

The current source should be treated as the existing category assignment.

AI must not recategorize games without explicit approval.

---

# 12. Product Rules — Current

The following rules can be safely inferred directly from the source structure.

### Rule 1 — Services are grouped

The platform does not treat every Talent / Service as one flat list.

Services are grouped by platform or service type.

### Rule 2 — Games are categorized

Mobile and PC games are organized into game categories such as MOBA, Battle Royale, FPS, Survival, Horror, MMO, Party Game, and Others.

### Rule 3 — Bilingual naming is supported

The source maintains both English and Chinese display-name fields.

### Rule 4 — Some games have rank data

Competitive games may have a rank ladder associated with them.

### Rule 5 — Non-game services exist

Find Playpal is not limited to game companionship. Voice and other social companion services are part of the current concept.

---

# 13. Behavior Not Yet Defined

The spreadsheet does **not** define the following behavior.

These should remain `TBD` until more product instructions are provided.

- How a Playpal adds a Talent / Service
- Whether a user can select multiple games
- Whether one game can have multiple service offerings
- Whether rank is mandatory
- Whether rank requires verification
- Whether rank affects search ranking
- Whether rank affects pricing
- Whether users select server / region
- Whether users select language
- Whether users select game role / position
- Whether users select game mode
- Whether users can submit a custom game
- How `Others Game` works
- Whether voice services have duration packages
- Whether all services can be booked instantly
- Service availability scheduling
- Service pricing
- Service description
- Service images / media
- Service review / rating relationship
- Eligibility rules for becoming a Playpal
- Whether some services have age restrictions
- Whether some services are region restricted
- How service categories appear in Home / Party / Search
- How inactive / discontinued games are handled

---

# 14. Suggested Data Structure

This is a documentation structure only, not yet an approved database schema.

```text
Service Group
├── Mobile Game
│   └── Game Category
│       └── Game
│           └── Rank List (optional)
│
├── PC Game
│   └── Game Category
│       └── Game
│           └── Rank List (optional)
│
└── Voice & Others
    └── Service
```

Possible fields to define later:

```text
service_group
category
game_id
platform
name_en
name_zh
rank_enabled
rank_list
status
sort_order
```

**Database implementation: TBD**

---

# 15. Design / AI Rules

When an AI coding or design assistant works on this feature:

1. Do not invent new games, services, categories, or ranks.
2. Do not delete source entries because they look outdated.
3. Do not merge apparent duplicates without approval.
4. Do not correct translations silently.
5. Do not recategorize games without approval.
6. Treat missing fields as `TBD`.
7. Treat source conflicts as `REVIEW`.
8. Only `APPROVED` catalog changes should replace this master data.
9. UI changes must not change the underlying service taxonomy unless the product decision explicitly requires it.
10. If a Figma design conflicts with this approved catalog, report the conflict before changing the product logic.

---

# 16. Future Documentation Needed

This module will later need additional documents or sections for:

- Talent creation flow
- Talent edit flow
- Talent detail page
- Game selection flow
- Rank selection flow
- Rank verification
- Service pricing
- Booking relationship
- Search and filtering
- Playpal profile integration
- User profile game data
- Service availability
- Service status
- Admin catalog management

**Status:** TBD

---

# 17. Current Document Status

This is an **EARLY MASTER** created from the existing `Talent List.xlsx`.

It defines the known catalog and rank reference but does not yet define the complete user experience or business rules.

Future product instructions should refine this document without silently replacing the source logic.
