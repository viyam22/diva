<style scoped type="text/css">
  .container {
    background: #000;
    width: 100%;
    height: 100%;
  }
  .box {
    box-sizing: border-box;
    overflow: hidden;
    display: table;
    margin:auto;
    transform: translateY(50%);
    /*position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);*/
  }
  .info-img {
    width: 20rem;
    height: 20rem;
    float: left;
  }
  .content {
    float: left;
    margin-left: 4rem;
    color: #fff;
  }
  .info-icon {
    float: left;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1.2rem;
  }
</style>
<template>
  <div class="container">
    <div class="box">
      <img class="info-img" src="../assets/info.jpg">
      <div class="content">
        Diva.gao 高价硬</br>
        PHOTOGRAPHER / DESIGNER / PLANNER</br>
        </br>
        Education:</br>
        Advertising Bachelor Degree (2013 - 2017) - Jinan University (Guangzhou)</br>
        </br>
        Experience:</br>
        New Media Journalist - Xinhua News Agency Guangzhou</br>
        Retoucher - Veraho Production</br>
        Copy & Designer (Intern) - Utop Shanghai</br>
        Account Executive (Intern) - TBWA Shanghai</br>
        Planner (Intern) - AKQA Shanghai</br>
        </br>
        Contact Me:</br>
        Email: divagogogo@gmail.com</br>
        <img class="info-icon" src="../assets/weibo.png">
        <img class="info-icon" src="../assets/instagram.png">
      </div>
    </div>
  </div>
</template>