# Find Playpal — Squad System

**Status:** Early Master  
**Version:** 0.1  
**Source:** `小队系统.docx`  
**Module Type:** Social Group / Team / Shared Progression  
**Applies To:** All eligible Find Playpal users  
**Purpose:** Define the current product rules, membership limits, shared buffs, Squad Tasks, and social positioning of the Find Playpal Squad system.

> Important: Squad is designed as a small social-bonding feature. It is intentionally different from Guild. Squad focuses on belonging, light cooperation, shared buffs, and everyday interaction. Guild is reserved for larger-scale competitive, ranking, reward, and community systems.

---

# 1. Product Purpose

The core purpose of Squad is:

```text
Belonging
+ Meet New People
+ Chat & Socialize
+ Shared Buffs
+ Light Cooperative Tasks
```

The source explicitly states that the most important goal of Squad is to give users a stronger sense of belonging and more opportunities to meet new friends.

Squad should support:

- Casual interaction
- Chat
- Social connection
- Shared benefits
- Light cooperative participation

Squad is **not** intended to be a progression-heavy competitive organization.

---

# 2. Squad vs Guild

The current source clearly separates Squad from Guild.

## Squad

Current principles:

- Small group
- Maximum 5 members
- No Squad level system
- No leaderboard
- No red-packet / tipping system
- Anyone can join
- Focus on social bonding
- Focus on shared buffs
- Focus on Squad Tasks

## Guild

The source states that features such as:

- Leaderboards
- Red packets / tipping
- Larger competitive systems

should be left to the Guild system.

Therefore:

```text
Squad
≠ Guild
```

AI and designers must not merge Squad and Guild mechanics.

---

# 3. Membership Capacity

Maximum Squad size:

```text
5 users
```

A Squad is considered full at:

```text
5 / 5 members
```

---

# 4. Squad Creation

Current rule:

```text
Create Squad
→ Costs 10,000 Coins
```

Any eligible user may create a Squad.

The source does not define:

- Minimum account level
- Minimum Rank
- Minimum Royal tier
- Verification requirement
- Name rules
- Squad image rules
- Description rules
- Creation cooldown
- Whether the creation fee is refundable

**Status: TBD**

---

# 5. Joining a Squad

Current rule:

```text
Any user may join any Squad
```

The source does not define whether joining requires:

- Invitation
- Application
- Approval
- Open join
- Password
- Friend relationship

**Join method: TBD**

---

# 6. One-Squad Limit

Each user may belong to:

```text
Maximum 1 Squad at a time
```

Conceptually:

```text
User
→ 0 or 1 active Squad
```

The source does not define:

- Leave cooldown
- Rejoin cooldown
- Whether leaving loses progress
- Whether a former member can immediately rejoin
- Whether a user can create a new Squad immediately after leaving

**Status: TBD**

---

# 7. No Squad Level System

The source explicitly states:

```text
Squad has no leveling system
```

Therefore Squad should not have:

- Squad LVL
- Squad EXP
- Upgrade tiers
- Squad prestige progression

unless a future approved decision changes this.

This is an important distinction from Guild.

---

# 8. Squad Buff Principle

The source states:

```text
Each additional teammate
→ Adds / unlocks a Squad benefit
```

The more active members a Squad has, the more shared benefits become available.

The system is based on active membership count, not Squad Level.

---

# 9. Active Member Requirement

A Squad member becomes inactive for buff purposes when:

```text
No login for more than 30 days
```

That member's contributed Squad buff becomes inactive.

The member may still remain in the Squad unless removed.

The Squad can restore the buff by:

- Asking the inactive teammate to log in
- Removing the inactive teammate and replacing them

The source does not define whether one login immediately reactivates the buff.

**Reactivation timing: TBD**

---

# 10. Full-Squad Bonus and Inactive Members

When the Squad is full, the final full-team bonus depends on having enough active members.

If a member has not logged in for more than 30 days:

```text
That member's buff contribution
→ inactive

Full-team additional effect
→ may also become inactive
```

Therefore Squad benefits should be calculated using **active member count**, not merely stored member count.

Conceptually:

```text
member_count
≠
active_member_count
```

Buff logic should use:

```text
active_member_count
```

---

# 11. Squad Buff Table

Current source rules:

| Active Members | Squad Benefits |
|---:|---|
| 1 | No Squad Task unlock specified |
| 2 | Unlock Squad Tasks |
| 3 | Unlock Squad Tasks + Max HP +10 |
| 4 | Unlock Squad Tasks + Max HP +10 + Max Mana +30 |
| 5 | Unlock Squad Tasks + Max HP +10 + Max Mana +30 + Squad Coin Double |

---

# 12. Two-Member Buff

At:

```text
2 active members
```

the Squad unlocks:

```text
Squad Tasks
```

This means Squad Tasks are unavailable at only one active member unless a future rule changes this.

---

# 13. Three-Member Buff

At:

```text
3 active members
```

the Squad gains:

```text
Squad Tasks
+
Maximum HP +10
```

The Shared User Progression System currently does not yet define base HP mechanics.

Therefore:

```text
Squad Max HP +10
```

is a confirmed modifier, while the underlying HP system itself remains TBD.

---

# 14. Four-Member Buff

At:

```text
4 active members
```

the Squad gains:

```text
Squad Tasks
+
Maximum HP +10
+
Maximum Mana +30
```

This connects the Squad system to the shared user Mana system.

The modifier should not overwrite the user's base Mana.

Conceptually:

```text
Effective Max Mana
=
Base Max Mana
+
Active Squad Bonus
```

Final implementation formula:

**TBD**

---

# 15. Five-Member Buff

At:

```text
5 active members
```

the Squad gains:

```text
Squad Tasks
+
Maximum HP +10
+
Maximum Mana +30
+
Squad Coin Double
```

The exact meaning of:

```text
Squad Coin Double
```

is not fully defined.

Possible interpretations include:

- Coins from Squad Tasks are doubled
- Coins from all tasks are doubled
- Coins earned from any platform activity are doubled
- Squad-specific Coin rewards are doubled

The source does not specify which interpretation is correct.

**Status: REVIEW / TBD**

AI must not assume the scope of the double-Coin benefit.

---

# 16. Buff Stacking Rule

The source describes Squad benefits cumulatively.

Example:

```text
4 members
→ Squad Tasks
→ HP +10
→ Mana +30
```

Therefore the current principle is:

```text
Higher active-member tier
includes previous lower-tier benefits
```

The benefits are cumulative, not mutually exclusive.

---

# 17. Squad Task System

Squad has its own daily cooperative Task system.

This is distinct from:

```text
06-TASK-SYSTEM.md
→ Personal Daily Tasks
→ Personal Achievement Tasks
```

Squad Tasks are:

```text
Shared Squad Tasks
```

They accumulate shared Squad Points through actions performed by Squad members.

---

# 18. Squad Task Reset

Current source rule:

```text
Every day at 00:00
→ Squad Task Points reset to 0
```

The source does not specify timezone.

Because Find Playpal may support users across multiple regions:

**Reset timezone: TBD**

Do not assume local device time.

---

# 19. Squad Daily Points

Daily Squad Task cycle begins at:

```text
0 points
```

Members collectively contribute actions to increase the shared Squad score.

Conceptually:

```text
Member actions
→ Squad Points
→ Squad Milestones
→ Squad Rewards
```

---

# 20. Squad Task Milestones

Current thresholds:

```text
25 points
50 points
75 points
100 points
```

---

# 21. Squad Task Rewards

## 25 Points

Reward:

```text
200 Coins
```

## 50 Points

Rewards:

```text
500 Coins
+
Healing Potion Random Box
```

## 75 Points

Rewards:

```text
800 Coins
+
Mana Potion Random Box
```

## 100 Points

Rewards:

```text
1,000 Coins
+
Fragment Random Box
```

---

# 22. Squad Reward Claiming

The source does not define whether Squad milestone rewards are:

- Given to every Squad member
- Given only to members who contributed
- Given once to the Squad inventory
- Manually claimed
- Automatically distributed
- Lost if not claimed before reset

**Status: TBD**

This must be resolved before implementation.

---

# 23. Squad Task Point Sources

The current source defines the following point rules.

| Member Action | Squad Points |
|---|---:|
| Place 1 Order | +15 |
| Use 1 Skill | +2 |
| Send 1 Gift | +10 |
| Spend 10 Blue Diamonds | +2 |
| Recharge 10 Blue Diamonds | +2 |
| Enter any Party Room once | +1 |
| Unlock any Job / Career once | +25 |
| Chat with any Playpal | +1 |

---

# 24. Order Contribution

Current rule:

```text
Any Squad member places 1 order
→ +15 Squad Points
```

The source says `下单`, which indicates placing an order rather than accepting an order.

Whether cancelled/refunded orders count:

**TBD**

---

# 25. Skill Contribution

Current rule:

```text
Any Squad member uses 1 skill
→ +2 Squad Points
```

The Skill system is referenced in other product materials but is not fully documented yet.

Questions:

- Which skills count?
- Is there a daily cap?
- Can repeated spam usage count?
- Do passive skills count?

**Status: TBD**

---

# 26. Gift Contribution

Current rule:

```text
Any Squad member sends 1 gift
→ +10 Squad Points
```

The source tracks gift action count, not gift value, for this rule.

Whether free gifts count:

**TBD**

---

# 27. Blue Diamond Spending Contribution

Current rule:

```text
Every 10 Blue Diamonds spent
→ +2 Squad Points
```

The source does not define whether partial spending accumulates.

Example:

```text
Spend 6
then spend 4
```

Whether this becomes:

```text
10 total
→ +2 points
```

or only individual qualifying transactions count:

**TBD**

---

# 28. Blue Diamond Recharge Contribution

Current rule:

```text
Every 10 Blue Diamonds recharged
→ +2 Squad Points
```

The source does not define whether:

- Recharge amount is cumulative
- Bonus Diamonds count
- Refunds reverse points
- Promotional recharge counts

**Status: TBD**

---

# 29. Party Room Contribution

Current rule:

```text
Enter any Party Room once
→ +1 Squad Point
```

The source does not define:

- Minimum stay duration
- Whether repeated re-entry counts
- Whether the user's own Party Room counts
- Whether private rooms count
- Daily cap

**Status: TBD**

Anti-abuse rules will be required.

---

# 30. Job / Career Contribution

Current rule:

```text
Unlock any Job / Career once
→ +25 Squad Points
```

Because Job / Career unlock is likely non-repeatable or limited, this may represent a high-value one-time contribution.

Exact Career system:

**TBD / SEPARATE MODULE**

---

# 31. Playpal Chat Contribution

Current rule:

```text
Chat with any Playpal
→ +1 Squad Point
```

The source does not define what constitutes one valid chat contribution.

Possible interpretations:

- One message
- One conversation
- One session
- One new Playpal conversation
- One completed interaction

**Status: REVIEW / TBD**

Anti-spam rules will be required.

---

# 32. Personal Tasks vs Squad Tasks

Find Playpal now has at least three task concepts:

```text
Task System
├── Personal Daily Tasks
├── Personal Achievement Tasks
└── Squad Daily Tasks
```

Important distinction:

## Personal Daily Tasks

Progress belongs to:

```text
Individual user
```

## Achievement Tasks

Progress belongs to:

```text
Individual user
```

## Squad Tasks

Progress belongs to:

```text
Squad
```

All active Squad members contribute to the same shared daily Squad Point total.

---

# 33. Relationship to Achievement Tasks

The Achievement Task source includes:

```text
Cumulative Squad membership days
30 / 60 / 90 / 120 / … / 360 days
```

Therefore:

```text
Squad membership
→ can contribute to personal Achievement progress
```

But Squad Task Points and personal Achievement progress must remain separate.

---

# 34. Relationship to HP

The Squad system confirms a possible modifier:

```text
Max HP +10
```

However, the base HP system remains undefined in:

```text
03-SHARED-USER-PROGRESSION-SYSTEM.md
```

Therefore:

```text
HP bonus
= confirmed

Base HP mechanics
= TBD
```

AI must not invent the base HP system just to implement the Squad bonus.

---

# 35. Relationship to Mana

The Squad system confirms:

```text
Max Mana +30
```

The Shared User Progression System already contains a Mana progression model.

Squad Mana must therefore be treated as a modifier.

Conceptually:

```text
Base Max Mana
+
Squad Max Mana Bonus
=
Effective Max Mana
```

Exact stacking with future buffs:

**TBD**

---

# 36. Relationship to Coin Economy

Squad uses Coins for:

```text
Squad creation
= 10,000 Coins
```

Squad Tasks also reward Coins.

Therefore Squad is both:

```text
Coin Sink
and
Coin Reward Source
```

The five-member Coin Double benefit may further affect the economy.

Exact economic balance:

**TBD**

---

# 37. Social Design Principle

Squad should visually and functionally feel:

- Small
- Personal
- Friendly
- Cooperative
- Low pressure
- Easy to join
- Easy to understand

It should not feel like:

- Competitive Guild ranking
- Clan warfare
- Large organization management
- Complex hierarchy
- Heavy administration

unless the product direction changes later.

---

# 38. Squad Roles

The source does not define member roles.

Possible concepts such as:

- Leader
- Owner
- Member
- Officer

are not currently specified.

The only confirmed fact is:

```text
Any user can create a Squad
```

Whether the creator becomes Squad Leader:

**TBD**

AI must not invent a role hierarchy.

---

# 39. Squad Management

The source confirms that inactive members may be removed.

However, it does not define:

- Who can remove members
- Whether members can leave voluntarily
- Whether there is a Squad owner
- Ownership transfer
- Squad deletion
- Invite permissions
- Join approval
- Kick confirmation
- Rejoin cooldown

**Status: TBD**

---

# 40. Inactive Member UI

Because inactivity affects Squad buffs, the interface should eventually make inactive status visible enough for Squad members to understand why a buff is missing.

Potential information:

```text
Last active
Buff active / inactive
Inactive >30 days warning
```

Exact UI:

**TBD**

---

# 41. Buff Calculation Example

Example:

```text
Stored members: 5
Active members: 4
Inactive members: 1
```

Effective Squad benefits should follow:

```text
4 active members
```

Therefore:

```text
Squad Tasks
HP +10
Mana +30
```

and the five-member Coin Double benefit is inactive.

This interpretation directly follows the source rule that inactive members stop providing buffs and can cause the full-team additional effect to disappear.

---

# 42. AI Design / Coding Rules

When Claude, ChatGPT, Gemini, or another AI assistant works on the Squad System:

1. Treat Squad as a small social group, not a Guild.
2. Maximum Squad size is `5`.
3. A user may belong to only `1 Squad`.
4. Squad creation costs `10,000 Coins`.
5. Do not add Squad Levels or Squad EXP.
6. Do not add Squad Leaderboards.
7. Do not add red-packet / tipping systems to Squad.
8. Guild-specific competitive features must not be imported into Squad.
9. Squad buffs depend on **active member count**.
10. A member inactive for more than `30 days` stops contributing their buff.
11. At 2 active members, Squad Tasks unlock.
12. At 3 active members, add `Max HP +10`.
13. At 4 active members, add `Max Mana +30`.
14. At 5 active members, add the current `Squad Coin Double` benefit.
15. Do not invent the scope of `Squad Coin Double`; it remains under review.
16. Squad Tasks reset daily at `00:00`, but timezone remains TBD.
17. Preserve Squad milestone thresholds `25 / 50 / 75 / 100`.
18. Preserve current Squad Task point values exactly.
19. Do not invent reward distribution rules.
20. Do not invent Squad role hierarchy.
21. Do not invent base HP mechanics.
22. Treat Squad HP / Mana as modifiers to shared user attributes.
23. Do not merge Personal Daily Tasks, Achievement Tasks, and Squad Tasks.
24. Existing Figma / prototype designs are references unless marked `APPROVED`.

---

# 43. Open Questions

## Membership

- Join method
- Invitation / approval
- Leader / owner role
- Kick permissions
- Leave rules
- Rejoin cooldown
- Ownership transfer
- Squad deletion
- Inactive member reactivation timing

## Buffs

- Scope of Coin Double
- HP stacking
- Mana stacking
- Buff display
- Buff activation timing
- Whether buffs apply immediately
- Whether offline users receive benefits

## Squad Tasks

- Reset timezone
- Reward claiming
- Reward eligibility
- Reward expiry
- Daily point cap
- Anti-abuse rules
- Valid order rule
- Valid skill usage
- Gift eligibility
- Blue Diamond accumulation
- Party Room minimum stay
- Valid Playpal chat definition

## Economy

- Squad creation fee refund
- Coin Double balance
- Potion box contents
- Fragment box contents
- Random box probability tables

## Social

- Squad chat
- Squad profile
- Squad name
- Squad avatar
- Squad description
- Invite link
- Activity feed
- Member status display

All remain `TBD` or `REVIEW` until explicitly approved.

---

# 44. Current Document Status

**EARLY MASTER — v0.1**

Current confirmed Squad principles:

```text
Maximum 5 users
One Squad per user
10,000 Coin creation cost
No Squad Level
No Squad leaderboard
No red-packet / tipping system
30-day inactivity affects buffs
Shared member-count buffs
Shared daily Squad Tasks
Daily reset at 00:00
```

Squad exists primarily to strengthen:

```text
Belonging
+ Social Connection
+ Light Cooperation
```

Future approved Squad rules should update this master rather than being scattered across Figma, spreadsheets, chat history, or AI-generated prototypes.
