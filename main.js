// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
const btns = document.querySelectorAll('.like-glyph');
for (const btn of btns) { // goes through all the like buttons

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    mimicServerCall()
      .then( () => {
        // if the heart is empty
        if (btn.textContent === EMPTY_HEART) {
          btn.textContent = FULL_HEART;
          btn.classList.add('activated-heart');
          console.log('empty clicked');
        }
        //if the heart is full
        else {
          btn.textContent = EMPTY_HEART; 
          btn.classList.remove('activated-heart');
          console.log('filled clicked');
        }
      })
      .catch( () => {
        const errormsg = document.querySelector('#modal');
        errormsg.removeAttribute('class');
        setTimeout(() => errormsg.setAttribute('class', 'hidden'), 3000);
      });
  });
};

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
