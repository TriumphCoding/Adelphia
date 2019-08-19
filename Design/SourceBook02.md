# Chapter 2 - Game Stats
Before creating a character, it is important to understand each stat and their effect. This understanding will help to determine how you want your character’s personality reflected numerically. 

## Base Stats
Your Base Stats determine the basic characteristics that you will be interacting with. These are used for **Stat Tests** and **Aspect Tests**, and will be combined with your Equipment to determine your **Calculated Stats**. The Calculated Stats are what actually govern combat.

### Hit Points (HP)
HP determines how much damage your character can take before falling unconscious on the battle field. Every time an opponent successfully lands a hit on you, any damage you take is tracked by reducing your HP. Upon hitting "0" current HP, you will be removed from the current combat, and may even be dead depending on the situation that caused you to drop to 0.

### Strength (STR)
Strength determines how physically strong your character is. The more strength you have, the more damage each attack you land deals. Traditionally, Strength is opposed by your opponent's **Constitution**

### Intelligence (INT)
Intelligence determines how book-smart your character is. The more Intelligence you have, the more damage each tome you use deals, and the effectiveness of some staffs increase. Traditionally, Intelligence is opposed by your opponent's **Wisdom**.
> *When dealing with mental stat-based roll-play, you should never feel forced to perform in a particular way solely because of the value of your stats. Having a low intelligence might mean you have difficulty applying your raw intelligence to particular tasks, but it does not have to mean your character is stupid.*

### Dexterity (DEX)
Dexterity determines the quality of your technique with your equipped weapon. More Dexterity increases both the **Accuracy** and **Critical** chance of your attacks. Traditionally, Dexterity is opposed you your opponent's **Speed**.

### Speed (SPD)
Speed determines how fast you are in direct combat. More speed increases both your **Dodge** chance, and your chance to **Follow Through Attack**.

### Luck (LUK)
Luck is a cosmic force that generally affects everything you might do. Luck gives a small boon to your **Accuracy**, a small boost to you **Dodge**, and is a significant amount of your **Evade**. Luck also determines your chance of critically passing Aspect Tests.

### Constitution (CON)
Constitution determines how much of a physical attack you can just shrug off. Constitution contributes to your **Defence**

### Wisdom (WIS)
Wisdom determines how much of a Magical Damage you can shrug off. Wisdom contributes to your **Resistance**

### Movement (MOV)
Movement determines how many spaces your character can move on the battlefield. Unlike the rest of your stats, movement doesn't increase by leveling up.

## Calculated Stats
**Calculated Stats** are the statistics used for combat. These represent how much damage you can deal, how accurate you are, and how well you avoid damage. These stats are combined with your weapon stats, so be sure to include your chosen weapon in their calculations.

### Might (MGT)
Might is the Damage your attacks will deal. The weapon you've equipped will tell you how to calculate this value. Might is opposed by your opponents **Defense** or **Resistance**, again based on the weapon's characteristics.

### Accuracy (ACC)
Accuracy dictates your chance to hit your opponent. It is calculated by adding twice your **Dexterity** and half your **Luck** to your weapon’s Accuracy. Accuracy is opposed by your opponent's **Dodge**. Remember in all cases to round down.

### Critical (CRIT)
Critical dictates the chance that you will strike a vital spot on your opponent, which inflicts Three times the **Damage** of a regular attack. It is calculated by adding half your **Dexterity** to your weapon’s Critical. Critical is opposed by your opponent's **Evade**. Remember in all cases to round down.

### Dodge (DGE)
Dodge represents your ability to evade enemy attacks. It is calculated by adding twice your **Speed** to your **Luck** and your weapon's Dodge.

### Avoid (AVO)
Avoid represents your ability to evade enemy critical strikes. It is calculated by adding your **Luck** to your weapon's Avoid.

### Defense (DEF)
Defense represents your ability to shrug off physical attacks. It is calculated by adding your **Constitution** to your weapon's Defense.

### Resistance (RES)
Resistance represents your ability to shrug off magical attacks. It is calculated by adding your **Wisdom** to your weapon's Resistance.

### Summary
| Stat       | Abbrev | Calculation                          | Opposes        |
| ---        | ---    | ---                                  | ---            |
| Might      | MGT    | (*STR* or *MAG*) + *W.MGT*           | *DEF* or *RES* |
| Accuracy   | ACC    | (2 x *DEX*) + (½  x *LUK*) + *W.ACC* | *DGE*          |
| Critical   | CRT    | (½  x *DEX*) + *W.CRT*               | *AVO*          |
| Dodge      | DGE    | (2 x *SPD*) + *LUK* + *W.DGE*        | *ACC*          |
| Avoid      | AVO    | *LUK* + *W.AVO*                      | *CRT*          |
| Defense    | DEF    | *CON* + *W.DEF*                      | *MGT*          |
| Resistance | RES    | *WIS* + *W.RES*                      | *MGT*          |