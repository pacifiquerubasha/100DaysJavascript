
/**
 * DOM TRAVERSING
 */

/**
 * const container = document.querySelector('.container);
 * container.innerHtml = `<div class="child"> This is the first container child</div>`;
 * 
 * const child = document.querySelector('.child');
 * child.style.color = "var(--color-primary)";
 */


/**
 *  container.childNodes                                            -> accesses all nodes inside the container including commnents and texts
 *  container.children                                              -> accesses only nested elements inside the container
 *  container.firstElementChild and container.lastElementChild      -> access respectively the first and last children
 *  
 *  child.parentNode and child.parentElement                        -> access the parent of the element child
 *  child.closest('.container');                                    -> access the closest ancestor with the specified class/id
 *  child.previousElementSibling and child.nextElementSibling       -> access respectively the previous and next sibling of the child element
 *                                      
 *  
 */


/**
 * AVOID USING "FOR EACH" TO GO THROUGH NODELISTS(PERFORMANCE ISSUES);
 * 
 * return; will stop the execution of a function
 * 
 * child.getBoundingClientRect() will return the coordinates of the child element
 * 
 * AVOID USING SCROLL EVENT (PERFORMANCE ISSUES)
 * 
 * USE INTERSECTION OBSERVER INSTEAD
 */

/**
 * INTERSECTION OBSERVER    ============MDN==========
 * 
 * The Intersection Observer API provides a way to asynchronously 
 * observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.
 * 
 */

const options = {
    root:null,      //means that the parement element to make the observation is the document
    rootMargin:0,   //specifies the margin to keep around the root
    threshold: 1    //means that the intersection callback will be executed when the element is 100% visible on the root

}


const callback = (entries)=>{
    entries.forEach((entry) => {
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
      });
}

const observer = new IntersectionObserver(callback, options)