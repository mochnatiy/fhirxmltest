import { loadEauStornoBundleJSON } from "./resources/eauStornoBundle"
import { toXML } from 'jstoxml'

export const serializeEauStornoBundle = (): String => {
  const eauStornoBundleJSON = loadEauStornoBundleJSON()

  const eauXmlContent = toXML(eauStornoBundleJSON)

  return eauXmlContent.toString()
}
