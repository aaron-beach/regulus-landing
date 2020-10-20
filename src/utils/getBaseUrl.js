function getBaseUrl(defaultLang, lang) {
  if (defaultLang !== lang) {
    return `/${lang}/`;
  }

  return "/";
}

// eslint-disable-next-line no-undef
module.exports = getBaseUrl;
