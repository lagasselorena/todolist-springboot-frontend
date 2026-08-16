# To-Do List — Front-end (React)

Interface web para gerenciamento de tarefas, construída com React e Vite. Este projeto consome a [API REST do back-end](#) (Spring Boot), desenvolvido em paralelo.

## Funcionalidades

- Listagem de tarefas em tempo real, ordenadas por prioridade
- Criação de tarefas com título, descrição e prioridade (todos obrigatórios)
- Marcação de tarefas como concluídas
- Exclusão individual ou em lote (seleção múltipla)
- Indicador de carregamento e tratamento de erros de conexão
- Confirmação antes de ações destrutivas (exclusão)

## Tecnologias

- **React 19**
- **Vite** (build tool e servidor de desenvolvimento)
- **CSS puro** (sem frameworks de estilo)
- **Fetch API** para comunicação com o back-end

## Estrutura do projeto

```
src/
├── components/
│   ├── TaskForm.jsx    # Formulário de criação de tarefas
│   ├── TaskItem.jsx     # Card individual de uma tarefa
│   └── TaskList.jsx      # Lista/ordenação das tarefas
├── App.jsx                # Componente raiz — estado global e chamadas à API
├── App.css                 # Estilos da aplicação
└── main.jsx                 # Ponto de entrada do React
```

**Fluxo de dados:** `App` centraliza o estado (lista de tarefas) e repassa dados e funções de callback para os componentes filhos via props (`TaskForm` → cria; `TaskItem` → atualiza/exclui), num padrão conhecido como *lifting state up*.

## Como rodar o projeto

**Pré-requisitos:**
- [Node.js](https://nodejs.org) (versão 18+)
- O [back-end](#) rodando em `http://localhost:8080` (obrigatório — a aplicação depende da API para funcionar)

1. Clone o repositório:
   ```
   git clone https://github.com/lagasselorena/todolist-springboot-frontend.git
   cd todolist-springboot-frontend
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Rode o servidor de desenvolvimento:
   ```
   npm run dev
   ```

4. Acesse `http://localhost:5173` no navegador.

> **Importante:** o back-end precisa estar rodando **antes** de abrir o front-end `http://localhost:5173`´.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento (com hot reload) |
| `npm run build` | Gera a versão de produção, otimizada |
| `npm run preview` | Pré-visualiza a build de produção localmente |


---

Projeto desenvolvido como estudo de React, hooks (`useState`, `useEffect`) e integração com APIs REST.
