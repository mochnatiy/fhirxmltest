import { loadEauBundleJSON } from "./resources/eaubundle"
import { loadEauStornoBundleJSON } from "./resources/eauStornoBundle"
import { Fhir } from 'fhir'
import { ValidatorMessage } from "fhir/validator"

export const serializeEauBundle = (): String => {
  const eauBundleJSON = loadEauBundleJSON()

  const fhir = new Fhir()
  const eauBundleXML = fhir.objToXml(eauBundleJSON)

  const eauValidationResult = fhir.validate(eauBundleXML, { errorOnUnexpected: true })

  console.log("Validation of eAU Bundle")
  eauValidationResult.messages.map((validationMessage: ValidatorMessage): void => {
    console.log({
      location: validationMessage.location,
      severity: validationMessage.severity,
      resourceId: validationMessage.resourceId,
      message: validationMessage.message
    })
  })

  if (!eauValidationResult.valid) {
    throw new Error('FHIR.js EAU XML is not valid')
  }

  return eauBundleXML.toString()
}

export const serializeEauStornoBundle = (): String => {
  const eauStornoBundleJSON = loadEauStornoBundleJSON()

  const fhir = new Fhir()

  const eauStornoBundleXml = fhir.objToXml(eauStornoBundleJSON)
  const eauStornoValidationResult = fhir.validate(eauStornoBundleJSON, { errorOnUnexpected: true })

  console.log("Validation of eAU Storno Bundle")
  eauStornoValidationResult.messages.map((validationMessage: ValidatorMessage): void => {
    console.log({
      location: validationMessage.location,
      severity: validationMessage.severity,
      resourceId: validationMessage.resourceId,
      message: validationMessage.message
    })
  })

  if (!eauStornoValidationResult.valid) {
    throw new Error('FHIR.js EAU Storno XML is not valid')
  }

  return eauStornoBundleXml.toString()
}
