function calcul_total(){
    var a = document.getElementById("t2").value;
    var b = document.getElementById("t3").value;
    var d = (Number(a)*Number(b))*5/100;
    t4.value = d;
    var c = (Number(a)*Number(b))-Number(d);
    t5.value = c;

    var g = document.getElementById("t7").value;
    var m = document.getElementById("t8").value;
    var e = (Number(g)*Number(m))*5/100;
    t9.value = e;
    var o = (Number(g)*Number(m))-Number(e);
    t10.value = o;

    var l = Number(o)+Number(c)
    t11.value = l
}
