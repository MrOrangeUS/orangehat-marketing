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
- [ ] Import contacts using matching `/imports` CSV template
- [ ] Assign owner for daily KPI check

## CRM import templates (recommended)
- HubSpot: `imports/crm-import-hubspot-contacts.csv`
- Salesforce: `imports/crm-import-salesforce-leads.csv`
- Pipedrive: `imports/crm-import-pipedrive-persons.csv`
- Zoho: `imports/crm-import-zoho-leads.csv`
- GoHighLevel: `imports/crm-import-gohighlevel-contacts.csv`
- ActiveCampaign: `imports/crm-import-activecampaign-contacts.csv`
- Keap: `imports/crm-import-keap-contacts.csv`
- Generic: `imports/crm-import-generic-leads.csv`

Import tip: run a 1-contact test import first, verify field mapping, then import full list.

## Basic automation logic
Trigger: inbound missed call
1. Send Script A immediately
2. Wait 15 minutes, if no reply send Script B
3. Wait 24 hours, if no reply send Script C
4. If reply at any point: tag `engaged` and send booking link

## SLA rules
- Response to engaged leads in <5 min
- Escalate `hot lead` tag to owner immediately

## Need Help?
- AI Support Agent: https://chatgpt.com/g/g-69a723f56cb48191a30a20d7cb9a70a0-orangehat-lead-recovery-kit-support-agent
- Email Support: support@getorangehat.ai

