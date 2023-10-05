<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p A continuación, se describen los temas principales del componente formativo, Monitoreo, seguimiento y acciones de mejora en las unidades productivas pecuarias, el cual, se aplica específicamente a equipos e instalaciones, con parámetros técnicos; igualmente, se realiza este proceso a las condiciones de alojamiento de animales, controlando factores como la temperatura, humedad, ventilación, densidad, realizando limpieza y desinfección, también se debe realizar registro de novedades, utilizando formatos para captura de información, diligenciando los registros respectivos, todo esto con un buen manejo de datos y almacenamiento para posteriores reportes, al final del proceso se obtiene el plan de mejora con lo cual se da comienzo de nuevo al ciclo PHVA, conforme lo contemplan los procesos de mejora continua:
    

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
