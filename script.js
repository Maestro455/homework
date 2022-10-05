// вычисление по стороне и высоте

butt1.onclick = function () {
    var width = document.getElementById('val1').value;
    var height = document.getElementById('val2').value;
    var sq1 = width * height;
    document.getElementById('js1').innerHTML = sq1;
};

// вычисление по стороне и синусу угла 

butt2.onclick = function () {
    var width1 = document.getElementById('val3').value;
    var sin = document.getElementById('val4').value;
    var sq2 = (width1 * width1) * sin;
    document.getElementById('js2').innerHTML = sq2;
};

// вычисление по половине произведения двух диагоналей

butt3.onclick = function () {
    var diag1 = document.getElementById('val5').value;
    var diag2 = document.getElementById('val6').value;
    var sq3 = (diag1 * diag2) / 2;
    document.getElementById('js3').innerHTML = sq3;
};
