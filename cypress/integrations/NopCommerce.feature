Feature: NopCommerce

    Background:
        Given User opens the website

    Scenario: CP-9 | Verify that user is able to sort products by price
    Given User selects catalog "Computers"
    When User selects category "Notebooks"
    When User sorts products with option "Price: Low to High"
    Then User should see product prices sorted from lowest to highest