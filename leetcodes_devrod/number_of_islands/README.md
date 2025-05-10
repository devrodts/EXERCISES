# Missão Rank S: Contando Ilhas no Estilo Ninja! 🌊🏝️🥷

> **Objetivo da Missão:** Dado um mapa 2D de '1's (terra) e '0's (água), precisamos contar quantas **ilhas** existem. Uma ilha é formada por terras conectadas horizontalmente ou verticalmente e cercadas por água. É como encontrar todas as bases secretas da Akatsuki escondidas no mapa! 🗺️

---

## 🎯 Regras da Missão

1. **Input:** Um grid 2D (`grid`) contendo apenas '1's (terra) e '0's (água).
2. **Output:** Um número inteiro representando a quantidade de ilhas.
3. **Conexões:** Apenas conexões horizontais e verticais contam (diagonais não valem, hein!).
4. **Cuidado com os limites:** Não podemos sair do mapa (nada de cair no Genjutsu do IndexError!).
5. **Performance:** Precisamos ser rápidos como o Minato, mas sem gastar chakra à toa.

---

## 💡 Estratégia Ninja para Resolver o Problema

### Abordagem: DFS no Jutsu! 🌀

A ideia é usar o **Depth-First Search (DFS)** para explorar cada ilha completamente. Assim que encontramos um pedaço de terra ('1'), usamos o DFS para marcar toda a ilha como visitada (transformando os '1's em '0's). Cada vez que iniciamos um DFS, significa que encontramos uma nova ilha. 🎉

### Passos do Plano:

1. **Varredura Inicial:** Percorremos cada célula do grid.
2. **Encontrando Terra:** Quando encontramos um '1', sabemos que é o início de uma nova ilha. Incrementamos o contador de ilhas.
3. **Exploração Completa:** Usamos o DFS para explorar toda a ilha conectada ao '1' inicial, marcando as células visitadas como '0'.
4. **Repetição:** Continuamos até que todas as células do grid sejam verificadas.

---

## 🧙‍♂️ Código Ninja (Python)

```python
def count_islands(grid):
    if not grid:
        return 0

    rows, cols = len(grid), len(grid[0])

    def dfs(r, c):
        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == '0':
            return
        grid[r][c] = '0'  # Marca como visitado
        dfs(r - 1, c)  # Explora para cima
        dfs(r + 1, c)  # Explora para baixo
        dfs(r, c - 1)  # Explora para a esquerda
        dfs(r, c + 1)  # Explora para a direita

    count = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':  # Encontramos uma nova ilha
                count += 1
                dfs(r, c)  # Explora a ilha completamente

    return count

# Exemplo de uso
grid = [
    ['0', '0', '0', '0', '0'],
    ['0', '1', '1', '0', '0'],
    ['0', '1', '0', '1', '0'],
    ['0', '0', '0', '0', '0']
]
print(count_islands(grid))  # Saída: 2
```

---

## 🌐 Outras Linguagens (Multiverso Ninja)

### TypeScript (Estilo Kakashi com Tipagem 📘)

```typescript
function numIslands(grid: string[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;

    function dfs(i: number, j: number): void {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === "0") return;
        grid[i][j] = "0";
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
}
```

### JavaScript (Estilo Naruto Simples e Direto 🍥)

```javascript
function numIslands(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;

    function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === "0") return;
        grid[i][j] = "0";
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
}
```

---

## 🏯 Aplicações Reais do Jutsu

Esse tipo de algoritmo é usado em várias situações do mundo real, como:

1. **Mapeamento de Territórios:** Identificar regiões conectadas em mapas geográficos (ex.: ilhas, florestas, áreas urbanas).
2. **Processamento de Imagens:** Detectar objetos conectados em imagens binárias (ex.: células em imagens médicas).
3. **Jogos:** Encontrar áreas conectadas em jogos de estratégia ou quebra-cabeças.
4. **Redes:** Identificar componentes conectados em grafos (ex.: redes sociais, redes de computadores).

---

## 🎭 Casos de Teste (Simulação de Combate)

```python
# Teste 1: Grid com 2 ilhas
grid1 = [
    ['0', '0', '0', '0', '0'],
    ['0', '1', '1', '0', '0'],
    ['0', '1', '0', '1', '0'],
    ['0', '0', '0', '0', '0']
]
print(count_islands(grid1))  # Saída: 2

# Teste 2: Grid vazio
grid2 = []
print(count_islands(grid2))  # Saída: 0

# Teste 3: Grid com uma única ilha
grid3 = [
    ['1', '1', '1'],
    ['1', '1', '1'],
    ['1', '1', '1']
]
print(count_islands(grid3))  # Saída: 1

# Teste 4: Grid sem ilhas
grid4 = [
    ['0', '0', '0'],
    ['0', '0', '0'],
    ['0', '0', '0']
]
print(count_islands(grid4))  # Saída: 0
```

---

## 📊 Resumo das Complexidades

| Abordagem | Tempo    | Espaço  | Veredito       |
| --------- | -------- | -------- | -------------- |
| DFS       | O(m * n) | O(m * n) | Nível Hokage! |

---

*"Um verdadeiro ninja não apenas resolve o problema, mas entende como ele pode ser usado para proteger sua vila e melhorar o mundo. Dattebayo!"* 🍥
