import pxToRem from './utils/pxToRem.js'

const rootSelector = '[data-js-expandable-content]'

class ExpandableContent {
	selectors = {
		root: rootSelector,
		button: '[data-js-expandable-content-button]',
	}

	stateClasses = {
		isExpanded: 'is-expanded',
	}

	animationParents = {
		duration: 500,
		easing: 'ease',
	}

	constructor(rootElement) {
		this.rootElement = rootElement
		this.buttonElement = this.rootElement.querySelector(this.selectors.button)
		this.bindeEvents()
	}

	expand() {
		const { offsetHeight, scrollHeight} = this.rootElement;
		this.rootElement.classList.add(this.stateClasses.isExpanded);
		this.rootElement.animate([
			{
				maxHeight: `${pxToRem (offsetHeight)}rem`,
			},
			{
				maxHeight: `${pxToRem (scrollHeight)}rem`,
			},
		], this.animationParents)
	}

	onButtonClick = () => {
		this.expand()
	}

	bindeEvents () {
		this.buttonElement.addEventListener('click', this.onButtonClick)
	}
}

class ExpandableContentCollection {
	constructor() {
		this.init()
	}

	init() {
		document.querySelectorAll(rootSelector).forEach((element) => {
			new ExpandableContent(element)
		})
	}
}

export default ExpandableContentCollection