/**
 * 4 桁の文字列に : (コロン) を入力する
 * @param str 対象文字列
 */
export const formatTime = (str) => {
  return str.slice(0, 2) + ':' + str.slice(2)
}
