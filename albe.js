function alpha() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var alpha = Math.PI / a;
    var beta = Math.PI / b;
    ///1)
    tangente = Math.tan((alpha + beta) * Math.PI / 180);
    ///2)
    var num = Math.tan(alpha * Math.PI / 180) + Math.tan(beta * Math.PI / 180);
    var den = 1 - Math.tan(alpha * Math.PI / 180) * Math.tan(beta * Math.PI / 180);
    tangente2 = num / den

    if (tangente.toFixed(4) == tangente2.toFixed(4)) {
        document.getElementById('ab').innerHTML = "<h3>Se demuetra la igualdad</h3>" + tangente + "=" + tangente2;
    }

}