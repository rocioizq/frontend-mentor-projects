describe("Age calculator", () => {
    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/index.html")
    });

    it("Verificar que los inputs de la calculadora estén visible", () => {
        cy.get("input#day").should("be.visible");
        cy.get("input#month").should("be.visible");
        cy.get("input#year").should("be.visible");
        cy.get("button.btn-submit").should("be.visible");
    });

    it("Verificar que calcula correctamente", () => {
        cy.get("input#day").type("17");
        cy.get("input#month").type("04");
        cy.get("input#year").type("1998");
        cy.get("button.btn-submit").click();

        cy.get(".result-year").should("have.text", "27");
        cy.get(".result-month").should("have.text", "0");
        cy.get(".result-day").should("have.text", "0");
    });

    it("Verificar que muestre error cuando se pone una fecha invalida", () => {
        cy.get("input#day").type("40");
        cy.get("input#month").type("15");
        cy.get("input#year").type("1200");
        cy.get("button.btn-submit").click();

        cy.get("span.error").should("be.visible");
    });

    it("Verificar que muestre error cuando los inputs están vacíos", () => {
        cy.get("button.btn-submit").click();

        cy.get("span.error").should("be.visible");
        cy.get(".result-year").should("have.text", "- -");
        cy.get(".result-month").should("have.text", "- -");
        cy.get(".result-day").should("have.text", "- -");
    })
})