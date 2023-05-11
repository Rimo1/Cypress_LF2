import BasePage from "../utils/basePage";
import 'cypress-xpath';



const SCROLLER_PARENT = '//app-onboarding[@class=\'ion-page can-go-back\']//ion-content[@class=\'md content-ltr hydrated\']';
const SCROLLER_ELEMENT = '.inner-scroll.scroll-y';



const NEXT_BTN = 'form.ng-dirty > .ion-color';


export class Personalisation_concerns_rating_page extends BasePage {
    constructor() {
        super();
    }


    clickOnNextButton(){
        cy.xpath(SCROLLER_PARENT).shadow().find(SCROLLER_ELEMENT).scrollTo('bottom');
        cy.get(NEXT_BTN).click();
 }

}