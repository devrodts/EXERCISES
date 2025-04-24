Aqui está o arquivo Markdown completo com todo o conteúdo, mantendo o contexto criativo e sem alterar nenhum texto:

Beleza, prepara o Ichiraku Ramen e se liga nesse pergaminho secreto pra dominar o LeetCode, dattebayo! 🔥

---

# Missão Rank A: Produto do Array Menos o Próprio Shinobi! 🥷✨

> **Objetivo da Missão:** Recebemos um esquadrão de números (`nums`). Nossa missão é criar um novo esquadrão (`answer`) onde cada posição `i` tenha o produto de TODOS os outros ninjas do esquadrão original, *exceto* o ninja da posição `i`. É como calcular a força combinada de todos na Vila da Folha, menos a sua própria, pra saber o impacto geral! 🍃

## 📜 Restrições e Pergaminhos Proibidos

1.  **Input:** Um array `nums` com números inteiros. Pode ter números negativos ou zero! Fique esperto como o Kakashi!  
2.  **Output:** Um array `answer` do mesmo tamanho.  
3.  **Jutsu Proibido:** **NÃO PODE USAR O JUTSU DA DIVISÃO!** 🚫 É uma regra da Academia!  
4.  **Performance Nível Hokage:** O algoritmo precisa ter complexidade de tempo O(n), rápido como o Minato! ⚡  
5.  **Desafio Extra (Nível S):** Tentar resolver com complexidade de espaço *extra* O(1) (o array de resposta não conta como espaço extra). Economizar chakra é essencial!  

---

## 💡 Jutsus de Resolução

Temos algumas formas de encarar essa missão, desde o Taijutsu básico até técnicas mais avançadas!

### Abordagem #1: Taijutsu Direto (Força Bruta 👊💥) - O(n²)

-   **Como funciona (Estilo Rock Lee sem os pesos):**  
    1.  Para cada ninja `i` no esquadrão `nums`:  
    2.  Pega um pergaminho (`prod`) e anota `1`.  
    3.  Faz um clone (`j`) percorrer TODO o esquadrão `nums` de novo.  
    4.  Se o clone `j` NÃO for o ninja original `i` (`i != j`), multiplica o valor do ninja `j` no pergaminho `prod`.  
    5.  Depois que o clone `j` visitou todos (menos o `i`), o valor final em `prod` é o resultado para `answer[i]`.  
-   **Código (Pergaminho Python):**
    ```python
    def productExceptSelf_bruteforce(nums):
        n = len(nums)
        answer = [1] * n # Prepara o esquadrão de resposta

        for i in range(n): # Ninja i sob análise
            prod = 1
            for j in range(n): # Clone j varrendo geral
                if i != j: # Não multiplica o próprio ninja i!
                    prod *= nums[j]
            answer[i] = prod # Anota o resultado pro ninja i

        return answer

    # Testando o Jutsu:
    # print(productExceptSelf_bruteforce([1,2,3,4]))      # Saída: [24, 12, 8, 6]
    # print(productExceptSelf_bruteforce([-1,1,0,-3,3]))  # Saída: [0, 0, 9, 0, 0]
    ```
-   **Análise do Sensei:**  
    -   **Tempo:** O(n) pro loop do ninja `i` VEZES O(n) pro loop do clone `j` = **O(n²)**. Lento como o Chouji antes do lanche pra missões grandes!  
    -   **Espaço:** O(n) para o `answer`. Ok, mas podemos melhorar.  
-   **Veredito:** Funciona pra esquadrões pequenos, mas reprovado nos Exames Chunin pela lentidão.  

### Abordagem #2: Jutsu Clones das Sombras Estratégico (Prefixos e Sufixos) 👥 - O(n) Tempo, O(n) Espaço

-   **Como funciona (Estilo Shikamaru planejando):** "Isso vai ser problemático... mas tenho um plano!"  
    1.  **Pergaminho Esquerdo (L):** Cria um array `L`. `L[i]` vai guardar o produto de todos os ninjas à *esquerda* de `i`.  
    2.  **Pergaminho Direito (R):** Cria um array `R`. `R[i]` vai guardar o produto de todos os ninjas à *direita* de `i`.  
    3.  **Combinação Final (Rasengan!):** Para cada posição `i`, o resultado final é `answer[i] = L[i] * R[i]`.  
-   **Código (Pergaminho Python):**
    ```python
    def productExceptSelf_prefix_suffix(nums):
        n = len(nums)
        L = [0] * n # Pergaminho Esquerdo
        R = [0] * n # Pergaminho Direito
        answer = [0] * n # Esquadrão final

        # Passo 1: Calculando os Prefixos (Produtos da Esquerda)
        L[0] = 1
        for i in range(1, n):
            L[i] = L[i-1] * nums[i-1]

        # Passo 2: Calculando os Sufixos (Produtos da Direita)
        R[n-1] = 1
        for i in range(n-2, -1, -1): # Varrendo de trás pra frente!
            R[i] = R[i+1] * nums[i+1]

        # Passo 3: Combinando tudo!
        for i in range(n):
            answer[i] = L[i] * R[i]

        return answer

    # Testando o Jutsu:
    # print(productExceptSelf_prefix_suffix([1,2,3,4]))      # Saída: [24, 12, 8, 6]
    # print(productExceptSelf_prefix_suffix([-1,1,0,-3,3]))  # Saída: [0, 0, 9, 0, 0]
    ```
-   **Análise do Sensei:**  
    -   **Tempo:** Três loops separados, cada um O(n). Total = O(n) + O(n) + O(n) = **O(n)**. Rápido! Aprovado!  
    -   **Espaço:** Usamos `L` (O(n)), `R` (O(n)) e `answer` (O(n)). Total = **O(n)** de espaço extra. Bom, mas será que dá pra economizar chakra (memória)?  

### Abordagem #3: Modo Sábio Otimizado (Espaço Constante) 🐸✨ - O(n) Tempo, O(1) Espaço Extra

-   **Como funciona (Dominando o Chakra da Natureza):** Usa o array `answer` pra guardar os prefixos, depois calcula os sufixos na hora com uma variável extra.  
    1.  **Primeira Passagem (Acumulando Chakra da Esquerda):** Preenche `answer` com os produtos da esquerda.  
    2.  **Segunda Passagem (Invocando o Chakra da Direita):** Percorre de trás pra frente, multiplicando o valor atual em `answer` pelo produto acumulado da direita (`suffix_prod`) e atualizando `suffix_prod`.  
-   **Código (Pergaminho Python Definitivo):**
    ```python
    def productExceptSelf_const_space(nums):
        n = len(nums)
        answer = [1] * n # Começa com 1s, vai virar o L temporariamente

        # Passo 1: Usando 'answer' para guardar os produtos da esquerda (Prefixos)
        for i in range(1, n):
            answer[i] = answer[i-1] * nums[i-1]

        # Passo 2: Calculando e aplicando os produtos da direita (Suffixos) na hora
        suffix_prod = 1 # Chakra acumulado da direita
        for i in range(n-1, -1, -1): # Varrendo de trás pra frente
            answer[i] = answer[i] * suffix_prod # Combina esquerda (já em answer) com direita (suffix_prod)
            suffix_prod *= nums[i] # Atualiza o chakra da direita para a próxima iteração

        return answer

    # Testando o Jutsu Nível Hokage:
    # print(productExceptSelf_const_space([1,2,3,4]))      # Saída: [24, 12, 8, 6]
    # print(productExceptSelf_const_space([-1,1,0,-3,3]))  # Saída: [0, 0, 9, 0, 0]
    ```
-   **Análise Final do Hokage:**  
    -   **Tempo:** Dois loops separados, cada um O(n). Total = **O(n)**. Velocidade máxima!  
    -   **Espaço:** Usamos apenas o array `answer` (que não conta como *extra*) e uma variável `suffix_prod`. Espaço extra = **O(1)**! Eficiência máxima de chakra!  

---

### Exemplos em Outras Linguagens (Multiverso de Jutsus!) 🌐

Aqui está o Jutsu Nível Hokage (O(1) espaço extra) adaptado para outras vilas... digo, linguagens!

#### Java 21 (Estilo Clã Uchiha Preciso 👁️)

```java
import java.util.Arrays;

class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] answer = new int[n];

        // Inicializa com 1s (necessário em Java)
        // Embora o passo 1 sobreescreva, é boa prática inicializar.
        // Alternativa: answer[0] = 1; e começar passo 1 do i = 1
        Arrays.fill(answer, 1);

        // Passo 1: Acumulando produtos da esquerda em 'answer'
        // answer[0] já é 1 (implicitamente ou explicitamente)
        for (int i = 1; i < n; i++) {
            answer[i] = answer[i-1] * nums[i-1];
        }

        // Passo 2: Acumulando produtos da direita e combinando
        int suffixProd = 1; // Produto acumulado da direita
        for (int i = n - 1; i >= 0; i--) {
            answer[i] = answer[i] * suffixProd; // Combina esquerda (em answer) com direita (suffixProd)
            suffixProd *= nums[i]; // Atualiza o produto da direita para o próximo
        }

        return answer;
    }

    // Método auxiliar para testar
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums1 = {1, 2, 3, 4};
        System.out.println("Input: " + Arrays.toString(nums1));
        System.out.println("Output: " + Arrays.toString(sol.productExceptSelf(nums1))); // [24, 12, 8, 6]

        int[] nums2 = {-1, 1, 0, -3, 3};
        System.out.println("Input: " + Arrays.toString(nums2));
        System.out.println("Output: " + Arrays.toString(sol.productExceptSelf(nums2))); // [0, 0, 9, 0, 0]
    }
}
```

#### TypeScript (Jutsu de Tipagem do Kakashi 📘)

```typescript
function productExceptSelf(nums: number[]): number[] {
    const n: number = nums.length;
    // Cria o array de resposta, inicializado com 1s
    const answer: number[] = new Array(n).fill(1);

    // Passo 1: Preenche 'answer' com os produtos dos prefixos (esquerda)
    // answer[0] já é 1
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    // Passo 2: Calcula os produtos dos sufixos (direita) e combina
    let suffixProd: number = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] = answer[i] * suffixProd; // Combina prefixo (em answer) com sufixo (suffixProd)
        suffixProd *= nums[i]; // Atualiza o sufixo para a próxima iteração
    }

    return answer;
}

// Testando o Jutsu
const nums1: number[] = [1, 2, 3, 4];
console.log(`Input: [${nums1}]`);
console.log(`Output: [${productExceptSelf(nums1)}]`); // Output: [24, 12, 8, 6]

const nums2: number[] = [-1, 1, 0, -3, 3];
console.log(`Input: [${nums2}]`);
console.log(`Output: [${productExceptSelf(nums2)}]`); // Output: [0, 0, 9, 0, 0]
```

#### Solidity (Pergaminho Blockchain Proibido? 🔗💸)

*(**Aviso do Sábio:** Fazer manipulação intensiva de arrays em Solidity pode gastar muito Gás (chakra da rede!). Use com cautela, talvez não seja o jutsu ideal para arrays grandes em produção!)*

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20; // Versão moderna com checagem de overflow/underflow padrão

contract ProductArraySolver {

    // Função pura, não modifica o estado do contrato
    function productExceptSelf(int256[] memory nums) public pure returns (int256[] memory) {
        uint256 n = nums.length;
        // Arrays 'memory' precisam ser inicializados com tamanho
        int256[] memory answer = new int256[](n);

        // Solidity não tem 'fill', inicializamos manualmente ou no passo 1
        // Passo 1: Calculando produtos da esquerda (prefixos)
        if (n > 0) {
            answer[0] = 1; // Base para o produto da esquerda
            for (uint256 i = 1; i < n; i++) {
                // Usamos i-1 como uint pois sabemos que i >= 1 aqui
                answer[i] = answer[i-1] * nums[i-1];
            }
        }

        // Passo 2: Calculando produtos da direita (sufixos) e combinando
        int256 suffixProd = 1;
        // Loop reverso em Solidity (cuidado com underflow no índice uint!)
        for (uint256 i = n; i > 0; i--) {
            uint256 index = i - 1; // Índice real do array (0 a n-1)
            answer[index] = answer[index] * suffixProd;
            suffixProd = suffixProd * nums[index];
        }

        return answer;
    }
}
```

#### Shell Script (Invocação Rústica do Gamabunta 🐸📜)

*(**Conselho do Jiraiya:** Shell Script é poderoso para tarefas do sistema, mas para matemática e arrays pesados, ele é mais lento que uma lesma! É um jutsu mais rústico para esse problema.)*

```bash
#!/bin/bash

# Função para calcular o produto do array exceto o próprio elemento
product_except_self() {
  # Declara arrays locais (Bash 4+)
  local -a nums=("${@}") # Recebe todos os argumentos como array 'nums'
  local n=${#nums[@]}    # Pega o tamanho do array
  local -a answer       # Array de resposta
  local i               # Variável de índice

  # Passo 1: Calcular produtos da esquerda (prefixos) e armazenar em 'answer'
  # Inicializa o primeiro elemento (produto à esquerda do índice 0 é 1)
  if [[ $n -gt 0 ]]; then
    answer[0]=1
  fi
  for (( i=1; i<n; i++ )); do
    # Cuidado com indices (i-1)
    local prev_idx=$((i - 1))
    # Expansão aritmética para multiplicação
    # Verifica se o elemento anterior existe antes de acessar
    if [[ -v answer[prev_idx] ]] && [[ -v nums[prev_idx] ]]; then
       answer[i]=$(( answer[prev_idx] * nums[prev_idx] ))
    else
       # Lógica de erro ou valor padrão, aqui assumimos 1 se algo faltar (improvável no fluxo normal)
       answer[i]=1 # Ou poderia ser um erro
    fi
  done

  # Passo 2: Calcular produtos da direita (sufixos) e combinar
  local suffix_prod=1
  # Loop reverso
  for (( i=n-1; i>=0; i-- )); do
    # Combina prefixo (em answer[i]) com sufixo (suffix_prod)
    # Garante que answer[i] tenha sido inicializado no Passo 1
    local current_prefix=${answer[i]:-1} # Usa 1 se não estiver definido (caso n=0 ou erro)
    answer[i]=$(( current_prefix * suffix_prod ))
    # Atualiza o sufixo para a próxima iteração
    if [[ -v nums[i] ]]; then
        suffix_prod=$(( suffix_prod * nums[i] ))
    fi
  done

  # Imprime o resultado (elementos separados por espaço)
  echo "${answer[@]}"
}

# --- Testando o Jutsu ---
echo "Testando com: 1 2 3 4"
result1=$(product_except_self 1 2 3 4)
echo "Resultado: $result1" # Esperado: 24 12 8 6

echo "Testando com: -1 1 0 -3 3"
result2=$(product_except_self -1 1 0 -3 3)
echo "Resultado: $result2" # Esperado: 0 0 9 0 0

echo "Testando com: 5"
result3=$(product_except_self 5)
echo "Resultado: $result3" # Esperado: 1

echo "Testando com array vazio:"
result4=$(product_except_self)
echo "Resultado: $result4" # Esperado: (vazio)

```
*(**Nota:** Para rodar o Shell Script, salve como `script.sh`, dê permissão `chmod +x script.sh` e execute passando os números como argumentos: `./script.sh 1 2 3 4`)*

---

## 📊 Resumo das Complexidades (Relatório da Missão Atualizado)

| Abordagem                     | Jutsu Equivalente                     | Tempo         | Espaço Extra | Veredito        |
| :---------------------------- | :------------------------------------ | :------------ | :----------- | :-------------- |
| Força Bruta                   | Taijutsu Básico 👊                    | O(n²)         | O(n)         | Lento Demais    |
| Prefixos + Sufixos            | Kage Bunshin Estratégico 👥           | O(n)          | O(n)         | Bom, mas gasta |
| **Otimizado (Espaço Constante)** | **Modo Sábio / Rasengan Otimizado** 🐸✨ | **O(n)** | **O(1)** | **Nível Hokage!** |

---

## 🎭 Casos de Teste (Simulação de Combate)

```python
# Testes em Python (outras linguagens têm exemplos acima)
# print(productExceptSelf_const_space([1, 2, 3, 4]))      # [24, 12, 8, 6]
# print(productExceptSelf_const_space([-1, 1, 0, -3, 3]))  # [0, 0, 9, 0, 0]
# print(productExceptSelf_const_space([0, 0]))             # [0, 0]
# print(productExceptSelf_const_space([1, 0]))             # [0, 1]
# print(productExceptSelf_const_space([5]))                # [1]
```
---


Aí está, jovem Padawan! Vimos como evoluir de um Taijutsu simples e lento para um Ninjutsu O(n) inteligente com os Clones das Sombras, e finalmente atingir o Modo Sábio com a otimização de espaço O(1)! Essa última técnica não só cumpre a missão principal (O(n) sem divisão), mas também o desafio Rank S de economizar chakra (espaço), e ainda pode ser adaptada para diversas vilas (linguagens), mesmo que algumas exijam mais cuidado ou chakra (como Solidity e Shell Script)!

*"Um verdadeiro ninja não só resolve o problema, mas encontra o caminho mais eficiente e engenhoso, usando cada gota de chakra com sabedoria, não importa a vila! Dattebayo!"* 🍥
