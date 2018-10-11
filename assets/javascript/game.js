(function ($) {
    let itemChicken;
    let itemCupcake;
    let itemHamburger;
    let itemPizza;
    let allowance;
    let cost = 0;
    let win = 0;
    let lose = 0;

    //show allowance
    function randomAllowance() {
        allowance = Math.floor(Math.random() * (120 - 19 + 1) + 19)
        $("#allowance").text(allowance)
    }

    // //random items costs
    // let randomItemsCost = function() {
    //     return Math.floor(Math.random() * 12 + 1)
    // }

    // //show costs
    // function costs() {
    //     $("#costs").text(cost)
    // }

    // //show wins
    // function wins() {
    //     $("#win").text(win)
    // }

    // //show loses
    // function loses() {
    //     $("#lose").text(lose)
    // }

    //initial the game
    function initial() {
        itemChicken = Math.floor(Math.random() * 12 + 1)
        itemCupcake = Math.floor(Math.random() * 12 + 1)
        itemHamburger = Math.floor(Math.random() * 12 + 1)
        itemPizza = Math.floor(Math.random() * 12 + 1)
        $("#costs").text(cost)
        $("#win").text(win)
        $("#lose").text(lose)
        randomAllowance()
    }

    initial()


    //

})(jQuery);