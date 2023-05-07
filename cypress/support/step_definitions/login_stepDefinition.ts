import {Given,Then } from "@badeball/cypress-cucumber-preprocessor";
import {Welcome_page} from '../pages/welcome_page';
import {GetStarted_page} from '../pages/getStarted_page';
import  {CreateAccount_page} from "../pages/createAccount_page";
import {user1, user2, user3, user4, user5} from "../utils/dataSet";

const welcomePage = new Welcome_page();
const getStartedPage = new GetStarted_page();
const createAccountPage = new CreateAccount_page();

Given("The user is on the LF welcome page", function () {
    welcomePage.visitWelcomePage();

});
Then(/^Click on the Join and get recommendation button$/, function () {

   welcomePage.clickOnJoinAndGetRecommendationBtn();

});

Then(/^Click on the Get started button$/, function () {
    cy.scrollTo('bottom', { ensureScrollable: false });
    getStartedPage.clickOnGetStartedBtn();
});

Then("Fill the sign up form", function () {
    createAccountPage.signUpNewUser(user5);
});

Then("Sign up with email", function () {
    createAccountPage.clickOnSignUpMethod();
    createAccountPage.clickOnEmailButton();
});

Then("The user has clicked on the magic link", function () {

    const username = 'curveqa'
    const password = 'Curve@2023'
    const auth = 'Basic ' + btoa(username + ':' + password)

    cy.request({
        method: 'GET',
        url: 'https://lf-api-staging.herokuapp.com/api/v1/tokens/generate?&',
        qs: {
            email: user5.email
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
