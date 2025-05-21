1. Altura de uma Árvore Binária
Conceito Teórico
Definição: a altura (ou profundidade máxima) de uma árvore binária é o número de nós no caminho mais longo da raiz até uma folha.

Propriedade:

pgsql
Copiar
Editar
height(null) = 0  
height(node) = 1 + max(height(node.left), height(node.right))
Complexidade: visita cada nó uma vez → O(n) tempo, O(h) espaço (recursão), onde h é a altura.

Implementação Prática
Recursiva: simples, usa pilha de chamadas.

Iterativa: usar DFS explícito com pilha é possível mas raramente mais rápido na prática.

Casos de Uso no Mundo Real
Balanceamento de árvores (AVL, Red-Black): precisa conhecer profundidades de subárvores.

Cálculo de profundidade de diretórios em sistemas de arquivos.

Limites de profundidade em motores de busca DFS (por ex. jogos de tabuleiro).