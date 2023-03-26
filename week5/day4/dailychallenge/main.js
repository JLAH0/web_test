const form = document.querySelector('#libform')
form.addEventListener('submit', handlesubmit);

function handlesubmit(e) {
    e.preventDefault()


const nounInput = document.querySelector('#noun');
  const adjectiveInput = document.querySelector('#adjective');
  const personInput = document.querySelector('#person');
  const verbInput = document.querySelector('#verb');
  const placeInput = document.querySelector('#place');

  let filled = true

//   Make sure the values are not empty

if (nounInput.value === '') {
    alert('please fill in the Noun field before');
    filled = false
}

if (adjectiveInput.value === '') {
    alert('please fill in the Adjective field before');
    filled = false
}

if (personInput.value === '') {
    alert('please fill in the Someone Name field before');
    filled = false
}

if (verbInput.value === '') {
    alert('please fill in the Verb field before');
    filled = false
}

if (placeInput.value === '') {
    alert('please fill in the Place field before');
    filled = false
}

if (!filled) {
    return;
}

// Write a story that uses each of the values.
const story = document.querySelector('#story')

const noun = nounInput.value;
  const adjective = adjectiveInput.value;
  const person = personInput.value;
  const verb = verbInput.value;
  const place = placeInput.value;
  const generatedStory = `${noun}, ${adjective}, ${person}, ${verb}, ${place}`;
  story.textContent = generatedStory;
}

// Add a “shuffle” button

const shuf = document.querySelector('#shuf-button')
shuf.addEventListener('click', shuffleValues);

function shuffleValues() {
  const inputs = Array.from(form.elements).filter(element => element.type === 'text');
  const values = inputs.map(input => input.value);
  for (let i = values.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }
  inputs.forEach((input, index) => input.value = values[index]);
}