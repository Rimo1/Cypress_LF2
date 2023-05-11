import BasePage from "../utils/basePage";
import 'cypress-xpath';

const PALLIATIVE_RADIO_BTN = ':nth-child(1) > .radio-button-container-title > .more-padding';
const RELAPSE_RADIO_BTN = ':nth-child(2) > .radio-button-container-title > .more-padding';
const SURVIVORSHIP_RADIO_BTN = ':nth-child(3) > .radio-button-container-title > .more-padding';
const NEWLY_DIAGNOSED_RADIO_BTN = ':nth-child(4) > .radio-button-container-title > .more-padding';
const IN_TREATMENT_RADIO_BTN = ':nth-child(5) > .radio-button-container-title > .more-padding';
const SURVEILLANCE_RADIO_BTN = ':nth-child(6) > .radio-button-container-title > .more-padding';

const SCROLLER_PARENT = '//app-onboarding[@class=\'ion-page can-go-back\']//ion-content[@class=\'md content-ltr hydrated\']';
const SCROLLER_ELEMENT = '.inner-scroll.scroll-y';



const NEXT_BTN = 'form.ng-touched > .ion-color';


export class Personalisation_journey_stage_page extends BasePage {
    constructor() {
        super();
    }

    clickOnPalliativeBtn(){
        cy.get(PALLIATIVE_RADIO_BTN).click()
    }

    clickOnRelapseBtn(){
        cy.get(RELAPSE_RADIO_BTN).click()
    }
    clickOnSurvivorshipBtn(){
        cy.get(SURVIVORSHIP_RADIO_BTN).click()
    }

    clickOnNewlyDiagnosedBtn(){
        cy.xpath(SCROLLER_PARENT).shadow().find(SCROLLER_ELEMENT).scrollTo('bottom');
        cy.get(NEWLY_DIAGNOSED_RADIO_BTN).click()
    }

    clickOnInTreatmentBtn(){
        cy.xpath(SCROLLER_PARENT).shadow().find(SCROLLER_ELEMENT).scrollTo('bottom');
        cy.get(IN_TREATMENT_RADIO_BTN).click()
    }

    clickOnSurveillanceBtn(){
        cy.xpath(SCROLLER_PARENT).shadow().find(SCROLLER_ELEMENT).scrollTo('bottom');
        cy.get(SURVEILLANCE_RADIO_BTN).click()
    }

    clickOnNextButton(){
        cy.xpath(SCROLLER_PARENT).shadow().find(SCROLLER_ELEMENT).scrollTo('bottom');
        cy.get(NEXT_BTN).click();
 }

}