import * as locators from "../fixtures/locators.json";

class PLP {
    public sort(sortOption: string): void {
        cy.get(locators.sortButton).select(sortOption);
    }

    public validateProductPrices() {
        this.waitUntilProductsAreSorted();
        this.waitUntilProductsLoaded();

        let priceArr: number[] = [];
        cy.get(locators.price).each((lblPrice, index: number) => {
            let price = lblPrice.text()
                .trim()
                .replace(",", "");

            price = price.replace("$", "");

            let priceNum: number = Number(price);
            cy.log(priceNum.toString() + " " + index);
            priceArr.push(priceNum);
        }).then(() => {
            for (let i: number= 1; i < priceArr.length; i++) {
                let currentPrice = priceArr[i];
                let previousPrice = priceArr[i - 1];

                expect(currentPrice).to.be.gte(previousPrice);
            }
        })
    }

    public waitUntilProductsAreSorted(): void {
        cy.waitUntil(() => cy.url().then((url: string) => {
            cy.log(url);
            return cy.wrap(url.includes("orderby").toString());
        }), {
            timeout: 5000,
            interval: 500,
            errorMsg: "The items are not sorted"
        })
    }

    public waitUntilProductsLoaded(): void {
        cy.waitUntil(() => cy.get(locators.loadingScreen).then((loadingScreen) => {
            return !loadingScreen.is(":visible");
        }), {
            interval: 500,
            timeout: 4000,
            errorMsg: "The products are not loaded"
        });
    }
}

const plp = new PLP();

export default plp;