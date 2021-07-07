export default () => {
  // Convert a word/phrase to 'Title Case'.
  const toTitle = (value) => value
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return { toTitle }
}