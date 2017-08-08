<template>
  <div>
    <todo></todo>
  </div>
</template>

<script>
import echarts from 'echarts';
import '../../../../assets/echarts/map/world'


export default {
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart();
  }
}

</script>