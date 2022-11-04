/**
 * DOM MANIPULATION
 * 
 * =========QUERYSELECTORALL 
 * Used to query all elements with the css selector
 * 
 * =========CLASSLIST
 * Used to access the classes of an html element
 * Methods of Classlist 
 * add(className) -> add class
 * remove(className) -> remove class
 * contains(className) -> checks if the classList contains the specific class
 * 
 * addEventListener can take, as a second argument an external function instead of an anonymous callback
 * 
 * =========KEYBOARD EVENTS
 * Keyboard events are accessed by passing an event as parameter of the function to be called once the event is triggered
 * function(ev){
 *      const eventKey = ev.key
 * }
 * 
 * 
 */

const openModal = (ev)=>{
    console.log(`MODAL OPENED BY CLICKING ${ev.key}`)
}

const allButtons = document.querySelectorAll('button');

for(const button of allButtons){
    button.addEventListener('keyup', openModal);
}