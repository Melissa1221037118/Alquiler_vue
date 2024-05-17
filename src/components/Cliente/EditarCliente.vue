<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Editar Cliente</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Cliente
            </div>
            <div class="card-body">
                <form @submit.prevent="updateCliente">
                    <div class="row mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="nombre" placeholder="Nombre del cliente" v-model="cliente.nombre">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="apellido" class="form-label">Apellido</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="apellido" placeholder="Apellido del cliente" v-model="cliente.apellido">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="licencia_conducir" class="form-label">Licencia de Conducir</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="licencia_conducir" placeholder="Licencia de Conducir" v-model="cliente.licencia_conducir">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="telefono" class="form-label">Teléfono</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="telefono" placeholder="Teléfono" v-model="cliente.telefono">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="email" class="form-label">Email</label>
                        <div class="input-group">
                            <input type="email" class="form-control" id="email" placeholder="Email" v-model="cliente.email">
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Actualizar</button>
                    <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'EditarCliente',
    data() {
        return {
            cliente: {
                nombre: '',
                apellido: '',
                licencia_conducir: '',
                telefono: '',
                email: ''
            }
        };
    },
    methods: {
        cancelar() {
            this.$router.push({ name: 'clientes' });
        },
        async updateCliente() {
            const res = await axios.put(`http://127.0.0.1:8000/api/clientes/${this.cliente.id}`, this.cliente);
            if (res.status === 200) {
                this.$router.push({ name: 'clientes' });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Cliente ha sido actualizado',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }
    },
    mounted() {
        this.cliente.id = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/clientes/${this.cliente.id}`).then(response => {
            this.cliente = response.data.cliente;
        });
    }
};
</script>
