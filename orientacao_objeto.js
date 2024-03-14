function FormaGeometrica(nome) {
    this.nome = nome;

    this.calcArea = function () {
        return "método área ainda não implementado.";
    }

    this.calcPerimetro = function () {
        return "método perímetro ainda não implementado.";
    }
}

function Triangulo(lado1, lado2, lado3) {
    FormaGeometrica.call(this, "triângulo");

    this.calcArea = function () {
        if (lado1 == lado2 && lado2 == lado3) {
            return (lado1 * lado1 * Math.sqrt(3)) / 4;
        }
        if (lado1 == lado2 && lado2 != lado3) {
            const height = (lado3 * Math.sqrt(3)) / 2;
            return (lado3 * height) / 2;
        }
        if (lado1 == lado3 && lado1 != lado2) {
            const height = (lado2 * Math.sqrt(3)) / 2;
            return (lado2 * height) / 2;
        }
        if (lado2 == lado3 && lado1 != lado2) {
            const height = (lado1 * Math.sqrt(3)) / 2;
            return (lado1 * height) / 2;
        }
        else {
            // utilizando a fórmula de Herão
            const sp = (lado1 + lado2 + lado3) / 2; // aqui é o semi-perímetro do triângulo
            return Math.sqrt(sp * (sp - lado1) * (sp - lado2) * (sp - lado3));
        }
    }

    this.calcPerimetro = () => lado1 + lado2 + lado3;
}

function Quadrilatero(top, right, bottom, left) {
    FormaGeometrica.call(this, "quadrilátero");

    this.calcDiagonais = function () {
        const ladosOrdenados = [top, right, bottom, left].sort((a, b) => a - b);
        const [a, b, c, d] = ladosOrdenados;

        // semi-perímetros
        const s1 = (a + b + d) / 2;
        const s2 = (b + c + d) / 2;
        // áreas dos dois triângulos do quadrilátero
        const area1 = Math.sqrt(s1 * (s1 - a) * (s1 - b) * (s1 - d));
        const area2 = Math.sqrt(s2 * (s2 - b) * (s2 - c) * (s2 - d));
        console.log(area1)
        console.log(area2)
        // diagonais do losango usando as áreas e os lados
        const diagonal1 = Math.sqrt(a**2 + b**2);
        const diagonal2 = Math.sqrt(c**2 + d**2);

        return [diagonal1, diagonal2];
    }

    this.calcArea = () => {
        if (top == right && top == bottom) {
            return top * right;
        } else {
            const diagons = this.calcDiagonais();
            return ((diagons[0] * diagons[1]) / 2).toFixed(2);
        }
    }

    this.calcPerimetro = () => top + right + bottom + left;
}

const obj = new FormaGeometrica('forma');
const tri = new Triangulo(3, 4, 5);

const imprimirDetalhes = function (obj) {
    console.log(`A área do ${obj.nome} é ${obj.calcArea()}`);
    console.log(`O perímetro do ${obj.nome} é ${obj.calcPerimetro()}`);
}

// console.log(obj)
console.log(obj.calcArea())
// console.log(tri.nome)

imprimirDetalhes(tri);

// TESTE COM QUADRILÁTEROS:
console.log("\nTeste quadrilátero 1:")
const quadrado = new Quadrilatero(4, 4, 4, 4);
imprimirDetalhes(quadrado);

console.log("\nTeste quadrilátero 2:")
const losango = new Quadrilatero(10, 5, 10, 5);
imprimirDetalhes(losango);