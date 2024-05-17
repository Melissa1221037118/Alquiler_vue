<template>
    <div class="container">
        <h1 class="text-start">Listado de Vehículos
            <button @click="newVehiculo" class="btn btn-success mx-2">
                <font-awesome-icon icon="plus" />
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Año</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Precio por Día</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(vehiculo, index) in vehiculos" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ vehiculo.marca }}</td>
                    <td>{{ vehiculo.modelo }}</td>
                    <td>{{ vehiculo.año }}</td>
                    <td>{{ vehiculo.estado }}</td>
                    <td>{{ vehiculo.precio_por_día }}</td>
                    <td>
                        <button @click="deleteVehiculo(vehiculo.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editVehiculo(vehiculo.id)" class="btn btn-warning mx-2">
                            <font-awesome-icon icon="pencil" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'Vehiculos',
    data() {
        return {
            vehiculos: []
        };
    },
    methods: {
        deleteVehiculo(id) {
            Swal.fire({
                title: `¿Quieres eliminar el vehículo con ID ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Eliminar'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                        .delete(`https://127.0.0.1/api/vehiculos/${id}`)
                        .then(response => {
                            if (response.data.success) {
                                Swal.fire('Eliminado!', '', 'success');
                                this.vehiculos = response.data.vehiculos;
                            }
                        });
                }
            });
        },
        editVehiculo(id) {
            this.$router.push({ name: 'EditarVehiculo', params: { id: id } });
        },
        newVehiculo() {
            this.$router.push({ name: 'NewVehiculo' });
        }
    },
    mounted() {
        axios
            .get("https://127.0.0.1/api/vehiculos")
            .then(response => {
                this.vehiculos = response.data.vehiculos;
            });
    }
};
</script>
