/**
 * Function to get a HTML element for a category.
 * @param {Object} category - The category object wich the item will be created.
 * @returns A string with the HTML structure to render the element.
 */
function createCaetgoryListElement(category) {
    return `<li>
        <a href="?category=${category.id}" class="nav-link text-white category-element">
            ${category.category_name.toUpperCase()}
        </a>
    </li>`
}

/**
 * Function to get a card HTML element for a product.
 * @param {Object} product - The product object wich the product card will be created.
 * @returns The HTML structure for a product card.
 */
function createProductCardElememt(product) {
    const current_price = (product.price * (100 - product.discount)) / 100 ?? product.price
    const original_price = product.discount > 0 ? `<span class="small text-secondary"><s>$ ${product.price}</s></span>` : ''
    return `<div class="col">
        <div class="card shadow-sm product-card">
            <img src="${product.url_image}" alt="Image" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <h6 class="card-subtitle text-secondary">${product.category_name}</h6>
                <hr>
                <h6 class="card-title text-end">
                    $ ${current_price}
                    ${original_price}
                </h6>
            </div>
        </div>
    </div>`
}

