const html = items.results.map(item => {
    return `
    <div class="boxes">
        <img src=${unescape(item.Images[0].url_170x135)}/>
        <h3>${item.title}</h3>
        <div class="desc">
        <p>${item.Shop.shop_name}</p>
        <p>Views: ${item.views}</p>
        <p class="price"><h3>&dollar;${item.price}</p></h3>
    </div>
</div>
`
}).join('')

document.querySelector("#pitems").innerHTML = html