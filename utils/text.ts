/**
 * 最初の文字を大文字に変更する
 * @param text 対象文字列
 */
export const capitalizeFirstCharacter = (text: string) => {
  if (typeof text !== 'string' || !text) return text
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}
