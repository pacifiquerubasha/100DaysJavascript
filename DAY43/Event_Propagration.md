
 # NOTES
 
 1. `el.getBoundingClientRect()`: returns a DOMRect object that provides information about the size of an element and its position relative to the viewport

 2. `window.scrollTo()`: scrolls to a particular set of coordinates in the document

 3. `window.pageXOffset`:This is a property that returns the px o doscument has scrolled from the upper left corner of the window.

 4. `scrollIntoView()`: scrolls the element into the visible area of the browser window.

 5. `mouseenter`: an event that occurs when mouse is hovered over the specified element


 6. `el.removeEventListener()`: removes an event listener that was attached to the event target.
 This is done by identifying the evnt type and the event listener function. Syntax: `removeEventListener(type, listener)`



# Bubbling
 When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

 `event.stopPropagation()` is the method used to stop bubbling


# Capturing

The opposite of bubbling. The event travels from parents to children


