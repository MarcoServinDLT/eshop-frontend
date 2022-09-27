(function(){

    // Definition of url elements. //
    const base_url = 'https://e-shop-back-end-example.herokuapp.com/api/'
    const url_categories = 'https://e-shop-back-end-example.herokuapp.com/api/categories'
    let url_request = base_url
    const urlParams = new URLSearchParams(window.location.search)

    // Getting the html elements. //
    const result_container = document.getElementById('products_container')
    const search_bar = document.getElementById('search_bar')
    const category_list = document.getElementById('category_list')
    const container = document.getElementById('container')
    

    // Get url params //
    const product_search = urlParams.get('product_name')
    const category_filter = parseInt(urlParams.get('category')) ?? 0

    // Configuring the url request. //
    url_request += category_filter ? `category/${urlParams.get('category')}/` : 'products/'
    if(product_search) {
        url_request += product_search
        search_bar.value = product_search
    }

    /* Method to get and render all products. */
    async function getProducts(){
        console.log(url_request)
        try{
            const data = await httpRequest(url_request)
            let product_list = ''
            data.data.forEach(element =>{
                product_list += createProductCardElememt(element)
            })
            result_container.innerHTML = product_list
        } catch(error) {
            console.log(error)
            container.innerHTML = '<h1 class="text-center text-secondary">Producto no encontrado.</h1>'
        }
    }

    /* Method to get and render all categories. */
    async function getCategories(){
        const data = await httpRequest(url_categories)
        let list = createCaetgoryListElement({id:0, name:'TODAS'})
        data.data.forEach(element => {
            list += createCaetgoryListElement(element)
        });
        category_list.innerHTML = list
    }

    // Rendering the data. //
    getProducts()
    getCategories().then( () => 
        category_list.selectedIndex = category_filter
    )
    

}())