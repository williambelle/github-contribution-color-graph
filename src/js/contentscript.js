'use strict';

// Themes from GitHub
var github      = ['#eeeeee', '#c6e48b', '#7bc96f', '#239a3b', '#196127'];
var halloween   = ['#eeeeee', '#fdf156', '#ffc722', '#ff9711', '#04001b'];

// Themes from Material design
var blue        = ['#eeeeee', '#bbdefb', '#64b5f6', '#1e88e5', '#0d47a1'];
var cyan        = ['#eeeeee', '#b2ebf2', '#4dd0e1', '#00acc1', '#006064'];
var deeppurple  = ['#eeeeee', '#d1c4e9', '#9575cd', '#5e35b1', '#311b92'];
var green       = ['#eeeeee', '#c8e6c9', '#81c784', '#43a047', '#1b5e20'];
var indigo      = ['#eeeeee', '#c5cae9', '#7986cb', '#3949ab', '#1a237e'];
var lightblue   = ['#eeeeee', '#b3e5fc', '#4fc3f7', '#039be5', '#01579b'];
var lightgreen  = ['#eeeeee', '#dcedc8', '#aed581', '#7cb342', '#33691e'];
var lime        = ['#eeeeee', '#f0f4c3', '#dce775', '#c0ca33', '#827717'];
var orange      = ['#eeeeee', '#ffe0b2', '#ffb74d', '#fb8c00', '#e65100'];
var pink        = ['#eeeeee', '#f8bbd0', '#f06292', '#e91e63', '#880e4f'];
var purple      = ['#eeeeee', '#e1bee7', '#ba68c8', '#8e24aa', '#4a148c'];
var red         = ['#eeeeee', '#ffcdd2', '#e57373', '#e53935', '#b71c1c'];
var teal        = ['#eeeeee', '#b2dfdb', '#4db6ac', '#00897b', '#004d40'];

// Theme from MoonAntonio
var moon        = ['#eeeeee', '#6bcdff', '#00a1f3', '#48009a', '#4f2266'];
var psychedelic = ['#eeeeee', '#faafe1', '#fb6dcc', '#fa3fbc', '#ff00ab'];
var yellow      = ['#eeeeee', '#d7d7a2', '#d4d462', '#e0e03f', '#ffff00'];

var colors = {
  github:      github,
  halloween:   halloween,

  blue:        blue,
  cyan:        cyan,
  deeppurple:  deeppurple,
  green:       green,
  indigo:      indigo,
  lightblue:   lightblue,
  lightgreen:  lightgreen,
  lime:        lime,
  orange:      orange,
  pink:        pink,
  purple:      purple,
  red:         red,
  teal:        teal,

  moon:        moon,
  psychedelic: psychedelic,
  yellow:      yellow,
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
