document.getElementById("luffy").addEventListener("click", pickLuffy);
document.getElementById("zoro").addEventListener("click", pickZoro);
document.getElementById("nami").addEventListener("click", pickNami);
document.getElementById("usopp").addEventListener("click", pickUsopp);
document.getElementById("sanji").addEventListener("click", pickSanji);
document.getElementById("chopper").addEventListener("click", pickChopper);
document.getElementById("robin").addEventListener("click", pickRobin);
document.getElementById("franky").addEventListener("click", pickFranky);
document.getElementById("brook").addEventListener("click", pickBrook);
document.getElementById("jimbei").addEventListener("click", pickJimbei);
const luffy = {
  name: "Monkey D. Luffy",
  position: "Captain",
  age: 19,
  bounty: `1.5B`,
  description: `Optimistic and generally good-hearted, he is not as dimwitted as many
    believe him to be, and he often demonstrates more understanding than the
    other characters expect. Knowing the danger ahead, Luffy is willing to
    risk his life to become King of the Pirates and protect his crew.`,
};
const zoro = {
  name: "Roronoa Zoro",
  positon: "First Mate",
  age: 21,
  bounty: `320M`,
  description: `Zoro is a muscular man of average height with lightly tanned skin. He always carries his three swords along with him, bundled up with a green haramaki over his right hip, allowing him to easily draw them with his left hand. `,
};
const nami = {
  name: "Nami",
  positon: "Navigator",
  age: 20,
  bounty: `66M`,
  description: `"Cat Burglar" Nami is the navigator of the Straw Hat Pirates. She is the third member of the crew and the second to join, doing so during the Orange Town Arc. She is the adoptive sister of Nojiko after the two were orphaned and taken in by Bell-mère.`,
};
const usopp = {
  name: "Usopp",
  positon: "Sniper",
  age: 19,
  bounty: `200M`,
  description: `Usopp is the son of Yasopp and Banchina. He was born and raised in Syrup Village, serving as "captain" of the Usopp Pirates and being Kaya's close friend. After working with the Straw Hats to defeat Kuro and the Black Cat Pirates, he was invited to join the crew.`,
};
const sanji = {
  name: "Sanji",
  positon: "Cook",
  age: 21,
  bounty: `177M`,
  description: `Sanji is a slim, muscular, long-legged man with blond hair which he keeps brushed over one side of his face. Before the timeskip, this was the left side. After the two year timeskip, he switched his hairstyle so that it covers the right side.`,
};
const chopper = {
  name: "Tony Tony Chopper",
  positon: "Ship Doctor",
  age: 17,
  bounty: `100`,
  description: `Chopper is a reindeer that ate the Hito Hito no Mi, a Devil Fruit that allows its user to transform into a human hybrid or a human at will. He came from Drum Island and was taught how to be a doctor by his two parental figures, Doctors Hiriluk and Kureha.`,
};
const robin = {
  name: "Nico Robin",
  positon: "Archeologist",
  age: 30,
  bounty: `130M`,
  description: `Appearance. Nico Robin is a tall and slender young woman with shoulder-length black hair, and eyes that have dark, wide pupils (her eyes are depicted to be brown in manga as well as the tenth and twelfth movies; while in the anime, her eyes are depicted to be blue). She also has a long, thin and defined nose.`,
};
const franky = {
  name: "Franky",
  positon: "Shipwright",
  age: 36,
  bounty: `94M`,
  description: `As a direct result of the modifications that he conducted upon himself as well as the years spent as a ship dismantler, bounty hunter, and street thug in Water 7, Franky is a powerfully built man with a height of at least seven feet, making him the third-tallest member of the Straw Hat crew, after Jimbe and Brook.`,
};
const brook = {
  name: "Brook",
  position: "Musician",
  age: 90,
  bounty: "83M",
  description:
    "Brook aka Dead Bones later Soul King is the musician of the Straw Hat Pirates and one of the main characters of One Piece. He is a skeleton that the Straw Hats found on board of a ghost ship after drifting into the Florian Triangle. He is a Devil Fruit user who ate the Yomi Yomi no Mi, and is undead, having been brought back into a pseudo-immortal state because of its powers.",
};
const jimbei = {
  name: "Jimbei",
  positon: "Helmsman",
  age: 46,
  bounty: `400M`,
  description: `Jimbe is a large blue whale shark fish-man and the current tallest member of the Straw Hat Pirates. He has a stocky build similar to that of a sumo wrestler and a face that is commonly associated with various Japanese demons such as the oni.`,
};
function pickLuffy() {
  const luffyValues = Object.values(luffy);

  document.querySelector(
    ".name"
  ).innerHTML = `<strong>Name:</strong> ${luffyValues[0]}`;
  document.querySelector(
    ".position"
  ).innerHTML = `<strong>Position:</strong> ${luffyValues[1]}`;
  document.querySelector(
    ".age"
  ).innerHTML = `<strong>Age:</strong> ${luffyValues[2]}`;
  document.querySelector(
    ".bounty"
  ).innerHTML = `<strong>Bounty:</strong> ${luffyValues[3]}`;
  document.querySelector(
    ".description"
  ).innerHTML = `<strong>Description:</strong> ${luffyValues[4]}`;
}
function pickZoro() {
  const zoroValues = Object.values(zoro);

  document.querySelector(
    ".name"
  ).innerHTML = `<strong>Name:</strong>${zoroValues[0]}`;
  document.querySelector(
    ".position"
  ).innerHTML = `<strong>Position:</strong> ${zoroValues[1]}`;
  document.querySelector(
    ".age"
  ).innerHTML = `<strong>Age:</strong> ${zoroValues[2]}`;
  document.querySelector(
    ".bounty"
  ).innerHTML = `<strong>Bounty:</strong> ${zoroValues[3]}`;
  document.querySelector(
    ".description"
  ).innerHTML = `<strong>Description:</strong> ${zoroValues[4]}`;
}
function pickNami() {
  const namiValues = Object.values(nami);

  document.querySelector(
    ".name"
  ).innerHTML = `<strong>Name:</strong> ${namiValues[0]}`;
  document.querySelector(
    ".position"
  ).innerHTML = `<strong>Position:</strong> ${namiValues[1]}`;
  document.querySelector(
    ".age"
  ).innerHTML = `<strong>Age:</strong> ${namiValues[2]}`;
  document.querySelector(
    ".bounty"
  ).innerHTML = `<strong>Bounty:</strong> ${namiValues[3]}`;
  document.querySelector(
    ".description"
  ).innerHTML = `<strong>Description:</strong> ${namiValues[4]}`;
}
function pickUsopp() {
  const usoppValues = Object.values(usopp);

  document.querySelector(
    ".name"
  ).innerHTML = `<strong>Name:</strong> ${usoppValues[0]}`;
  document.querySelector(
    ".position"
  ).innerHTML = `<strong>Position:</strong> ${usoppValues[1]}`;
  document.querySelector(
    ".age"
  ).innerHTML = `<strong>Age:</strong> ${usoppValues[2]}`;
  document.querySelector(
    ".bounty"
  ).innerHTML = `<strong>Bounty:</strong> ${usoppValues[3]}`;
  document.querySelector(
    ".description"
  ).innerHTML = `<strong>Description:</strong> ${usoppValues[4]}`;
}
function pickFranky() {
  const frankyValues = Object.values(franky);

  document.querySelector(
    ".name"
  ).innerHTML = `<strong>Name:</strong> ${frankyValues[0]}`;
  document.querySelector(
    ".position"
  ).innerHTML = `<strong>Position:</strong> ${frankyValues[1]}`;
  document.querySelector(
    ".age"
  ).innerHTML = `<strong>Age:</strong> ${frankyValues[2]}`;
  document.querySelector(
    ".bounty"
  ).innerHTML = `<strong>Bounty:</strong> ${frankyValues[3]}`;
  document.querySelector(
    ".description"
  ).innerHTML = `<strong>Description:</strong> ${frankyValues[4]}`;
}
function pickJimbei() {
  const jimbeiValues = Object.values(jimbei);

  document.querySelector(
    ".name"
  ).innerHTML = `<strong>Name:</strong> ${jimbeiValues[0]}`;
  document.querySelector(
    ".position"
  ).innerHTML = `<strong>Position:</strong> ${jimbeiValues[1]}`;
  document.querySelector(
    ".age"
  ).innerHTML = `<strong>Age:</strong> ${jimbeiValues[2]}`;
  document.querySelector(
    ".bounty"
  ).innerHTML = `<strong>Bounty:</strong> ${jimbeiValues[3]}`;
  document.querySelector(
    ".description"
  ).innerHTML = `<strong>Description:</strong> ${jimbeiValues[4]}`;
}
function pickChopper() {
  const chopperValues = Object.values(chopper);

  document.querySelector(
    ".name"
  ).innerHTML = `<strong>Name:</strong> ${chopperValues[0]}`;
  document.querySelector(
    ".position"
  ).innerHTML = `<strong>Position:</strong> ${chopperValues[1]}`;
  document.querySelector(
    ".age"
  ).innerHTML = `<strong>Age:</strong> ${chopperValues[2]}`;
  document.querySelector(
    ".bounty"
  ).innerHTML = `<strong>Bounty:</strong> ${chopperValues[3]}`;
  document.querySelector(
    ".description"
  ).innerHTML = `<strong>Description:</strong> ${chopperValues[4]}`;
}
function pickSanji() {
  const sanjiValues = Object.values(sanji);

  document.querySelector(
    ".name"
  ).innerHTML = `<strong>Name:</strong> ${sanjiValues[0]}`;
  document.querySelector(
    ".position"
  ).innerHTML = `<strong>Position:</strong> ${sanjiValues[1]}`;
  document.querySelector(
    ".age"
  ).innerHTML = `<strong>Age:</strong> ${sanjiValues[2]}`;
  document.querySelector(
    ".bounty"
  ).innerHTML = `<strong>Bounty:</strong> ${sanjiValues[3]}`;
  document.querySelector(
    ".description"
  ).innerHTML = `<strong>Description:</strong> ${sanjiValues[4]}`;
}
function pickRobin() {
  const robinValues = Object.values(robin);

  document.querySelector(
    ".name"
  ).innerHTML = `<strong>Name:</strong> ${robinValues[0]}`;
  document.querySelector(
    ".position"
  ).innerHTML = `<strong>Position:</strong> ${robinValues[1]}`;
  document.querySelector(
    ".age"
  ).innerHTML = `<strong>Age:</strong> ${robinValues[2]}`;
  document.querySelector(
    ".bounty"
  ).innerHTML = `<strong>Bounty:</strong> ${robinValues[3]}`;
  document.querySelector(
    ".description"
  ).innerHTML = `<strong>Description:</strong> ${robinValues[4]}`;
}
function pickBrook() {
  const brookValues = Object.values(brook);

  document.querySelector(
    ".name"
  ).innerHTML = `<strong>Name:</strong> ${brookValues[0]}`;
  document.querySelector(
    ".position"
  ).innerHTML = `<strong>Position:</strong> ${brookValues[1]}`;
  document.querySelector(
    ".age"
  ).innerHTML = `<strong>Age:</strong> ${brookValues[2]}`;
  document.querySelector(
    ".bounty"
  ).innerHTML = `<strong>Bounty:</strong> ${brookValues[3]}`;
  document.querySelector(
    ".description"
  ).innerHTML = `<strong>Description:</strong> ${brookValues[4]}`;
}
