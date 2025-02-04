import Aluno from '../models/aluno.js';

// Listar todos os alunos
export const index = async (req, res) => {
  try {
    const alunos = await Aluno.findAll(); // Buscar todos os alunos
    res.render('principal', { alunos }); // Renderizar a view principal com os dados
  } catch (error) {
    res.status(500).send('Erro ao listar alunos: ' + error.message);
  }
};

// Renderizar o formulário de cadastro
export const cadastrar = (req, res) => {
  res.render('formulario'); // Renderizar o formulário
};

// Salvar um novo aluno
export const salvar = async (req, res) => {
  const { nome, telefone, email, nota } = req.body;
  const situacao = nota >= 7 ? 'Aprovado' : 'Reprovado';

  try {
    await Aluno.create({ nome, telefone, email, nota, situacao }); // Criar aluno
    res.redirect('/aluno'); // Redirecionar para a lista de alunos
  } catch (error) {
    res.status(500).send('Erro ao salvar aluno: ' + error.message);
  }
};
