# Find Playpal — Virtual Character System

**Status:** Early Master / Working Baseline  
**Version:** 0.1  
**Sources:**  
- `虚拟角色.docx`
- `技能系统.docx`
- `职业系统.docx`
- `装扮_装备系统.docx`

**Module Type:** Virtual Identity / Gamification / Skills / Careers / Equipment / Cosmetics  
**Applies To:** All Find Playpal users unless a feature explicitly has another eligibility rule  
**Purpose:** Define the current virtual-character ecosystem and the relationships among character progression, Mana, skills, status effects, careers, equipment, cosmetics, and future game integrations.

> Important: This system exists to make Find Playpal more fun and expressive, but it must remain secondary to the platform's core Playpal and social experience. It should support the platform rather than overwhelm it.

> The source Skill document uses status markings including `Attention`, `Version Later`, and `Removed/Legacy`. Content explicitly marked as Removed/Legacy must not be restored merely because it appears in the historical source.

---

# 1. System Overview

Every Find Playpal user has a virtual character.

Current virtual-character components:

```text
Virtual Character
├── Level
├── Mana
├── Equipment
├── Cosmetics
├── Career / Job
├── Usable Skills
└── Applied Status Effects
```

The system is intended to connect several product systems rather than exist as a standalone game.

---

# 2. Product Purpose

Current purposes:

- Increase platform fun
- Give users collectible content
- Give users more ways to spend platform currency
- Give users more ways to express and display status
- Support social interaction
- Support future Find Playpal game products

The system should not distract users from:

```text
Finding Playpals
Social interaction
Orders
Party Rooms
Community participation
```

---

# 3. Product Design Principle

The Skill source explicitly establishes three principles:

1. Do not make the system too complicated.
2. Do not overshadow the Playpal functionality.
3. Use the system to support Find Playpal's broader product purpose rather than distract from it.

Therefore:

```text
Virtual Character
= Supporting Gamification Layer

Not:
Main Product replacing Playpal services
```

---

# 4. Virtual Character Ownership

Current rule:

```text
Every user
→ Has one virtual character
```

This applies to:

- Regular users
- Playpals

The source does not define multiple character slots.

**Multiple-character support: TBD**

---

# 5. Virtual Character Level

The Virtual Character source states that every character has a Level.

The Skill source also references the same 1–100 progression and Mana values used in the Shared User Progression System.

However, the source does not explicitly state in one sentence that:

```text
Virtual Character Level
=
Account Level
```

There is strong cross-document alignment, but this mapping should remain explicit before implementation.

**Relationship to Account LVL: REVIEW / TO CONFIRM**

Reference:

```text
03-SHARED-USER-PROGRESSION-SYSTEM.md
```

---

# 6. Early Character Design Concept

The Virtual Character source includes an early design concept:

```text
LVL 1 → Helmet
LVL 2 → + Weapon
LVL 3 → + Clothing
```

The source is incomplete after this example.

Therefore this should be treated as:

**EARLY DESIGN CONCEPT / NOT A COMPLETE EQUIPMENT-UNLOCK TABLE**

AI must not extrapolate higher-level equipment unlocks automatically.

---

# 7. Mana

Mana is a virtual-character resource.

Current confirmed purpose from the Skill source:

```text
Use Skills
→ Consume Mana
```

Some skills may alternatively consume:

```text
Single-use item charges
```

---

# 8. Mana Capacity

The detailed Level/Mana values remain defined in:

```text
03-SHARED-USER-PROGRESSION-SYSTEM.md
```

The Skill source repeats examples such as:

```text
LVL 1   → 100 Mana
LVL 51  → 198 Mana
LVL 99  → 296 Mana
LVL 100 → 300 Mana
```

Do not maintain a second independent Mana progression table here.

---

# 9. Mana Recovery

Current Skill source adds the following Mana recovery rules:

## Natural Recovery

```text
4 minutes
→ Recover 1%

1 hour
→ Recover 15%
```

These values are mathematically consistent:

```text
60 / 4 = 15%
```

The source does not specify whether the percentage is based on:

- Maximum Mana
- Missing Mana
- Base Mana before buffs

**Recovery percentage basis: TBD**

## Mana Potion

Mana may be restored using:

```text
Mana Potion
```

The exact potion values and item types are not yet defined.

---

# 10. Career / Job System

Career functions similarly to a title/class identity.

Current rules:

- Users unlock Careers by completing goals/tasks.
- A user may equip only **one Career at a time**.
- Unlocking a Career may unlock new Skills.
- Unlocking a Career may make new Equipment/Cosmetics available for purchase in the Market.

Conceptually:

```text
Complete Requirement
→ Unlock Career
→ Equip Career
→ Unlock Skill / Market Access
```

---

# 11. Career Internal Tiers

Careers currently have four internal design tiers:

```text
Lower
Intermediate
Upper
Special
```

Chinese source:

```text
下级
中级
上级
特级
```

These tier labels are:

```text
Internal design metadata
```

and do **not** need to be shown to users.

Purpose:

- Differentiate unlock difficulty
- Differentiate effect intensity
- Support Career development paths

---

# 12. Career Progression

Some Careers may form a development path.

Example concept:

```text
Lower Career
→ Unlock Intermediate Career

Intermediate Career
→ May unlock an Upper-tier Skill
```

Not every Career is confirmed to require a linear tree.

**Final Career tree structure: TBD**

---

# 13. Career Unlock Conditions

Each Career has at least one unlock condition.

Current possible conditions include:

- Equip a specified Career and use a specified Skill attribute a required number of times
- Perform the requirement only during a specific event
- Complete a special task
- Reach a specified number of orders
- Reach a specified number of gifts
- Be affected by a specified Skill attribute a required number of times

Each Career may use one or more conditions.

Exact Career catalog:

**TBD / SOURCE REQUIRED**

---

# 14. Career and Future Games

Current long-term concept:

```text
Different Careers
→ May play different roles in future mini-games / game products
```

This is future-facing.

**Status: VERSION LATER**

---

# 15. Skill System

Current top-level Skill concept originally describes:

```text
Attack
Defense
Recovery
```

The detailed source also defines:

- Attack
- Debuff
- Buff
- Recovery
- Emoji / reaction skill

Therefore the final taxonomy requires normalization.

**Skill taxonomy naming: REVIEW**

Do not silently collapse or rename these categories.

---

# 16. Skill Purpose

Skills exist to:

- Increase fun
- Add collectibles
- Create expressive interactions
- Create cosmetic effects
- Add virtual-character interaction
- Provide additional optional monetization / status expression

Skills should remain easy to understand.

---

# 17. Skill Internal Tiers

Skills have five internal tiers:

```text
Lower
Intermediate
Upper
Special
In-App Purchase
```

Chinese source:

```text
下级
中级
上级
特级
内购
```

These levels are:

```text
Not user-facing
```

They are internal design categories used to differentiate:

- Effect intensity
- Unlock difficulty
- Acquisition model

---

# 18. Skill Cost

Using a Skill may require:

```text
Mana
```

or:

```text
Single-use item charge
```

Some Skills may also have:

```text
Cooldown
```

Exact Skill costs/cooldowns depend on the Skill catalog.

---

# 19. Attack Skills

Attack Skills target:

- One user
- A group of users

Current concept:

```text
Attack Skill
→ Causes damage to another user's mask / virtual-character HP representation
```

Different attacks may have different:

- Damage values
- Attributes
- Visual effects

The target may see the effect:

- When opening their profile
- In system/history records

---

# 20. Attack Message

Current concept requires a user-facing text/message to accompany an Attack.

It may be:

- User-written
- Selected from platform defaults

Source examples include flirtatious or teasing lines.

Exact moderation rules for custom text:

**TBD**

---

# 21. Debuff Skills

Debuff applies a negative status effect.

Current examples:

## Resistance Reduction

For:

```text
3 hours
```

the target receives increased damage from a specified attribute.

## Damage Over Time

For:

```text
3 hours
```

the target loses a specified amount each hour.

---

# 22. Debuff Stacking

Current rule:

```text
Same Debuff category
→ Does not stack
```

When multiple effects compete:

```text
Use the highest-value effect
```

Exact tie/equal-strength behavior should be confirmed.

---

# 23. Buff Skills

Buff applies a beneficial/special status.

Current examples:

## Resistance Increase

For:

```text
3 hours
```

reduce incoming damage from a specified attribute.

## Negative-Status Resistance

For:

```text
3 hours
```

protect against a specified negative-status attribute.

## Mood

Applies a visual mood effect to the user's avatar for:

```text
8 hours
```

Mood does not count toward the referenced five-Buff limit.

The detailed five-Buff rule itself is not fully documented.

**Status: REVIEW**

---

# 24. Buff Stacking

Same-attribute Buffs do not stack.

If the new effect is:

```text
Equal to or stronger than current effect
```

the source says it:

```text
Overrides existing effect
+
Restarts timer
```

The behavior for a weaker incoming effect:

```text
Keep stronger existing effect
```

---

# 25. Buff Removal

A Buff may end through:

- Timer expiry
- Manual removal by the holder where supported

Exact UI and restrictions:

**TBD**

---

# 26. Applying Buffs to Other Users

Buff Skills may target other users.

The recipient can configure:

```text
Auto Accept
```

or:

```text
Selective Accept / Reject
```

The exact privacy/settings screen is not yet defined.

---

# 27. Recovery Skills

Current Recovery abilities include:

```text
Recover mask / character HP
Remove a specified negative status
```

Recovery may also target another user.

Recipient control:

```text
Auto Accept
or
Accept / Reject
```

---

# 28. Emoji / Reaction Skill

Applying an emoji/reaction to another user's:

- Status
- Comment

may count as a Skill.

Current source type:

```text
Emoji - Type
```

It may consume Mana.

Exact eligible social surfaces:

**TBD**

---

# 29. Skill Attributes

A Skill may have:

```text
1 to 3 attributes
```

Attack, Defense/Buff, and Recovery effects may interact through matching attributes.

Example concept:

```text
Slash attack
vs
Slash resistance
```

Resistance reduces the corresponding attack.

---

# 30. Current Attribute Examples

Current examples include:

## Physical

- Slash
- Pierce
- Blunt

## Elemental / Thematic

- Fire
- Water
- Ice
- Wind
- Lightning
- Earth
- Wood
- Light
- Dark

The source gives humorous/social interpretations for these attributes.

Examples include:

- Fire → passion / heat
- Ice → cold joke / emotional coldness
- Wind → tornado / passing effect
- Wood → green-themed joke
- Light → sunny personality
- Dark → shadow / night theme

The complete attribute catalog is referenced elsewhere but not included in these uploaded sources.

**Full Attribute Catalog: SOURCE REQUIRED**

---

# 31. Status Effects

Virtual Character can have applied Status Effects.

Current types may include:

- Debuff
- Buff
- Mood
- Damage-over-time
- Resistance modification
- Negative-status resistance

The exact maximum number of simultaneous effects is not fully defined.

---

# 32. Skill Interaction Safety

Current active `Attention` rules include anti-harassment limits.

## Attack Source Limit

Within:

```text
10 minutes
```

the target cannot have more than:

```text
10 different people
```

applying Attack Skills to them.

Purpose:

```text
Prevent dogpiling / bullying
```

## Buff Source Limit

Within:

```text
10 minutes
```

the target cannot have more than:

```text
10 different people
```

applying beneficial/Buff Skills to them.

Purpose:

```text
Prevent excessive fan/spam harassment
```

## Per-User Target Limit

One user may use Skills on the same target at most:

```text
10 times per day
```

before the daily reset.

The source references:

```text
before 12 o'clock
```

Exact reset timezone:

**TBD**

---

# 33. Skill Safety Principle

The source explicitly says these restrictions exist to:

- Prevent excessive harassment
- Reduce dogpiling
- Prevent excessive platform load

These limits should be treated as safety/product controls, not merely game balance.

---

# 34. Removed / Legacy Skill-System Functions

The source visually marks the following older `System Functions` section as:

```text
Removed / Legacy
```

Historical examples include:

- Equipment Skill required to equip
- Chat Skill required to chat
- Gift Skill required to send gifts
- Bullet-screen / global message
- Open Party Room Skill
- Room-entry invisibility
- Global loudspeaker
- Anti-kick
- Profile-visit invisibility

These items must **not** be restored as Skill-gated base platform functions.

Important:

Some similar capabilities may still exist elsewhere in current product systems.

For example:

- Royal / Noble may separately grant visit invisibility or anti-kick.
- Party Room may separately support room-specific privileges.

Those current systems remain valid where separately documented.

The rule here is only:

```text
Do not reintroduce them as the old Skill System gating model.
```

---

# 35. Removed / Legacy EXP Rules in Skill Source

The Skill document contains an older EXP-source list visually marked:

```text
Removed / Legacy
```

It includes historical values for:

- Daily boxes
- Chat
- Skill use
- Orders
- Gifts

These values must **not** override the current progression/task Masters.

Current sources of truth:

```text
03-SHARED-USER-PROGRESSION-SYSTEM.md
06-TASK-SYSTEM.md
```

---

# 36. Equipment & Cosmetics System

The character ecosystem contains two related presentation systems:

```text
Cosmetics
Equipment
```

They should be distinguished because some items affect profile/social presentation while others visually equip the virtual character.

---

# 37. Cosmetics

Current Cosmetics include:

- Avatar Frame
- Avatar Mask
- Chat Bubble
- Mount
- Entry Effect
- Character Background Effect

These may appear across:

- Profile
- Chat
- Party Room
- Entry animations
- Virtual-character presentation

Exact surface support differs by item and remains TBD.

---

# 38. Equipment Slots / Character Customization

Current Equipment/customization categories include:

- Clothing
- Head
- Face
- Back
- Skin Tone
- Hairstyle
- Accessories
- Pet

The source also mentions weapons in the virtual-character concept.

Whether Weapon is a formal equipment slot:

**REVIEW**

---

# 39. Equipment Market Unlock

Equipment may become available in the Market through:

## Career Unlock

```text
Unlock Career
→ Career-related Equipment becomes purchasable
```

## Level Requirement

```text
Reach specified Level
→ Equipment becomes purchasable
```

## Task Requirement

```text
Complete specified Task
→ Equipment becomes purchasable
```

Unlocking access does not necessarily mean the item is granted for free.

---

# 40. Equipment Acquisition

Current acquisition methods:

- Market purchase with Coins
- Market purchase with Diamonds
- Open Chest
- Gift from another user — only specified transferable/giftable items

Exact Diamond type:

**TBD**

Do not assume Blue/Purple/other Diamond without explicit source.

---

# 41. Permanent Equipment

Permanent Equipment:

```text
Owned permanently
```

It is expected to be substantially more expensive than temporary versions.

Exact pricing model:

**TBD**

---

# 42. Temporary Equipment

Temporary Equipment is commonly obtained from:

```text
Chests
```

Current lifecycle:

```text
Receive item
→ Exists as inventory item
→ User activates/uses it
→ Duration starts from activation date
→ Item disappears when duration expires
```

Using the same Equipment again may:

```text
Extend the duration
```

Exact duration rules:

**TBD**

---

# 43. Equipment Requirements

Most Equipment may have equip requirements.

Current example:

```text
Minimum Level requirement
```

Other requirement types are not yet fully defined.

---

# 44. Career → Skill → Equipment Relationship

Current confirmed relationship:

```text
Complete goals/tasks
→ Unlock Career
→ Career may unlock Skills
→ Career may unlock Market access to Equipment/Cosmetics
```

This is one of the core loops of the Virtual Character System.

---

# 45. Task → Virtual Character Relationship

Current cross-system links include:

```text
Tasks
→ EXP / Account progression

Tasks
→ Career unlock

Tasks
→ Equipment Market unlock

Achievements
→ Track Career unlocks

Squad Tasks
→ Track Skill use
```

References:

```text
06-TASK-SYSTEM.md
07-SQUAD-SYSTEM.md
```

---

# 46. Party Room Relationship

Party Room supports several Virtual Character features.

Current links include:

- Skills
- Mana use
- Seat HP
- Skill effects
- Cosmetics/effects
- Noble badge display
- Mount / entry effects where applicable

Reference:

```text
08-PARTY-ROOM-SYSTEM.md
```

Party Room currently has its own special Skill behavior:

```text
Skill Mana cost
→ approximately half normal cost

Standard Party Room skill use
→ primarily visual/effect behavior

HP-enabled seat
→ may support custom damage/healing
```

This Party Room-specific behavior should not automatically redefine the global Skill system.

---

# 47. HP Relationship

The Virtual Character and Skill documents refer to:

- Damage
- Recovery
- Mask HP
- Status effects

The Party Room separately defines:

```text
Seat HP
```

The Shared User Progression System still does not contain a fully approved global HP formula.

Therefore the project currently has at least two HP-related concepts requiring clarification:

```text
Global Virtual Character / Mask HP
Party Room Seat HP
```

**Relationship: TBD**

AI must not merge them automatically.

---

# 48. Mask Relationship

The Skill source describes damage to:

```text
Mask
```

The Cosmetics source also includes:

```text
Avatar Mask
```

The Party Room system references profile mask visibility/privacy settings.

These may represent related or distinct concepts.

**Mask terminology/data model: REVIEW**

Do not assume cosmetic mask, privacy mask, and HP-bearing character mask are the same object without approval.

---

# 49. Inventory

The sources imply an Inventory system for:

- Temporary equipment
- Permanent equipment
- Consumable items
- Potions
- Chests / Random Boxes
- Possibly Skills/items

A formal Inventory system has not yet been defined.

Recommended future module:

```text
INVENTORY-ITEM-MARKET-SYSTEM.md
```

---

# 50. Market

The sources imply a Market where users may buy unlocked Equipment/Cosmetics using:

- Coins
- Diamonds

Market rules remain undefined:

- Categories
- Pricing
- Rotation
- Item limits
- Discounts
- Refunds
- Gifting
- Regional availability

**Status: FUTURE MODULE**

---

# 51. Current Cross-Document Updates

These sources add several clarifications to existing Masters.

## Shared User Progression

`03-SHARED-USER-PROGRESSION-SYSTEM.md` should eventually be updated to reflect:

```text
Mana purpose:
Skill consumption

Mana recovery:
Potion
Natural recovery: 1% / 4 minutes
```

The 15% per hour value is also explicitly stated.

## Task System

Do not restore the old Skill-document EXP table because it is marked Removed/Legacy.

## Party Room

Party Room-specific Skill behavior remains defined by `08`.

## Squad

`Use Skill once = +2 Squad Points` remains a Squad Task rule.

---

# 52. UI Architecture — Future

The final Virtual Character interface may eventually require areas such as:

- Character Preview
- Level / Mana
- Current Career
- Equipment
- Cosmetics
- Skills
- Active Status Effects
- Inventory
- Career collection
- Skill collection

Exact page architecture:

**TBD**

Do not generate a complete page navigation until current Figma/reference UI is reviewed.

---

# 53. AI Design / Coding Rules

When Claude, ChatGPT, Gemini, or another AI assistant works on this system:

1. Treat Virtual Character as an umbrella system containing Career, Skills, Equipment/Cosmetics, Mana, and Status Effects.
2. Every user has a virtual character.
3. Do not make the Virtual Character system more important than the core Playpal/social experience.
4. Do not assume Virtual Character Level = Account Level until explicitly confirmed, even though the current sources strongly align.
5. Use the Account Level/Mana numerical master from `03`, not duplicated tables here.
6. Mana is consumed by Skills.
7. Mana can be replenished by potion and naturally recovers according to current Skill-source rules.
8. Do not restore EXP values marked Removed/Legacy in the Skill source.
9. Do not restore legacy Skill-gated base functions such as "must own Chat Skill to chat."
10. Similar current privileges documented under Royal/Party Room remain separate valid features.
11. A user may equip only one Career at a time.
12. Career internal tiers are not user-facing.
13. Skill internal tiers are not user-facing.
14. Career unlock may open Skills and Market Equipment/Cosmetics.
15. Do not invent Career catalogs or unlock trees.
16. Same-category/attribute Buffs and Debuffs do not freely stack; follow the source's stronger-effect logic.
17. Respect recipient Auto Accept / Accept-Reject settings for applicable Buff/Recovery Skills.
18. Preserve anti-harassment Skill limits.
19. Do not silently merge global HP and Party Room Seat HP.
20. Do not silently merge the different `Mask` concepts.
21. Do not extrapolate the early LVL 1/2/3 equipment example into a full level table.
22. Equipment Market unlock and equipment ownership are separate states.
23. Temporary Equipment duration begins when activated/used, according to the current source.
24. Existing Figma/prototype designs are references unless marked `APPROVED`.
25. Any unresolved or future-facing content must remain `TBD`, `REVIEW`, or `VERSION LATER`.

---

# 54. Future Documentation Needed

## Virtual Character

- Final relationship between Character Level and Account Level
- Character base stats
- Global HP formula
- Character preview behavior
- Character save/load
- Multiple-character support

## Skills

- Final Skill taxonomy
- Full Skill catalog
- Full Attribute catalog
- Mana cost per Skill
- Cooldowns
- Damage formulas
- Healing formulas
- Resistance formulas
- Status-effect limits
- Five-Buff rule
- Recipient consent settings
- Daily reset timezone
- System/history log
- Moderation of custom Attack text

## Careers

- Full Career catalog
- Career tree
- Career unlock requirements
- Career-specific Skills
- Career-specific Equipment
- Career UI
- Future mini-game roles

## Equipment / Cosmetics

- Final equipment slots
- Weapon slot
- Item rarity
- Item stats vs cosmetic-only behavior
- Market
- Prices
- Item duration
- Giftability
- Inventory
- Item stacking
- Chest contents
- Equip requirements

## Cross-System

- Mask terminology
- Global HP vs Party Room HP
- Mana buff interaction
- Skill use in Party Room
- Skill use in social/profile surfaces
- Achievement integration
- Analytics events
- Anti-abuse enforcement

---

# 55. Current Document Status

**EARLY MASTER / WORKING BASELINE — v0.1**

Current ecosystem:

```text
Virtual Character
├── Level
├── Mana
├── Career
│   ├── Unlock Skills
│   └── Unlock Market Equipment
├── Skills
│   ├── Attack
│   ├── Debuff
│   ├── Buff / Defense
│   ├── Recovery
│   └── Emoji / Reaction
├── Status Effects
├── Equipment
└── Cosmetics
```

This Master should be updated as the four related systems evolve.

Do not create parallel competing `Virtual Character`, `Skill`, `Career`, or `Equipment` Master documents unless the system becomes large enough that an explicit documentation split is approved.
