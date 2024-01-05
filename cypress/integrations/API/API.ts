import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("User sends request to API he or she should get a correct response", () => {
    cy.request("https://jsonplaceholder.typicode.com/todos").then((res) => {
        const todoArray: Array<any> = res.body;
        
        expect(res.status).to.equal(200);
        expect(todoArray.length).to.equal(200);
        todoArray.forEach((todoItem) => {
            expect(typeof todoItem.userId).to.equal('number');
            expect(typeof todoItem.title).to.equal('string');
            expect(typeof todoItem.completed).to.equal('boolean');
        })
    });
})