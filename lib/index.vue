<template>
    <div>
        hello, 山鬼九歌
    </div>
</template>
<script lang="ts">
    import vue from 'vue'
    import { Component } from 'vue-property-decorator'
    @Component({

    })
    export default class app extends vue {
        mounted() {
            console.log('香辛料')
        }
    }
</script>
