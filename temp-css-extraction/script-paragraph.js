() => {
  const p = document.querySelector('p');
  const computed = window.getComputedStyle(p);
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