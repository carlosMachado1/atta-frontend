<template>
    <div class="presentation">
        <h1>Atta</h1>
        <h4>Gerencie suas finanças com nossa aplicação</h4>
    </div>
</template>

<script lang="ts">
export default {
    mounted() {
        setTimeout(() => {
            this.$router.push("/login");
        }, 3000);
    }
};
</script>

<style scoped>
.presentation {
    align-items: center;
    background: linear-gradient(#275f3c, #69a20a);
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    height: 100vh;
}

.presentation h1 {
    font-size: 4rem;
    font-weight: 800;
    height: fit-content;
}

.presentation h4 {
    font-weight: 300;
    font-size: 1rem;
    height: fit-content;
}
</style>