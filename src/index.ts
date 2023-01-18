import convertFHIRBundle from "./converter"
import fs from 'fs'

const content = Buffer.from(convertFHIRBundle())

fs.writeFile('./bundles/bundleFhirJs.xml', content, err => {
  if (err) {
    console.error(err)
  }
})
