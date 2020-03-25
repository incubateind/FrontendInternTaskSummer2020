function myfunction() {
    var a = document.getElementById("mobile number").value;
    if (a === "") {
        document.getElementById("phone").innerHTML = "please fill mobile number"
    }
    return false;
}