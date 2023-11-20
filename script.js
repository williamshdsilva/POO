// Objeto Carro
class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.velocidade = 0;
      this.ligado = false;
    }
  
    acelerar() {
      this.velocidade += 10;
    }
  
    frear() {
      this.velocidade -= 10;
    }
  
    ligar() {
      this.ligado = true;
    }
  }
  
  let carro1 = new Carro("Chevrolet", "Onix", 2020);
  console.log(carro1.marca); // Chevrolet
  console.log(carro1.modelo); // Onix
  console.log(carro1.ano); // 2020
  carro1.ligar();
  console.log(carro1.ligado); // true
  carro1.acelerar();
  console.log(carro1.velocidade); // 10
  
  // Objeto Mesa
  class Mesa {
    constructor(material, tamanho, cor) {
      this.material = material;
      this.tamanho = tamanho;
      this.cor = cor;
      this.altura = 0;
      this.limpa = false;
    }
  
    limpar() {
      this.limpa = true;
    }
  
    ajustarAltura(altura) {
      this.altura = altura;
    }
  
    dobrar() {
      console.log("Mesa dobrada");
    }
  }
  
  let mesa1 = new Mesa("Madeira", "1,20m x 0,80m", "Marrom");
  console.log(mesa1.material); // Madeira
  console.log(mesa1.tamanho); // 1,20m x 0,80m
  console.log(mesa1.cor); // Marrom
  mesa1.limpar();
  console.log(mesa1.limpa); // true
  mesa1.ajustarAltura(1.0);
  console.log(mesa1.altura); // 1.0
  mesa1.dobrar(); // Mesa dobrada
  
  // Objeto Conta bancária
  class ContaBancaria {
    constructor(saldo, numeroConta, tipoConta) {
      this.saldo = saldo;
      this.numeroConta = numeroConta;
      this.tipoConta = tipoConta;
    }
  
    depositar(valor) {
      this.saldo += valor;
    }
  
    sacar(valor) {
      if (this.saldo >= valor) {
        this.saldo -= valor;
      } else {
        console.log("Saldo insuficiente");
      }
    }
  
    verificarSaldo() {
      return this.saldo;
    }
  }
  
  let conta1 = new ContaBancaria(1000.0, "12345-6", "Corrente");
  console.log(conta1.verificarSaldo()); // 1000.0
  conta1.depositar(500.0);
  console.log(conta1.verificarSaldo()); // 1500.0
  conta1.sacar(200.0);
  console.log(conta1.verificarSaldo()); // 1300.0
  
  // Objeto Rede social
  class RedeSocial {
    constructor(nomeUsuario, numSeguidores, publicacoes) {
      this.nomeUsuario = nomeUsuario;
      this.numSeguidores = numSeguidores;
      this.publicacoes = publicacoes;
    }
  
    postar(texto) {
      this.publicacoes.push(texto);
    }
  
    seguir(usuario) {
      console.log(`Seguindo ${usuario}`);
    }
  
    comentar(post, texto) {
      console.log(`Comentando no post de ${post}: ${texto}`);
    }
  }
  
  let redeSocial1 = new RedeSocial("joao123", 1000, ["Olá, mundo!", "Nova foto"]);
  console.log(redeSocial1.nomeUsuario); // joao123
  console.log(redeSocial1.numSeguidores); // 1000
  console.log(redeSocial1.publicacoes); // ["Olá, mundo!", "Nova foto"]
  redeSocial1.postar("Novo post");
  console.log(redeSocial1.publicacoes); // ["Olá, mundo!", "Nova foto", "Novo post"]
  redeSocial1.seguir("maria456"); // Seguindo maria456
  redeSocial1.comentar("Nova foto", "Que linda!"); // Comentando no post de Nova foto: Que linda