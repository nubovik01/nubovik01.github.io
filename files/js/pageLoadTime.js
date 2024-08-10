window.onload = () => {
  const domContentLoadedEventEnd = window.performance.timing.domContentLoadedEventEnd;
  const navigationStart = window.performance.timing.navigationStart;
  console.log("[*] Page load time: %sms", domContentLoadedEventEnd - navigationStart);
};