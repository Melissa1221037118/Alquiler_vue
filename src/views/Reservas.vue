<template>
    <div class="container">
        <h1 class="text-start">Listado de Reservas
            <button @click="newReserva" class="btn btn-success mx-2">
                <font-awesome-icon icon="plus" />
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Cliente ID</th>
                    <th scope="col">Vehículo ID</th>
                    <th scope="col">Fecha de Reserva</th>
                    <th scope="col">Fecha de Inicio</th>
                    <th scope="col">Fecha de Fin</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(reserva, index) in reservas" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ reserva.cliente_id }}</td>
                    <td>{{ reserva.vehiculo_id }}</td>
                    <td>{{ reserva.fecha_reserva }}</td>
                    <td>{{ reserva.fecha_inicio }}</td>
                    <td>{{ reserva.fecha_fin }}</td>
                    <td>{{ reserva.estado }}</td>
                    <td>
                        <button @click="deleteReserva(reserva.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editReserva(reserva.id)" class="btn btn-warning mx-2">
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
    name: 'Reservas',
    data() {
        return {
            reservas: []
        };
    },
    methods: {
        deleteReserva(id) {
            Swal.fire({
                title: `¿Quieres eliminar la reserva con ID ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Eliminar'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                        .delete(`https://127.0.0.1/api/reservas/${id}`)
                        .then(response => {
                            if (response.data.success) {
                                Swal.fire('Eliminado!', '', 'success');
                                this.reservas = response.data.reservas;
                            }
                        });
                }
            });
        },
        editReserva(id) {
            this.$router.push({ name: 'EditarReserva', params: { id: id } });
        },
        newReserva() {
            this.$router.push({ name: 'NewReserva' });
        }
    },
    mounted() {
        axios
            .get("https://127.0.0.1/api/reservas")
            .then(response => {
                this.reservas = response.data.reservas;
            });
    }
};
</script>
