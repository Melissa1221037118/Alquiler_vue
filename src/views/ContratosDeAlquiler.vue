<template>
    <div class="container">
        <h1 class="text-start">Listado de Contratos de Alquiler
            <button @click="newContrato" class="btn btn-success mx-2">
                <font-awesome-icon icon="plus" />
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Vehículo</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Fecha de Inicio</th>
                    <th scope="col">Fecha de Fin</th>
                    <th scope="col">Total</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(contrato, index) in contratos" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ contrato.marca }} {{ contrato.modelo }}</td>
                    <td>{{ contrato.nombre }} {{ contrato.apellido }}</td>
                    <td>{{ contrato.fecha_inicio }}</td>
                    <td>{{ contrato.fecha_fin }}</td>
                    <td>{{ contrato.total }}</td>
                    <td>
                        <button @click="deleteContrato(contrato.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editContrato(contrato.id)" class="btn btn-warning mx-2">
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
    name: 'ContratosDeAlquiler',
    data() {
        return {
            contratos: []
        };
    },
    methods: {
        deleteContrato(id) {
            Swal.fire({
                title: `¿Quieres eliminar el contrato con ID ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Eliminar'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                        .delete(`https://127.0.0.1/api/contratos_de_alquiler/${id}`)
                        .then(response => {
                            if (response.data.success) {
                                Swal.fire('Eliminado!', '', 'success');
                                this.contratos = response.data.contratos;
                            }
                        });
                }
            });
        },
        editContrato(id) {
            this.$router.push({ name: 'EditarContratoDeAlquiler', params: { id: id } });
        },
        newContrato() {
            this.$router.push({ name: 'NewContratoDeAlquiler' });
        }
    },
    mounted() {
        axios
            .get("https://127.0.0.1/api/contratos_de_alquiler")
            .then(response => {
                this.contratos = response.data.contratos;
            });
    }
};
</script>
