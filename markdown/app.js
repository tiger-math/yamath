let last_input, input;
// ---------------preview---------------
function preview() {
    $('#preview').innerHTML = '';
    input = $('#input').innerText.split('\n');
    console.log(input);
    //h(n), br
    for (i=0; i<input.length; i++) {
        for (i2=0; i2<6; i2++) {
            h(n+1, input[i]);
        }
    }
}

// ---------------h(n)---------------
function h(n, content) {

}

// ---------------setInterval---------------
setInterval(function() {
    if ($('#input').innerText != last_input) {
        last_input = $('#input').innerText;
        preview();
    }
},16)
