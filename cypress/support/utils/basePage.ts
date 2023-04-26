import {BASE_URL, WAIT_TIMEOUT} from './constants';
import * as cypress from "cypress";

export default class BasePage {
    constructor() {
    }
    click(selector: string, params = {}) {
        cy.get(selector).click(params);
    }

    waitForElementToAppear(elementSelector: string, timeout = WAIT_TIMEOUT) {
        cy.get(elementSelector, {timeout}).should('be.visible');
    }
}
