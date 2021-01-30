const DEFAULT_HOST = 'https://res.cloudinary.com';

const DEFAULT_FORMAT_OPTIONS = {
  font: {
    transformer: (value) => encodeURIComponent(value)
  },
  lineSpacing: {
    transformer: (value) => `line_spacing_${value}`
  }
}

/**
 * contructCloudinaryUrl
 */

function contructCloudinaryUrl({ host = DEFAULT_HOST, cloudName, imageId, version, options = {}, text = [] } = {}) {
  const errorBase = 'Could not contruct cloudinary URL';

  if ( typeof cloudName !== 'string' ) {
    throw new Error(`${errorBase}: Invalid cloud name ${cloudName}`);
  }

  if ( typeof imageId !== 'string' ) {
    throw new Error(`${errorBase}: Invalid cloud name ${imageId}`);
  }

  if ( text && !Array.isArray(text) ) text = [text];

  let url = `${host}/${cloudName}/image/upload`;

  const optionsString = optionsToString(options);
  const textArray = text.map(option => linesToString(option));

  if ( optionsString ) {
    url = `${url}/${optionsString}`;
  }

  if ( textArray && textArray.length > 0 ) {
    url = `${url}/${textArray.join('/')}`;
  }

  if ( version ) {
    url = `${url}/${version}`;
  }


  return `${url}/${imageId}`
}

module.exports.contructCloudinaryUrl = contructCloudinaryUrl;

/**
 * linesToString
 */

function linesToString(lines = []) {
  const errorBase = 'Failed to transform text to string';

  if ( !lines ) return undefined;
  if ( !Array.isArray(lines) ) lines = [lines];

  return lines.map((line = {}) => {
    const { text, format = {}, options = {} } = line;

    if ( typeof text !== 'string' ) {
      throw new Error(`${errorBase}: Invalid text ${text}`);
    }

    const optionsString = optionsToString(options);
    const formatOptions = formatToString(format);
    const encodedText = encodeURIComponent(text);

    return `${optionsString},l_text:${formatOptions}:${encodedText}`;
  }).join('/');
}

module.exports.linesToString = linesToString;

/**
 * optionsToString
 */

function optionsToString(options = []) {
  if ( !options ) return undefined;
  if ( !Array.isArray(options) ) options = [options];
  return options.map(option => {
    return Object.keys(option).map(key => `${key}_${option[key]}`);
  }).join(',');
}

module.exports.optionsToString = optionsToString;

/**
 * optionsToString
 */

function formatToString(options = {}) {
  return Object.keys(options).map(key => {
    const optionConfig = DEFAULT_FORMAT_OPTIONS[key];
    const isFunction = optionConfig && typeof optionConfig.transformer === 'function';

    if ( isFunction ) {
      return optionConfig.transformer(options[key]);
    }

    return options[key];
  }).join('_');
}

module.exports.formatToString = formatToString;

/**
 * hexToCloudinaryRgb
 */

function hexToCloudinaryRgb(hex){
  return hex.replace('#', 'rgb:');
}

module.exports.hexToCloudinaryRgb = hexToCloudinaryRgb;

/**
 * cloudinaryRgbToHex
 */

function cloudinaryRgbToHex(rgb){
  return rgb.replace('rgb:', '#');
}

module.exports.cloudinaryRgbToHex = cloudinaryRgbToHex;