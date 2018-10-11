(function ($) {
    let itemChicken;
    let itemCupcake;
    let itemHamburger;
    let itemPizza;
    let allowance;
    let cost = 0;
    let win = 0;
    let lose = 0;
    let equal = false;
    let greater = false;

    //show allowance
    function randomAllowance() {
        allowance = Math.floor(Math.random() * (120 - 19 + 1) + 19)
        $("#allowance").text(allowance)
    }

    //random items costs
    let randomItemsCost = function() {
        return Math.floor(Math.random() * 12 + 1)
    }

    //show costs
    function costs() {
        $("#costs").text(cost)
    }

    //show wins
    function wins() {
        $("#win").text(win)
    }

    //show loses
    function loses() {
        $("#lose").text(lose)
    }

    //initial the game
    function initial() {
        cost = 0
        costs()
        itemChicken = randomItemsCost()
        itemCupcake = randomItemsCost()
        itemHamburger = randomItemsCost()
        itemPizza = randomItemsCost()
        equal = false
        greater = false

        randomAllowance()
    }

    initial()

    //check points
    let checkPoints = function() {
        if (allowance === cost) equal = true
        else if (cost > allowance) greater = true
    }

    // check greater and equal
    function checkResults(equ, gre) {
        if (equ) {
            let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3');
            audio.play()
            win++
            wins()
            initial()
        }

        if (gre) {
            let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3');
            audio.play()
            lose++
            loses()
            initial()
        }
    }

    //call all function
    function callFunction() {
        costs()
        checkPoints()
        checkResults(equal, greater)
    }

    //chicken onclick
    $("#chicken").on("click", function() {
        cost += itemChicken
        callFunction() 
    })

    //hamburger onclick
    $("#hamburger").on("click", function() {
        cost += itemHamburger
        callFunction() 
    })

    //cupcake onclick
    $("#cupcake").on("click", function() {
        cost += itemCupcake
        callFunction() 
    })

    //pizza onclick
    $("#pizza").on("click", function() {
        cost += itemPizza
        callFunction() 
    })

    //

})(jQuery);