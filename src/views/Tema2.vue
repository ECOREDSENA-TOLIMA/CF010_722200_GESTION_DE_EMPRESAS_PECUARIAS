<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Parámetros para verificación de condiciones del alojamiento

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los sistemas productivos pecuarios actualmente tienen el bienestar animal como un principio fundamental, por lo que la calidad de vida de los animales, las mejoras en el alojamiento, la nutrición, el tratamiento y prevención de enfermedades son aspectos que siempre se deben tener en cuenta en este tipo de montajes. Es así como los cinco principios del bienestar animal, de acuerdo con lo expresado por el Instituto Colombiano Agropecuario, son los siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Figura 2.
          span  #[i  Principios del bienestar animal]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop 
        figure
          img(src='@/assets/curso/temas/tema2/img2.png', alt='Figura 2 Principios del bienestar animal 1. Libre de hambre, sed y desnutrición 2. Libre de temor y angustia. 3. Libre de molestias físicas y térmicas. 4. Libre de dolor, lesión o enfermedad. 5. Libre de impedimentos para manifestar su comportamiento natural.')
          figcaption Nota. Tomado de ICA (2020).
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema2/img2.1.png', alt='Figura 2 Principios del bienestar animal 1. Libre de hambre, sed y desnutrición 2. Libre de temor y angustia. 3. Libre de molestias físicas y térmicas. 4. Libre de dolor, lesión o enfermedad. 5. Libre de impedimentos para manifestar su comportamiento natural.')
          figcaption Nota. Tomado de ICA (2020).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Para garantizar el bienestar animal y contribuir a la obtención de los rendimientos esperados en la unidad productiva, es fundamental cumplir con los requisitos establecidos por la normativa en relación con la cantidad de animales por unidad de área, el cuidado de las instalaciones y los principios de sanidad animal e, igualmente, controlar las condiciones del alojamiento para lo cual se deben considerar las principales variables: temperatura, humedad, ventilación, densidad, limpieza y desinfección, las cuales son diferentes para cada especie animal.
        p Los equipos empleados para la medición de los parámetros de las condiciones del entorno son, a saber:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Figura 3.
          span  #[i  Equipos empleados en la medición de parámetros ambientales]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema2/img3.svg', alt='Figura 3 Equipos empleados en la medición de parámetros ambientales Termómetro: mide la temperatura en grados centígrados, kelvin o Fahrenheit Higrómetro: mide la humedad relativa en porcentaje. Valores entre 0 y 100 % Anemómetro: mide la velocidad del viento en metros por segundo o kilómetros por hora')

    Separador
    .row
      .col-xl-12       
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.1 Temperatura
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Esta es una de las variables que más incide en el comportamiento productivo de los animales, pues, en el caso de las aves, por ejemplo, un buen control de la temperatura mejora la conversión de alimento y la tasa de crecimiento. Igualmente, las altas temperaturas disminuyen el apetito de los animales, por lo que, en consecuencia, también disminuyen los rendimientos.
        p Como se ve a continuación, en términos generales, las recomendaciones para el manejo de la temperatura en explotaciones pecuarias son las siguientes:

    TabsA.color-acento-botones.mb-5(style="background-color=#DBF9BD")
      .tarjeta.colorprimario--borde.p-4(titulo="Equinos")
        h4
        ul.lista-ul
          li
            i.fas.fa-atom
            |	Adecuar pesebreras para proteger a los animales de los elementos. 
          li
            i.fas.fa-atom
            |	Adecuar áreas para el baño de los animales después de las labores. 
          li
            i.fas.fa-atom
            |	Sembrar árboles o establecer áreas de sombrío artificial en las praderas. 
          li
            i.fas.fa-atom
            |	Utilizar camas al interior de los establos de forma que aíslen a los animales de la temperatura del suelo.
          li
            i.fas.fa-atom
            |	Zona de neutralidad térmica entre 10 y 15 ºC.
      .tarjeta.colorprimario--borde.p-4(titulo="Otras especies menores")
        h4
        ul.lista-ul
          li
            i.fas.fa-atom
            |		La temperatura del alojamiento tiene una incidencia directa en el estado sanitario de los animales, en el consumo de alimento, en su comportamiento reproductivo y en el rendimiento general de la unidad productiva.
          li
            i.fas.fa-atom
            |	Para la construcción de las instalaciones para la cría y levante de los conejos debe tenerse en cuenta el comportamiento de las precipitaciones, la nubosidad, la temperatura y los vientos.
          li
            i.fas.fa-atom
            |	En los alojamientos la temperatura óptima para el desarrollo de los animales está entre los 10 y los 30 °C. Para la cría de los gazapos la temperatura ideal está entre los 30 y los 32 °C.        
      .tarjeta.colorprimario--borde.p-4(titulo="Caprinos – ovinos")
        h4
        ul.lista-ul
          li
            i.fas.fa-atom
            |	En zonas cálidas establecer los alojamientos en sentido oriente occidente para aprovechar la mayor cantidad de sombrío.
          li
            i.fas.fa-atom
            |	Establecer el alojamiento en un lugar donde circulen corrientes de aire. 
          li
            i.fas.fa-atom
            |	En zonas cálidas para la fabricación de las paredes se puede emplear malla. En zonas frías emplear madera espaciada a 5 centímetros, de forma que se asegure la ventilación. 
          li
            i.fas.fa-atom
            |	Para la construcción de los techos en zonas cálidas emplear materiales que disipen el calor del sol. En zonas frías emplear materiales con propiedades aislantes. 
          li
            i.fas.fa-atom
            |	Zona de neutralidad térmica -3 y 20 ºC.

      .tarjeta.colorprimario--borde.p-4(titulo="Bovinos")
        h4
        ul.lista-ul
          li
            i.fas.fa-atom
            |	Adecuar zonas de sombrío en las áreas de pastoreo o en los corrales de manejo.
          li
            i.fas.fa-atom
            |	Sembrar árboles en áreas de pastoreo.
          li
            i.fas.fa-atom
            |	De ser posible, implementar sistemas de enfriamiento por aspersión.
          li
            i.fas.fa-atom
            |	En zonas frías procurar la construcción de establos o pesebreras.
          li
            i.fas.fa-atom
            |	La altura de los establos, sombreadores o pesebreras debe ser de por lo menos 2,15 m.
          li
            i.fas.fa-atom
            |	Asegurar la ventilación en los corrales, establos y pesebreras. 
          li
            i.fas.fa-atom
            |	Establecer las explotaciones bovinas con razas adecuadas a cada piso térmico (frío 12 – 17 ºC Normando, Holstein, Ayrshire; templado 17 – 24 ºC Simmenthal, Blanco orejinegro, Simbrah; cálido 25 – 30 ºC Cebú, Brahma, Guzerá, Gyr, Romosinuano, Hartón del Valle). 
          li
            i.fas.fa-atom
            |	Zona de neutralidad térmica entre 0 y 18 ºC.
        p Consulte material complementario para más información.

      .tarjeta.colorprimario--borde.p-4(titulo="Porcinos")
        h4
        ul.lista-ul
          li
            i.fas.fa-atom
            |	Utilización de sistemas de calefacción en primeros estados de desarrollo. Los lechones requieren una temperatura ambiente de por lo menos 32 ºC lo cual se logra con lámparas infrarrojas, placas de calefacción o sistemas que funcionan a base de combustibles.
          li
            i.fas.fa-atom
            |	Uso de cortinas laterales para el manejo de la temperatura. Estas se elevan o se bajan de acuerdo con la temperatura dentro del alojamiento y la velocidad del viento. 
          li
            i.fas.fa-atom
            |	Las temperaturas ambientales recomendadas para los cerdos están distribuidas de la siguiente forma: lechones 29 – 31 ºC; crecimiento 17 – 26 ºC; engorde 16 – 24ºC; cerdas de cría 10 – 25 ºC. 
          li
            i.fas.fa-atom
            |	El piso de la porqueriza se puede aislar mediante la utilización de estibas o superficies plásticas, las cuales, además, evitan el contacto de los animales con las heces y la orina.
        p Consulte material complementario para más información.

      .tarjeta.colorprimario--borde.p-4(titulo="Aves")
        h4
        ul.lista-ul
          li
            i.fas.fa-atom
            |		En la cría de pollos el manejo de la temperatura es fundamental para asegurar los rendimientos esperados. La temperatura del alojamiento se debe manejar de acuerdo con la edad de los animales. Lo recomendado en pollo de engorde es lo siguiente: pollos de 7 días 31 ºC; pollos de 14 días 27 ºC; pollos de 28 días 21 ºC; pollos de 42 días 18 ºC. (Cobb Guía de manejo del pollo de engorde 2012).
          li
            i.fas.fa-atom
            |		Siempre se debe garantizar un flujo de aire, especialmente en zonas cálidas.
          li
            i.fas.fa-atom
            |		Se debe evitar el amontonamiento de aves, por los problemas sanitarios que puede derivar. 
          li
            i.fas.fa-atom
            |		El flujo de aire dentro del galpón puede reducir la temperatura efectiva de 5 a 7 ºC
        
      .tarjeta.colorprimario--borde.p-4(titulo="Peces")
        h4
        ul.lista-ul
          li
            i.fas.fa-atom
            |	La temperatura del agua tiene un efecto importante en la velocidad con la que una especie piscícola alcanza el punto de cosecha, pues a mayor temperatura mayor velocidad en el desarrollo metabólico. Cada especie tiene sus rangos de temperatura del agua para su desarrollo óptimo: Tilapia: 25 – 32 ºC; Mojarra > 24 ºC; Carpa 18 – 24 ºC; Trucha < 18 ºC.
          li
            i.fas.fa-atom
            |	Se debe elegir la especie de acuerdo con los rangos de temperatura predominantes. En zonas cálidas (entre 25 y 30 ºC) es posible trabajar con mojarra o cachama. En zonas frías (12 – 16 ºC) es posible emplear especies como la trucha arcoíris.



    Separador
    .row
      .col-xl-12       
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.2 Humedad

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
      p En el montaje de las unidades productivas debe tenerse en cuenta el manejo de la humedad. Esta se puede analizar desde dos puntos de vista. El primero, tiene que ver con la humedad del ambiente o humedad relativa, la cual se relaciona con la cantidad de vapor de agua que existe en el aire expresada en porcentaje. Y el segundo tiene que ver con el agua de escorrentía o los lixiviados que se pueden presentar al interior del alojamiento.
      
    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Humedad relativa o humedad ambiental

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La humedad relativa tiene una relación muy estrecha con la forma como se regula la temperatura de los animales, pues con una alta humedad relativa es más difícil disipar el calor del cuerpo, lo cual influye directamente en la productividad, pues con una mayor temperatura corporal se da menor consumo de alimento y por lo tanto menor ganancia de peso. Si bien en un alojamiento la humedad relativa es más difícil de controlar que la temperatura, el rango de confort para los animales para esta variable es mucho mayor.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.p-4.mb-4(style="background-color=#EBEEE8") 
          .p Los valores de humedad relativa que se deben manejar dentro del alojamiento varían mucho de especie a especie, incluso entre razas es posible encontrar diferencias al respecto. Sin embargo, en términos generales, los rangos de humedad relativa que se manejan en las explotaciones pecuarias son los que se presentan a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Figura 4.
          span  #[i  Porcentajes de humedad relativa recomendados para las principales explotaciones pecuarias]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema2/img7.svg', alt='Figura 4 Porcentajes de humedad relativa recomendados para las principales explotaciones pecuarias Porcinos: 60 - 75 % Aves: 45 - 65 % Ovinos y caprinos: 70 - 80 % Équidos (caballos, mulas, burros): 50 - 80 % N 50 - 55 % N 60 - 65 %')
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema2/img7.1.svg', alt='Figura 4 Porcentajes de humedad relativa recomendados para las principales explotaciones pecuarias Porcinos: 60 - 75 % Aves: 45 - 65 % Ovinos y caprinos: 70 - 80 % Équidos (caballos, mulas, burros): 50 - 80 % N 50 - 55 % N 60 - 65 %')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-4(style="background-color=#EBEEE8") 
          p Para reducir la humedad relativa de los alojamientos es necesario favorecer la ventilación mediante el uso de cortinas o sistemas de ventilación mecánicos, los cuales disipan las masas de aire húmedo. Por el contrario, para aumentar los porcentajes de humedad en el ambiente, en algunas explotaciones, se utilizan sistemas de nebulización de agua que han mostrado ser eficientes.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En la producción de pollo de engorde, se han utilizado, con buenos resultados, los tableros húmedos con sistemas de recirculación o de aspersión para aumentar la humedad relativa. En las explotaciones ovinas y caprinas, cuando la temperatura excede los 25 °C se recomienda disminuir la humedad relativa a 60 %.

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Humedad relacionada con lixiviados y escorrentías

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p La otra forma desde la que se puede abordar el tema de la humedad en las explotaciones pecuarias es la relacionada con las condiciones del alojamiento en cuanto al manejo de los lixiviados y las escorrentías, pues muchos de los problemas sanitarios que se presentan en las unidades productivas tienen que ver con este factor.
        .cajon.color-primario.p-4.mb-4
          p En términos generales, los pisos de las unidades pecuarias deben construirse con materiales que permitan el fácil lavado de las excretas, con un declive que permita conducir las aguas de escorrentía hasta un sitio para su disposición. Incluso en algunas explotaciones, como caprinos y porcinos, se utilizan plataformas sobre las cuales permanecen los animales sin que entren en contacto con heces, orina o aguas de escorrentía.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img8.png', alt='Humedad relacionada con lixiviados y escorrentías')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
       p En explotaciones que se desarrollen directamente sobre el suelo, como en los montajes de cama profunda en porcinos, se recomienda utilizar un material de absorción que retenga el exceso de humedad producido por la orina y las excretas. A medida que aumenta la humedad en determinados puntos de la cama es necesario agregar más material absorbente para prevenir problemas sanitarios, olores y vectores. Este material secante se retira periódicamente para recibir un manejo posterior, como el compostaje, para que pueda ser empleado en procesos de mejoramiento de suelos o fertilización de plantas en la misma unidad productiva.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Figura 5.
          span  #[i  Principales problemas asociados al mal manejo de la humedad en las explotaciones pecuarias]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema2/img9.svg', alt='Figura 5 Principales problemas asociados al mal manejo de la humedad en las explotaciones pecuarias Manejo inadecuado de la humedad de alojamientos Enfermedades parasitarias Enfermedades bacterianas Propagación de patógenos Propagación de vectores Generación de olores ofensivos Contaminación de fuentes hídricas')
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema2/img9.1.svg', alt='Figura 5 Principales problemas asociados al mal manejo de la humedad en las explotaciones pecuarias Manejo inadecuado de la humedad de alojamientos Enfermedades parasitarias Enfermedades bacterianas Propagación de patógenos Propagación de vectores Generación de olores ofensivos Contaminación de fuentes hídricas')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Para mantener las condiciones de humedad óptimas al interior de la unidad productiva, es recomendable:
    
    .cajon.color-secundario.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema2/img10.svg', alt='')
        .col-lg-8
          ul.lista-ul
            li
              i.fas.fa-atom
              | Revisar periódicamente las cubiertas, para detectar goteras o filtraciones.
            li
              i.fas.fa-atom
              | Mantener despejados los drenajes, sifones y canales de conducción de aguas residuales. 
            li
              i.fas.fa-atom
              | Hacer mantenimiento periódico a los depósitos de aguas residuales. 
            li
              i.fas.fa-atom
              | Mantener en perfecto estado bebederos, comederos e instalaciones de conducción de aguas. 


    Separador
    .row
      .col-xl-12       
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.3 Ventilación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Parte del #[i “confort”] necesario en la unidad productiva tiene que ver con la circulación de aire, pues en el proceso natural los animales producen gases y olores que pueden afectar el normal desarrollo de la actividad pecuaria y causar malestar para los operarios de la granja. Igualmente, la falta de ventilación tiene una relación directa con el aumento de la temperatura al interior del alojamiento y con el porcentaje de humedad relativa, lo cual puede causar molestias y afectar la productividad de la explotación. 
        p Al igual que ocurre con las demás condiciones del alojamiento, la velocidad del viento ideal depende mucho del tipo de explotación instalada, de la especie alojada, de las condiciones agroecológicas de la zona y del tipo de infraestructura empleada. Sin embargo, en términos generales se deben tener en cuenta las siguientes consideraciones:
    
    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Explotaciones avícolas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En las explotaciones avícolas, para mantener las camas frescas y asegurar una buena ingesta de alimentos es necesario mantener los ambientes ventilados, con lo cual además se aseguran mínimos niveles de dióxido de carbono, monóxido de carbono, amoníaco y polvo. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 6.
          span  #[i Velocidad del viento recomendada en explotaciones avícolas]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-c.mb-5
          table
            caption Nota. Tomada de Bulla (2014).
            thead(style="background-color:#1B3F5E;color:#FFFFFF;")
              tr
                th.text-center(style="border:solid 1px #AFAFAF;") Edad de las aves en días
                th.text-center(style="border:solid 1px #AFAFAF;") Valor de referencia
            tbody
              tr
                td.text-center  0 – 14
                td.text-center  0,30 
              tr
                td.text-center 15 – 21
                td.text-center 0,50 
              tr
                td.text-center 22
                td.text-center – 28
              tr
                td.text-center >28
                td.text-center 1,75 – 3,00
  
    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Explotaciones porcícolas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema2/img11.png", alt="Explotaciones porcícolas")
      .col-lg-7
        p El movimiento de las masas de aire es lo que se conoce como viento y este tiene una estrecha relación con la temperatura del alojamiento y con la humedad relativa. En los alojamientos de cerdos adultos, el manejo de la temperatura se hace principalmente con cortinas, las cuales se abren o cierran dependiendo del microclima de la porqueriza. 
        p De acuerdo con Echavarría (2010), en su publicación Ambiente climático en la producción porcina, las temperaturas óptimas para el manejo de cerdos se dan con una velocidad del aire de 0,2 m/segundo, claro está, siempre y cuando las temperaturas se mantengan en los siguientes rangos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 7.
          span  #[i Temperaturas óptimas de confort para los cerdos]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-c.mb-5
          table
            caption Nota. Tomada de Echavarría (2010). 
            thead(style="background-color:#1B3F5E;color:#FFFFFF;")
              tr
                th.text-center(style="border:solid 1px #AFAFAF;") Categoría
                th.text-center(style="border:solid 1px #AFAFAF;") Temperaturas óptimas
            tbody
            tr
              td Cerdos de 20 a 30 kilogramos
              td.text-center 18 – 20 °C 

            tr
              td Cerdos de 35 a 60 kilogramos
              td.text-center 16 – 18 °C 

            tr
              td Cerdos de 60 a 100 kilogramos
              td.text-center 12 – 18 °C 

            tr
              td Cerdas de cría
              td.text-center 12 – 25 °C
    
    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Explotaciones ovinas y caprinas


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La ventilación de las instalaciones donde se mantienen a ovinos y caprinos requiere de una buena calidad del aire, lo que se logra a través de una buena ventilación. En este tipo de explotaciones, generalmente, se recurre a la construcción de alojamientos con aberturas laterales, las cuales permiten la circulación del aire. En climas fríos, a menudo se utilizan construcciones en madera con aberturas para facilitar la ventilación de la unidad productiva.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 8.
          span  #[i Velocidad del aire recomendada en explotaciones de ovinos y caprinos]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-c.mb-5
          table
            caption Nota. Tomada de SENA (2010).
            thead(style="background-color:#1B3F5E;color:#FFFFFF;")
              tr
                th.text-center(style="border:solid 1px #AFAFAF;") Categoría
                th.text-center(style="border:solid 1px #AFAFAF;") Velocidad del aire en metros/segundo
            tbody
            tr
              td Ovejas con vellón
              td.text-center ≤ 1  

            tr
              td Corderos lechales
              td.text-center ≤ 0,5  

            tr
              td Corderos en ceba
              td.text-center ≤ 1  

            tr
              td Ganado caprino adultos
              td.text-center 0,5 – 0,8 

            tr
              td Ganado caprino jóvenes 
              td.text-center 0,2 – 0,3         

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Otras especies menores

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Para la implementación de explotaciones de especies menores, es importante considerar las condiciones ambientales de la zona, entre ellas el viento, pues el desarrollo de los animales y su estado sanitario se relacionan directamente con esta variable al interior del alojamiento. 
        p Es recomendable evitar la presencia de corrientes directas de aire, ya que estas pueden ocasionar disminuciones drásticas de la temperatura. No obstante, es fundamental mantener una buena aireación al interior de la unidad productiva con lo cual es posible disipar gases tóxicos, polvo y olores que pueden ser perjudiciales para los animales.
        p Para evitar las corrientes directas de aire es posible utilizar cortinas, barreras vivas o barreras naturales, por medio de las cuales se ofrecen a los animales las condiciones ideales de temperatura y humedad a través de una ventilación adecuada. 
      .col-lg-5
        figure
        img(src="@/assets/curso/temas/tema2/img12.png", alt="Otras especies menores")


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Figura 6.
          span  #[i Tipos de barreras para control de corrientes de aire]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema2/img13.svg', alt='Figura 6 Tipos de barreras para control de corrientes de aire. En la figura se observan 3 tipos de barreras antes de las conejeras, la primera con obstáculo de un cerro o montículo, la segunda con una casa como obstáculo para la corriente de aire a las conejeras, la tercera con unos arbustos como obstáculo para las conejeras')
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema2/img13.1.svg', alt='Figura 6 Tipos de barreras para control de corrientes de aire. En la figura se observan 3 tipos de barreras antes de las conejeras, la primera con obstáculo de un cerro o montículo, la segunda con una casa como obstáculo para la corriente de aire a las conejeras, la tercera con unos arbustos como obstáculo para las conejeras')

    Separador
    .row
      .col-xl-12       
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.4 Densidad e inventarios de animales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Otro de los aspectos que se deben tener en cuenta para garantizar el bienestar animal es el manejo de la densidad, es decir, la cantidad de animales por unidad de área o alojamiento, lo cual permite controlar enfermedades, implementar un adecuado plan sanitario y generar condiciones que favorezcan la productividad.
        p Esta densidad depende de ciertos factores entre los cuales se encuentran la especie pecuaria, la raza, la disponibilidad de recursos, el tipo de explotación y el área disponible, pero existen parámetros que se deben respetar para cumplir con la normativa relacionada con el bienestar animal (ICA, 2020), la cual puede consultar en el siguiente enlace:
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .tarjeta.color-secundario.tarj-color.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema2/img39.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Resolución 136 de 2020 Instituto Colombiano Agropecuario.
                  p.text-small.mb-0 https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias/bienestar-animal/resol-136-por-la-cual-se-adopta-el-manual-de-c-2.aspx
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias/bienestar-animal/resol-136-por-la-cual-se-adopta-el-manual-de-c-2.aspx" target="_blank")
                    span Enlace web
                    i.fas.fa-file-download
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Las instalaciones deben procurar al animal libertad de movimiento de forma que se facilite su confort y su socialización. Igualmente, los materiales empleados en la construcción deben procurar seguridad a los animales y a las personas, facilitar la limpieza y la desinfección, tener pisos firmes y sólidos fáciles de asear, procurar a los animales protección frente a los elementos, contar con suficiente iluminación natural en el día o artificial en la noche y contar con acceso al agua y al alimento. Los comederos y bebederos estarán fabricados en materiales fáciles de asear, mantendrán las propiedades de los alimentos y su capacidad estará adecuada al número de animales alojados. 
        p En lo relacionado con las instalaciones para el confinamiento de los animales, existen parámetros establecidos los cuales se revisarán como sigue:
      .col-lg-3
        figure
        img(src='@/assets/curso/temas/tema2/img14.svg', alt='')
    
    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Explotaciones de especies équidas 


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La altura de las instalaciones, en su parte más baja, debe permitir al animal pararse en sus miembros posteriores. Las puertas de las pesebreras deben tener por lo menos 1,25 metros de ancho y las puertas de los corrales deberán tener al menos 3 metros. Las especificaciones mínimas de las pesebreras se darán con relación a la alzada del équido y deberán tener las siguientes dimensiones:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 9.
          span  #[i Medidas de las pesebreras individuales para équidos]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-c.mb-5
          table
            caption Nota. Tomada de ICA (2020).
            thead(style="background-color:#1B3F5E;color:#FFFFFF;")
              tr
                th.text-center(style="border:solid 1px #AFAFAF;") Alzada (centímetros)
                th.text-center(style="border:solid 1px #AFAFAF;") Dimensiones por animal para pesebreras individuales (metros)
                th.text-center(style="border:solid 1px #AFAFAF;") Área disponible por animal (metros)
            tbody
            tr.text-center 
              td.text-center 117 o menos
              td.text-center 3,00 x 3,00
              td.text-center 9,00 

            tr.text-center 
              td.text-center 117 – 134 
              td.text-center 3,00 x 3,65
              td.text-center 10,95 

            tr.text-center 
              td.text-center 135 – 172 
              td.text-center 3,65 x 3,65
              td.text-center 13,32 

            tr.text-center 
              td.text-center 172 o más
              td.text-center 3,65 x 4,25
              td.text-center 15,51 

            tr.text-center 
              td.text-center Parideras
              td.text-center 4,25 x 4,25
              td.text-center 18,06 

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Explotaciones de especies porcinas


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Las instalaciones deberán contar con la suficiente área para permitir la socialización de los animales, su agrupamiento y alojamiento de acuerdo con la etapa del ciclo productivo en el que se encuentren los individuos. La unidad deberá tener un área seca y otra húmeda para facilitar el descanso de los animales y los pisos del alojamiento deben ser de fácil limpieza y desinfección. Las paredes de las unidades no deberán tener bordes o salientes que en determinado momento puedan lastimar a los animales y a los operarios.
        p Las áreas de las que se debe disponer para alojar a los animales en la explotación porcina son las siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 10.
          span  #[i Área por animal en explotaciones porcícolas]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-c.mb-5
          table
            caption Nota. Para machos reproductores en el alojamiento en jaulas se recomiendan dimensiones de 2,40 m de largo por 0,70 de ancho. Tomada de ICA (2020).
            thead(style="background-color:#1B3F5E;color:#FFFFFF;")
              tr
                th.text-center(style="border:solid 1px #AFAFAF;") Grupo de población
                th.text-center(style="border:solid 1px #AFAFAF;") Tamaño del grupo
                th.text-center(style="border:solid 1px #AFAFAF;") Animales jóvenes (metro cuadrado)
                th.text-center(style="border:solid 1px #AFAFAF;") Animales adultos (metro cuadrado)
            tbody
            tr.text-center 
              td(rowspan=3).text-center Hembras de reemplazo y/o gestantes alojadas en jaulas
              td Menor a 6 animales
              td.text-center 1,81
              td.text-center 2,48
            tr.text-center 
              td Entre 6 y 39 animales
              td.text-center 1,64
              td.text-center 2,25
            tr.text-center 
              td Más de 40 animales
              td.text-center 1,49
              td.text-center 2,05
            tr.text-center 
              td Machos reproductores
              td Un animal por alojamiento
              td -
              td 6,00
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 11.
          span  #[i Espacio disponible para animales precebo, levante y ceba]


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-c.mb-5
          table
            caption Nota. Tomada de ICA (2020)
            thead(style="background-color:#1B3F5E;color:#FFFFFF;")
              tr
                th.text-center(style="border:solid 1px #AFAFAF;") Peso del animal en kilogramos
                th.text-center(style="border:solid 1px #AFAFAF;") Espacio disponible (metros cuadrados)
                th.text-center(style="border:solid 1px #AFAFAF;") Cama profunda (metro cuadrado)
            tbody
            tr 
                td Hasta 10
                td 0,16
                td 0,24 

            tr 
                td 10 – 20
                td 0,28
                td 0,42 

            tr 
                td 21 – 30
                td 0,36
                td 0,54 

            tr 
                td 31 – 50
                td 0,50
                td 0,75 

            tr 
                td 51 – 85
                td 0,72
                td 1,82 

            tr 
                td 86 – 110
                td 1,0
                td 1,50 

            tr 
                td Más de 110
                td Más de 1,0
                td 1,65 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En relación con el área que requieren los animales precebo, levante y ceba, es posible encontrar que cuando se maneja con el sistema de cama profunda es necesario disponer de una mayor área de alojamiento.

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Explotaciones de especies ovinas y caprinas


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Las instalaciones para el alojamiento de los ovinos y caprinos deben proveer la suficiente libertad de movimiento a los animales para realizar sus actividades cotidianas, como alimentarse, echarse, levantarse y descansar libremente. Igualmente debe facilitar el aseo y la desinfección de las unidades productivas. Además de lo anterior, las instalaciones deben procurar protección frente a los depredadores y los cambios climáticos que se presenten en la zona. Los espacios mínimos recomendados por animal son los siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 12.
          span  #[i Espacios mínimos por animal según características]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-c.mb-5
          table
            caption Nota. Tomada de ICA (2020).
            thead(style="background-color:#1B3F5E;color:#FFFFFF;")
              tr
                th.text-center(style="border:solid 1px #AFAFAF;") Animales en confinamiento individual
                th.text-center(style="border:solid 1px #AFAFAF;") Ovinos (m²)
                th.text-center(style="border:solid 1px #AFAFAF;") Caprinos (m²)
            tbody
            tr 
              td Hembra adulta vacía
              td.text-center 0,90
              td.text-center 2,00 

            tr 
              td Hembra preñada y macho castrado
              td.text-center 1,00
              td.text-center 2,00 

            tr 
            td Reproductor
            td.text-center 1,50
            td.text-center 2,00 

            tr 
              td Cordero – cabrito
              td.text-center 0,60
              td.text-center 0,60 

            tr 
              td Hembra con cría lactante
              td.text-center 1,50
              td.text-center 2,50
            tr(style="background-color:#1B3F5E;color:#FFFFFF;")
              td Animales confinamiento grupal
              td(colspan=2)
            tr 
              td Menos de 8 animales
              td.text-center 0,90
              td.text-center 1,00 

            tr 
              td 8 – 15 animales
              td.text-center 0,80
              td.text-center 0,90 

            tr 
              td 16 – 30 animales
              td.text-center 0,60
              td.text-center 0,80 

            tr 
              td 31 o más animales
              td.text-center 0,50
              td.text-center 0,80

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Se debe asegurar que el suelo de las áreas donde permanecen los animales esté seco, así como las inmediaciones de las zonas de alimentación y bebida, con lo cual es posible reducir los focos de contaminación y la proliferación de patógenos. 

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Explotaciones avícolas y especies menores


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En sistemas avícolas se manejan tal vez algunas de las densidades más altas de población, debido a que la mayoría de estas explotaciones son de tipo intensivo. No obstante, es importante respetar los límites, pues una alta densidad de animales por metro cuadrado puede dar origen a problemas sanitarios, aumento de la temperatura, falta de ventilación y aumento en la concentración de gases nocivos, lo cual a su vez se puede traducir en un aumento de los costos de producción y en reducción de los niveles de rentabilidad de la explotación. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 13.
          span  #[i Densidad de población recomendada especies menores]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-c.mb-5
          table
            caption Nota. Tomada de ICA (2020).
            thead(style="background-color:#1B3F5E;color:#FFFFFF;")
              tr
                th.text-center(style="border:solid 1px #AFAFAF;") Especie
                th.text-center(style="border:solid 1px #AFAFAF;") Dimensiones de la jaula
                th.text-center(style="border:solid 1px #AFAFAF;") Número de animales
            tbody
            tbody
            tr
              td Conejos levante
              td.text-center 0,75 m X 0,5 m X 0,4 m
              td.text-center 5 

            tr
              td Coneja con sus crías (incluido nidal)
              td.text-center 0,75 m X 0,5 m X 0,4 m
              td.text-center 9 

            tr
              td Machos reproductores
              td.text-center 0,75 m X 0,5 m X 0,4 m
              td.text-center 1 

            tr
              td Cuyes empadre y maternidad
              td.text-center 1 X 1,5 m
              td.text-center 10 hembras /1 macho 

            tr
              td Recría 
              td.text-center 1 X 0,7 m
              td.text-center 10 machos 

            tr
              td Gallina ponedora
              td.text-center 6
              td.text-center 3 – 4 

            tr
              td Pollo de engorde
              td.text-center 8 – 12
              td.text-center No aplica 

            tr
              td Codornices de postura
              td.text-center 64
              td.text-center No aplica 

            tr
              td Codornices de engorde
              td.text-center 100
              td.text-center No aplica

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Inventarios 


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p El desarrollo de inventarios permite conocer la población real de animales que existen en la granja pecuaria, por lo que su realización debe tener cierta periodicidad. Al momento de diseñar los formatos de captura de información se hace necesaria la diferenciación del inventario de animales el cual debe dar cuenta de: número de animales, especie, sexo, edad aproximada, sitio de alojamiento, prácticas de manejo recientes, consumo diario de alimento y ganancia de peso, de ser posible. Algunos ejemplos de inventarios de animales son los siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 14.
          span  #[i Ejemplo de inventario explotación bovina]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure
          img(src='@/assets/curso/temas/tema2/img15.png', alt='')
          figcaption Nota. Tomada de engormix.com

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 15.
          span  #[i Inventario sistematizado en explotación lechera]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .cajon.color-primario.p-4.mb-4(style="background-color:#DBF9BD")
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-9         
              figure
                img(src='@/assets/curso/temas/tema2/img16.png', alt='')
                figcaption Nota. Tomada de compuagro.net.

    Separador
    .row
      .col-xl-12       
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.5 Limpieza y desinfección

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En la explotación pecuaria es necesario seguir protocolos que orienten las tareas cotidianas con lo cual se contribuye a asegurar la trazabilidad de los procesos, generar una cultura organizacional en la empresa, definir la periodicidad de las actividades, dar un orden lógico a los procedimientos y documentar las acciones implementadas. 
        p La verificación de las actividades de limpieza y desinfección debe empezar por la revisión minuciosa de los protocolos establecidos en la unidad pecuaria, pues de esta forma el proceso de seguimiento tendrá un orden lógico y coherente con las actividades realizadas en la unidad productiva. En términos generales, la verificación de las actividades de limpieza y desinfección puede darse de la siguiente manera:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img17.png', alt='')
      .col-lg-8
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Verificación de existencia de protocolo de limpieza y desinfección")
            .col-md-8.mb-4.mb-md-0
              p.text-small Es importante indagar con el personal administrativo sobre la existencia de estos protocolos y la periodicidad en la realización de las actividades. De ser posible se solicitará documento donde conste la trazabilidad de los procesos de limpieza y desinfección.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/img18.svg', alt='Verificación de existencia de protocolo de limpieza y desinfección')

          .row(numero="2" titulo="Evidencia de retiro de animales")
            .col-md-8.mb-4.mb-md-0
              p.text-small Revisar evidencias del retiro de todos los animales en el ciclo inmediatamente anterior para facilitar labores de aseo, limpieza y preparación de las instalaciones para la nueva camada.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/img19.svg', alt='Evidencia de retiro de animales')
          .row(numero="3" titulo="Manejo de vectores y patógenos")
            .col-md-8.mb-4.mb-md-0
              p.text-small Revisar el cumplimiento protocolos de manejo de vectores y patógenos antes del ingreso de los nuevos animales.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/img20.svg', alt='Manejo de vectores y patógenos')
          .row(numero="4" titulo="Retiro de residuos de alimento")
            .col-md-8.mb-4.mb-md-0
              p.text-small Retiro de residuos de alimento	Revisar el retiro de todos los residuos de alimento del ciclo productivo anterior.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/img21.svg', alt='Retiro de residuos de alimento')
          .row(numero="5" titulo="Verificación de limpieza de superficies")
            .col-md-8.mb-4.mb-md-0
              p.text-small Revisión de aplicación de protocolos de limpieza y desinfección de superficies al interior del sitio de alojamiento, así como de los equipos empleados en la explotación pecuaria.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/img22.svg', alt='Verificación de limpieza de superficies')

          .row(numero="6" titulo="Revisión de implementación de protocolo de limpieza")
            .col-md-8.mb-4.mb-md-0
              p.text-small Revisar la aplicación de los protocolos de limpieza incluida la limpieza y mantenimiento de drenajes.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/img23.svg', alt='Revisión de implementación de protocolo de limpieza')
          .row(numero="7" titulo="Cortinas, cuartos de control y almacenamiento de agua")
            .col-md-8.mb-4.mb-md-0
              p.text-small Cortinas, cuartos de control y almacenamiento de agua	Revisar que las cortinas se han desmontado y se han aseado conforme con el protocolo de limpieza. Igualmente, verificar aseo y desinfección de cuartos de control, sitios de almacenamiento de agua, así como de los sistemas de conducción.	 
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/img24.svg', alt='Cortinas, cuartos de control y almacenamiento de agua')
          .row(numero="8" titulo="Drenajes y encharcamientos")
            .col-md-8.mb-4.mb-md-0
              p.text-small Revisar que no existan obstrucciones en los sistemas de drenaje, ni encharcamientos cerca de las zonas de alojamiento de animales.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/img25.svg', alt='Drenajes y encharcamientos')
          .row(numero="9" titulo="Sistemas de conducción de agua")
            .col-md-8.mb-4.mb-md-0
              p.text-small Verificar registros que indiquen la limpieza y desinfección de las líneas de conducción de agua hacia los bebederos. Verificar el tipo de sustancia desinfectante y el tiempo que se dejó actuar la solución desinfectante dentro del sistema. Verificar que el sistema haya sido enjuagado completamente con agua limpia.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/img26.svg', alt='Sistemas de conducción de agua')
          .row(numero="10" titulo="Revisar protocolos de limpieza de equipos")
            .col-md-8.mb-4.mb-md-0
              p.text-small Verificar la implementación de protocolos de limpieza y desinfección de equipos. Revisar el historial de manejo sanitario de la explotación anterior. Revisión de protocolo de destrucción de equipos que no puedan ser empleados en el nuevo ciclo.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/img27.svg', alt='Revisar protocolos de limpieza de equipos')
          .row(numero="11" titulo="Protocolos para el personal y manejo de zonas comunes")
            .col-md-8.mb-4.mb-md-0
              p.text-small Verificar el cumplimiento por parte del personal de los protocolos de limpieza y desinfección de áreas de oficina, alojamientos de trabajadores y ropa de trabajo.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/img28.svg', alt='Protocolos para el personal y manejo de zonas comunes')
          .row(numero="12" titulo="Protocolo de bioseguridad y plan sanitario")
            .col-md-8.mb-4.mb-md-0
              p.text-small Revisar implementación de protocolo de bioseguridad en unidad productiva, así como el plan sanitario.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/img29.svg', alt='Protocolo de bioseguridad y plan sanitario')
          .row(numero="13" titulo="Periodos de descanso")
            .col-md-8.mb-4.mb-md-0
              p.text-small Revisar documentación que acredite el cumplimiento de los periodos de descanso recomendados para cada especie pecuaria.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema2/img30.svg', alt='Periodos de descanso')


    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Limpieza de los sistemas de comederos y bebederos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Todo el equipo de la nave se debe limpiar y desinfectar por completo. Después de haberlo limpiado, es esencial que se almacene bajo techo. El procedimiento para limpiar el sistema de bebederos es el siguiente:

    .row.justify-content-center
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="n")
          .row
            .col-lg
              p Drenar las tuberías y los tanques elevados.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img31.png', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img32.png', alt='').img125
            .col-lg              
              p Hacer correr agua limpia por las tuberías.

          .row
            .col-lg
              p Frotar los tanques elevados para remover la herrumbre y la película biológica que se haya depositado, y drenarlos hacia el exterior de la nave.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img33.png', alt='').img125
          .row
            .col-lg
              p Volver a llenar el tanque con agua limpia y agregar un desinfectante aprobado para el agua.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img34.png', alt='').img125
          .row
            .col-lg
              p Hacer correr la solución desinfectante a lo largo de las líneas de bebedero desde el tanque elevado, asegurándose de que no haya bolsas de aire, igualmente, asegurarse de que el desinfectante esté aprobado para ser usado con el equipo de bebederos y que se esté utilizando a la dilución correcta.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img35.png', alt='').img125
          .row
            .col-lg
              p Volver a llenar el tanque a su nivel normal de operación con más solución desinfectante a la concentración adecuada, colocar la tapa, luego, dejar que el desinfectante permanezca ahí durante un tiempo mínimo de 4 horas.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img36.png', alt='').img125
          .row
            .col-lg
              p Drenar y enjuagar con agua fresca.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img37.png', alt='').img125
          .row
            .col-lg
              p Volver a llenar con agua fresca antes de la llevada de los pollitos.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img38.png', alt='').img125

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          p Es importante registrar todas las novedades encontradas en el proceso de revisión de la implementación de los protocolos de limpieza y desinfección, pues de ello depende que en el futuro se realicen mejoras en algunas de estas prácticas. Es importante involucrar a todo el personal asociado a la explotación pecuaria para que se apropie de los protocolos y los implemente conforme a lo establecido en el plan de manejo de la explotación pecuaria. 
          p Como ejemplo de parámetros para verificación de condiciones del alojamiento, se invita a ver el siguiente vídeo:
      
      .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video          
            iframe(width="560" height="315" src="https://www.youtube.com/embed/PF-y_fnhwew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Tema2',
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
