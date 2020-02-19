# Problema 1

## Enunciado

### Definições

#### Média

> valor definido pela soma dos elementos de uma amostra dividida pela quantidade de elementos.

#### Mediana

> valor que divide um conjunto de valores ordenados em partes iguais.

Encontre a média e mediana em um array dado que o tamanho do array é ímpar.

## Problema

Complete a função `solution` no arquivo `index.js` nesse diretório. Ela deve retornar um objeto com o valor da média e mediana do array recebido como entrada

## Entrada

Um array `arr`, no qual:

- 1 <= |`arr`| => 1000001, onde |`arr`| é o tamanho do array
- |`arr`| é ímpar
- `arr[i]` é o _i-ésimo_ inteiro do array
- -10000 <= `arr[i]` <= 10000

## Saída

Deve retornar um objeto com as seguintes propriedades: 
- `media`: float truncado em duas casas decimais
- `mediana`: inteiro 

Que correspondem as respectivas métricas descritas no enunciado

## Exemplo

| Entrada         |                   Saída                    |
| --------------- | :----------------------------------------: |
| `0 1 2 4 6 5 3` | { `media`: 3.14, `mediana`: 3 } |
