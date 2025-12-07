const lightDarkSupport = CSS.supports("color", "light-dark(white, black)");

if (!lightDarkSupport) {
  const goUpdate = confirm("bruh update your browser rn.");

  if (goUpdate) {
    window.location.replace("./badbrowser.html");
  } else {
    alert("you're cringe.");
  };
};