Controller.controllers.order = {};
Controller.controllers.order.refresh = function (matching) {
    var context = {};
    Model.getOrder(matching[1])
        .then((order) => {
            context.order = order;
        })
        .then(()=>{
            Model.getShoppingCart()
            .then((cart) => {
                context.cart = cart;
            })
        })
        .then(() => {
            return Model.cartItemCount()
                .then((itemCounter) => {
                    context.counter = itemCounter;
                    View.renderer.order.render(context);
                });
        });
}

