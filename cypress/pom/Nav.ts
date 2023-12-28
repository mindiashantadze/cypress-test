/// <reference types = "cypress" />

import * as locators from "../fixtures/locators.json";

class Nav {
    public selectCatalog(catalogName: string): void {
        cy.get(locators.catalogDesktop).contains(catalogName).click();
    }   

    public selectCategory(categoryName: string): void {
        cy.get(locators.categoryDesktop).contains(categoryName).click();
    }
}

const nav = new Nav();

export default nav;