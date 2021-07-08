export default function useFormatting() {
  /**
   * Convert a word/phrase to 'Title Case'.
   *
   * @param {string} value
   * @returns {string}
   *
   * @author Brian Kariuki Kiragu <bkariuki@hotmail.com>
   */
  const toTitle = (value: string = ''): string =>
    value.split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

  return { toTitle }
}