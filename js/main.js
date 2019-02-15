console.log('Hello');
var hideBtn = document.querySelector('#hide-btn');
var sideBar = document.querySelector('.side-navbar');
var hideNavArrow = document.querySelector('.arrow-left');
var hideBottomBtn = document.querySelector('.hide-job-description-button');
var hideBottomArrow = document.querySelector('.arrow-up');
var jobTable = document.querySelector('.job-description-table');
var asideLinks = document.querySelector('.social-links ul')
var counter = 0;
var counterTwo = 0;

hideBtn.addEventListener('click', hideSideBar);
hideBottomBtn.addEventListener('click', hideBottomSection)

function hideSideBar() {
  counter++;
  if (counter % 2) {
    // sideBar.classList.add('not-displayed');
    sideBar.style.display = "none"
    hideNavArrow.classList.add('arrow-right');
  } else {
    sideBar.style.display = "block"
    hideNavArrow.classList.remove('arrow-right');
  }
}

function hideBottomSection() {
  counterTwo++;
  if (counterTwo % 2) {
    jobTable.style.visibility = "hidden"
    asideLinks.style.visibility = "hidden"
    hideBottomArrow.classList.add('arrow-down');
  } else {
    jobTable.style.visibility = "visible"
    asideLinks.style.visibility = "visible"
    hideBottomArrow.classList.remove('arrow-down');
  }
}