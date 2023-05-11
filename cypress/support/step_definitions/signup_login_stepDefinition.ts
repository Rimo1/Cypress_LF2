import {Given,Then } from "@badeball/cypress-cucumber-preprocessor";
import {Welcome_page} from '../pages/welcome_page';
import {GetStarted_page} from '../pages/getStarted_page';
import  {CreateAccount_page} from "../pages/createAccount_page";
import {user14, user15, user4, user7, user8, user9} from "../utils/dataSet";

const welcomePage = new Welcome_page();
const getStartedPage = new GetStarted_page();
const createAccountPage = new CreateAccount_page();

Given("The user is on the LF welcome page", function () {
    cy.reload();
    cy.reload();
    welcomePage.visitWelcomePage();

});
Then(/^The user clicks on the Join and get recommendation button$/, function () {

   welcomePage.clickOnJoinAndGetRecommendationBtn();

});

Then(/^Clicks on the Get started button from the How to get started page$/, function () {
    cy.scrollTo('bottom', { ensureScrollable: false });
    getStartedPage.clickOnGetStartedBtn();
});

Then("Fills the sign up form with desired data", function () {
    createAccountPage.signUpNewUser(user15);
});

Then("Signs up with email", function () {
    createAccountPage.clickOnSignUpMethod();
    createAccountPage.clickOnEmailButton();
});

Then("The user has received the magic link and clicked on it", function () {

    cy.clearCookies()
    cy.getCookies().should('be.empty')
    cy.clearLocalStorage();
    cy.clearAllSessionStorage();

    const username = 'curveqa'
    const password = 'Curve@2023'
    const auth = 'Basic ' + btoa(username + ':' + password)

    cy.request({
        method: 'GET',
        url: 'https://lf-api-staging.herokuapp.com/api/v1/tokens/generate?&',
        qs: {
            email: user15.email
        },
        headers: {
            'Authorization': auth
        }
    }).then((response) => {
        expect(response.status).to.be.oneOf([200, 201, 202])
        const responseBody = response.body
        const magicLink = responseBody.magic_link
        // Visit the magic link
        cy.visit(magicLink)
    })
});

Then(/^The user should be notified that a secure login link is sent$/, function () {

});