() => {
  const body = document.body;
  const computed = window.getComputedStyle(body);
  return {
    backgroundColor: computed.backgroundColor,
    color: computed.color,
    fontFamily: computed.fontFamily,
    fontSize: computed.fontSize,
    lineHeight: computed.lineHeight,
    margin: computed.margin,
    padding: computed.padding
  };
}