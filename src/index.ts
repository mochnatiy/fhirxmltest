import { serializeEauBundle, serializeEauStornoBundle } from "./fhirJsSerializer"
import {
  serializeEauBundle as serializeEauBundleFXP,
  serializeEauStornoBundle as serializeEauStornoBundleFXP
} from "./fastXmlParser"
import fs from 'fs'

const fhirJsEauContent = Buffer.from(serializeEauBundle())
const fhirJsEauStornoContent = Buffer.from(serializeEauStornoBundle())
const fastXmlParserEauContent = Buffer.from(serializeEauBundleFXP())
const fastXmlParserEauStornoContent = Buffer.from(serializeEauStornoBundleFXP())

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

fs.writeFile('./bundles/bundleFastXmlParser.xml', fastXmlParserEauStornoContent, err => {
  if (err) {
    console.error(err)
  }
})
