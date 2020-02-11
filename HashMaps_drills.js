const HashMap = require("./HashMaps");

function main() {
    const lotr = new HashMap();

    lotr.set("Hobbit", "Bilbo");
    lotr.set("Hobbit", "Frodo");
    lotr.set("Wizard", "Gandolf");
    lotr.set("Human", "Aragon");
    lotr.set("Elf", "Legolas");
    lotr.set("Maiar", "The Necromancer");
    lotr.set("Maiar", "Sauron");
    lotr.set("RingBearer", "Gollum");
    lotr.set("LadyOfLight", "Galadriel");
    lotr.set("HalfElven", "Arwen");
    lotr.set("Ent", "Treebeard");
    console.log(lotr);
}
main();

// Print your hash map and notice the length and items that are hashed in your hash map. Have you hashed all the items you were asked to?
// Some values were overwritten

// Retrieve the value that is hashed in the key "Maiar" and Hobbit.
// What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.
// Sauron & Frodo. As these were set after the previous ones at the same hash and overwritten

// What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
// Capicity is 24.

// What is the output of the following code? explain your answer.
const WhatDoesThisDo = function() {
    let str1 = "Hello World.";
    let str2 = "Hello World.";
    let map1 = new HashMap();
    map1.set(str1, 10);
    map1.set(str2, 20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3, 20);
    map2.set(str4, 10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
};
WhatDoesThisDo();
// answer 20 & 10

// Remove duplicates
// function removeDuplicates(str) {
//     let remove = new HashMap();
//     let afterRemoved = "";
//     for (let i = 0; i < str.length; i++) {
//         remove.set(str.charAt(i), str.charAt(i));
//     }
//     for (let i in remove._hashTable) {
//         afterRemoved = afterRemoved + remove.getByIndex(i);
//     }
//     return afterRemoved;
// }

function removeDuplicates(string) {
    const remove = new HashMap();
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        try {
            remove.get(string[i]);
        } catch (e) {
            remove.set(string[i], string[i]);
            newString += string[i];
        }
    }
    console.log(newString);
}

removeDuplicates("google all that you think can think of");
