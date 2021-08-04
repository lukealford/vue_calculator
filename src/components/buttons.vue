<template>
   <div>
        <div id="topOperators">
            <button  v-for="i in top" :key="i" @click='run(i)' class="button">{{i}}</button>
        </div>  
        <div id="main">
            <div id="numbers">
                <button v-for="i in numbers" :key="i" @click='run(10-i)' class="button">{{10-i}}</button>
                <button v-for="i in bottom" :key="i" @click='run(i)' class="button">{{i}}</button>
            </div>
            <div id="operators">
                <button v-for="i in right" :key="i" @click='run(i)' class="button">{{i}}</button>
            </div>
        </div>
   </div>
</template>

<script>
export default {
components: {

    },

    data() {
        return {
            numbers:9,
            bottom: ['.',0,'+/-'],
            top: ['CE','C', '%', '/'],
            right: ['X','-','+','=']
        }
    },
    methods: {
        run(data) {
            this.isNumeric(data) === true ? this.$store.dispatch('updateDisplay',data) : this.$store.dispatch('operatorClicked',data)
        },
        isNumeric(val){
            return /^-?\d+$/.test(val);  
        }
    },
}
</script>

<style>
    #topOperators{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    #main{
        display: grid;
        grid-template-columns: 75% 25%;
    }
    #numbers {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        direction: rtl;
    }

    button{
        width: 100%;
        background:#333;
        border: 1px solid white;
        color: #fff;
        padding: 20px;
    }


    #operators button,
    #topOperators button{
        background: #1d1a1a;
    }
    
    #operators button:hover,
    #topOperators button:hover,
    button:hover{
        background: #222;
    }
    #operators button:active,
    #topOperators button:active,
    button:active{
        background: #293827;
    }

</style>