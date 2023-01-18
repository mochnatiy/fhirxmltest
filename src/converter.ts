import { loadBundleJSON } from "./resources/eaubundle"
import { Fhir, ValidationMessage } from 'fhir'

const convertFHIRBundle = (): String => {
  const eauBundleJSON = loadBundleJSON()

  const fhir = new Fhir()
  const eauBundleXML = fhir.objToXml(eauBundleJSON)

  console.log({ eauBundleXML })

  const validationResult = fhir.validate(eauBundleXML, { errorOnUnexpected: true })

  validationResult.messages.map((validationMessage: ValidationMessage): void => {
    console.log({
      location: validationMessage.location,
      severity: validationMessage.severity,
      resourceId: validationMessage.resourceId,
      message: validationMessage.message
    })
  })

  if (!validationResult.valid) {
    throw new Error('XML is not valid')
  }

  return eauBundleXML.toString()
}

export default convertFHIRBundle
