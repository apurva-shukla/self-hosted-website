() => {
  // Helper function to get computed styles
  function getComputedStylesForElement(element, properties) {
    const styles = window.getComputedStyle(element);
    const result = {};
    for (const prop of properties) {
      result[prop] = styles.getPropertyValue(prop);
    }
    return result;
  }

  // CSS properties to extract
  const cssProperties = [
    'font-family',
    'font-size',
    'font-weight',
    'line-height',
    'color',
    'background-color',
    'margin',
    'padding',
    'max-width',
    'width',
    'text-decoration',
    'letter-spacing',
    'border',
    'border-radius'
  ];

  // Get document root styles
  const rootStyles = getComputedStylesForElement(document.documentElement, [
    'background-color',
    'color',
    '--color-primary',
    '--color-secondary',
    '--color-accent',
    '--color-background',
    '--color-text',
    '--color-link',
    '--font-primary',
    '--font-secondary',
    '--spacing-unit',
    '--container-width'
  ]);

  // Get styles for important elements
  const bodyStyles = getComputedStylesForElement(document.body, cssProperties);
  
  // Get heading styles
  const headingStyles = {};
  for (let i = 1; i <= 6; i++) {
    const heading = document.querySelector(`h${i}`);
    if (heading) {
      headingStyles[`h${i}`] = getComputedStylesForElement(heading, cssProperties);
    }
  }

  // Get paragraph styles
  const paragraphStyles = getComputedStylesForElement(
    document.querySelector('p'),
    cssProperties
  );
  
  // Get link styles
  const linkStyles = {
    default: getComputedStylesForElement(
      document.querySelector('a'),
      [...cssProperties, 'text-decoration-color', 'text-decoration-thickness']
    )
  };
  
  // Try to get hover styles (this is not perfect as computed styles don't include hover)
  const styleSheets = Array.from(document.styleSheets);
  const linkHoverRules = [];
  
  try {
    for (const sheet of styleSheets) {
      try {
        const rules = Array.from(sheet.cssRules || []);
        for (const rule of rules) {
          if (rule.selectorText && rule.selectorText.includes('a:hover')) {
            linkHoverRules.push({
              selector: rule.selectorText,
              properties: Object.fromEntries(
                [...rule.style].map(prop => [prop, rule.style.getPropertyValue(prop)])
              )
            });
          }
        }
      } catch (e) {
        // Skip cross-origin stylesheets
      }
    }
  } catch (e) {
    console.error('Error accessing stylesheets:', e);
  }
  
  // Extract container width
  const mainContainer = document.querySelector('main') || 
                        document.querySelector('.container') ||
                        document.querySelector('article') ||
                        document.querySelector('body > div');
  
  const containerStyles = getComputedStylesForElement(mainContainer, [
    'max-width', 'width', 'padding', 'margin'
  ]);
  
  // Extract color palette from all elements
  const allColors = new Set();
  const allElements = document.querySelectorAll('*');
  allElements.forEach(el => {
    const styles = window.getComputedStyle(el);
    if (styles.color && styles.color !== 'rgb(0, 0, 0)') allColors.add(styles.color);
    if (styles.backgroundColor && styles.backgroundColor !== 'rgba(0, 0, 0, 0)' && styles.backgroundColor !== 'rgb(255, 255, 255)') {
      allColors.add(styles.backgroundColor);
    }
    if (styles.borderColor && styles.borderColor !== 'rgb(0, 0, 0)') allColors.add(styles.borderColor);
  });
  
  // Create a comprehensive CSS report
  return {
    colors: {
      root: rootStyles,
      palette: Array.from(allColors),
      links: {
        default: linkStyles.default.color,
        hover: linkHoverRules.length > 0 ? linkHoverRules : 'Not directly accessible'
      },
      text: bodyStyles.color,
      background: bodyStyles['background-color']
    },
    typography: {
      body: {
        fontFamily: bodyStyles['font-family'],
        fontSize: bodyStyles['font-size'],
        lineHeight: bodyStyles['line-height'],
        fontWeight: bodyStyles['font-weight'],
        letterSpacing: bodyStyles['letter-spacing']
      },
      headings: headingStyles,
      paragraph: {
        fontFamily: paragraphStyles['font-family'],
        fontSize: paragraphStyles['font-size'],
        lineHeight: paragraphStyles['line-height'],
        fontWeight: paragraphStyles['font-weight'],
        marginTop: paragraphStyles['margin-top'],
        marginBottom: paragraphStyles['margin-bottom']
      }
    },
    spacing: {
      container: containerStyles,
      body: {
        margin: bodyStyles.margin,
        padding: bodyStyles.padding
      }
    },
    layout: {
      containerWidth: containerStyles['max-width'] || containerStyles.width
    }
  };
}