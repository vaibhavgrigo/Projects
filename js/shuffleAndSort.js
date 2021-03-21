var shuffleAndSortObj = (function shuffleAndSort() {
    const arra1 = [{ text:1, class: 'colorGrp1' }, { text:2, class: 'colorGrp2' }, { text:3, class: 'colorGrp3' }, { text:4, class: 'colorGrp2' }, { text:5, class: 'colorGrp3' }, { text:6, class: 'colorGrp4' }, { text: 7, class: 'colorGrp4' },{ text:8, class: 'colorGrp1' }, { text:9, class: 'colorGrp3' }];
function shuffle() {
    let arrLen = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (arrLen > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * arrLen);
        // Decrease arrLen by 1
        arrLen--;
        // And swap the last element with it
        temp = arra1[arrLen];
        arra1[arrLen] = arra1[index];
        arra1[index] = temp;
    }
    render(arra1);
}
function sort() {
    arra1.sort(function (x, y) {
        return x.text - y.text;
    });
    render(arra1);
}
function render(arra1) {
    document.getElementById('shuffle').innerHTML = '';
	for(var i = 0; i < arra1.length; i++)
	{
		var playcard = document.createElement("div");
		var value = document.createElement("div");
		playcard.className = "col-md-4 col-sm-4 col-xs-12 sqr card "+ arra1[i].class;
		value.className = "value";

		value.innerHTML = arra1[i].text;
		playcard.appendChild(value);

		document.getElementById("shuffle").appendChild(playcard);
	}
}
return {
    shuffle, sort
}
})();
function load()
{
	shuffleAndSortObj.sort();
}
window.onload = load;
