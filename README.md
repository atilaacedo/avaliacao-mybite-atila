# Desafio Técnico - Full Stack Developer

Este repositório contém as soluções desenvolvidas para a avaliação técnica, divididas em duas etapas focadas em **Frontend** e **Lógica de Programação**.

O objetivo foi não apenas cumprir os requisitos funcionais, mas também demonstrar boas práticas de arquitetura, organização de código, tipagem estática e UX/UI.

---

## Estrutura do Projeto

O projeto está organizado em dois módulos principais:

1.  **`/teste1`**: Sistema de Autenticação (SPA Vanilla JS)
2.  **`/teste2`**: Calculadora Financeira (React + TypeScript + Vite)

---

## Teste 1: Sistema de Autenticação
> **Foco:** Manipulação de DOM, Gerenciamento de Estado sem Frameworks e LocalStorage.

Uma aplicação **Single Page Application (SPA)** construída inteiramente com **JavaScript Puro (Vanilla)**, sem dependência de frameworks.

### Destaques da Implementação
* **Arquitetura SPA:** Alternância entre telas (Login, Cadastro, Dashboard) sem recarregamento da página (No-Refresh), manipulando a visibilidade do DOM via CSS/JS.
* **Persistência de Dados:** Simulação de um Banco de Dados utilizando `localStorage`. Os usuários cadastrados permanecem salvos mesmo após fechar o navegador.
* **Feedback Visual:** Validações de formulário e alertas nativos para guiar o usuário.
* **CSS Moderno:** Uso de Variáveis CSS (`:root`), Flexbox para layout responsivo e animações suaves (`fadeIn`).

### Tecnologias
* HTML5
* CSS3
* JavaScript

---

## Teste 2: Calculadora Financeira
> **Foco:** React, TypeScript, Componentização e Lógica Matemática.

Uma aplicação desenvolvida com **React** e **TypeScript** utilizando **Vite** para alta performance. A aplicação resolve cálculos de Juros Simples, Compostos e Valor Presente.

### Destaques da Implementação
* **Type Safety:** Uso rigoroso de TypeScript. Interfaces (ex: `ResultadoCalculoFinanceiro`) garantem que os dados fluam de forma previsível e sem erros de tipagem.
* **Separação de Responsabilidades:**
    * `financeiro.ts`: Contém apenas a lógica de negócios (funções puras), facilitando testes unitários e reutilização.
    * `App.tsx`: Focado inteiramente na interface e gerenciamento de estado visual.
* **Clean Code:** Código limpo, sem comentários desnecessários, com variáveis descritivas e estrutura modular.
* **UX Aprimorada:** Interface limpa com feedback visual imediato e validação de inputs numéricos.

### Tecnologias
* React 18
* TypeScript
* Vite
* CSS Modules (Escopado)

---

## Como Executar o Projeto

### Pré-requisitos
* Node.js instalado (v18 ou superior recomendado).

### Executando o Teste 1 (Autenticação)
Como é um projeto estático, não requer instalação de dependências.
1.  Navegue até a pasta `teste1`.
2.  Abra o arquivo `index.html` diretamente em seu navegador.
    * *Opção recomendada:* Use a extensão "Live Server" do VS Code para simular um servidor local.

### Executando o Teste 2 (Calculadora React)
1.  Abra o terminal e navegue até a pasta do projeto React (dentro de teste2):
    ```bash
    cd teste2/avaliacao-mybite-react
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Rode o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
4.  Acesse o link exibido no terminal (geralmente `http://localhost:5173`).

---

## 👨‍💻 Autor

Desenvolvido por **[Átila Macedo]**.
* **LinkedIn:** [Átila Macedo](https://www.linkedin.com/in/%C3%A1tila-macedo/)
* **GitHub:** [Átila Macedo](https://github.com/atilaacedo)

---
*Projeto desenvolvido para fins de avaliação técnica.*
