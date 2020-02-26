# Problema 2
## Enunciado
### Definições
#### Elemento aberto
> Um caracter `x` é definido como um elemento aberto se, e somente se, `x` ∈ { `(`, `[`, `{` }

#### Elemento fechado
> Um caracter `y` é definido como um elemento fechado se, e somente se, `y` ∈ { `)`, `]`, `}` }

Uma string é considerada balanceada se para cada elemento aberto que delimita o início de uma subsequência à esquerda existe um elemento fechado do **mesmo tipo** à direita delimitando o final da respectiva subsequência, ou seja, em uma string balanceada (*i*) os elementos abertos são fechados por elementos fechados do mesmo tipo apenas e (*ii*) ao final da string não exista elementos abertos em aberto, isto é, sem um elemento fechado correspondente.

## Problema
Complete a função `solution` no arquivo `index.js` nesse diretório. Ela deve retornar um `YES` se a entrada estiver balanceada ou um `NO` caso a entrada esteja desbalanceada.

## Entrada
Uma string única `s`, na qual:
- 1 <= |`s`| <= 10^3, onde |`s`| é o tamanho da string
- Todos os caracteres de `s` ∈ {`(`, `)`, `[`, `]`, `{`, `}`}

## Saída
Deve retornar `YES` ou `NO` baseado nas condições do enunciado

## Exemplo
| Entrada        | Saída |
| -------------- | :---: |
| `{[()]}`       | `YES` |
| `{[(])}`       | `NO`  |
| `{{[[(())]]}}` | `YES` |
