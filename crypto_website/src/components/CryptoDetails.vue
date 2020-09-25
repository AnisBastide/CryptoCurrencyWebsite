<template>
    <div>
    <div id="name">
        {{crypto.data.name}}
    </div>
        <div id="info">
    <div class="info">
        Price Change last 24h :{{crypto.data.market_data.price_change_percentage_24h}} %
    </div>
    <div  class="info">
           Current price: {{crypto.data.market_data.current_price.eur}} €
    </div>
    <div  class="info">
           market cap: {{crypto.data.market_data.market_cap.eur}} €
    </div>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return {

            }
        },
        created() {
            this.getCrypto(this.$route.params.id)
        },
        methods:{
            getCrypto(index){
                this.$store.dispatch('getCryptoDetails',index);
            }
        },
        computed:{
            crypto(){
                return this.$store.state.cryptoData
            }
        }
    }
</script>

<style>
#name{
    font-size: 225px;
    background-color: #2c3e50;
    color: white;
}
    #info{
        display: flex;
        justify-content: space-around;
        background-color: #42b983;
        padding: 50px;
    }
    .info{
        font-size: larger;
    }
</style>
