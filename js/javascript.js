var xArray = ["2017年", "2018年", "2019年", "2020年", "2021年"];
var yArray = [13, 28, 39, 41, 52];


var data = [{
  x:xArray,
  y:yArray,
  type:"bar"
}];

var layout = {title:"＜募金活動の結果＞（単位：万円）"};

Plotly.newPlot("bokin", data, layout);