import BasePage from "../utils/basePage";
import {BASE_URL} from "../utils/constants";

const JOIN_BTN = 'ul > :nth-child(1) > .md';
const LOGIN_BTN = 'ul > :nth-child(2) > .md';
const TAKE_A_LOOK_BTN = '#takeaLookButton';
const JOIN_AND_GET_RECOMMENDATIONS_BTN = '//ion-button[@id=\'joinAndGetRecommendationsButton\']';
const CONNECT_BTN = '[title = "Connect and chat with a Blood Cancer Support Coordinator"]';
const SCROLLER_PARENT = '//app-welcome-page[@class=\'ion-page\']/ion-content';
const SCROLLER_ELEMENT = '.inner-scroll.scroll-y';

export class Welcome_page extends BasePage {
    constructor() {
        super();
    }

    clickOnJoinBtn(){
        this.waitForElementToAppear(JOIN_BTN);
        this.click(JOIN_BTN);
        cy.get(JOIN_BTN).click({force:true});
    }
    clickOnLoginBtn(){
        this.click(LOGIN_BTN);
    }
    clickOnTakeALookBtn(){
        this.click(TAKE_A_LOOK_BTN);
    }
    clickOnJoinAndGetRecommendationBtn(){
        cy.xpath(SCROLLER_PARENT).shadow().find(SCROLLER_ELEMENT).scrollTo('bottom');
        cy.xpath(JOIN_AND_GET_RECOMMENDATIONS_BTN).click();
    }
    clickOnConnectBtn(){
        this.click(CONNECT_BTN);
    }

    visitWelcomePage(){
        cy.visit(BASE_URL);
    }

}