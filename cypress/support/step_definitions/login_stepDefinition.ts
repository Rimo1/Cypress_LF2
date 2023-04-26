import {Given,Then } from "@badeball/cypress-cucumber-preprocessor";
import {Welcome_page} from '../pages/welcome_page';
import {GetStarted_page} from '../pages/getStarted_page';
import  {CreateAccount_page} from "../pages/createAccount_page";
import {user1, user2} from "../utils/dataSet";

const welcomePage = new Welcome_page();
const getStartedPage = new GetStarted_page();
const createAccountPage = new CreateAccount_page();

Given("The user is on the LF welcome page", function () {
    welcomePage.visitWelcomePage();

});
Then(/^Click on the Join button$/, function () {

   welcomePage.clickOnJoinAndGetRecommendationBtn();

});

Then(/^Click on the Get started button$/, function () {
    cy.scrollTo('bottom', { ensureScrollable: false });
    getStartedPage.clickOnGetStartedBtn();
});

Then("Fill the sign up form", function () {
    createAccountPage.signUpNewUser(user2);
});