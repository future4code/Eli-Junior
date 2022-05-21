```
USE `joy-419508-eli-junior`;
```

## Exercício 1 
### a) O NOT NULL significa que o valor não pode ser nulo, ou seja, é preciso preencher alguma coisa que seja válida.
### b) No SHOW DATABASES é mostrado o nome da database que estou utilizando. No SHOW TABLES mostra todas as tabelas que fiz com essa database.
### C) É mostrado os campos da tabela (Field), o tipo deles (Type), se pode ser nulo ou não (Null) e se tem chave primária (Key).
<br>

## Exercício 2
### a) Resposta no código.
### b) "Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'". O SQL não aceita incluir o mesmo ID para outro usuário cadastrado.
### c) "Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1". Não foram colocadas todos os ítens das colunas, e por isso foi inválido.
### d) "Código de erro: 1364. O campo 'nome' não tem um valor padrão". Não há o campo "nome" na query, e por isso ficou inválido.
### e) "Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1". O campo "birth_date" precisa ser preenchida com parênteses.
<br>

```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    "1200000",
    "1963-08-23",
    "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Juliana Paes",
    "2200000",
    "1979-03-26",
    "female"
);

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"005",
    "Paola Oliveira",
    719333.33,
    "1982-04-14",
    "female"
);
```

## Exercício 3
### a)
```
SELECT * FROM Actor WHERE gender = "female";
```

### b)
```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

### c)
```
SELECT * FROM Actor WHERE gender = "invalid";
```

### Todas as colunas terão a resposta NULL, por não ter nenhum usuário cadastrado com esse nome.
<br>

### d)
```
SELECT * FROM Actor WHERE salary < 500000;
```

### e)
```
SELECT id, nome from Actor WHERE id = "002";
```

### "Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'". O campo "name" foi escrita incorretamente, e aí o campo não foi reconhecido.
### A query correta é esta: 
```
SELECT id, name FROM Actor WHERE id = "002";
```

## Exercício 4
```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```

### a) Na query acima foi pedido para buscar um nome com letras que começam com A ou J, sendo que é preciso colocar o % para que apareça qualquer coisa que comece com essas letras.
### E, dentro dessa busca, também é delimitado que a pessoa receba mais de R$ 300.000,00 de salário.
<br>

### b)
```
SELECT * FROM Actor 
WHERE name NOT LIKE "A%" AND salary > 350000;
```

### c)
```
SELECT * FROM Actor WHERE (name LIKE "G%" or name LIKE "%g%");
```

### d)
```
SELECT * FROM Actor
WHERE (name LIKE "%a%" or name LIKE "A%" or name LIKE "%g%" or name LIKE "G%")
AND salary BETWEEN 350000 AND 900000;
```

## Exercício 5
### a)
### O tipo TEXT, diferente do VARCHAR, não tem limites de caracteres.

```
CREATE TABLE Filmes (
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);
```

### b)
```
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES (
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```

### c)
```
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES (
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```

### d)
```
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-02-11",
    8
);
```

### e)
```
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES (
	"004",
    "O Auto da Compadecida",
    "As aventuras dos nordestinos João Grilo, um sertanejo pobre e mentiroso, e Chicó, o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora",
    "2000-09-10",
    8
);

SELECT * FROM Filmes;
```

## Exercício 6
### a)
```
SELECT id, nome, avaliacao FROM Filmes WHERE id = "002";
```

### b)
```
SELECT nome FROM Filmes WHERE nome LIKE "%flor%";
```

### c)
```
SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7;
```

## Exercício 7
### a)
```
SELECT * FROM Filmes WHERE nome LIKE "%vida%";
```

### b)
```
SELECT * FROM Filmes 
WHERE nome LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%";
```

### c)
```
SELECT * FROM Filmes WHERE data_lancamento < "2022-05-09";
```

### d)
```
SELECT * FROM Filmes
WHERE data_lancamento < "2022-05-09" AND 
(nome LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%") AND avaliacao > 7;
```