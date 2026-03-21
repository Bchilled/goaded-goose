# GOADED GOOSE — HANDOFF DOCUMENT
## For the next Claude session to pick up exactly where we left off
Last updated: 2026-03-21

---

## LIVE SITE
https://bchilled.github.io/goated-goose/
Repo: https://github.com/Bchilled/goated-goose (branch: main)
PAT: [PAT — check Brent's tokens page] ← BRENT MUST REVOKE AT github.com/settings/tokens

---

## CURRENT DB STATE
- 771 card entries across 9 sets
- ECL: 250 | M15: 4 | MH1: 6 | THB: 90 | TSR: 8 | VOW: 36 | WAR: 99 | TMT: 62 | TLA: 216
- 665 unique card names
- 2,528 total physical copies
- $1,025.11 CAD total retail value
- LRW (Lorwyn) was FABRICATED — never in inventory — NEVER add it back

## FILES
/home/claude/db.js              — 771-card JS array, injected into site HTML
/home/claude/database.json      — master JSON backup
/home/claude/inventory/ECL.js   — 250 Lorwyn Eclipsed cards
/home/claude/inventory/LRW.js   — EMPTY (fabricated set, wiped)
/home/claude/inventory/M15.js   — 4 Magic 2015 cards
/home/claude/inventory/MH1.js   — 6 Modern Horizons cards
/home/claude/inventory/THB.js   — 90 Theros Beyond Death cards
/home/claude/inventory/TSR.js   — 8 Time Spiral Remastered cards
/home/claude/inventory/TMT.js   — 62 TMNT cards (just added)
/home/claude/inventory/TLA.js   — 216 Avatar: Last Airbender (just added)
/home/claude/inventory/VOW.js   — 36 Crimson Vow cards
/home/claude/inventory/WAR.js   — 99 War of the Spark cards
/home/claude/index.html         — full site (DB injected)
/home/claude/repo/              — git clone of GitHub repo
/home/claude/scryfall_default.json — 505MB Scryfall bulk data (DO NOT DELETE)
/home/claude/tmt_lookup.json    — TMT card lookup by collector number
/home/claude/tla_lookup.json    — TLA card lookup by collector number
/home/claude/RULES.md           — all project rules
/home/claude/PLAN.md            — build plan
/home/claude/parsed_counts.json — last voice intake parse results

---

## GIT PUSH SEQUENCE (ALWAYS in this order)
1. cp /home/claude/db.js /home/claude/repo/
2. cp /home/claude/database.json /home/claude/repo/
3. cp inventory files to repo/inventory/
4. git add -A && git commit -m "message" && git push origin main
5. THEN modify index.html
6. python inject_db.py (or inline replace)
7. cp index.html to repo, push again

---

## BRAND / DESIGN
Store name: THE GOADED GOOSE (not "Goated" — "Goaded" = forced to fight)
No location EVER shown anywhere

Color palette (CONFIRMED — Asimov):
  --orange: #F26419  (primary accent)
  --black:  #111111  (dark bg)
  --dgrey:  #454545
  --lgrey:  #E8E8E8
  --white:  #F2F2F2

Font: Barlow Condensed (headings) + Barlow (body)
Dark/Light mode toggle: 🌙/☀️ button in top right — ALREADY IMPLEMENTED

---

## WHAT'S WRONG WITH THE SITE RIGHT NOW (needs fixing in next session)
1. Hero tagline "Real cards. Real prices. Every card explained — not just listed. Ships Canada-wide." — Brent hates it, needs replacing
2. Hero layout — left text barely visible, dead empty space in center on some screens
3. Card of the Day (Spell Snare) — image may not render, layout grid broken
4. Budget section — shows cheap cards but no sell copy explaining WHY they're good
5. "NEW INVENTORY" section shows ECL commons at $0.42 only — boring, needs curation
6. Browse by Set tiles need set artwork/imagery not just text boxes
7. Contact/About section needs work
8. Site feels dated — "went from 1997 to 2001" per Brent
9. Store page sidebar filters work but look basic

## WHAT WORKS
- Dark/light mode toggle ✓
- Card rows (horizontal drag/scroll) ✓
- FOIL badge (loud gradient) ✓
- IN STOCK / LOW STOCK / SOLD badges ✓
- All nav dropdowns work ✓
- Cart with HST, shipping, coupons ✓
- Card modal with format legality ✓
- Store sidebar filters (set, rarity, finish, format, price, in stock) ✓
- Dev panel (Ctrl+D or ?dev=1) ✓
- No LRW ✓
- No location ✓
- 771 cards loading ✓

---

## PRICING (NEVER show customers)
CAD = 1.38, Markup = 1.10, Min = $0.42 CAD
Foil formula: max(fusd*1.38*1.10, usd*1.38*1.10*1.3, 0.42)
Non-foil: max(usd*1.38*1.10, 0.42)
HST: 13%
Shipping: Letter $1.99 | Tracked $6.99 | Xpresspost $14.99

## COUPONS
GOOSE10=10% | LAUNCH20=20% | FREESHIP=free ship | FLAT5=$5 off

---

## VOICE INTAKE RULES
- Numbers = collector numbers
- "foil" / "oil" after number = foil version
- "s" prefix (s149) = showcase variant
- Noise words to ignore: ash, that's, dodge, royal, just, well, at, or, true, too, m (=mythic label on card not set name)
- Duplicate number = qty > 1
- "extra two/three" = +2/+3 copies of last card

## SETS TO ADD (Brent still needs to intake)
- More standard sets (Brent was adding before voice gave out)
- FIN = Final Fantasy (595 cards)
- DFT = Aetherdrift
- TDM = Tarkir: Dragonstorm
- DSK = Duskmourn
- BLB = Bloomburrow
- EOE = Edge of Eternities
- SPM = Marvel's Spider-Man
- SOS = Secrets of Strixhaven
- MSH = Marvel Super Heroes

---

## CARDINAL RULES (read RULES.md for full list)
1. NEVER show location
2. NEVER guess card data — use Scryfall
3. NEVER add LRW (Lorwyn) — fabricated set
4. ALWAYS save DB to GitHub before touching index.html
5. ALWAYS read existing file before editing
6. NEVER use same color scheme every time
7. Research cards before writing sell copy
8. TMT = TMNT (expansion, not commander)
9. TLA = Avatar: The Last Airbender (expansion)
10. "M" on a card = mythic rarity label, not a set code
