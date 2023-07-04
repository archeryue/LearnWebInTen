var clickable = document.getElementsByTagName('a');
for (var i = 0; i < clickable.length; i++) {
    clickable.addEventListener('click', function() {
        alert('You clicked a link!');
    }
}

