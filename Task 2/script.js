 new Vue({
      el: '#app',
      data: {
        photos: [],
        newTag: '',
        filterTag: '',
        uploadedImage: null
      },
      computed: {
        filteredPhotos() {
          if (!this.filterTag) return this.photos;
          return this.photos.filter(photo =>
            photo.tags.some(tag => tag.toLowerCase().includes(this.filterTag.toLowerCase()))
          );
        }
      },
      methods: {
        handleUpload(event) {
          const file = event.target.files[0];
          if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = e => {
              this.uploadedImage = e.target.result;
              this.photos.push({ url: this.uploadedImage, tags: [] });
            };
            reader.readAsDataURL(file);
          } else {
            alert('Please upload a valid image file.');
          }
        },
        addTag() {
          if (this.newTag.trim() === '') {
            alert('Tag cannot be empty.');
            return;
          }
          if (this.photos.length === 0) {
            alert('Please upload a photo first.');
            return;
          }
          const lastPhoto = this.photos[this.photos.length - 1];
          if (!lastPhoto.tags.includes(this.newTag.trim())) {
            lastPhoto.tags.push(this.newTag.trim());
            this.newTag = '';
          } else {
            alert('Tag already added to this photo.');
          }
        }
      }
    });