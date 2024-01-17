<template>
    <input :id="name" :v-model="value" />
    <label :for="name">{{ label }}</label>
    <p>{{ value }}</p>
</template>

<script lang="ts">

export default {
    name: "TextField",
    props: {
        label: { type: String, required: true },
        name: { type: String, required: true },
        value: { type: String, required: true }
    }
};
</script>