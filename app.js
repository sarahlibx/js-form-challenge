function checkForm() {
    var input = document.getElementById('lname', 'fname');
    var canSubmit = true;

    for (var i = 0; i < input.length; i++) {
        if (input[i].value.length == 0) canSubmit = false;
    }
    if (canSubmit) {
        document.getElementById('submit').removeAttribute('disabled');
    }
    else {
        return false;
    }
    checkForm();
}