# Find Playpal — Visual Asset Map

**Status:** APPROVED FOUNDATION / Active Asset Registry  
**Version:** 0.2  
**Purpose:** Define approved visual assets, file naming, mapping, and source-of-truth rules for Find Playpal.

> This document records which visual assets are approved for use in the current prototype and future implementation.
>
> Assets under `prototype/assets/images/` are implementation-ready visual assets.
>
> Material under `references/` is non-authoritative unless explicitly promoted to an approved asset.

---

# 1. Asset Source Priority

Use visual assets in this order:

```text
Approved asset listed in this document
↓
Approved asset under prototype/assets/images/
↓
Approved page/design decision
↓
Reference material
↓
Placeholder
```

AI must not invent or replace an approved asset merely because another image looks better.

---

# 2. Approved Asset Root

Current implementation-ready assets belong under:

```text
prototype/assets/images/
```

Create subfolders only when actual approved assets exist.

Current active structure:

```text
prototype/assets/images/
└── rank/
```

Future categories may include:

```text
noble/
badges/
career/
skills/
virtual-character/
ui/
```

Do not create empty folders solely to match this future structure.

---

# 3. Naming Rules

Use:

```text
lowercase
hyphen-separated English filenames
explicit range / role where useful
stable names once referenced by code
```

Avoid:

```text
Chinese filenames
spaces
final-final.png
new-icon.png
ranking01-new.png
```

For range-based assets, encode the full range in the filename.

Example:

```text
rank-001-025.png
```

means:

```text
Platform Rank 1 through 25
```

---

# 4. Platform Rank Range Assets

These four assets are APPROVED.

They are range-based visual assets for Platform Rank.

They do **not** represent one individual rank each.

## Rank 1–25

```text
File:
prototype/assets/images/rank/rank-001-025.png

Type:
Platform Rank Range Visual Asset

Covers:
Rank 1–25

Status:
APPROVED
```

## Rank 26–50

```text
File:
prototype/assets/images/rank/rank-026-050.png

Type:
Platform Rank Range Visual Asset

Covers:
Rank 26–50

Status:
APPROVED
```

## Rank 51–75

```text
File:
prototype/assets/images/rank/rank-051-075.png

Type:
Platform Rank Range Visual Asset

Covers:
Rank 51–75

Status:
APPROVED
```

## Rank 76–100

```text
File:
prototype/assets/images/rank/rank-076-100.png

Type:
Platform Rank Range Visual Asset

Covers:
Rank 76–100

Status:
APPROVED
```

---

# 5. Rank Asset Mapping Logic

Current approved mapping:

```text
Platform Rank 1–25
→ rank-001-025.png

Platform Rank 26–50
→ rank-026-050.png

Platform Rank 51–75
→ rank-051-075.png

Platform Rank 76–100
→ rank-076-100.png
```

This mapping is visual only.

It does not redefine:

- Platform Rank progression rules,
- spending thresholds,
- Rank names,
- Rank formulas,
- Rank benefits.

Those remain governed by:

```text
03-SHARED-USER-PROGRESSION-SYSTEM.md
```

The number in this mapping (1–100) refers specifically to the **approved numeric Platform Rank model** defined in `03-SHARED-USER-PROGRESSION-SYSTEM.md` §11.1 (Interpretation A, DD-027): the numeric 1–100 scale and the named-tier Rank ladder are the same progression system, with a user's current named tier mapping into a corresponding position on the numeric scale.

That approval resolves only that *same-system relationship*. It does **not** select a final tier ladder, and it does not define the exact tier-to-number mapping/allocation (whether one named tier corresponds to one Rank number, multiple Rank numbers, or a numeric range) — both remain open (`03-SHARED-USER-PROGRESSION-SYSTEM.md` §31.1, `CONFLICT`, and §31.12, `TBD`). This visual mapping must not be treated as usable in implementation until both are resolved, and must not be used to silently resolve that conflict.

The current Platform Rank range is confirmed as 1–100 (minimum Rank 1, maximum Rank 100, no Ranks above 100) — see `03-SHARED-USER-PROGRESSION-SYSTEM.md` §11.1. The four approved assets above exactly cover this confirmed range in four 25-wide bands; no fifth asset or "above 100" behavior is defined or should be assumed.

If Rank-system product rules are still `REVIEW` or `CONFLICT`, this visual mapping must not be used to silently resolve those product-rule conflicts.

---

# 6. Rank Asset Usage Rule

When a UI needs to display the approved Platform Rank range asset:

```text
1–25   → rank-001-025.png
26–50  → rank-026-050.png
51–75  → rank-051-075.png
76–100 → rank-076-100.png
```

AI and programmers should reference these files rather than:

- redrawing the rank artwork,
- replacing it with emoji,
- inventing another rank icon,
- generating a visually similar substitute.

These assets are approved **only** for the Platform Rank system defined in `03-SHARED-USER-PROGRESSION-SYSTEM.md`. They must **not** be used for:

- Noble / Royal tiers (`03-SHARED-USER-PROGRESSION-SYSTEM.md` §16, target folder `prototype/assets/images/noble/` — see §8 below),
- game-specific ranks,
- Account Level,
- any activity/event leaderboard (e.g. an Activity screen's ranking list),
- or any other progression system.

Platform Rank must not be confused with these systems (`03-SHARED-USER-PROGRESSION-SYSTEM.md` §32, rules 3–5).

---

# 7. Exact Text / Label Inside Rank Artwork

The current approved mapping defines **which image belongs to which Rank range**.

The exact dynamic text, number, label, or data that may appear together with the artwork is not defined by this document unless explicitly documented later.

Do not invent that display behavior from the artwork alone.

---

# 8. Noble / Royal Assets

Target folder when approved assets are supplied:

```text
prototype/assets/images/noble/
```

Expected current Royal tiers from the Product Master:

```text
01 平民
02 军士
03 骑士
04 子爵
05 伯爵
06 侯爵
07 公爵
08 王族
09 皇族
10 天子
```

No Noble/Royal visual asset is registered as APPROVED in this document yet.

When supplied, each asset should be mapped explicitly before use.

---

# 9. Other Future Asset Families

Potential future categories:

```text
Badges
Career / Job
Skills
Virtual Character
Equipment
Cosmetics
Party Room
UI illustrations
Medals
```

Do not assume an asset belongs to a category based only on appearance.

Map it explicitly in this document.

---

# 10. Reference Assets

Unapproved or historical visuals belong under:

```text
references/
```

Possible content:

```text
Figma exports
old icons
candidate designs
screenshots
historical source art
design inspiration
```

Reference assets are not implementation-ready by default.

---

# 11. Asset Status

Use:

```text
APPROVED
REFERENCE
REVIEW
PLACEHOLDER
DEPRECATED
```

Meaning:

```text
APPROVED
→ may be used in current prototype / implementation

REFERENCE
→ visual reference only

REVIEW
→ mapping or usage still needs decision

PLACEHOLDER
→ temporary asset, expected to be replaced

DEPRECATED
→ no longer use for new work
```

---

# 12. AI Asset Rules

AI must:

1. Check this Asset Map before creating/replacing visual assets.
2. Use approved assets when a valid mapping exists.
3. Preserve the documented asset-to-product mapping.
4. Ask or flag `REVIEW` when mapping is unclear.
5. Keep reference assets separate from approved implementation assets.

AI must not:

- generate a replacement for an approved asset without approval,
- infer a Rank/Noble mapping from appearance alone,
- rename referenced assets casually,
- use a reference asset as production-ready merely because it exists,
- change product progression rules to match artwork.

---

# 13. Renaming Rule

Once an asset filename is referenced by prototype or production code, treat the filename as stable.

Before renaming an in-use asset:

```text
Current filename
Proposed filename
Known code references
Known page/component references
Migration impact
```

must be identified.

---

# 14. Current Approved Asset Inventory

```text
Rank:
4 approved range assets

Noble / Royal:
0 approved assets registered

Other:
0 approved assets registered
```

Current approved Rank assets:

```text
rank-001-025.png
rank-026-050.png
rank-051-075.png
rank-076-100.png
```

---

**Document Status: APPROVED FOUNDATION — v0.2**

v0.2 change: clarified that the Rank mapping's 1–100 numbering refers to the approved numeric Platform Rank model in `03-SHARED-USER-PROGRESSION-SYSTEM.md` §11.1 (Interpretation A, DD-027), and made explicit that these assets must not be used for Noble/Royal, game-specific ranks, Account Level, or event leaderboards.
