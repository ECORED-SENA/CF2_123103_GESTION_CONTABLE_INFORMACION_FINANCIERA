<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos y registros contables',
      titulo: 'Cuestionario',
      introduccion:
        '<strong>Objetivo:</strong> identificar los conceptos básicos, características y procedimientos relacionados con la información contable, registros contables, clasificación de cuentas, partida doble y ecuación contable.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: '¡VUELVA A INTENTARLO!',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el objetivo principal de la información contable?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar auditorías externas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilitar la toma de decisiones económicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Registrar transacciones bancarias únicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organizar el inventario físico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica fundamental asegura que la información contable sea completa, objetiva y sin errores?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comparabilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Oportunidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Representación fiel.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Verificabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué método contable establece la igualdad entre débitos y créditos en una transacción?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Principio de partida doble.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Principio de objetividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Método directo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Método FIFO.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué elemento contable se registra en el lado izquierdo de una cuenta?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Haber.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Saldo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crédito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Debe.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué indica la ecuación contable?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pasivo = Activo + Patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pasivo = Patrimonio - Activo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Activo = Pasivo + Patrimonio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Activo = Patrimonio - Pasivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué es una cuenta contable?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un documento financiero que determina el capital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un resumen de ingresos y gastos anuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una herramienta para realizar pagos bancarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un registro ordenado para clasificar operaciones comerciales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es un ejemplo de elemento clasificado dentro de los activos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inventario de mercancías.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ingresos por servicios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gastos operativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pasivos bancarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué representa el saldo de una cuenta contable?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La suma total de activos y pasivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El registro inicial de una cuenta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La diferencia entre los movimientos de débito y crédito.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La totalidad de ingresos generados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué describe mejor un asiento compuesto?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una transacción que siempre afecta solo dos cuentas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una transacción que afecta más de dos cuentas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una transacción bancaria simple.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una operación exclusiva para pago de impuestos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la diferencia principal entre cuentas reales y nominales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las cuentas reales siempre generan pérdidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las cuentas nominales registran únicamente activos y pasivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las cuentas reales intervienen en el Estado de Situación Financiera y las nominales en el Estado de Resultados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Las cuentas nominales nunca se cierran al finalizar un periodo contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'En Colombia, las empresas utilizan el Plan Único de Cuentas (PUC) para garantizar uniformidad en los registros contables.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'La naturaleza de las cuentas de ingresos es débito.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Los costos siempre aumentan los beneficios económicos en una empresa.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La partida doble implica que cada operación afecta al menos dos cuentas contables.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La cuenta "Caja" tiene generalmente un saldo de naturaleza débito.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
