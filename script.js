class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    get saldo (){
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
        if(this.quantidade !== ~this.quantidade){
            this.saldo = this.saldo + this.quantidade;
            return console.log(`Depósito efetuado com sucesso`)
        }else{
            return console.log(`Quantia invalida`);
        }
    }

}

class contaCorrente extends ContaBancaria{
    constructor(agencia, numero, tipo = `ContaCorrente`, saldo,cartaoCredito){
        super(agencia, numero,saldo);
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
    constructor(agencia, numero, saldo){
        super(agencia, numero, tipo, saldo);
        this.tipo  = `Poupança`;
    };

};

class contaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = `Universitaria`;
    };

    sacar(quantidade){
        
        if(quantidade >= 500){
            return console.log(`Contas universitarias não podem sacar mais que R$ 500,00`);
        }

        this._saldo = quantidade - this.saldo;

    };

};