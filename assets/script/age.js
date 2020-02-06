
    
function ageData(form) {
    let theirAge = document.forms['ageForm']['inputage'].value;
    let output;
    let myAge = 23;

    if (theirAge == myAge) {
        output = 'We are the same age!!';
    } else if(isNaN(theirAge)) {
        output = 'This is not a vaild entry, Please enter your age.'
    } else if(theirAge > myAge) {
        output = 'You are older than me.';
    } else {
        output = 'I am older than you.';
    }
    document.getElementById('ageresponse').innerHTML = output;
}
