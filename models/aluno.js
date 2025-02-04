import { Sequelize, sequelize } from '../config/banco.js';

const Aluno = sequelize.define('Aluno', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nota: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  situacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  tableName: 'alunos',
  timestamps: false,
});

Aluno.sync({ alter: true }) // Sincronizar tabela no banco de dados
  .then(() => console.log('Tabela de Alunos sincronizada com sucesso.'))
  .catch((error) => console.log('Erro ao sincronizar tabela: ' + error.message));

export default Aluno;
