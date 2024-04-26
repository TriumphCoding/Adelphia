const StatList = ["hp","str","int","dex","spd","luk","con","wis"];

const SkillList = {
    "Weapon Mastery 2": {
      "Name": "Weapon Mastery 2",
      "MaxLevel": "1",
      "Description": "Your Weild your weapon as an extension of your body",
      "Effect": "Increase your Might when weilding the chosen weapon by 10% of your level.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "1",
      "riposte": "1",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "WEAPON",
      "Acc": "0",
      "Mgt": "lv0.1",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Elegant Riposte": {
      "Name": "Elegant Riposte",
      "MaxLevel": "10",
      "Description": "Outwit and outplay.",
      "Effect": "Increase a basic stat by 10% of your level when riposting",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "1",
      "riposte": "1",
      "hp": "0",
      "bonus": "lv0.1",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "STAT",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Pass": {
      "Name": "Pass",
      "MaxLevel": "3",
      "Description": "You effortlessly move through the battlefield, and people don't pose a barrier",
      "Effect": "You can move through spaces occupied by the enemy, although you can't end your turn there. You can also ignore the effects of Provoke if you Pass level is greater than or equal to their provoke level.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Vantage": {
      "Name": "Vantage",
      "MaxLevel": "1",
      "Description": "You control when you engage with your opponent. You strike on your terms",
      "Effect": "You have a DEX% chance to trigger your Riposte before your opponet attacks.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "1",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": "Vantage"
    },
    "Weapon Mastery 3": {
      "Name": "Weapon Mastery 3",
      "MaxLevel": "1",
      "Description": "Your Weild your weapon as an extension of yourself",
      "Effect": "Increase your Critical chance when weilding the chosen weapon by 50% of your level.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "1",
      "riposte": "1",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "WEAPON",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "lv0.5",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Hearty": {
      "Name": "Hearty",
      "MaxLevel": "10",
      "Description": "You take pain and punishment well, and can resist even the mightiest of blows",
      "Effect": "Increase Total HP by 20% of your Level",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "1",
      "riposte": "1",
      "hp": "lv0.2",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Cautious": {
      "Name": "Cautious",
      "MaxLevel": "1",
      "Description": "You hold yourself back, until you really need to engage.",
      "Effect": "If combat initiates and you are over 50% health, Neither you nor your opponent can Follow Through Attack or Follow Through Riposte",
      "hp-min": "0.5",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": "Cautious"
    },
    "Rapturous Brutality": {
      "Name": "Rapturous Brutality",
      "MaxLevel": "10",
      "Description": "If they die before you, you win.",
      "Effect": "Increase Total STR, INT, SPD by 10% of your level, but decrease Total DEX, WIS, CON by the same amount",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "1",
      "riposte": "1",
      "hp": "0",
      "bonus": "0",
      "str": "lv0.1",
      "int": "lv0.1",
      "dex": "lv-0.1",
      "spd": "lv0.1",
      "luk": "0",
      "con": "lv-0.1",
      "wis": "lv-0.1",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Superiority": {
      "Name": "Superiority",
      "MaxLevel": "1",
      "Description": "Use your Physicality to prevent your opponent from ever finding a superior position",
      "Effect": "You have a STR% chance to prevent your opponent's Riposte and Follow Through Riposte.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": "Superiority"
    },
    "Practiced": {
      "Name": "Practiced",
      "MaxLevel": "10",
      "Description": "Through long hours of determined training, actions come naturally.",
      "Effect": "Abilities that have a SKILL% chance of activating have a 5% better chance of activating. This includes Great Skills",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0.5",
      "CombatEffect": ""
    },
    "Patience": {
      "Name": "Patience",
      "MaxLevel": "1",
      "Description": "You wait to let your opponent finish before taking your turn.",
      "Effect": "You have a DEX% chance to delay your riposte until after your opponents follow through attack, if they have one.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": "Patience"
    },
    "Forsight": {
      "Name": "Forsight",
      "MaxLevel": "1",
      "Description": "You can plan your moves to prevent presenting an opening",
      "Effect": "You have an INT% chance to prevent your opponent's Riposte and Follow Through Riposte.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": "Forsight"
    },
    "Push": {
      "Name": "Push",
      "MaxLevel": "1",
      "Description": "Drive your opponent back, giving you some breathing room",
      "Effect": "After declaring an attack, you can move your opponent one square await from you. They must be able to stand in that space, but you can ignore difficult terrain as part of that movement.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Grit": {
      "Name": "Grit",
      "MaxLevel": "1",
      "Description": "You resist punishment, and hold your feet where others fall",
      "Effect": "In combat, if your opponent attacks multiple times in a row, reduce the damage of the second attack onward by 70%",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": "Grit"
    },
    "Lunge": {
      "Name": "Lunge",
      "MaxLevel": "1",
      "Description": "Strike from your maximum range, and draw yourself back to leave space.",
      "Effect": "After declaring an attack, you may move one square back. You must be able to stand in that space, but you can ignore difficult terrain as part of that movement. This does not effect the space remaining to be spent if you also have the Ride skill.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Escutcheon": {
      "Name": "Escutcheon",
      "MaxLevel": "1",
      "Description": "Properly shield yourself from your opponent, and grealy decrease their potency",
      "Effect": "You have a DEX% change to reduce your opponent's Magical Damage by half.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": "Escutcheon"
    },
    "Janken Defense": {
      "Name": "Janken Defense",
      "MaxLevel": "10",
      "Description": "You have really studied on how to mitigate your disadvantages",
      "Effect": "Decrease your weapon level by your skill level for Losing weapon triangle effects.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "1",
      "riposte": "1",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "sk1",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Resolute Bastion": {
      "Name": "Resolute Bastion",
      "MaxLevel": "10",
      "Description": "You are made of Iron.",
      "Effect": "Increase Total DEX, WIS, CON by 10% of your level, but decrease Total STR, INT, SPD by the same amount",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "1",
      "riposte": "1",
      "hp": "0",
      "bonus": "0",
      "str": "lv-0.1",
      "int": "lv-0.1",
      "dex": "lv0.1",
      "spd": "lv-0.1",
      "luk": "0",
      "con": "lv0.1",
      "wis": "lv0.1",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Colorblind Fighter": {
      "Name": "Colorblind Fighter",
      "MaxLevel": "10",
      "Description": "You find advantage where no one else can.",
      "Effect": "Gain weapon triange advantage equal to your skill level in neutral matchups",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "1",
      "riposte": "1",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "sk1",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Desperation": {
      "Name": "Desperation",
      "MaxLevel": "1",
      "Description": "Sometimes, you need to hit them hard and fast, or else.",
      "Effect": "You have a SPD% chance of having your \"Follow Through Attacks\" trigger before your enemy can Counter Attack or Follow Through Counter. You must have Follow Through Attacks for the ability to trigger.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "1",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": "Desperation"
    },
    "Cornered Strike": {
      "Name": "Cornered Strike",
      "MaxLevel": "10",
      "Description": "When backed into a corner, you bring out your best",
      "Effect": "Increase a basic stat 10% of your level if you are at less than half health",
      "hp-min": "0",
      "hp-max": "0.5",
      "self-damage": "0",
      "attack": "1",
      "riposte": "1",
      "hp": "0",
      "bonus": "lv0.1",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "STAT",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Practiced Aggression": {
      "Name": "Practiced Aggression",
      "MaxLevel": "10",
      "Description": "If you've gotta swing, you may as well make it a good one.",
      "Effect": "Increase a basic stat by 10% of your level when attacking",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "1",
      "riposte": "0",
      "hp": "0",
      "bonus": "lv0.1",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "STAT",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Janken Mastery": {
      "Name": "Janken Mastery",
      "MaxLevel": "10",
      "Description": "You leverage your advantages if battle more than most are able",
      "Effect": "Increase your weapon level by your skill level for winning weapon triangle effects.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "1",
      "riposte": "1",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "sk1",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Controlled Strike": {
      "Name": "Controlled Strike",
      "MaxLevel": "10",
      "Description": "When you are in control of the situation, no one can stop you",
      "Effect": "Increase a basic stat by 10% of your level if you are at more than 70% HP",
      "hp-min": "0.7",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "1",
      "riposte": "1",
      "hp": "0",
      "bonus": "lv0.1",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "STAT",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Provoke": {
      "Name": "Provoke",
      "MaxLevel": "3",
      "Description": "You control the field around you, protecting your allies by making yourself a target",
      "Effect": "Leaving Tiles within range 1/1/1-2 of your character cost enemies an additional 1/2/2 points of movement. Up to 3 total points can be invested into this skill. Enemies can ignore this movement penalty if they are moving to attack you.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Drag": {
      "Name": "Drag",
      "MaxLevel": "1",
      "Description": "As you retreat, you pull your opponent into the void, leaving them exposed.",
      "Effect": "Requires Lunge. As you move away with your lunge action, you can move your opponent into the space you are leaving. They must be able to exist there normally, if that situation arises. this movement can ignore difficult terrain",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Fury": {
      "Name": "Fury",
      "MaxLevel": "10",
      "Description": "Channel aggression into power, at a cost.",
      "Effect": "Increase Total Stats by 10% of your level, but take 10% of your level in damage after every exchange",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "lv0.1",
      "attack": "1",
      "riposte": "1",
      "hp": "0",
      "bonus": "0",
      "str": "lv0.1",
      "int": "lv0.1",
      "dex": "lv0.1",
      "spd": "lv0.1",
      "luk": "lv0.1",
      "con": "lv0.1",
      "wis": "lv0.1",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Swap": {
      "Name": "Swap",
      "MaxLevel": "1",
      "Description": "Through the motion of combat, you maneuver your opponent behind you",
      "Effect": "Requires either Push or Lunge. After declaring an attack, you may swap spaces with your opponent. You can ignore difficult terrain for this movement. This does not effect your movement remaining to be spent if you also have the ride skill.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Weapon Mastery 1": {
      "Name": "Weapon Mastery 1",
      "MaxLevel": "1",
      "Description": "Your Weild your weapon as an extension of your arm",
      "Effect": "Increase your Accuracy when weilding the chosen weapon by your level.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "1",
      "riposte": "1",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "WEAPON",
      "Acc": "lv1",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Bold": {
      "Name": "Bold",
      "MaxLevel": "1",
      "Description": "You stay engaged longer than your opponent expects you too, catching them off guard",
      "Effect": "You have a DEX% chance to trigger an additional Follow Through Attack, Regardless of Speed Difference.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "1",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": "Bold"
    },
    "Advance": {
      "Name": "Advance",
      "MaxLevel": "1",
      "Description": "In a fluid motion, you claim your opponent's Space",
      "Effect": "Requires Push. When you push, you may enter the space you are driving your opponent away from. You can ignore difficult terrain as part of that movement. This does not effect your movement remaining to be spent if you also have the ride skill.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Smite": {
      "Name": "Smite",
      "MaxLevel": "1",
      "Description": "When you come to push, you shove.",
      "Effect": "Requires Push. When you push, you may push your opponent back an additional number of squares equal to 5% of your level",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": ""
    },
    "Buckler": {
      "Name": "Buckler",
      "MaxLevel": "1",
      "Description": "Properly shield yourself from your opponent, and grealy decrease their potency",
      "Effect": "You have a DEX% change to reduce your opponent's Physical Damage by half.",
      "hp-min": "0",
      "hp-max": "1",
      "self-damage": "0",
      "attack": "0",
      "riposte": "0",
      "hp": "0",
      "bonus": "0",
      "str": "0",
      "int": "0",
      "dex": "0",
      "spd": "0",
      "luk": "0",
      "con": "0",
      "wis": "0",
      "JanAtk": "0",
      "JanDef": "0",
      "JanNut": "0",
      "Choice": "-",
      "Acc": "0",
      "Mgt": "0",
      "Crt": "0",
      "SkillBonus": "0",
      "CombatEffect": "Buckler"
    }
  }

const BackgroundGrowth = {
    "Orc": {
    "Background": "Orc",
    "HP": "5",
    "STR": "6",
    "INT": "5",
    "DEX": "4",
    "SPD": "5",
    "LUK": "5",
    "CON": "5",
    "WIS": "5"
    },
    "Human": {
    "Background": "Human",
    "HP": "5",
    "STR": "5",
    "INT": "5",
    "DEX": "5",
    "SPD": "5",
    "LUK": "5",
    "CON": "5",
    "WIS": "5"
    },
    "Carnivore": {
    "Background": "Carnivore",
    "HP": "5",
    "STR": "7",
    "INT": "3",
    "DEX": "5",
    "SPD": "6",
    "LUK": "5",
    "CON": "5",
    "WIS": "4"
    },
    "Elf": {
    "Background": "Elf",
    "HP": "4",
    "STR": "5",
    "INT": "5",
    "DEX": "7",
    "SPD": "6",
    "LUK": "5",
    "CON": "3",
    "WIS": "5"
    },
    "Cyborg": {
    "Background": "Cyborg",
    "HP": "5",
    "STR": "6",
    "INT": "5",
    "DEX": "4",
    "SPD": "5",
    "LUK": "5",
    "CON": "5",
    "WIS": "5"
    },
    "Goblin": {
    "Background": "Goblin",
    "HP": "4",
    "STR": "5",
    "INT": "5",
    "DEX": "6",
    "SPD": "7",
    "LUK": "5",
    "CON": "4",
    "WIS": "4"
    },
    "Dwarf": {
    "Background": "Dwarf",
    "HP": "6",
    "STR": "5",
    "INT": "3",
    "DEX": "5",
    "SPD": "4",
    "LUK": "5",
    "CON": "6",
    "WIS": "6"
    },
    "Herbivore": {
    "Background": "Herbivore",
    "HP": "5",
    "STR": "5",
    "INT": "5",
    "DEX": "5",
    "SPD": "7",
    "LUK": "5",
    "CON": "4",
    "WIS": "4"
    },
    "Dragon": {
    "Background": "Dragon",
    "HP": "5",
    "STR": "5",
    "INT": "7",
    "DEX": "5",
    "SPD": "3",
    "LUK": "4",
    "CON": "5",
    "WIS": "6"
    }
};

const CreatureTypeStat = {
    "Orc": {
    "CreatureType": "Orc",
    "HP": "10",
    "STR": "4",
    "INT": "2",
    "DEX": "1",
    "SPD": "2",
    "LUK": "0",
    "CON": "2",
    "WIS": "2",
    "MOV": "5"
    },
    "Human": {
    "CreatureType": "Human",
    "HP": "10",
    "STR": "2",
    "INT": "2",
    "DEX": "2",
    "SPD": "2",
    "LUK": "2",
    "CON": "2",
    "WIS": "2",
    "MOV": "5"
    },
    "Carnivore": {
    "CreatureType": "Carnivore",
    "HP": "10",
    "STR": "4",
    "INT": "3",
    "DEX": "2",
    "SPD": "3",
    "LUK": "2",
    "CON": "2",
    "WIS": "0",
    "MOV": "5"
    },
    "Elf": {
    "CreatureType": "Elf",
    "HP": "7",
    "STR": "2",
    "INT": "2",
    "DEX": "3",
    "SPD": "4",
    "LUK": "2",
    "CON": "0",
    "WIS": "2",
    "MOV": "5"
    },
    "Cyborg": {
    "CreatureType": "Cyborg",
    "HP": "10",
    "STR": "4",
    "INT": "0",
    "DEX": "2",
    "SPD": "2",
    "LUK": "2",
    "CON": "3",
    "WIS": "1",
    "MOV": "5"
    },
    "Goblin": {
    "CreatureType": "Goblin",
    "HP": "7",
    "STR": "2",
    "INT": "2",
    "DEX": "3",
    "SPD": "4",
    "LUK": "2",
    "CON": "1",
    "WIS": "1",
    "MOV": "5"
    },
    "Dwarf": {
    "CreatureType": "Dwarf",
    "HP": "13",
    "STR": "2",
    "INT": "0",
    "DEX": "2",
    "SPD": "1",
    "LUK": "2",
    "CON": "3",
    "WIS": "3",
    "MOV": "5"
    },
    "Herbivore": {
    "CreatureType": "Herbivore",
    "HP": "10",
    "STR": "2",
    "INT": "2",
    "DEX": "2",
    "SPD": "3",
    "LUK": "2",
    "CON": "0",
    "WIS": "1",
    "MOV": "6"
    },
    "Dragon": {
    "CreatureType": "Dragon",
    "HP": "10",
    "STR": "2",
    "INT": "4",
    "DEX": "2",
    "SPD": "1",
    "LUK": "2",
    "CON": "2",
    "WIS": "3",
    "MOV": "4"
    }
}

const ClassSkills = {
    "Runed": {
    "Name": "Runed",
    "Cost": "2",
    "Description": "You are trained in the use of Protective Runes and are otherwise magically shielded",
    "Effect": "Gain +4 WIS | +3 HP | -1 MOV | +1 HP Growth | +2 WIS Growth",
    "hp": "3",
    "str": "0",
    "int": "0",
    "dex": "0",
    "skl": "0",
    "spd": "0",
    "luk": "0",
    "con": "0",
    "wis": "4",
    "mov": "-1",
    "hpg": "1",
    "strg": "0",
    "intg": "0",
    "dexg": "0",
    "sklg": "0",
    "spdg": "0",
    "lukg": "0",
    "cong": "0",
    "wisg": "2"
    },
    "Armored": {
    "Name": "Armored",
    "Cost": "2",
    "Description": "You are trained in the use of Heavy Armor and are a mobile battlefield wall",
    "Effect": "Gain +4 CON | +3 HP | -1 MOV | +1 HP Growth | +2 CON Growth",
    "hp": "3",
    "str": "0",
    "int": "0",
    "dex": "0",
    "skl": "0",
    "spd": "0",
    "luk": "0",
    "con": "4",
    "wis": "0",
    "mov": "-1",
    "hpg": "1",
    "strg": "0",
    "intg": "0",
    "dexg": "0",
    "sklg": "0",
    "spdg": "0",
    "lukg": "0",
    "cong": "2",
    "wisg": "0"
    },
    "Sing": {
    "Name": "Sing",
    "Cost": "3",
    "Description": "You can inspire your allies around you to action",
    "Effect": "You can spend your action performing for one of your allies that has already taken their action at Range 1. They recover all spent movement and may take another turn as though it was the start of their turn again. (They can take their second turn any time during this allied phase).",
    "hp": "0",
    "str": "0",
    "int": "0",
    "dex": "0",
    "skl": "0",
    "spd": "0",
    "luk": "0",
    "con": "0",
    "wis": "0",
    "mov": "0",
    "hpg": "0",
    "strg": "0",
    "intg": "0",
    "dexg": "0",
    "sklg": "0",
    "spdg": "0",
    "lukg": "0",
    "cong": "0",
    "wisg": "0"
    },
    "Weapon Skill": {
    "Name": "Weapon Skill",
    "Cost": "2",
    "Description": "You have trained in more than a single form of self defense",
    "Effect": "You can equip an additional weapon type. You can purchase this background as many times as you would like.",
    "hp": "0",
    "str": "0",
    "int": "0",
    "dex": "0",
    "skl": "0",
    "spd": "0",
    "luk": "0",
    "con": "0",
    "wis": "0",
    "mov": "0",
    "hpg": "0",
    "strg": "0",
    "intg": "0",
    "dexg": "0",
    "sklg": "0",
    "spdg": "0",
    "lukg": "0",
    "cong": "0",
    "wisg": "0"
    },
    "Nobility": {
    "Name": "Nobility",
    "Cost": "4",
    "Description": "Your family line has a history and you have the potential to grow into that history",
    "Effect": "Get +1 to all your Growth Rates.",
    "hp": "0",
    "str": "0",
    "int": "0",
    "dex": "0",
    "skl": "0",
    "spd": "0",
    "luk": "0",
    "con": "0",
    "wis": "0",
    "mov": "0",
    "hpg": "1",
    "strg": "1",
    "intg": "1",
    "dexg": "1",
    "sklg": "1",
    "spdg": "1",
    "lukg": "1",
    "cong": "1",
    "wisg": "1"
    },
    "Fly": {
    "Name": "Fly",
    "Cost": "4",
    "Description": "You are trained in moving through the air and can move in ways a grounded person cannot",
    "Effect": "You ignore all terrain movement costs and can fly over most impassable terrain. Please work with your GM about what constitutes flight indoors.",
    "hp": "0",
    "str": "0",
    "int": "0",
    "dex": "0",
    "skl": "0",
    "spd": "0",
    "luk": "0",
    "con": "0",
    "wis": "0",
    "mov": "0",
    "hpg": "0",
    "strg": "0",
    "intg": "0",
    "dexg": "0",
    "sklg": "0",
    "spdg": "0",
    "lukg": "0",
    "cong": "0",
    "wisg": "0"
    },
    "Combat Skill": {
    "Name": "Combat Skill",
    "Cost": "3",
    "Description": "You have trained in a specialized form of combat",
    "Effect": "Gain 1 Combat Skill Point. See the section on combat skills for what you can spend this on. You can purchase this background as many times as you would like.",
    "hp": "0",
    "str": "0",
    "int": "0",
    "dex": "0",
    "skl": "0",
    "spd": "0",
    "luk": "0",
    "con": "0",
    "wis": "0",
    "mov": "0",
    "hpg": "0",
    "strg": "0",
    "intg": "0",
    "dexg": "0",
    "sklg": "0",
    "spdg": "0",
    "lukg": "0",
    "cong": "0",
    "wisg": "0"
    },
    "Ride": {
    "Name": "Ride",
    "Cost": "4",
    "Description": "You are trained in riding a horse and can put your enhanced mobility to good use in the field",
    "Effect": "You can spend unspent movement after performing an action each turn.",
    "hp": "0",
    "str": "0",
    "int": "0",
    "dex": "0",
    "skl": "0",
    "spd": "0",
    "luk": "0",
    "con": "0",
    "wis": "0",
    "mov": "0",
    "hpg": "0",
    "strg": "0",
    "intg": "0",
    "dexg": "0",
    "sklg": "0",
    "spdg": "0",
    "lukg": "0",
    "cong": "0",
    "wisg": "0"
    }
};

on("change:repeating_CharacterLevel", function() {
    SetLevel();
});

on("sheet:opened", function() {
    SetLevel();
});

on(`clicked:repeating_CharacterLevel`, function(eventInfo) {
    const rowid = eventInfo.sourceAttribute.split('_')[2];
    switch(eventInfo.htmlAttributes.name) {
        case `act_DeleteLevel`:                
            removeRepeatingRow(`repeating_CharacterLevel_${rowid}`);
            break;
        case `act_RerollLevel`:
            RollLevel(rowid);
            break;
        case `act_LevelUp`:
            const newrowid = generateRowID();
            RollLevel(newrowid);
            break;
        default:
            console.log(`Button not recognized`);
    }
    SetLevel();
});

function getRandomInt(max) {
    return (Math.floor(Math.random() * (max + 1)));
};

function d10() {
    return getRandomInt(9);
};

function d10d10() {
    return getRandomInt(9) + getRandomInt(9);
};

function d100() {
    return getRandomInt(99);
};

function RollLevel(rowid) {
    const statlist = ["hp","str","dex","int","spd","luk","con","wis"];
    var vGrowthQty = 0;
    getAttrs([
        "hp_growth_base","hp_growth_bg","hp_growth_skill",
        "str_growth_base","str_growth_bg","str_growth_skill",
        "dex_growth_base","dex_growth_bg","dex_growth_skill",
        "int_growth_base","int_growth_bg","int_growth_skill",
        "spd_growth_base","spd_growth_bg","spd_growth_skill",
        "luk_growth_base","luk_growth_bg","luk_growth_skill",
        "con_growth_base","con_growth_bg","con_growth_skill",
        "wis_growth_base","wis_growth_bg","wis_growth_skill",
        "NoBadLevels"
    ], function(growthrate) {
        var vGrowth = {
            "hp": parseInt(growthrate.hp_growth_base) + parseInt(growthrate.hp_growth_bg) + parseInt(growthrate.hp_growth_skill),
            "str": parseInt(growthrate.str_growth_base) + parseInt(growthrate.str_growth_bg) + parseInt(growthrate.str_growth_skill),
            "dex": parseInt(growthrate.dex_growth_base) + parseInt(growthrate.dex_growth_bg) + parseInt(growthrate.dex_growth_skill),
            "int": parseInt(growthrate.int_growth_base) + parseInt(growthrate.int_growth_bg) + parseInt(growthrate.int_growth_skill),
            "spd": parseInt(growthrate.spd_growth_base) + parseInt(growthrate.spd_growth_bg) + parseInt(growthrate.spd_growth_skill),
            "luk": parseInt(growthrate.luk_growth_base) + parseInt(growthrate.luk_growth_bg) + parseInt(growthrate.luk_growth_skill),
            "con": parseInt(growthrate.con_growth_base) + parseInt(growthrate.con_growth_bg) + parseInt(growthrate.con_growth_skill),
            "wis": parseInt(growthrate.wis_growth_base) + parseInt(growthrate.wis_growth_bg) + parseInt(growthrate.wis_growth_skill)
        };
        var vGrowthRoll = {
            "hp": 0,
            "str": 0,
            "dex": 0,
            "int": 0,
            "spd": 0,
            "luk": 0,
            "con": 0,
            "wis": 0
        };
        for (let i = 0; i < 1000; i++) {
            vGrowthRoll.hp = d10d10();
            vGrowthRoll.str = d10d10();
            vGrowthRoll.dex = d10d10();
            vGrowthRoll.int = d10d10();
            vGrowthRoll.spd = d10d10();
            vGrowthRoll.luk = d10d10();
            vGrowthRoll.con = d10d10();
            vGrowthRoll.wis = d10d10();
            vGrowthQty = 0;
            if (vGrowthRoll.hp <= vGrowth.hp ) { vGrowthQty = vGrowthQty + 1; }
            if (vGrowthRoll.str <= vGrowth.str ) { vGrowthQty = vGrowthQty + 1; }
            if (vGrowthRoll.dex <= vGrowth.dex ) { vGrowthQty = vGrowthQty + 1; }
            if (vGrowthRoll.int <= vGrowth.int ) { vGrowthQty = vGrowthQty + 1; }
            if (vGrowthRoll.spd <= vGrowth.spd ) { vGrowthQty = vGrowthQty + 1; }
            if (vGrowthRoll.luk <= vGrowth.luk ) { vGrowthQty = vGrowthQty + 1; }
            if (vGrowthRoll.con <= vGrowth.con ) { vGrowthQty = vGrowthQty + 1; }
            if (vGrowthRoll.wis <= vGrowth.wis ) { vGrowthQty = vGrowthQty + 1; }
            if ( (!growthrate.NoBadLevels) || (vGrowthQty >= 3) ) {
                break;
            }
        }
        setAttrs({
            [`repeating_CharacterLevel_${rowid}_hp_growth`]: vGrowthRoll.hp,
            [`repeating_CharacterLevel_${rowid}_str_growth`]: vGrowthRoll.str,
            [`repeating_CharacterLevel_${rowid}_dex_growth`]: vGrowthRoll.dex,
            [`repeating_CharacterLevel_${rowid}_int_growth`]: vGrowthRoll.int,
            [`repeating_CharacterLevel_${rowid}_spd_growth`]: vGrowthRoll.spd,
            [`repeating_CharacterLevel_${rowid}_luk_growth`]: vGrowthRoll.luk,
            [`repeating_CharacterLevel_${rowid}_con_growth`]: vGrowthRoll.con,
            [`repeating_CharacterLevel_${rowid}_wis_growth`]: vGrowthRoll.wis
        });
    });
};

function SetLevel() {
    getSectionIDs("repeating_CharacterLevel", function(idarray) {
        setAttrs({
            character_level: idarray.length
        });
        if (idarray.length === 0) {
            const newrowid = generateRowID();
            RollLevel(newrowid);
            setAttrs({
                character_level: 1
            });
        }
    });
};

function CalculateStats() {
    var EarnedGrowths = {
        "hp":0,
        "str":0,
        "int":0,
        "dex":0,
        "spd":0,
        "luk":0,
        "con":0,
        "wis":0
    };
    var GrowthWiff = {
        "hp":0,
        "str":0,
        "int":0,
        "dex":0,
        "spd":0,
        "luk":0,
        "con":0,
        "wis":0
    };
    getSectionIDs("repeating_CharacterLevel", function(idarray) {
        StatList.forEach(stat => {
            idarray.forEach(rowid => {
                var LevelRoll = `repeating_CharacterLevel_${rowid}_${stat}_growth`;
                var GrowthEntryBase = `${stat}_growth_base`;
                var GrowthEntryBackground = `${stat}_growth_bg`;
                var GrowthEntrySkill = `${stat}_growth_skill`;
                getAttrs([`${LevelRoll}`, `${GrowthEntryBase}`, `${GrowthEntryBackground}`, `${GrowthEntrySkill}`, "NoBadStats", "character_level", "StaticLevels"], function(values) {
                    var Growth = parseInt(values[GrowthEntryBase]) + parseInt(values[GrowthEntryBackground]) + parseInt(values[GrowthEntrySkill]);
                    var Roll = parseInt(values[LevelRoll]);
                    if (Roll <= Growth + GrowthWiff[stat]) {
                        EarnedGrowths[stat] = EarnedGrowths[stat] + 1;
                    }
                    if (Roll > Growth + GrowthWiff[stat] && parseInt(values.NoBadStats) == 1) {
                        GrowthWiff[stat] = GrowthWiff[stat] + 1;
                    } else {
                        GrowthWiff[stat] = 0;
                    }
                    if (parseInt(values.StaticLevels) == 1) {
                        EarnedGrowths[stat] = Math.floor(parseInt(values.character_level) * Growth / 18.0);
                    }
                    setAttrs({
                        [`${stat}_stat_growth`]: EarnedGrowths[stat]
                    });
                });
            });
        });
    });
};

function CalculateSkillStats() {
    var StatChanges = {
        "hp":0,
        "str":0,
        "int":0,
        "dex":0,
        "spd":0,
        "luk":0,
        "con":0,
        "wis":0,
        "mov":0,
        "cost":0
    };
    var GrowthChanges = {
        "hp":0,
        "str":0,
        "int":0,
        "dex":0,
        "spd":0,
        "luk":0,
        "con":0,
        "wis":0
    };
    getSectionIDs("repeating_ClassSkillsList", function(idarray) {
        StatList.forEach(stat => {
            idarray.forEach(rowid => {
                let SkillName = `repeating_ClassSkillsList_${rowid}_ClassSkill`;
                getAttrs([SkillName], function(values) {
                    let SkillNameValue = values[SkillName];
                    StatChanges[stat] = parseInt(StatChanges[stat]) + parseInt(ClassSkills[SkillNameValue][stat]);
                    GrowthChanges[stat] = parseInt(GrowthChanges[stat]) + parseInt(ClassSkills[SkillNameValue][`${stat}g`]);
                    setAttrs({
                        [`${stat}_stat_skill`]: StatChanges[stat],
                        [`${stat}_growth_skill`]: GrowthChanges[stat]
                    });
                });
            });
        });
        idarray.forEach(rowid => {
            let SkillName = `repeating_ClassSkillsList_${rowid}_ClassSkill`;
            let SkillCost = `repeating_ClassSkillsList_${rowid}_ClassSkillCost`;
            getAttrs([SkillName], function(values) {
                let SkillNameValue = values[SkillName];
                StatChanges["mov"] = parseInt(StatChanges["mov"]) + parseInt(ClassSkills[SkillNameValue]["mov"]);
                StatChanges["cost"] = parseInt(StatChanges["cost"]) + parseInt(ClassSkills[SkillNameValue]["Cost"]);
                setAttrs({
                    [`mov_stat_skill`]: StatChanges["mov"],
                    [`growth_skill_points`]: StatChanges["cost"]
                });
            });
        });
    });
};

on("change:background", function() {
    getAttrs(["background"], function(values) {
        let bg = values.background;
        setAttrs({
            "hp_growth_bg": BackgroundGrowth[bg].HP,
            "str_growth_bg": BackgroundGrowth[bg].STR,
            "int_growth_bg": BackgroundGrowth[bg].INT,
            "dex_growth_bg": BackgroundGrowth[bg].DEX,
            "spd_growth_bg": BackgroundGrowth[bg].SPD,
            "luk_growth_bg": BackgroundGrowth[bg].LUK,
            "con_growth_bg": BackgroundGrowth[bg].CON,
            "wis_growth_bg": BackgroundGrowth[bg].WIS
        });
    });
});

on("change:creature_type", function() {
    getAttrs(["creature_type"], function(values) {
        let ct = values.creature_type;
        setAttrs({
            "hp_stat_ct": CreatureTypeStat[ct].HP,
            "str_stat_ct": CreatureTypeStat[ct].STR,
            "int_stat_ct": CreatureTypeStat[ct].INT,
            "dex_stat_ct": CreatureTypeStat[ct].DEX,
            "spd_stat_ct": CreatureTypeStat[ct].SPD,
            "luk_stat_ct": CreatureTypeStat[ct].LUK,
            "con_stat_ct": CreatureTypeStat[ct].CON,
            "wis_stat_ct": CreatureTypeStat[ct].WIS,
            "mov_stat_ct": CreatureTypeStat[ct].MOV
        });
    });
});

on("clicked:RecalculateStats change:StaticLevels change:NoBadStats change:repeating_CharacterLevel", function() {
    CalculateStats();
});

on("change:repeating_ClassSkillsList:ClassSkill", function(eventInfo) {
    getAttrs(["repeating_ClassSkillsList_ClassSkill"], function(values) {
        let SkillName = values.repeating_ClassSkillsList_ClassSkill;
        setAttrs({
            repeating_ClassSkillsList_ClassSkillCost: ClassSkills[SkillName]["Cost"],
            repeating_ClassSkillsList_ClassSkillDescription: ClassSkills[SkillName]["Description"],
            repeating_ClassSkillsList_ClassSkillEffect: ClassSkills[SkillName]["Effect"]
        });
    });
    CalculateSkillStats();
});

StatList.forEach(stat => {
    on(`change:${stat}_growth_base change:${stat}_growth_bg`, function() {
        CalculateStats();
    });
});