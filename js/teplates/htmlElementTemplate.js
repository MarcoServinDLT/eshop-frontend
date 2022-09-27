/**
 * Function to get a HTML element for a category.
 * @param {Object} category - The category object wich the item will be created.
 * @returns A string with the HTML structure to render the element.
 */
function createCaetgoryListElement(category) {
    const name = category.name
    return `<option value="${category.id}">${name.toUpperCase()}</option>`
}

/**
 * Function to get a card HTML element for a product.
 * @param {Object} product - The product object wich the product card will be created.
 * @returns The HTML structure for a product card.
 */
function createProductCardElememt(product) {
    const current_price = (product.price * (100 - product.discount)) / 100 ?? product.price
    const original_price = product.discount > 0 ? `<span class="small text-secondary"><s>$ ${product.price}</s></span>` : ''
    const image = product.url_image ? product.url_image :  "./images/not-found.jpg"
    return `<div class="col">
        <div class="card h-100 product-card">
            <img src="${image}" alt="Image" class="card-img-top">
            <div class="card-footer mt-auto">
                    <h5 class="card-title">${product.name}</h5>
                    <h6 class="card-subtitle text-secondary">${product.category_name}</h6>
                    <hr>
                    <h5 class="card-title text-end">
                        $ ${current_price}
                        ${original_price}
                    </h6>
            </div>
        </div>
    </div>`
}

