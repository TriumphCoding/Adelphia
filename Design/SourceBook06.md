# Chapter 6 - Combat

Sometimes, fights break out, and you need to be prepared to deal with this. Combat is exciting, dangerous, and deadly. Do try not to die.

Combat seems complicated, but as long as you can break it down into all of it's steps, you will find that there is nothing that is individually that difficult

## Weapon Cycle

Some weapons are naturally more effective when brought to bear against someone using the wrong weapon type. This is represented by the following relationship:

- **Red** weapons beat **Green** Weapons
- **Green** weapons beat **Blue** weapons
- **Blue** weapons beat **Red** weapons

If your weapon beats your opponent's, increase your **Accuracy** by 10 per weapon level, and increase your **Might** by 1 per weapon level. If your weapon loses to your opponent, instead decrease your **Might** and **Accuracy** by your weapon level.

For example, if your accuracy is 87 while wielding an iron sword, and you are going to be striking a mage wielding a Bronze Thunder Spell, you would instead attack with 117 accuracy. If the mage had 91 accuracy, their riposte would instead by at 71 accuracy.

Outside of this cycle, weapons don't change. So a Red weapon fighting a Grey weapon don't change their accuracy. Same for a Blue weapon fighting a Blue weapon.

## Strike a target

In order to actually perform a strike, find your **Accuracy** and your opponent's **Dodge**. Subtract them to get your **Hit Chance**. Also find your **Critical** and your opponents **Avoid** and take the difference to get your **Crit Chance**. Last, roll your **d%**,

If you roll below your **Hit Chance**, you successfully strike your opponent. Take your **Might**, and subtract off your opponent's **Defense**. This is how much damage you manage to inflict. This does mean that you might deal 0 damage against a sufficiently armored foe. If you also managed to roll under your **Crit Chance**, you critically strike and deal 3 times the damage you would inflict with your standard attack. Again, 3 times 0 is zero.

However, most opponent's aren't going to simply stand there and take it. they will try to **Riposte**

## Engaging a Foe

When you engage with a foe to attack them, you will run through the following 4 strikes:

1. The attacker **Attacks**
1. The defender **Ripostes**
1. The attacker **Follow Through Attacks**
1. The defender **Follow Through Ripostes**

The person declaring the attack goes first, and attempts to strike the defender. Once that strike is resolved, if the defender is still alive they will attempt to strike back in a **Riposte**. This strike is calculated the exact same way as a regular strike, but some skills or runes might only apply to **attacks** or **ripostes**.

Then, once both the attacker and the defender have resolved their attacks and ripostes, the attackers **follow through attacks** trigger. These are any secondary attacks granted by your speed or other abilities. Last, the defender resolves any of their **follow through ripostes**.

In all engagements, a **follow through** is granted if your **SPD** is 4 greater than your opponent's **SPD**. So an attacker with 4 Speed and a defender with 1 speed will trigger no **follow throughs**. A defender with 8 **SPD** and an attacker with 4 **SPD** will be granted a **Follow through riposte**. When that same defender declares an attack on their turn, they will be granted a **follow through attack**.

## Range

All of the above assumes that everyone's weapons can actually reach. While we'll go over the grid more fully in a short bit, all weapons have a range. You can only engage with a foe at at a range supported by your weapon, and if you are engaged, you can only riposte if your weapon supports the range your enemy has chosen to engage at.

## Movement

Full Combat takes place on a square gridded combat map. Every character has a movement stat that dictates how far they can move on a turn. Traditionally, you can move as far as you want each turn, but once you perform an action your turn is over, and any unused movement is wasted. You spend 1 movement to enter a new square.

Some squares might be fortified terrain. These cost additional movement to enter, but may provide additional defensive stats.

| Terrain Type | Movement | Defense | Dodge | HP Recovery  |
| ---          | ---      | ---     | ---   | ---          |
| Basic        | 1        | 0       | 0     | 0            |
| Light        | 2        | 1       | 10    | 0            |
| Medium       | 2        | 2       | 20    | 0            |
| Heavy        | 3        | 3       | 30    | 10           |

## Actions in Combat

asdf

## Combat Phases

Combat takes place in phases. Once combat has been decided upon, all participants divide into the combat sides. Under normal conditions, all players will be on one side of the combat, and all enemies will be on the other. During the **Hero Phase**, all playes take turns in whatever order they feel is the most adventurous. Once everyone has spent their movement and taken their desired action