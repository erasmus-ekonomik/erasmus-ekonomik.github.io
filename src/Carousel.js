// -----------------------------------------------------------------------
// Carousel.js
// Contributors:
//	- Dawid Pągowski

// TODO: Implement lazy-loading if needed

// contains all the Carousel objects
const carousels = [];

class Carousel {
    imgElements
    currentIndex
    parent

    constructor(elements, loop, changeAfter) {
        this.imgElements = elements;
        this.currentIndex = 0;
        this.loop = loop;
        this.changeAfter = changeAfter;
        this.parent = this.imgElements[0].parentElement;
    }

    /**
     * Creates a carousel of several imgs
     * @param containerId (string): id of the DOM element which will contain the created carousel
     * @param pictureUrls (array of strings): an array of urls pointing to some kind of image
     * @param changeImgDelay (number): after how many milliseconds the image will be changed
     * @param opacityTransitionDuration (string): the opacity transition duration (sets the value of the transition-duration CSS prop)
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration
     * @param loop should the carousel start from the beginning when it stops displaying the last image?
     * @returns {Carousel} Carousel object (currently doesn't have any noteworthy functionality)
     */
    static create(containerId,
                  pictureUrls,
                  changeImgDelay,
                  opacityTransitionDuration,
                  loop) {
        const container = document.getElementById(containerId);
        const parent = document.createElement('div');
        container.appendChild(parent);

        parent.classList.add('carousel');

        const imgElements = [];

        let index = 0;
        pictureUrls.forEach(srcUrl => {
            const imgElement = document.createElement('img');
            parent.appendChild(imgElement);
            imgElement.src = srcUrl;

            imgElement.style = `transition-duration: ${opacityTransitionDuration}`;
            imgElements[index] = imgElement;
            index += 1;
        });

        const carousel = new Carousel(imgElements, loop, changeImgDelay, opacityTransitionDuration);
        carousels.push(carousel);
        carousel.start();

        return carousel;
    }

    start() {
        this.showCurrentIndex();
        this.showNextIndex();
    }

    showNextIndex() {
        setTimeout(() => {
            this.hideCurrentIndex();
            this.currentIndex += 1;

            if (this.currentIndex >= this.imgElements.length) {
                if (this.loop) {
                    this.currentIndex = 0;
                }
                else {
                    console.log('done');
                    return;
                }
            }

            this.showCurrentIndex();
            this.showNextIndex();
        }, this.changeAfter);
    }

    hideCurrentIndex() {
        this.getCurrentImg().classList.add('hiding');
        this.getCurrentImg().classList.remove('shown');

        const temp = this.getCurrentImg();
        temp.ontransitionend = () => {
            temp.classList.remove('hiding');
            temp.ontransitionend = null;
        };
    }

    showCurrentIndex() {
        this.getCurrentImg().classList.add('shown');
    }

    getCurrentImg() {
        return this.imgElements[this.currentIndex];
    }
}