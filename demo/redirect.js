console.log('window.location', window.location);
const version = document.querySelector('[data-version]');
window.location.replace(
  `/${version.getAttribute('data-version')}/dist/api.html${window.location.hash}`,
);
