class Aluno {
    #nome = '';
    #nota = 0;

    constructor(name, grade) {
        this.#nome = name;
        this.#nota = grade;
    }

    getNome() {
        return this.#nome;
    }
    getNota() {
        return this.#nota;
    }

    print() {
        return `[${this.#nome} : ${this.#nota}]`;
    }
}

function imprimirAlunos(lista) {
    lista.forEach(item => console.log(item.print()));
}

const alunos = [
    new Aluno('Mário', 9.5),
    new Aluno('Sandra', 6.75),
    new Aluno('Diego', 6), 
    new Aluno('Ademara', 2.75),
    new Aluno('Geraldo', 3.75),
    new Aluno('Fernanda', 7),
    new Aluno('João', 4),
    new Aluno('Ana', 8),
    new Aluno('Pedro', 6.5),
    new Aluno('Rafaela', 9),
    new Aluno('Marcelo', 7.25),
    new Aluno('Lucas', 4.75),
    new Aluno('Bianca', 8.5),
    new Aluno('Paulo', 5),
    new Aluno('Gabriela', 9.25),
    new Aluno('Marcos', 3),
    new Aluno('Juliana', 7.75),
    new Aluno('Roberto', 2.5),
    new Aluno('Maria', 5.5), 
    new Aluno('Ricardo', 0)
];
// imprimirAlunos(alunos)

const filtrarPorNota = nota => alunos.filter(aluno => aluno.getNota() >= nota);

imprimirAlunos(filtrarPorNota(6));