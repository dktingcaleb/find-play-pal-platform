# Find Playpal — Party Room System

**Status:** Working Master / Current Baseline  
**Version:** 0.1  
**Source:** `派对房系统.docx`  
**Module Type:** Real-Time Social / Voice Room / Playpal Discovery  
**Applies To:** Party Room discovery, creation, room lifecycle, voice stage, moderation, gifts, room heat, Playpal dispatch, and Party Room UI  
**Purpose:** Define the current Party Room product logic and UI foundation while allowing future revisions.

> This document is a **working baseline**, not a permanently locked specification. The current source explicitly contains `Attention`, `Version Later`, `待确认`, and proposal items. Those items remain provisional until explicitly approved.
>
> **Source priority:** Pages 1–28 of the source document are treated as the current working rules. Pages 29–35 are labeled `Archive` and are retained only as legacy reference when they conflict with the current section.

---

# 1. Product Definition

Party Room is a multi-user real-time voice interaction space.

Users may:

- Enter rooms freely where allowed
- Voice chat
- Go on mic / join the stage
- Join themed discussions
- Play lightweight interactive games
- Send gifts
- Use skills
- Meet new people
- Organize game sessions
- Discover or request Playpal services

Party Room combines:

```text
Voice
+ Social Interaction
+ Entertainment
+ Gifts
+ Playpal Discovery
+ Lightweight Games
```

The system includes room owners, administrators, hosts, and regular users.

---

# 2. Core Product Principles

## 2.1 Party Room Is a Social Space

The room should support:

- Low-friction conversation
- Entertainment
- Community interaction
- Game coordination
- Social discovery
- Playpal discovery

## 2.2 Host Is a Role, Not a Seat

The Host identity is attached to a user, not to a mic seat.

A Host:

- May host without occupying a seat
- May remain Host while temporarily offline
- Is not automatically replaced when disconnected
- Regains Host behavior when returning
- Is replaced only when Owner / Admin explicitly selects another Host

## 2.3 Seat Data Belongs to the Seat

Certain special data belongs to:

```text
seatIndex
```

not to:

```text
occupantUserId
```

This includes:

- Public Seat Note
- Private Seat Note
- Host Note
- Other future persistent seat-editable records

Changing the user in the seat does **not** automatically clear the seat data.

## 2.4 Runtime State and Persistent State Must Be Separate

Examples of runtime state:

- Online members
- Current seat occupants
- Queue
- RTC connections
- Self mute

Examples of persistent state:

- Room Entity
- Room ID
- Long-term room settings
- Administrators
- Persistent seat notes
- Audit records
- Financial records

Sleeping a room should release real-time voice resources without destroying persistent data.

---

# 3. User Avatar / Mask Rule

Party Room does not define a separate mask/avatar privacy system.

The user's Party Room avatar follows the user's current profile mask state and mask settings.

```text
Profile Mask Setting
→ Party Room Avatar Display
```

---

# 4. General Room Settings

Current room settings include:

## Room Title

Maximum:

```text
30 characters
```

## Mic / Seat Mode

Supported current modes:

```text
0 seats
4 seats
8 seats
```

## Theme Type

Current examples include:

- Singing
- Gaming
- Dating / Matchmaking
- Radio
- Interactive
- Astrology
- Food

The final taxonomy may evolve.

## Room Language

Current options include:

- Chinese
- English
- Malay
- International / No language restriction

Language should be represented visually with icons where appropriate.

---

# 5. Announcement & Introduction

The room may have:

## Text Announcement

Maximum:

```text
1,000 characters
```

## Voice Introduction

- Recorded by room owner
- May loop
- Primarily exposed from the Party Room discovery/list experience

## Announcement Images

Maximum:

```text
3 images
```

Per-image limit:

```text
≤ 5 MB
```

---

# 6. Mic Access Mode

Two current modes:

## Free Mic

```text
Empty seat
→ User taps
→ Join mic directly
```

## Approval Required

```text
User applies
→ Queue / pending
→ Owner or Admin approves
→ User joins mic
```

---

# 7. Mic Countdown

Optional feature.

Owner may enable a per-speaker countdown.

When time expires:

```text
User automatically leaves mic
```

Exception:

```text
Host
→ not affected by mic countdown
```

After timed removal:

```text
1-minute cooldown
```

before applying again.

If Host directly invites the user to mic:

```text
No 1-minute cooldown
```

---

# 8. Room Privacy

Current privacy types:

```text
Public
Private / Password-Protected
```

Password room rules:

- User normally enters by password.
- Owner/Admin invitation link can allow direct entry.
- Ordinary shared links still require the password.

---

# 9. Invite Users

Current invite sources:

- Recent chats
- Following
- Followers
- User ID search

The exact relationship filters may be refined later.

---

# 10. Custom Room Background

Owner may upload a custom room background.

Maximum image size:

```text
5 MB
```

---

# 11. Clear All Notes & Records

Owner or Admin may manually trigger:

```text
Clear All Notes & Records
```

This clears editable persistent seat content such as:

- Public Seat Notes
- Private Seat Notes
- Host Notes
- Future seat-editable persistent records

It does **not** clear:

- Audit logs
- Gift / revenue records
- Order records
- Other security / financial records

This is a high-risk operation and requires:

```text
Second confirmation
```

---

# 12. Special Room Settings

Current special settings include:

- Seat HP Bar
- Dice
- Public Seat Notes
- Private Seat Notes
- Host Notes

These are room/seat features and must not automatically become user profile data.

---

# 13. Seat HP Bar

When enabled:

- HP bar appears below the seat avatar.
- HP exists only inside that Party Room context.
- Owner defines the default HP.
- Seat occupant may later adjust their own HP / maximum HP.

Relationship to global user HP:

**TBD**

Do not assume Party Room HP equals the account HP system.

---

# 14. Dice

Current core Dice options:

```text
D4
D6
D8
D10
D12
D20
Random 100
Random 1000
```

Dice use may generate:

- Visual effect
- Chat log entry

Some later UI notes list a smaller/different dice set.

**Status: REVIEW**

The core system list above is the current working reference.

---

# 15. Public Seat Note

Public Note belongs to the seat.

Rules:

- Current seat occupant may create, edit, or delete it.
- All room members may view it.
- Supports text.
- Supports 1 image.
- Leaving the seat does not clear the note.
- The next user entering the same seat inherits visibility/edit capability.
- It remains viewable from the seat even when the seat is empty.

UI must clearly warn:

```text
This content remains on this seat and can be seen by the next user who occupies it.
```

---

# 16. Private Seat Note

Private Note also belongs to the seat, not the user.

Rules:

- Only the current seat occupant may view/edit/delete it.
- Owner does not gain access simply because they are Owner.
- Admin does not gain access simply because they are Admin.
- Host does not gain access simply because they are Host.
- Other users cannot view it.
- Leaving the seat does not clear it.
- The next occupant of the same seat can see and continue editing the existing note.
- When the seat is empty, ordinary users should not see the note.

UI must clearly explain that:

```text
Private
= hidden from other current users

It does NOT mean:
private forever to the current occupant
```

---

# 17. Host Note

Host Note belongs to the seat.

Rules:

- Current Host may create/edit/delete Host Notes for any seat.
- Current Host can view them.
- Current seat occupant can view the Host Note for their seat.
- It persists when the occupant leaves.
- Next occupant can see the existing Host Note.
- New Host inherits access to all Host Notes after Host replacement.
- Host cannot edit Public/Private Seat Notes merely due to Host status.

---

# 18. Persistent Seat Records

For permanent room types, persistent seat records remain across:

- Sleep
- Reopen
- New active cycles

Examples:

- Public Notes
- Private Notes
- Host Notes

They remain with the room unless explicitly cleared by an approved clear/reset flow.

---

# 19. Room Roles

Current roles:

```text
Owner
Administrator
Host
Regular User
System Logger
```

---

# 20. Owner

Owner is the room creator / room owner.

Current permissions include:

- Room settings
- Add/remove Admins
- Set/change Host
- Close room
- Publish Playpal dispatch
- Kick
- Mute text
- Room block / blacklist
- Mic management
- Lock seat
- Mic mute
- Pull users on/off mic
- Clear persistent seat records

High-risk actions require confirmation where defined.

---

# 21. Administrator

Maximum current Admin count:

```text
10
```

Current working rule:

**There is only one Admin permission level.**

Do not use the older:

```text
Normal Admin
Special Admin
```

model.

Current Admin permissions are effectively the former high-level Admin permissions, except:

```text
Admin cannot close the room
```

Admin can:

- Edit room settings
- Publish Playpal dispatch
- Mute
- Kick
- Block
- Mic mute
- Pull on/off mic
- Lock seat
- Set/change Host

Admin privacy restriction:

Admin status does not provide access to Private Seat Notes or Host Notes.

If Admin occupies a seat, their note permissions are based only on their role as that seat's occupant.

---

# 22. Host

At the beginning of a new active room cycle:

```text
Owner
→ Default Host
```

Host characteristics:

- Bound to user, not seat
- Can host off-mic
- Host persists during sleep/wake in the same active cycle
- Host persists while user is temporarily offline
- No automatic reassignment
- Owner/Admin must manually assign a new Host
- Host is exempt from mic countdown
- Host may manage Host Notes
- Host cannot edit Public or Private Seat Notes solely because of Host role

---

# 23. Regular User

Current general abilities:

- Speak where permitted
- Interact
- Join mic
- Use stickers
- Send gifts
- Use other permitted social interactions

No management controls.

---

# 24. System Logger

Backend system role.

Current rule:

```text
Management / key action logs
→ retained for 30 days
```

Used for:

- Safety
- Review
- Disputes
- Moderation investigation

---

# 25. Host Offline Behavior

If Host leaves/disconnects but the room still has users:

- Room continues running.
- Host status remains assigned.
- Top Bar shows Host as offline.
- Permissions do not automatically transfer.
- Features requiring Host/Admin approval remain unavailable if none is online.
- The platform must not automatically weaken permission checks.

For 0-seat rooms:

```text
Host offline
→ Nobody can voice speak
```

until Host returns or Owner/Admin changes Host.

For approval-based rooms:

```text
No online Host/Admin
→ New mic requests remain waiting
```

---

# 26. Room Sleep

When no users remain:

```text
Room
→ Sleeping
```

Sleeping behavior:

- Stop real-time voice resources.
- Release active-room bandwidth/resources.
- Preserve room configuration.
- Preserve relevant current-cycle remaining time.
- Remove from active-room discovery list.
- May be reopened while the current cycle is still valid.

Sleep does not reset the active cycle timer.

---

# 27. Active Room Platform Limit

Current platform limit:

```text
Maximum 100 simultaneous Active rooms
```

Sleeping rooms do not count.

When limit is reached:

- New room activation is blocked.
- Sleeping room reactivation is blocked.
- User sees an active-room-limit message.
- Party Room Card must not be consumed.
- Active-cycle timer must not start.

The server should acquire/release room capacity atomically to prevent concurrent over-allocation.

---

# 28. 12-Hour Active Cycle

Current 12-hour rule applies to:

- Playpal Room
- Party Room Card Room

A new active cycle starts:

```text
12-hour lifetime
```

If room sleeps and reopens within that cycle:

```text
Same expireAt
No timer reset
```

At the end of the cycle:

```text
Current cycle ends
→ Room enters Sleeping
```

---

# 29. Open-Room Cooldown

Current working rule:

```text
No general open-room cooldown
```

This supersedes the older archived 24-hour / 1-hour / 10-minute cooldown model.

---

# 30. Playpal Room

Current rules:

- Only Playpals may own a Playpal Room.
- Each Playpal may own one fixed Playpal Room.
- Uses fixed `Room ID`.
- Does not require a Party Room Card.
- Persistent room settings survive sleep/reopen/new cycles.
- Persistent seat records survive sleep/reopen/new cycles.
- No inheritance prompt.
- Each active cycle uses the current 12-hour rule.
- After 12 hours, room sleeps.
- It may start another new 12-hour cycle without an open-room cooldown.

---

# 31. Party Room Card Room

Current rules:

- Opened using a `Party Room Card`.
- One card opens one 12-hour active cycle.
- A new card does **not** create a new permanent Room ID.
- Existing Room ID is reused.
- Sleeping/waking within the same cycle does not reset the timer.
- After the 12-hour cycle ends, that card cycle expires.
- If user owns another card, they may immediately start a new cycle.
- No general cooldown.

Before a new card starts a new cycle:

```text
If previous inheritable room data exists
→ Ask whether to inherit
```

Options:

```text
Inherit
Fresh Start
```

---

# 32. Room Card Inheritance

If user chooses:

## Inherit

Preserve:

- Title
- Category / Language
- Announcement
- Background
- Privacy
- Seat mode
- Mic access rules
- Admins
- Special settings
- Persistent seat records

## Fresh Start

Reset those inheritable items to defaults / empty state.

Never clear through this flow:

- Blacklist
- Security audit logs
- Gift / revenue records
- Order records

The inheritance prompt happens only when:

```text
New Party Room Card
→ New active cycle
```

It does not happen when waking the same Session.

---

# 33. Party Room Card Transaction Safety

For a new card cycle:

```text
Choose inheritance behavior
→ Server validates Room Card
→ Server atomically acquires active-room capacity
→ Only on success consume card
→ Create new Room Session
→ Start timer
```

If any validation fails:

- Do not consume card.
- Do not occupy active-room slot.
- Do not start timer.
- Do not modify existing room data.

---

# 34. Official Party Room

Current working concept:

- Opened by platform.
- 24/7 online.
- Pinned in Party Room discovery.
- Permanent Room ID.
- Persistent room/seat data.
- No Room Card inheritance flow.

Initial rollout:

```text
1 International Official Room
```

Later, language-specific official rooms may be added if traffic supports them.

Official Playpals may follow a schedule to host room programming.

Potential / provisional concepts:

- Random red packets and gifts
- AI-assisted audience reply
- Rotating room themes
- Official Playpal scheduling
- Order / Playpal Discovery room
- Jukebox / song request room
- Noble area / general area

**Status: PARTIALLY PROVISIONAL**

---

# 35. Official Order / Playpal Discovery Room

Current concept:

- Players discover Playpal services.
- Official or verified Playpals may join mic and promote themselves.
- Official Playpals host at scheduled periods.

Exact production workflow remains subject to future refinement.

---

# 36. Official Jukebox

Current concept:

```text
Player sends designated gift
→ Requests song
```

Gift revenue goes to corresponding Playpal.

Optional `Grab-to-Sing` mechanism:

- Host enables competition.
- Candidate Playpals provide a short sample.
- Requesting player selects one.
- Selected performer gets performance permission and associated revenue.

Detailed implementation remains provisional.

---

# 37. Contract Party Room

Current concept:

- Only contract partners may operate.
- Only partner-designated Admins may open.
- Fixed Room ID.
- Permanent room type.
- Persistent long-term settings and seat records.
- No Room Card inheritance prompt.
- No current time limit.
- May receive initial additional Heat.

Possible special revenue-reporting requirements:

**TBD**

---

# 38. Special Party Room

Current concept:

- Built on top of Playpal Room or Party Room Card Room.
- Requires `Special Party Room Card`.
- Current concept suggests 7-day special-feature access.

Critical unresolved rule:

```text
7-day special-feature entitlement
vs
base room 12-hour active cycle
```

is not yet defined.

Do not implement until clarified.

Potential special interactions:

- Virtual character movement
- Throwing interactive objects
- Mini-games
- Karaoke mode
- Two-person private voice room

---

# 39. Special Game Party Room

Potential:

- Card games
- Party mini-games

**Status: VERSION LATER**

---

# 40. Special Karaoke Party Room

Current provisional concept:

- Users queue.
- When selected, user has 10 seconds to confirm.
- No confirmation → skip to next person.
- Each mic session: 5 minutes.
- Audience may send gifts or playful items.

**Status: VERSION LATER**

---

# 41. Two-Person Private Voice Room

Current provisional concept:

- Maximum two users.
- Supports custom decoration.
- Intended to support Virtual Lover / intimate companion atmosphere.

**Status: VERSION LATER / POLICY REVIEW REQUIRED BEFORE PRODUCTION**

---

# 42. Guild Party Room

Current concept:

- Only Guild Leader may open.
- One Guild may have one Party Room.
- Fixed room entity.
- Persistent room and seat records.
- No Room Card inheritance prompt.
- Special functionality may use a Guild Special Party Room Card.
- Guild members may enter freely.
- Non-members require approval from authorized Guild roles.

Not yet defined:

- Active lifetime
- Sleep trigger
- Reopen rules

Important:

```text
Do NOT automatically apply the normal 12-hour Party Room Card lifecycle.
```

**Status: TBD**

---

# 43. Party Room Theme Categories

Current proposed categories include:

- Chill & Chat
- Love & Relationships
- Anime & ACG Lounge
- Music Lounge
- Heart-to-Heart
- Roleplay & Stories
- PlayPal Link-Up
- Office Tea Room
- Midnight Tales
- Snack Showdown
- Fun Fact Corner
- Rant & Roast
- Love Simulator
- Virtual Getaway
- Open Mic Comedy
- Entertainment Buzz

This taxonomy is still marked `Version Later`.

**Status: PROVISIONAL**

---

# 44. Party Room Discovery Page

Current structure:

## Top Bar

- Search room title
- Filter categories
- Followed Rooms

## Featured Area

- International Official Room
- Highest-Heat rooms at page-open time
- Auto-scrolling activity display

## Standard List

- Remaining Party Rooms

---

# 45. Featured Room Card

Current information:

- Room category
- Voice introduction
- Announcement
- Room title
- User avatars / count
- Heat
- Number of blocked users currently inside the room

Blocked-user indicator may be tapped to see which blocked users are inside.

---

# 46. List Room Card

Current information:

- Room background
- Room title
- Voice introduction
- Announcement
- Room type/category
- User avatars / count
- Heat
- Blocked-user indicator

---

# 47. Main Room Information Architecture

Current primary room hierarchy:

```text
1. Top Bar
2. Info Bar
3. Stage
4. Chat
5. Bottom Bar
```

---

# 48. Top Bar

Current content:

- Current Host avatar
- Host name
- Host online/offline/busy state
- Host status
- Room title
- Room category
- Room timer when applicable
- Settings
- More
- Minimize

Host can remain displayed while offline.

Current Host state colors:

```text
Green = Online
Red = Busy
Black = Offline
```

---

# 49. Room Timer UI

For room types using a 12-hour lifecycle:

- Normal timer: white
- Remaining 10 minutes: yellow
- Remaining 5 minutes: red

Official / Contract rooms without that lifecycle should not display the 12-hour timer.

---

# 50. Top Bar Controls

## Settings

Visible to:

- Owner
- Admin

Includes room settings and high-risk management actions.

## More

Current actions:

- Report Room
- Leave Room

## Minimize

Allows the user to continue browsing other parts of Find Playpal while keeping Party Room context active.

Exact responsive behavior:

**TBD**

---

# 51. Info Bar

Current areas include:

## Announcement

- Single-line rolling summary
- Image support
- Expand long text on hover / long press
- Links
- Topic tags
- @ navigation

Voice introduction is primarily presented outside the room.

## Online Members

Displays room member count.

Tap opens member list.

Owner may assign Admins from member management.

Admin may room-block users.

## Ranking Preview

Displays top gift-related users.

Full rankings include at least:

- Charm / Received Gift ranking
- Gift Sending ranking

## Global Effects Toggle

Controls local rendering of effects such as:

- Gifts
- Skills
- Entry effects
- Seat effects

The toggle affects only the current user's device.

---

# 52. Effects Toggle

Click:

```text
On / Off
```

Long-press may expose granular controls such as:

- Full-screen animations
- Gift bullet effects
- Entry animations

When effects are disabled:

```text
Text notifications remain
```

so informational meaning is not lost.

---

# 53. Stage Layout

Seat-mode layouts:

## 0 Seats

- No normal user seats.
- Only Host may voice speak.
- Host does not occupy a seat.

## 4 Seats

```text
2 × 2 adaptive grid
```

## 8 Seats

```text
4 × 2 adaptive grid
```

Responsive adaptation may change exact spatial presentation while preserving the seat count.

---

# 54. Seat Card

Current elements may include:

- Avatar
- Mask state inherited from Profile
- Speaking animation ring
- Role badge
- Mute / mic-lock / connected status
- Mic countdown
- Display name
- Admin visual treatment
- Noble badge
- Received gift total
- HP bar if enabled
- Public Note
- Private Note
- Host Note where permitted

---

# 55. User Card from Seat

Tap another user's avatar/seat:

Current general actions:

- Follow
- Private Message
- Send Gift
- Report
- Use Skill

Owner/Admin additionally may have:

- Mic mute
- Remove from mic
- Lock seat
- Room block
- Set Host
- Set/remove Admin — Owner only

---

# 56. Current User's Own Seat Card

Additional self actions may include:

- Adjust seat HP / max HP
- Edit Public Seat Note
- View/edit Private Seat Note

---

# 57. Host Seat-Related Actions

Host may:

- View/edit Host Note for seats

Host cannot use Host role to modify:

- Public Seat Note
- Private Seat Note

unless Host is also the current occupant of that seat.

---

# 58. Empty Seat

Shows:

```text
Empty
+
current mic access condition
```

Tap:

- Free mode → direct mic entry
- Approval mode → apply for mic

---

# 59. Queue

Queue appears when seats are full.

## Free Mic Mode

When a seat becomes available:

```text
Next queued user
→ Confirmation popup
→ 10 seconds to confirm
```

No response:

```text
Skip to next queued user
```

## Approval Mode

Admin sees queued users and may pull selected users onto mic.

The exact Host relationship to approval may be refined, since other current rules also refer to Host/Admin approval.

**Status: REVIEW**

---

# 60. Chat

Current message types:

- Text
- Emoji / Sticker
- System message
- Entry notification
- Mic notification
- Gift notification
- Skill-effect description

---

# 61. Anti-Spam Chat Rule

Current rule:

```text
Same user:
maximum 1 message per 2 seconds
```

If exceeded:

```text
Cooldown message
```

Management/system messages are exempt.

---

# 62. Chat Message Actions

Long press / right click:

Regular actions may include:

- Reply
- Copy ID
- Report

Admin additional actions may include:

- Block
- Mute for X minutes
- Clear user's messages

---

# 63. Chat Navigation

Current UI concepts:

- `New messages x` floating indicator
- `Back to bottom`

---

# 64. Bottom Bar

Current suggested order:

```text
Chat
Gift + Skill
Private Message
Mini-game
Mic
Listen Mute
Mic Mute
```

Exact grouping may evolve with responsive design.

---

# 65. Chat Composer

Supports:

- Text input
- Emoji
- Stickers
- @
- Topics #
- Images / stickers subject to limits
- Retry after send failure
- Offline draft
- Auto-collapse long content

---

# 66. Gift Flow

Current flow:

```text
Choose Gift
→ Choose Recipient
→ Confirm
→ Server validates
→ Success animation
→ Gift / recipient information displayed
```

Recipients are selected from users on mic.

There is also a current product proposal:

```text
Only Playpals may receive gifts
```

while ordinary users may still send gifts.

This proposal is **not yet final**.

**Status: PROPOSAL / TBD**

---

# 67. Gift Records & Revenue

Current rules:

- Gift records may appear in chat/announcement and rankings.
- Room total gift revenue tracked in Blue Diamonds.
- Individual received/sent gift rankings tracked.
- Gift records retained for 30 days.
- Gift settlement must be server validated.
- Current revenue logic references settlement to eligible Playpal accounts.
- Platform commission ratio is separately configured.

---

# 68. Skills in Party Room

Current rule:

- Target must be on mic.
- Using skill consumes Mana.
- Standard Party Room skill cost is currently described as approximately half of normal cost.
- Standard usage is mainly visual / effect-based rather than account-stat impact.

Special HP-enabled seat interaction may allow:

- Custom damage
- Custom healing

The exact relationship to global Skill / Mana systems requires separate documentation.

**Status: REVIEW / CROSS-MODULE**

---

# 69. Private Message

Current Party Room private-message concept:

- Side panel
- Recent conversation list
- Search
- Floating mini-window / picture-in-picture style
- Unread badge
- Do Not Disturb
- Does not mute current room voice by default

---

# 70. Mic Button State

Depending on state, button may show:

```text
Join Mic
Queued
Cancel Request
Leave Mic
```

---

# 71. Mic Risk Control

Frequent mic actions use a default cooldown:

```text
30 seconds
```

This is separate from the 1-minute post-countdown reapply rule.

Exact conflict/precedence between these cooldowns:

**REVIEW**

---

# 72. Listen Mute

Current description:

When the user is not on mic, this control may prevent hearing mic users.

Terminology and exact audio behavior:

**REVIEW**

---

# 73. Mic Mute

When user is on mic:

```text
Self Mic Mute
→ Others cannot hear the user's voice
```

---

# 74. Heat Formula

Current working formula:

```text
Heat
=
Base Online Value
+ Interaction Bonus
+ Gift Bonus
+ Stay-Time Bonus
+ Platform Weight
```

---

# 75. Base Online Value

```text
Online users × 100
```

Example:

```text
10 users
→ 1,000 base Heat
```

---

# 76. Interaction Bonus

Current examples:

```text
Text message × 10
Mic / voice action × 50
Like / emoji interaction × 5
```

Exact valid-event definitions may require anti-abuse rules.

---

# 77. Gift Heat Bonus

Current working rule from the current section:

```text
Gift value in Blue Diamonds × 10
```

Example:

```text
1 Blue Diamond
→ 10 Heat
```

The Archive section contains an older `×1000` rule.

**Current section takes priority.**

---

# 78. Stay-Time Bonus

Current rule:

```text
Each user per minute
→ +2 Heat
```

Example:

```text
10 users × 10 minutes
→ +200 Heat
```

---

# 79. Platform Weight

Current adjustable coefficient:

```text
0–50%
```

Applied to adjust discovery/display Heat.

The exact admin tool and governance for manual weighting:

**TBD**

---

# 80. Heat Decay

Current working rule includes decay.

If there is no valid interaction for:

```text
5 continuous minutes
```

decay starts.

Valid interactions include examples such as:

- Text message
- Mic / voice
- Emoji / like
- Gift
- Dice
- Mini-game interaction

During decay:

```text
Every 1 minute
extra Heat above the current base
× 90%
```

Formula:

```text
Current Heat
=
Base Heat
+
(Previous Heat - Base Heat) × 90%
```

During decay:

- New stay-time bonus is paused.
- New valid interaction stops decay.
- 5-minute inactivity timer restarts.
- Heat never falls below current base online value.

Archive says Heat only rises; that is legacy and does not override this current rule.

---

# 81. Playpal Dispatch

Owner/Admin may publish a Playpal request for room members.

Important:

```text
Party Room Dispatch
= Announcement / discovery aid

It is NOT the final paid order.
```

Flow:

```text
Owner/Admin publishes dispatch
→ Relevant Playpals notified
→ Player / Playpal interact
→ Actual customer enters normal order flow
→ Customer sets price/time/etc.
→ Formal order is created
```

Owner/Admin may assist discovery but does not perform payment on behalf of the user.

---

# 82. Party Dispatch UI

Current concept:

- Similar to Quick Order form
- Title changed to something like `Publish Party Dispatch Notice`
- Confirmation before publishing
- Playpals may respond / enter room
- The dispatch publisher may not be the eventual customer
- Final Playpal selection/order happens separately

Detailed UI is provisional.

---

# 83. Blacklist

Current room blacklist concept:

```text
Blocked from room
→ Cannot see/find that room
```

Admin may room-block users.

Relationship between:

- Global user block
- Room blacklist

should remain separate.

**Cross-reference:** `05-TRUST-SAFETY-ACCOUNT-SUPPORT-SYSTEM.md`

---

# 84. Safety & Confirmation Rules

Current rules:

- Key management actions logged.
- Dangerous actions require at least two steps.
- Financial actions require confirmation.
- Gift/revenue settlement requires server validation.
- Unauthorized users cannot activate voice input.
- High-risk clear/close/kick/block operations require confirmation where specified.

---

# 85. Management Action Log

Examples of logged actions:

- Block
- Mic mute
- Pull user on/off mic
- Lock/unlock seat
- Mute text
- Kick
- Gift actions where required

Retention:

```text
30 days
```

---

# 86. Room Entity

`Room Entity` stores long-term room identity and configuration.

Current examples:

- Fixed Room ID
- Owner
- Room type
- Long-term settings
- Admin list
- Persistent seat records

---

# 87. Room Session

`Room Session` stores one active room cycle.

Current examples:

- Start time
- Expire time
- Active / Sleeping / Expired state
- Current Host
- Current Room Card reference

---

# 88. Runtime State

Runtime-only examples:

- Current online users
- Current seat occupants
- Queue
- RTC connections
- Self mute

These should not be used as long-term persistent records.

---

# 89. Key Room State Model

Conceptually:

```text
Room Entity
    │
    ├── long-term identity/configuration
    │
    └── persistent seat data
         │
         ▼
Room Session
    │
    ├── Active
    ├── Sleeping
    └── Expired
```

Exact backend implementation may evolve, but separation of long-term Room Entity and active Room Session is a current design rule.

---

# 90. Example System Messages

Current examples include:

### Mic success

```text
你已上麦（2/8）。
```

### Queue

```text
已提交申请，第 3 位，预计 2 分钟。
```

### Cooldown

```text
操作过于频繁，请在 27 秒后重试。
```

### Permission denied

```text
仅房主/管理员可执行此操作。
```

### Active room limit

```text
当前活跃派对房已达 100 间上限，请稍后再试。
```

### Host offline

Host remains assigned until return or manual replacement.

### No approver online

Mic request remains queued.

### 0-seat room with Host offline

No user can currently voice speak.

### Room Card inheritance

```text
是否继承上个房间的设置与麦位记录？
[继承] [全新开始]
```

### Clear records confirmation

Must clearly state that persistent seat records are removed but audit/financial/order records are not.

---

# 91. Archived Rules

Pages 29–35 of the original source are explicitly labeled:

```text
Archive
```

They contain older concepts that must not override the current working rules.

Examples of superseded/legacy differences include:

## Old Admin Model

Archive:

```text
Normal Admin
Special Admin
```

Current:

```text
One unified Admin role
```

## Old Host Permissions

Archive suggests Host may edit other users' public/private notes.

Current rule:

```text
Host cannot access Public/Private Seat Notes solely due to Host role
```

## Old Lifecycle

Archive includes:

```text
24-hour max
1-hour cooldown
10-minute manual-close cooldown
```

Current rule:

```text
12-hour cycle for Playpal / Room Card rooms
No general open-room cooldown
```

## Old Gift Heat Formula

Archive:

```text
Gift × 1000
```

Current:

```text
Gift × 10
```

## Old Heat Behavior

Archive:

```text
Heat only increases
```

Current:

```text
Heat decays after 5 minutes of inactivity
```

These archived rules remain historical reference only.

---

# 92. Cross-System Relationships

Party Room interacts with several other Masters.

## User Progression

Reference:

```text
03-SHARED-USER-PROGRESSION-SYSTEM.md
```

Connections:

- Mana
- Noble badges
- Skills
- Possible HP relationships

## Trust & Safety

Reference:

```text
05-TRUST-SAFETY-ACCOUNT-SUPPORT-SYSTEM.md
```

Connections:

- Report
- Global user block
- Room blacklist
- Audit history

## Task System

Reference:

```text
06-TASK-SYSTEM.md
```

Connections may include:

- Party Room participation achievements
- Skill use
- Gifts
- Orders

## Squad

Reference:

```text
07-SQUAD-SYSTEM.md
```

Connections include Party Room entry as a potential Squad Task contribution.

---

# 93. Current REVIEW / TBD Items

The following should remain open:

- Final Party Room category taxonomy
- Final gift recipient eligibility
- Official room random reward system
- AI reply behavior in Official Room
- Noble/general Official Room zones
- Contract Room revenue reporting
- Special Party Room 7-day entitlement vs 12-hour lifecycle
- Guild Room lifecycle
- Special Room mini-games
- Private two-person room policy and safety design
- Dice option discrepancy in UI notes
- Host vs Admin approval behavior in queue edge cases
- Exact Listen Mute behavior
- 30-second mic action cooldown vs 1-minute post-timeout cooldown
- Party Room Skill relationship to global Skills
- Party Room HP relationship to global HP
- Exact Admin/Host approval queue capabilities
- Platform Heat weighting governance
- Anti-abuse rules for Heat
- Gift/interaction spam prevention
- Responsive behavior for minimized room
- Exact desktop/tablet/mobile Stage layout adaptation
- Final theme/category list
- Final room card acquisition/economy
- Final Room Card and Special Card UX

---

# 94. AI Design / Coding Rules

When Claude, ChatGPT, Gemini, or another AI assistant works on Party Room:

1. Treat this file as the **current working Party Room baseline**, not immutable final product.
2. Pages 1–28 of the source override the archived rules from pages 29–35.
3. Do not mix Archive rules into current behavior.
4. Keep `Room Entity` separate from `Room Session`.
5. Bind persistent seat records to `seatIndex`, not current occupant.
6. Do not clear Public/Private/Host Notes when a user simply leaves a seat.
7. Do not give Admin or Host access to Private Seat Notes merely because of their role.
8. Use one unified Admin role; do not restore Normal/Special Admin unless approved.
9. Host is bound to user, not seat.
10. Host may remain Host while offline; do not auto-transfer Host.
11. Playpal Room and Party Room Card Room currently use 12-hour active cycles.
12. Do not restore the archived 24-hour lifecycle or old cooldown rules.
13. Sleeping does not reset the current active-cycle timer.
14. Maximum current simultaneous Active rooms is 100.
15. Do not consume a Room Card if active-room capacity acquisition fails.
16. Party Room Card new cycles may require inheritance choice.
17. Security/financial records are not cleared by ordinary inheritance/reset flows.
18. Current Heat gift coefficient is `×10`, not the archived `×1000`.
19. Current Heat system includes inactivity decay.
20. Treat gift-receiver restrictions as a proposal until approved.
21. Party Dispatch is an announcement/discovery feature, not a completed paid order.
22. Do not invent unresolved Guild/Special/Contract room lifecycle behavior.
23. Mark `Attention`, `Version Later`, `Proposal`, and `TBD` features clearly in design or implementation planning.
24. Do not treat the current Figma or HTML prototype as higher priority than approved/current product rules.
25. Responsive layouts must follow `04-RESPONSIVE-DESIGN-RULES.md`.

---

# 95. Current Document Status

**WORKING MASTER — v0.1**

This document should be used as the current Party Room reference while the feature continues to evolve.

The intended workflow is:

```text
New Party Room decision
→ Update this same Master
→ Record the changed rule
→ Claude / designers / developers use the newest Master
```

Do not create parallel `final`, `new`, `latest`, or separate competing Party Room specification files.

Git history should preserve previous versions.
