---
layout: '../../layouts/ArticleLayout.astro'
title: "Mahjong Hand Building: When to Chase, When to Fold, When to Pivot"
description: "A deep dive into Mahjong hand building — shanten, tile efficiency, choosing between hand types, when to hold vs meld, and the decision to fold vs continue."
date: "2025-05-25"
category: "strategy"
readTime: 10
faqs:
  - q: "What is shanten in Mahjong?"
    a: "Shanten is the number of tiles you need to reach tenpai — the state of being one tile from a complete winning hand. A hand at shanten 0 is in tenpai (one tile needed to win). A hand at shanten 1 needs two tiles to reach tenpai. The lower your shanten, the closer you are to winning. Good hand building means reducing your shanten efficiently while monitoring opponents."
  - q: "How do you choose which hand to build in Mahjong?"
    a: "Start from your deal: identify which hand type requires the fewest tile changes from your current tiles. Map partial sets (pairs, connected suit tiles) and count how many tiles you would need to complete a standard hand. Then assess: does the shanten count justify the hand's value? A low-shanten high-value hand is the ideal; if the closest hand is low-value and other players are ahead of you, it may still be worth chasing for a fast win."
  - q: "When should you meld (claim) a tile in Mahjong vs wait to draw it?"
    a: "Meld (claim from a discard) when: the tile is a high-value honour and you have two already, your hand is already open and you are close to winning, or you genuinely cannot afford to wait and draw naturally. Hold and draw when: your hand is concealed and the self-draw bonus plus concealment bonus makes winning more valuable, you do not want to reveal your hand direction, or the tile adds marginal value and you might draw it naturally within a few turns."
  - q: "What does it mean to pivot in Mahjong?"
    a: "Pivoting means changing your target hand mid-game when the original plan is no longer viable. A pivot occurs when the tiles you need for your primary hand are mostly gone (seen in discards or others' hands), when an opponent's actions signal your tiles are being hoarded elsewhere, or when a draw opens a faster or more valuable alternative hand. Good players pivot without sentimentality — the right hand to build is always the one closest to winning from your current tiles."
  - q: "How many tiles away from winning should you be aiming to be at the midgame?"
    a: "A rough benchmark: by the time the wall is half depleted (roughly 18–20 tiles drawn), you ideally want to be at shanten 1 or tenpai (shanten 0). At shanten 2 by midgame you are behind pace. At shanten 3 or higher with a half-depleted wall, the hand is in serious trouble unless you can pivot quickly. These are not rigid rules but useful reality checks for assessing your position."
---

Hand building in Mahjong is the art of transforming a random 13-tile deal into a complete winning hand before your opponents do. The decisions involved — which tiles to keep, which to discard, when to claim, when to pivot, when to abandon — are the heart of Mahjong strategy.

This guide goes deep on hand building mechanics.

## Shanten: Measuring Distance to a Win

**Shanten** measures how many tile changes (draws or claims) separate your hand from tenpai — the state of needing exactly one more tile to win.

- **Shanten 0** = tenpai (one tile from winning)
- **Shanten 1** = two tiles needed to reach tenpai
- **Shanten 2** = three tiles needed
- And so on

The goal of hand building is to reduce shanten as efficiently as possible while maintaining the option to win on a variety of tiles. A hand that reaches tenpai quickly but waits for one specific tile is less likely to win than a hand that reaches tenpai slightly slower but waits on four or eight different tiles.

### Calculating Shanten (Rough Method)

For a standard four-sets-one-pair hand (14 tiles):

Count the sets and partial sets in your hand:
- **Complete set** (pung or chow): counts as 1 toward your four
- **Partial set** (a pair, two adjacent suit tiles, two suit tiles with one gap — called a kanchan): counts as a partial
- **Isolated tile**: contributes nothing

The formula:  
`Shanten = (8 - 2×complete_sets - partial_sets)`

A hand with two complete sets and two partial sets: 8 - 4 - 2 = **shanten 2**.

This is an approximation — the exact calculation is more complex — but it gives you a practical sense of where you stand.

---

## The Hand Selection Decision

### What to Look for at the Deal

After examining your 13 tiles, your first question is: **which hand structure am I closest to?**

Look for:

**Existing sets and pairs:** Any three matching tiles is a complete pung. Any pair can either become a pung or serve as your winning pair. Any three consecutive suit tiles is a complete chow. Mark these as your anchors.

**Partial sets:** Two adjacent suit tiles (e.g., 4-5 Bamboo) or two matching tiles (a pair) are one tile from a complete set. These are high-value partials — the tile you need exists in four copies.

**Kanchan waits:** Two suit tiles with one gap (e.g., 4-6 Bamboo, waiting for a 5). One tile type completes it — four copies available.

**Honour tiles:** Wind and dragon tiles. A pair of a dragon or your seat/round wind is one tile from a valuable pung. A single guest wind with no pair is a likely first discard.

### Hand Type Assessment

Once you have found your partial sets, ask: if I develop these, what hand type do I end up with?

- **All simples** (no 1s, 9s, honours): fast to build, earns 1 faan
- **Mixed suit** (one dominant suit + honours): 3 faan, moderate difficulty
- **All pungs**: 3 faan, requires drawing or claiming many triplets
- **Pure suit**: 7 faan, hard — requires staying in one suit throughout
- **Standard mixed hand**: 0–2 faan, fast, low value

Choose the highest-value hand that is within 1–2 shanten of your natural reach from the deal. Do not build a pure suit hand if your deal has tiles scattered across all three suits — the pivot cost is too high.

---

## The Meld vs Hold Decision

When an opponent discards a tile you could claim, you face the **meld vs hold** decision. This is one of the most consequential recurring choices in Mahjong.

### Reasons to Meld

**The tile is a high-value honour.** If you have two dragons and an opponent discards the third, claiming the pung is almost always correct. Dragon pungs earn consistent faan with no suit commitment required.

**Your hand is already open.** If you have already melded sets, concealment is gone and its bonus is already lost. Claim tiles aggressively to close the hand faster.

**You are falling behind in pace.** If other players are clearly ahead of you in hand development, a meld that jumps your shanten significantly may be worth the concealment cost.

**The tile will not naturally come to you.** If three copies of a tile have been discarded and you hold two, the fourth copy is almost certainly not coming through the wall. This is the tile you must claim or never complete.

### Reasons to Hold

**Your hand is fully concealed and close to a valuable win.** A concealed self-draw win earns the self-draw bonus plus the concealment bonus (1 faan each in HK rules). A hand worth 3 faan by discard becomes 5 faan by concealed self-draw — a dramatic difference.

**Claiming reveals your direction.** Claiming a 6-Circles pung tells every opponent that you are building in Circles. They will be more careful about discarding Circles. Concealment is strategic information.

**You can likely draw the tile naturally.** If only one copy of the tile has been seen and you need it for a partial set, the probability of drawing it within a few turns is reasonable. Weigh the meld benefit against the concealment cost.

### The Chow Decision

Chows (sequence claims, available only to the next player) are the most-claimed and most-regretted claims. Before claiming a chow:

1. Does it meaningfully advance your hand? Not just "this forms a set" but "this set fits my hand direction and brings me 1 shanten closer"
2. Is the suit this chow commits you to your strongest suit?
3. Do you lose meaningful concealment value?

A chow that does not clearly improve your position is usually not worth claiming.

---

## When to Pivot

A **pivot** is abandoning your primary hand target and building toward a different hand from your current tiles.

### Pivot Triggers

**The tiles you need are mostly gone.** If two or three copies of a tile you need have been discarded, and you have drawn none of them, the remaining copy or copies are either in opponents' hands or wall — and the probability of drawing them is low. Find the next-closest hand from your current tiles.

**An opponent's claim pattern reveals they are hoarding your tiles.** If you need 5-Bamboo to complete a chow and your opponent to the right has claimed two Bamboo pungs, they may be hoarding Bamboo. Pivot away from that suit.

**A draw opens a better hand.** Sometimes a drawn tile does not fit your current plan but fits a different hand much better than where you are headed. Evaluate honestly: is the new hand closer to a win than the original?

### How to Pivot Without Losing Ground

The key to a clean pivot is **flexible anchors** — sets and partial sets in your hand that fit multiple hand types. A pung of dragons, for example, fits any hand type and is always worth keeping. A chow in a suit you are abandoning is not.

When pivoting, discard tiles from the old hand direction quickly. Holding transitional tiles because you "might still use them" slows the pivot and the new hand.

---

## When to Fold Entirely

Sometimes the right decision is not to build any hand at all — to discard safe tiles and prevent feeding another player's win.

### Fold Indicators

- Another player's discard pace has slowed sharply (they are likely in tenpai)
- A player has made multiple aggressive claims in a short window
- You are at shanten 2 or higher with the wall half depleted
- The potential payment of the threatening player's hand is large and your own hand is far from complete

### How to Fold

Fold by discarding exclusively from the **safe tile pool**:
1. Tiles the threatening player has already discarded (genbutsu)
2. Tiles where all four copies are visible
3. Honour tiles not in any player's apparent hand direction
4. Terminal tiles in suits the player has been discarding

See [Reading the Table](/strategy/reading-the-table) for the full safe-tile hierarchy.

---

Hand building is the intersection of probability, pattern recognition, and psychology. The mechanics are learnable; the skill comes from applying them across hundreds of hands until they become instinctive.

**[Play on Mahjo](https://www.mahjo.app)** — every hand is a hand-building problem. The more you play, the faster these decisions become automatic.
