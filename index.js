let rand_facts = [
    "I am an Aries sun, Pisces moon. Do with that what you will.",
    "I despise mushrooms more than any other food. I am, however, starting to tolerate them.",
    "I used to exclusively lucid dream, but lost the ability when I went to college???"
]


let index=Math.round((Math.random() * 2));

console.log(index);

document.getElementById("rand-fact").innerHTML = rand_facts[index];