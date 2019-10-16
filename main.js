function calculateChange(amountReceived, amountDue) {
    return amountReceived - amountDue;

}

function handleClickEvent(e) {
    var amountDue = $('#amount-due').val();
    amountDue = Math.floor(amountDue * 100);

    if (amountDue == "") {
        alert('please type amount due')
        return false;
    }

    var amountReceived = $('#amount-received').val();
    amountReceived = Math.floor(amountReceived * 100);

    if (amountReceived == "") {
        alert('please type amount recived')
        return false;
    }

    var total = calculateChange(amountReceived, amountDue);
    var dollars, quarters, dimes, nickels, pennies = 0;

    var cents = total;

    dollars = Math.floor(cents / 100);
    cents -= dollars * 100;
    document.getElementById('dollars-output').innerHTML = dollars;

    quarters = Math.floor(cents / 25);
    cents -= quarters * 25;
    document.getElementById('quarters-output').innerHTML = quarters;

    dimes = Math.floor(cents / 10);
    cents -= dimes * 10;
    document.getElementById('dimes-output').innerHTML = dimes;

    nickels = Math.floor(cents / 5);
    cents -= nickels * 5;
    document.getElementById('nickels-output').innerHTML = nickels;

    pennies = Math.floor(cents / 1);
    document.getElementById('pennies-output').innerHTML = pennies;
}

$('#calculate-change').click(handleClickEvent);
