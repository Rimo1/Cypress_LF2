import BasePage from "../utils/basePage";
const GET_STARTED_BTN = '[title="Continue creating your account"]';


export class GetStarted_page extends BasePage {
    constructor() {
        super();
    }

    clickOnGetStartedBtn(){
        cy.get(GET_STARTED_BTN).scrollIntoView();
        this.click(GET_STARTED_BTN);
    }


}