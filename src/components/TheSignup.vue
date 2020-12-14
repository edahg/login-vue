<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
                <form
                style="margin-top:70px;height:auto;padding-top:100px!important;"
                @submit.prevent="registerUser">
                    <h1 class="h3 mb-3 font-weight-normal" style="text-alling: 
                    center">Registro de Usuario</h1>
                    <input
                        type="text"
                        id="nombre"
                        class="form-control mb-5"
                        placeholder="Nombre"
                        v-model="register.name"/>

                    <input
                        type="text"
                        id="email"
                        class="form-control mb-5"
                        placeholder="Email"
                        v-model="register.email"/>

                    <!-- Password -->
                    <input
                        type="password"
                        id="password"
                        class="form-control mb-5"
                        placeholder="Contraseña"
                        v-model="register.password"/>

                    <!-- register button -->
                    <center>
                        <button class="btn btn-primary btn-block w-75 my-4" 
                        type="submit">
                        Registrarse</button>
                    </center>
                </form>
            </div>
        </div>   
    </div>
</template>

<script>
import swal from "sweetalert"
export default {
    data(){
        return{
            register: { 
                name: "",               
                email: "",
                password: ""
            }
        }
    },
    methods: {
        async registerUser(){
            try{
                let response = await this.$http.post("/api/register", this.register)
                console.log(response)

                if (response.status == 200) {
                    swal("Exitoso", "Usuario registrado correctamente", "success")
                    this.$router.push("/")
                }
            } catch (err){
                swal("Error", "datos incorrectos", "error")
                console.log(err.response)
            }
        }
        
    }
    
}
</script>