<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los grandes retos que enfrentan los sistemas productivos agropecuarios consisten, sobre todo, en el abastecimiento de alimentos y materias primas, en los volúmenes necesarios y en condiciones de inocuidad, aunque los actuales modelos de consumo también son altamente exigentes en cuanto a trazabilidad de los procesos, sostenibilidad ambiental, mercados justos y producción limpia, lo cual añade otro grado de dificultad a una actividad que de por sí es bastante compleja, como se verá en el siguiente video.
  
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video          
            iframe(width="560" height="315" src="https://www.youtube.com/embed/CBxUfRo0-10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
