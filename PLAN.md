# GOADED GOOSE — BUILD PLAN
Last updated: 2026-03-21

## CURRENT STATE
- DB: 605 cards, 8 sets (M15, MH1, TSR, THB, VOW, WAR, LRW, ECL)
- Site is live at https://bchilled.github.io/goaded-goose/
- Current build is rejected — needs full rebuild

## APPROVED REFERENCE STORES
- 401Games (store.401games.ca)
- Enter The Battlefield (enterthebattlefield.ca)
- Hairy Tarantula (hairyt.com)
- Northern Wartable (northernwartable.com)
- Face to Face Games (facetofacegames.com)

## WHAT THEY ALL DO THAT WE NEED TO COPY

### Header Structure:
```
[UTILITY BAR]: Logo | Search (wide) | Cart
[NAV BAR]:     MTG SINGLES ↓ | BROWSE BY SET ↓ | BROWSE BY FORMAT ↓ | CONTACT
```

### MTG SINGLES dropdown:
- All Cards
- In Stock
- Foil Only
- High Value (>$5)
- Budget Picks (<$1)

### BROWSE BY SET dropdown:
- Lorwyn Eclipsed
- Magic 2015
- Modern Horizons
- Time Spiral Remastered
- Theros Beyond Death
- Crimson Vow
- War of the Spark
- Lorwyn

### BROWSE BY FORMAT dropdown:
- Commander
- Modern
- Legacy
- Pioneer
- Standard
- Vintage
- Pauper

### Homepage (below header):
1. Full-width banner — rotating, shows new sets/featured items
2. JUST ADDED — horizontal scroll row of newest cards
3. HIGH VALUE — horizontal scroll row, sorted price desc
4. CARD OF THE DAY — full-width spotlight with pitch copy
5. BROWSE BY SET — tile grid
6. BUDGET PICKS — horizontal scroll, cheap cards that are actually useful

### Store/Browse page:
- URL: ?view=store
- LEFT sidebar (collapsible sections):
  - In Stock (toggle)
  - Set (checkboxes, scrollable)
  - Rarity (Mythic / Rare / Uncommon / Common)
  - Finish (Foil / Non-Foil)
  - Color (W/U/B/R/G/C pips — no extra circles)
  - Format (Commander/Modern/etc)
  - Price range (min/max inputs)
- RIGHT: card grid
  - 5 across desktop, 2-3 mobile
  - "In Stock" green badge top-left of card image
  - "Low Stock" yellow badge if qty <= 2
  - Card name, set code, rarity dot
  - Price in CAD
  - Add to Cart button (full width of tile)
  - Qty stepper (-/n/+) appears on hover or after add

### Card detail modal:
- Opens on card click, overlay
- Large card image left
- Name, type, set, collector #, condition right
- Stock count with urgency (1 left! / 3 available)
- Format legality chips
- PITCH COPY — researched, real, sells the card
- USE CASE tags
- Combos with (cards from DB that synergize)
- Price + qty selector + Add to Cart
- "More from this set" row

### Dev panel (hidden, D key or ?dev=1):
- Total cards: X
- Total sets: X
- Unique card names: X
- Total qty across all: X
- Estimated sell value: $X.XX CAD
- Cards out of stock (qty=0): X

### Footer:
- Col 1: Logo + tagline
- Col 2: INFO (Home, All Cards, Contact, Shipping Policy)
- Col 3: LEGAL (Terms, Privacy, Returns)
- Col 4: FOLLOW US (social icons placeholder)
- Bottom bar: payment icons | copyright
- NO LOCATION

## GOOSE LOGO
- Text-only wordmark for now: THE GOADED GOOSE
- Font should feel aggressive, Canadian, direct
- Try: Impact, Oswald ExtraBold, Anton, Black Han Sans
- Try different approaches each build until one is approved
- Do NOT use SVG blob goose — rejected
- Do NOT use fantasy/scripture fonts

## COLOR SCHEME — BREAK THE DEFAULT
- Previous: dark brown bg, orange accent, same every time — REJECTED
- Try: pure black + white + ONE accent (not orange)
- Options to explore:
  - Black + electric green (gaming/esports feel)
  - Black + ice blue (premium, clean)
  - Black + red (aggressive, fight)
  - Dark navy + gold (premium Canadian)
- Whatever is chosen: HIGH CONTRAST. White text minimum on dark bg.

## MANA SYMBOLS
- Import: https://cdn.jsdelivr.net/npm/mana-font@latest/css/mana.css
- Use: <i class="ms ms-w ms-cost"></i> etc
- The ms-cost class adds the standard MTG circle — this is correct and expected
- Do NOT add additional wrapper divs with background colors
- Override any extra wrapper styling that adds a second circle

## NEXT BUILD CHECKLIST
Before writing a single line of HTML:
[ ] DB saved to GitHub
[ ] RULES.md saved to GitHub
[ ] PLAN.md saved to GitHub  
[ ] Read RULES.md
[ ] Choose NEW color scheme (not orange-brown)
[ ] Decide on logo approach
[ ] Research Card of the Day (web search actual card)
[ ] Structure HTML with correct nav pattern
[ ] Test mana symbols render without double circles
[ ] Grep for "Aurora" "Ontario" before push
[ ] Grep for pricing info before push
[ ] Verify cards show in grid on load
