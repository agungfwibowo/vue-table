<template>
  <div class="container">
   <div class="pt-1">
    <nav class="container nav justify-content-between  px-4">
      <h1 class="d-inline-block">Table Mahasiswa</h1>
      <div class="mt-2">
        <!-- <button v-on:cLick="tData()" type="submit" class="btn btn-primary mb-1"> Tambah Data</button> -->
        <button type="submit" class="btn btn-primary mb-1" ><router-link to="/create">Tambah Data</router-link></button>
      </div>
      <div class="d-inline-block">
        <form v-on:submit.prevent="search" class="search-mhs form-inline">
          <div class="form-group mb-2">
            <input type="text" class="form-control ml-2" id="searchByNama" placeholder="Cari Nama" v-model="cariNama">
            <input type="text" class="form-control mx-2" id="searchByNim" placeholder="Cari Nim" v-model="cariNim">
            <button type="submit" class="btn btn-primary mrmb-2">Search</button>
          </div>
        </form>
      </div>     
    </nav>
  </div>
  <div  class="container mt-2">    
    <table class="w-100">
        <tr>
            <td class="d-none hide">
                <form onsubmit="onFormSubmit(event);" autocomplete="off">
                    <div>
                        <label>Nama<span class="required">*</span></label><label class="validation-error hide" id="fullNameValidationError">This field is required.</label>
                        <input type="text" name="nama" id="nama" required>
                    </div>
                    <div>
                        <label>NIM</label>
                        <input type="text" name="nim" id="nim" required>
                    </div>
                    <div>
                        <label>IPK</label>
                        <input type="number" step="0.01" name="ipk" id="ipk" required>
                    </div>
                    <div  class="form-action-buttons">
                        <input type="submit" value="Submit">
                    </div>
                </form>
            </td>
            <td>
                <table class="list" id="mhs">
                    <thead>
                        <tr class="d-none">
                            <button class="hide" id="sortByName" style="margin:10px auto">Sort By Name</button>
                            <button class="hide" id="sortByNim" style="margin:10px auto">Sort By NIM</button>
                            <button class="hide" id="sortByIpk" style="margin:10px auto">Sort By IPK</button>
                        </tr>
                        <tr>
                            <th>Nama</th>
                            <th>NIM</th>
                            <th>IPK</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="mahs in mhs" :key="mahs.id">
                            <td>{{mahs.nama}}</td>
                            <td>{{mahs.nim}}</td>
                            <td>{{mahs.ipk}}</td>
                            <td> <button @click="patch(mahs.id)" class="btn btn-outline-warning mb-1">Edit</button> <span> </span> <button class="btn btn-outline-danger mb-1" @click="thapus(mahs.id, mahs.nama)">Hapus</button> </td>
                        </tr>                      
                        <!-- letak Tabel Dari Data Base -->
                    </tbody>
                </table>
            </td>
        </tr>
    </table>
    <nav aria-label="Page navigation example d-inline-block">
        <div class="pr-3 pt-1 mb-n3 d-inline-block">
            <ul class="pagination mb-1">
                <li class="page-item" :class="{'disabled': (currentPage == 1)}"><a class="page-link" href="#" @click.prevent="prevP()">Previous</a></li>
                <li class="page-item" :class="{'active': (currentPage == page)}" v-for="(page,i) in allPages" :key="i"><a class="page-link" href="" @click.prevent="noPages(page)">{{page}}</a></li>
                <li class="page-item" :class="{'disabled': (currentPage == allPages)}"><a class="page-link" href="#" @click.prevent="nextP()">Next</a></li>
            </ul>
        </div>
    </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      currentPage : 1,
      allPages : 0,
      cariNim : '',
      cariNama : '',
      url : null,
      message : 'Daftar Nama Mahasiwa Lulus', // tipe data string
      mhs : [],
      id : 0,
      errored : false,
      loading : true,
      page : null,
      pagePrev : null,
      classDisableP : null,
      classDisableN : null,
      search_params : null
    }
  },
  mounted(){
    this.url = new URL(window.location.href);
    this.getParams();
    this.getDataMahasiswa();
  },
  methods:{
    getDataMahasiswa: function(){
      this.$axios.get('http://127.0.0.1:8000/api/v1/mahasiswa', {
      params : {
        page : this.currentPage,
        // nim: cariNim
        nim: this.cariNim !== '' ? this.cariNim : null,
        //nama: cariNama
        nama: this.cariNama !== '' ? this.cariNama : null
        }
      })
      .then(response => {
        // handle success
        this.mhs = response.data.data
        this.allPages = response.data.last_page
        // console.log(this.currentPage)
        // console.log(window.location.origin + '#/index/?page=' + this.currentPage + '&nim=' + this.cariNim + '&nama=' + this.cariNama)
        window.history.pushState("","", window.location.origin + '#/index/?page=' + this.currentPage + '&nim=' + this.cariNim + '&nama=' + this.cariNama)
      })
      .catch(error => { 
          // handle error
          console.log(error)
          this.error = true
      })
      .finally(() => this.loading = false)
    },
    getParams: function(){
      this.search_params = new URLSearchParams(this.url.search);
      if(this.search_params.has('nama')) {
        this.cariNama = this.search_params.get('nama'); // maka set variable cariNama dengan isian url parameter: nama
        this.nama = this.search_params.get('nama'); // maka isis input text ID searchByNama dengan isian url parameter: nama
      }
      // cek apakah ada url parameter: nim 
      if(this.search_params.has('nim')) {
          this.cariNim = this.search_params.get('nim'); // maka set variable cariNama dengan isian url parameter: nim
          this.nim = this.search_params.get('nim'); // maka isis input text ID searchByNama dengan isian url parameter: nama
      }
      if(this.search_params.has('page')) {
          this.currentPage = this.search_params.get('page'); // maka set variable page dengan isian url parameter: page
      }
    },
    search: function(){
      this.currentPage = 1;
      this.getDataMahasiswa();
    },
    Post: function(id){
      // console.log(id)
    },
    patch: function(id){
      location.href = this.url.origin+'/#/patch/' + id
    },
    thapus: function(id, nama){
      if (confirm('Anda yakin menghapus data '+nama+'?')){
        this.$axios.delete('http://127.0.0.1:8000/api/v1/mahasiswa/'+id)
        .then( (response) => {
          // handle success
          this.getDataMahasiswa()
        })
        .catch( (error) => {
          // handle error
          console.log(error)
        })
      }
    },
    prevP: function(){
      if(this.currentPage <= 1 ){
        this.currentPage = 1
      }else{
        this.currentPage--
      }
      this.getDataMahasiswa();
    },
    noPages: function(noPages){
      this.currentPage = noPages
      this.getDataMahasiswa();
    },
    nextP: function(){
      if(this.currentPage >= this.allPages ){
        this.currentPage = this.allPages
      }else{
        this.currentPage++
      }
      this.getDataMahasiswa();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./style.css" scoped>
</style>
