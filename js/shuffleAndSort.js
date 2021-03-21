var shuffleAndSortObj = (function shuffleAndSort() {
    const arra1 = [{ text:1, class: 'colorGrp1' }, { text:2, class: 'colorGrp2' }, { text:3, class: 'colorGrp3' }, { text:4, class: 'colorGrp2' }, { text:5, class: 'colorGrp3' }, { text:6, class: 'colorGrp4' }, { text: 7, class: 'colorGrp4' },{ text:8, class: 'colorGrp1' }, { text:9, class: 'colorGrp3' }];
function shuffle() {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
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
		var card = document.createElement("div");
		var value = document.createElement("div");
		card.className = "col-md-4 col-sm-4 col-xs-12 square card "+ arra1[i].class;
		value.className = "value";

		value.innerHTML = arra1[i].text;
		card.appendChild(value);

		document.getElementById("shuffle").appendChild(card);
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
