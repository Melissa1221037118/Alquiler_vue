
import { createRouter, createWebHistory } from 'vue-router';

import EditarCliente from '../components/Cliente/EditarCliente.vue';
import NewCliente from '../components/Cliente/NewCliente.vue';
import Clientes from '../views/Clientes.vue';

import EditarVehiculo from '../components/Vehiculo/EditarVehiculo.vue';
import NewVehiculo from '../components/Vehiculo/NewVehiculo.vue';
import Vehiculos from '../views/Vehiculos.vue';

import EditarContratoDeAlquiler from '../components/ContratoDeAlquiler/EditarContratoDeAlquiler.vue';
import NewContratoDeAlquiler from '../components/ContratoDeAlquiler/NewContratoDeAlquiler.vue';
import ContratosDeAlquiler from '../views/ContratosDeAlquiler.vue';

import EditarPago from '../components/Pago/EditarPago.vue';
import NewPago from '../components/Pago/NewPago.vue';
import Pagos from '../views/Pagos.vue';

import EditarReserva from '../components/Reserva/EditarReserva.vue';
import NewReserva from '../components/Reserva/NewReserva.vue';
import Reservas from '../views/Reservas.vue';
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: Clientes
  },
  {
    path: '/editar-cliente/:id',
    name: 'EditarCliente',
    component: EditarCliente
  },
  {
    path: '/add-cliente/',
    name: 'NewCliente',
    component: NewCliente
  },
  {
    path: '/vehiculos',
    name: 'vehiculos',
    component: Vehiculos
  },
  {
    path: '/editar-vehiculo/:id',
    name: 'EditarVehiculo',
    component: EditarVehiculo
  },
  {
    path: '/add-vehiculo/',
    name: 'NewVehiculo',
    component: NewVehiculo
  },
  {
    path: '/contratos_de_alquiler',
    name: 'contratosDeAlquiler',
    component: ContratosDeAlquiler
  },
  {
    path: '/editar-contrato-de-alquiler/:id',
    name: 'EditarContratoDeAlquiler',
    component: EditarContratoDeAlquiler
  },
  {
    path: '/add-contrato-de-alquiler/',
    name: 'NewContratoDeAlquiler',
    component: NewContratoDeAlquiler
  },
  {
    path: '/pagos',
    name: 'pagos',
    component: Pagos
  },
  {
    path: '/editar-pago/:id',
    name: 'EditarPago',
    component: EditarPago
  },
  {
    path: '/add-pago/',
    name: 'NewPago',
    component: NewPago
  },
  {
    path: '/reservas',
    name: 'reservas',
    component: Reservas
  },
  {
    path: '/editar-reserva/:id',
    name: 'EditarReserva',
    component: EditarReserva
  },
  {
    path: '/add-reserva/',
    name: 'NewReserva',
    component: NewReserva
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
