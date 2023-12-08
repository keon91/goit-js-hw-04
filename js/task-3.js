'use strict'
let amount = 0;
const profile = {
    username: "Jacob",
    playTime: 300,
};
changeUsername(newName) = {
    profile.username
}

updatePlayTime(hours) = {
    let amount += profile.playtime
}

getInfo() `${Username} as ${amount} active hours!`
 
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"