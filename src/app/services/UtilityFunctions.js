/***
 * returns an ideal font size based titleLength
 * @param {number} titleLength
 * @returns {number}
 */
function getIdealFontSize(titleLength) {
  /* This uses Frieren's title as the basis for a min VH,
   * and uses Kaguya's title as the basis for a max VH.
   * The equation is essentially: 2 - ((InputLen) - (minLen)) * C
   * where C is a constant
   * The constant was found by plugging in Kaguya's len (58) as InputLen, and Frieren's len (17)
   * as minLen
   */
  const calculatedValue = 2 - (titleLength - 17) * 0.00976;

  return Math.min(Math.max(calculatedValue, 1.6), 2);
}

/***
 * returns the time at secondsSinceEpoch in the format
 * "Month/Date/Year H/M/S"
 * @param secondsSinceEpoch
 * @returns {string}
 */
function formatTime(secondsSinceEpoch) {
  if (secondsSinceEpoch == null) {
    return "Never Updated";
  } else {
    const thisDate = new Date(secondsSinceEpoch);
    return `${(thisDate.getMonth() + 1).toString()}/${thisDate
      .getDate()
      .toString()}/${thisDate.getFullYear().toString()}
    ${thisDate.getHours().toString()}:${thisDate
      .getMinutes()
      .toString()}:${thisDate.getSeconds().toString()}
    `;
  }
}

export { getIdealFontSize, formatTime };
