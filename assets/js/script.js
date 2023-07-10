// fighter 1
let Igor = new Warrior("Teemo");

// fighter 2
let Tranzin = new LittleMonster();

// fighter 1 element (id)
let fighterOne = document.querySelector("#fighter--one");

// fighter 2 element (id)
let fighterTwo = document.querySelector("#fighter--two");

// log
let log = new Log(document.querySelector(".log"));

// instância da luta entre os dois passando as duas instâncias de fighter
let fighter = new Fighter(Igor, Tranzin, fighterOne, fighterTwo, log);

fighter.start();
