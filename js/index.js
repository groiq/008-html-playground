function sel(shape) {
    if (shape == "dreieck") {
        function calc(length) {
            return (length * length);
        }
    }
    else if (shape == "quadrat") {
        function calc(length) {
            return (length * length / 2);
        }
    }
    
}

function a(shape, length) {
    sel(shape);
    var result = calc(length);
    return result;
}

document.write(a("quadrat",2));
document.write(a("dreieck",2));