<template>
    <div>
            <template v-for="(item,index) in filteredList">
                <tr>
                <td v-bind:key="index">{{item.name}}</td>
                <td v-bind:key="index">{{item.name}}</td>
                <td v-bind:key="index">{{item.name}}</td>
                <td v-bind:key="index">{{item.name}}</td>
                </tr>
            </template>
    </div>
</template>
<script>
export default {
    data(){
        return {list:[]}
    },
    methods:{
    },
    created() {

    },
    computed: {
        filteredList(){
            console.log(this.$store.state.cryptoList.data)
            if(!this.$store.state.cryptoList.data){
                return [];
            }
            return this.$store.state.cryptoList.data.slice(0,20);
        }
    }
}

</script>

