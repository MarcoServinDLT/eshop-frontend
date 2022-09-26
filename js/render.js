(function(){

    // Definition of url elements. //
    const base_url = 'http://localhost:3000/api/'
    const url_categories = 'http://localhost:3000/api/categories'
    let url_request = base_url
    const urlParams = new URLSearchParams(window.location.search)

    // Getting the html elements. //
    let result_container = document.getElementById('products_container')
    let search_button = document.getElementById('search_button')
    let category_list = document.getElementById('category_list')

    // Get url params //
    if(urlParams.has('category'))
        url_request += `category/${urlParams.get('category')}/`
    else
        url_request = `${base_url}products/`
    if(urlParams.has('product_name'))
        url_request += urlParams.get('product_name')

    async function getProducts(){
        console.log(url_request)
        const data = await httpRequest(url_request)
        let product_list = ''
        data.data.forEach(element =>{
            product_list += createProductCardElememt(element)
        })
        result_container.innerHTML = product_list
    }


    async function getCategories(){
        const data = await httpRequest(url_categories)
        let list = createCaetgoryListElement(0, 'TODAS')
        data.data.forEach(element => {
            list += createCaetgoryListElement(element)
        });
        category_list.innerHTML = list
    }

    // Rendering the data. //
    getProducts()
    getCategories()


}())