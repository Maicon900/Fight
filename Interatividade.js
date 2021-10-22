new Vue({
    el: '#app',
    data:{
        vida_paladino: 100,
        vida_orc: 100,  
        reset: 'RESETAR',
        fim: false,
        acao: false,
        cura: false,
    },
    methods: {
        ataque(){
            this.dano_paladino = Math.floor(Math.random()*10)+1,
            this.dano_orc = Math.floor(Math.random()*10)+4
            this.vida_orc -= this.dano_paladino
            this.vida_paladino -= this.dano_orc
            this.acao = true      
        },
        ataqueEspecial() {
            this.dano_paladino = Math.floor(Math.random()*10)+8
            this.dano_orc = Math.floor(Math.random()*10)+4
            this.vida_orc -= this.dano_paladino
            this.vida_paladino -= this.dano_orc
            this.acao = true
        },
        curar(){
            this.curar_paladino = Math.floor(Math.random()*10)+6
            this.dano_orc = Math.floor(Math.random()*10)+4
            this.vida_paladino -= this.dano_orc
            this.vida_paladino += this.curar_paladino 
            this.cura = true
        },
        resetar (){
            setTimeout(() => {
                this.vida_paladino = 100
                this.vida_orc = 100
                this.acao = false
                this.cura = false
                }, 10);
            },
        },
    watch: {
        vida_paladino(){
            if(this.vida_paladino < 0){
                return this.vida_paladino = 0
            }
            else if(this.vida_paladino > 100){
                return this.vida_paladino = 100
            }
        },
        vida_orc(){
            if(this.vida_orc < 0){
                return this.vida_orc = 0}
            }
        },
         
    computed: {
            resultado(){
                if(this.vida_orc == 0 && this.vida_paladino == 0){
                    return this.resultado = "EMPATE!"
                }else if(this.vida_paladino == 0){
                    return this.resultado = 'ORC VENCEU!'
                }
                else if(this.vida_orc == 0){
                    return this.resultado = "PALADINO GANHOU!"
                }
            },
            estilo_paladino(){
                if(this.vida_paladino > 75){
                    return this.cor_paladino = 'c1'
                }
                else if(this.vida_paladino > 50){
                    return this.cor_paladino = 'c2'
                }else if(this.vida_paladino > 25){
                    return this.cor_paladino = 'c3'
                }else if(this.vida_paladino > 25){
                    return this.cor_paladino = 'c4'
                }else if(this.vida_paladino > 0){
                    return this.cor_paladino = 'c5'
                }
                
            },
            estilo_orc(){
                if(this.vida_orc > 75){
                    return this.cor_orc = 'c1'
                }
                else if(this.vida_orc > 50){
                    return this.cor_orc = 'c2'
                }else if(this.vida_orc > 25){
                    return this.cor_orc = 'c3'
                }else if(this.vida_orc > 25){
                    return this.cor_orc = 'c4'
                }else if(this.vida_orc > 0){
                    return this.cor_orc = 'c5'
                }
            },
            ataques(){
                if(this.vida_orc == 0 && this.vida_paladino == 0){
                    return this.fim = true
                }else if(this.vida_paladino == 0){
                    return this.fim = true
                }
                else if(this.vida_orc == 0){
                    return this.fim = true
                }
            },
            
            
    }
})
