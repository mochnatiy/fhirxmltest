import data from "./eaubundle.json"

export type fhirBundleJSON = typeof data

export const loadBundleJSON = (): fhirBundleJSON => data
