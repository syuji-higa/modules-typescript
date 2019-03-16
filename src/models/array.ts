export const createArray = (num: number /* int[0,inf) */, val: any): any[] => {
  const _arr: any[] = []

  for (let i: number = 0; num > i; i++) {
    _arr[i] = val
  }

  return _arr
}

export const createSerialNumberArray = (
  num: number /* int[0,inf) */,
  start: number /* int */ = 0
): number[] => {
  const _arr: number[] = []

  for (let i: number = 0; num > i; i++) {
    _arr[i] = start + i
  }

  return _arr
}

export const shuffleArray = (arr: any[]): any[] => {
  let _n: number /* int[0,inf) */ = arr.length
  let _t: number /* int[0,inf) */ = 0
  let _i: number /* int[0,inf) */ = 0

  while (_n) {
    _i = Math.floor(Math.random() * _n--)
    _t = arr[_n]
    arr[_n] = arr[_i]
    arr[_i] = _t
  }

  return arr
}

export const flattenArray = (arr: any[][]): any[] => {
  return arr.reduce((memo: any[], val: any): any[] => {
    return Array.isArray(val)
      ? memo.concat(flattenArray(val))
      : memo.concat(val)
  }, [])
}

export const caterpillarArray = (
  arr: any[],
  num: number /* int[0,inf) */
): any[] => {
  if (0 < num) {
    arr.push(arr.splice(0, num))
  } else if (0 > num) {
    arr.unshift(...arr.splice(num, arr.length - num))
  }
  return arr
}
