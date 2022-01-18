document.addEventListener('DOMContentLoaded',()=>{
    //primero preparamos los datos, que son el nombre de la imagen y su direccion
    class Card{
        static id = 0;
        constructor(name1,image){
            this.name = name1;
            this.image = image;
            this.id = Card.id
            Card.id+=1
        }

    }
    const cardsArr = [
        new Card("pelota", "./img/flor.png"),
        new Card("flor", "./img/flor1.png"),
        new Card("fresa", "./img/fresa.png"),
        new Card("pelota", "./img/flor.png"),
        new Card("flor", "./img/flor1.png"),
        new Card("fresa", "./img/fresa.png")
    //     new Card("paraguas", "./img/paraguas.png"),
    //     new Card("polo", "./img/polo.png"),
    //     new Card("tv", "./img/tv.png")
    ];
    console.log(cardsArr)
    //colocar los datos en el grid
    const grid = document.querySelector('.grid')
    var chosenArr = [];
    var chosenCardId = new Set();

    function createBoard(){
        for (let i = 0; i<cardsArr.length; i++){ //por cada elemento en cardsArr se crea un elemento <img>
            let card = document.createElement('img')
            card.setAttribute('src','img/back.png');
            card.setAttribute('class','card');
            card.setAttribute('id',cardsArr[i].id);
            card.addEventListener('click', flipcard) //para voltear carta
            grid.appendChild(card);//se a;ade elemento card a la grilla
        }
    }

    //funcion para checar si son pares
    function checkEquals(){
        if(chosenArr[0].name === chosenArr[1].name){
            alert("You found a match"+chosenArr[0].name +" "+ chosenArr[1].name )
        }else{
            //voltear cartas
            let card = flipCardBack(chosenArr[0].id)
            card = flipCardBack(chosenArr[1].id)
        }
        chosenArr = []
    }
    function flipCardBack(id){
        let card = document.getElementById(id)
        card.setAttribute('src', 'img/back.png')

    }

    //para funcion flipcard
    function flipcard(){
        let cardId = this.id;
        let bfLength = chosenCardId.lenght;
        chosenCardId.add(cardId)
        this.setAttribute('src', cardsArr[cardId].image)
        if(bfLength!==0  || bfLength !== chosenCardId.length){
            chosenArr.push(cardsArr[cardId]);
            if(chosenArr.length === 2) {//se seleccionaron 2 cartas
                checkEquals()
            }
        }else{
            flipCardBack(cardId);
        }

    }

    createBoard();

})

