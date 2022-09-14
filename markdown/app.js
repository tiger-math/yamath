let last_input, input;
const tag_char = ['*','_','`']
const tag_char_tag = ['b','i','u']
// ---------------preview---------------
function preview() {
    $('#preview').innerHTML = '';
    input = $('#input').innerText.split('\n');
    //h(n)
    for (i=0; i<input.length; i++) {
        for (i2=0; i2<6; i2++) {
            if (h(i2+1, input[i]) != false) {
					 input[i] = h(i2+1, input[i]);
					 break;
				}
		  }
		  input[i] += '<br>';
    }
	 for (i=0; i<input.length; i++) {
	     $('#preview').innerHTML += input[i];
	 }
	 for (i=0; i<tag_char.length; i++) {
	     $('#preview').innerHTML = tag(tag_char[i],tag_char_tag[i],$('#preview').innerText);
	 }
}

// ---------------h(n)---------------
function h(n, content) {
	 var hs = '';
	 for (hn=0; hn<n; hn++) {
	     hs += '#';
	 }
	 hs += ' ';
	 if (content.startsWith(hs)) {
	     return `<h${n}>${content.replace(hs, '')}</h${n}>`
	 } else {
	     return false;
	 }
}

// ---------------tag---------------
function tag(char, tag, content) {
    var content_split = content.split(char);
	 var tag_return = '';
	 for (tn=0; tn<content_split.length; tn++) {
	     if (tn % 2 == 0) {
		  		tag_return += `<${tag}>${content_split[tn]}</${tag}>`;
				console.log(tag);
		  } else {
		      tag_return += content_split[tn];
		  }
	 }
	 return tag_return;
}

// ---------------setInterval---------------
setInterval(function() {
    if ($('#input').innerText != last_input) {
        last_input = $('#input').innerText;
        preview();
    }
},16)
