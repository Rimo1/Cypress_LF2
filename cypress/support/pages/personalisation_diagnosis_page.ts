import BasePage from "../utils/basePage";
const DIAGNOSIS_TYPE_DROPDOWN = '#diagnosis-select';

const DIAGNOSIS_OPTION_AMYLOIDOSIS = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(1) > .in-item';
const DIAGNOSIS_OPTION_BLOOD_DISORDER = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(2) > .in-item';
const DIAGNOSIS_OPTION_CML = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(3) > .in-item';
const DIAGNOSIS_OPTION_LEUKAEMIA = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(4) > .in-item';
const DIAGNOSIS_OPTION_LYMPHOMA = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(5) > .in-item';
const DIAGNOSIS_OPTION_MDS = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(6) > .in-item';
const DIAGNOSIS_OPTION_MYELOMA = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(7) > .in-item';
const DIAGNOSIS_OPTION_MPN = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(8) > .in-item';
const DIAGNOSIS_OPTION_OTHERS = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(9) > .in-item';


const DIAGNOSIS_SUBTYPE_DROPDOWN = '#diagnosis-subtype-select';

//SUBTYPES FOR BLOOD DISORDER

const BLOOD_DISORDER_SUBTYPE_AA = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(1) > .in-item';
const BLOOD_DISORDER_SUBTYPE_ITP = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(2) > .in-item';
const BLOOD_DISORDER_SUBTYPE_MASTOCYTOSIS = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(3) > .in-item';
const BLOOD_DISORDER_SUBTYPE_MGUS = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(4) > .in-item';
const BLOOD_DISORDER_SUBTYPE_OTHER = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(5) > .in-item';
const BLOOD_DISORDER_SUBTYPE_PNH = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(6) > .in-item';
const BLOOD_DISORDER_SUBTYPE_SUBTYPE_UNKNOWN = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(7) > .in-item';
const BLOOD_DISORDER_SUBTYPE_TTP = 'ion-radio-group.sc-ion-select-popover-ios > :nth-child(8) > .in-item';



const NEXT_BTN = 'form.ng-touched > .ion-color';


export class Personalisation_diagnosis_page extends BasePage {
    constructor() {
        super();
    }

 selectDiagnosisTypeAndSubtype(){
         cy.get(DIAGNOSIS_TYPE_DROPDOWN).click();
         cy.get(DIAGNOSIS_OPTION_BLOOD_DISORDER).click();
         cy.get(DIAGNOSIS_SUBTYPE_DROPDOWN).click();
         cy.get(BLOOD_DISORDER_SUBTYPE_SUBTYPE_UNKNOWN).click({multiple: true,force:true});
 }

 clickOnNextButton(){
     cy.get(NEXT_BTN).click();
 }

}