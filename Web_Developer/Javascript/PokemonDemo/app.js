// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');

for (let i = 1; i <= 151; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv')
    const newlabel = document.createElement('span');
    const newImg = document.createElement('img');

    newImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    newImg.src += `${i}.png`

    newlabel.innerText = `num: ${i}`;

    newDiv.appendChild(newImg)
    newDiv.appendChild(newlabel);

    container.appendChild(newDiv);
}