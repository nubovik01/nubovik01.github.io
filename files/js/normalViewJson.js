// Code NOT by Nubovik
// Автора потeрял, сорри :(

setTimeout(() => {
  var nvj_codeElements = document.getElementsByTagName('code').length;

  for (var i = 0; i < nvj_codeElements; i++) {
    var nvj_jsonCode = document.getElementsByTagName('code')[i].innerHTML;
    document.getElementsByTagName('code')[i].innerHTML = JSON.stringify(JSON.parse(nvj_jsonCode), null, 2);
  }
}, 1);