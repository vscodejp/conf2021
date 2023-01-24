interface Member {
  name: string
  url?: string
  iconName?: string
  iconFilename?: string
}

export function useArray() {
  function sortArray(members: Member[]) {
    return members.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
  }

  function groupBy<K, V>(
    array: readonly V[],
    getKey: (cur: V, idx: number, src: readonly V[]) => K,
  ): [K, V[]][] {
    return Array.from(
      array.reduce((map, cur, idx, src) => {
        const key = getKey(cur, idx, src)
        const list = map.get(key)
        if (list) list.push(cur)
        else map.set(key, [cur])
        return map
      }, new Map<K, V[]>()),
    )
  }

  return { sortArray, groupBy }
}
