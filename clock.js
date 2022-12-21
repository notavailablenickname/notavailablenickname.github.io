var div = document.getElementById("clock");

function clock()
{
    var date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h = add_zero(h);
    m = add_zero(m);
    s = add_zero(s);

    div.innerHTML = h + " : " + m + " : " + s;

    setTimeout(clock, 1000)
}

function add_zero(x)
{
    if(x < 10){ x = "0" + x};
    return x;
}