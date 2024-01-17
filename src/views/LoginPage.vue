<template>
    <div class="login">
        <div class="login-im">
            <span></span>
            <h3>Atta</h3>
            <p>Gerencie sua vida financeira de uma forma nunca antes vista</p>
        </div>

        <div class="login-form">
            <h3>Login</h3>
            <div>
                <TextField name="email" label="Email" :value="userLogin.email" />
                <p>{{ userLogin.email }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import TextField from "@/components/Text.vue";

export default {
    data() {
        return {
            userLogin: {
                email: "",
                password: ""
            }
        };
    },
    methods: {
        log_debug() {
            console.log(this.userLogin.email);
        }
    },
    components: {
        TextField,
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
    display: flex;
    flex-direction: column;
    padding: 3rem 0 0 6rem;
    flex: 1;
    background: linear-gradient(var(--color-01), var(--color-03));
}

.login-im span {
    background-image: url("/background.jpeg");
    background-size: contain;
    height: 400px;
    width: 400px;
    border-radius: 5px;
}

.login-im h3 {
    content: "Atta";
    padding-top: 4rem;
    font-size: 4.5rem;
    font-weight: 800;
    width: 400px;
}

.login-im p {
    content: "Atta";
    font-size: 1rem;
    font-weight: 300;
    width: 400px;
}

.login-form {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding-left: 5rem;
    width: 30%;
}

.login-form h3 {
    font-weight: 700;
    font-size: 2rem;
}

.login-form div:first-of-type {
    width: fit-content;
}

.login-form-fields {
    display: flex;
    padding-top: 2rem;

}

.login-form-fields span label {
    font-weight: 500;
}
</style>