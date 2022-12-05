export function useDateTime() {
  const formatTime = (str) => {
    return str.slice(0, 2) + ':' + str.slice(2)
  }
  return { formatTime }
}
