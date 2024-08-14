var myarr = [];
document.getElementById("users").addEventListener("keypress", function (data) {
    myarr.push(data.key)
    if (myarr.length == 5) {
        console.log(String(myarr));
        myarr = []
    }
});