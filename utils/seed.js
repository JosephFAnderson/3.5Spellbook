const csv = require('csv-parser');
const fs = require('fs');
const results = [];

const seedData = () => {
    try{    
        fs.createReadStream('./utils/allSpells.csv')
        .pipe(csv())
        .on('data', data => results.push(data))
        .on('end', () => {
            results.forEach(spell => {
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
                console.log(newSpell);
            })
        })
    }catch(err) {
        console.log(err);
    }
}

seedData();