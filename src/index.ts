import { serializeEauBundle, serializeEauStornoBundle } from "./converter"
import serializeFHIRBundle from "./fastXmlParser"
import fs from 'fs'

const fhirJsEauContent = Buffer.from(serializeEauBundle())
const fhirJsEauStornoContent = Buffer.from(serializeEauStornoBundle())
const fastXmlParserEauContent = Buffer.from(serializeFHIRBundle())

fs.writeFile('./bundles/bundleFhirJs.xml', fhirJsEauContent, err => {
  if (err) {
    console.error(err)
  }
})

fs.writeFile('./bundles/bundleFhirJsEauStorno.xml', fhirJsEauStornoContent, err => {
  if (err) {
    console.error(err)
  }
})

fs.writeFile('./bundles/bundleFastXmlParser.xml', fastXmlParserEauContent, err => {
  if (err) {
    console.error(err)
  }
})
