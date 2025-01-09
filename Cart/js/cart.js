$(document).ready(function(){
    function addProduct(){
        sessionStorage.setItem("price", "125")
    }
    function updateTotal(){
        $("input#total").val(sessionStorage.getItem("price"));
    }
});
