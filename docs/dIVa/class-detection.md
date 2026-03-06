---
title: Class Detection
---

:::warning Legacy
As of dIVa v2.5.0, Path of Exile 2 uses Overwolf game events for class detection and no longer uses manual class selection.\
This document describes the legacy manual class selection flow and is kept for reference.
:::

### How It Works

- **Initial Login Detection:** When you log into Path of Exile 2, dIVa detects your character but cannot automatically determine the class from game events.
- **Class Selection Dialog:**

<span className="center">

![Class Selection Dialog](/images/dIVa/characters/class-selection.png)

</span>

A prompt will appear asking you to select your character's class from the available options:

- Huntress
- Mercenary
- Monk
- Ranger
- Sorceress
- Warrior
- Witch

**Character Association:** Once you select the class, dIVa associates it with your character name for future reference.

**Automatic Recognition:** The next time you log in with the same character, dIVa will automatically recognize the class without prompting.

### Video Overview

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/2zOOGquNuEo?si=adnj0Z7u4YRF0Eg5"
  title="dIVa and PoE2"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

<a id="existing"></a>

## Approaches for Existing Characters new to dIVa

1. **Create a New dIVa Character & Merge**
   - Create a new dIVa Character
   - Start Offline leveling to correct Milestone; meaning, if your Character is Level 23, you'll need to click _Next Milestone_ to set it to 20.
   - With Leveling active, log into Path of Exile 2 and select your corresponding Character.
   - dIVa will detect your Character given Name matches, and prompt for Merge Decision. Click Merge.
   - dIVa will instant level your Character's data and begin tracking.
2. **First-Time Detection**
   - When you first launch dIVa with an existing Path of Exile 2 character, you'll be prompted to select their class just once.
   - _Milestones in Leveling_: dIVa will track your character's progress from this point, meaning if your Character is level 23 as an example, the first Milestone in leveling data will be _Milestone 20_, not Milestone 1 (Start)

:::caution Important Note regarding Milestones
A _Milestone_ is every 10 levels.

_Start_, or Milestone 1, begins at level 1 to 9.

Milestone 10 begins at level 10 to 19.

Milestone 20 begins at level 20 to 29.
:::
