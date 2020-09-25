<template>
    <div id="firstDiv">
        <table>
            <tr>
                <th>Name |</th>
                <th>current price |</th>
                <th>price change 24h |</th>
                <th>market cap |</th>
            </tr>
            <template v-for="(item,index) in this.lfav">

                <tr>
                    <router-link v-bind:key="index" :to="'/Details/'+ item.id">
                        <td  v-bind:key="index">{{item.name}}</td>
                    </router-link>
                    <td>{{item.market_data.current_price.eur}} €</td>
                    <td>{{item.market_data.price_change_percentage_24h}} %</td>
                    <td>{{item.market_data.market_cap.eur}} €</td>
                </tr>
            </template>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                lfav: [],
            }
        },
        created() {
            this.getFavCryptoList()
        },
        beforeUpdate(){

        },
        methods:{
            async getCrypto(value){
                const res = await this.$store.dispatch('getCryptoDetails',value);
                return res.data
            },
           async getFavCryptoList(){
                var list=[]
                for (var item of this.favoriteCryptoList){
                    const res = await this.getCrypto(item)
                    list.push(res)
                }
                this.lfav=list
            }
        },
        computed:{
             favoriteCryptoList(){
                return this.$store.state.favoriteCrypto
            },
            cryptoData(){
                return this.$store.state.cryptoData.data
            },
        }
    }
</script>

<style>
    table{
        border: 1px solid #333;
    }
    th{
        background-color: #333;
        color: #fff;
    }
    table{
        align-content: center;
    }
    #firstDiv{
        display:flex;
        justify-content: center;
    }
    #buttonDiv{
        display:flex;
        justify-content: center;
    }
    tr{
        border: 1px solid #333;
    }
</style>
