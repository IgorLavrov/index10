var basket = (function () {
    let basket = {
        items: [],
    }

    let add = function (item,number,id) { 
        basket.items.push(({
            item:item,
            number:number,
            id:id
        }))
    }

    function remove(item) {
       basket.items.remove(item);
    }
    function retrieve( id){

       if (items.includes(id)){
        document.write(id,"Such item exist") ;
       } else{
           document.write("no such item")
       }
    }

})();