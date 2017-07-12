<style scoped type="text/css">
  
  
  
  
  .text-bold {
    font-weight: 700;
  }

  /*
  * 屏幕宽大于800px用以下css
  */

  @media screen and (min-width:800px) {
    .container {
      background: #000;
      width: 100%;
      height: 92vh;
      position: relative;
    }
    .box {
      box-sizing: border-box;
      display: table;
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
    }
    .info-img {
      width: 20rem;
      height: 20rem;
      float: left;
    }
    .content {
      float: left;
      font-size: 11px;
      line-height: 16px;
      margin-left: 4rem;
      color: #fff;
      z-index: 999;
    }
    .info-icon {
      float: left;
      width: 1.8rem;
      height: 1.8rem;
      margin: 0.4rem 1.2rem 0 0;
    }
    .text-name {
      font-size: 24px;
      line-height: 24px;
      font-family: DINBold;
    }
    .text-type {
      font-weight: 700;
      font-size: 16px;
      line-height: 28px;
      font-family: DINBold;
    }
  }

  /*
  * 屏幕宽小于800px用以下css
  */

  @media screen and (max-width:800px) {
    .container {
      background: #000;
      width: 100%;
      height: 110vh;
    }
    .box {
      /*width: 425px;*/
      box-sizing: border-box;
      /*display: table;*/
      margin:auto;
      transform: translateY(10%);
    }
    .info-img {
      width: 20vh;
      height: 20vh;
      margin: auto;
      display: block;
      
    }
    .content {
      font-size: 10px;
      line-height: 15px;
      color: #fff;
      text-align: center;
      margin-top: 2rem;
      font-weight: 400;
    }
    .info-icon {
      width: 1.8rem;
      height: 1.8rem;
      margin: 0.4rem 1.2rem 0 0;
    }
    .dis-block {
      display: block;
    }
      .text-name {
      font-size: 22px;
      line-height: 22px;
      font-family: DINBold;
    }
    .text-type {
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;
      font-family: DINBold;
    }
  }
</style>
<template>
<div>
  <div class="container">
    <div class="box">
      <img class="info-img" src="../assets/info.jpg">
      <div class="content">
        <span class="text-name"><span class="text-bold">Diva.Gao</span> 高价硬</span></br>
        <span class="text-type">PHOTOGRAPHER / DESIGNER / PLANNER</span></br>
        </br>
        <span class="text-bold">Education:</span></br>Advertising Bachelor Degree (2013 - 2017) <span class="dis-block"></span>- Jinan University (Guangzhou)</br>
        </br>
        <span class="text-bold">Experience:</span></br>New Media Journalist - Xinhua News Agency Guangzhou</br>Retoucher - Veraho Production</br>Copy & Designer (Intern) - Utop Shanghai</br>Account Executive (Intern) - TBWA Shanghai</br>Planner Assistant - AKQA Shanghai</br>
        </br>
        <span class="text-bold">Contact Me:</span></br>Email: divagogogo@gmail.com</br>
        <a href="http://weibo.com/divago/home"><img class="info-icon" src="../assets/weibo.png"></a>
        <a href="https://www.instagram.com/lovedivago/"><img class="info-icon" src="../assets/instagram.png"></a>
      </div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
export default {
}
</script>