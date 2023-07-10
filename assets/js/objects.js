// classe para personagens
class Person {
    life;
    maxLife;
    attack;
    defense;

    constructor(name) {
        this.name = name;
    }
}

// classe guerreiro que herda de personagem (extends)
class Warrior extends Person {
    constructor(name) {
        super(name);
        this.life = 100;
        this.maxLife = this.life;
        this.attack = 10;
        this.defense = 8;
    }
}

// classe mago que herda de personagem (extends)

class Mage extends Person {
    constructor(name) {
        super(name);
        this.life = 80;
        this.maxLife = this.life;
        this.attack = 18;
        this.defense = 5;
    }
}

// classe monstro fraco que herda de personagem (extends)

class LittleMonster extends Person {
    constructor() {
        super("Little Monster");
        this.life = 80;
        this.maxLife = this.life;
        this.attack = 8;
        this.defense = 5;
    }
}

// classe monstro forte que herda de personagem (extends)

class BigMonster extends Person {
    constructor() {
        super("Big Monster");
        this.life = 120;
        this.maxLife = this.life;
        this.attack = 15;
        this.defense = 12;
    }
}

class Fighter {
    constructor(
        fighter1,
        fighter2,
        fighter1Element,
        fighter2Element,
        logElement
    ) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1Element = fighter1Element;
        this.fighter2Element = fighter2Element;
        this.logElement = logElement;
    }

    start() {
        this.update();

        // -- Ataque
        this.fighter1Element
            .querySelector(".attackButton")
            .addEventListener("click", () => {
                this.attack(this.fighter1, this.fighter2);

                this.desabiliteButton(this.fighter2, this.fighter1Element);
            });

        this.fighter2Element
            .querySelector(".attackButton")
            .addEventListener("click", () => {
                this.attack(this.fighter2, this.fighter1);

                this.desabiliteButton(this.fighter1, this.fighter2Element);
            });
    }

    desabiliteButton(attacked, attackedElement) {
        if (attacked.life <= 0) {
            attackedElement
                .querySelector(".attackButton")
                .setAttribute("disabled", "true");
        }
    }

    update() {
        // Fighter 1

        // -- Life
        let lifeFighter1 = (this.fighter1.life / this.fighter1.maxLife) * 100;

        this.fighter1Element.querySelector(
            ".bar"
        ).style.width = `${lifeFighter1}%`;

        // -- Name
        this.fighter1Element.querySelector(".name").innerHTML = `${
            this.fighter1.name
        } - ${this.fighter1.life.toFixed(1)} HP`;

        // **********************************

        // Fighter 2

        // -- Life
        let lifeFighter2 = (this.fighter2.life / this.fighter2.maxLife) * 100;

        this.fighter2Element.querySelector(
            ".bar"
        ).style.width = `${lifeFighter2}%`;

        // -- Name
        this.fighter2Element.querySelector(".name").innerHTML = `${
            this.fighter2.name
        } - ${this.fighter2.life.toFixed(1)} HP`;
    }

    attack(attacking, attacked) {
        let multiplyAttack = (Math.random() * 2).toFixed(2);
        let multiplyDefense = (Math.random() * 2).toFixed(2);

        let actualAttack = multiplyAttack * attacking.attack;
        let actualDefense = multiplyDefense * attacked.defense;

        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            this.logElement.msg(
                `${attacking.name} causou ${actualAttack.toFixed(
                    2
                )} de dano em ${attacked.name}`
            );
        } else {
            this.logElement.msg(
                `${attacked.name} conseguiu defender ${actualAttack} de ataque de ${attacking.name}`
            );
        }

        if (attacked.life <= 0) {
            attacked.life = 0;
        }

        this.update();
    }
}

class Log {
    constructor(msgElement) {
        this.msgElement = msgElement;
    }

    msg(msg) {
        let createLi = document.createElement("li");
        createLi.innerText = msg;

        this.msgElement.appendChild(createLi);
    }
}
