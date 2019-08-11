var Attack = Attack || {};

function CombatEntity(CharacterID, TokenID) {
	this.CharacterID = CharacterID,
	this.TokenID = TokenID,
	this.character_name = getAttrByName(this.CharacterID, "character_name", "current"),
	this.HP = getAttrByName(this.CharacterID, "HP", "current"),
	this.HP_max = getAttrByName(this.CharacterID, "HP", "max"),
    this.Range = getAttrByName(this.CharacterID, "Range", "current"),
    this.Range_max = getAttrByName(this.CharacterID, "Range", "max"),
    this.Weapon_ArmoredSlayer = getAttrByName(this.CharacterID, "Weapon_ArmoredSlayer", "current"),
    this.Weapon_FlySlayer = getAttrByName(this.CharacterID, "Weapon_FlySlayer", "current"),
    this.Weapon_RideSlayer = getAttrByName(this.CharacterID, "Weapon_RideSlayer", "current"),
    this.Weapon_KingSlayer = getAttrByName(this.CharacterID, "Weapon_KingSlayer", "current"),
    this.Weapon_DragonSlayer = getAttrByName(this.CharacterID, "Weapon_DragonSlayer", "current"),
    this.Weapon_BeastSlayer = getAttrByName(this.CharacterID, "Weapon_BeastSlayer", "current"),
    this.Weapon_MonsterSlayer = getAttrByName(this.CharacterID, "Weapon_MonsterSlayer", "current"),
    this.Weapon_ManSlayer = getAttrByName(this.CharacterID, "Weapon_ManSlayer", "current"),
    this.Weapon_Hero = getAttrByName(this.CharacterID, "Weapon_Hero", "current"),
    this.Weapon_Heavy = getAttrByName(this.CharacterID, "Weapon_Heavy", "current"),
    this.CombatTrickFlourish = getAttrByName(this.CharacterID, "CombatTrickFlourish", "current"),
    this.CombatTrickManeuverLevel3 = getAttrByName(this.CharacterID, "CombatTrickManeuverLevel3", "current"),
    this.CombatTrickCounterLevel4 = getAttrByName(this.CharacterID, "CombatTrickCounterLevel4", "current"),
    this.OffMight = getAttrByName(this.CharacterID, "OffMight", "current"),
    this.OffAtkSpd = getAttrByName(this.CharacterID, "OffAtkSpd", "current"),
    this.OffAccuracy = getAttrByName(this.CharacterID, "OffAccuracy", "current"),
    this.OffDodge = getAttrByName(this.CharacterID, "OffDodge", "current"),
    this.OffCrit = getAttrByName(this.CharacterID, "OffCrit", "current"),
    this.OffAvoid = getAttrByName(this.CharacterID, "OffAvoid", "current"),
    this.OffDefense = getAttrByName(this.CharacterID, "OffDefense", "current"),
    this.OffResistance = getAttrByName(this.CharacterID, "OffResistance", "current"),
    this.DefMight = getAttrByName(this.CharacterID, "DefMight", "current"),
    this.DefAtkSpd = getAttrByName(this.CharacterID, "DefAtkSpd", "current"),
    this.DefAccuracy = getAttrByName(this.CharacterID, "DefAccuracy", "current"),
    this.DefDodge = getAttrByName(this.CharacterID, "DefDodge", "current"),
    this.DefCrit = getAttrByName(this.CharacterID, "DefCrit", "current"),
    this.DefAvoid = getAttrByName(this.CharacterID, "DefAvoid", "current"),
    this.DefDefense = getAttrByName(this.CharacterID, "DefDefense", "current"),
    this.DefResistance = getAttrByName(this.CharacterID, "DefResistance", "current"),
    this.dmfRed = getAttrByName(this.CharacterID, "dmfRed", "current"),
    this.dmfGreen = getAttrByName(this.CharacterID, "dmfGreen", "current"),
    this.dmfBlue = getAttrByName(this.CharacterID, "dmfBlue", "current"),
    this.dmfMultipler = getAttrByName(this.CharacterID, "dmfMultipler", "current"),
    this.dmfDefense = getAttrByName(this.CharacterID, "dmfDefense", "current"),
    this.dmfResistance = getAttrByName(this.CharacterID, "dmfResistance", "current"),
    this.dmfBaseMight = getAttrByName(this.CharacterID, "dmfBaseMight", "current"),
    this.dmfDicipline4 = getAttrByName(this.CharacterID, "dmfDicipline4", "current"),
    this.Nobility = getAttrByName(this.CharacterID, "Nobility", "current"),
    this.Armored = getAttrByName(this.CharacterID, "Armored", "current"),
    this.Ride = getAttrByName(this.CharacterID, "Ride", "current"),
    this.Fly = getAttrByName(this.CharacterID, "Fly", "current"),
    this.Dragon = getAttrByName(this.CharacterID, "Dragon", "current"),
    this.Animal = getAttrByName(this.CharacterID, "Animal", "current"),
    this.Monster = getAttrByName(this.CharacterID, "Monster", "current"),
    this.sklCounter = getAttrByName(this.CharacterID, "sklCounter", "current"),
    this.sklFlourish = getAttrByName(this.CharacterID, "sklFlourish", "current"),
    this.sklManeuver = getAttrByName(this.CharacterID, "sklManeuver", "current"),
    this.sklMedic = getAttrByName(this.CharacterID, "sklMedic", "current"),
    this.sklMiracle = getAttrByName(this.CharacterID, "sklMiracle", "current"),
    this.sklNihil = getAttrByName(this.CharacterID, "sklNihil", "current"),
    this.sklPavise = getAttrByName(this.CharacterID, "sklPavise", "current"),
    this.sklProvoke = getAttrByName(this.CharacterID, "sklProvoke", "current"),
    this.sklSabateur = getAttrByName(this.CharacterID, "sklSabateur", "current"),
    this.sklSacrifice = getAttrByName(this.CharacterID, "sklSacrifice", "current"),
    this.sklVantage = getAttrByName(this.CharacterID, "sklVantage", "current"),
    this.combatSTR = getAttrByName(this.CharacterID, "combatSTR", "current"),
    this.combatMAG = getAttrByName(this.CharacterID, "combatMAG", "current"),
    this.combatSKL = getAttrByName(this.CharacterID, "combatSKL", "current"),
    this.combatSPD = getAttrByName(this.CharacterID, "combatSPD", "current"),
    this.combatLUK = getAttrByName(this.CharacterID, "combatLUK", "current"),
    this.sklLuna = getAttrByName(this.CharacterID, "sklLuna", "current"),
    this.sklSol = getAttrByName(this.CharacterID, "sklSol", "current"),
    this.sklAether = getAttrByName(this.CharacterID, "sklAether", "current"),
    this.sklFlare = getAttrByName(this.CharacterID, "sklFlare", "current"),
    this.sklLetheality = getAttrByName(this.CharacterID, "sklLetheality", "current"),
    this.sklDeadeye = getAttrByName(this.CharacterID, "sklDeadeye", "current"),
    this.sklAstra = getAttrByName(this.CharacterID, "sklAstra", "current"),
    this.sklColossus = getAttrByName(this.CharacterID, "sklColossus", "current"),
    this.sklWard = getAttrByName(this.CharacterID, "sklWard", "current"),
    this.sklGaleforce = getAttrByName(this.CharacterID, "sklGaleforce", "current"),
    this.GetNihil = function() {
        if (this.sklNihil >= 4) { if(Roll() <= this.combatLUK) { return 99; } else { return 1; } }
	    if (this.sklNihil == 3) { if(Roll() <= this.combatLUK) { return 2; } else { return 1; } }
	    if (this.sklNihil == 2) { if(Roll() <= this.combatLUK) { return 1; } else { return 1; } }
	    if (this.sklNihil == 1) { if(Roll() <= this.combatLUK) { return 1; } else { return 0; } }
	    return 0;
    },
    this.Nihil = this.GetNihil(),
    this.InRange = function(range) {
        if(range >= this.Range && range <= this.Range_max) { return 1; } else { return 0; }
    }
}

function CombatAttack(Source, Target, Counter) {
    this._Source = Source,
    this._Target = Target,
    this._Counter = Counter,
    this.InRange = function() {
        return this._Source.InRange(Range(Source,Target));
	},
	this.Triangle = function() {
	    t = 0
	    t += this._Source.dmfRed * this._Target.dmfGreen;
	    t += this._Source.dmfGreen * this._Target.dmfBlue;
	    t += this._Source.dmfBlue * this._Target.dmfRed;
	    t -= this._Source.dmfRed * this._Target.dmfBlue;
	    t -= this._Source.dmfGreen * this._Target.dmfRed;
	    t -= this._Source.dmfBlue * this._Target.dmfGreen;
	    return t;
	}
    this.Accuracy = function() {
        var multiplier = 1;
        if (this._Target.CombatTrickFlourish >= 1) {
	        if (this._Target.sklFlourish >= 2 && this._Source.InRange(Range(Source,Target)) && this._Counter == 1) {
	            multiplier = multiplier * 0.5;
	        }
	        if (this._Target.sklFlourish >= 4 && this._Source.InRange(Range(Source,Target)) && this._Counter == 0) {
	            multiplier = multiplier * 0.5;
	        }
	    }
	    if (this._Target.CombatTrickCounterLevel4 >= 1) {
	        multiplier = multiplier * 0.5;
	    }
        if (this._Counter == 1) { return (this._Source.DefAccuracy - this._Target.OffDodge + (this.Triangle() * 15)) * multiplier; }
		return (this._Source.OffAccuracy - this._Target.DefDodge + (this.Triangle() * 15)) * multiplier;
	},
	this.Special = function() {
	    var dmg = 0;
	    var man = this._Target.Nobility + this._Target.Armored + this._Target.Ride + this._Target.Fly + this._Target.Dragon + this._Target.Animal + this._Target.Monster;
	    if (this._Source.Weapon_KingSlayer >= 1 && this._Target.Nobility >= 1) { dmg = 2; }
	    if (this._Source.ArmoredSlayer >= 1 && this._Target.Armored >= 1) { dmg = 2; }
	    if (this._Source.Weapon_RideSlayer >= 1 && this._Target.Ride >= 1) { dmg = 2; }
	    if (this._Source.Weapon_FlySlayer >= 1 && this._Target.Fly >= 1) { dmg = 2; }
	    if (this._Source.Weapon_DragonSlayer >= 1 && this._Target.Dragon >= 1) { dmg = 2; }
	    if (this._Source.Weapon_BeastSlayer >= 1 && this._Target.Animal >= 1) { dmg = 2; }
	    if (this._Source.Weapon_MonsterSlayer >= 1 && this._Target.Monster >= 1) { dmg = 2; }
	    if (this._Source.Weapon_ManSlayer >= 1 && man < 1) { dmg = 2; }
	    return dmg * this._Source.dmfBaseMight;
	},
	this.Damage = function(def_multiplier = 1, might_multiplier = 1) {
	    var dmg = 0;
	    if (this._Counter == 1) { dmg = this._Source.DefMight * might_multiplier; } else { dmg = this._Source.OffMight * might_multiplier; }
	    dmg += this.Triangle();
	    if (this._Counter == 1) { dmg -= this._Source.dmfDefense * this._Target.OffDefense * def_multiplier; } else { dmg -= this._Source.dmfDefense * this._Target.DefDefense * def_multiplier; }
	    if (this._Counter == 1) { dmg -= this._Source.dmfResistance * this._Target.OffResistance * def_multiplier; } else { dmg -= this._Source.dmfResistance * this._Target.DefResistance * def_multiplier; }
	    dmg += this.Special();
	    if (this._Source.CombatTrickManeuverLevel3 >= 1){
	        dmg = dmg * 0.5;
	    }
	    if (this._Source.CombatTrickFlourish >= 1) {
	        dmg = dmg * 0.5;
	        if (this._Source.sklFlourish >= 3 && this._Target.InRange(Range(Source,Target)) && this._Counter == 0) {
	            var flourish = this._Target.DefMight;
	            flourish -= this._Target.dmfDefense * this._Source.OffDefense;
	            flourish -= this._Target.dmfResistance * this._Source.OffResistance;
	            dmg += flourish;
	        }
	        if (this._Source.sklFlourish >= 4 && this._Target.InRange(Range(Source,Target)) && this._Counter == 1) {
	            var flourish = this._Target.OffMight;
	            flourish -= this._Target.dmfDefense * this._Source.DefDefense;
	            flourish -= this._Target.dmfResistance * this._Source.DefResistance;
	            dmg += flourish;
	        }
	    }
	    if (this._Target.sklMiracle >= 2 && this._Target.HP <= dmg) { dmg = dmg * 0.25; }
	    if (this._Target.sklMiracle == 1 && this._Target.HP <= dmg) { dmg = dmg * 0.5; }
		return dmg;
	},
	this.Critical = function() {
	    if (this._Target.sklMedic >= 4 ) { return 0; }
		if (this._Counter == 1) { return this._Source.DefCrit - this._Target.OffAvoid; } else { return this._Source.OffCrit - this._Target.DefAvoid; }
	},
	this.Speed = function() {
	    if (this._Source.Weapon_Heavy >= 1 ) { return 1; }
		if (this._Counter == 1 && (this._Source.DefAtkSpd - this._Target.OffAtkSpd) >= 4) { return 2; }
		if (this._Counter == 0 && (this._Source.OffAtkSpd - this._Target.DefAtkSpd) >= 4) { return 2; }
		return 1;
	},
	this.SpeedTestfire = function() {
	    var hero = 1;
	    if (this._Source.Weapon_Hero >= 1 ) { hero = 2; }
	    if (this._Source.Weapon_Heavy >= 1 ) { return 1 * hero; }
		if (this._Counter == 1 && (this._Source.DefAtkSpd - this._Target.OffAtkSpd) >= 4) { return 2 * hero; }
		if (this._Counter == 0 && (this._Source.OffAtkSpd - this._Target.DefAtkSpd) >= 4) { return 2 * hero; }
		return 1 * hero;
	},
	this.Counter = function() {
	    if ( this._Target.sklCounter >= 2 && Roll() < this._Target.combatSKL ) { 
	        if (this.Nihil > 0) { this.Nihil -= 1; return 0; }
	        return 1; 
	    }
	    return 0;
	},
	this.Maneuver3 = function() {
	    if (this._Source.CombatTrickManeuverLevel3 >= 1 && Roll() < this._Source.combatSKL) { 
	        if (this.Nihil > 0) { this.Nihil -= 1; return 0; }
	        return 1; 
	    }
	    return 0;
	},
	this.Maneuver4 = function() {
	    if (this._Source.sklManeuver >= 4 && Roll() <= this._Source.combatSPD) { 
	        if (this.Nihil > 0) { this.Nihil -= 1; return 0; }
	        return 1; 
	    }
	    return 0;
	},
	this.Miracle = function() {
	    if (this._Target.sklMiracle >= 3 && Roll() <= this._Target.combatLUK) { 
	        if (this.Nihil > 0) { this.Nihil -= 1; return 0; }
	        return 0.5; 
	    }
	    return 1;
	},
	this.Pavise = function() {
	    if (this._Target.sklPavise >= 1 && Roll() <= this._Target.combatSKL) {
	        if (this._Source.Nihil > 0) { this._Source.Nihil -= 1; return 0; }
	        return 1 - 0.25 * this._Target.sklPavise;
	    }
	    return 1;
	},
	this.Sabateur1 = function() {
	    if (Number(this._Source.sklSabateur) >= 1 && Roll() <= this._Source.combatSKL) { 
	        if (this._Target.Nihil > 0) { this._Target.Nihil -= 1; return 0; }
	        return Number(this._Source.sklSabateur);
	    }
	    return 0;
	},
	this.Sabateur2 = function() {
	    if (this._Source.sklSabateur >= 2) { return 1; }
	    return 0;
	},
	this.Sabateur3 = function() {
	    if (this._Source.sklSabateur >= 3) { return 1; }
	    return 0;
	},
	this.Vantage3 = function() {
	    log(this._Target.sklVantage);
	    log(this._Target.combatSPD);
	    if (Number(this._Target.sklVantage) == 3 && Roll() <= Number(this._Target.combatSPD)) {
	        log("success");
	        log(this._Source.Nihil);
	        if (Number(this._Source.Nihil) > 0) { this._Source.Nihil -= 1; return 0; }
	        return Number(this._Target.sklVantage);
	    }
	    return 0;
	},
	this.Vantage4 = function() {
	    if (Number(this._Target.sklVantage) >= 4 && Roll() <= this._Source.combatSPD) { 
	        if (this._Source.Nihil > 0) { this._Source.Nihil -= 1; return 0; }
	        return this._Target.sklVantage;
	    }
	    return 0;
	},
	this.Discipline = function() {
	    if (Number(this._Source.dmfDicipline4) >= 1 && Roll() <= this._Source.combatSPD) { 
	        if (this._Target.Nihil > 0) { this._Target.Nihil -= 1; return 0; }
	        return 1;
	    }
	    return 0;
	},
	this.TestFire = function() {
	    //&{template:default} {{name=Test Attack}} {{attack=[[1d20]]}} {{note= This is some note content}} {{Saving Throw= vs Will}}
	    var msg = ""
	    if (this._Counter == 1) { msg += "&{template:default} {{name=" + this._Source.character_name + " Counters}}"; } else { msg += "&{template:default} {{name=" + this._Source.character_name + " Attacks}}"; }
	    if (this.InRange() == 1) { 
	        msg += " {{Accuracy= " + this.Accuracy() + "}}";
	        msg += " {{Damage= " + this.Damage() + "}}";
	        msg += " {{Critical= " + this.Critical() + "}}";
	        msg += " {{Attacks= " + this.SpeedTestfire() + "}}";
	    }
	    else {
	        msg += " {{Range= Out Of range}}";
	    }
	    sendChat("Combat", msg);
	    return;
	},
	this.AttackNumber = 1,
	this.AddAttackRoll = function(msg){
	    msg = this.AddSingleAttackRoll(msg);
	    if(this.Discipline() == 1) { msg = this.AddSingleAttackRoll(msg); }
	    if(Number(this._Source.Weapon_Hero) >= 1) { msg = this.AddSingleAttackRoll(msg); }
	    return msg;
	},
	this.CheckSkill = function(check) {
	    if (Roll() <= check) { 
	        if (this._Target.Nihil > 0) { this._Target.Nihil -= 1; return 0; }
	        return 1;
	    }
	    return 0;
	},
	this.AddSingleAttackRoll = function(msg) {
	    if(this._Source.sklLuna == 1 && this.CheckSkill(this._Source.combatSKL)) { return this.AddLunaAttack(msg); }
	    if(this._Source.sklSol == 1 && this.CheckSkill(this._Source.combatSKL)) { return this.AddSolAttack(msg); }
	    if(this._Source.sklAether == 1 && this.CheckSkill(this._Source.combatSKL * 0.5)) { msg = this.AddSolAttack(msg); return this.AddLunaAttack(msg); }
	    if(this._Source.sklFlare == 1 && this.CheckSkill(this._Source.combatSKL)) { return this.AddFlareAttack(msg); }
	    if(this._Source.sklLetheality == 1 && this.CheckSkill(this._Source.combatSKL * 0.25)) { return this.AddLethealityAttack(msg); }
	    if(this._Source.sklDeadeye == 1 && this.CheckSkill(this._Source.combatSKL * 0.5)) { return this.AddDeadeyeAttack(msg); }
	    if(this._Source.sklAstra == 1 && this.CheckSkill(this._Source.combatSKL * 0.5)) { msg = this.AddAstraAttack(msg); msg = this.AddAstraAttack(msg); msg = this.AddAstraAttack(msg); msg = this.AddAstraAttack(msg); return this.AddAstraAttack(msg); }
	    if(this._Source.sklColossus == 1 && this.CheckSkill(this._Source.combatSTR)) { return this.AddColossusAttack(msg); }
	    return this.AddBasicAttack(msg);
	},
	this.AddBasicAttack = function(msg) {
	    if (this.InRange() == 1) {
	        if(Roll() <= this.Accuracy()) {
	            var crit = 1;
	            var Pavise = this.Pavise();
	            var Miracle = this.Miracle();
	            var hit = this._Source.character_name + " Hits (" + this.AttackNumber + ")";
	            var Sabateur = this.Sabateur1();
	            if(Roll() <= this.Critical()) { crit = this._Source.dmfMultipler; hit = this._Source.character_name + " Crits (" + this.AttackNumber + ")"; }
	            if(Pavise < 1) { hit += ", Pavise"; }
	            if(Miracle < 1) { hit += ", Miracle"; }
	            var dmg = this.Damage() * Pavise * Miracle * crit;
	            msg += " {{" + hit + "= " + Math.ceil(dmg) + "}}";
	            if(this.Maneuver3()) {msg += " {{" + this._Target.character_name + " Is Disarmed}}"; }
	            if(this.Maneuver4()) {msg += " {{" + this._Target.character_name + " Next Attack is Blocked}}"; }
	            if(Sabateur >= 4)  {msg += " {{" + this._Target.character_name + " Cannot Move or Counter}}"; }
	            if(Sabateur >= 1 && Sabateur <= 3)  {msg += " {{" + this._Target.character_name + " Cannot Move}}"; }
	        } else {
    	        msg += " {{" + this._Source.character_name + " Misses}}";
	        }
	    } else {
	        msg += " {{" + this._Source.character_name + " is Out of Range}}";
	    }
	    this.AttackNumber += 1;
	    return msg;
	},
	this.AddLunaAttack = function(msg) {
	    if (this.InRange() == 1) {
	        if(Roll() <= this.Accuracy()) {
	            var crit = 1;
	            var Pavise = this.Pavise();
	            var Miracle = this.Miracle();
	            var hit = this._Source.character_name + " Hits with Luna (" + this.AttackNumber + ")";
	            var Sabateur = this.Sabateur1();
	            if(Roll() <= this.Critical()) { crit = this._Source.dmfMultipler; hit = this._Source.character_name + " Crits With Luna (" + this.AttackNumber + ")"; }
	            if(Pavise < 1) { hit += ", Pavise"; }
	            if(Miracle < 1) { hit += ", Miracle"; }
	            var dmg = this.Damage(0, 1) * Pavise * Miracle * crit;
	            msg += " {{" + hit + "= " + Math.ceil(dmg) + "}}";
	            if(this.Maneuver3()) {msg += " {{" + this._Target.character_name + " Is Disarmed}}"; }
	            if(this.Maneuver4()) {msg += " {{" + this._Target.character_name + " Next Attack is Blocked}}"; }
	            if(Sabateur >= 4)  {msg += " {{" + this._Target.character_name + " Cannot Move or Counter}}"; }
	            if(Sabateur >= 1 && Sabateur <= 3)  {msg += " {{" + this._Target.character_name + " Cannot Move}}"; }
	        } else {
    	        msg += " {{" + this._Source.character_name + " Misses}}";
	        }
	    } else {
	        msg += " {{" + this._Source.character_name + " is Out of Range}}";
	    }
	    this.AttackNumber += 1;
	    return msg;
	},
	this.AddSolAttack = function(msg) {
	    if (this.InRange() == 1) {
	        if(Roll() <= this.Accuracy()) {
	            var crit = 1;
	            var Pavise = this.Pavise();
	            var Miracle = this.Miracle();
	            var hit = this._Source.character_name + " Hits with Sol (" + this.AttackNumber + ")";
	            var recover = this._Source.character_name + " Recovers HP (" + this.AttackNumber + ")";
	            var Sabateur = this.Sabateur1();
	            if(Roll() <= this.Critical()) { crit = this._Source.dmfMultipler; hit = this._Source.character_name + " Crits With Sol (" + this.AttackNumber + ")"; }
	            if(Pavise < 1) { hit += ", Pavise"; }
	            if(Miracle < 1) { hit += ", Miracle"; }
	            var dmg = this.Damage() * Pavise * Miracle * crit;
	            msg += " {{" + hit + "= " + Math.ceil(dmg) + "}}";
	            msg += " {{" + recover + "= " + Math.ceil(dmg) + "}}";
	            if(this.Maneuver3()) {msg += " {{" + this._Target.character_name + " Is Disarmed}}"; }
	            if(this.Maneuver4()) {msg += " {{" + this._Target.character_name + " Next Attack is Blocked}}"; }
	            if(Sabateur >= 4)  {msg += " {{" + this._Target.character_name + " Cannot Move or Counter}}"; }
	            if(Sabateur >= 1 && Sabateur <= 3)  {msg += " {{" + this._Target.character_name + " Cannot Move}}"; }
	        } else {
    	        msg += " {{" + this._Source.character_name + " Misses}}";
	        }
	    } else {
	        msg += " {{" + this._Source.character_name + " is Out of Range}}";
	    }
	    this.AttackNumber += 1;
	    return msg;
	},
	this.AddFlareAttack = function(msg) {
	    if (this.InRange() == 1) {
	        if(Roll() <= this.Accuracy()) {
	            var crit = 1;
	            var Pavise = this.Pavise();
	            var Miracle = this.Miracle();
	            var hit = this._Source.character_name + " Hits with Flare (" + this.AttackNumber + ")";
	            var Sabateur = this.Sabateur1();
	            if(Roll() <= this.Critical()) { crit = this._Source.dmfMultipler; hit = this._Source.character_name + " Crits With Flare (" + this.AttackNumber + ")"; }
	            if(Pavise < 1) { hit += ", Pavise"; }
	            if(Miracle < 1) { hit += ", Miracle"; }
	            var dmg = this.Damage(0, 1) * Pavise * Miracle * crit;
	            msg += " {{" + hit + "= " + Math.ceil(dmg) + "}}";
	            if(this.Maneuver3()) {msg += " {{" + this._Target.character_name + " Is Disarmed}}"; }
	            if(this.Maneuver4()) {msg += " {{" + this._Target.character_name + " Next Attack is Blocked}}"; }
	            if(Sabateur >= 4)  {msg += " {{" + this._Target.character_name + " Cannot Move or Counter}}"; }
	            if(Sabateur >= 1 && Sabateur <= 3)  {msg += " {{" + this._Target.character_name + " Cannot Move}}"; }
	        } else {
    	        msg += " {{" + this._Source.character_name + " Misses}}";
	        }
	    } else {
	        msg += " {{" + this._Source.character_name + " is Out of Range}}";
	    }
	    this.AttackNumber += 1;
	    return msg;
	},
	this.AddLethealityAttack = function(msg) {
	    if (this.InRange() == 1) {
	        if(Roll() <= this.Accuracy()) {
	            var crit = 1;
	            var Pavise = this.Pavise();
	            var Miracle = this.Miracle();
	            var hit = this._Source.character_name + " Strikes with Letheality (" + this.AttackNumber + ")";
	            var Sabateur = this.Sabateur1();
	            if(Roll() <= this.Critical()) { crit = this._Source.dmfMultipler; hit = this._Source.character_name + " Strikes with Letheality (" + this.AttackNumber + ")"; }
	            if(Pavise < 1) { hit += ", Pavise"; }
	            if(Miracle < 1) { hit += ", Miracle"; }
	            var dmg = this.Damage(0, 1) * Pavise * Miracle * crit;
	            msg += " {{" + hit + "= " + 9999 + "}}";
	            msg += " {{" + this._Target.character_name + " Is Dead}}";
	        } else {
    	        msg += " {{" + this._Source.character_name + " Misses}}";
	        }
	    } else {
	        msg += " {{" + this._Source.character_name + " is Out of Range}}";
	    }
	    this.AttackNumber += 1;
	    return msg;
	},
	this.AddDeadeyeAttack = function(msg) {
	    if (this.InRange() == 1) {
	        if(0.0 <= this.Accuracy()) {
	            var crit = 1;
	            var Pavise = this.Pavise();
	            var Miracle = this.Miracle();
	            var hit = this._Source.character_name + " Hits with Deadeye (" + this.AttackNumber + ")";
	            var Sabateur = this.Sabateur1();
	            if(0.0 <= this.Critical()) { crit = this._Source.dmfMultipler; hit = this._Source.character_name + " Crits With Deadeye (" + this.AttackNumber + ")"; }
	            if(Pavise < 1) { hit += ", Pavise"; }
	            if(Miracle < 1) { hit += ", Miracle"; }
	            var dmg = this.Damage(0, 1) * Pavise * Miracle * crit;
	            msg += " {{" + hit + "= " + Math.ceil(dmg) + "}}";
	            msg += " {{" + this._Target.character_name + " Has been put to sleep}}";
	            if(this.Maneuver3()) {msg += " {{" + this._Target.character_name + " Is Disarmed}}"; }
	            if(this.Maneuver4()) {msg += " {{" + this._Target.character_name + " Next Attack is Blocked}}"; }
	            if(Sabateur >= 4)  {msg += " {{" + this._Target.character_name + " Cannot Move or Counter}}"; }
	            if(Sabateur >= 1 && Sabateur <= 3)  {msg += " {{" + this._Target.character_name + " Cannot Move}}"; }
	        } else {
    	        msg += " {{" + this._Source.character_name + " Misses}}";
	        }
	    } else {
	        msg += " {{" + this._Source.character_name + " is Out of Range}}";
	    }
	    this.AttackNumber += 1;
	    return msg;
	},
	this.AddAstraAttack = function(msg) {
	    if (this.InRange() == 1) {
	        if(Roll() <= this.Accuracy()) {
	            var crit = 1;
	            var Pavise = this.Pavise();
	            var Miracle = this.Miracle();
	            var hit = this._Source.character_name + " Hits with Astra (" + this.AttackNumber + ")";
	            var Sabateur = this.Sabateur1();
	            if(Roll() <= this.Critical()) { crit = this._Source.dmfMultipler; hit = this._Source.character_name + " Crits with Astra (" + this.AttackNumber + ")"; }
	            if(Pavise < 1) { hit += ", Pavise"; }
	            if(Miracle < 1) { hit += ", Miracle"; }
	            var dmg = this.Damage() * Pavise * Miracle * crit;
	            msg += " {{" + hit + "= " + Math.ceil(dmg * 0.5) + "}}";
	            if(this.Maneuver3()) {msg += " {{" + this._Target.character_name + " Is Disarmed}}"; }
	            if(this.Maneuver4()) {msg += " {{" + this._Target.character_name + " Next Attack is Blocked}}"; }
	            if(Sabateur >= 4)  {msg += " {{" + this._Target.character_name + " Cannot Move or Counter}}"; }
	            if(Sabateur >= 1 && Sabateur <= 3)  {msg += " {{" + this._Target.character_name + " Cannot Move}}"; }
	        } else {
    	        msg += " {{" + this._Source.character_name + " Misses}}";
	        }
	    } else {
	        msg += " {{" + this._Source.character_name + " is Out of Range}}";
	    }
	    this.AttackNumber += 1;
	    return msg;
	},
	this.AddColossusAttack = function(msg) {
	    if (this.InRange() == 1) {
	        if(Roll() <= this.Accuracy()) {
	            var crit = 1;
	            var Pavise = this.Pavise();
	            var Miracle = this.Miracle();
	            var hit = this._Source.character_name + " Hits with Colossus (" + this.AttackNumber + ")";
	            var Sabateur = this.Sabateur1();
	            if(Roll() <= this.Critical()) { crit = this._Source.dmfMultipler; hit = this._Source.character_name + " Crits with Colossus (" + this.AttackNumber + ")"; }
	            if(Pavise < 1) { hit += ", Pavise"; }
	            if(Miracle < 1) { hit += ", Miracle"; }
	            var dmg = (this.Damage() + this._Source.combatSTR * 2) * Pavise * Miracle * crit;
	            msg += " {{" + hit + "= " + Math.ceil(dmg) + "}}";
	            if(this.Maneuver3()) {msg += " {{" + this._Target.character_name + " Is Disarmed}}"; }
	            if(this.Maneuver4()) {msg += " {{" + this._Target.character_name + " Next Attack is Blocked}}"; }
	            if(Sabateur >= 4)  {msg += " {{" + this._Target.character_name + " Cannot Move or Counter}}"; }
	            if(Sabateur >= 1 && Sabateur <= 3)  {msg += " {{" + this._Target.character_name + " Cannot Move}}"; }
	        } else {
    	        msg += " {{" + this._Source.character_name + " Misses}}";
	        }
	    } else {
	        msg += " {{" + this._Source.character_name + " is Out of Range}}";
	    }
	    this.AttackNumber += 1;
	    return msg;
	}
}

on("chat:message", function (msg) {
    // Exit if not an api command
    if (msg.type != "api") { return; }
    
    // Get the API Chat Command
    msg.who = msg.who.replace(" (GM)", "");
    msg.content = msg.content.replace("(GM) ", "");
    var command = msg.content.split(" ", 1);
    
    //process api commands
    if(command == "!attack") {
        Attack.Process(msg);
    }
    if(command == "!testfire") {
        Attack.Attempt(msg);
        //sendChat("Combat", "You size up your opponent");
    }
});

Attack.Process = function(msg){
    var Tag = msg.content.split(" ");
    var OriginTokenID = Tag[1];
    var OriginCharID = Tag[2];
    var TargetTokenID = Tag[3];
    var TargetCharID = Tag[4];
    var origin = new CombatEntity(OriginCharID, OriginTokenID);
    var target = new CombatEntity(TargetCharID, TargetTokenID);

    var OriginAttack = new CombatAttack(origin, target, 0);
    var TargetAttack = new CombatAttack(target, origin, 1);
    var OriginFollowup = OriginAttack.Speed();
    var TargetFollowup = TargetAttack.Speed();
    var combat_msg = "&{template:default} {{name=" + origin.character_name + " attacks " + target.character_name + "}}";
    
    if(OriginAttack.Vantage4() == 4) {
        log("Vantage4");
        combat_msg = TargetAttack.AddAttackRoll(combat_msg);
        if(TargetFollowup > 1 ) { combat_msg = TargetAttack.AddAttackRoll(combat_msg); }
        combat_msg = OriginAttack.AddAttackRoll(combat_msg);
        if(OriginFollowup > 1 ) { combat_msg = OriginAttack.AddAttackRoll(combat_msg); }
    } else if ( OriginAttack.Vantage3() == 3 ) {
        log("Vantage3");
        combat_msg = TargetAttack.AddAttackRoll(combat_msg);
        combat_msg = OriginAttack.AddAttackRoll(combat_msg);
        if(TargetFollowup > 1 ) { combat_msg = TargetAttack.AddAttackRoll(combat_msg); }
        if(OriginFollowup > 1 ) { combat_msg = OriginAttack.AddAttackRoll(combat_msg); }
    } else {
        combat_msg = OriginAttack.AddAttackRoll(combat_msg);
        combat_msg = TargetAttack.AddAttackRoll(combat_msg);
        if(OriginFollowup > 1 ) { combat_msg = OriginAttack.AddAttackRoll(combat_msg); }
        if(TargetFollowup > 1 ) { combat_msg = TargetAttack.AddAttackRoll(combat_msg); }
    }
    sendChat("Combat", combat_msg);
    log(combat_msg);
    return;
};

Attack.Attempt = function(msg){
    var Tag = msg.content.split(" ");
    var OriginTokenID = Tag[1];
    var OriginCharID = Tag[2];
    var TargetTokenID = Tag[3];
    var TargetCharID = Tag[4];
    var origin = new CombatEntity(OriginCharID, OriginTokenID);
    var target = new CombatEntity(TargetCharID, TargetTokenID);

    var OriginAttack = new CombatAttack(origin, target, 0);
    var TargetAttack = new CombatAttack(target, origin, 1);
    OriginAttack.TestFire();
    TargetAttack.TestFire();
    return;
};


function Range(OriginName, DestName) {
    origintoken = findObjs({_type: "graphic", id: OriginName.TokenID})[0]; //We know there is a token in the Campaign called "Guard A".
    desttoken = findObjs({_type: "graphic", id: DestName.TokenID})[0]; //We know there is a token in the Campaign called "Guard A".
    var originleft=origintoken.get("left"); //left
    var origintop = origintoken.get("top"); //top
    var destleft=desttoken.get("left"); //left
    var desttop = desttoken.get("top"); //top
    var left = Math.abs(originleft - destleft) / 70;
    var top = Math.abs(origintop - desttop) / 70;
    return Math.round(left + top);
};

function Roll() { return Math.floor(100 * Math.random()); };