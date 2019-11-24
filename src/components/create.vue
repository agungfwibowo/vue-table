<template>
  <div class="container">
    <div class="w-50 mx-auto mt-5 px-5 border rounded py-3">
      <div>
          <h4 class="text-center">Create New Data</h4>
      </div>
      <form v-on:submit.prevent="onFormSubmit" autocomplete="off">
        <div>
          <input type="text" name="nama" id="nama" v-model="nama" required placeholder="Nama">
        </div>
        <div>
          <input type="text" name="nim" id="nim" v-model.number="nim" required placeholder="NIM">
        </div>
        <div>
          <input type="number" step="0.01" name="ipk" id="ipk" v-model.number="ipk" required placeholder="IPK">
        </div>
        <div>
          <input type="text" name="semester" id="semester" v-model="semester" required placeholder="Semester">
        </div>
        <div>
          <input type="text" name="kelas" id="kelas" v-model="kelas" required placeholder="Kelas">
        </div>
        <div>
          <input type="text" name="jurusan" id="jurusan" v-model="jurusan" required placeholder="Jurusan">
        </div>
        <div>
          <input type="text" name="jp" id="jk" v-model="jenis_kelamin" required placeholder="Jenis Kelamin">
        </div>
        <div class="nav justify-content-end">
          <div>
            <a class="back nav-link active" v-bind:href="back">Back</a>
          </div>
          <div  class="form-action-buttons">
            <button class="btn btn-primary mb-1" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Create',
  data () {
    return {
      nama : '',
      nim : '',
      ipk : '',
      semester : '',
      kelas : '',
      jurusan : '',
      jenis_kelamin : '',
      url : '',
      back : ''
    }
  },
  mounted(){
    this.url = new URL(window.location.href);
    this.back = this.url.origin+'/#/index';
  },
  methods:{
    onFormSubmit : function() {
      this.$axios.post('http://127.0.0.1:8000/api/v1/mahasiswa', {
          nama: this.nama,
          nim: this.nim,
          ipk: this.ipk,
          semester: this.semester,
          kelas: this.kelas,
          jurusan:this.jurusan,
          jenis_kelamin: this.jenis_kelamin
      })
      .then( (response, nama) => {
          // handle success
          console.log(response);
          alert('Data atas nama '+this.nama+' Berhasil di Input!');
          this.resetForm();
      })
      .catch( (error) => {
          // handle error
          console.log(error);
      });        
    },    
    resetForm : function(){
        this.nama = '';
        this.nim = '';
        this.ipk = '';
        this.semester = '';
        this.kelas = '';
        this.jurusan = '';
        this.jenis_kelamin = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./style.css" scoped>
</style>
