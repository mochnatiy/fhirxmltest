import data from "./eaubundle.json"

export type eauBundleJSON = typeof data

export const loadEauBundleJSON = (): eauBundleJSON => data
