# kyra-rider — AGENTS.md

This is the **Rider** app. The user of this app is Aanya — a woman commuting
in Bengaluru. Build only features that a *rider* does on her own phone.

## Belongs here
- Sign-up / verification flows (phone, OTP, Aadhaar, live selfie)
- Pickup/dropoff entry, fare display, ride request
- Driver-approaching tracking, in-ride map, ride OTP display
- Live trip sharing, SOS button (rider-side)
- Rating, trip history, receipts, profile

## Does NOT belong here
- Anything a driver does → build in `../kyra-driver/`
- Anything Kyra ops staff does → build in `../kyra-admin/`

## Branches
Five teammate branches exist off `main`: `feat/shivansh`, `feat/divyashri`,
`feat/latisha`, `feat/dev`, `feat/avni`. Stay on whichever is currently
checked out unless asked otherwise.

## Workspace context
For workspace-wide routing rules and strategy docs, see `../AGENTS.md`
and the parent `/Kyra/` folder.
