<template>
    <div>
    <div id="firstDiv">
        <table>
        <tr>
            <th>Name</th>
            <th>current price</th>
            <th>price change 24h</th>
            <th>market cap</th>
        </tr>
            <template v-for="(item,index) in filteredList">
                <tr>
                    <router-link v-bind:key="index" :to="'/Details/'+ item.id">
                <td v-bind:key="index">{{item.name}}</td>
                    </router-link>
                <td>{{item.current_price}}</td>
                <td>{{item.price_change_percentage_24h}}%</td>
                <td>{{item.market_cap}}</td>
                </tr>
            </template>
        </table>
    </div>
        <div id="buttonDiv">
            <button @click="decrement()"><</button>
            <div>{{this.$store.state.page_number}}</div>
            <button @click="increment()">></button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {list:[],page_number:1}
    },
    methods:{
        getList(){
            this.$store.dispatch('getCryptoList');
        },
        increment(){
            this.$store.commit('increment');
            this.$store.dispatch('getCryptoList');
        },
        decrement(){
            this.$store.commit('decrement');
            this.$store.dispatch('getCryptoList');
        }
    },
    props:{
      cryptoId:{}
    },
    created() {
        this.$store.dispatch('getCryptoList');
    },
    computed: {
        filteredList(){
            console.log(this.$store.state.cryptoList.data)
            if(!this.$store.state.cryptoList.data){
                return [];
            }
            return this.$store.state.cryptoList.data
        }
    }
}

</script>

<style>
    table,
    td {
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
</style>
