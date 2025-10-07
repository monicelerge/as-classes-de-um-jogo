
 Sistema de Heróis e Ataques
Este é um projeto simples implementado em JavaScript que utiliza a 
programação orientada a objetos (POO) para criar heróis com diferentes 
tipos e habilidades de ataque.

 Funcionalidades
O código permite:

Criar instâncias de heróis 
com nome, idade e tipo (como "mago", "guerreiro", "monge" ou "ninja").

Fazer com que o herói ataque, exibindo uma mensagem no console
que descreve o tipo de ataque específico de acordo com o seu tipo.

💡 Como Funciona
A lógica principal reside na class Heroi:

constructor(nome, idade, tipo): Define as propriedades básicas do herói.

atacar():

Usa uma instrução switch para determinar a string de ataque com base na propriedade tipo do herói.

Os tipos e seus ataques são:

"mago": "usou magia"


"guerreiro": "usou espada"


"monge": "usou artes marciais"


"ninja": "usou shuriken"

Caso o tipo não seja reconhecido, ele assume um ataque padrão: 
"usou um ataque desconhecido".

Exibe a mensagem completa no console no formato: 
o [tipo] atacou usando [ataque].
