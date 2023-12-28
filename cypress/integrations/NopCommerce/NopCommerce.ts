import nav from "../../pom/Nav";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import plp from "../../pom/PLP";

Given("User opens the website", () => {
    cy.visit("/");
})

Given("User selects catalog {string}", (catalogName: string) => {
    nav.selectCatalog(catalogName);
});

When("User selects category {string}", (categoryName: string) => {
    nav.selectCategory(categoryName);
});

When("User sorts products with option {string}", (sortOption: string) => {
    plp.sort(sortOption);
})

Then("User should see product prices sorted from lowest to highest", () => {
    plp.validateProductPrices();
});