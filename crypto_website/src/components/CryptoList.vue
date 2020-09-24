<template>
    <div>
    <div id="firstDiv">
        <table>
        <tr id="tableTop">
            <th>Name |</th>
            <th>current price |</th>
            <th>price change 24h |</th>
            <th>market cap |</th>
            <th>Favourite</th>
        </tr>
            <template v-for="(item,index) in filteredList">
                <tr>
                    <router-link v-bind:key="index" :to="'/Details/'+ item.id">
                <td  v-bind:key="index">{{item.name}}</td>
                    </router-link>
                <td>{{item.current_price}} €</td>
                <td>{{item.price_change_percentage_24h}}%</td>
                <td>{{item.market_cap}} €</td>
                <td>

                    <button @click="addOrRemoveFavorite(item)" class="btn btn-primary">Favorite  {{isFavorite(item)}}</button>
                </td>
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
    import 'bootstrap'
    import 'bootstrap/dist/css/bootstrap.min.css'
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
        },
        addOrRemoveFavorite(item){
            if(this.$store.state.favoriteCrypto.includes(item.id)){
                this.$store.commit('deleteFavorite',item.id)
            }
            else{
                this.$store.commit('addFavorite',item.id)
            }
        },
        isFavorite(item){
            if(this.$store.state.favoriteCrypto.includes(item.id)){
                return "✅"
            }
            else{
                return "❌"
            }
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
            if(!this.$store.state.cryptoList.data){
                return [];
            }
            return this.$store.state.cryptoList.data
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
