'use strict';

function saveOptions () {
  var color = document.getElementById('color').value;
  chrome.storage.local.set({
    favoriteColor: color
  }, function () {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function () {
      status.textContent = '';
    }, 750);
  });
}

function restoreOptions () {
  chrome.storage.local.get({
    favoriteColor: 'halloween'
  }, function (items) {
    document.getElementById('color').value = items.favoriteColor;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
