
<template>
    <div>
        <FavoriteCrypto></FavoriteCrypto>
    </div>
</template>

<script>
    // @ is an alias to /src
    import FavoriteCrypto from '@/components/FavoriteCrypto.vue'

    export default {
        name: 'Crypto',
        components: {
            FavoriteCrypto
        }
    }
</script>