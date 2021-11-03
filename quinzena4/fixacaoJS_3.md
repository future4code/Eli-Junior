```
function calculaNota(ex, p1, p2) {
  let primeiraProva = p1 * 2
  let segundaProva = p2 * 3
  let notaExercicios = ex * 1
  
  let calcularMedia = (notaExercicios + primeiraProva + segundaProva) / 6 
  
  if (calcularMedia >= 9) {
    return "A"
  } else if (calcularMedia < 9 && calcularMedia >= 7.5) {
    return "B"
  } else if (calcularMedia < 7.5 && calcularMedia >= 6) {
    return "C"
  } else if (calcularMedia < 6) {
    return "D"
  }
  
}
```