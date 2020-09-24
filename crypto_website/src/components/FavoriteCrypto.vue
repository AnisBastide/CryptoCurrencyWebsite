<template>
    <div id="firstDiv">
        <table>
            <tr>
                <th>Name |</th>
                <th>current price |</th>
                <th>price change 24h |</th>
                <th>market cap |</th>
                <th>Favourite</th>
            </tr>
            <template v-for="(item,index) in crypto">

                <tr>
                    <router-link v-bind:key="index" :to="'/Details/'+ item.id">
                        <td  v-bind:key="index">{{item.name}}</td>
                    </router-link>
                    <td>{{item.current_price}}</td>
                    <td>{{item.price_change_percentage_24h}}%</td>
                    <td>{{item.market_cap}}</td>
                </tr>
            </template>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return {crypto:[]}
        },
        created() {
            this.GetFavoriteCryptoList()
        },
        methods:{
            getCrypto(value){
                this.$store.dispatch('getCryptoDetails',value);
                return this.$store.state.cryptoData
            },
            GetFavoriteCryptoList(){
                this.$store.state.favoriteCrypto.forEach((value) => {
                    this.crypto.push(this.getCrypto(value))
                })
            }
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
