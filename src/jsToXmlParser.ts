import { loadEauStornoBundleJSON } from "./resources/eauStornoBundle"
import * as jsToXmpParser from 'js2xmlparser'

export const serializeEauStornoBundle = (): String => {
  const eauStornoBundleJSON = loadEauStornoBundleJSON()

  const eauXmlContent = jsToXmpParser.parse('Bundle', eauStornoBundleJSON)

  return eauXmlContent.toString()
}
