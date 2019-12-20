<template>
    <div class="input-wrapper">
        <input type="text" v-model="value" style="background: blueviolet">
    </div>
</template>
<script lang="ts">
    import vue from 'vue'
    import { Component, Prop, Model, Provide} from 'vue-property-decorator'
    @Component({

    })
    export default class Header extends vue {
    }
</script>
