() => {
  const headingStyles = {};
  for (let i = 1; i <= 6; i++) {
    const heading = document.querySelector(`h${i}`);
    if (heading) {
      const computed = window.getComputedStyle(heading);
      headingStyles[`h${i}`] = {
        color: computed.color,
        fontFamily: computed.fontFamily,
        fontSize: computed.fontSize,
        fontWeight: computed.fontWeight,
        lineHeight: computed.lineHeight,
        margin: computed.margin,
        padding: computed.padding
      };
    }
  }
  return headingStyles;
}