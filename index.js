class User {
  constructor(name, surname, age, address) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.address = address;
  }
}

function confrontoEtà(x, y) {
  if (x.age > y.age) {
    console.log(x.name + " è più grande di " + y.name);
  } else if (x.age < y.age) {
    console.log(y.name + " è più grande di " + x.name);
  } else {
    console.log(x.name + " e " + y.name + ", hanno la stessa età.");
  }
}

const utente1 = new User("Mario", "Mario", 31, "Collina Fungosa");
const utente2 = new User("Luigi", "Mario", 31, "Via Koopa");
confrontoEtà(utente1, utente2);

const petArray = [];

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwner(anotherPet) {
    return this.ownerName.toLowerCase === anotherPet.ownerName.toLowerCase;
  }
}

document.getElementById("petForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const pet = new Pet(petName, ownerName, species, breed);
  addPetToList(pet);
  addPetToArray(pet);
});

function addPetToArray(pet) {
  petArray.push(pet);
}

function compareOwners() {
  console.log(petArray(0).hasSameOwner(petArray(1)));
}

function addPetToList(pet) {
  const petList = document.getElementById("petList");
  const petItem = document.createElement("li");
  petItem.textContent = `${pet.petName} (${pet.species} - ${pet.breed}), proprietario: ${pet.ownerName}`;
  petList.appendChild(petItem);

  // Reset form fields
  document.getElementById("petForm").reset();
}
