class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(val){
        this._saldo = val;
    }

     sacar(quantidade){
         if (quantidade <= this._saldo && this.quantidade-this._saldo !== ~this._saldo){
             this.saldo = this.quantidade - this.saldo;
            console.log(`Foi retirado R$ ${this._quantidade} E o saldo altual esta em ${this._saldo}`);
            }else{
                return console.log(`Quantia invalida`)
            }

    };

    depositar(quantidade){
            this.saldo = this.saldo + quantidade;
             console.log(`Depósito efetuado com sucesso`);
             return this.saldo;
    }

}

class contaCorrente extends ContaBancaria{
    constructor(agencia, numero,cartaoCredito){
        super(agencia, numero);
        this.cartaoCredito = cartaoCredito;
        this.tipo = `Corrente`;
    };

    get cartaoCredito (){
        return this._cartaoCredito;
    }

    set cartaoCredito(val){
         this._cartaoCredito = val;
    }

};


class contaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero, tipo);
        this.tipo  = `Poupança`;
    };

};

class contaUniversitaria extends ContaBancaria{
    constructor(agencia, numero ){
        super(agencia, numero );
        this.tipo = `Universitaria`;
    };

    sacar(quantidade){
        
        if(quantidade >= 500){
            return console.log(`Contas universitarias não podem sacar mais que R$ 500,00`);
        }

        this._saldo = quantidade - this.saldo;

    };

};