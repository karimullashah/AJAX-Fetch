let count1 = 0;
function editText(id) {
    if (count1 == 0) {
        document.getElementById(id+"text").disabled = false;
        count1++;
    } else if (count1 == 1) {
        document.getElementById(id+"text").disabled = true;
        count1 = 0;
    }
}