let db = [
    {
        id: 1,
        name: 'Футболка',
        price: 300
    },
    {
        id: 2,
        name: 'Чашка',
        price: 100
    },
    {
        id: 3,
        name: 'Кепка',
        price: 200
    },
    {
        id: 4,
        name: 'Блокнот',
        price: 50
    },
    {
        id: 5,
        name: 'Ручка',
        price: 10
    },
]
for(let el of db){
    $('.goodsContainer').append(`
    <div class="goodsCard">
    <h2>${el.name}</h2>
    <h5>${el.price} грн.</h5>
    <button class="goodsCardBtn" id='buy${el.id}'>В корзину</button>
</div>`)
}

let cardList = []
$('.wrap').click(function(e){
    if(e.target.id){
        if((e.target.id).substring(0, 3) == 'buy'){
            let ID = (e.target.id).substring(3);
            for(let el of db){
                if(el.id == ID){
                    cardList.push(el);
                    $('#cartCounter').text(cardList.length)
                }

            }

        }
    }
})