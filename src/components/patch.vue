<template>
  <div class="w-50 mx-auto mt-5 px-5 border rounded py-3">
    <div>
      <h4 class="text-center">Update Data</h4>
    </div>
    <form v-on:submit.prevent="patch" autocomplete="off">
      <div>
        <input type="text" name="nama" v-model="nama" required placeholder="Nama">
      </div>
      <div>
        <input type="text" name="nim" v-model.number="nim" required placeholder="NIM">
      </div>
      <div>
        <input type="number" step="0.01" name="ipk" v-model.number="ipk" required placeholder="IPK">
      </div>
      <div>
        <input type="text" name="semester" v-model="semester" required placeholder="Semester">
      </div>
      <div>
        <input type="text" name="kelas" v-model="kelas" required placeholder="Kelas">
      </div>
      <div>
        <input type="text" name="jurusan" v-model="jurusan" required placeholder="Jurusan">
      </div>
      <div>
        <input type="text" name="jp" v-model="jenis_kelamin" required placeholder="Jenis Kelamin">
      </div>
      <div class="nav justify-content-end">
        <div>
          <a class="nav-link active" v-bind:href="cancel">Cancel</a>
        </div>
        <div  class="form-action-buttons">
          <button class="btn btn-primary mb-1" type="submit">Update</button>          
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Patch',
  data () {
    return {
      id : '',
      nama : '',
      nim : '',
      ipk : '',
      semester : '',
      kelas : '',
      jurusan : '',
      jenis_kelamin : '',
      search_params : '',
      url : '',
      cancel : '',
      mahasiswa: []
    }
  },
  mounted(){
    this.url = new URL(window.location.href);
    this.cancel = this.url.origin+'/#/index';
    this.getParamsId();
    this.getResponse();
  },
  methods:{
    getResponse () {
      this.$axios.get('http://127.0.0.1:8000/api/v1/mahasiswa/'+this.id)
        .then( (response) => {
          // handle success   
          this.mahasiswa = response.data;
          this.nama = this.mahasiswa.nama;
          this.nim = this.mahasiswa.nim;
          this.ipk = this.mahasiswa.ipk;
          this.kelas = this.mahasiswa.kelas;
          this.semester = this.mahasiswa.semester;
          this.jurusan = this.mahasiswa.jurusan;
          this.jenis_kelamin = this.mahasiswa.jenis_kelamin;
      })
        .catch( (error) => {
          // handle error
          console.log(error);
        })
    },
    getParamsId () {
        this.id = this.$route.params.id;
        // output : 100
        console.log(this.id)
    },
    patch : function() {
      this.$axios.patch('http://127.0.0.1:8000/api/v1/mahasiswa/'+this.id, {
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
        alert('Data atas nama '+this.nama+' Berhasil di Update!');  
        window.location = this.back = this.url.origin+'/#/index';;
      })
      .catch( (error) => {
        // handle error
        console.log(error);
      });        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./style.css" scoped>
</style>
