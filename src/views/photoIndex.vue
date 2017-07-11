<style type="text/css">
  .photoIndex > h2 {
    text-transform: uppercase;
  }
  .description > p {
    margin: 0;
  }
@media screen and (min-width:600px) {
  .photoIndex {
    width: 100%;
    height: 92vh;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    text-align: center;
    padding: 40px 22%;
    box-sizing: border-box;
  }
  .description {
    text-align: left;
    margin-bottom: 30px;
  }
  .photoIndex > img,
  .photoIndex > .video-wrap {
    width: 100%;
    margin: 0 auto 10px;
  }
}
@media screen and (max-width:600px) {
  .photoIndex {
    width: 100%;
    height: 92vh;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    text-align: center;
    padding: 20px 10%;
    box-sizing: border-box;
  }
  .description {
    text-align: left;
    margin-bottom: 20px;
  }
  .description > h3 {
    margin: 0;
  }
  .photoIndex > img,
  .photoIndex > .video-wrap {
    width: 100%;
    margin: 0 auto 10px;
  }
}
.video-wrap, .video-player, video-js {
  width:100%;
  position:relative;
  padding-bottom:56.25%;
  height: 0;
}
.video-wrap video {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%
}
</style>
<template>
  <div class="photoIndex">
    <h2>{{$route.params.name}}</h2>
    <div class="description">
      <p>{{photoData.description.name}}:</p>
      <p>{{photoData.description.value}}</p>
    </div>
    <div class="video-wrap">
        <video-player  ref="videoPlayer" 
            :options="playerOptions">
        </video-player>
    </div>
    <img v-for="n in photoData.length" v-lazy="'http://oqwhnnwix.bkt.clouddn.com/' + photoData.name + '/' + n + '.jpg'">
  </div>
</template>

<script type="text/javascript">
import photos from '../photos.js';
import { videoPlayer } from 'vue-video-player'
export default {
  components: {
    videoPlayer
  },
  data() {
    return {
      playerOptions: {

        // component options
        start: 0,
        playsinline: false,

        // videojs options
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: "http://oqwhnnwix.bkt.clouddn.com/left/2/2.mp4"
        }],
        poster: "http://covteam.u.qiniudn.com/poster.png",
      }
    }
  },
  created() {
  },
  computed: {
    photoData() {
      let routeParams = this.$route.params;
      return photos[routeParams.name][routeParams.position][routeParams.n];
    },
  }
}
</script>