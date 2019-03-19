<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
    export default {
        name: "Home",
      methods:{
          goToMenu: function () {
            //退回上一页
            //this.$router.go(-1);

            //指定地址
           // this.$router.replace('/menu');
            //指定路由名下
           // this.$router.replace({name:"menuLink"});

            //通过push跳转
           // this.$router.push('/menu');
            //this.$router.push({name:"menuLink"});
          }
      }
    }
</script>

<style scoped>

</style>
