
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