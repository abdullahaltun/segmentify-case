function createItemImageElement(productImage) {
	const image = document.createElement('img')
	image.classList.add('lazy')
	image.classList.add('item-img')
	image.src = './assets/images/loading.gif'
	image.setAttribute('data-src', productImage)
	return image
}

function createItemNameElement(productName) {
	const itemName = document.createElement('div')
	itemName.className = 'item-name'
	itemName.innerText = productName
	return itemName
}

function createPriceElement(priceText) {
	const price = document.createElement('div')
	price.className = 'item-price'
	price.innerText = priceText
	return price
}

function createShippingElements(shippingFee) {
	const shipping = document.createElement('div')
	shipping.className = 'shipping'
	if (shippingFee === 'FREE') {
		const shippingImage = document.createElement('img')
		const shippingTextElement = document.createElement('div')
		const dotElement = document.createElement('span')
		dotElement.classList.add('shipping-dot-text')
		dotElement.innerText = '· '
		shippingImage.src = 'assets/images/icons8-shipped-48.png'
		shippingImage.className = 'shipping-icon'
		shippingTextElement.innerText = 'Ücretsiz Kargo'
		shippingTextElement.style.lineHeight = '22px'
		shipping.appendChild(shippingImage)
		shipping.appendChild(dotElement)
		shipping.appendChild(shippingTextElement)
	} else {

	}
	return shipping
}

function createChartElement() {
	const addToChart = document.createElement('div')
	addToChart.classList.add('add-chart')
	addToChart.innerText = 'Sepete Ekle'

	addToChart.addEventListener('click', function () {
		const popup = document.getElementById('popup')
		popup.classList.add('opened')
	})
	return addToChart
}

function createItemCardElement() {
	const div = document.createElement('div')
	div.className = 'item-card'
	return div
}

function createCategoryElement(category) {
	const categoryElement = document.createElement('li')
	categoryElement.classList.add('cat-li')
	categoryElement.innerText = category.includes('>') ? category.split('>')[1] : category
	categoryElement.id = category
	return categoryElement
}

function selectCategory(id) {
	const elements = document.getElementsByClassName('selected-li')
	for (let element of elements) {
		element.classList.remove('selected-li')
	}
	document.getElementById(id).classList.add('selected-li')
}

function loadLazy() {
	const elements = document.getElementsByClassName('lazy')
	for (const element of elements) {
		const dataSrc = element.getAttribute('data-src')
		const isHidden = element.parentNode.getAttribute('aria-hidden') === 'true'
		if (dataSrc && !isHidden) {
			element.src = element.getAttribute('data-src')
			element.removeAttribute('data-src')
		}
	}
}

function closePopup() {
	const popup = document.getElementById('popup')
	popup.classList.remove('opened')
}

function configureSlick() {
	$('#items').slick({
		infinite: false,
		mobileFirst: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{

				breakpoint: 380,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{

				breakpoint: 470,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{

				breakpoint: 1140,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5
				}
			},
			{

				breakpoint: 1280,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6
				}
			},
			{

				breakpoint: 1800,
				settings: {
					slidesToShow: 10,
					slidesToScroll: 10
				}
			},
			{

				breakpoint: 2000,
				settings: {
					slidesToShow: 10,
					slidesToScroll: 10
				}
			}
		]
	})
}

function readTextFile(file, callback) {
	const rawFile = new XMLHttpRequest()
	rawFile.overrideMimeType('application/json')
	rawFile.open('GET', file, true)
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4 && rawFile.status === 200) {
			callback(JSON.parse(rawFile.responseText))
		}
	}
	rawFile.send(null)
}