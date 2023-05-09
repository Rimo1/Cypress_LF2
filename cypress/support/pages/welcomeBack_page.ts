import BasePage from "../utils/basePage";
const CONTINUE_BTN = '.button-inner';
const CREATE_AN_ACCOUNT_CHECKED = '.completed';
const WELCOME_BACK_HEADER_TEXT = 'h1';
const SCROLLER_ELEMENT = '.inner-scroll.scroll-y';
const SCROLLER_PARENT = '//app-get-started[@class=\'ion-page can-go-back\']//ion-content[@class=\'md content-ltr hydrated\']';
const CONTINUE_BUTTON = '.ion-padding-horizontal > .ion-color';
import 'cypress-xpath';




export class WelcomeBack_page extends BasePage {
    constructor() {
        super();
    }

 verifyWelcomeBackPageAppeared(){
    this.waitForElementToAppear(WELCOME_BACK_HEADER_TEXT);
    cy.get(WELCOME_BACK_HEADER_TEXT).should('be.visible').should('contain','Welcome back');
 }

 verifyFirstStepMarkedAsDone(){
     this.waitForElementToAppear(CREATE_AN_ACCOUNT_CHECKED);
     cy.get(CREATE_AN_ACCOUNT_CHECKED).should('be.visible');

 }

 clickOnContinueButton(){
        cy.xpath(SCROLLER_PARENT).shadow().find(SCROLLER_ELEMENT).scrollTo('bottom');
        this.waitForElementToAppear(CONTINUE_BUTTON);
        cy.get(CONTINUE_BUTTON).click();
 }

}