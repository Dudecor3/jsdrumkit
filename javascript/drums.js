function playSound(event) {
    // const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); // ES6 string
    // const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); //ES6 string

    var audio = document.querySelector("audio[data-key=\"" + event.keyCode + "\"]");
    var key = document.querySelector(".key[data-key=\"" + event.keyCode + "\"]");
    if (audio != audio) {
        return;
    } //stop function running all together
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return; //skip if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

/* You can use either the for each or the for loop, they both work the same as
 ** the loop below
 keys.forEach(key => key.addEventListener('transitionend', removeTransition));
 keys.forEach(function (key) {
 key.addEventListener('transitionend', removeTransition);
 });
 */

for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('transitionend', removeTransition);
}


window.addEventListener('keydown', playSound);