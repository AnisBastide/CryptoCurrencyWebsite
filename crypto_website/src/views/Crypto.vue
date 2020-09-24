
<template>
    <div>
        <CryptoList></CryptoList>
    </div>
</template>

<script>
    // @ is an alias to /src
    import CryptoList from '@/components/CryptoList.vue'

    export default {
        name: 'Crypto',
        components: {
            CryptoList
        }
    }
</script>
