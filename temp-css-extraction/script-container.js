() => {
  const main = document.querySelector('main') || 
               document.querySelector('.container') ||
               document.querySelector('article') ||
               document.querySelector('body > div');
  const computed = window.getComputedStyle(main);
  return {
    maxWidth: computed.maxWidth,
    width: computed.width,
    margin: computed.margin,
    padding: computed.padding
  };
}