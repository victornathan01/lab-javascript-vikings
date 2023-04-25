// Soldier
class Soldier {
  constructor(health, strength) {
    //construtor só vai as PROPRIEDADES / ATRIBUTOS
    this.health = health;
    this.strength = strength;
  }

  //métodos: VÃO PRA FORA DO MEU CONSTRUTOR
  // métodos === functions
  //DENTRO da classe -> só acessa as propriedades da classe com a palavra THIS
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  //Vikings vai ter TODOS os métodos e propriedades que um SOLDIER tem.
  constructor(name, health, strength) {
    //super() declara quais as propriedades que nós queremos aproveitar da nossa herença
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    //tirar da saúde o dano
    this.health -= damage;

    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    //escolher um saxon randomicamente
    //escolher um index aleatório que respeite o tamanho do meu army

    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length);

    let saxon = this.saxonArmy[indexSaxon];
    let viking = this.vikingArmy[indexViking];

    let result = saxon.receiveDamage(viking.attack());

    //retirar o saxo do exército se ele estiver morto

    if (saxon.health <= 0) {
      this.saxonArmy.splice(indexSaxon, 1);
    }

    return result;
  }

  saxonAttack() {
    //criando index aleatoriamente
    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    // capturando os soldados aleatoriamente
    let saxon = this.saxonArmy[indexSaxon];
    let viking = this.vikingArmy[indexViking];

    let result = viking.receiveDamage(saxon.attack());

    if (viking.health <= 0) {
      this.vikingArmy.splice(indexViking, 1);
    }

    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }

    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }

    return "Vikings and Saxons are still in the thick of battle.";
  }
}

//primeiro criar meus soldados

let viking1 = new Viking("Karen", 20, 10);
let viking2 = new Viking("Ale", 30, 10);

console.log(viking1);
console.log(viking2);

let saxon1 = new Saxon(15, 10);
let saxon2 = new Saxon(15, 10);

console.log(saxon1);
console.log(saxon2);

//
let war = new War();

war.addViking(viking1);
war.addViking(viking2);

war.addSaxon(saxon1);
war.addSaxon(saxon2);

console.log(war);

//combate

console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus);

console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus);

console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus);
