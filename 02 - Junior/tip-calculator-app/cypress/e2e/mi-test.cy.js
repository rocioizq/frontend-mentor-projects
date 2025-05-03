describe("Tip calculator", () => {
    beforeEach(() => {
        cy.visit("https://frontend-mentor-projects-9akm.vercel.app/")
    });

    it("Verifica que la imagen del título esté visible", () => {
        cy.get("img").should("be.visible");
    });

    it("Verifica el cálculo de la propina y selecciona un porcentaje", () => {
        cy.get("input[name='bill']").type("100");
        cy.get("input[name='people']").type("4");
        cy.get("button[data-tip='0.15']").click();

        cy.get(".result-amount").should("have.text", "$3.75");
        cy.get(".result-total").should("have.text", "$28.75");
    });

    it("Verificar que muestre error cuando se ponen 0 personas", () => {
        cy.get("input[name='bill']").type("100");
        cy.get("input[name='people']").type("0");
        cy.get("button[data-tip='0.15']").click();

        cy.get(".error-msg").should("have.text", "Can't be zero");
    });

    it("Verificar que input porcentaje personalizado funcione", () => {
        cy.get("input[name='bill']").type("100");
        cy.get("input[name='people']").type("4");
        cy.get("#custom").type("20");

        cy.get(".result-amount").should("have.text", "$5.00");
        cy.get(".result-total").should("have.text", "$30.00");
    })

    it("Verificar que el boton Reset funcione correctamente", () => {
        cy.get("input[name='bill']").type("100");
        cy.get("input[name='people']").type("4");
        cy.get("button[data-tip='0.15']").click();

        cy.get(".result-amount").should("have.text", "$3.75");
        cy.get(".result-total").should("have.text", "$28.75");
        
        cy.get("button.reset").click();
        cy.get(".result-amount").should("have.text", "$0.00");
        cy.get(".result-total").should("have.text", "$0.00");
        cy.get("input[name='bill']").should("have.value", "");
        cy.get("input[name='people']").should("have.value", "")
    });

})