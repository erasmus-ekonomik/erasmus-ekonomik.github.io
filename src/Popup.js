// -----------------------------------------------------------------------
// Generic.js
// Contributors:
//  - Piotr Wyszomirski

function popupOnKeyPress(e) {
	let popup = document.getElementById("popup-layer");
	if (e === undefined) {
		setElementVisibilityTransition(popup, false);
		return;
	}
	else if (e.key == "Escape")
		if (getElementVisibility(popup))
			setElementVisibilityTransition(popup, false);
}

document.addEventListener("keydown", popupOnKeyPress);