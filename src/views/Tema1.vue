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
          h5 Figura 1.
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
                    i.fas.fa-atom.p-1
                    | Peso promedio al nacer en kilogramos.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Peso promedio al destete en kilogramos.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Edad promedio al destete en meses.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Número de terneros.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Número de terneras.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Porcentaje de nacimiento de hembras.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Mortalidad anual de lactantes.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Mortalidad anual de adultos.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Producción de leche diaria en litros.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Número mensual de partos.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Ganancia de peso mensual en kilogramos.
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img8.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Porcinos
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                ul                  
                  li 
                    i.fas.fa-atom.p-1
                    | Edad a la primera monta en meses.
                  li 
                    i.fas.fa-atom.p-1
                    | Peso corporal en kilogramos.
                  li 
                    i.fas.fa-atom.p-1
                    | Conversión de alimento en kilogramos.
                  li 
                    i.fas.fa-atom.p-1
                    | Edad al sacrificio en meses.
                  li 
                    i.fas.fa-atom.p-1
                    | Intervalo destete monta en meses.
                  li 
                    i.fas.fa-atom.p-1
                    | Número de abortos.
                  li 
                    i.fas.fa-atom.p-1
                    | Porcentaje de partos por total de hembras en edad reproductiva.
                  li 
                    i.fas.fa-atom.p-1
                    | Lechones nacidos vivos por camada.
                  li 
                    i.fas.fa-atom.p-1
                    | Lechones nacidos muertos.
                  li 
                    i.fas.fa-atom.p-1
                    | Partos/Cerda/Año.
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Aves
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Número de aves que inician – número de aves que finalizan.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Mortalidad diaria.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Mortalidad acumulada.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Peso corporal en gramos.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Longitud del pico en centímetros.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Longitud del tarso en centímetros.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Consumo de alimento diario en gramos.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Conversión de alimento en gramos.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Masa del huevo en gramos.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Número de huevos día.
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Porcentaje de pérdida de huevos sobre el total de la producción. 
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Especies menores
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                ul
                  li 
                    i.fas.fa-atom.p-1
                    | Edad destete en días.
                  li 
                    i.fas.fa-atom.p-1
                    | Peso crías al nacer en gramos.
                  li 
                    i.fas.fa-atom.p-1
                    | Número de crías al año.
                  li 
                    i.fas.fa-atom.p-1
                    | Partos al año.
                  li 
                    i.fas.fa-atom.p-1
                    | Peso en gramos.
                  li 
                    i.fas.fa-atom.p-1
                    | Camadas / hembra / año.
                  li 
                    i.fas.fa-atom.p-1
                    | Peso crías al destete en gramos.
                  li 
                    i.fas.fa-atom.p-1
                    | Edad al sacrificio en días.
                  li 
                    i.fas.fa-atom.p-1
                    | Madurez sexual machos en días.
                  li 
                    i.fas.fa-atom.p-1
                    | Madurez sexual hembras en días.
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img11.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Peces
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                ul                  
                  li 
                    i.fas.fa-atom.p-1
                    | Peso inicial en gramos.
                  li 
                    i.fas.fa-atom.p-1
                    | Peso final en gramos.
                  li 
                    i.fas.fa-atom.p-1
                    | Edad al sacrificio en días.
                  li 
                    i.fas.fa-atom.p-1
                    | Densidad: número de animales por metro cúbico.
                  li 
                    i.fas.fa-atom.p-1
                    | Ingesta total individuo en gramos.
                  li 
                    i.fas.fa-atom.p-1
                    | Longitud total final individuo en centímetros.
                  li 
                    i.fas.fa-atom.p-1
                    | Porcentaje de mortalidad.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img12.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Algunos valores de referencia de los parámetros técnicos más empleados en especies pecuarias se presentan en la tabla 2.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 2.
          span  #[i  Valores de referencia producción bovina doble propósito en Colombia]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-c.mb-5
          table
            caption Nota. Tomada de Fedegán (2013).
            thead(style="background-color:#1B3F5E;color:#FFFFFF;")
              tr
                th(rowspan=2).text-center(style="border:solid 1px #AFAFAF;") Parámetros productivos
                th(colspan=3).text-center(style="border:solid 1px #AFAFAF;") Promedio
              tr(style="background-color:#1B3F5E;color:#FFFFFF;")
                th(colspan=2).text-center(style="border:solid 1px #AFAFAF;")  Nacional            
                th.text-center(style="border:solid 1px #AFAFAF;") En empresas sobresalientes
            tbody
              tr 
                td Natalidad (%)	
                td(align='right') 50	
                td(align='right') 53	
                td(align='right') 80,4
              tr 
                td Capacidad de carga (UGG/ha)	
                td(align='right') 0,5	
                td(align='right') 0,6	
                td(align='right') 2,2
              tr 
                td Ganancia de peso (gramos/día)	
                td(align='right') 150	
                td(align='right') 350	
                td(align='right') 574,0
              tr 
                td Intervalo entre partos (días)	
                td(align='right') 700	
                td(align='right') 680	
                td(align='right') 456,0
              tr 
                td Edad sacrificio machos (meses)	
                td(align='right') 46	
                td(align='right') 39	
                td(align='right') 38,0
              tr 
                td Peso sacrificio machos (kilogramos)	
                td(align='right') 410	
                td(align='right') 425	
                td(align='right') 450,0
              tr 
                td Peso destete crías (kilogramos)	
                td(align='right') 140	
                td(align='right') 150	
                td(align='right') 180,0
              tr 
                td Edad destete crías (meses)	
                td(align='right') 8	
                td(align='right') 9,5	
                td(align='right') 8,0
              tr 
                td Producción leche (litros/vaca/día)	
                td(align='right') 2,5	
                td(align='right') 3,5	
                td(align='right') 6,8
              tr 
                td Tiempo de lactancia (meses)	
                td(align='right') 10	
                td(align='right') 9	
                td(align='right') 8,0
              tr 
                td Edad al primer parto (meses)	
                td(align='right') 37	
                td(align='right') 36	
                td(align='right') 34,3


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los parámetros productivos en las especies bovinas son muy distintos dependiendo del tipo de explotación implementada. Los valores del ejemplo corresponden a unidades doble propósito bajo sistemas principalmente extensivos, donde variables como la producción de leche y el tiempo de lactancia tienen valores totalmente diferentes a los que se pueden hallar en lecherías especializadas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 3.
          span  #[i  Comparativo parámetros productivos explotaciones porcícolas]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-c.mb-5
          table
            caption Nota. Tomada de Porkcolombia (2017).
            thead(style="background-color:#1B3F5E;color:#FFFFFF;")
              tr
                th.text-center(style="border:solid 1px #AFAFAF;") Parámetros
                th.text-center(style="border:solid 1px #AFAFAF;") Colombia
                th.text-center(style="border:solid 1px #AFAFAF;") España
                th.text-center(style="border:solid 1px #AFAFAF;") Portugal
                th.text-center(style="border:solid 1px #AFAFAF;") Francia
              
            tbody
              tr 
                td Lechones destetados/cerda en producción/año
                td.text-center 27,4	
                td.text-center 28,6
                td.text-center 29,9
                td.text-center 29,4
              tr
                td Porcentaje de abortos
                td.text-center 0,7
                td.text-center 1,9
                td.text-center 1,4
                td.text-center 0 
              tr
                td Nacidos totales/camada
                td.text-center 12,4
                td.text-center 14,6
                td.text-center 15,3
                td.text-center 14,6 
              tr
                td Nacidos vivos/camada
                td.text-center 11,9
                td.text-center 13,4
                td.text-center 14,1
                td.text-center 13,6 
              tr
                td Destetados/camada
                td.text-center 11
                td.text-center 11,6
                td.text-center 12,3
                td.text-center 11,7 
              tr
                td Número de partos/cerda/año
                td.text-center 2,5
                td.text-center 2,5
                td.text-center 2,4
                td.text-center 2,5 
              tr
                td Edad al destete (días)
                td.text-center 22
                td.text-center 24
                td.text-center 27
                td.text-center 24 
              tr
                td Intervalo entre partos (días)
                td.text-center 146
                td.text-center 148
                td.text-center 150
                td.text-center 146 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los datos que se presentan en el cuadro anterior corresponden a promedios nacionales donde se tienen explotaciones porcícolas con altos, medianos y bajos niveles de tecnificación. Sin embargo, dan una idea general al productor sobre los valores que se pueden manejar en una explotación promedio, los cuales pueden establecerse como referente para el manejo de la unidad productiva.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 4.
          span  #[i  Comparativo de parámetros productivos de principales razas ovinas en Colombia]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-c.mb-5
          table
            caption Nota. Tomada de Bulla (2014).
            thead(style="background-color:#1B3F5E;color:#FFFFFF;")
              tr
                th.text-center(style="border:solid 1px #AFAFAF;") 
                th.text-center(style="border:solid 1px #AFAFAF;") Ovino de pelo
                th.text-center(style="border:solid 1px #AFAFAF;") Santa Inés
                th.text-center(style="border:solid 1px #AFAFAF;") Dorset
                th.text-center(style="border:solid 1px #AFAFAF;") Katahdin
              
            tbody
              tr
                  td Peso al nacimiento kilogramos
                  td.text-center 2,95
                  td.text-center 4
                  td.text-center 3,72
                  td.text-center 3,5 
              tr
                  td Peso al destete kilogramos
                  td.text-center 12,9
                  td.text-center 15
                  td.text-center 17
                  td.text-center 17,9 
              tr
                  td Sobrevivencia al destete en porcentaje
                  td.text-center 80
                  td.text-center -
                  td.text-center 81
                  td.text-center 78,2 
              tr
                  td Ganancia diaria de peso en gramos
                  td.text-center 108
                  td.text-center 220
                  td.text-center 203
                  td.text-center 149 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p En cuanto a los parámetros que se presentan en el ejemplo de las explotaciones ovinas, es claro que para cada una de las razas existen valores de referencia diferentes. Esto ocurre igualmente en los demás sistemas productivos, por lo que la definición de los parámetros debe realizarse tomando en cuenta esta variable. Cuanto más específico sea al momento de definir estos parámetros, mayor será la calidad de la información que se genere para el proceso de monitoreo y seguimiento. 
        p En cuanto a la producción avícola, al igual que ocurre con otros sistemas pecuarios, los parámetros productivos se relacionan directamente con la raza y el tipo de explotación implementado. Sin embargo, desde las empresas que se dedican a la producción de pie de cría, a menudo, se adjuntan fichas técnicas en las que se definen algunos valores de referencia que pueden dar al avicultor una idea de lo que puede llegar a obtener en su unidad productiva en condiciones ideales de manejo. En la siguiente tabla se presentan, por ejemplo, los parámetros productivos de la línea de aves de postura “#[i Babcock Brown]”.
      .col-lg-6
          figure
            img(src='@/assets/curso/temas/tema1/img19.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 5.
          span  #[i  Características importantes en gallinas de la línea “Babcock Brown”]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-c.mb-5
          table
            caption Nota. Tomada de Bulla (2014).
            thead(style="background-color:#1B3F5E;color:#FFFFFF;")
              tr
                th.text-center(style="border:solid 1px #AFAFAF;") Parámetro
                th.text-center(style="border:solid 1px #AFAFAF;") Valor de referencia
            tbody
              tr
                td Periodo de puesta semanas
                td.text-center 18 -90 
              tr
                td Edad al 50 % de puesta en días
                td.text-center 144 
              tr
                td Pico de puesta en %
                td.text-center 96 
              tr
                td Peso medio del huevo en gramos
                td.text-center 63,8 
              tr
                td Número de huevos por ave alojada
                td.text-center 404 
              tr
                td Masa de huevo por ave alojada en kilogramos
                td.text-center 25,8 
              tr
                td Consumo medio diario de pienso en gramos
                td.text-center 112 
              tr
                td Índice de conversión kilogramo/kilogramo
                td.text-center 2,19 
              tr
                td Peso corporal en gramos
                td.text-center 1975
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Como ejemplo del tema monitoreo de unidades productivas pecuarias, se invita a ver el siguiente video:

    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video          
            iframe(width="560" height="315" src="https://www.youtube.com/embed/QwbeBx37_uk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


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
