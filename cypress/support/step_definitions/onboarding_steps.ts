import {Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import {WelcomeBack_page} from '../pages/welcomeBack_page';
import {Personalisation_diagnosis_page} from '../pages/personalisation_diagnosis_page';
import {Personalisation_journey_stage_page} from "../pages/personalisation_journey_stage_page";
import {Personalisation_concerns_page} from "../pages/personalisation_concerns_page"
import {onboardingConcerns1} from "../utils/dataSet";


const welcomeBackPage = new WelcomeBack_page();
const personalisation_diagnosis_page = new Personalisation_diagnosis_page();
const personalisation_journey_stage_page = new Personalisation_journey_stage_page();
const personalisation_concerns_page = new Personalisation_concerns_page();


Given (/^The user should land on the Welcome back page where the 1st step of onboarding is marked as done$/, function () {
    welcomeBackPage.verifyWelcomeBackPageAppeared();
    welcomeBackPage.verifyFirstStepMarkedAsDone();
});
When(/^The user clicks on the Continue button$/, function () {
 welcomeBackPage.clickOnContinueButton();

});
When(/^Provides data regarding diagnosis type and subtype$/, function () {
   personalisation_diagnosis_page.selectDiagnosisTypeAndSubtype();
   personalisation_diagnosis_page.clickOnNextButton();


});
When(/^Selects diagnosis stage$/, function () {
    personalisation_journey_stage_page.clickOnInTreatmentBtn();
    personalisation_journey_stage_page.clickOnNextButton()
});
When(/^Provides first and second concerns$/, function () {
    personalisation_concerns_page.provideConcerns(onboardingConcerns1);
});