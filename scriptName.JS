function adicionar()
{    
    alert('Aluno adicionado')
    let nome = document.getElementById('nome').value
    let telefone = document.getElementById('telefone').value
    let DDN = document.getElementById('data-nascimento').value
    let nota = document.getElementById('nota').value
    let res = document.getElementById('lista')

    res.innerHTML += `<br> <u>O aluno <strong>${nome}</strong> que possui o telefone <strong>${telefone}</strong> nascido em <strong>${DDN}</strong> com a nota <strong>${nota}</strong> foi adicionado.</u>`

    
}

