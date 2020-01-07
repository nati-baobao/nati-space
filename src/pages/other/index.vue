<template>
    <div>
<q-tabs
        v-model="tab"
        class="text-teal"
        align="left"
      >
        <q-tab v-for="(item,index) in tabs" :key="index" :name="item.value"  :label="item.label" />
      
      </q-tabs>
 <component :is="tab" ></component>
    </div>
</template>

<script>
import m1 from "src/pages/other/module/m1.vue"
import m2 from "src/pages/other/module/m2.vue"
    export default {
        components: {
            m1,
            m2
        }, 
        data() {
            return {
                tab:'m1',
                tabs:[
                    {label:'基础',value:'m1'},
                    {label:'baobao',value:'m2'},
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>