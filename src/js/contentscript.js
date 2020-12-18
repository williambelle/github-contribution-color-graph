'use strict';

// Themes from GitHub
var github      = ['#eeeeee', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
var halloween   = ['#eeeeee', '#fdf156', '#ffc722', '#ff9711', '#04001b'];

// Themes from Material design
var amber       = ['#eeeeee', '#ffecb3', '#ffd54f', '#ffb300', '#ff6f00'];
var blue        = ['#eeeeee', '#bbdefb', '#64b5f6', '#1e88e5', '#0d47a1'];
var bluegrey    = ['#eeeeee', '#cfd8dc', '#90a4ae', '#546e7a', '#263238'];
var brown       = ['#eeeeee', '#d7ccc8', '#a1887f', '#6d4c41', '#3e2723'];
var cyan        = ['#eeeeee', '#b2ebf2', '#4dd0e1', '#00acc1', '#006064'];
var deeporange  = ['#eeeeee', '#ffccbc', '#ff8a65', '#f4511e', '#bf360c'];
var deeppurple  = ['#eeeeee', '#d1c4e9', '#9575cd', '#5e35b1', '#311b92'];
var green       = ['#eeeeee', '#c8e6c9', '#81c784', '#43a047', '#1b5e20'];
var grey        = ['#eeeeee', '#e0e0e0', '#9e9e9e', '#616161', '#212121'];
var indigo      = ['#eeeeee', '#c5cae9', '#7986cb', '#3949ab', '#1a237e'];
var lightblue   = ['#eeeeee', '#b3e5fc', '#4fc3f7', '#039be5', '#01579b'];
var lightgreen  = ['#eeeeee', '#dcedc8', '#aed581', '#7cb342', '#33691e'];
var lime        = ['#eeeeee', '#f0f4c3', '#dce775', '#c0ca33', '#827717'];
var orange      = ['#eeeeee', '#ffe0b2', '#ffb74d', '#fb8c00', '#e65100'];
var pink        = ['#eeeeee', '#f8bbd0', '#f06292', '#e91e63', '#880e4f'];
var purple      = ['#eeeeee', '#e1bee7', '#ba68c8', '#8e24aa', '#4a148c'];
var red         = ['#eeeeee', '#ffcdd2', '#e57373', '#e53935', '#b71c1c'];
var teal        = ['#eeeeee', '#b2dfdb', '#4db6ac', '#00897b', '#004d40'];
var yellowMd    = ['#eeeeee', '#fff9c4', '#fff176', '#ffd835', '#f57f17'];

// Theme from Me
var unicorn     = ['#eeeeee', '#6dc5fb', '#f6f68c', '#8affa4', '#f283d1'];
var summer      = ['#eeeeee', '#eae374', '#f9d62e', '#fc913a', '#ff4e50'];
var sunset      = ['#eeeeee', '#fed800', '#ff6f01', '#fd2f24', '#811d5e'];

// Theme from MoonAntonio
var moon        = ['#eeeeee', '#6bcdff', '#00a1f3', '#48009a', '#4f2266'];
var psychedelic = ['#eeeeee', '#faafe1', '#fb6dcc', '#fa3fbc', '#ff00ab'];
var yellow      = ['#eeeeee', '#d7d7a2', '#d4d462', '#e0e03f', '#ffff00'];

var colors = {
  github: github,
  halloween: halloween,

  amber: amber,
  blue: blue,
  bluegrey: bluegrey,
  brown: brown,
  cyan: cyan,
  deeporange: deeporange,
  deeppurple: deeppurple,
  green: green,
  grey: grey,
  indigo: indigo,
  lightblue: lightblue,
  lightgreen: lightgreen,
  lime: lime,
  orange: orange,
  pink: pink,
  purple: purple,
  red: red,
  teal: teal,
  yellowMd: yellowMd,

  summer: summer,
  unicorn: unicorn,
  sunset: sunset,

  moon: moon,
  psychedelic: psychedelic,
  yellow: yellow
};

var cssGitHubVars = [
  '--color-calendar-graph-day-bg',
  '--color-calendar-graph-day-L1-bg',
  '--color-calendar-graph-day-L2-bg',
  '--color-calendar-graph-day-L3-bg',
  '--color-calendar-graph-day-L4-bg'
];

var randomColor = randomProperty(colors);

function randomProperty (obj) {
  var keys = Object.keys(obj);
  return keys[keys.length * Math.random() << 0];
}

function applyColorToCssGitHubVars (color) {
  for (var i = 1, l = cssGitHubVars.length; i < l; i++) {
    document.documentElement.style.setProperty(
      cssGitHubVars[i],
      color[i]
    );
  }
}

function applyColorToLegend (color) {
  var doc = document.getElementsByClassName('legend');

  if (doc[0]) {
    var lis = doc[0].getElementsByTagName('li');

    for (var i = 1, l = lis.length; i < l; i++) {
      lis[i].style.setProperty('background-color', color[i], 'important');
    }
  }
}

function applyColorToActivity (color) {
  var path = document.getElementsByClassName('js-highlight-blob');
  if (path[0]) {
    for (var i = 0, l = path.length; i < l; i++) {
      path[i].setAttribute('fill', color[2]);
      path[i].setAttribute('stroke', color[2]);
    }
  }

  var axis = document.getElementsByClassName('activity-overview-axis');
  if (axis[0]) {
    for (var j = 0, m = axis.length; j < m; j++) {
      axis[j].style.stroke = color[3];
    }
  }

  var points = document.getElementsByClassName('activity-overview-point');
  if (points[0]) {
    for (var k = 0, n = points.length; k < n; k++) {
      points[k].style.stroke = color[3];
    }
  }
}

function applyOptions () {
  chrome.storage.local.get('favoriteColor', function (color) {
    if (!color.favoriteColor) {
      color.favoriteColor = 'halloween';
    } else if (color.favoriteColor === 'random') {
      color.favoriteColor = randomColor;
    }
    applyColorToCssGitHubVars(colors[color.favoriteColor]);
    applyColorToLegend(colors[color.favoriteColor]);
    applyColorToActivity(colors[color.favoriteColor]);
  });
}

(function () {
  // Call applyOptions after document load
  applyOptions();

  // Observe DOM modifications
  var container = document.getElementById('js-pjax-container');

  if (container) {
    var observer = new MutationObserver(function (mutations) {
      var graph =
        document.getElementsByClassName('js-yearly-contributions')[0];

      if (graph) {
        applyOptions();
      }
    });

    var config = { subtree: true, childList: true };

    observer.observe(container, config);
  }
})();
