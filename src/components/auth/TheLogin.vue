<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
                <form
                style="margin-top:70px;height:auto;padding-top:100px!important;"
                @submit.prevent="loginUser">
                    <h1 class="h3 mb-3 font-weight-normal" style="text-alling: 
                    center">Inicio de sesión</h1>
                    <input
                        type="text"
                        id="email"
                        class="form-control mb-5"
                        placeholder="Email"
                        v-model="login.email"/>

                    <!-- Password -->
                    <input
                        type="password"
                        id="password"
                        class="form-control mb-5"
                        placeholder="Contraseña"
                        v-model="login.password"/>

                    <!-- login button -->
                    <!-- <center>
                        <button class="btn btn-primary btn-block w-75 my-4" 
                        type="submit">
                        Inicio de sesión</button>
                    </center> -->
                    <div class="btn-group">
                        <button class="btn btn-primary" type="submit">Iniciar Sesión</button>
                        <button class="btn btn-primary" @click="redirectToSignup()">Registrarse</button>
                    </div>
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
            login: {
                email: "",
                password: ""
            }
        }
    },
    methods: {

         redirectToSignup(){
             this.$router.push({ path: '/signup' })
             },

        async loginUser(){
            try{
                let response = await this.$http.post("/api/auth/signin", this.login)
                console.log(response.date)
                let token = response.data.accessToken
                localStorage.setItem("jwt", token)
                if (token) {
                    swal("Exitoso", "login exitoso", "success")
                    this.$router.push("/home")
                }
            } catch (err){
                swal("Error", "datos incorrectos", "error")
                console.log(err.response)
            }
        },

        async loginUser1(){
            try{
                let response = await this.$http2.post("/api/usuario/login", this.login)
                console.log(response.date);
                let token = response.data.tokenReturn;
                //let user = response.data.user;

                //localStorage.setItem("jwt", token)
                if (token) {
                    swal("Exitoso", "login exitoso", "success")
                    this.$router.push("/home")
                }
            } catch (err){
                swal("Error", "datos incorrectos", "error")
                console.log(err.response)
            }
        }
    }   
}
</script>
