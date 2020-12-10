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
        <canvas ref="myChart" width="400" height="400"></canvas>
    </div>
</template>

<script>
    import Chart from "chart.js"
    export default {

        data(){
            return {

            }
        },
        created() {
            this.getCrypto(this.$route.params.id)
        },
        mounted() {
            this.generateGraph()
        },
        methods:{
            getCrypto(index){
                this.$store.dispatch('getCryptoDetails',index);
            },
            generateGraph(){
                console.log( this.crypto)
                var ctx =this.$refs['myChart']
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['1','2','3'],
                        datasets: [{
                            label: '# of Votes',
                            data: [this.crypto.data.market_data.price_change_percentage_24h, this.crypto.data.market_data.price_change_percentage_7d,this.crypto.data.market_data.price_change_percentage_14d],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
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
