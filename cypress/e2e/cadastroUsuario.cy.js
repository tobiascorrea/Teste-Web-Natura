import LoginPage from '../support/pages/loginPage';
import { LoginPageElements } from '../support/html/loginPageElements';
import gerarCpf from '../utils/gerarCpfValido';
import cadastroDeUsuarioData from '../fixtures/cadastroDeUsuarioData';

describe('Cadastro de Usuário', () => {
    const firstName = cadastroDeUsuarioData;
    const lastName = cadastroDeUsuarioData;
    const email = cadastroDeUsuarioData;
    const password = cadastroDeUsuarioData;
    const cpf = gerarCpf
    const homePhone = cadastroDeUsuarioData;

    before(() => {
        LoginPage.visit(LoginPageElements.headerLoginButton);
        LoginPage.clickCriarConta(LoginPageElements.criarContaButton);
        cy.title().should('eq', 'Cadastre-se | Natura Brasil');
        LoginPage.aceitarCookies(LoginPageElements.acceptCookiesButton);
    });

    it('deve cadastrar um usuário com sucesso', () => {
        LoginPage.preencherFormulario(
            LoginPageElements.firstNameInput,
            LoginPageElements.lastNameInput,
            LoginPageElements.emailInput,
            LoginPageElements.passwordInput,
            LoginPageElements.confirmPasswordInput,
            LoginPageElements.cpfInput,
            LoginPageElements.femaleRadioButton,
            LoginPageElements.homePhoneInput,
            LoginPageElements.acceptTermsCheckbox,
            firstName,
            lastName,
            email,
            password,
            password,
            cpf,
            homePhone
        );

        LoginPage.clickCriarContaFinal(LoginPageElements.criarContaFinalButton);

        cy.get('.MuiBox-root > .MuiTypography-subtitle2')
            .should('be.visible')
            .and('contain', `Olá, ${cadastroDeUsuarioData.firstName}!`);

        cy.url().should('eq', 'https://www.natura.com.br/');
    });
});













