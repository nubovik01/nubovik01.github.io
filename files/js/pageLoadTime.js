// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 10 August 2024 08:31:16 PM (UTC+3)

window.onload = () => {
  const domContentLoadedEventEnd = window.performance.timing.domContentLoadedEventEnd;
  const navigationStart = window.performance.timing.navigationStart;
  console.log("[*] Page load time: %sms", domContentLoadedEventEnd - navigationStart);
};