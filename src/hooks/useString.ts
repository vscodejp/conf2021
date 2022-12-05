export function useString() {
  const capitalizeFirst = (text: string) => {
    if (typeof text !== 'string' || !text) return text
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
  }
  return { capitalizeFirst }
}
