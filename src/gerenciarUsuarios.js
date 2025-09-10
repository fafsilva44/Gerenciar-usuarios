

const usuarios = [
    {
        nome: 'Mateus',
        email:'mateus@gospel.com'   
    },
    {
     
    },
    {
        nome: 'Lucas',
        email:'lucas@gospel.com'   
    },
    {
        nome: 'João',
        email:'joao@gospel.com'    
    }
];

function retornarUsuarios () {
    return usuarios;
}

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}


