function getBodyStyles() {
  const body = document.body;
  const bodyStyles = window.getComputedStyle(body);
  
  return {
    backgroundColor: bodyStyles.backgroundColor,
    color: bodyStyles.color,
    fontFamily: bodyStyles.fontFamily,
    fontSize: bodyStyles.fontSize,
    lineHeight: bodyStyles.lineHeight,
    margin: bodyStyles.margin,
    padding: bodyStyles.padding
  };
}

return getBodyStyles();
