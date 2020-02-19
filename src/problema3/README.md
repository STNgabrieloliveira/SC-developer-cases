# Problema 3 - Desafio
## Enunciado
### Definições
#### Similaridade entre strings
> O tamanho do maior prefixo comum entre duas strings

Encontre a soma das similaridades entre uma string `s` e seus sufixos. Por exemplo, dado `s` = `ababaa` tem que os sufixos de `s` são `ababaa`, `babaa`, `abaa`, `baa`, `aa` e `a`. As similaridades dos sufixos com `s` são, respectivamente, 6, 0, 3, 0, 1 e 1. A resposta para `s` = `ababaa` é 11.

## Problema
Complete a função `solution` no arquivo `index.js` nesse diretório. Ela deve retornar um inteiro que representa a soma das similaridades dos sufixos de uma string com ela mesma.

## Entrada
Uma string única `s`, na qual:
- 1 <= |`s`| <= 10^5, onde |`s`| é o tamanho da string
- Todos os caracteres de `s` ∈ {`a`, `b`, ..., `y`, `z`}

## Saída
Deve retornar um inteiro baseado nas condições do enunciado

## Exemplo
| Entrada  | Saída |
| -------- | :---: |
| `ababaa` |  11   |
| `aa`     |   3   |

## Desafio
Repare  nas restrições de entrada e escreva um algoritmo capaz de ser suficientemente performático para executar a tarefa de forma correta em tempo hábil até mesmo para os edge cases