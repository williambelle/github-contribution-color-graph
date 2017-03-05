'use strict';

var blue      = ['#eeeeee', '#bbdefb', '#64b5f6', '#1e88e5', '#0d47a1'];
var green     = ['#eeeeee', '#c6e48b', '#7bc96f', '#239a3b', '#196127'];
var halloween = ['#eeeeee', '#fdf156', '#ffc722', '#ff9711', '#04001b'];
var orange    = ['#eeeeee', '#ffe0b2', '#ffb74d', '#fb8c00', '#e65100'];
var pink      = ['#eeeeee', '#f8bbd0', '#f06292', '#e91e63', '#880e4f'];

var colors = {
  blue:      blue,
  green:     green,
  halloween: halloween,
  orange:    orange,
  pink:      pink,
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
    if (color.favoriteColor) {
      applyColorToRects(colors[color.favoriteColor]);
      applyColorToLegend(colors[color.favoriteColor]);
    } else {
      applyColorToRects(halloween);
      applyColorToLegend(halloween);
    }
  });
}

applyOptions();
