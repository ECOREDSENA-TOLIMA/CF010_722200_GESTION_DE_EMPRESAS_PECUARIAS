export default {
  global: {
    componenteFormativo:
      'Monitoreo, seguimiento y acciones de mejora en las unidades productivas pecuarias',
    descripcionCurso:
      'La administración de la unidad pecuaria depende, principalmente, de la disponibilidad de información que evidencie el comportamiento de sus parámetros productivos. Actualmente, la tecnología permite manejar grandes volúmenes de información, por lo que los nuevos profesionales del agro deben adquirir destrezas y habilidades para su interpretación y análisis, así como la generación de informes que faciliten la toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Monitoreo de unidades productivas pecuarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Funcionamiento de equipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Verificación del estado de instalaciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Parámetros técnicos de la unidad productiva pecuaria',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Parámetros para verificación de condiciones del alojamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Temperatura',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Humedad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Ventilación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Densidad e inventarios de animales',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Limpieza y desinfección',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Registro de novedades y reportes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Elaboración de formatos para captura de información',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Diligenciamiento de registros',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Manejo y almacenamiento de datos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Elaboración de reportes',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Acciones de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Planes de mejora',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Implementación de planes de mejora',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar pdf',
        download: 'downloads/CFA_10_722200.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2.1 Temperatura',
      referencia:
        'Contexto ganadero. ¿Qué tipo de raza bovina debería tener de acuerdo al piso térmico? (s.f.).',
      tipo: 'Publicación web',
      link:
        'https://www.contextoganadero.com/ganaderia-sostenible/que-tipo-de-raza-bovina-deberia-tener-de-acuerdo-al-piso-termico',
    },
    {
      tema: '2.2 Temperatura',
      referencia:
        'CIAP- Centro de información de actividades porcinas. SIPU. Instalaciones, (s.f.).',
      tipo: 'Página web',
      link:
        'http://www.ciap.org.ar/Sitio/Sipu/Materiales/Etiqueta-Archivos.jsp?etiqueta=599',
    },
  ],
  glosario: [
    {
      termino: 'Alzada',
      significado:
        'altura de los cuadrúpedos que se mide desde el talón de las patas delanteras hasta la cruz.  ',
    },
    {
      termino: 'Cruz',
      significado:
        'región alta y musculosa, justo al terminar el cuello y la inserción de las crines.  ',
    },
    {
      termino: 'Equipos autopropulsados',
      significado:
        'poseen una planta motriz que les permite movimiento autónomo. ',
    },
    {
      termino: 'Escorrentía',
      significado:
        'exceso de agua que se desplaza por la superficie del suelo cuando este ha alcanzado su punto de saturación o bien tiene valores muy altos de compactación.  ',
    },
    {
      termino: 'Índice de conversión',
      significado:
        'relación que existe entre la cantidad de alimento que consume el animal frente a la cantidad de producto obtenido. Generalmente se expresa en kilogramos.  ',
    },
    {
      termino: 'Lixiviados',
      significado:
        'sustancia líquida que, circula entre los residuos que se encuentran principalmente en los vertederos y que se filtra a través de un residuo sólido. Puede estar conformado por agua lluvia y otros compuestos procedentes de la degradación de la materia orgánica.  ',
    },
    {
      termino: 'Microclima',
      significado:
        'área en la que el clima es diferente al del entorno. Estos pueden ser muy pequeños, como del tamaño de un alojamiento animal, o tan grandes como una ciudad o un área de ella.  ',
    },
    {
      termino: 'Patógenos',
      significado:
        'agentes u organismos vivos capaces de causar enfermedad en un receptor, sea animal o persona.  ',
    },
    {
      termino: 'Pienso',
      significado:
        'compuesto alimenticio para animales constituido por una mezcla de materias primas animales, vegetales o minerales, que son transformadas o no, para satisfacer sus necesidades nutricionales.  ',
    },
    {
      termino: 'Precebo',
      significado:
        'etapa de crecimiento de los cerdos que se da después del destete y comprende una transición a nuevos hábitos alimenticios.  ',
    },
    {
      termino: 'Ración',
      significado:
        'cantidad de alimento que se da en una comida a una persona o animal. La composición de la ración puede ser variada y se da en función de la edad del animal, la etapa productiva, el propósito de la explotación y el tipo de sistema (intensivo o extensivo).  ',
    },
    {
      termino: 'Zona de neutralidad térmica',
      significado:
        'límites de temperatura en medio de los cuales los animales no se ven afectados ni positiva ni negativamente. También se denomina zona de confort térmico.  ',
    },
  ],
  referencias: [
    {
      referencia:
        'Arauz, E. (2020). <em>Importancia del inventario y agrupamiento animal para el manejo integral y eficiente de la finca lechera con énfasis en el trópico.</em>',
      link:
        'https://www.engormix.com/ganaderia-leche/articulos/importancia-inventario-agrupamiento-animal-t45392.htm  ',
    },
    {
      referencia:
        'Asociación Porkcolombia. (2017). <em>Boletín No. 8. Benchmarking de productividad porcícola en Colombia.</em> Asociación Porkcolombia',
      link:
        'https://porkcolombia.co/wp-content/uploads/2018/09/VIII-Benchmarking-2017-I-Semestre.pdf  ',
    },
    {
      referencia:
        'Aviagen. (2018).<em> Manual de manejo de la reproductora “Ross”.</em>',
      link:
        'https://aviagen.com/assets/Tech_Center/BB_Foreign_Language_Docs/Spanish_TechDocs/RossPSHandBook2018-ES.pdf  ',
    },
    {
      referencia:
        'Avícola Toscana. (2021). <em>Resumen de la producción raza Babcock Brown.</em>',
      link: 'http://www.avicolatoscana.com/babcock-brown/  ',
    },
    {
      referencia:
        'Bulla, C., A. 2014. <em>Comparación e indicadores productivos en los sistemas de producción bovino y ovino.</em> Universidad de La Salle.',
      link:
        'https://ciencia.lasalle.edu.co/cgi/viewcontent.cgi?article=1278&context=zootecnia ',
    },
    {
      referencia: 'Compuagro. (2021). <em>¿Qué es interherd?</em>',
      link: 'https://www.compuagro.net/Folleto%20largo%20de%20InterHerd.htm  ',
    },
    {
      referencia:
        'Contexto Ganadero. (2016). <em>¿Qué tipo de raza bovina debería tener de acuerdo al piso térmico?</em>',
      link:
        'https://www.contextoganadero.com/ganaderia-sostenible/que-tipo-de-raza-bovina-deberia-tener-de-acuerdo-al-piso-termico  ',
    },
    {
      referencia:
        'Corporación Colombiana de Investigación Agropecuaria - Agrosavia. (2019). <em>Guías de mejores prácticas en sistemas de producción de leche con base en pasturas para el trópico alto colombiano.</em> Agrosavia.',
      link: ' https://repository.agrosavia.co/handle/20.500.12324/35641  ',
    },
    {
      referencia:
        'Echavarría, A. (2010). <em>El ambiente climático en la producción porcina.</em> CIAP.',
      link:
        'http://www.ciap.org.ar/Sitio/Archivos/EL AMBIENTE CLIMATICO EN LA PRODUCCION PORCINA.pdf',
    },
    {
      referencia:
        'Educacion.navarra.es. (s. f.). <em>¿Qué es un plan de mejora?</em>',
      link:
        'https://www.educacion.navarra.es/documents/57308/57761/Que%20es_un_plan_de_mejora.pdf/c300e8bc-1606-40c0-8a20-22ce1895bc04 ',
    },
    {
      referencia:
        'Federación Nacional de Avicultores - Fenavi. (2019). <em>Aspectos productivos y administrativos en la industria avícola.</em> Fenavi. ',
      link:
        'https://fenavi.org/publicaciones-programa-tecnico/aspectos-productivos-y-administrativos-en-la-industria-avicola/  ',
    },
    {
      referencia:
        'Foro Empresarial Impulsa. (2019). <em>Plataformas para crear formularios en línea para tu negocio.</em>',
      link:
        'https://www.impulsapopular.com/tecnologia/plataformas-para-crear-formularios-en-linea-para-tu-negocio/  ',
    },
    {
      referencia:
        'Foro Empresarización y Competitividad Ganadera. (2013). <em>Costos y los indicadores de productividad en la ganadería colombiana.</em>',
      link:
        'https://es.slideshare.net/Fedegan/costos-e-indicadores-de-la-productividad-en-la-ganaderia-colombiana  ',
    },
    {
      referencia:
        'Gallegos, P., C., Lobato, C., P. (s. f.) <em>Cómo elaborar una conclusión.</em>',
      link:
        'http://comunicacionacademica.uc.cl/images/recursos/espanol/escritura/recurso_en_pdf_extenso/17_Como_elaborar_una_conclusion.pdf  ',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2014). Resolución 136 de 2020. Por la cual se adopta el Manual de Condiciones de Bienestar Animal propias de cada una de las especies de producción en el Sector Agropecuario para las especies équidas, porcinas, ovinas y caprinas.',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias/bienestar-animal/resol-136-por-la-cual-se-adopta-el-manual-de-c-2.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2014). Resolución 3651 Por medio del cual se establecen los requisitos para la certificación de granjas avícolas bioseguras de postura y/o levante y se dictan otras disposiciones.',
      link:
        'https://www.ica.gov.co/getattachment/b8cb4efd-a1b4-409e-a11d-c81b91f59025/2014R3651.aspx  ',
    },
    {
      referencia:
        'Instituto Interamericano de Cooperación para la Agricultura – IICA. (2015). <em>Ganado ovino, manual de buenas prácticas.</em> IICA.',
      link: 'http://repositorio.iica.int/handle/11324/2645',
    },
    {
      referencia:
        'Lombana H., y Moreno D. (2011). <em>Guía técnica de producción ovina y caprina.</em> Manejo y control sanitario. AGROSAVIA.',
      link: 'https://repository.agrosavia.co/handle/20.500.12324/13306  ',
    },
    {
      referencia:
        'Llano, P., A. (2021). <em>Cartilla de cunicultura.</em> Solla.',
      link:
        'https://www.solla.com/sites/default/files/productos/secciones/adjuntos/6_Manejo_0.pdf  ',
    },
    {
      referencia:
        'Pronavícola. (2013). <em>Plantilla pollo engorde.</em> Pronavícola.',
      link:
        'https://www.pronavicola.com/contenido/webinar/PlantillaPollo201607.pdf',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje SENA. (2010). <em>Producción estabulada de ovinos de carne y caprinos de leche.</em> SENA.',
      link: 'https://repositorio.sena.edu.co/handle/11404/7041',
    },
    {
      referencia:
        'Proaño, Gisbert y Pérez (2017). <em>Metodología para la elaboración de un plan de mejora. 3 Ciencias.</em>',
      link:
        'https://www.3ciencias.com/articulos/articulo/metodologia-elaborar-plan-mejora-continua/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Sánchez Suárez ',
          cargo: 'Experto Temático ',
          centro: 'Regional Tolima - Centro Agropecuario La Granja  ',
        },
        {
          nombre: 'Ángela María Zapata Guzmán ',
          cargo: 'Diseñadora Instruccional  ',
          centro: 'Ecosistema de Recursos Educativos Digitales RED ',
        },
        {
          nombre: 'Carolina Coca Salazar ',
          cargo: 'Metodóloga ',
          centro:
            'Regional Distrito Capital - Centro de Diseño y Metrología   ',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Asesor pedagógico ',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'José Gabriel Ortiz Abella ',
          cargo: 'Corrector de estilo ',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología  ',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador instruccional ',
          centro: 'Regional Tolima – Centro de Comercio y Servicios  ',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Metodóloga ',
          centro: 'Regional Tolima – Centro de Comercio y Servicios ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
