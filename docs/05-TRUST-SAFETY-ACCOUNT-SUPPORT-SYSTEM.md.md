# Find Playpal — Trust, Safety, Account & Customer Support System

**Status:** Early Master  
**Version:** 0.1  
**Source:** `举报拉黑删号客服系统.md`  
**Module Type:** Trust & Safety / Account Management / Customer Support  
**Purpose:** Define the current known product rules and user flows for reporting, blocking, account deletion, appeals, and customer support.

> This document preserves the current product logic from the source material. Missing details, ambiguous behaviors, and policy-sensitive areas are marked `TBD` or `REVIEW` rather than being silently invented or corrected.

---

# 1. Module Overview

This module contains four related systems:

1. **Report System**
2. **Block System**
3. **Account Deletion System**
4. **Customer Support / Appeal System**

These systems are related because they all handle user safety, disputes, account control, or official platform support.

They should share consistent UI patterns where appropriate, but their underlying workflows must remain distinct.

---

# 2. Report System

## 2.1 Entry Point

Current source flow:

```text
Other User Profile
→ More Options (...)
→ Report
```

The Report entry is located in the top-right `...` menu of another user's profile.

---

# 3. Report Categories

The current source defines five report types:

1. Content that is overly revealing or inappropriate
2. Advertising or prohibited information
3. Illegal private/off-platform transactions
4. Scam or false information
5. Discrimination or politically sensitive speech

Current Chinese source labels:

- 内容过于暴露或不恰当
- 宣传广告或违禁信息
- 进行非法私下交易
- 诈骗或不实讯息
- 歧视或政治敏感言论

## Review Note

The final wording and enforcement definitions for all report categories should be reviewed before production.

In particular, broad categories should eventually have clear moderation definitions so users, moderators, and AI systems do not interpret them inconsistently.

**Status:** REVIEW

---

# 4. Report Additional Information

The current report form allows:

```text
Description:
Maximum 200 characters

Evidence:
Maximum 5 screenshots
```

The source does not yet define:

- Supported image formats
- Maximum image file size
- Whether video is supported
- Whether screenshots are optional or required
- Whether users can submit without a description
- Whether links can be included
- Whether report evidence can be edited after submission

**Status:** TBD

---

# 5. Report Submission

After submission, the current source specifies that the system automatically sends an email to customer support.

The email contains:

- Reporter ID
- Reported user ID
- Report type
- Report description
- Report screenshots

Conceptually:

```text
User submits report
→ Report record created
→ Customer support notified
→ Review begins
```

## Backend Storage

The source mentions email delivery to support but does not yet explicitly define whether a permanent report case is stored in the platform database.

For production, the system should not assume email itself is the only report record.

**Case storage model: TBD**

---

# 6. Report Submission Confirmation

Immediately after submission, the system sends an official private message:

> 您的举报已送出，官方正在审核中。若举报成立，将会通知您处理结果。

The source establishes that the user receives confirmation that the report was submitted and is under review.

---

# 7. Report Outcome — Valid Report

If the report is confirmed as valid, the reporter receives an official private message.

Current source template:

> 关于您在 XXXX年XX月XX日 XX:XX 举报的玩家（ID：XXXXX），经审核举报内容属实，官方已采取相应惩罚措施。感谢您维护本平台的环境。

The message communicates:

- Report date/time
- Reported player ID
- Confirmation that the report was valid
- Confirmation that platform action was taken

The exact punishment is not disclosed in the current source.

---

# 8. Report Outcome — Invalid / Malicious Report

Current source rule:

```text
Invalid report / malicious report
→ No response
→ No result feedback
```

The source does not define:

- Whether malicious reports create a strike
- Whether repeated malicious reports cause punishment
- Whether the user is informed that the case was closed
- Whether the reporter can appeal a rejected report

**Status:** TBD

---

# 9. Report Case Status Model

The source implies the following statuses:

```text
Submitted
→ Under Review
→ Valid
or
→ Invalid / Closed
```

Possible backend status labels:

```text
SUBMITTED
UNDER_REVIEW
VALID
INVALID
CLOSED
```

These labels are conceptual only.

**Final backend status names: TBD**

---

# 10. Block System

## 10.1 Entry Point

Current source flow:

```text
Other User Profile
→ More Options (...)
→ Block
```

A confirmation dialog appears:

```text
您确定要拉黑此玩家（ID：XXXX）吗？
```

The user selects `Confirm` to complete the action.

---

# 11. Blocked Message Behavior

After a user is blocked:

### Direct Messages

Messages sent by the blocked user are:

```text
Mosaiced / blurred
```

The blocker may manually tap to view the content.

The blocker receives:

```text
No notifications
```

for new messages from that blocked user.

---

# 12. Block Behavior in Shared Spaces

If both users are in the same:

- Party Room
- Guild
- Group Chat

the blocked user's messages are also displayed as mosaiced / blurred.

The current source therefore treats blocking as a personal visibility filter rather than automatically preventing both users from entering all shared spaces.

---

# 13. Blocked User Presence Warning

In the Party Room list, the platform displays a notice such as:

```text
你已拉黑的 XX 位用户在此房间内
```

This allows the user to know that blocked users are already present before entering the room.

Exact placement and wording:

**TBD**

---

# 14. Interaction Restrictions After Blocking

The blocked user:

- Cannot place an order with the blocker
- Cannot accept the blocker's Quick Order

This creates a service / transaction restriction in addition to message filtering.

---

# 15. Blocked Profile Behavior

When a blocked user visits the blocker's profile, the current source says only this message is shown:

> 此人已被您拉黑，解除拉黑后可查看该玩家信息。

## Review Note

The wording appears to be from the perspective of the blocker, while this behavior is described as occurring when the blocked user visits the blocker's profile.

The final perspective and exact UI copy should be reviewed.

**Status:** REVIEW

---

# 16. Unblock System

The source implies that users can unblock because the blocked-profile message references `解除拉黑`.

However, the source does not define:

- Where the blocked-user list is located
- How users unblock someone
- Whether unblocking restores previous messages
- Whether order capability is immediately restored
- Whether there is an unblock cooldown
- Whether either user receives a notification

**Status:** TBD

---

# 17. Block System — Open Questions

Still undefined:

- Can a blocked user follow the blocker?
- Can they view Moments?
- Can they comment?
- Can they like/react?
- Can they mention/tag?
- Can they send gifts?
- Can they join the same guild?
- Can they join the same Party Room?
- Can they see each other's public profile data?
- Can admins override block visibility?
- How blocking interacts with reports
- How blocking interacts with existing orders

**Status:** TBD

---

# 18. Account Deletion System

## 18.1 Entry Point

Current source flow:

```text
My / User Page
→ Settings
→ Delete Account
→ Delete My Account
```

---

# 19. Account Deletion Confirmation

Before deletion, the system displays a warning that:

```text
Account deletion cannot be reversed
```

The user must:

1. Enter their password
2. Confirm again

Only after both steps may deletion proceed.

---

# 20. Account Deletion Completion

After deletion:

1. The platform sends a confirmation notification.
2. The user is automatically logged out.
3. The account cannot log in again.
4. The backend archives the account.

---

# 21. Deletion Confirmation Channel

The source specifies:

```text
Confirmation email
or
WhatsApp confirmation if no email was provided
```

The exact contact priority and fallback logic are not yet fully defined.

Possible source interpretation:

```text
If email exists
→ email

If no email
→ WhatsApp
```

**Final notification fallback logic: TBD**

---

# 22. Archived Account Behavior

The current source defines deletion as:

```text
Archive
rather than
hard delete
```

Archived accounts:

- Cannot log in
- Are retained internally
- May potentially be recovered in exceptional circumstances

The source gives the reason:

```text
to allow recovery if an unexpected situation occurs
```

---

# 23. Account Deletion — Policy Review Required

The source simultaneously states:

```text
Deletion cannot be reversed
```

and:

```text
Archived account is retained so it can potentially be recovered
```

These two concepts can create a user-expectation and policy conflict.

Therefore the final product must explicitly distinguish between concepts such as:

```text
Deactivate
Archive
Delete
Recover
Permanent Delete
```

before production.

**Status:** CONFLICT / REVIEW**

AI must not silently decide how these terms should be reconciled.

---

# 24. Account Data After Deletion

The source does not define what happens to:

- Username
- Display name
- Profile
- Moments
- Comments
- Likes
- Messages
- Orders
- Reviews
- Wallet balance
- Diamonds
- Gifts
- Royal status
- Rank
- Account LVL
- Playpal services
- Uploaded photos
- Guild membership
- Party history
- Reports
- Customer support tickets

**Status:** TBD

---

# 25. Customer Support System

The current source defines three support-related scenarios that should share a common UI foundation:

1. Appeal
2. Report
3. Contact Customer Support

The idea is:

```text
Use one shared base UI
→ add/remove fields depending on case type
```

This is an important product and component principle.

---

# 26. Shared Case UI Principle

The following use cases should reuse the same underlying case / ticket interface where appropriate:

```text
Report
Appeal
Customer Support Contact
```

The UI may vary in:

- Page title
- Object / target
- Required fields
- Evidence
- Context
- Available actions

But the underlying visual system should remain consistent.

---

# 27. Appeal Flow

Appeal is used in the context of an order.

Current source rule:

```text
Order
→ Appeal
```

The Report page UI is reused, but:

```text
Page name:
Report → Appeal
```

The appeal target is automatically populated with:

```text
Order Number
```

The source does not yet define:

- Which order statuses can be appealed
- Appeal deadline
- Appeal reasons
- Required evidence
- Who reviews appeals
- Whether the other party can respond
- Refund relationship
- Appeal outcome
- Re-appeal process

**Status:** TBD

---

# 28. Report Flow Within Shared Case UI

When Report is opened from another user's profile or user card:

```text
Target
→ automatically populated with reported user's name
```

The source earlier also requires the reported user's ID for backend handling.

Therefore UI and backend may use:

```text
Display:
User name

Internal identifier:
User ID
```

**Final field design: TBD**

---

# 29. Customer Support Center

Current source flow:

```text
My
→ Customer Support Center
```

The first layer is:

```text
FAQ / Frequently Asked Questions
```

Users can then create a support case.

---

# 30. Customer Support Ticket

When the user creates a support case:

```text
Create Contact Ticket
→ Open chat-style support interface
```

The source says the ticket uses:

```text
Chat message UI
```

This suggests the support case behaves as an asynchronous support conversation.

---

# 31. Customer Support Ticket Closure

Current source rules:

A support ticket can close when:

### Manual Closure

The user may close the ticket at any time.

### Automatic Closure

If there is no reply for more than:

```text
8 hours
```

the support ticket automatically closes.

---

# 32. Auto-Close Rule — Needs Clarification

The source does not define whose inactivity triggers the 8-hour timeout.

Possible interpretations include:

- No reply from user for 8 hours
- No reply from customer support for 8 hours
- No message from either side for 8 hours

It also does not define:

- Whether closed tickets can reopen
- Whether users can create a follow-up ticket
- Whether warnings are sent before closure
- Whether the timer pauses outside service hours

**Status:** REVIEW / TBD**

AI must not assume the intended interpretation.

---

# 33. Customer Support Case Types

Current known case types:

```text
REPORT
APPEAL
CUSTOMER_SUPPORT
```

Possible future case types:

- Payment
- Refund
- Account
- Technical problem
- Safety issue
- Verification
- Wallet
- Playpal service
- Other

These future categories are not currently approved.

**Status:** TBD**

---

# 34. Shared Case Data Model Concept

A future unified case model may conceptually contain:

```text
case_id
case_type
created_by_user_id
target_user_id
order_id
category
description
evidence
status
created_at
updated_at
closed_at
assigned_agent
messages
resolution
```

This is a documentation concept only.

**Final database schema: TBD**

---

# 35. Shared Case Status Concept

Possible common status flow:

```text
OPEN
→ UNDER_REVIEW / IN_PROGRESS
→ RESOLVED
→ CLOSED
```

Report and Appeal may need additional states.

**Final status model: TBD**

---

# 36. Official Platform Messages

The source uses official private messages for report feedback.

This suggests Find Playpal needs a trusted platform messaging identity.

Possible distinction:

```text
User-to-user message
vs
Official system / support message
```

Exact visual treatment:

**TBD**

---

# 37. Notification Rules

Current known notification behavior:

### Report

- Submission confirmation: Yes
- Valid report result: Yes
- Invalid / malicious report result: No response

### Block

- New message notification from blocked user: No

### Account Deletion

- Confirmation notification: Email or WhatsApp

### Customer Support

- Notification behavior not yet defined

**Status:** PARTIAL**

---

# 38. Trust & Safety Design Principles

Current source supports the following product principles:

## Principle 1 — Users Need Direct Safety Controls

Users should be able to:

- Report
- Block
- Seek official support

without leaving the platform.

## Principle 2 — Blocking Does Not Necessarily Remove Shared-Space Presence

Blocked users may still exist in shared community spaces, but their content is filtered.

## Principle 3 — Blocking Also Affects Transactions

Blocking is not only a messaging feature.

It also limits order interaction.

## Principle 4 — Support Cases Should Reuse UI

Report, Appeal, and Customer Support should share a consistent base case system.

## Principle 5 — Official Feedback Uses Platform Messaging

Important case updates may be delivered through official platform messages.

---

# 39. AI Design Rules

When Claude, ChatGPT, Gemini, or another AI assistant works on this module:

1. Do not merge Report, Block, Account Deletion, and Customer Support into one feature.
2. Reuse visual components where appropriate, but preserve different business logic.
3. Do not invent new report categories without approval.
4. Do not change the current report limits of `200 characters` and `5 screenshots` without approval.
5. Do not automatically hide or delete blocked-user messages; the current rule is mosaic / blur with manual reveal.
6. Do not send notifications for blocked-user messages.
7. Do not allow blocked users to place orders with the blocker or accept the blocker's Quick Order.
8. Do not silently resolve the blocked-profile wording conflict.
9. Do not treat account archive and permanent deletion as equivalent.
10. Do not invent the final account-deletion retention model.
11. Reuse the same base case UI for Report, Appeal, and Contact Support where possible.
12. Appeal context must automatically include the relevant order number.
13. Report context should automatically identify the target user.
14. Do not assume what the 8-hour support auto-close timer means; flag it for review.
15. Existing Figma and prototype screens remain references unless explicitly marked `APPROVED`.
16. Product Master and approved feature rules take priority over legacy UI.

---

# 40. Open Questions

The following remain unresolved:

## Report

- Final report taxonomy
- Report database storage
- Report SLA
- Moderator workflow
- Evidence requirements
- False-report penalties
- Appeals against moderation
- Privacy of reporter identity

## Block

- Unblock flow
- Follow relationship after blocking
- Moments visibility
- Comments / likes / mentions
- Gift behavior
- Existing order behavior
- Guild / Party entry restrictions
- Search visibility

## Account Deletion

- Archive vs permanent deletion
- Recovery rules
- Data retention
- Username reuse
- Wallet / balance handling
- Order history handling
- Public content handling
- Playpal service handling
- Regulatory / legal requirements

## Customer Support

- Support categories
- Support operating hours
- Agent assignment
- 8-hour timer definition
- Reopen rules
- Escalation rules
- Attachments
- SLA
- Satisfaction rating
- Appeal resolution process

All remain `TBD` until explicitly approved.

---

# 41. Current Document Status

**EARLY MASTER**

This document captures the current report, block, account deletion, appeal, and customer support logic from the existing source material.

It should be used as the working product reference for these systems until more detailed rules are provided.

Future approved decisions should update this master instead of being scattered across Figma, prototype files, chats, or AI-generated designs.
