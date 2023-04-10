import { LoginPageElements } from '../html/loginPageElements';
import { faker } from '@faker-js/faker';
import gerarCpf from '../../utils/gerarCpfValido';
import cadastroDeUsuarioData from '../../fixtures/cadastroDeUsuarioData';

class LoginPage {
  visit() {
    cy.visit('/');
    cy.title().should('eq', 'O mundo é mais bonito com você | Natura Brasil');
    cy.get(LoginPageElements.headerLoginButton).should('be.visible').click();
  }

  clickCriarConta() {
    cy.get(LoginPageElements.criarContaButton).click();
  }

  aceitarCookies() {
    cy.get(LoginPageElements.acceptCookiesButton).should('be.visible')
      .contains('Aceitar').click();
    cy.get(LoginPageElements.acceptCookiesButton).should('not.be.visible');
  }

  preencherFormulario() {
    const {
      firstName,
      lastName,
      email,
      password,
      telefone,
    } = cadastroDeUsuarioData;

    cy.get(LoginPageElements.firstNameInput).type(firstName).should('have.value', firstName);
    cy.get(LoginPageElements.lastNameInput).type(lastName).should('have.value', lastName);
    cy.get(LoginPageElements.emailInput).type(email).should('have.value', email);
    cy.get(LoginPageElements.passwordInput).type(password).should('have.value', password);
    cy.get(LoginPageElements.confirmPasswordInput).type(password).should('have.value', password);
    cy.get(LoginPageElements.cpfInput).type(gerarCpf()).should('not.be.null');
    cy.get(LoginPageElements.femaleRadioButton).click().should('be.checked');
    cy.get(LoginPageElements.homePhoneInput).type(telefone).should('not.be.null');
    cy.get(LoginPageElements.acceptTermsCheckbox).click().should('be.checked');
  }

  clickCriarContaFinal() {
    cy.contains('Criar Conta').click();
  }
}

export default new LoginPage();






















  