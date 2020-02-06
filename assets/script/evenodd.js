
    
function numData(form) {
    let theirNum = document.forms['numberForm']['inputnumber'].value;
    let output;

    if (theirNum % 2 == 0) {
        output = 'It\'s EVEN!';
    } else if(isNaN(theirNum)) {
        output = 'This is not a vaild entry.'
    } else {
        output = 'It\'s ODD';
    }
    document.getElementById('numresponse').innerHTML = output;
}
