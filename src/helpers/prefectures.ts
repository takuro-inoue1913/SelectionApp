
/**
 * 指定された範囲の英単語をアルファベット順で返します
 * @param first 
 * @param last 
 * @returns string[]
 */
export function alphabeticalOrderRange(first: string, last: string) {
  const firstNum = first.charCodeAt(0)
  const lastNum = last.charCodeAt(0)
  const result = []
  for (let i = firstNum; i <= lastNum; i += 1) {
    result.push(String.fromCodePoint(i))
  }
  return result
}

/**
 * ランダムなカラーコードを返します
 * @returns string
 */
export function randomColorGenerate() {
  let color = Math.ceil(16777215 * Math.random()).toString(16)
  let {length} = color
  while(length < 6){
    color = `0${color}`
    length += 1
  }
  return `#${color}`
}