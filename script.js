$(document).ready(function(){
    $(".boton").click(function(){
        newproductos();
    })
    function newproductos(){
        $.ajax({
            url: "https://mini-shop-rg.herokuapp.com/products",
            type: "GET",
            dataType: "json",
            success: function(enviar){
                var divproductos = $(".card");
                var coletion= enviar;
                var elemento = "";
                for(var i = 3; i < coletion.length; i++){
                   var producto = coletion[i];
                   elemento +=
                   "<img src=" + producto.image + " /></hr></br>"+
                    "<h4>Nombre:"+" "+
                    producto.name+
                    "</br></h4>"+" "+ "<p>Precio:" +" "+ "$"+ producto.price+
                    "</br></p>"+" "+
                    "<p>Stock:"+" " + producto.stock + "</p>"+
                    "<h5>Description:"+" " + producto.description + "</h5>"
                               
                

                }
                divproductos.html(elemento);
            },
            error: function(error){
                alert("ERROR");
            },
            complete: function(status){
                
            }

        })
    } 
});