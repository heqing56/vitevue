<template>
  <Operation v-if="type==='Operation'" />
  <Location v-else-if="type==='Location'" />
  <House v-else-if="type==='House'" />
  <User v-else-if="type==='User'" />
  <Location v-else />
</template>

<script>
import { Location, Operation,User ,House} from "@element-plus/icons-vue";
export default {
  components: {
    Location,
    Operation,
    User,
    House
  },
  props:{
    type:{
        type:String,
        default:'Location'
    }
  }
};
</script>

<style>
</style>