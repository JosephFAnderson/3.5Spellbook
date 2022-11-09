const { Spell } = require('../models');
const csv = require('csv-parser');
const fs = require('fs');
const connection = require('../config/connection');
const results = [];

connection.on('err', err => err);


connection.once('open', () => {
    try{    
        fs.createReadStream('./utils/allSpells.csv')
        .pipe(csv())
        .on('data', data => results.push(data))
        .on('end', () => {
            results.forEach(async (spell) => {
                if(spell.name === "Transformation of the Deeps"){
                    console.log(spell);
                }
                newSpell = {};
                newSpell.name = spell.Name;
                newSpell.sourceBook = spell['Source Book'];
                newSpell.sourcePage = spell['Src Page'];
                newSpell.school = spell.Schl;
                if(spell["sub-school"]){
                    newSpell.subSchool = spell["Sub-school"];
                }
                if(spell.Descritpor){
                    newSpell.descriptor = spell.Descriptor;
                }
                const classArray = [];
                if(spell.Adp){
                    classArray.push({ name: "Adept", level: parseInt(spell.Adp) });
                }
                if(spell.APeace){
                    classArray.push({ name: "Apostle of Peace", level: parseInt(spell.APeace) });
                }
                if(spell.Arc){
                    classArray.push({ name: "Archivist", level: parseInt(spell.Arc) });
                }
                if(spell.Artificer){
                    classArray.push({ name: "Artificer", level: parseInt(spell.Artificer) });
                }
                if(spell.Asn){
                    classArray.push({ name: "Assassin", level: parseInt(spell.Asn) });
                }
                if(spell.Beguiler){
                    classArray.push({ name: "Beguiler", level: parseInt(spell.Beguiler) });
                }
                if(spell.Blg){
                    classArray.push({ name: "Blighter", level: parseInt(spell.Blg) });
                }
                if(spell.Blk){
                    classArray.push({ name: "Blackguard", level: parseInt(spell.Blk) });
                }
                if(spell.Brd){
                    classArray.push({ name: "Bard", level: parseInt(spell.Brd) });
                }
                if(spell.BVal){
                    classArray.push({ name: "Beloved of Valarian", level: parseInt(spell.BVal) });
                }
                if(spell.ChamGwyn){
                    classArray.push({ name: "Champion of Gwynharwyf", level: parseInt(spell.ChamGwyn) });
                }
                if(spell.Clr){
                    classArray.push({ name: "Cleric", level: parseInt(spell.Clr) });
                }
                if(spell.Corrupt){
                    classArray.push({ name: "Corrupt", level: parseInt(spell.Corrupt) });
                }
                if(spell.Dem){
                    classArray.push({ name: "Demonologist", level: parseInt(spell.Dem) });
                }
                if(spell.Drd){
                    classArray.push({ name: "Druid", level: parseInt(spell.Drd) });
                }
                if(spell.Duskblade){
                    classArray.push({ name: "Duskblade", level: parseInt(spell.Duskblade) });
                }
                if(spell.EmBarachiel){
                    classArray.push({ name: "Emissary of Barachiel", level: parseInt(spell.EmBarachiel) });
                }
                if(spell['Exalted Arcanist']){
                    classArray.push({ name: "Exalted Arcanist", level: parseInt(spell['Exalted Arcanist']) });
                }
                if(spell.HB){
                    classArray.push({ name: "Hexblade", level: parseInt(spell.HB) });
                }
                if(spell.Hlr){
                    classArray.push({ name: "Healer", level: parseInt(spell.Hlr) });
                }
                if(spell.Hoard){
                    classArray.push({ name: "The Hoardstealer", level: parseInt(spell.Hoard) });
                }
                if(spell.Holder){
                    classArray.push({ name: "Holder", level: parseInt(spell.Holder) });
                }
                if(spell.HotD){
                    classArray.push({ name: "Hunter of the Dead", level: parseInt(spell.HotD) });
                }
                if(spell.Hrp){
                    classArray.push({ name: "Harper Guide", level: parseInt(spell.Hrp) });
                }
                if(spell.Hth){
                    classArray.push({ name: "Hathran", level: parseInt(spell.Hth) });
                }
                if(spell.IOTDF){
                    classArray.push({ name: "Initiate of Deity", level: parseInt(spell.IOTDF) });
                }
                if(spell.KotC){
                    classArray.push({ name: "Knight of the Chalice", level: parseInt(spell.KotC) });
                }
                if(spell.MH){
                    classArray.push({ name: "Mortal Hunter", level: parseInt(spell.MH) });
                }
                if(spell.Pal){
                    classArray.push({ name: "Paladin", level: parseInt(spell.Pal) });
                }
                if(spell.PUG){
                    classArray.push({ name: "Prime Underdark Guide", level: parseInt(spell.PUG) });
                }
                if(spell.Rgr){
                    classArray.push({ name: "Ranger", level: parseInt(spell.Rgr) });
                }
                if(spell.Sanctified){
                    classArray.push({ name: "Sanctified", level: parseInt(spell.Sanctified) });
                }
                if(spell.Shu){
                    classArray.push({ name: "Shugenja", level: parseInt(spell.Shu) });
                }
                if(spell['Slayer of Domiel']){
                    classArray.push({ name: "Slayer of Domiel", level: parseInt(spell['Slayer of Domiel']) });
                }
                if(spell['Sor/Wiz']){
                    classArray.push({ name: "Sorcerer/Wizard", level: parseInt(spell['Sor/Wiz']) });
                }
                if(spell['Vassal of Bahamut']){
                    classArray.push({ name: "Vassal of Bahamut", level: parseInt(spell['Vassal of Bahamut']) });
                }
                if(spell.Wmg){
                    classArray.push({ name: "Warmage", level: parseInt(spell.Wmg) });
                }
                if(spell.Wuj){
                    classArray.push({ name: "Wu jen", level: parseInt(spell.Wuj) });
                }
                newSpell.castBy = classArray;
                const domainArray = [];
                if(spell.Air){
                    domainArray.push({ name: "Air", level: parseInt(spell.Air) });
                }
                if(spell.Animal){
                    domainArray.push({ name: "Animal", level: parseInt(spell.Animal) });
                }
                if(spell.Artifice){
                    domainArray.push({ name: "Artifice", level: parseInt(spell.Artifice) });
                }
                if(spell.Balance){
                    domainArray.push({ name: "Balance", level: parseInt(spell.Balance) });
                }
                if(spell.Bestial){
                    domainArray.push({ name: "Bestial", level: parseInt(spell.Bestial) });
                }
                if(spell.Blackwater){
                    domainArray.push({ name: "Blackwater", level: parseInt(spell.Blackwater) });
                }
                if(spell.Cavern){
                    domainArray.push({ name: "Cavern", level: parseInt(spell.Cavern) });
                }
                if(spell.Celerity){
                    domainArray.push({ name: "Celerity", level: parseInt(spell.Celerity) });
                }
                if(spell.Celestial){
                    domainArray.push({ name: "Celestial", level: parseInt(spell.Celestial) });
                }
                if(spell.Chaos){
                    domainArray.push({ name: "Chaos", level: parseInt(spell.Chaos) });

                }
                if(spell.Charm){
                    domainArray.push({ name: "Charm", level: parseInt(spell.Charm) });
                }
                if(spell.City){
                    domainArray.push({ name: "City", level: parseInt(spell.City) });
                }
                if(spell.Cold){
                    domainArray.push({ name: "Cold", level: parseInt(spell.Cold) });
                }
                if(spell.Commerce){
                    domainArray.push({ name: "Commerce", level: parseInt(spell.Commerce) });
                }
                if(spell.Community){
                    domainArray.push({ name: "Community", level: parseInt(spell.Community) });
                }
                if(spell.Competition){
                    domainArray.push({ name: "Competition", level: parseInt(spell.Competition) });
                }
                if(spell.Corruption){
                    domainArray.push({ name: "Corruption", level: parseInt(spell.Corruption) });
                }
                if(spell.Courage){
                    domainArray.push({ name: "Courage", level: parseInt(spell.Courage) });
                }
                if(spell.Craft){
                    domainArray.push({ name: "Craft", level: parseInt(spell.Craft) });
                }
                if(spell.Creation){
                    domainArray.push({ name: "Creation", level: parseInt(spell.Creation) });
                }
                if(spell.Darkness){
                    domainArray.push({ name: "Darkness", level: parseInt(spell.Darkness) });
                }
                if(spell.Death){
                    domainArray.push({ name: "Death", level: parseInt(spell.Death) });
                }
                if(spell.Deathbound){
                    domainArray.push({ name: "Deathbound", level: parseInt(spell.Deathbound) });
                }
                if(spell.Deathless){
                    domainArray.push({ name: "Deathless", level: parseInt(spell.Deathless) });
                }
                if(spell.Decay){
                    domainArray.push({ name: "Decay", level: parseInt(spell.Decay) });
                }
                if(spell.Demonic){
                    domainArray.push({ name: "Demonic", level: parseInt(spell.Demonic) });
                }
                if(spell.Destiny){
                    domainArray.push({ name: "Destiny", level: parseInt(spell.Destiny) });
                }
                if(spell.Destruction){
                    domainArray.push({ name: "Destruction", level: parseInt(spell.Destruction) });
                }
                if(spell.Diabolic){
                    domainArray.push({ name: "Diabolic", level: parseInt(spell.Diabolic) });
                }
                if(spell.Domination){
                    domainArray.push({ name: "Domination", level: parseInt(spell.Domination) });
                }
                if(spell.Dragon){
                    domainArray.push({ name: "Dragon", level: parseInt(spell.Dragon) });
                }
                if(spell.Dream){
                    domainArray.push({ name: "Dream", level: parseInt(spell.Dream) });
                }
                if(spell.DrgBlw){
                    domainArray.push({ name: "DrgBlw", level: parseInt(spell.DrgBlw) });
                }
                if(spell.Drow){
                    domainArray.push({ name: "Drow", level: parseInt(spell.Drow) });
                }
                if(spell.Dwarf){
                    domainArray.push({ name: "Dwarf", level: parseInt(spell.Dwarf) });
                }
                if(spell.Earth){
                    domainArray.push({ name: "Dwarf", level: parseInt(spell.Earth) });
                }
                if(spell.Elf){
                    domainArray.push({ name: "Elf", level: parseInt(spell.Elf) });
                }
                if(spell.Endurance){
                    domainArray.push({ name: "Endurance", level: parseInt(spell.Endurance) });
                }
                if(spell.Evil){
                    domainArray.push({ name: "Evil", level: parseInt(spell.Evil) });
                }
                if(spell.Exorcism){
                    domainArray.push({ name: "Exorcism", level: parseInt(spell.Exorcism) });
                }
                if(spell.Family){
                    domainArray.push({ name: "Family", level: parseInt(spell.Family) });
                }
                if(spell.Fate){
                    domainArray.push({ name: "Fate", level: parseInt(spell.Fate) });
                }
                if(spell.Feast){
                    domainArray.push({ name: "Feast", level: parseInt(spell.Feast) });
                }
                if(spell.Fey){
                    domainArray.push({ name: "Fey", level: parseInt(spell.Fey) });
                }
                if(spell.Fire){
                    domainArray.push({ name: "Fire", level: parseInt(spell.Fire) });
                }
                if(spell.Force){
                    domainArray.push({ name: "Force", level: parseInt(spell.Force) });
                }
                if(spell.Glory){
                    domainArray.push({ name: "Glory", level: parseInt(spell.Glory) });
                }
                if(spell.Gnome){
                    domainArray.push({ name: "Gnome", level: parseInt(spell.Gnome) });
                }
                if(spell.Good){
                    domainArray.push({ name: "Good", level: parseInt(spell.Good) });
                }
                if(spell.Greed){
                    domainArray.push({ name: "Greed", level: parseInt(spell.Greed) });
                }
                if(spell.Halfling){
                    domainArray.push({ name: "Halfling", level: parseInt(spell.Halfling) });
                }
                if(spell.Hatred){
                    domainArray.push({ name: "Hatred", level: parseInt(spell.Hatred) });
                }
                if(spell.Healing){
                    domainArray.push({ name: "Healing", level: parseInt(spell.Healing) });
                }
                if(spell.Herald){
                    domainArray.push({ name: "Herald", level: parseInt(spell.Herald) });
                }
                if(spell.Hunger){
                    domainArray.push({ name: "Hunger", level: parseInt(spell.Hunger) });
                }
                if(spell.Illusion){
                    domainArray.push({ name: "Illusion", level: parseInt(spell.Illusion) });
                }
                if(spell.Inquisition){
                    domainArray.push({ name: "Inquisition", level: parseInt(spell.Inquisition) });
                }
                if(spell.Joy){
                    domainArray.push({ name: "Joy", level: parseInt(spell.Joy) });
                }
                if(spell.Knowledge){
                    domainArray.push({ name: "Knowledge", level: parseInt(spell.Knowledge) });
                }
                if(spell.Law){
                    domainArray.push({ name: "Law", level: parseInt(spell.Law) });
                }
                if(spell.Liberation){
                    domainArray.push({ name: "Liberation", level: parseInt(spell.Liberation) });
                }
                if(spell.Life){
                    domainArray.push({ name: "Life", level: parseInt(spell.Life) });
                }
                if(spell.Luck){
                    domainArray.push({ name: "Luck", level: parseInt(spell.Luck) });
                }
                if(spell.Madness){
                    domainArray.push({ name: "Madness", level: parseInt(spell.Madness) });
                }
                if(spell.Magic){
                    domainArray.push({ name: "Magic", level: parseInt(spell.Magic) });
                }
                if(spell.Meditation){
                    domainArray.push({ name: "Meditation", level: parseInt(spell.Meditation) });
                }
                if(spell.Mental){
                    domainArray.push({ name: "Mental", level: parseInt(spell.Mental) });
                }
                if(spell.Metal){
                    domainArray.push({ name: "Metal", level: parseInt(spell.Metal) });
                }
                if(spell.Mind){
                    domainArray.push({ name: "Mind", level: parseInt(spell.Mind) });
                }
                if(spell.Moon){
                    domainArray.push({ name: "Moon", level: parseInt(spell.Moon) });
                }
                if(spell.Mysticism){
                    domainArray.push({ name: "Mysticism", level: parseInt(spell.Mysticism) });
                }
                if(spell.Necro){
                    domainArray.push({ name: "Necro", level: parseInt(spell.Necro) });
                }
                if(spell.Nobility){
                    domainArray.push({ name: "Nobility", level: parseInt(spell.Nobility) });
                }
                if(spell.Ocean){
                    domainArray.push({ name: "Ocean", level: parseInt(spell.Ocean) });
                }
                if(spell.Oracle){
                    domainArray.push({ name: "Oracle", level: parseInt(spell.Oracle) });
                }
                if(spell.Orc){
                    domainArray.push({ name: "Orc", level: parseInt(spell.Orc) });
                }
                if(spell.Pact){
                    domainArray.push({ name: "Pact", level: parseInt(spell.Pact) });
                }
                if(spell.Pain){
                    domainArray.push({ name: "Pain", level: parseInt(spell.Pain) });
                }
                if(spell.Passion){
                    domainArray.push({ name: "Passion", level: parseInt(spell.Passion) });
                }
                if(spell.Pestilence){
                    domainArray.push({ name: "Pestilence", level: parseInt(spell.Pestilence) });
                }
                if(spell.Planning){
                    domainArray.push({ name: "Planning", level: parseInt(spell.Planning) });
                }
                if(spell.Plant){
                    domainArray.push({ name: "Plant", level: parseInt(spell.Plant) });
                }
                if(spell.Pleasure){
                    domainArray.push({ name: "Pleasure", level: parseInt(spell.Pleasure) });
                }
                if(spell.Portal){
                    domainArray.push({ name: "Portal", level: parseInt(spell.Portal) });
                }
                if(spell.Protection){
                    domainArray.push({ name: "Protection", level: parseInt(spell.Protection) });
                }
                if(spell.Purification){
                    domainArray.push({ name: "Purification", level: parseInt(spell.Purification) });
                }
                if(spell.Renewal){
                    domainArray.push({ name: "Renewal", level: parseInt(spell.Renewal) });
                }
                if(spell.Repose){
                    domainArray.push({ name: "Repose", level: parseInt(spell.Repose) });
                }
                if(spell.Retribution){
                    domainArray.push({ name: "Retribution", level: parseInt(spell.Retribution) });
                }
                if(spell.Rune){
                    domainArray.push({ name: "Rune", level: parseInt(spell.Rune) });
                }
                if(spell.Sand){
                    domainArray.push({ name: "Sand", level: parseInt(spell.Sand) });
                }
                if(spell.SaveLife){
                    domainArray.push({ name: "SaveLife", level: parseInt(spell.SaveLife) });
                }
                if(spell.Scalykind){
                    domainArray.push({ name: "Scalykind", level: parseInt(spell.Scalykind) });
                }
                if(spell.Seafolk){
                    domainArray.push({ name: "Seafolk", level: parseInt(spell.Seafolk) });
                }
                if(spell.Shadow){
                    domainArray.push({ name: "Shadow", level: parseInt(spell.Shadow) });
                }
                if(spell.Sky){
                    domainArray.push({ name: "Sky", level: parseInt(spell.Sky) });
                }
                if(spell.Slime){
                    domainArray.push({ name: "Slime", level: parseInt(spell.Slime) });
                }
                if(spell.Spell){
                    domainArray.push({ name: "Spell", level: parseInt(spell.Spell) });
                }
                if(spell.Spider){
                    domainArray.push({ name: "Spider", level: parseInt(spell.Spider) });
                }
                if(spell.Storm){
                    domainArray.push({ name: "Storm", level: parseInt(spell.Storm) });
                }
                if(spell.Strength){
                    domainArray.push({ name: "Strength", level: parseInt(spell.Strength) });
                }
                if(spell.Suffering){
                    domainArray.push({ name: "Suffering", level: parseInt(spell.Suffering) });
                }
                if(spell.Summer){
                    domainArray.push({ name: "Summer", level: parseInt(spell.Summer) });
                }
                if(spell.Summoner){
                    domainArray.push({ name: "Summoner", level: parseInt(spell.Summoner) });
                }
                if(spell.Sun){
                    domainArray.push({ name: "Sun", level: parseInt(spell.Sun) });
                }
                if(spell.Thirst){
                    domainArray.push({ name: "Thirst", level: parseInt(spell.Thirst) });
                }
                if(spell.Time){
                    domainArray.push({ name: "Time", level: parseInt(spell.Time) });
                }
                if(spell.Trade){
                    domainArray.push({ name: "Trade", level: parseInt(spell.Trade) });
                }
                if(spell.Transformation){
                    domainArray.push({ name: "Transformation", level: parseInt(spell.Transformation) });
                }
                if(spell.Travel){
                    domainArray.push({ name: "Travel", level: parseInt(spell.Travel) });
                }
                if(spell.Trickery){
                    domainArray.push({ name: "Trickery", level: parseInt(spell.Trickery) });
                }
                if(spell.Truth){
                    domainArray.push({ name: "Truth", level: parseInt(spell.Truth) });
                }
                if(spell.Tyranny){
                    domainArray.push({ name: "Tyranny", level: parseInt(spell.Tyranny) });
                }
                if(spell.Undeath){
                    domainArray.push({ name: "Undeath", level: parseInt(spell.Undeath) });
                }
                if(spell.VDarkness){
                    domainArray.push({ name: "VDarkness", level: parseInt(spell.VDarkness) });
                }
                if(spell.War){
                    domainArray.push({ name: "War", level: parseInt(spell.War) });
                }
                if(spell.Warforged){
                    domainArray.push({ name: "Warforged", level: parseInt(spell.Warforged) });
                }
                if(spell.Water){
                    domainArray.push({ name: "Water", level: parseInt(spell.Water) });
                }
                if(spell['Watery Death']){
                    domainArray.push({ name: "Watery Death", level: parseInt(spell['Watery Death']) });
                }
                if(spell.Wealth){
                    domainArray.push({ name: "Wealth", level: parseInt(spell.Wealth) });
                }
                if(spell.Weather){
                    domainArray.push({ name: "Weather", level: parseInt(spell.Weather) });
                }
                if(spell.Winter){
                    domainArray.push({ name: "Winter", level: parseInt(spell.Winter) });
                }
                if(spell.Wrath){
                    domainArray.push({ name: "Wrath", level: parseInt(spell.Wrath) });
                }
                newSpell.domainSpell = domainArray;
                newSpell.components = spell.Components;
                newSpell.castingTime = spell['Casting Time'];
                newSpell.range = spell.Range;
                newSpell.effectType = spell['Effect Type'];
                newSpell.effect = spell.Effect;
                newSpell.duration = spell.Duration;
                if(spell['Saving Throw']){
                    newSpell.savingThrow = spell['Saving Throw'];
                }
                if(spell.Resistance){
                    newSpell.resistance = spell.Resistance;
                }
                newSpell.shortDescription = spell['Short Description'];
                if(spell['Medium Description']){
                    newSpell.mediumDescription = spell['Medium Descripton'];
                }
                if(spell['longDescription']){
                    newSpell.longDescription = spell['longDescription'];
                }

                // console.log(`${newSpell.name}: ${newSpell.domainSpell[0].level}`);
                await Spell.create(newSpell);
            })            
        })
    }catch(err) {
        console.log(err);
    }
});