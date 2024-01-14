<template>
    <div class="login">
        <div class="login-im"></div>
        <form class="login-form">
            <span class="p-float-label">
                <InputText id="email" v-model="value" aria-labelledby="email" />
                <label for="email">Email</label>
            </span>

        </form>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            value: ""
        };
    }
};

</script>

<style scoped>
.login {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100vh;
}

.login-im {
    background-image: url("/login.png");
    flex: 1;
}

.login-form {
    align-items: center;
    background-color: linear-gradient(var(--color-01), var(--color-03));
    display: flex;
    flex: 1;
    justify-content: center;
}
</style>