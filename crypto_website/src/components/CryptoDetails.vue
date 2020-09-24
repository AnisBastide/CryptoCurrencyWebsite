<template>
    <div>
    <div>
        {{crypto.data.name}}
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
</template>
<script>
    export default {

        data(){
            return {crypto:{}}
        },
        created() {
            this.getCrypto(this.$route.params.id)
        },
        methods:{
            getCrypto(index){
                this.$store.dispatch('getCryptoDetails',index);
                this.crypto = this.$store.state.cryptoData
            }
        }
    }

</script>

<style>

</style>
