Controller.controllers.signup = {};
Controller.controllers.signup.refresh = function (matching) {
    var context = {};
    View.renderer.signup.render(context);
    // Model.getShoppingCart()
    // .then((cart) => {
    //     context.cart = cart;
    // })
    // .then(() => {
    //     Model.cartItemCount()
    //         .then((itemCounter) => {
    //             console.log(itemCounter);
    //             context.counter = itemCounter;
    //             View.renderer.signup.render(context);
    //         });
    // });

}

Controller.controllers.signup.signup_clicked = function (event, bid) {
    event.preventDefault();
    var userInfo = {
        name: $('#name').val(),
        surname: $('#surname').val(),
        address: $('#address').val(),
        birth: $('#birth').val(),
        email: $('#email').val(),
        password: $('#password').val(),
        confirmpassword: $('#confirmpassword').val()
    }

    var ok = !userInfo.name.length || !userInfo.surname.length || !userInfo.address.length || !userInfo.birth.length || !userInfo.email.length || !userInfo.password.length || !userInfo.confirmpassword.length;
    var equalpasswd = false;
    if (userInfo.password == userInfo.confirmpassword && !ok) {
        Model.checkEmail(userInfo.email).then(function(){
            console.log('Email checked');
            Model.signup(userInfo).then(function () {
                console.log('User added successfully');
                Controller.router.go('/funkoshop/views/index');
            });

        })
    
    } else {
        console.log('MAL');

        this.refresh;
    }

    }


