```
USE `joy-419508-eli-junior`;

SET SQL_SAFE_UPDATES = 0;

# Exercício 1
# a) Esse comando exclui a coluna "salary" da tabela.
# b) Esse comando vai substituir o nome da coluna "gender" para "sex" e a quantidade de caracteres que pode receber.
# c) Esse comando altera apenas a forma como será recebida a informação (neste caso, mudando a quantidade de caracteres da string), pois o nome da tabela permanece o mesmo.

# d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

# Exercício 2
# a)
UPDATE Actor
SET name = "Fernanda Torres", birth_date = "1965-09-15"
WHERE id = "003";

# b)
UPDATE Actor 
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes"; 

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "007"; # ou WHERE name = "JULIANA PAES";

# c)
UPDATE Actor
SET name = "Malvino Salvador", salary = 642333, birth_date = "1976-01-31", gender = "male"
WHERE id = "005";

# d)
UPDATE Actor
SET name = "Samara Felippo", salary = 342820, birth_date = "1978-10-06", gender = "female", hometown = "Rio de Janeiro"
WHERE id = "F.3";

# "Código de erro: 1292. Valor DOUBLE incorreto truncado: 'F.3'". O valor "F.3" não foi aceito, porque o ID precisa ser de números. 

# Exercício 3
# a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

# b)
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;

# Exercício 4
# a)
SELECT MAX(salary) FROM Actor;

# b)
SELECT MIN(salary) FROM Actor WHERE gender = "female";

# c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";

# d)
SELECT SUM(salary) FROM Actor;

# Exercício 5
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

# a) Ela faz a contagem de quantas pessoas são do gênero masculino e quantas do gênero feminino.

# b) 
SELECT id, name FROM Actor
ORDER BY name DESC;

# c)
SELECT * FROM Actor
ORDER BY salary DESC;

# d)
SELECT * FROM Actor
ORDER BY salary DESC LIMIT 3;

# e) 
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

# Exercício 6
# a)
ALTER TABLE Filmes
ADD data_limite_exibicao DATE;

# b)
ALTER TABLE Filmes
CHANGE avaliacao avaliacao FLOAT;

# c)
UPDATE Filmes
SET data_limite_exibicao = "2022-05-31"
WHERE id = "002";

UPDATE Filmes
SET data_limite_exibicao = "2022-02-16"
WHERE id = "003";

# d)
DELETE FROM Filmes WHERE id = "004";

UPDATE Filmes
SET sinopse = "Este sinopse está atualizado"
WHERE id = "004";

# O query foi aceito, para minha surpresa. Como a função "UPDATE" também pode acrescentar dados, o query foi realizado mesmo com o filme do referido ID ser inexistente.
# Porém, a adição desse query não teve efeito na tabela, pois a sinopse não aparece quando executamos o "SELECT * FROM Filmes".
```