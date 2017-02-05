'use strict';

var green  = ['#eeeeee', '#d6e685', '#8cc665', '#44a340', '#1e6823'];
var orange = ['#eeeeee', '#fdf156', '#ffc722', '#ff9711', '#04001b'];
var pink   = ['#eeeeee', '#ffc0cb', '#ff89c4', '#ff1493', '#ae0e64'];
var blue   = ['#eeeeee', '#87cefa', '#1e90ff', '#0000ff', '#000080'];

var colors = {
  green:  green,
  orange: orange,
  pink:   pink,
  blue:   blue,
};

function applyColorToRects(color) {
  var rects = document.getElementsByTagName('rect');

  for (var i = 0, l = rects.length; i < l; i++) {
    var fill = rects[i].getAttribute('fill');
    for (var x = 0, y = green.length; x < y; x++) {
      if (fill === green[x]) {
        rects[i].style.fill = color[x];
      }
    }
  }
}

function applyColorToLegend(color) {
  var doc = document.getElementsByClassName('legend');
  var lis = doc[0].getElementsByTagName('li');

  for (var i = 1, l = lis.length; i < l; i++) {
    lis[i].style.backgroundColor = color[i];
  }
}

function applyOptions() {
  chrome.storage.local.get('favoriteColor', function(color) {
    applyColorToRects(colors[color.favoriteColor]);
    applyColorToLegend(colors[color.favoriteColor]);
  });
}

applyOptions();
