/**
 * ADVANCED DOM 
 */

/**
 * Querying
 * 
 * 1. document.documentElement                      -> returns the entire HTML
 * 2. document.head                                 -> returns the head element
 * 3. document.body                                 -> returns tthe body element
 * 4. document.querySelector('css-selector')        -> returns the first HTML element with the specified selector 
 * 5. document.querySelectorAll('css-selector')     -> returns a NodeList of all HTML elements with the specified selector 
 * 6. document.getElementById('id')                 -> returns the HTML element with the specified ID
 * 7. document.getElementByTagName('tag')           -> returns an HTMLCollection of elements with the specified tag
 * 8. document.getElementByClassName('className')   -> returns an HTMLCollection of elements with the specified className
 */


/**
 * CREATING ELEMENTS
 * 
 * 1. const el = document.createElement('HTMLTag')             -> creating a HTML element HTMLTag
 * 2. el.classList.add('className')                            -> adds a className to the created tag
 * 3. el.innerHtml = `<h1>This is a title </h1>`               -> adds content of the HTMLTag(Might contain other html tags that will be considered children of the created HTML element)
 * 4. el.textContent = 'I am a title'                          -> adds content of the HTMLTag(Does not take tags as HTML elements. Any added tags will be taken as plain text)
 * 5. parent.prepend(el)                                       -> adds the created element as first child of the parent
 * 6. parent.append(el)                                        -> adds the created element as last child of the parent
 * 7. el.cloneNode(true)                                       -> returns a copy of the el element
 * 8. parent.before(el) and parent.after(el)                   -> adds the element respectively before and after the parent element(el is not part of the parent in this case).
 */

/**
 * DELETING
 * 
 * 1. el.remove();                                             -> removes the element fromt he DOM
 * 2. parent.removeChild(el)                                   -> ancient way of removing a child(selecting parent then removing its child)
 */

/**
 * STYLES
 * 
 * 1. el.style.property = value                                         -> changes the property style of element to value
 * 2. console.log(e.style.opacity)                                      -> If the opacity is not an inline style, nothing will be printed. A solution to get access to styles from non-inline styles is to use ** getComputedStyle(el).opacity **
 * 3. document.documentElement.style.setProperty(propertyName, value)   -> allows to change the value of the css variable propertyName
 * 
 */

/**
 * ATTRIBUTES
 * 
 * <img src="logo.png" alt="Main logo" data-version-number=1.5 company="ALU"/>
 * const logo = document.querySelector('.logo');
 * 
 * 1. logo.src                                                  -> returns the absolute value of the src and works only on standard attributes and not added ones
 * 2. logo.getAttribute(attribute)                              -> returns the value of the attribute specified, whether it is standard or not. If the attribute is an src or an href, the value returned will be a relative value
 * 3. logo.dataset.versionNumber                                -> returns the value of the data-version-number of the element logo. Works only on data attributes
 */

/**
 * MORE CLASSLIST METHODS
 * 
 * 1. logo.classList.add('class1', 'class2', 'class3' )         -> adds classes specified as arguments to the logo element
 * 2. logo.classList.remove(class);                             -> removes the class specified from the elememt classList
 * 3. logo.classList.toggle(class);                             -> adds the specified class if not present in the classList, else removes it
 * 4. logo.classList.contains(class);                           -> checks if the classList of the element contains the specified class
 */