# Entendendo o Problema: **Two Sum**

> **Objetivo:** Encontrar dois números em um array (`nums`) que, quando somados, resultem em um valor específico (`target`). A função deve retornar os **índices** (posições) desses números no array original.

## 🎯 Principais Restrições e Suposições

1. **Exatamente uma solução garantida:** Sempre há um par de números que resolve o problema (ufa, nada de bug de lógica aqui, né?).
2. **Não usar o mesmo elemento duas vezes:** Por exemplo:
   - Array: `[3, 5]`, Target: `6` -> Solução `[0, 0]` é inválida (não vale somar o número consigo mesmo).
   - Array: `[3, 3]`, Target: `6` -> Solução `[0, 1]` é válida (índices diferentes, tá valendo!).
3. **Retornar os índices:** Você precisa devolver as posições, não os números.
4. **Ordem dos índices não importa:** `[0, 1]` = `[1, 0]` (ou seja, não precisa de sorting ninja aqui).

---

## 💡 Raciocínio para a Solução

### Abordagem Ingênua (aka Força Bruta 💪)

- **Ideia:** Pegamos cada número e tentamos somar com todos os outros. 🤔
- **Como?**
  1. Usar dois loops aninhados:
     - Loop **i** percorre do início ao fim.
     - Loop **j** começa em `i + 1` até o final.
  2. Testar se `nums[i] + nums[j] == target`.
  3. Se sim, **retornar `[i, j]`.**
- **Complexidade:**
  - 🕒 *Tempo:* O(n²). Para cada número, percorremos quase todo o restante do array. (Lento, especialmente com arrays grandões 🐌).
  - 🗂️ *Espaço:* O(1) (não usamos memória extra aqui).

---

### Abordagem Otimizada (aka Hash Map no Jutsu 🍥)

- **Ideia:** Usar um **Hash Map** (Dicionário) para buscas rápidas.
- **Como funciona?**
  1. Percorremos o array **uma única vez**:
     - Para cada `nums[i]`, calculamos o complemento necessário:  
       `complemento = target - nums[i]`.
  2. **Se o complemento já estiver no Hash Map:**
     - 🎉 Problema resolvido!
     - Retornar `[mapa[complemento], i]`.
  3. **Caso contrário:**
     - Adicionar `nums[i]` e seu índice `i` no Hash Map:
       - **Chave:** número.
       - **Valor:** índice.
- **Complexidade:**
  - 🕒 *Tempo:* O(n). Passamos uma única vez pelo array.
  - 🗂️ *Espaço:* O(n). No pior caso, armazenamos quase todos os números antes de achar a solução.