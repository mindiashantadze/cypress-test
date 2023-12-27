import * as locators from "../fixtures/locators.json";

class PLP {
    public sort(sortOption: string): void {
        cy.get(locators.sortButton).select(sortOption);
    }

    public validateProductPrices() {
        cy.wait(5000);
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
}

const plp = new PLP();

export default plp;