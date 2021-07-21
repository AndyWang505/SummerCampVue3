Vue.createApp({
  data() {
    return {
      data:[],
      imgType: 1,
    };
  },
  methods: {
    changeImage() {
      this.imgType++;
      this.imgType = this.imgType > 3 ? this.imgType - 3 : this.imgType;
    },
  },
  mounted() {
    axios.get('https://randomuser.me/api/?results=9').then((response) => {   //發出取得的請求
      console.log(response);
      this.data = response.data.results;
    })
  },
}).mount('#app');
