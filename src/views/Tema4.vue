<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Acciones de mejora

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las acciones de mejora también forman parte del ciclo de mejora continua PHVA y corresponden al “actuar” que es la fase donde se toman en consideración las conclusiones o recomendaciones de la fase “verificar” y se ponen en práctica en el sistema productivo. Las acciones de mejora pretenden, como su nombre lo indica, mejorar el desarrollo de los procesos que tiene lugar en la unidad productiva para de esta manera hacer más eficientes, seguras y sostenibles las explotaciones pecuarias. Otra de las definiciones que se manejan al respecto es toda acción tomada para mejorar la eficacia, eficiencia o efectividad de los procesos.

    Separador
    .row
      .col-xl-12       
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 4.1 Planes de mejora
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los planes de mejora son el conjunto de acciones que se toman al interior de una empresa o unidad productiva para corregir las situaciones no deseadas que afecten su productividad y su eficiencia, las cuales se identifican en medio de procesos de autoevaluación o auditoría externa. Por su parte, los planes de mejora deben obedecer a actividades sistemáticas y debidamente planeadas para poder llevarlas al plano práctico y medir sus efectos en campo.
        p Para que un plan de mejora sea eficaz, es necesario que se den las siguientes condiciones:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Figura 12.
          span  #[i Ejemplo de una conclusión elaborada con base en las consideraciones analizadas]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema4/img2.svg', alt='Figura 12 Consideraciones para el establecimiento de un plan de mejora Convencerse de que la mejora e posible. Evitar las actitudes derrotistas. Evitar las justificaciones y excusas. Ejercer el liderazgo. Involucrar a todo el personal de la unidad productiva en el proceso de mejora. La comprensión del sentido que tiene plantear mejoras.')
          figcaption Nota. Tomada de www.eduacion.navarra.es (s. f.).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p De acuerdo con Proaño, Gisbert y Pérez (2017), el desarrollo de un plan de mejora tiene cuatro pasos bien definidos, a saber:

    SlyderE(indicadores="izquierda").mb-4(data-aos="fade-left")
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Análisis de las causas que provocan el problema
          p En esta etapa se identifican las oportunidades de mejora a partir de los insumos que se tengan disponibles, como informes de auditoría, reportes de seguimiento, revisión de parámetros productivos y niveles de productividad, entre otros elementos.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img4.png', alt='Análisis de las causas que provocan el problema')
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Propuesta y planificación
          p El plan debe ser viable, flexible y permitir la integración de nuevas acciones en el corto, mediano y largo plazo. En este sentido es posible recoger las recomendaciones que se hayan dejado en los procesos de auditoría y seguimiento, reportes de productividad y monitoreo de los parámetros productivos.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img5.png', alt='Propuesta y planificación')
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Implementación y seguimiento
          p Para la implementación del plan de mejora es clave involucrar a todo el personal vinculado a la unidad productiva, pues cada uno de ellos tiene unas responsabilidades definidas para que esto sea posible. 
          p Es importante que desde la administración de la unidad productiva se informe al personal sobre los componentes del plan, velar por la ejecución de las actividades propuestas y verificar que se cumpla con los tiempos estimados.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img6.png', alt='Implementación y seguimiento')
      
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Evaluación
          p En la evaluación del plan de mejora se toman en cuenta las actividades planeadas y se revisa su cumplimiento, en términos de oportunidad y calidad en la ejecución. Para esto es importante revisar los objetivos propuestos en al plan de mejora y medir los indicadores que permitirán determinar los impactos de las acciones de mejora. 

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img7.png', alt='Evaluación')

    Separador
    .row
      .col-xl-12       
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 4.2 Implementación de planes de mejora

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La construcción de un plan de mejora se realiza tomando como base elementos como las evaluaciones de los parámetros productivos, los informes de seguimiento, los informes de auditoría externa, los rendimientos y las condiciones de sostenibilidad de la unidad productiva, entre otros aspectos. A partir de esa información inicial, se establece una planeación precisa de las acciones que se implementarán y cómo estas impactarán en cada una de las áreas de trabajo que serán objeto de la mejora. 
        p Como producto de este proceso, se construye una matriz en la que se definen las líneas de mejora o los objetivos del plan, las acciones puntuales que se desarrollarán y los actores responsables de cada una de esas actividades, con lo cual se consigue establecer grados de responsabilidad que comprometen al personal y lo direccionan hacia el cumplimiento de las metas propuestas. En el siguiente ejemplo se observa un esquema de plan de mejora para una empresa pecuaria:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Figura 13.
          span  #[i Esquema de plan de mejora de la unidad pecuaria]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema4/img8.svg', alt='Figura 12 Consideraciones para el establecimiento de un plan de mejora Convencerse de que la mejora e posible. Evitar las actitudes derrotistas. Evitar las justificaciones y excusas. Ejercer el liderazgo. Involucrar a todo el personal de la unidad productiva en el proceso de mejora. La comprensión del sentido que tiene plantear mejoras.')
          figcaption Nota. Tomada de www.eduacion.navarra.es (s. f.).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En la construcción del plan de mejora se pueden incluir tantos objetivos como sea posible, siempre y cuando sea viable su cumplimiento en el tiempo estimado. Las acciones deben ser lo más concretas y específicas como sea posible, pues de ello depende, en buena medida, que el plan sea implementado. Igualmente, en la empresa pecuaria es fundamental definir los responsables de ejecutar cada una de las acciones propuestas, incluso, si es posible, se pueden incluir los nombres de los responsables. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p El siguiente paso, después de la construcción del plan de mejora, es la definición del cronograma de actividades, en el cual se dará un tiempo prudente para la realización de las acciones de mejora. Este tiempo puede ser coordinado con el equipo de trabajo, de manera que el desarrollo de estas acciones sea viable financiera, técnica y ambientalmente.
        p La puesta en marcha del plan de mejora se debe desarrollar conforme a lo indicado en la planeación, por lo que se debe calcular con anticipación la demanda de recursos, la disponibilidad de mano de obra, la facilidad en la consecución de las materias primas, equipos y herramientas. 
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img9.png', alt='Evaluación')
 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Al final del proceso de implementación del plan de mejora viene la etapa de evaluación, en medio de la cual se miden los impactos de las acciones y los efectos que tuvieron para revertir las situaciones que se pretendía corregir. En este proceso de evaluación surgirán nuevas conclusiones y recomendaciones las cuales nuevamente alimentarán los futuros planes de mejora con lo cual se da comienzo de nuevo al ciclo PHVA, conforme lo contemplan los procesos de mejora continua. 

        p Para complementar el tema registro de novedades y reportes, se invita a ver el siguiente vídeo:

    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video          
            iframe(width="560" height="315" src="https://www.youtube.com/embed/O4Hv8UuhsBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema3',
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
