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
    preview(items.favoriteColor);
  });
}

function preview (color) {
  const imgPreview = document.createElement('img');
  const imgExist = document.querySelector('#img-preview');

  if (imgExist) {
    imgExist.parentNode.removeChild(imgExist);
  }

  if (color !== 'random') {
    imgPreview.src = `/images/theme/contributions-${color}.png`;
    imgPreview.className = 'preview';
    imgPreview.alt = color;
    imgPreview.id = 'img-preview';

    document.getElementById('preview').appendChild(imgPreview);
  } else {
    const imgNExist = document.createElement('p');

    imgNExist.innerText = "Doesn't have a preview of this theme.";
    imgNExist.id = 'img-preview';

    document.getElementById('preview').appendChild(imgNExist);
  }
}

function loadPreview () {
  const color = document.getElementById('color').value;
  preview(color);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
document.getElementById('color').addEventListener('change', loadPreview);
