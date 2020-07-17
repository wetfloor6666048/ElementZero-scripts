/*
A .wild command to teleport you to a random location

Original concept by nickg two
*/

import {
    getPlayerByNAME
} from "ez:player";

import {
    onChat
} from "ez:chat";

const system = server.registerSystem(0, 0);
console.log("wild.js loaded");

let wild = ['.wild'];

onChat((cmdObject) => {
    try {
        if (cmdObject.content === wild[0]) {
            let player = getPlayerByNAME(cmdObject.sender);
            let playerName = player.name;
            let playerXuid = player.xuid;

            //this below uses the spreadplayers command to teleport the player to a random location, you can change the numbers to change the places where it will teleport players
            system.executeCommand(`execute @a[name="${playerName}"] ~ ~ ~ spreadplayers 0 0 300 8000 @s`, () => {});
        }
    } catch(err) {
        console.error(err);
    }
});
