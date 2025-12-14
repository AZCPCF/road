function checkSize(params) {
    if (params < 10) {
        var x = `0${params}`;
        return x;
    } else {
        return params;
    }
}