<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-up")
      .bloque-texto-g__img
        figure
          img(src="@/assets/curso/intro/img1.svg", alt="" style="max-width: 240px")
      .bloque-texto-g__texto.p-4
        p.mb-0 En el marco de la globalización, donde se plantean nuevos objetivos empresariales, surge la necesidad de mantener un sistema contable comprensible, oportuno y confiable, que contribuya con la adecuada toma de decisiones por parte de la administración. Esto explica por qué la contabilidad toma mayor importancia en las empresas en la actualidad y se hace indispensable conocer su historia, cualidades, objetivos y criterios para el reconocimiento de los hechos económicos, conforme con las Normas Internacionales de Información Financiera (NIIF). 
    
    .row.mb-4.align-items-center
      .col-lg
        p.ajuste-espacios-movil Dependiendo del tipo de empresa, se aplican las normas pertinentes en desarrollo de su objeto social y el grupo de presentación de información financiera. Por ello, es indispensable el diseño e implementación de políticas contables que garanticen la uniformidad de la información contable, de acuerdo con los estándares internacionales planteados en las NIIF.
        p.mb-0.ajuste-text-intro(data-aos="fade-right") Este componente formativo lo orientará en el desarrollo de los procesos contables. Se demanda del aprendiz análisis y comprensión del contenido para lograr un aprendizaje significativo.
      .col-lg-auto
        figure(data-aos="fade-left").d-none.d-lg-block
          img(src="@/assets/curso/intro/img2.svg", alt="" style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
