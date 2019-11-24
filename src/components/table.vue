<template>
  <div class="hello">
    <!-- <p>{{currentState ? 'Tombol Tidak Aktif' : 'Tombol Aktif'}}</p>  -->
    <!-- <button :class="{ alert:showAlert }" v-on:click="changeName" :disabled="currentState" >Ubah Nama</button> -->
    <div class="container-table">
      <input type="text" placeholder="Masukan Nim" v-model="nimMhs">
      <input type="text" placeholder="Masukan Nama" v-model="namaMhs">
      <input type="text" placeholder="Masukan IPK" v-model="ipkMhs">
      <p>{{nimMhs}}</p>
      <p>{{namaMhs}}</p>
      <p>{{ipkMhs}}</p>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>NIM</th>
            <th>Nama</th>
            <th>IPK</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(mhs, index) in mahasiswa" :key='index'>
            <td>{{index+1}}.</td>
            <td>{{mhs.nim}}</td>
            <td>{{mhs.nama}}</td>
            <td>{{mhs.ipk}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vuetable',
  data () {
    return {
      Tittle : 'Table',
      nimMhs: '',
      namaMhs: '',
      ipkMhs: '',
      showAlert : false,
      currentState : false,
      mahasiswa : [
        {nim: 1211, nama: 'Agus', ipk: 3.5},
        {nim: 1231, nama: 'Yadi', ipk: 3.8},
        {nim: 1215, nama: 'nur', ipk: 2.5}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./table.css" scoped>
</style>