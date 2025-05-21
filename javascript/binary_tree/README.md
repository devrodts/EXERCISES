# 🌳 Binary Tree: O Jutsu Secreto das Estruturas de Dados! 🍃

E aí, ninjas do código! Prontos para dominar uma das técnicas mais poderosas do mundo shinobi da programação? **Acredite!** 👊

## 🔍 O que é esse tal de Binary Tree, dattebayo?

Uma árvore binária é como um clã ninja onde cada membro (chamado de "nó") tem no máximo dois discípulos diretos - um à esquerda e outro à direita. O ninja no topo é chamado de "raiz" (root), e os ninjas sem discípulos são as "folhas".

```
       1  <- Raiz (Hokage)
     /   \
    2     3  <- Nós internos (Jounins)
   / \
  4   5  <- Folhas (Genins)
```

É tipo quando o Naruto faz Kage Bunshin, mas de forma organizada, onde cada clone só pode criar outros dois clones!

## 🛠️ Jutsus Implementados neste Repositório

### 1. 📏 Tree Height (Altura da Árvore)
Igual medir o número de degraus do prédio do Hokage até o ninja mais distante. A altura é o caminho mais longo da raiz até uma folha.

```python
def tree_height(root):
    if not root: return 0
    return 1 + max(tree_height(root.left), tree_height(root.right))
```

É como usar o Byakugan para enxergar o caminho mais profundo na árvore!

### 2. 🔄 Level Order Traversal
Este jutsu permite você visitar todos os nós nível por nível, como se estivesse convocando todos os ninjas por patente!

```python
# Retorna algo como: [[1], [2,3], [4,5]]
```

É tipo quando o Iruka-sensei faz a chamada na Academia Ninja, organizando todos por turmas!

### 3. 🔄 Swap Nodes
Um jutsu de transformação que troca as posições dos ninjas em certos níveis da hierarquia!

```
Antes do Swap (k=2):      Depois (trocando no nível 2):
       1                         1
     /   \                     /   \
    2     3                   2     3
   / \                       / \
  4   5                     5   4
```

É como o jutsu de substituição (Kawarimi no Jutsu), mas programado para acontecer em determinados níveis da árvore!

## 🌍 Aplicações no Mundo Real (Missões Rank S)

1. **Sistemas de Arquivos**: As pastas do seu PC são organizadas em árvore, igual as aldeias do mundo ninja!

2. **Bancos de Dados**: Índices B-Tree são como ANBUs escondidos que aceleram suas buscas.

3. **Compressão de Dados**: Árvores Huffman são como jutsus de compressão que o Shikamaru usaria.

4. **Inteligência Artificial**: Árvores de decisão são usadas em algoritmos, igual o Sasuke planejando sua próxima estratégia.

5. **Roteamento de Rede**: Pacotes de dados seguem caminhos em árvore, como ninjas mensageiros entregando pergaminhos.

## 💡 Complexidade (Nível de Chakra Necessário)

- **Altura**: O(n) tempo, O(h) espaço - como percorrer toda a Vila da Folha uma vez.
- **Level Order**: O(n) tempo e espaço - percorre cada ninja exatamente uma vez.
- **Swap**: O(n) tempo, O(h) espaço - visita cada ninja e pode reconfigurar a estrutura.

## 🚀 Como Treinar

Estude os códigos deste repositório - temos implementações em várias linguagens ninja:
- Python (o jutsu do Sábio)
- JavaScript (o jutsu do Navegador)
- TypeScript (JavaScript com armadura de chakra)
- Java (o jutsu tradicional dos clãs antigos)
- Rust (o novo e poderoso jutsu à prova de falhas)

Acredite, se você dominar árvores binárias, estará um passo mais perto de se tornar um Hokage da programação!

**Esse é meu jeito ninja de programar! Dattebayo!** 🍜 