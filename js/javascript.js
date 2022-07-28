/*FAQのページ用accordion 開始*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/*FAQのページ用accordion 終了*/


/*募金*/

var xArray = ["2017年", "2018年", "2019年", "2020年", "2021年"];
var yArray = [13, 28, 39, 41, 52];


var data = [{
  x:xArray,
  y:yArray,
  type:"bar"
}];

var layout = {title:"＜募金活動の結果＞（単位：万円）"};

Plotly.newPlot("bokin", data, layout);