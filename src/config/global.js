export default {
  global: {
    Name: 'Registro devengos contables',
    Description:
      'En el marco de la globalización, donde se plantean nuevos objetivos empresariales, surge la necesidad de mantener un sistema contable comprensible, oportuno y confiable, que contribuya con la adecuada toma de decisiones por parte de la administración.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
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
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Información Contable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Historia, cualidades y objetivos de la información contable',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Marco conceptual bajo Estándares Internacionales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Reconocimiento, medición, presentación, revelación y baja de cuentas de los elementos de los estados financieros',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Política contable',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos contables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Hecho contable: concepto, clasificación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Cuenta: concepto y clasificación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Partida doble',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Ecuación contable',
            hash: 't_2_4',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/123101_CF02_DU.zip',
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
      tema: 'Política contable PPYE',
      referencia:
        'Congreso de Colombia. (1971). Decreto 410 de 1971: Por el cual se expide el Código de Comercio. Diario Oficial No. 33.339.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102',
    },
    {
      tema: 'Compra de propiedad, planta y equipo en moneda local y extranjera',
      referencia:
        'Congreso de Colombia. (1995). Ley 222 de 1995: Por la cual se modifica el Libro II del Código de Comercio. Diario Oficial No. 42.156.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6739',
    },
    {
      tema: 'Reconocimiento, medición, presentación y revelación',
      referencia:
        'Congreso de Colombia. (1996). Ley 256 de 1996: Por la cual se dictan normas sobre competencia desleal. Diario Oficial No. 42.792.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=38871',
    },
    {
      tema: 'Política contable de propiedades de inversión',
      referencia:
        'Congreso de Colombia. (1999). Ley 527 de 1999: Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos. Diario Oficial No. 43.673.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4276',
    },
  ],
  glosario: [
    {
      termino: 'Capital',
      significado:
        'Es el aporte de los socios, puede darse en aporte financieros o industrial.',
    },
    {
      termino: 'Costo histórico',
      significado: 'Es el valor de la transacción de la operación.',
    },
    {
      termino: 'Cuenta',
      significado:
        'Es el término usado en información financiera para registrar los hechos económicos de la empresa.',
    },
    {
      termino: 'Cuentas reales',
      significado:
        'Son las cuentas que conforman el estado de situación financiera, estas son: activo, pasivo y patrimonio.',
    },
    {
      termino: 'Cuentas de resultado',
      significado:
        'Son aquellas cuentas que reflejan el resultado del ejercicio, el cual puede ser una utilidad o perdida. Las cuentas son ingresos y gastos.',
    },
    {
      termino: 'Debe',
      significado: 'Significa registrar el valor monetario al lado izquierdo.',
    },
    {
      termino: 'Efectivo',
      significado:
        'Es el dinero que se encuentra en las cuentas de caja, Bancos e inversiones a corto plazo (90 días).',
    },
    {
      termino: 'Estado de situación financiera',
      significado:
        'Es un estado integrado por los elementos de activo, pasivo y patrimonio.',
    },
    {
      termino: 'Estado de resultados',
      significado:
        'Es un estado financiero compuesto por las cuentas de ingresos, gastos y costos que reflejan el resultado del ejercicio.',
    },
    {
      termino: 'Haber',
      significado: 'Corresponde al registro del precio al lado derecho.',
    },
    {
      termino: 'Partida doble',
      significado:
        'Es la igualdad de los registros del debe y en haber en el asiento contable, presentando un equilibrio.',
    },
    {
      termino: 'Patrimonio',
      significado: 'Es la diferencia presentada entre activo y pasivo.',
    },
    {
      termino: 'Políticas contables',
      significado:
        'Son las bases, regla y procedimientos aplicables por una empresa para presentar los estados financieros.',
    },
  ],
  referencias: [
    {
      referencia:
        'Angulo, U. (2018). <em>Contabilidad financiera, correlacionado con NIIF. Ediciones de la U</em>.',
      link: '',
    },
    {
      referencia:
        'Cuaspa, C. (2013). <em>Normas internacionales de información financiera convergencia a Colombia y aplicación a empresas de salud. Ediciones UNAL</em>.',
      link: '',
    },
    {
      referencia:
        'Decreto 2420 <em>de diciembre 14 de 2015 (2020, noviembre 05)</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      referencia:
        'IFRS Foundation (2019). <em>Taxonomía NIIF Ilustrada. IFRS Foundation Edition. Delaware: E.E.U.U</em>.',
      link: '',
    },
    {
      referencia:
        'CTCP, (2020, noviembre 05), <em>Marco conceptual para la Información Financiera</em>.',
      link:
        'http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/enmiendas-iasb-emitidas-en-2018/5-c-marco-conceptual-para-la',
    },
    {
      referencia: 'Norma Internacional de Contabilidad (NIC) 8, (2018) ',
      link:
        'http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534369239-2962',
    },
    {
      referencia:
        'Pérez, J. y Fol, R. (2019).<em> Manual de casos prácticos de ISR. Tax Editores</em>. ',
      link: '',
    },
    {
      referencia:
        'Santos-Cid, C. (2018). <em>Una mirada a la historia de la Contabilidad. Revista Cubana De Finanzas Y Precios, 2(1), 139-155</em>. ',
      link: '',
    },
    {
      referencia:
        'Tapia, C. y Jiménez, J. (2018) <em>Cómo entender finanzas sin ser financiero. Instituto Mexicano de Contadores Públicos</em>. ',
      link: '',
    },
    {
      referencia:
        'Vilches, R. (2019). <em>Apuntes de contabilidad básica. El Cid Editor</em>. ',
      link: '',
    },
    {
      referencia:
        '<em>Warren, C., Reeves, J. & Duchac, J.</em> (2016). Contabilidad financiera. Cengage Learning. México. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos ',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Patricia Mantilla Galvis',
          cargo: 'Experto temático',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Maryuri Agudelo Franco',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica. - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Zuleidy Maria Ruiz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Wilson Andrés Arenales Caceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodriguez Rodriguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Maria Carolina Tamayo',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Martinez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ludwyn Corzo',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}
