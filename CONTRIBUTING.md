# Como contribuir

## Fluxo de branches

1. Crie uma branch a partir da `main`:
   - `feature/<descricao-curta>` para novas funcionalidades
   - `fix/<descricao-curta>` para correções
   - `docs/<descricao-curta>` para documentação
2. Faça commits pequenos e focados.
3. Abra um Pull Request para a `main` preenchendo o template.
4. O merge acontece somente após revisão. Não faça push direto na `main`.

## Mensagens de commit (Conventional Commits)

Formato: `<tipo>: <descrição no imperativo>`

| Tipo | Quando usar | Exemplo |
|---|---|---|
| `feat` | Nova funcionalidade | `feat: adiciona filtro por posts mais curtidos` |
| `fix` | Correção de bug | `fix: corrige caminho do script principal no index.html` |
| `refactor` | Mudança interna sem alterar comportamento | `refactor: extrai lógica do feed para um hook` |
| `docs` | Documentação | `docs: adiciona instruções de execução ao README` |
| `chore` | Configuração, dependências, build | `chore: atualiza dependências do Vite` |
| `test` | Criação ou ajuste de testes | `test: cobre envio do formulário de contato` |

Mais detalhes em [conventionalcommits.org](https://www.conventionalcommits.org/pt-br/).
