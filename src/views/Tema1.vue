<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Monitoreo de unidades productivas pecuarias

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En los proyectos productivos uno de los componentes más importantes es el seguimiento y monitoreo, pues permite una visión general sobre el funcionamiento de cada uno de los subsistemas de la unidad pecuaria, la implementación de los protocolos y el avance en el cumplimiento de las metas de productividad. Así mismo, facilita el registro de información fundamental para la toma de decisiones administrativas oportunamente.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .cajon.color-primario.p-4.mb-4(style="background-color:#DBF9BD")
          p Las labores de monitoreo se llevan a cabo en todas y cada una de las etapas del proceso productivo, desde la adecuación de las instalaciones hasta el beneficio de los animales, mediante el uso de herramientas diseñadas a la medida de cada explotación.
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema1/img1.svg", alt="")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Las labores de monitoreo contemplan, básicamente, los aspectos que se relacionan a continuación.
    Separador
    .row
      .col-xl-12       
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.1 Funcionamiento de equipos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Existe gran variedad de equipos utilizados en la industria pecuaria que facilitan diferentes labores, ahorran tiempo y en términos generales aumentan la productividad de la unidad pecuaria. Estos, por lo general, son alimentados por una fuente de energía diferente a la fuerza humana que puede ser electricidad o combustible a diferencia de las herramientas, las cuales sí requieren de la fuerza humana para su operación.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los equipos que más a menudo se utilizan en las explotaciones pecuarias se pueden agrupar de la siguiente forma:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Figura 9.
          span  #[i  Equipos comunes en explotaciones pecuarias]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        figure
          img(src='@/assets/curso/temas/tema1/fig1.svg', alt='Figura 1 Equipos comunes en explotaciones pecuarias Equipos comunes en explotaciones pecuarias Manejo de animales Ordeño Bretes mecánicos Básculas Cercas eléctricas Transporte de materiales Tractor Motocultor Cargador Alimentación de animales Comederos Bebederos Enfardadora Desbrozadora Picapasto Ensiladora Silos Manejo sanitario Fumigadora Nebulizadora Baño mecánico Labranza y producción de forrajes Arado Rastra Arado de cincel Equipos de riego y bombeo Bienestar animal Calefacción Ventilación Enfriamiento Aireación Oxigenación')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Independientemente del tipo de equipo existente en la unidad productiva, es importante contar con información básica acerca de su manejo, operación, mantenimiento y cuidado, lo cual se encuentra en los manuales de operación. A continuación, se presenta lo relacionado con el funcionamiento de los equipos:

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-secundario.p-4(style="background-color:#EBEEE8")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img2.0.svg' alt='AvatarTop')
        h2.text-center Antes de la operación o uso
        ul.lista-ul
          li
            i.fas.fa-pen
            | Capacitar al personal en la correcta operación de los equipos. 
          li
            i.fas.fa-pen
            | Conocer los manuales de operación y guardarlos en un sitio dispuesto para ello. 
          li
            i.fas.fa-pen
            | Verificar la movilidad de las partes, que no haya obstrucciones ni objetos extraños. 
          li
            i.fas.fa-pen
            | Verificar el estado de las fuentes de alimentación, en el caso de equipos eléctricos, o la disponibilidad de combustible, en equipos a motor.
          li
            i.fas.fa-pen
            | Verificar que no existan obstrucciones ni fugas en las líneas de conducción de fluidos.

      .tarjeta.color-secundario.p-4(style="background-color:#EBEEE8")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img2.1.svg' alt='AvatarTop')
        h2.text-center Antes de la operación o uso
        ul.lista-ul
          li
            i.fas.fa-pen
            | Verificar que no existan obstrucciones ni fugas en las líneas de conducción de fluidos. 
          li
            i.fas.fa-pen
            | Comprobar odómetro, niveles de fluidos, presión de aire en las llantas, y nivel de combustible en el caso de equipos autopropulsados. 
          li
            i.fas.fa-pen
            | En el caso de equipos para la aplicación de pesticidas verificar que no existan residuos y que se encuentran aseados según protocolos establecidos.  
          li
            i.fas.fa-pen
            | Revisar historial de mantenimientos o mantenimientos pendientes.
          li
            i.fas.fa-pen
            | Verificar estado de conexiones y acoples. 
          li
            i.fas.fa-pen
            | Realizar una inspección visual general al equipo o instalación. 
          li
            i.fas.fa-pen
            | En lo posible hacer una prueba de operación del equipo.

      .tarjeta.color-secundario.p-4(style="background-color:#EBEEE8")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img2.2.svg' alt='AvatarTop')
        h2.text-center Durante la operación o uso
        ul.lista-ul
          li
            i.fas.fa-pen
            | Verificar la aparición de fugas o pérdidas en las líneas de conducción. 
          li
            i.fas.fa-pen
            | Vigilar la temperatura de operación. 
          li
            i.fas.fa-pen
            | Identificar ruidos, olores o movimientos inusuales en los equipos. 
          li
            i.fas.fa-pen
            | Verificar el correcto funcionamiento de los equipos. 
          li
            i.fas.fa-pen
            | Identificar y registrar fallas, daños o deficiencias en el desempeño de los equipos. 
          li
            i.fas.fa-pen
            | Vigilar los indicadores de operación (manómetros, indicadores de temperatura, revoluciones por minuto).

      
      .tarjeta.color-secundario.p-4(style="background-color:#EBEEE8")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img2.3.svg' alt='AvatarTop')
        h2.text-center Después de la operación o uso
        ul.lista-ul
          li
            i.fas.fa-pen
            | Revisar y registrar valores del odómetro, en equipos autopropulsados. 
          li
            i.fas.fa-pen
            | Registrar fallas, desperfectos o daños ocurridos en la operación. 
          li
            i.fas.fa-pen
            | Desarrollar el protocolo de limpieza y desinfección de equipos conforme al manual de operación y protocolos de bioseguridad. 
          li
            i.fas.fa-pen
            | Almacenar los equipos de acuerdo con manual de operación y protocolo de la empresa. 
          li
            i.fas.fa-pen
            | Procurar el mantenimiento estipulado en el manual del operario.
      
      .tarjeta.color-secundario.p-4(style="background-color:#EBEEE8")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img2.4.svg' alt='AvatarTop')
        h2.text-center Programa
        p Todos los equipos empleados en la unidad productiva generalmente están diseñados para facilitar su mantenimiento y limpieza periódica, sin embargo, es importante contar con un programa para estas actividades el cual por lo menos debe contener lo siguiente:
        ul.lista-ul
          li
            i.fas.fa-pen
            | Inventario de equipos.
          li
            i.fas.fa-pen
            | Información general de cada equipo
          li
            i.fas.fa-pen
            | Directorio de servicio técnico y venta de repuestos.
          li
            i.fas.fa-pen
            | Requerimientos de mantenimiento.
          li
            i.fas.fa-pen
            | Calendario de mantenimientos.
          li
            i.fas.fa-pen
            | Inventario de partes.
          li
            i.fas.fa-pen
            | Registros de mantenimiento.
    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-color-primario(data-aos="zoom-in-left")
      h2.my-5 1.2 Verificación del estado de instalaciones

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Uno de los principales componentes de las explotaciones pecuarias son las instalaciones, pues la sanidad, el bienestar, los rendimientos y la productividad tienen una relación directa con la calidad del alojamiento y el trato que se les dé a los animales.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Dentro de los tipos de instalaciones más comunes en la explotación de especies pecuarias, se encuentran las siguientes dependiendo de su uso:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Contención")
            .col-md-12.mb-4.mb-md-0
              p.text-small Para mantener a los animales dentro de un área determinada en la cual pueden pastorear y caminar con alto grado de libertad.
          
          .row(numero="2" titulo="Alimentación")
            .col-md-12.mb-4.mb-md-0
              p.text-small Diseñadas para proporcionar a los animales, de manera controlada, alimento, agua o sal, conservando, además, la integridad del producto y sus propiedades.          
          .row(numero="3" titulo="Manejo")
            .col-md-12.mb-4.mb-md-0
              p.text-small Son las instalaciones empleadas para facilitar el manejo de los animales y el desarrollo de las faenas propias de cada especie.
          .row(numero="4" titulo="Alojamiento")
            .col-md-12.mb-4.mb-md-0
              p.text-small Son los recintos que ofrecen refugio y protección a los animales. Algunas especies pecuarias permanecen en su alojamiento durante casi todo el ciclo productivo.
          .row(numero="5" titulo="Mixtas")
            .col-md-12.mb-4.mb-md-0
              p.text-small Son las que cumplen dos o más funciones dentro de la unidad productiva.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img2.png', alt='Verificación del estado de instalaciones')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 1.
          span  #[i  Tipos de infraestructura más empleados en empresas pecuarias]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/tabla1.png', alt='Tabla 1 Tipos de infraestructura más empleados en empresas pecuarias En la tabla se observan los campos: Tipo de infraestructura, Caprinos, Equinos, Ovinos, Bovinos	Porcinos, Peces, Aves, Otras especies menores para: Contención, Alimentación, Manejo, Alojamiento, Mixtas.')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Como se aprecia a continuación, para la construcción de las instalaciones pecuarias es importante tener en cuenta lo siguiente:

    .tarjeta.tarjeta--gris.p-4.mb-5(style="background-color:#EBEEE8")
      PasosB.color-primario
        .row(titulo="")
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6              
              h3 Cubiertas
              p Deben asegurar que no se presenten filtraciones o goteras que puedan generar humedad dentro de la instalación. Deben estar a una altura suficiente para permitir el trabajo cómodo del personal y ofrecer la suficiente ventilación a los animales.
            .col-lg-6   
              figure
                img(src='@/assets/curso/temas/tema1/img3.png', alt='')
        .row(titulo="")
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6              
              h3 Pisos
              p Se construyen generalmente de cemento con ligero declive para permitir la escorrentía de los desechos líquidos o los excesos de humedad. 
              p Cuan6o los animales permanecen mucho tiempo dentro de la instalación, se recomienda cubrir los pisos con un material blando como bagazo de caña, cascarilla de arroz o aserrín.

            .col-lg-4   
              figure
                img(src='@/assets/curso/temas/tema1/img4.png', alt='')
        .row(titulo="")
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6              
              h3 Paredes
              p Deben asegurar que no se presenten filtraciones o goteras que puedan generar humedad dentro de la instalación. Deben estar a una altura suficiente para permitir el trabajo cómodo del personal y ofrecer la suficiente ventilación a los animales.
            .col-lg-6   
              figure
                img(src='@/assets/curso/temas/tema1/img5.png', alt='')
        .row(titulo="")
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6              
              h3 Puertas
              p Deben ser resistentes y con mecanismos que dificulten su apertura por parte de los animales. Igualmente, deben construirse para que abran hacia el exterior y con las dimensiones adecuadas para el fácil acceso de los animales, los insumos y los manejadores.
            .col-lg-6   
              figure
                img(src='@/assets/curso/temas/tema1/img6.png', alt='')
        .row(titulo="")
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6              
              h3 Cortinas
              p Para el manejo de especies sensibles a las altas o bajas temperaturas, es importante diseñar cortinas que faciliten la circulación del aire o la concentración del calor, dependiendo del caso.
            .col-lg-6   
              figure
                img(src='@/assets/curso/temas/tema1/img7.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        P Antes del ingreso de los animales se deben revisar las condiciones generales de las instalaciones y los equipos necesarios para su manejo, de forma que se les garantice su bienestar y la atención de sus necesidades básicas. Por lo tanto, en la verificación del estado de las instalaciones se debe tener en cuenta:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img14.svg' alt='Limpieza y desinfección')
          .tarjeta.tarjeta--azul.color-secundario
            .p-4
              h2 Limpieza y desinfección
              p Se deben comprobar las condiciones de aseo y limpieza antes del ingreso de los animales. Verificar los registros de las labores de desinfección desarrolladas.

      .col-lg-6(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img15.svg' alt='Cubiertas y drenajes')
          .tarjeta.tarjeta--azul.color-secundario
            .p-4
              h2 Cubiertas y drenajes
              p Es necesario revisar el estado de las cubiertas, para garantizar que no se presenten goteras que, en caso de lluvia, puedan mojar a los animales o las instalaciones. Verificar que no haya obstrucciones en los drenajes y que estos operen correctamente.

      .col-lg-6(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img16.svg' alt='Seguridad')
          .tarjeta.tarjeta--azul.color-secundario
            .p-4
              h2 Seguridad 
              p Identificar y registrar posibles amenazas a la salud e integridad de personas y animales tales como objetos cortopunzantes, áreas resbaladizas, mal estado de instalaciones eléctricas, fallas en almacenamiento de productos químicos o medicamentos, posible caída de objetos.

      .col-lg-6(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img17.svg' alt='Limpieza y desinfección')
          .tarjeta.tarjeta--azul.color-secundario
            .p-4
              h2 Pisos
              p Deben tener una pendiente aproximada de 2 % para evitar encharcamientos. Según la especie, verificar que tenga una cama de material vegetal, cascarilla o aserrín. El piso puede ser elevado del suelo mediante la utilización de estibas o rejillas las cuales evitan el contacto de los animales con las excretas.

      .col-lg-6(data-aos="fade-down-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img18.svg' alt='Limpieza y desinfección')
          .tarjeta.tarjeta--azul.color-secundario
            .p-4
              h2 Capacidad instalada
              p Verificar que el área de las instalaciones, la cantidad de comederos y bebederos, la disponibilidad de equipos y personal, el acceso a servicios públicos y la capacidad del alojamiento son suficientes para garantizar el bienestar de los animales que se ingresarán.

    Separador
    .row
      .col-xl-12       
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.3 Parámetros técnicos de la unidad productiva pecuaria
	 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los parámetros técnicos son variables que permiten analizar el comportamiento de las explotaciones pecuarias en cada una de las etapas del ciclo productivo, sin importar la especie animal. Para cada sistema productivo es posible identificar valores de referencia que faciliten la toma de decisiones y den una idea general de sus rendimientos, productividad y eficiencia, pero estos valores dependen de diversos factores como la especie pecuaria, el tipo de explotación, la raza, el estado de desarrollo y los objetivos de la unidad productiva. 
        p En términos generales, los principales parámetros técnicos que se deben tener en cuenta para las explotaciones pecuarias, en función de la especie, son los siguientes:

    .tarjeta.tarjeta--amarilla.p-4(style="background-color:#DBF9BD")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Bovinos, bufalinos, ovinos y caprinos
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                ul
                  li 
                    i.fas.fa-atom.p-2
                    | Disminución en la ingesta de alimento.
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img8.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                ul
                  li 
                    i.fas.fa-atom.p-2
                    | 
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                ul
                  li 
                    i.fas.fa-atom.p-2
                    | 
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                ul
                  li 
                    i.fas.fa-atom.p-2
                    | 
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img11.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                ul
                  li 
                    i.fas.fa-atom.p-2
                    | 
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img12.png', alt='')
        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
