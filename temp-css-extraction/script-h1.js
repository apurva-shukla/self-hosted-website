() => {
  const h1 = document.querySelector('h1');
  const computed = window.getComputedStyle(h1);
  return {
    color: computed.color,
    fontFamily: computed.fontFamily,
    fontSize: computed.fontSize,
    fontWeight: computed.fontWeight,
    lineHeight: computed.lineHeight,
    margin: computed.margin,
    padding: computed.padding
  };
}