class Heroi {
 constructor(nome, idade, tipo) {
   this.nome = nome;
   this.idade = idade;
   this.tipo = tipo;

}

 atacar() {
   let ataque;
      switch (this.tipo) {
         case "mago":
             ataque = "usou magia";
             break;
         case "guerreiro":
              ataque = "usou espada";
              break;
         case "monge":
             ataque = "usou artes marciais";
             break;
         case "ninja":
             ataque = "usou shuriken";
             break;
         default:
             ataque = "usou um ataque desconhecido";
             break;
        }

     const mensagem = `o ${this.tipo} atacou usando ${ataque}`;
     console.log(mensagem);
    }
}

// Exemplo de uso
const heroiMago = new Heroi("Merlin", 150, "mago");
heroiMago.atacar();

const heroiGuerreiro = new Heroi("Arthur", 30, "guerreiro");
heroiGuerreiro.atacar();

const heroiNinja = new Heroi("Naruto", 20, "ninja");
heroiNinja.atacar();

const heroiMonge = new Heroi ("Luca", 60, "monge");
heroiMonge.atacar();