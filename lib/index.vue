<template>
    <div>
        <Header :title="title"></Header>
        <div>
            <h2>双向绑定 v-model</h2>
            <div>
                <div>属性名 value: {{ value }}</div>
                <input type="text" v-model="value" style="background: aqua"/>
            </div>
            <h2>监听 watch</h2>
            <div>
                <div>属性名 formData.id: {{ formData.id }}</div>
                <button @click="handleIdButtonClick">点击变化id</button>
            </div>
            <h2>checkBox</h2>
            <div>
                <div>属性名 checked: {{checked}}</div>
                <input type="checkbox" :value="checked">
            </div>
        </div>
        <div>

        </div>
    </div>
</template>
<script lang="ts">
    import vue from 'vue'
    import { Component, Model, Provide, Watch } from 'vue-property-decorator'
    import Header from '@/components/header.vue'
    @Component({
        components: {
            Header
        }
    })
    export default class app extends vue {
        title: string  = ''
        formData = {
            id: 0,
            address: ''
        }
        @Provide() value = ''
        @Watch('formData.id') handleIdChange(value, oldValue) {
            console.log('此花亭', value, oldValue);
        }
        @Model('change', { type: Boolean }) checked: boolean
        handleIdButtonClick() {
            this.formData.id = Math.random()
        }
        mounted() {
            console.log('香辛料')
        }
    }
</script>
