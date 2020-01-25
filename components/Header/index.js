// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  let headerEl = document.createElement('div');
  headerEl.classList.add('header');

  let dateEl = document.createElement('span');
  dateEl.classList.add('date');
  dateEl.textContent = "SMARCH 28, 2019";

  let h1El = document.createElement('h1');
  h1El.textContent = "LambdaTimes";

  let tempEl = document.createElement('span');
  tempEl.classList.add('temp');
  tempEl.textContent = "98\u00B0";

  [dateEl, h1El, tempEl].forEach(element => {
    headerEl.appendChild(element);
  });

  return headerEl;
}

document.querySelector('.header-container').appendChild(Header());
