'use strict';

var github    = ['#eeeeee', '#c6e48b', '#7bc96f', '#239a3b', '#196127'];

var blue      = ['#eeeeee', '#bbdefb', '#64b5f6', '#1e88e5', '#0d47a1'];
var green     = ['#eeeeee', '#c8e6c9', '#81c784', '#43a047', '#1b5e20'];
var halloween = ['#eeeeee', '#fdf156', '#ffc722', '#ff9711', '#04001b'];
var orange    = ['#eeeeee', '#ffe0b2', '#ffb74d', '#fb8c00', '#e65100'];
var pink      = ['#eeeeee', '#f8bbd0', '#f06292', '#e91e63', '#880e4f'];
var red       = ['#eeeeee', '#ffcdd2', '#e57373', '#e53935', '#b71c1c'];

var colors = {
  github:    github,
  blue:      blue,
  green:     green,
  halloween: halloween,
  orange:    orange,
  pink:      pink,
  red:       red,
};

function applyColorToRects(color) {
  var rects = document.getElementsByTagName('rect');

  for (var i = 0, l = rects.length; i < l; i++) {
    var fill = rects[i].getAttribute('fill');
    for (var x = 0, y = github.length; x < y; x++) {
      if (fill === github[x]) {
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
