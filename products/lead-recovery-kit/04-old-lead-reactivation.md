# 04 — Old-Lead Reactivation Campaign

## Segment
Leads older than 30 days with no booking.

## SMS #1
Hey {{first_name}} — this is {{business_name}}. We’re reopening a few spots for {{service_type}} this week. Want details?

## SMS #2 (48h later)
Still interested in {{service_type}}? If yes, reply YES and I’ll send times.

## SMS #3 (final)
Last check-in from {{business_name}}. Want us to keep your file active? Reply 1 for yes.

## Re-engagement handling
- YES/1 => send booking link + tag `reactivated`
- No reply => tag `inactive`
