// create your coffee object array here
var orders = [
    {
        type: "cortado", withMilk: true, customer: "Mimi" 
    },
    {
        type: "latte", withMilk: false, customer: "Pete" 
    },
    {
        type: "expresso", withMilk: true, customer: "Hilda" 
    },
];
// creat your print order function here

function printOrders(orders) {
 
    for (var i = 0; i < orders.length; i++) {
        var customer = orders[i].customer;
        var coffee = orders[i].type;
        var milk = orders[i].withMilk;     

        // Convert boolean to "Yes" or "No"
        var milkText = milk ? "Yes" : "No";

        console.log("Customer: " + customer + ", " 
    + "Coffee: " + coffee + ", "
    + "With Milk: " + milkText);
    }

}

printOrders(orders);


