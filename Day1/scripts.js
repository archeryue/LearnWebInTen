function registerClickHandler() {
    var clickable = document.getElementsByTagName('a');
    for (var i = 0; i < clickable.length; i++) {
        clickable[i].addEventListener('click', function() {
            alert('Can not send email now.');
        });
    }
}

function addSubSection(clazzNmae) {
    var subList = document.getElementsByClassName(clazzNmae);
    let lastSub = subList[subList.length-1];
    let newSub = lastSub.cloneNode(true);
    lastSub.parentNode.insertBefore(newSub, lastSub.nextSibling);
}
