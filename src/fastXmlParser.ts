import { loadBundleJSON } from "./resources/eaubundle"
import {  XMLBuilder, XMLValidator} from 'fast-xml-parser'

const serializeFHIRBundle = (): String => {
  const eauBundleJSON = loadBundleJSON()

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

export default serializeFHIRBundle
