<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="alert alert-warning" role="alert" v-show="usuarios.length === 0">
      Não existem registros de usuários!
    </div>

    <table class="table table-striped" v-show="usuarios.length > 0">
      <thead>
        <tr>
          <td>#</td>
          <td>Nome</td>
          <td>Ação</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(usuario,index) in usuarios" :key="usuario.id">
          <td>{{usuario.id}}</td>
          <td>{{usuario.nome}}</td>
          <td> <button class="btn btn-danger" v-on:click="deletar(index)">Remover</button> </td>
        </tr>
      </tbody>
    </table>

    <div class="form-group">
      <p>
        <input type="text" name="idUsuario" class="form-control" placeholder="Digite um código"
          v-model="id"
        />
      </p>
      <p>
        <input type="text" name="nomeUsuario" class="form-control" placeholder="Digite um nome"
          v-model="nome"
        />
      </p>
      <button class="btn btn-primary" v-on:click="adicionar()">Adicionar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      titulo:"Learning Vue.JS",
      usuarios: [
        {id:1, nome:'joao'},
        {id:2, nome:'Luiz'},
        {id:3, nome:'Pedro'},
        {id:4, nome:'Maria'},
      ],
      id:'',
      nome:''
    }
  },
  methods:{
    deletar(index){
      this.usuarios.splice(index, 1);
    },
    adicionar(){
      if(this.id !=='' && this.nome !==''){
        this.usuarios.push({
          id: this.id,
          nome: this.nome
        });
        this.nome='';
        this.id='';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
