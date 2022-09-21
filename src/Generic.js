// -----------------------------------------------------------------------
// Generic.js
// Contributors:
//  - Piotr Wyszomirski
//	- Piotr Czyżewski

const visibleClass = "visible-transition";
const invisibleClass = "invisible-transition";

function getElementVisibility(element) {
    let classList = element.classList;
    let visible = classList.contains(visibleClass);
    let invisible = classList.contains(invisibleClass);
    return visible || !invisible;
}

// sets the visibility of an element to the specified value
function setElementVisibilityTransition(element, value) {
    let classList = element.classList;
    if (value == false) {
        classList.remove(visibleClass);
        classList.add(invisibleClass);
    }
    else {
        classList.remove(invisibleClass);
        classList.add(visibleClass);
    }
}

// toggles the visibility of an element
function toggleElementVisibilityTransition(element) {
    setElementVisibilityTransition(element, getElementVisibility(element));
}