import BasePage from "../utils/basePage";
import 'cypress-xpath';

const MY_FIRST_CONCERN_TEXT_BOX = '//textarea[@placeholder=\'eg. Being able to travel\']';
const MY_SECOND_CONCERN_TEXT_BOX = '//textarea[@placeholder=\'eg. Having fun with my partner\']';

const SCROLLER_PARENT = '//app-onboarding[@class=\'ion-page can-go-back\']//ion-content[@class=\'md content-ltr hydrated\']';
const SCROLLER_ELEMENT = '.inner-scroll.scroll-y';



const NEXT_BTN = 'form.ng-dirty > .ion-color';

export interface ConcernsOnboarding {
    firstConcern: string;
    secondConcern: string;
}


export class Personalisation_concerns_page extends BasePage {
    constructor() {
        super();
    }

    provideFirstConcern(firstConcern:string){
        cy.xpath(MY_FIRST_CONCERN_TEXT_BOX).type(firstConcern);
    }

    provideSecondConcern(secondConcern:string){
        cy.xpath(MY_SECOND_CONCERN_TEXT_BOX).type(secondConcern);
    }

    provideConcerns(concerns:ConcernsOnboarding){
        cy.xpath(MY_FIRST_CONCERN_TEXT_BOX).type(concerns.firstConcern);
        cy.xpath(SCROLLER_PARENT).shadow().find(SCROLLER_ELEMENT).scrollTo('bottom');
        cy.xpath(MY_SECOND_CONCERN_TEXT_BOX).type(concerns.secondConcern);
        cy.get(NEXT_BTN).click();
    }


    clickOnNextButton(){
        cy.xpath(SCROLLER_PARENT).shadow().find(SCROLLER_ELEMENT).scrollTo('bottom');
        cy.get(NEXT_BTN).click();
 }

}