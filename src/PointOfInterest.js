// -----------------------------------------------------------------------
// PointOfInterest.js
// Contributors:
//	- Piotr Wyszomirski
//	- Piotr Czyżewski 

// -----------------------------------------------------------------------
// class PointOfInterest
// 
class PointOfInterest {
	// point metadata
	coordinates = [0, 0];
	title = "Placeholder title";
	description = "Placeholder description";
	// point data
	pointId = null;
	images = [];
	imageIndex = 0;
	pips = [];
	// leaflet marker
	marker = null;

	// constructor
	constructor(pointId) {
		this.pointId = pointId;
	}

	updatePips() {
		const pipEnabledClass = "point-popup-image-pip-enabled";
		const pipDisabledClass = "point-popup-image-pip-disabled";
		for (let i = 0; i < this.images.length; i++) {
			let pipId = `${this.pointId}-pip-${i}`;
			let pip = document.getElementById(pipId);
			if (pip === null) {
				console.warn(`Could not update pip ${pipId}.`);
				return
			}
			let classList = pip.classList;
			if (this.imageIndex == i) {
       			classList.remove(pipDisabledClass);
       			classList.add(pipEnabledClass);
			}
			else {
				classList.remove(pipEnabledClass);
				classList.add(pipDisabledClass);
			}
		}
	}

	static nextImage(point) {
		point.imageIndex++;
		if (point.imageIndex >= point.images.length)
			point.imageIndex = 0;
		var image = point.popup.querySelector(".point-popup-image");
		image.setAttribute("src", point.images[point.imageIndex]);
		point.updatePips();
	}

	static previousImage(point) {
		point.imageIndex--;
		if (point.imageIndex < 0)
			point.imageIndex = point.images.length-1;
		var image = point.popup.querySelector(".point-popup-image");
		image.setAttribute("src", point.images[point.imageIndex]);
		point.updatePips();
	}

	// formats point data as html code for a leaflet marker popup
	formatPopup() {
		const pipSize = 4;
		const pipSpacing = 4;
		let a = `
			<h3 class="point-popup-title">${this.title}</h3>
			<p class="point-popup-description">${this.description}</p>
			<div class="point-popup-content" style="position: relative;">
				<img class="point-popup-image" id="${this.pointId}" src="${this.images[this.imageIndex]}">
				<div class="point-popup-arrow-background arrow-left" style="left: 0%;">
					<span class="popup-text center point-popup-arrow">
						&lt;
					</span>
				</div>
				<div class="point-popup-arrow-background arrow-right" style="right: 0%;">
					<span class="popup-text center point-popup-arrow">
						&gt;
					</span>
				</div>
				<div class="point-popup-image-pip-background center-horizontal" style="
					width: ${(pipSize+pipSpacing*2)*this.images.length}px; height: ${pipSpacing*2+pipSize}px; position: absolute;
				">`
		for (let i = 0; i < this.images.length; i++) {
			a += `
					<div class="point-popup-image-pip-container">
						<div class="point-popup-image-pip point-popup-image-pip-${i === 0 ? "enabled" : "disabled"}"
							id="${this.pointId}-pip-${i}"
						>
						</div>
					</div>
			`;
		}
		let b = `
				</div>
			</div>
		`;
		return a+b;
	}	

	// add an image
	addImage(image) {
		// add an image to the point
		if (typeof image != "string") { throw new Error("PointOfInterest::addImage: image has to be a string."); }
		this.images.push(image);
	}

	// binds the point to a leaflet marker
	bind() {
		if (this.marker != null) { throw new Error("PointOfInterest::bind: point is already bound."); }
		this.marker = L.marker(this.coordinates, {keyboard: false}).addTo(map);
		this.popup = L.DomUtil.create('div', 'popup-div');
		this.popup.innerHTML = this.formatPopup();
		this.marker.bindPopup(this.popup);
		// setup popup
		let arrowLeft = this.popup.querySelector(".arrow-left");
		let arrowRight = this.popup.querySelector(".arrow-right");
		let t = this;
		arrowLeft.addEventListener("click", function(e) {PointOfInterest.previousImage(t)});
		arrowRight.addEventListener("click", function(e) {PointOfInterest.nextImage(t)});
		map.on("popupopen", function(e) {});
	}
}