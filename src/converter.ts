import { loadBundleJSON } from "./resources/eaubundle"
import { loadEauStornoBundleJSON } from "./resources/eauStornoBundle"
import { Fhir, ValidationMessage } from 'fhir'

export const serializeEauBundle = (): String => {
  const eauBundleJSON = loadBundleJSON()

  const fhir = new Fhir()
  const eauBundleXML = fhir.objToXml(eauBundleJSON)

  const eauValidationResult = fhir.validate(eauBundleXML, { errorOnUnexpected: true })

  eauValidationResult.messages.map((validationMessage: ValidationMessage): void => {
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

  eauStornoValidationResult.messages.map((validationMessage: ValidationMessage): void => {
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
