<template>
    <button @click="count++">Click Me</button>
    <h1>{{ count }}</h1>
</template>
<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>