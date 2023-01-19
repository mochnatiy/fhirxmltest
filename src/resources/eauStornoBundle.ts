import data from "./eauStornoBundle.json"

export type eauStornoBundleJSON = typeof data

export const loadEauStornoBundleJSON = (): eauStornoBundleJSON => data
