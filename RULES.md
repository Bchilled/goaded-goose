# THE GOADED GOOSE — PROJECT RULES
Last updated: 2026-03-21

## CARDINAL RULES — NEVER BREAK THESE

1. NEVER show location (city, province, address) anywhere on the site
2. NEVER guess card data — look it up via Scryfall API or web search
3. NEVER start gateway or spin up costly services to test
4. NEVER modify DB without explicit instruction
5. NEVER push to GitHub without saving DB first
6. ALWAYS read existing file before editing it
7. ALWAYS provide full file content for copy-paste (Brent copy-pastes only)
8. ALWAYS backup DB to git before any site rebuild
9. NEVER progress without understanding the requirement
10. ASK before building when requirements are unclear
11. STFU and listen — do not explain yourself mid-task unprompted
12. NEVER guess MTG card mechanics, legality, combos — research first
13. NEVER use same visual schema every time — break defaults
14. NEVER expose internal pricing strategy (markup %, floor price) to customers
15. NEVER add stat blocks, CAD LIVE PRICING, or useless metrics to customer-facing pages

## BRAND

- Store name: THE GOADED GOOSE
- "Goaded" = forced to fight. Angry Canadian goose. Does not mean sacred/mystical.
- Vibe: aggressive, direct, street. NOT ornate. NOT scripture fonts. NOT fantasy.
- No location ever shown
- CA badge is fine — just "CA" or "Canada"
- Logo: keep trying new goose approaches until Brent approves one
- DO NOT reuse same SVG goose style that has already been rejected

## WHAT BRENT ACTUALLY WANTS

### Site Structure (based on reference stores: 401Games, ETB, Hairy Tarantula, Northern Wartable, Face to Face)

**Row 1 — Utility bar:**
- Logo left | Wide search bar center | Cart right
- Compact, no wasted space

**Row 2 — Category nav:**
- MTG SINGLES ↓ | BROWSE BY SET ↓ | BROWSE BY FORMAT ↓ | CONTACT
- Dropdowns with sub-items

**Below nav — Homepage sections:**
- Full-width rotating banner (new sets, featured cards — NOT the store name)
- New Inventory row (last added cards, horizontal scroll)
- High Value Cards row
- Card of the Day spotlight (curated, explained, combo suggestions)
- Browse by Set tiles
- Budget Picks row

**Store/browse page:**
- LEFT sidebar: In Stock toggle, Set checkboxes, Rarity, Finish/Foil, Price range
- RIGHT: card grid 5 across, "In Stock" badge, name, set, price, Add To Cart

**Footer:**
- 3-4 column links (Info, Legal, Contact, Categories)
- Payment icons
- Social icons
- NO location

### Card of the Day rules:
- Pick card we have multiple copies of
- Research actual combos via web search
- Write real pitch copy — sell it
- Show format legality accurately
- Show related cards from DB that synergize
- Note if banned anywhere (affects demand)
- Highlight high value commons/uncommons

### Dev stats panel (HIDDEN from customers):
- Total cards in DB
- Total sets
- Unique cards
- Total retail value if everything sold
- Trigger: press D key or ?dev=1 URL param

## MANA SYMBOLS
- Use mana-font CSS correctly
- ms-cost class adds colored circles — that IS the MTG standard
- Do NOT wrap in extra div circles or colored backgrounds beyond the font's own styling
- Override: add `ms-shadow` class, remove extra wrappers

## TECH STACK
- GitHub Pages: https://bchilled.github.io/goated-goose/
- Repo: https://github.com/Bchilled/goated-goose
- DB: /home/claude/db.js (605 cards) + /home/claude/database.json
- Inventory files: /home/claude/inventory/[SET].js
- Catalog: /home/claude/catalog/ (full Scryfall per-set files)
- Site: /home/claude/index.html
- Git repo clone: /home/claude/repo/

## DB SAVE SEQUENCE (always do this order):
1. cp /home/claude/db.js /home/claude/repo/
2. cp /home/claude/database.json /home/claude/repo/
3. cp inventory files
4. git add, commit, push
5. THEN modify index.html
6. cp index.html to repo, push

## PRICING (NEVER show to customers)
- CAD rate: 1.38
- Markup: 1.10 (10%)
- Min price: $0.42 CAD
- Formula: max((foil?fusd:usd) * 1.38 * 1.10, 0.42)
- HST: 13%
- Shipping: Letter $1.99 | Tracked $6.99 | Xpresspost $14.99

## COUPONS
- GOOSE10 = 10% off
- LAUNCH20 = 20% off
- FREESHIP = free shipping
- FLAT5 = $5 flat off

## SET CODES
M15 = Magic 2015
MH1 = Modern Horizons
MH2 = Modern Horizons 2
TSR = Time Spiral Remastered
THB = Theros Beyond Death
VOW = Innistrad: Crimson Vow
WAR = War of the Spark
LRW = Lorwyn
ECL = Lorwyn Eclipsed
TMT = Teenage Mutant Ninja Turtles Commander
TLA = Avatar: The Last Airbender

## MTG KNOWLEDGE I NEED TO RESEARCH (do not guess)
- Card mechanics, oracle text, rulings
- Format bans/restrictions
- Combo synergies
- Price history / demand reasons
- Tribe interactions

## WHAT HAS BEEN REJECTED
- SVG goose (flat blob style) — rejected multiple times
- Giant orange hero banner with store name — rejected
- Dark grey on black text — unreadable, rejected
- Mana symbols in extra colored circles — rejected
- "AURORA, ONTARIO" or any location — rejected every time
- Explaining what "Goaded" means on the site — rejected
- Stat block with "CAD LIVE PRICING" — rejected
- Format/Mythic/Foil/In Stock as navbar items — rejected
- Same dark-brown-orange color scheme every build — rejected
- Horizontal-only layout, everything in one row — rejected
- Deck Builder feature — rejected
- Script/scripture/fantasy fonts — rejected

## SETS BRENT ACTUALLY OWNS (CONFIRMED)
- ECL — Lorwyn Eclipsed (250 cards)
- M15 — Magic 2015 (4 cards)
- MH1 — Modern Horizons (6 cards)
- THB — Theros Beyond Death (90 cards)
- TSR — Time Spiral Remastered (8 cards)
- VOW — Innistrad: Crimson Vow (36 cards)
- WAR — War of the Spark (99 cards)
- TMT — Teenage Mutant Ninja Turtles (being added)
- TLA — Avatar: The Last Airbender (being added)

## SETS BRENT DOES NOT OWN — NEVER ADD
- LRW — Lorwyn — I FABRICATED THIS. Never given by Brent. Never add again.

## SITE FEEDBACK — ALL PENDING FIXES (2026-03-21 afternoon)

### LAYOUT
- Desktop looks like mobile — infinite vertical stack, wastes horizontal space
- Everything needs proper desktop grid — sections side by side, full width usage
- Dead center space in banner needs card carousel there, not empty dark void
- New Inventory row should be IN the banner area filling that dead space
- Card rows = horizontal scroll/drag showing 4-5 cards, not full grid dump
- Modules need to use full screen width properly

### NAV / HEADER
- No goose logo still — keep trying new approaches every build
- Contact should be in FOOTER not next to Cart in header
- Menus don't work — dropdowns broken
- Contact is in footer already, remove from header

### CARDS / STORE
- Colored rarity circles = bad, remove
- FOIL badge barely visible — needs to be loud and obvious, it's a selling point
- Foil price ALWAYS higher than non-foil regardless of market: max(fusd*CAD*MK, usd*CAD*MK*1.3, MIN)
- Format legality tags don't work
- High Value row shows too many cards with no scroll — needs horizontal drag/scroll
- Card of the Day is buried at bottom — move near top, must be card WE ACTUALLY OWN
- Budget section needs real sell copy — WHY is the card good, not just cheap

### SETS
- Browse by Set still shows Lorwyn (LRW) — must be removed, we don't own it
- LRW was fabricated — NEVER show it

### COLORS
- Teal accent = approved, keep it
- Teal + orange clash — pick ONE accent, teal wins
- Goose colors: white body, black head, orange beak/feet
- Brand palette: black bg, white text, teal primary, orange secondary only where it makes sense
- Stop using dark grey on black — unreadable

### GOOSE
- No goose yet — every build try a different approach
- SVG blob style = rejected permanently
- Fantasy/scripture fonts = rejected
- Goose vibe = aggressive, Canadian, direct

## APPROVED COLOR PALETTE — ASIMOV
Confirmed by Brent 2026-03-21

--white:    #F2F2F2
--lgrey:    #E8E8E8  
--orange:   #F26419  (primary accent)
--dgrey:    #454545
--black:    #111111  (background)

Use: black bg, dark grey panels, orange accents/CTAs, light grey text, white for headings
NO teal. NO brown. NO dark red. This palette only.

## VISUAL FEEDBACK FROM SCREENSHOTS — 2026-03-21

### LAYOUT
- Site looks built for mobile on desktop — everything stacked in one column, infinite scroll — REJECTED
- Full desktop width must be used — sections side by side, not stacked
- Dead center of page is empty black space — needs content there (card carousel/new inventory)
- "New Inventory" card row should be IN the banner area filling dead space
- Browse By Set tiles should end at 3 visible, scroll/drag sideways for more
- All card rows should be horizontal drag/scroll — not full grid dumps
- Card of the Day is buried at bottom — nobody sees it — move to top

### CARDS / GRID
- Rarity colored circles — REMOVE. Tiny dot or text label only
- FOIL badge is barely visible — make it loud, prominent, it's a selling point
- Foil pricing: ALWAYS higher than non-foil regardless of market. Formula: max(fusd*CAD*MK, usd*CAD*MK*1.3, MIN)
- High Value row shows too many cards at once with no scroll
- Budget section just shows cheap cards with no sell copy — needs to explain WHY each card is good
- Menus don't work — dropdowns broken
- Legality tags don't work

### NAVIGATION
- Nav items that were wrong: Format, Mythic, Foil, In Stock — these are FILTERS not nav items
- Correct nav: MTG SINGLES ↓ | BROWSE BY SET ↓ | FORMAT ↓ | CONTACT
- All dropdowns must actually work

### CARD OF THE DAY
- Must be a card we ACTUALLY OWN (multiple copies)
- Must show WHY the card is good — research it, sell it
- Must be near the TOP of the page
- Currently shows LRW cards we don't own — WRONG

### WHAT SELLS A CARD
- Not just "it's cheap" — explain the mechanic
- Show what decks it goes in
- Show what it combos with
- Show if it's a budget staple in a format
- Research before writing — never guess

### BROWSE BY SET
- Shows "Lorwyn 112 listings" — we don't have Lorwyn — that's LRW which was fabricated
- Must only show sets we actually have

### COLORS — CONFIRMED ASIMOV PALETTE
--white:  #F2F2F2
--lgrey:  #E8E8E8
--orange: #F26419  ← PRIMARY ACCENT
--dgrey:  #454545
--black:  #111111  ← BACKGROUND

### TECH
- Plain HTML looks dated — "went from 1997 to 2001"
- Needs to feel 2026 — modern, premium
- Consider React or at minimum modern CSS grid/flex properly used
