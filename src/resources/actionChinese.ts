import actionChinese from './actionChinese.json'
import { extraTips } from './extraTips'

const actionChineseMap = new Map(Object.entries(actionChinese))
const tipsMap = new Map(Object.entries(extraTips))
// const params = new URLSearchParams(window.location.search)
// const tipsMode = params.get('tipsMode')
export function getActionChinese(id: number, tipsMode: string | null): string | undefined {
  // console.warn(`tipsMode=${tipsMode}`)
  // console.warn(`window.location.search=${window.location.search}`)
  const tips = tipsMap.get(id.toString(16).toLowerCase())
  switch (tipsMode) {
    case 'only':
      return tips ? `【${tips}】` : ''
    case 'overwrite':
      return tips ? `【${tips}】` : actionChineseMap.get(id.toString())
    case 'combine':
    default:
      return (tips ? `[${tips}]` : '') + actionChineseMap.get(id.toString())
  }

  // return tips ? `【${tips}】` : actionChineseMap.get(id.toString())
  // return (tips ? `[${tips}]` : '') + actionChineseMap.get(id.toString())
}
