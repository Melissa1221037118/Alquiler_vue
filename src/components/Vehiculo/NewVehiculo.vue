<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Nuevo Vehículo</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Vehículo
            </div>
            <div class="card-body">
                <form @submit.prevent="saveVehiculo">
                    <div class="row mb-3">
                        <label for="marca" class="form-label">Marca</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="marca" placeholder="Marca del vehículo" v-model="vehiculo.marca">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="modelo" class="form-label">Modelo</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="modelo" placeholder="Modelo del vehículo" v-model="vehiculo.modelo">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="año" class="form-label">Año</label>
                        <div class="input-group">
                            <input type="number" class="form-control" id="año" placeholder="Año del vehículo" v-model="vehiculo.año">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="estado" class="form-label">Estado</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="estado" placeholder="Estado del vehículo" v-model="vehiculo.estado">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="precio_por_día" class="form-label">Precio por Día</label>
                        <div class="input-group">
                            <input type="number" step="0.01" class="form-control" id="precio_por_día" placeholder="Precio por día" v-model="vehiculo.precio_por_día">
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
    name: 'NewVehiculo',
    data() {
        return {
            vehiculo: {
                marca: '',
                modelo: '',
                año: '',
                estado: '',
                precio_por_día: ''
            }
        };
    },
    methods: {
        cancelar() {
            this.$router.push({ name: 'vehiculos' });
        },
        async saveVehiculo() {
            const res = await axios.post('http://127.0.0.1:8000/api/vehiculos', this.vehiculo);
            if (res.status === 200) {
                this.$router.push({ name: 'vehiculos' });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Vehículo ha sido guardado',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }
    }
};
</script>
