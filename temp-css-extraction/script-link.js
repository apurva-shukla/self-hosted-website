() => {
  const a = document.querySelector('a');
  const computed = window.getComputedStyle(a);
  return {
    color: computed.color,
    fontFamily: computed.fontFamily,
    fontSize: computed.fontSize,
    fontWeight: computed.fontWeight,
    textDecoration: computed.textDecoration,
    textDecorationColor: computed.textDecorationColor,
    textDecorationStyle: computed.textDecorationStyle
  };
}