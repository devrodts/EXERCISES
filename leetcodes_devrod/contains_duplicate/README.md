# Entendendo o Problema: **Contains Duplicate** 🔍

> **Objetivo:** Verificar se um array de números contém elementos duplicados. Em outras palavras, descobrir se existem pelo menos dois números iguais no array. É tipo quando o Naruto usa o Kage Bunshin no Jutsu - precisamos saber se existe um "clone" do número! 🥷

## 🎯 Principais Restrições e Suposições

1. **Input Validation:** O array pode estar vazio ou conter apenas um elemento
2. **Tipos de dados:** Trabalhamos apenas com números inteiros
3. **Output:** Retornar `true` se encontrar duplicata, `false` caso contrário
4. **Performance:** Precisa ser eficiente como um ninja em missão rank S! ⚡

---

## 💡 Técnicas de Resolução

### Abordagem #1: Força Bruta (Kinjutsu Proibido 🚫)

- **Como funciona:**
  - Usar dois loops aninhados (nested loops)
  - Comparar cada elemento com todos os outros
  - Complexidade temporal: O(n²)
  - Complexidade espacial: O(1)
- **Por que não usar:**
  - Consome muito chakra (recursos computacionais)
  - Não é eficiente para arrays grandes
  - Seria reprovado pelo Kakashi Sensei!

### Abordagem #2: HashSet no Jutsu 🌀

- **Como funciona:**
  1. Criar um Set vazio (nosso pergaminho de jutsus)
  2. Para cada número no array:
     - Verificar se o número já existe no Set
     - Se existir: Retorna `true` (duplicata encontrada!)
     - Se não: Adiciona o número ao Set
  3. Se terminar o loop: Retorna `false`

```javascript
const containsDuplicate = (nums) => {
    const set = new Set();
    for(const num of nums){
        if(set.has(num)) return true;
        set.add(num);
    }
    return false;
}
```

### Abordagem #3: Solução Python One-Liner (Kekkei Genkai! 👁️)

```python
def contains_duplicate(arr):
    return len(arr) != len(set(arr))
```

## 🔄 Complexidade

- **Tempo:** O(n) - Um único loop pelo array
- **Espaço:** O(n) - Armazenamos no máximo n elementos no Set

## 🎭 Casos de Teste

```typescript
const testCases = [
    {input: [1, 2, 3, 1], expected: true},    // Tem duplicata
    {input: [1, 2, 3, 4], expected: false},   // Não tem duplicata
    {input: [], expected: false},             // Array vazio
    {input: [1], expected: false},           // Um elemento
]
```

## 📝 Conclusão

Assim como um ninja precisa escolher o jutsu certo para cada situação, a escolha da solução depende do contexto. O HashSet é como o Rasengan - eficiente e confiável para a maioria das situações!

*"O verdadeiro ninja não é aquele que resolve o problema de qualquer jeito, mas aquele que encontra a solução mais elegante e concisa, dattebayo!"*
