const authContainer = document.getElementById('authContainer');
const loginView = document.getElementById('loginView');
const registerView = document.getElementById('registerView');
const dashboardView = document.getElementById('dashboardView');

const formLogin = document.getElementById('formLogin');
const formCadastro = document.getElementById('formCadastro');

const btnIrParaCadastro = document.getElementById('btnIrParaCadastro');
const btnIrParaLogin = document.getElementById('btnIrParaLogin');
const btnLogout = document.getElementById('btnLogout');

const userNameDisplay = document.getElementById('userNameDisplay');


const DB_KEY = 'usuarios_db'; 

function mostrarLogin() {
    loginView.classList.remove('hidden');
    registerView.classList.add('hidden');
    dashboardView.classList.add('hidden');
    authContainer.classList.remove('hidden');
}

function mostrarCadastro() {
    loginView.classList.add('hidden');
    registerView.classList.remove('hidden');
}

function mostrarDashboard(nomeUsuario) {
    authContainer.classList.add('hidden'); 
    dashboardView.classList.remove('hidden');
    userNameDisplay.textContent = nomeUsuario;
}


function getUsuarios() {
    const usuarios = localStorage.getItem(DB_KEY);
    return usuarios ? JSON.parse(usuarios) : [];
}

function salvarUsuario(usuario) {
    const usuarios = getUsuarios();
    usuarios.push(usuario);
    localStorage.setItem(DB_KEY, JSON.stringify(usuarios));
}

function buscarUsuarioPorEmail(email) {
    const usuarios = getUsuarios();
    return usuarios.find(user => user.email === email);
}


btnIrParaCadastro.addEventListener('click', mostrarCadastro);
btnIrParaLogin.addEventListener('click', mostrarLogin);

formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('regNome').value;
    const email = document.getElementById('regEmail').value;
    const senha = document.getElementById('regSenha').value;

    if (buscarUsuarioPorEmail(email)) {
        alert('Erro: Este email já está cadastrado!');
        return;
    }

    const novoUsuario = { nome, email, senha };
    salvarUsuario(novoUsuario);

    alert('Cadastro realizado com sucesso! Faça login.');
    formCadastro.reset();
    mostrarLogin();
});

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;

    const usuarioEncontrado = buscarUsuarioPorEmail(email);

    if (usuarioEncontrado && usuarioEncontrado.senha === senha) {
        mostrarDashboard(usuarioEncontrado.nome);
        formLogin.reset();
    } else {
        alert('Email ou senha incorretos.');
    }
});


btnLogout.addEventListener('click', () => {
    mostrarLogin();
});