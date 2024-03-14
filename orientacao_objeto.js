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

const obj = new FormaGeometrica('forma');
const tri = new Triangulo(3, 4, 5);

const imprimirDetalhes = function(obj) {
    console.log(`A área do ${obj.nome} é ${obj.calcArea()}`);
    console.log(`O perímetro do ${obj.nome} é ${obj.calcPerimetro()}`);
}

// console.log(obj)
console.log(obj.calcArea())
// console.log(tri.nome)

imprimirDetalhes(tri);