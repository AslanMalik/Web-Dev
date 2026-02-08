function checkSpam() {
    let name = prompt("", "");

    if(name.includes("viagra") || name.includes("XXX")) {
        return true;
    }
    else {
        return false;
    }
}