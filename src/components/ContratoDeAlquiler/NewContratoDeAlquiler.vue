<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Nuevo Contrato de Alquiler</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Contrato de Alquiler
            </div>
            <div class="card-body">
                <form @submit.prevent="saveContrato">
                    <div class="row mb-3">
                        <label for="vehiculo_id" class="form-label">Vehículo ID</label>
                        <div class="input-group">
                            <input type="number" class="form-control" id="vehiculo_id" placeholder="Vehículo ID" v-model="contrato.vehiculo_id">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="cliente_id" class="form-label">Cliente ID</label>
                        <div class="input-group">
                            <input type="number" class="form-control" id="cliente_id" placeholder="Cliente ID" v-model="contrato.cliente_id">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="fecha_inicio" class="form-label">Fecha de Inicio</label>
                        <div class="input-group">
                            <input type="date" class="form-control" id="fecha_inicio" v-model="contrato.fecha_inicio">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="fecha_fin" class="form-label">Fecha de Fin</label>
                        <div class="input-group">
                            <input type="date" class="form-control" id="fecha_fin" v-model="contrato.fecha_fin">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="total" class="form-label">Total</label>
                        <div class="input-group">
                            <input type="number" step="0.01" class="form-control" id="total" placeholder="Total" v-model="contrato.total">
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Guardar</button>
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
    name: 'NewContratoDeAlquiler',
    data() {
        return {
            contrato: {
                vehiculo_id: '',
                cliente_id: '',
                fecha_inicio: '',
                fecha_fin: '',
                total: ''
            }
        };
    },
    methods: {
        cancelar() {
            this.$router.push({ name: 'contratosDeAlquiler' });
        },
        async saveContrato() {
            const res = await axios.post('http://127.0.0.1:8000/api/contratos_de_alquiler', this.contrato);
            if (res.status === 200) {
                this.$router.push({ name: 'contratosDeAlquiler' });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Contrato de Alquiler ha sido guardado',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }
    }
};
</script>
