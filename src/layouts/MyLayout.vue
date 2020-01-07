<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
    
   
       <div class="row">
                <q-tabs v-model="tab"  class="text-white  ">
          <q-tab v-for="(item,index) in menu"  :key="index" :name="item.name" :label="item.name" 
          
          @click="go_to_page(item)"  />
        </q-tabs>
        <q-space/>
           <div class="text-h6 q-mr-lg" style="height:44px;line-height:44px;">nati 成长空间</div>
       </div>


    


      

    </q-header>
    <!-- 
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        
        <q-item clickable   >
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
  
      </q-list>
    </q-drawer>-->

    <q-page-container class="q-px-lg">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import menu from "src/config/menu.js";
export default {
  name: "MyLayout",

  data() {
    return {
      menu,
      tab: "base"
    };
  },
  created () {
    this. go_to_page({
      name:'base'
    });
  },
  methods: {
    go_to_page(item){
      this.$router.push({
        name:item.name
      })
    }
  },
};
</script>
