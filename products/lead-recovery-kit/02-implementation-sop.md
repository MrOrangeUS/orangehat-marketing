# 02 — Implementation SOP (1-Hour Setup)

## Inputs you need
- Business name
- Booking link
- Service area
- Offer/entry point
- Response SLA (target: <5 minutes)

## Setup checklist
- [ ] Add scripts from 01 into your SMS/CRM tool
- [ ] Add 7-day sequence from 03
- [ ] Import old leads for reactivation from 04
- [ ] Add no-show flow from 05
- [ ] Assign owner for daily KPI check

## Basic automation logic
Trigger: inbound missed call
1. Send Script A immediately
2. Wait 15 minutes, if no reply send Script B
3. Wait 24 hours, if no reply send Script C
4. If reply at any point: tag `engaged` and send booking link

## SLA rules
- Response to engaged leads in <5 min
- Escalate `hot lead` tag to owner immediately
