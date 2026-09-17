# Find Playpal — Notification & Recommendation System

**Status:** Early Master / Working Baseline  
**Version:** 0.1  
**Source:** `推送和推荐通知系统.docx`  
**Module Type:** Notifications / Recommendations / Re-engagement / Homepage Exposure  
**Purpose:** Define the current known rules for user notifications, re-engagement messaging, personalized recommendations, homepage Playpal recommendation slots, and related discovery logic.

> This document preserves the current source logic. Items marked `待更新`, incomplete ranking formulas, training-related notes, and recommendation eligibility rules remain `TBD` or `REVIEW` until explicitly approved.

---

# 1. System Overview

The current system contains several related but distinct functions:

```text
Notification & Recommendation System
├── Activity Notifications
├── Re-engagement Notifications
├── In-app Floating Notices
├── Official Chat Notices
├── Personalized Recommendations
└── Homepage Playpal Recommendation Slots
```

These systems should work together but must not be treated as one identical notification channel.

---

# 2. Activity Notifications

When a new activity or event is available, the system may notify relevant users.

Examples from the current source:

- Playpal ranking events
- Playpal reward events
- Game-related events for Playpals
- Game-related events for regular users / Summoners

The key principle is:

```text
Relevant Event
→ Relevant Audience
→ Notification
```

The source does not yet define:

- Exact targeting rules
- Notification channel priority
- Whether users can opt out by category
- Event-notification frequency caps

**Status: TBD**

---

# 3. Interest-Based Targeting

The source says notifications and recommendations may use:

- Games selected during registration
- Followed users / followed Playpals

This means early recommendation signals include:

```text
Declared Interests
+
Follow Relationships
```

These should later be combined with behavioral signals.

---

# 4. Re-engagement Private Chat

The source contains a separate rule for users inactive for more than:

```text
2 days
```

The system may send a:

```text
Private Chat / Direct Message
```

to inactive regular users or Playpals.

This appears to be an **in-app re-engagement message**, not necessarily the same as push notification.

Exact sender identity:

**TBD**

Likely options include:

- Official system account
- Official assistant account
- Automated platform message

Do not assume a normal user account sends these messages.

---

# 5. Push Notification Re-engagement Schedule

The source separately defines push-notification intervals:

```text
Inactive 3 days
Inactive 7 days
Inactive 14 days
Inactive 30 days
```

If the user remains inactive for more than 30 days:

```text
Push every 14 days
```

until another rule stops the sequence.

This should be treated separately from the `>2 days` in-app private-chat re-engagement rule.

Conceptually:

```text
>2 days inactive
→ In-app re-engagement private message

3 / 7 / 14 / 30 days inactive
→ Push notifications

>30 days inactive
→ Push every 14 days
```

The exact content, maximum lifetime, suppression rules, and opt-out behavior are not yet defined.

**Status: TBD**

---

# 6. Main-Screen Floating Information Notices

The source includes floating information messages on the main screen.

Examples:

```text
XXX is looking for a Playpal for XXX game
XXX is looking for a male Honor of Kings Playpal
XXX is looking for a female Honor of Kings Playpal
XX is looking for a 1v1 Chat Playpal
```

These notices appear to be real-time or near-real-time discovery prompts.

Possible source events include:

- Playpal request
- Service request
- Quick matchmaking request
- Party / order discovery

Exact source event is not yet fully defined.

**Status: REVIEW / TBD**

---

# 7. VIP / Status Upgrade Floating Notice

The source also mentions status upgrade notices:

```text
XXX upgraded to ...
```

The source labels this as:

```text
VIP upgrade notification
```

Find Playpal currently has several progression/status systems:

- Account Level
- Platform Rank
- Royal / Noble

Therefore the exact meaning of `VIP` here is unclear.

**Status: REVIEW**

AI must not automatically map `VIP` to Royal / Noble or Platform Rank without explicit approval.

---

# 8. Personalized Recommendation System

The system may recommend:

- Games
- Playpals
- Other services

based on:

- Game history
- Interests
- User behavior
- Browsing preference
- Ordering preference
- Declared onboarding preferences

Conceptually:

```text
User Profile
+
Declared Interests
+
Behavior
+
History
→ Recommendation Signals
→ Personalized Discovery
```

---

# 9. Personalization Onboarding

After registration, the user enters a personalization setup.

The user may:

```text
Skip
```

the setup.

---

# 10. Favorite Games / Service Interests

The current source allows the user to select up to:

```text
10
```

items.

Examples include:

- Singing
- Chatting
- Individual game titles

The source mixes games and non-game services in the same example.

Final taxonomy should reference:

```text
02-TALENT-SERVICE-GAME-CATALOG.md
```

**Status: REVIEW**

---

# 11. What the User Wants from Find Playpal

The onboarding asks users to select up to:

```text
3
```

desired outcomes.

Current examples include:

- Game allies / teammates
- Someone to chat with

The source marks this section:

```text
待更新
```

Therefore the final list is not approved.

**Status: TBD / TO BE UPDATED**

---

# 12. Playpal Preference Filters

The source says users may select preferred Playpal characteristics such as:

- Gender
- Region
- Language
- Appearance preference
- Voice preference

These are recommendation preference signals.

The final field list, privacy implications, ranking weight, and available options are not yet defined.

**Status: TBD**

---

# 13. Recommendation Signals

Current known recommendation inputs include:

```text
Declared game interests
Follow relationships
Game history
Interest profile
Behavior
Browsing preference
Order preference
Playpal game level / rank
Online status
Instant-order availability
```

These signals do not yet have approved weights.

**Recommendation scoring formula: TBD**

---

# 14. Playpal Game Level / Rank Signal

The source explicitly says recommendation can consider:

```text
Playpal's game level / rank
```

This should refer to game-specific competitive ranking where applicable.

Cross-reference:

```text
02-TALENT-SERVICE-GAME-CATALOG.md
```

Do not confuse game-specific rank with Find Playpal Platform Rank.

---

# 15. Homepage Playpal Recommendation Types

Current source defines several homepage recommendation groups:

1. Newcomer Recommendation
2. Noble Recommendation
3. Monthly Recommendation
4. Free Trial Recommendation
5. Online Recommendation

These recommendation types are distinct and have different eligibility logic.

---

# 16. Newcomer Recommendation

Current number of slots:

```text
10
```

Eligibility concept:

```text
Playpal completes training
+
Performs well in high-quality training tasks
→ Eligible for Newcomer Recommendation
```

The exact scoring or training-quality threshold is not defined in this document.

**Status: TBD / CROSS-MODULE**

---

# 17. Noble Recommendation

Current number of slots:

```text
10
```

Current eligibility for the supporting user:

```text
Royal / Noble tier:
Marquis (侯爵) or above
```

Current mechanism:

- Eligible Noble user receives/uses one monthly exclusive gift associated with that Noble tier.
- The Noble user may use the exclusive gift to support a preferred Playpal.
- The supported Playpal may obtain a Homepage Noble Recommendation slot.
- There are only 10 slots.
- Users may need to compete for the available slots by sending the exclusive gift.

The exact timing, tie-breaking, reservation, and slot-duration mechanics are not defined.

**Status: REVIEW / TBD**

Cross-reference:

```text
03-SHARED-USER-PROGRESSION-SYSTEM.md
```

---

# 18. Monthly Recommendation

Current slot structure:

```text
6 recommendations
```

The source says they are split across:

- Male
- Female
- Overall

The exact distribution of the 6 slots is not explicitly defined.

Eligibility is based on the previous month's ranking performance.

Current source references:

```text
Popularity Ranking Top 1 / 2 / 3
→ Orders + Guardian Position

Charm Ranking Top 1 / 2 / 3
→ Gifts Received
```

The source also says:

```text
No ranking order inside the recommendation group
```

Meaning the six recommended Playpals may be displayed without a 1–6 ordering.

The exact ranking-score calculation is not included.

**Status: REVIEW / SCORE FORMULA REQUIRED**

---

# 19. Free Trial Recommendation

Current number of slots:

```text
5
```

Current rule:

```text
Random each time
```

The source does not define:

- Eligible Playpal pool
- Whether only verified Playpals qualify
- Whether the user has already used the free trial
- Repetition suppression
- Geographic/language filters

**Status: TBD**

---

# 20. Online Recommendation

Current number of slots:

```text
5
```

Current logic:

```text
Based on user's browsing preferences
+
order preferences
+
randomized selection
```

Priority:

```text
Playpals with Instant Accept / 秒接单 enabled
```

Exact weighting remains TBD.

---

# 21. Recommendation Slot Order / Hierarchy

The source contains the note:

```text
"找他玩一场" replaced by Newcomer Recommendation
Second = Noble
Then Monthly Recommendation
```

This implies an intended homepage recommendation hierarchy/order.

Current interpretation:

```text
1. Newcomer Recommendation
2. Noble Recommendation
3. Monthly Recommendation
```

Placement of:

- Free Trial Recommendation
- Online Recommendation

relative to those groups is not explicitly defined.

**Status: REVIEW**

---

# 22. Recommendation Quality Control

The source defines quality control for Playpal recommendations.

If a Playpal has:

- Low user rating
- Low activity

they may become ineligible for:

- Homepage recommendations
- Newcomer recommendations
- Other recommendation exposure

Exact thresholds are not defined.

**Status: TBD**

---

# 23. Official Messages in Chat Interface

The source says every user's messaging interface, including Playpals, may contain official message types such as:

- Official announcements
- Event messages
- Order-snatching helper (`抢单小帮手`) — Playpal only
- Notification messages
- Who viewed you / 谁偷看你

This suggests the Chat system should distinguish:

```text
User Conversation
vs
Official / System Conversation
```

Exact visual hierarchy and retention rules are not yet defined.

---

# 24. Playpal-Only Official Assistant

`抢单小帮手` is limited to Playpals.

Potential functions may include:

- New order opportunities
- Quick-order opportunities
- Matching alerts

The source does not define exact behavior.

**Status: TBD**

---

# 25. Who Viewed You

The source lists:

```text
谁偷看你
```

as a message/notification category.

The exact product meaning is likely profile-view information, but the source does not fully define:

- Who can see profile viewers
- Time window
- Whether anonymous/invisible visits are excluded
- Noble privacy interaction
- Whether this is free or paid

**Status: TBD**

---

# 26. Notification Channels

Current source implies at least:

```text
Push Notification
In-app Private Message
Official Chat Message
Main-Screen Floating Notice
Homepage Recommendation Exposure
```

These should be modeled separately.

They differ in:

- Visibility
- Urgency
- Persistence
- Audience
- User control

---

# 27. Notification Preference Center

The source does not define user controls.

Future settings may need to address:

- Activity notifications
- Recommendation notifications
- Marketing notifications
- Order-related notifications
- Playpal opportunity alerts
- Social notifications
- Re-engagement push
- Floating notices

**Status: TBD**

---

# 28. Notification Frequency / Fatigue Control

The source does not define:

- Daily push limit
- Duplicate suppression
- Quiet hours
- Priority levels
- Notification grouping
- Re-engagement stop conditions
- Timezone handling

These must be defined later to avoid notification spam.

**Status: TBD**

---

# 29. Recommendation Diversity

The source describes several types of recommendations, but does not define diversity/fairness rules.

Possible issues requiring future decisions:

- Avoid showing the same Playpal repeatedly
- Gender / language / location balance
- Newcomer exposure vs established Playpals
- Paid/Noble influence vs organic recommendations
- Quality floor
- Inactive Playpal suppression

**Status: TBD**

---

# 30. Promotion & Training Content in the Source

The source also contains a separate business/operations section:

```text
Promotion & Training
```

This includes:

- Recruiting experienced streamers
- Streamer promotion of Find Playpal
- Streamers helping train Playpals
- Playpal mentor role
- Playpal training
- Training quality grading
- Official certification
- Recruitment batches / limited slots
- Moving applicants to the next training batch if current batch is full
- Returning to training for review
- Recommendation exposure tied to training performance

These rules relate to the Recommendation System but are large enough to become a separate future module.

Recommended future document:

```text
PLAYPAL-RECRUITMENT-TRAINING-CERTIFICATION-SYSTEM.md
```

For now, only recommendation-related dependencies are retained here.

---

# 31. Training Status & Recommendation Eligibility

The source suggests a possible Playpal quality ladder:

```text
Qualified
Excellent
Officially Certified
```

Potential logic:

- Training completed → Qualified
- Strong training/profile quality → Excellent
- Strong user ratings/order performance → possible Official Certification
- Company-recruited salaried Playpals may also be officially certified

Exact criteria are not defined.

**Status: TBD / FUTURE MODULE**

---

# 32. Recruitment Cohorts

The source proposes phased Playpal recruitment.

Example concept:

```text
Recruitment Batch 1:
fixed date range
limited capacity
```

If full:

```text
Applicant
→ automatically placed into next recruitment/training batch
```

This is operational/recruitment logic, not directly a notification rule.

**Status: FUTURE MODULE**

---

# 33. Cross-System Relationships

## Talent / Game Catalog

Reference:

```text
02-TALENT-SERVICE-GAME-CATALOG.md
```

Used for:

- Game preference selection
- Game-based recommendation
- Service recommendation

## Shared User Progression

Reference:

```text
03-SHARED-USER-PROGRESSION-SYSTEM.md
```

Used for:

- Noble Recommendation eligibility
- VIP/status-notification clarification
- Rank / Noble display

## Party Room

Reference:

```text
08-PARTY-ROOM-SYSTEM.md
```

Potentially related to:

- Playpal discovery
- Official rooms
- Service requests
- Floating service-demand notices

## Future Training System

Required for:

- Newcomer Recommendation eligibility
- Playpal qualification
- Official certification
- Recruitment cohorts

---

# 34. Current Conflicts / Review Items

## 34.1 Inactivity Timing

Two separate source rules exist:

```text
>2 days inactive
→ private-chat re-engagement

3 / 7 / 14 / 30 days inactive
→ push notification
```

These can coexist as separate channels.

Do not merge them into one schedule unless explicitly approved.

---

## 34.2 VIP Upgrade Meaning

The source says:

```text
VIP upgrade notification
```

but Find Playpal currently has no single approved system named `VIP`.

**Status: REVIEW**

---

## 34.3 Personalized Interest Taxonomy

The onboarding mixes:

- Games
- Singing
- Chatting

under a single interest-selection concept.

Final taxonomy should be aligned to the approved Talent / Service Catalog.

**Status: REVIEW**

---

## 34.4 Monthly Recommendation Ranking Formula

The source references ranking inputs, but does not provide the formula.

**Status: TBD**

---

## 34.5 Noble Recommendation Slot Competition

The source says users must `抢位` using an exclusive gift.

Exact slot allocation logic is undefined.

**Status: TBD**

---

# 35. AI Design / Coding Rules

When Claude, ChatGPT, Gemini, or another AI assistant works on this system:

1. Keep notification channels separate:
   - Push
   - In-app private/system message
   - Floating notice
   - Official Chat notice
   - Recommendation exposure
2. Do not treat the `>2 days` rule as the same rule as the `3/7/14/30 days` push schedule.
3. Do not invent final re-engagement copy.
4. Do not map `VIP` to Noble or Rank automatically.
5. Personalization setup may be skipped.
6. Maximum current favorite-interest selection is `10`.
7. Maximum current user-goal selection is `3`, but the option list is still pending update.
8. Do not invent preference fields beyond the current source without approval.
9. Do not confuse Playpal game rank with Find Playpal Platform Rank.
10. Preserve current recommendation slot counts:
    - Newcomer: 10
    - Noble: 10
    - Monthly: 6
    - Free Trial: 5
    - Online: 5
11. Do not invent the Monthly Recommendation ranking formula.
12. Noble Recommendation currently requires supporting Noble user at `侯爵` or above.
13. Do not invent the Noble slot competition/tie-break rules.
14. Online Recommendation should prioritize Playpals with Instant Accept enabled, subject to future scoring rules.
15. Low rating / low activity may suppress recommendation eligibility, but thresholds remain TBD.
16. Keep Promotion & Training as a related future module rather than silently expanding this notification file into a recruitment system.
17. Existing Figma/prototype screens are references unless explicitly approved.

---

# 36. Future Documentation Needed

The following remain unresolved:

## Notifications

- Notification preference settings
- Push opt-in / opt-out
- Quiet hours
- Frequency caps
- Notification priority
- Timezone behavior
- Re-engagement stop conditions
- Final message copy
- Floating-notice source events
- VIP/status-notification definition

## Recommendations

- Recommendation scoring
- Signal weights
- Diversity rules
- Repetition suppression
- Ranking formula
- Monthly recommendation slot split
- Recommendation duration
- Slot refresh timing
- Noble slot competition rules
- Free-trial eligibility
- Online recommendation randomization
- Quality-control thresholds

## Personalization

- Final 10-interest taxonomy
- Final 3-goal list
- Gender preference values
- Region model
- Language model
- Appearance/voice preference design
- Skip consequences
- Editing preferences later

## Playpal Training / Recruitment

- Training curriculum
- Training tasks
- Qualification criteria
- Excellent criteria
- Official certification criteria
- Recruitment batch system
- Capacity
- Mentors
- Salary / commission rules
- Recommendation eligibility

---

# 37. Current Document Status

**EARLY MASTER / WORKING BASELINE — v0.1**

Current confirmed structure:

```text
Notifications
├── Activity notifications
├── Re-engagement private messages
├── Push re-engagement
├── Floating notices
└── Official/system chat notices

Recommendations
├── Personalized recommendations
├── Newcomer Recommendation
├── Noble Recommendation
├── Monthly Recommendation
├── Free Trial Recommendation
└── Online Recommendation
```

Future approved changes should update this same Master rather than creating parallel notification/recommendation specification files.
