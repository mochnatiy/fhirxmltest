import { serializeEauBundle, serializeEauStornoBundle } from "./fhirJsSerializer"
import {
  serializeEauBundle as serializeEauBundleFXP,
  serializeEauStornoBundle as serializeEauStornoBundleFXP
} from "./fastXmlParser"
import { serializeEauStornoBundle as serializeEauStornoBundleJs2xml } from "./jsToXml"
import { serializeEauStornoBundle as serializeEauStornoBundleJs2xmlParser } from "./jsToXmlParser"
import fs from 'fs'

const fhirJsEauContent = Buffer.from(serializeEauBundle())
const fhirJsEauStornoContent = Buffer.from(serializeEauStornoBundle())
const fastXmlParserEauContent = Buffer.from(serializeEauBundleFXP())
const fastXmlParserEauStornoContent = Buffer.from(serializeEauStornoBundleFXP())
const js2xmlEauStornoContent = Buffer.from(serializeEauStornoBundleJs2xml())
const js2xmlParserEauStornoContent = Buffer.from(serializeEauStornoBundleJs2xmlParser())

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

fs.writeFile('./bundles/bundleJs2xml.xml', js2xmlEauStornoContent, err => {
  if (err) {
    console.error(err)
  }
})

fs.writeFile('./bundles/bundleJs2xmlParser.xml', js2xmlParserEauStornoContent, err => {
  if (err) {
    console.error(err)
  }
})
