# THE GOADED GOOSE — NEW SESSION HANDOFF
Last updated: 2026-03-21

---

## FIRST THING: READ THIS ENTIRE FILE BEFORE DOING ANYTHING

---

## WHO YOU ARE WORKING WITH
Brent. He runs a Canadian MTG singles store called The Goaded Goose.
He communicates informally. He does not want back-and-forth — listen, understand, then act.
He copy-pastes only — never give partial files or find/replace instructions.
He is frustrated because the previous Claude made repeated errors, guessed constantly, and rebuilt the same mistakes over and over.

---

## THE STORE
Name: THE GOADED GOOSE
URL (once live): https://bchilled.github.io/goaded-goose/
Repo: https://github.com/Bchilled/goaded-goose
GitHub user: Bchilled
Need a new PAT to push (classic, repo scope) — create at github.com/settings/tokens

---

## DATABASE — CONFIRMED FACTS ONLY
- 771 card entries across 9 sets
- Files: /home/claude/db.js (injected into site) and /home/claude/database.json
- Inventory files: /home/claude/inventory/[SET].js

Confirmed sets Brent actually gave you:
  ECL = Lorwyn Eclipsed       — 250 cards
  M15 = Magic 2015            — 4 cards
  MH1 = Modern Horizons       — 6 cards
  THB = Theros Beyond Death   — 90 cards
  TSR = Time Spiral Remastered — 8 cards
  VOW = Innistrad: Crimson Vow — 36 cards
  WAR = War of the Spark      — 99 cards
  TMT = Teenage Mutant Ninja Turtles — 62 cards (look up exact set type on Scryfall, do not guess)
  TLA = Avatar: The Last Airbender   — 216 cards (look up exact set type on Scryfall, do not guess)

Sets NOT in inventory — do not add without Brent giving you the cards:
  LRW (Lorwyn) was added by previous Claude without Brent's input. It was removed.
  Any other set — only add when Brent explicitly gives you the voice intake.

Scryfall bulk data: /home/claude/scryfall_default.json (505MB — do not delete)
Lookup tables: /home/claude/tmt_lookup.json, /home/claude/tla_lookup.json

---

## PRICING — NEVER SHOW TO CUSTOMERS
CAD rate: 1.38 | Markup: 1.10 | Min floor: $0.42 CAD
Non-foil: max(usd * 1.38 * 1.10, 0.42)
Foil: always higher than non-foil regardless of market price
HST: 13%
Shipping: Letter $1.99 | Tracked $6.99 | Xpresspost $14.99
Coupons: GOOSE10=10% | LAUNCH20=20% | FREESHIP=free ship | FLAT5=$5 off

---

## GIT PUSH SEQUENCE
1. Save DB first: cp db.js database.json to repo, commit, push
2. Then modify index.html
3. Inject db.js into index.html
4. cp index.html to repo, commit, push

---

## WHAT BRENT HAS CONFIRMED HE WANTS

### Site structure (modeled on: 401Games, ETB, Hairy Tarantula, Northern Wartable, Face to Face)
- Compact top bar: Logo | Search (wide, center) | Cart
- Category nav below: working dropdowns only (MTG SINGLES | BROWSE BY SET | FORMAT | CONTACT)
- Homepage: not a single column — use the full horizontal width
- Card rows: 3-5 cards visible, drag/scroll horizontally — NOT dumped in a full grid
- Card of the Day: near the top, must be a card Brent actually owns multiple copies of, researched pitch copy
- No wasted dead space in the center of the page
- No location shown anywhere, ever

### Cards / Store
- Rarity must be shown clearly — NOT just a tiny colored dot
- FOIL badge must be large, loud, unique — diagonal corner or something that stands out
- Format legality must work and display correctly
- Store: left sidebar filters + right card grid

### Never do
- Show location (city, province, address)
- Guess card data — use Scryfall
- Build in a single column layout
- Use dark grey on black (unreadable)
- Add sets Brent hasn't given you

### Logo / Goose
- No SVG blob goose — rejected
- Brent wants a proper goose illustration as the logo
- The goose is the brand — he is "goaded" (forced to fight), angry Canadian goose
- Keep trying new approaches until Brent approves one
- Do not use fantasy or script fonts

### Colors
- Brent confirmed the Asimov palette swatches but was not happy with how the site looked in dark mode
- Light/dark mode toggle is implemented
- Do not lock in any palette until Brent approves the actual rendered result
- High contrast is required — dark on light or light on dark, not grey on grey

### Tech
- Current site is plain HTML — Brent thinks it looks dated
- He wants it to feel modern and premium
- React or better CSS architecture should be considered
- Best coding practices — build a system, not one-off hacks

---

## WHAT IS CURRENTLY BROKEN (based on Brent's direct feedback)
- Single column layout everywhere — wastes horizontal space — biggest complaint
- Dead empty space in hero/banner center
- Card rows show too many cards at once with no scroll
- Menus / dropdowns may not work
- Format legality tags broken
- Goose logo does not exist
- Site feels dated / not 2026
- Budget section has no sell copy — just lists cheap cards
- Card of the Day pitch copy needs to be researched and real
- Foil badge not prominent enough
- Rarity display unclear

---

## VOICE INTAKE RULES (for when Brent adds more cards)
Numbers = collector numbers
"foil" or "oil" after a number = foil version
"s" prefix on a number (s149) = showcase variant — still same card
Noise words to ignore: ash, that's, dodge, royal, just, well, at, or, true, too
Duplicate number appearance = qty > 1
"extra two/three" = add 2/3 more copies of last card
"M" on a card = check Scryfall — could be mythic indicator OR could be something else, do not assume
Numbers outside valid range for the set = flag for confirmation, do not skip silently

---

## SETS BRENT STILL NEEDS TO ADD (mentioned but not yet given)
FIN = Final Fantasy | DFT = Aetherdrift | TDM = Tarkir: Dragonstorm
DSK = Duskmourn | BLB = Bloomburrow | EOE = Edge of Eternities
SPM = Marvel's Spider-Man | SOS = Secrets of Strixhaven | MSH = Marvel Super Heroes

---

## HOW TO WORK WITH BRENT
- Listen first. Build second.
- Do not explain yourself while doing a task
- Do not guess — ask if unclear
- Do not present rules as confirmed if Brent hasn't confirmed them
- Do not carry over errors as facts
- When he says save and backup — do it immediately, fully, verify it worked
- When he sends screenshots — look at every one before responding
- He is building a real store to sell real cards — treat the database as sacred
