var listEls = document.getElementsByTagName("li");

for (var i = 0; i < listEls.length; i++) {
    listEls[i].style.color = "blue";
}

document.getElementsByTagName("li")[1].style.backgroundColor = 'blue';

