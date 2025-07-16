() => {
  const allColors = new Set();
  const elements = document.querySelectorAll('*');
  elements.forEach(el => {
    const computed = window.getComputedStyle(el);
    if (computed.color && computed.color !== 'rgb(0, 0, 0)') {
      allColors.add(computed.color);
    }
    if (computed.backgroundColor && 
        computed.backgroundColor !== 'rgba(0, 0, 0, 0)' && 
        computed.backgroundColor !== 'rgb(255, 255, 255)') {
      allColors.add(computed.backgroundColor);
    }
    if (computed.borderColor && 
        computed.borderColor !== 'rgb(0, 0, 0)' && 
        computed.borderColor !== 'rgba(0, 0, 0, 0)') {
      allColors.add(computed.borderColor);
    }
  });
  
  return Array.from(allColors);
}