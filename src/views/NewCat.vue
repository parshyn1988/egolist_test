<template>
  <div class="page new-cat">
    <template v-if="isLoaded">
      <p>File loaded</p>
    </template>
    <template v-else>
      <img :src="previewImage" class="new-cat__uploading" alt="" />
      <input type="file" accept="image/jpeg" @change=uploadImage>
      <button v-if="previewImage" @click="saveImage">Save image</button>
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'NewCat',

  data(){
    return{
      previewImage: null,
      isLoaded: false,
    };
  },

  methods:{
    ...mapActions([
        'updatePosts'
    ]),

    uploadImage(e){
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.previewImage = e.target.result;
      };
    },

    saveImage() {
      this.updatePosts({ id: Date.now(), author: 'My', img: this.previewImage });
      this.isLoaded = true;

      setTimeout(this.clearPreview, 1500);
    },

    clearPreview() {
      this.isLoaded = false;
      this.previewImage = null;
    }
  }
}
</script>
