function parseNumber(value, locale = 'en-US') {
    let format = Intl.NumberFormat(locale).format('1.1');
    let newPattern = new RegExp(`[^-+0-9${ format.charAt( 1 ) }]`, 'g');
    let pattern = value.replace(newPattern, '');
    let newPrice = pattern.replace(format.charAt(1), '.');
  
    return parseFloat(newPrice);
  }

  console.log(parseNumber('1,300.56'))
  console.log(parseNumber('.56'))
  console.log(parseNumber('56.00'))
  console.log(parseNumber('13,056.01'))