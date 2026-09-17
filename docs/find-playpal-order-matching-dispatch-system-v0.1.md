# Find Playpal — Order, Matching & Dispatch System

**Status:** Working Master / Current Baseline  
**Version:** 0.1  
**Source:** `下单，接单，抢单系统.docx`  
**Module Type:** Core Transaction / Order / Matching / Dispatch / Escrow  
**Purpose:** Define the current product rules for standard orders, Playpal acceptance, partial completion, quick-order matching, Playpal bidding/grabbing, blind-box matching, Party Room dispatch, escrow, settlement, appeals, and order notifications.

> This module is one of Find Playpal's core transaction systems.
>
> **Source priority:** Pages 2–32 of the source document are treated as the current working rules. Pages 33–45 are explicitly labeled `Archive` and are retained only as historical reference when they conflict with current rules.
>
> Some current sections contain unresolved internal conflicts. These are marked `REVIEW` or `CONFLICT` instead of being silently resolved.

---

# 1. System Overview

Find Playpal currently contains four related service-matching flows:

```text
Order & Matching System
├── Standard Order
│   └── Direct transaction with a selected Playpal
│
├── Quick Order
│   └── User publishes need
│       → Matching
│       → Playpals grab / apply
│       → User selects Playpal
│       → Standard Order
│
├── Blind Box Order
│   └── User publishes matching requirements
│       → Eligible Playpals claim limited matching slots
│       → User selects one card
│       → Order is created
│
└── Party Room Dispatch
    └── Owner/Admin publishes request for another room member
        → Eligible Playpals are notified
        → Playpals enter room
        → Actual customer manually places Standard Order
```

These flows share matching and notification infrastructure, but their payment and transaction behavior is different.

---

# 2. Core Transaction Principle

The standard transaction lifecycle is:

```text
User Initiates
→ Playpal Accepts
→ Service Executes
→ Settlement
→ Review
→ Completed
```

All paid Standard Orders use platform escrow.

Conceptually:

```text
User pays Blue Diamonds
→ Platform Hold / Escrow
→ Service completed
→ Platform deducts commission
→ Playpal receives settlement
```

---

# 3. Standard Order Entry Points

A user may start a Standard Order from:

## Chat

If the other user:

- Has Playpal functionality enabled
- Has configured at least one Talent / Service

then Chat may display:

```text
Order
```

Tapping opens that Playpal's order page.

## Playpal Profile

The user may:

```text
Choose Service
→ Tap Order
→ Open Standard Order page
```

---

# 4. Standard Order Form

Current order inputs include:

- Playpal Talent / Service
- Quantity
- Service deadline
- Notes

The source also implies:

- Unit price
- Total price
- Coupon where applicable

Detailed form UI may be refined later.

Cross-reference:

```text
02-TALENT-SERVICE-GAME-CATALOG.md
```

---

# 5. Standard Order Creation

Current flow:

```text
User completes order form
→ Submit
→ System creates Order ID
→ Corresponding Blue Diamonds enter Hold
→ Playpal receives New Order notification
→ Order waits for Playpal response
```

---

# 6. Escrow / Hold

When a Standard Order is submitted:

```text
Blue Diamonds
→ Held by platform
```

Funds do not immediately enter the Playpal wallet.

Hold protects both:

- User
- Playpal

and provides the basis for:

- Partial settlement
- Full settlement
- Refund
- Appeal freeze

---

# 7. Playpal Response

The Playpal may:

## Accept

```text
Accept
→ Order enters active / in-progress service state
→ Service countdown starts
```

## Reject

```text
Reject
→ Order becomes Rejected
→ Held Blue Diamonds return to user
```

## No Response

Current default response window:

```text
30 minutes
```

If no response:

```text
Order times out
→ Order closes
```

Refund behavior should follow the escrow state.

---

# 8. Standard Order Status Model

Current source uses different user-facing labels for the two sides.

Conceptual shared lifecycle:

```text
CREATED
→ WAITING_FOR_PLAYPAL
→ IN_PROGRESS
→ WAITING_FOR_REVIEW
→ COMPLETED
```

Possible terminal states:

```text
REJECTED
TIMED_OUT
CANCELLED
APPEAL_LOCKED
```

Final backend enum names:

**TBD**

---

# 9. User-Side Status Labels

Current examples include:

```text
待服务
已接单
已拒绝
已超时
已取消
待评价
已完成
```

---

# 10. Playpal-Side Status Labels

Current examples include:

```text
待接单
进行中
已拒绝
已超时
已取消
等评价
已完成
```

UI may use role-specific wording while backend uses a shared state.

---

# 11. User Operations

Current user capabilities include:

- View order details
- View service quantity
- View completed vs remaining units
- Partially complete / settle completed units
- Submit appeal after Playpal has accepted
- View historical review
- View settlement history

The user does not have unrestricted post-acceptance control of deadline/cancellation.

---

# 12. Multi-Unit Order / Stored-Service Logic

If quantity is greater than 1:

```text
One Order
→ Multiple service units
```

The user may complete and settle units gradually.

Example:

```text
20 units ordered
4 units completed today

User taps:
Complete 4 Units

→ 4 units settle
→ 16 units remain held
```

This provides the current equivalent of the historical `存单` concept.

---

# 13. Partial Completion

Current rule:

```text
User may choose:
Complete ×N Units
```

System then:

1. Calculates the corresponding held Blue Diamonds.
2. Applies platform commission.
3. Settles the completed portion to the Playpal.
4. Keeps remaining Blue Diamonds in Hold.
5. Updates completed/remaining quantities.

---

# 14. Current Platform Commission

Current default:

```text
10%
```

Example from source:

```text
4 completed units
Unit price = 100 Blue Diamonds

Gross = 400 Blue Diamonds

Playpal settlement:
400 × 90%
= 360 Purple Diamonds
```

The current document therefore implies a Blue-Diamond payment to Purple-Diamond Playpal settlement model.

Exact currency model should eventually be documented separately.

---

# 15. Deadline / Service Expiry

Standard Orders have a service deadline.

At the deadline:

```text
Remaining uncompleted units
→ Automatically completed / settled
```

The current source describes the order as moving into the review stage after service completion.

Exact default deadline values are mainly described in archived detail and are therefore not promoted here as current rules unless reconfirmed.

**Current deadline default/range: REVIEW**

---

# 16. Playpal Order Management

During an accepted/in-progress order, the Playpal may currently:

- Extend deadline
- Initiate cancellation
- Mark order completed
- View settlement details
- View appeal status
- View review after completion

---

# 17. Order Extension

Current confirmed behavior:

- Only Playpal performs the actual extension action.
- User and Playpal should communicate beforehand.
- Each Order may be extended only once.
- New deadline may be extended up to 30 days beyond the original deadline.
- Source notes that with the original period, total maximum may reach roughly 60 days.

After change:

```text
System notifies both parties
```

Example notification:

```text
This order has been extended.
New deadline: YYYY/MM/DD HH:MM
```

---

# 18. User Extension Behavior

The user does not directly edit the deadline after the order is active.

Current concept:

```text
User requests change through communication
→ Playpal agrees
→ Playpal changes deadline in Order Center
```

If Playpal refuses and the user believes intervention is needed:

```text
User may use Appeal
```

---

# 19. Cancellation — Current Intended Direction

The current main text repeatedly states that after the Playpal accepts:

```text
User cannot unilaterally cancel
```

If the user needs cancellation:

```text
User communicates with Playpal
→ Playpal initiates cancellation
```

This is intended to protect the Playpal's reserved time and expected earnings.

---

# 20. Cancellation Conflict — Before Acceptance

The current document contains an internal inconsistency.

One section says:

```text
User cannot actively cancel or extend the order
```

while the current state-transition table includes:

```text
User Cancel
→ Cancelled
→ Before Playpal acceptance
```

The Archive also says the user may cancel before Playpal acceptance.

Therefore:

```text
Can user cancel before Playpal accepts?
```

is currently:

**CONFLICT / REVIEW**

AI must not choose a behavior without product confirmation.

---

# 21. Cancellation Conflict — Refund Timing

The current document also contains two refund behaviors for an in-progress cancellation.

One section says:

```text
Playpal cancels active order
→ Remaining Blue Diamonds returned after 1 week
```

Another section says:

```text
Playpal cancels
→ Order immediately closes
→ Uncompleted Blue Diamonds returned to user
```

The settlement table again references:

```text
1-week delayed refund
```

Therefore:

**Refund timing after accepted-order cancellation = CONFLICT / REVIEW**

Do not implement either version silently.

---

# 22. Playpal Marks Order Complete

Current Playpal-side operation:

```text
Mark Order Complete
→ Order enters Review stage
```

The source does not fully define whether the user must confirm this before settlement when unfinished units remain.

**Status: REVIEW**

---

# 23. Automatic Completion

Current principle:

```text
Deadline reached
→ Remaining service automatically completes
→ Remaining held funds settle
→ Review stage begins
```

This prevents indefinite Hold.

---

# 24. Review

After completion:

```text
User may review Playpal
```

After user review:

```text
Order becomes Completed
```

The source also references viewing historic evaluation and settlement details.

Full Review System rules are not defined here.

**Review system: FUTURE / TBD**

---

# 25. Appeal

After the Playpal accepts the Order, the user may:

```text
Order Detail
→ More
→ Appeal
```

Cross-reference:

```text
05-TRUST-SAFETY-ACCOUNT-SUPPORT-SYSTEM.md
```

---

# 26. Appeal Freeze

When an Appeal is submitted:

```text
Order settlement
→ Frozen
```

Customer support may examine:

- Chat records
- Time records
- Service description
- Other evidence

After decision:

```text
Order status updated
→ Settlement unlocked / resolved according to decision
```

Exact adjudication outcomes:

**TBD**

---

# 27. Standard Order Settlement Rules

Current types:

## Hold

```text
User pays
→ Platform holds Blue Diamonds
```

## Partial Settlement

```text
Completed units
→ Proportional settlement
→ Current platform commission: 10%
```

## Full Settlement

```text
All units completed
or
deadline reached
→ Remaining amount settles
```

## Cancellation

Current refund timing is under `CONFLICT / REVIEW`.

## Appeal

```text
Settlement frozen
→ Await support decision
```

---

# 28. Standard Order Safety Rules

Current rules include:

- One extension per Order
- User cannot unilaterally modify an accepted Order
- Funds validated through Hold
- Key financial actions require confirmation
- Extension/cancellation/settlement actions require confirmation
- Key logs are retained
- Appeal/transaction records are retained separately from ordinary short-term logs

---

# 29. Standard Order Notifications

Current examples:

## Order Created

User:

```text
Order created. Waiting for Playpal to accept.
```

Playpal:

```text
You received a new order.
```

## Playpal Accepted

User:

```text
Playpal accepted. Service started.
```

Playpal:

```text
Order accepted. Countdown started.
```

## Rejected

User:

```text
Order rejected. Blue Diamonds returned.
```

## Partial Completion

User:

```text
Part of the order is completed.
Remaining units: X.
```

Playpal:

```text
You received a partial settlement.
```

## Deadline Reached

User:

```text
Service completed. Please review the Playpal.
```

Playpal:

```text
Order automatically completed.
```

## Extension

Both parties receive deadline-update feedback.

## Cancellation

Both parties receive cancellation/refund feedback.

## Appeal

Both parties receive appeal-result feedback.

---

# 30. Quick Order

Quick Order is an **instant matching / bidding system**.

Its purpose:

```text
User wants a Playpal
→ Does not want to browse many profiles
→ Publishes requirements
→ Eligible Playpals grab/apply
→ User chooses candidate
→ Standard Order
```

Important:

```text
Quick Order
≠ Direct transaction
```

It is a:

```text
Filtering + Matching Layer
```

The final paid transaction still uses Standard Order.

---

# 31. Quick Order Entry

Current entry:

```text
Home
→ Quick Order
```

The page may show recommended/new Playpals near the top.

---

# 32. Quick Order Form

Current fields:

- Talent / Service
- Game rank requirement
- Playpal gender
- Unit price
- Quantity / duration
- Coupon — optional
- Total price — calculated
- Notes — maximum 50 characters

Exact service units depend on the selected Talent.

---

# 33. Quick Order Balance Check

Current rule:

```text
User Blue Diamond balance
≥
Quick Order displayed total
```

is required before publishing.

However:

```text
Publishing Quick Order
→ Does NOT deduct/hold Blue Diamonds
```

Escrow begins only after a Playpal is selected and the user enters Standard Order.

---

# 34. Quick Order Publish

On publish:

```text
Create matching/dispatch request
→ Find eligible Playpals
→ Notify via Order-Grab Assistant
→ Mark dispatch as Active
```

Cross-reference:

```text
09-NOTIFICATION-RECOMMENDATION-SYSTEM.md
```

---

# 35. Quick Order Lifetime

Current base lifetime:

```text
20 minutes
```

If nobody successfully participates before expiry:

```text
Move to Dispatch History
```

If a Playpal has already grabbed/applied, the source says the dispatch may stay active until user selection.

Exact maximum post-expiry selection window requires clarification.

---

# 36. Last-Minute Grab Extension

Current rule:

If a Playpal grabs the request in the final minute:

```text
Automatically extend by 3 minutes
```

for display and user selection.

---

# 37. Quick Order Playpal Notification

Eligible Playpals receive a real-time notification through:

```text
抢单小帮手
Order-Grab Assistant
```

Current information includes:

- User nickname or anonymous alias
- Game / Service
- Quantity
- Unit price
- Rank requirement
- Gender requirement
- Notes

---

# 38. Playpal Grabbing a Quick Order

Current flow:

```text
Receive notification
→ Tap Grab Now
→ Accept user's offered price
→ Enter Grab editor
→ Write short intro
→ Submit
→ Enter user's candidate list
```

Important:

```text
Playpal's normal listed price
≠
Quick Order price

By grabbing:
Playpal agrees to user's offered Quick Order price.
```

---

# 39. Playpal Grab Introduction

The Playpal may provide a short explanation such as:

- Why they fit
- Game experience
- Personality
- Service style

Game rank information is automatically displayed.

---

# 40. Quick Order Grab Limit per Request

Current rule:

```text
Each Playpal
→ Can grab the same Quick Order only once
```

---

# 41. Quick Order Candidate List

The user sees candidates with current fields such as:

- Avatar
- Nickname
- Talent / Service
- Price
- Rank
- Service voice introduction
- Short text introduction

The user then selects a Playpal.

---

# 42. Quick Order → Standard Order

After candidate selection:

```text
Selected Playpal details
+
Quick Order price
→ Pre-fill Standard Order
```

The user confirms:

- Quantity
- Deadline
- Notes

Then:

```text
Create Standard Order
→ Blue Diamonds enter Hold
```

The Standard Order rules then apply.

---

# 43. Quick Order Concurrency

Current rules:

## User

Maximum simultaneous active Quick Orders:

```text
3
```

## Playpal

Maximum simultaneous Quick Order participation:

```text
5
```

---

# 44. Quick Order Safety

Current rules:

- Duplicate/conflicting dispatches may be filtered.
- Expired requests are archived.
- History currently retained for 30 days.
- One Playpal can only grab the same request once.

---

# 45. Party Room Dispatch

Party Room Dispatch reuses the same matching/notification infrastructure as Quick Order.

However:

```text
Party Room Dispatch
≠ Quick Order
```

Its purpose is different.

---

# 46. Party Room Dispatch Initiator

Current initiators:

```text
Room Owner
Room Admin
```

They may publish a request:

```text
for someone else in the room
```

The initiator may not be the eventual paying customer.

---

# 47. Party Room Dispatch Form

Current fields:

- Talent / Service
- Rank
- Playpal gender
- Unit price
- Quantity / duration
- Notes — maximum 50 characters

---

# 48. Party Room Dispatch Has No Balance Requirement

Unlike Quick Order:

```text
Publisher does NOT need sufficient Blue Diamond balance
```

because:

```text
Party Room Dispatch
→ No payment
→ No escrow
```

It is an announcement/recruitment action.

---

# 49. Party Room Dispatch Flow

Current flow:

```text
Owner/Admin fills dispatch
→ Confirm
→ Matching request created
→ Eligible Playpals notified
→ Room receives visible dispatch announcement
→ Playpal taps Respond
→ Playpal enters Party Room directly
→ Playpal introduces self via voice/chat
→ Actual customer chooses someone
→ Actual customer creates Standard Order
```

---

# 50. No Candidate List for Party Room Dispatch

Current Party Room Dispatch does **not** create:

- Grab candidate list
- Candidate voice-introduction list
- Candidate text-introduction list

Instead:

```text
Playpals enter the room
→ Introduce themselves live
```

---

# 51. Party Room Dispatch Transaction Boundary

Current rule:

```text
Party Room Dispatch
→ No Blue Diamond Hold
→ No settlement
```

The eventual actual customer must perform:

```text
Standard Order
```

This ensures the payer/customer explicitly enters the escrow flow.

Cross-reference:

```text
08-PARTY-ROOM-SYSTEM.md
```

---

# 52. Quick Order vs Party Room Dispatch

| Area | Quick Order | Party Room Dispatch |
|---|---|---|
| Initiator | User for self | Owner/Admin may act for another user |
| Matching | Yes | Yes |
| Playpal notification | Yes | Yes |
| Candidate list | Yes | No |
| Playpal intro | Candidate page | Live inside Party Room |
| Balance requirement | Yes | No |
| Payment on publish | No | No |
| Standard Order required | Yes | Yes |
| Escrow | At Standard Order | At Standard Order |
| Main purpose | Self-service instant matching | Room-based Playpal recruitment |

---

# 53. Blind Box Order

Blind Box is a random/limited-slot matching system.

Unlike Quick Order:

```text
Blind Box
→ User does not browse candidates before matching begins
```

It is intended for users who:

- Have choice difficulty
- Prefer a faster/randomized selection
- Want a simpler matching experience

---

# 54. Blind Box Entry

Current entry:

```text
Home
→ Blind Box Order
```

The page does **not** display recommended Playpals at the top.

---

# 55. Blind Box Form

Current fields:

- Talent / Service
- Rank requirement
- Gender
- Language
- Unit price
- Total price

Current source does not list a free-text note field in the Blind Box form.

---

# 56. Blind Box Balance Requirement

Before matching:

```text
User Blue Diamond balance
≥
Displayed total
```

is required.

However:

```text
Starting Blind Box matching
→ Does not immediately deduct Blue Diamonds
```

Escrow occurs only after user confirms a matched Playpal.

---

# 57. Blind Box Matching Window

Current initial matching period:

```text
1 minute
```

The system searches for eligible Playpals.

---

# 58. Blind Box Matching Slots

Current maximum visible candidate slots:

```text
3
```

Eligible Playpals receive a matching invitation.

The source says if:

- Playpal does not accept within 30 seconds
- Or all 3 matching slots are full

the invitation popup disappears.

---

# 59. Blind Box Playpal Decision

Playpal may:

```text
Accept Match
Reject Match
```

By accepting:

```text
Playpal agrees to user's Blind Box offered price
```

The Playpal's normal listed price does not control the Blind Box price.

---

# 60. Blind Box Candidate Card

Current user-facing candidate card shows:

- Talent / Service
- Rank
- Self-description tags

It intentionally exposes less information than Quick Order.

---

# 61. Blind Box User Selection

User taps a candidate card.

System shows:

```text
Confirm Match
Cancel Match
```

If confirmed:

```text
Create Order
→ Escrow
→ Order becomes accepted / in progress
→ Both users move to Chat
```

The source sometimes describes this as direct ordering and elsewhere as passing through the standard-order confirmation layer.

Current product interpretation:

```text
Blind Box selection
→ Final confirmation
→ Standard transaction rules are created immediately
```

Exact UI page transition:

**REVIEW**

---

# 62. Blind Box Candidate Selection Timer

After candidate cards appear:

```text
3-minute user selection window
```

If user does not choose:

```text
"Selection time exceeded"
→ 5-second countdown
```

User may choose:

```text
I'm still considering
```

otherwise:

```text
Return to Blind Box home
```

---

# 63. Blind Box No-Match Behavior

If 1-minute matching ends without a satisfactory match:

```text
Continue Matching
Stop Matching
```

The source also references:

```text
Continue Waiting = 5 minutes
```

Exact retry-loop behavior after each five-minute period:

**REVIEW**

---

# 64. Blind Box Rejection Suppression

If the user rejects a Playpal:

```text
Same Playpal
→ Should not receive another match invite from that same user
for 60 minutes
```

---

# 65. Blind Box Concurrency

Current rules:

## User

```text
Maximum 1 active Blind Box matching session
```

## Playpal

```text
Maximum 1 active Blind Box matching participation
```

---

# 66. Blind Box Notification

Eligible Playpals receive an immediate:

```text
Blind Box Match
```

notification through the Order-Grab Assistant.

Current information includes:

- Blind Box label
- Talent / Service
- Unit price
- Rank requirement

---

# 67. Blind Box Safety

Current rules include:

- Filter duplicate/conflicting matching requests
- Expired matching requests archived
- 60-minute suppression after rejection
- 1 active matching session per user/Playpal

Additional anti-abuse rules:

**TBD**

---

# 68. Order-Grab Assistant

`抢单小帮手` is the Playpal-only notification/matching assistant used by:

- Quick Order
- Blind Box
- Party Room Dispatch

Cross-reference:

```text
09-NOTIFICATION-RECOMMENDATION-SYSTEM.md
```

It should not be treated as a normal user-to-user chat.

---

# 69. Matching Layer vs Transaction Layer

The overall architecture should distinguish:

```text
MATCHING LAYER
├── Quick Order
├── Blind Box
└── Party Room Dispatch

TRANSACTION LAYER
└── Standard Order
    ├── Hold
    ├── Service
    ├── Partial settlement
    ├── Full settlement
    ├── Appeal
    └── Review
```

Quick Order and Party Room Dispatch do not themselves complete a transaction.

Blind Box is closer to direct matching but still ultimately creates the same Standard Order transaction state.

---

# 70. Recommended Core Data Separation

Conceptually:

```text
MatchingRequest
├── type
│   ├── QUICK_ORDER
│   ├── BLIND_BOX
│   └── PARTY_ROOM_DISPATCH
├── requester
├── requirements
├── price
├── status
└── candidates / responses

Order
├── order_id
├── customer
├── playpal
├── service
├── quantity
├── deadline
├── escrow
├── completed_quantity
├── status
└── settlement
```

This is documentation guidance only.

Final database schema:

**TBD**

---

# 71. UI Reference Material in Source

The source contains a UI-reference section for Standard Order showing separate screens for:

- Before Order
- Ordering
- Waiting for Acceptance
- Playpal receiving Order
- Accepted / Rejected
- In-progress Order
- Order Completed / Waiting for Review
- Reviewed Order

The source also contains Quick Order UI references for:

- Quick Order Setup
- Confirm Dispatch
- My Dispatches
- Confirm Playpal
- Transition to Standard Order

These references should be treated as:

```text
UI Reference
```

not automatic final design authority.

Current approved product rules take priority.

---

# 72. Archived Rules

Pages 33–45 are explicitly labeled Archive.

They must not override current working rules.

Examples of archived concepts include:

- Quick Order displayed for 15 minutes
- Voice/text grab variations
- Free Trial ordering
- Older Blind Box penalty limits
- Historical simplified pricing
- Historical stored-order rules
- Archived detailed default-deadline values
- Older cancellation wording
- Historical Quick Order flow
- Older diagram/content

These may be useful for future reference but are not current Master rules.

---

# 73. Archive — Free Trial Order

The Archive contains a historical `Free Trial` concept for new users.

Current source sections do not re-establish it as a current Order mode.

Therefore:

```text
Free Trial Order
= ARCHIVED / NOT CURRENT
```

If reintroduced, it requires a new approved decision.

---

# 74. Archive — Old Quick Order Duration

Archived rule:

```text
15 minutes
```

Current working rule:

```text
20 minutes
```

Use:

```text
20 minutes
```

---

# 75. Archive — Old Blind Box Penalty Logic

Archive contains old participation penalties such as:

- 5-minute acceptance
- daily missed limits
- monthly bans
- user daily usage caps

Current working Blind Box section defines different timing/concurrency rules.

Therefore the archived penalties are not current.

---

# 76. Cross-System Relationships

## Talent / Service Catalog

Reference:

```text
02-TALENT-SERVICE-GAME-CATALOG.md
```

Used for:

- Standard Order services
- Quick Order filters
- Blind Box filters
- Party Dispatch filters

## Trust & Safety / Support

Reference:

```text
05-TRUST-SAFETY-ACCOUNT-SUPPORT-SYSTEM.md
```

Used for:

- Appeals
- Support case handling

## Task System

Reference:

```text
06-TASK-SYSTEM.md
```

Potential connections:

- Order completion
- Order-count achievements
- Accept-order achievements
- EXP/task behavior

## Party Room

Reference:

```text
08-PARTY-ROOM-SYSTEM.md
```

Used for:

- Party Room Dispatch

## Notifications

Reference:

```text
09-NOTIFICATION-RECOMMENDATION-SYSTEM.md
```

Used for:

- Order-Grab Assistant
- Order notifications
- Matching alerts

---

# 77. Current Conflicts / Review Items

## 77.1 User Cancellation Before Acceptance

Current source contains conflicting wording.

**Decision required.**

## 77.2 Accepted-Order Cancellation Refund Timing

Current source says both:

```text
Immediate refund
```

and:

```text
Refund after 1 week
```

**Decision required.**

## 77.3 Playpal Mark-Complete Behavior

Need to confirm:

- Whether user confirmation is required
- How incomplete multi-unit quantities are treated

## 77.4 Default Deadline

Detailed defaults/ranges are mainly in Archive.

**Current final deadline policy requires reconfirmation.**

## 77.5 Quick Order With Existing Candidates at Expiry

Need final rule for how long selection remains available after 20-minute expiry.

## 77.6 Blind Box "Direct Transaction" vs Standard Order Page

Source conceptually says Blind Box is a direct transaction, but also references Standard Order confirmation.

**Exact UI transition: REVIEW**

## 77.7 Blind Box Continue-Waiting Loop

Need final behavior after the first 1-minute match and optional 5-minute continuation.

---

# 78. AI Design / Coding Rules

When Claude, ChatGPT, Gemini, or another AI assistant works on this system:

1. Treat Standard Order as the core paid transaction system.
2. All Standard Order payments use platform Hold / escrow.
3. Do not release all funds to Playpal at Order creation.
4. Support multi-unit / partial completion.
5. Current platform commission is `10%` unless later superseded.
6. Do not resolve the user-cancellation-before-acceptance conflict without approval.
7. Do not resolve the accepted-order refund timing conflict without approval.
8. Only Playpal performs the post-acceptance deadline extension action.
9. An Order may currently be extended only once.
10. Quick Order is a matching layer, not direct payment.
11. Publishing Quick Order must not Hold funds.
12. Quick Order current lifetime is `20 minutes`.
13. A final-minute Quick Order grab extends selection time by `3 minutes`.
14. A user may have up to `3` active Quick Orders.
15. A Playpal may participate in up to `5` Quick Orders simultaneously.
16. One Playpal may grab the same Quick Order only once.
17. Quick Order Playpal accepts the user's offered Quick Order price.
18. Party Room Dispatch has no payment or escrow.
19. Party Room Dispatch does not create a Playpal candidate list.
20. Party Room Dispatch sends responding Playpals directly into the room.
21. The actual customer must create the Standard Order.
22. Blind Box has up to `3` candidate slots.
23. Blind Box initial matching duration is `1 minute`.
24. Blind Box user and Playpal each may participate in only `1` active match at a time.
25. Do not restore archived Blind Box penalties without approval.
26. If a Blind Box Playpal is rejected, suppress that same Playpal for that same user for `60 minutes`.
27. Do not treat `抢单小帮手` as an ordinary chat conversation.
28. Pages 33–45 of the source are Archive and do not override current rules.
29. Existing screenshots/UI references do not override current Master product logic.
30. Responsive design must follow `04-RESPONSIVE-DESIGN-RULES.md`.

---

# 79. Future Documentation Needed

## Standard Order

- Final pre-acceptance cancellation rule
- Final accepted-order refund delay
- Default deadline and selectable range
- Maximum quantity
- Coupon rules
- Playpal mark-complete confirmation
- Review System
- Currency conversion / Blue Diamond → Purple Diamond
- Refund accounting
- Appeal outcomes
- Tax/invoice/receipt behavior

## Quick Order

- Final recommendation area
- Candidate limit
- Post-expiry candidate-selection window
- Quick Order price limits
- Eligibility quality filters
- Notification frequency
- History retention beyond current 30-day concept

## Blind Box

- Exact retry loop
- Candidate randomization
- Matching fairness
- Candidate eligibility
- Minimum online/instant status
- Selection timeout behavior
- Cancellation/refund edge cases

## Party Room Dispatch

- Dispatch expiry
- Room capacity interaction
- Whether duplicate Playpals can repeatedly respond
- Announcement design
- Actual customer identification

## Shared

- Matching data model
- Order data model
- Analytics events
- Anti-fraud controls
- Anti-spam controls
- Admin tools
- Financial audit log
- Notification preferences

---

# 80. Current Document Status

**WORKING MASTER — v0.1**

Current architecture:

```text
Matching Layer
├── Quick Order
├── Blind Box
└── Party Room Dispatch
        ↓
Transaction Layer
└── Standard Order
    ├── Hold
    ├── Playpal Accept / Reject
    ├── Service Execution
    ├── Partial Completion
    ├── Extension
    ├── Cancellation
    ├── Appeal
    ├── Settlement
    └── Review
```

Future approved changes should update this same Master.

Do not create separate competing `Order`, `Quick Order`, `Blind Box`, or `Grab Order` Master files unless the system becomes large enough that an explicit documentation split is approved.
