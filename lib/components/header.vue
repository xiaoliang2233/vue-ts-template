<template>
    <h1> {{title}} </h1>
</template>
<script lang="ts">
    import vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'
    @Component({

    })
    export default class Header extends vue {
        @Prop(String) readonly title: string | undefined = 'default title'
    }
</script>
