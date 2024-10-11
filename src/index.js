let breed = [];

document.addEventListener('DOMContentLoaded', () => {
    loadImages();
    loadBreedOptions();
});

function loadImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res => res.json())
        .then(data => {
            data.message.forEach(image => addImage(image))
        });
}

function addImage(dogPicURL) {
    let container = document.querySelector('#dog-image-container')
    let newImage = document.createElement('img');
    newImage.scr = dogPicURL;
    container.appendChild(newImage);
}

function loadBreedOptions() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(data => {

            breeds = Object.keys(data.message);
            updateBreedList(breeds);
            addBreedSelectListener();
        });
}

function updateBreedList(element){
    let breedList = document.querySelector('#breed-list');
    removeChildren(breedList);
    breeds.forEach(breed=>addBreed(breed));

}

function removeChildren(element){
    let child = element.lastElementChild;
    while(child){
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

function selectBreedStartingWith(){
    let letter = document.querySelector('#letter-input').value;
    updateBreedList(breeds.filter(breed=>breed.startsWith(letter)));
}

function addBreedSelectListener() {
    let breedDropDown = document.querySelector('#breed-dropdown')
    breedDropDown.addEventListener('change', (e)=>{
        selectBreedStartingWith(e.target.value);
    })
}

function addBreed() {
    let ul = document.querySelector('#dog-breeds')
    let li = docuument.createElement('li')

    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor)
}

function updateColor(e){
  e.target.style.color = 'red'; .then(res => res.json())
  .then(results => {

    breeds = Object.keys(results.message);
    updateBreedList(breeds);
    addBreedSelectListener();
  });
}



