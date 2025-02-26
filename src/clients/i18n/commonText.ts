import { fetchI18n } from './fetch.js'

export type CommonTextI18n = {
    character: string
    rarity: string
    attribute: string
    card: string
}

export const fetchCommonText = fetchI18n<CommonTextI18n>('/common.json')
