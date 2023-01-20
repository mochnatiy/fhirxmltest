import { loadEauBundleJSON } from "./resources/eaubundle"
import { loadEauStornoBundleJSON } from "./resources/eauStornoBundle"
import { XMLBuilder, XMLValidator } from 'fast-xml-parser'

export const serializeEauBundle = (): String => {
  const eauBundleJSON = loadEauBundleJSON()

  const builder = new XMLBuilder({ ignoreAttributes: false })
  const eauXmlContent = builder.build(eauBundleJSON)

  const validationResult = XMLValidator.validate(eauXmlContent, {
    allowBooleanAttributes: true
  })

  if (!validationResult) {
    throw new Error('FastXmlParser XML is not valid')
  }

  return eauXmlContent.toString()
}

export const serializeEauStornoBundle = (): String => {
  const eauStornoBundleJSON = loadEauStornoBundleJSON()

  const builder = new XMLBuilder({ ignoreAttributes: false })
  const eauXmlContent = builder.build(eauStornoBundleJSON)

  const validationResult = XMLValidator.validate(eauXmlContent, {
    allowBooleanAttributes: true
  })

  if (!validationResult) {
    throw new Error('FastXmlParser XML is not valid')
  }

  return eauXmlContent.toString()
}
