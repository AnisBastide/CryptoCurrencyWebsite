
<template>
    <div>
        <CryptoDetails></CryptoDetails>
    </div>
</template>

<script>
    // @ is an alias to /src
    import CryptoDetails from '@/components/CryptoDetails.vue'
    export default {
        name: 'Details',
        components: {
            CryptoDetails
        }
    }
</script>
