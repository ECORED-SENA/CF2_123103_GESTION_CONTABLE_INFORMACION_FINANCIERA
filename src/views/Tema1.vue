<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Información Contable

    <!-- BLOQUE 0 -->
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para empezar, es importante recordar que existen diferentes tipos de empresas que ofrecen productos y servicios con el fin de satisfacer necesidades de los usuarios; por tanto, deben implementar un sistema contable que permita la evaluación y análisis de la información para la toma de decisiones sobre inversión, rentabilidad y endeudamiento. En consecuencia, existen procesos contables y criterios que deben aplicarse para dar cumplimiento a las NIIF, satisfaciendo, de esta manera, las necesidades de los usuarios en cuanto a la generación de información confiable, comparable, compresible, verificable y oportuna (Cuaspa, 2013).
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Usuarios de la información contable y financiera

    p.mb-4.ajuste-espacios-movil Los usuarios son las personas interesadas en conocer la situación financiera de la empresa, entre ellos, encontramos los siguientes (Vilches, 2019):

    .row.mb-5
      .col-lg.p-0
        <ul class="fa-ul">
          <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Inversores, accionistas o propietarios.</li>
          <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Administradores.</li>
          <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Proveedores.</li>
          <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Clientes.</li>
          <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Colaboradores.</li>
          <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Entes de control.</li>
        </ul>
      .col-lg-auto
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 500px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5.ajuste-espacios-movil(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Campo de acción de la contabilidad o información contable

    p.mb-4.ajuste-espacios-movil De acuerdo con el tipo de empresa y/o campo de acción, la contabilidad se clasifica de la siguiente manera (Vilches, 2019):

    TabsC.color-acento-contenido(data-aos="fade-up")
      .py-3.py-md-4(titulo="Contabilidad pública")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img4.svg', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0.ajuste-text-bloque0
            h4.txt--purpura.mb-4 Contabilidad pública
            p Se ocupa de las transacciones realizadas por entidades del Estado y, por ende, se rigen por las normas que expida la Contaduría General de la Nación.
      .py-3.py-md-4(titulo="Contabilidad de servicios")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img5.svg', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0.ajuste-text-bloque0
            h4.txt--purpura.mb-4 Contabilidad de servicios
            p Se ocupa de las actividades realizadas por empresas que prestan servicios, con el fin de satisfacer necesidades.
      .py-3.py-md-4(titulo="Contabilidad comercial")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img6.svg', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0.ajuste-text-bloque0
            h4.txt--purpura.mb-4 Contabilidad comercial
            p Se ocupa de las actividades realizadas por empresas que se dedican a la compra y venta de productos.
      .py-3.py-md-4(titulo="Contabilidad de costos")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img7.svg', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0.ajuste-text-bloque0
            h4.txt--purpura.mb-4 Contabilidad de costos
            p Se ocupa de las actividades realizadas por empresas industriales, que se encargan de transformar materia prima en producto terminado.
      .py-3.py-md-4(titulo="Contabilidad gerencial")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img8.svg', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0.ajuste-text-bloque0
            h4.txt--purpura.mb-4 Contabilidad gerencial
            p Sirve como apoyo o herramienta para el área administrativa de una empresa, con el fin de aportar a la adecuada toma de decisiones y generación de acciones que permitan la evaluación de desempeño y cumplimiento de objetivos.

    Separador
    <!-- BLOQUE 1 -->
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Historia, cualidades y objetivos de la información contable
    
    .row.mb-5.align-items-center
      .col-lg
        p En el año 6000 a.n.e., con el surgimiento de la agricultura, la ganadería y el comercio surgió la necesidad de contabilizar las transacciones de estas actividades. Se tiene evidencia de trueque en el templo rojo de Babilonia hacia el año 5.200 años a.n.e. Las primeras civilizaciones conocían operaciones aritméticas rudimentarias, llegando a crear elementos auxiliares para contar, sumar y restar, utilizando medios muy elementales inicialmente. Luego, desarrollarían medios y prácticas más avanzadas como la creación de monedas como único instrumento de intercambio. También, hay evidencia de que en Babilonia se realizaron registros de ingresos y gastos 3.600 años a.n.e. En la época del imperio egipcio, 2.550 años a.n.e., se sabe de anotaciones contables de operaciones mercantiles del imperio.
      .col-lg-auto
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img9.png" style="max-width: 500px").m-auto
    
    .row.fondo-slider.justify-content-center.mb-5.ajuste-espacios-movil
      .ajuste-slider
        .tarjeta.tarjeta--gris.p-4(data-aos="fade-up")
          LineaTiempoC.color-acento-contenido(text-small)
            .row(titulo="Edad Media").align-items-center
              .col-md-6.mb-4.mb-md-0.ajuste-text-bloque1
                h4.mb-3 Edad Media
                p Con el inicio del imperio Romano se aprobaron asientos realizados en libros de contabilidad. Fueron los banqueros romanos quienes perfeccionaron las técnicas contables, con el fin de controlar los valores que otorgaban al ejército para sus conquistas territoriales.
              .col-md-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema1/img10.svg', alt="" style="max-width: 400px").m-auto

            .row(titulo="Siglos VII - VIII").align-items-center
              .col-lg-6.mb-4.mb-md-0.ajuste-text-bloque1
                h4.mb-3 Siglos VII - VIII
                p En Italia durante los Siglos VII y VIII, principalmente en Venecia, la actividad contable se convirtió en una actividad de mucho prestigio, puesto que, por mandato de los señores feudales, los libros eran llevados por escribanos. Las ciudades de Venecia, Génova y Florencia fueron el epicentro del comercio, la industria y la banca, lo que les permitió desarrollar técnicas de contabilidad.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema1/img11.svg', alt="" style="max-width: 400px").m-auto

            .row(titulo="1494").align-items-center
              .col-lg-6.mb-4.mb-md-0.ajuste-text-bloque1
                h4.mb-3 1494
                p El monje franciscano de Italia, Luca Pacioli, a quien se le llama el “padre” de la contabilidad, propuso el concepto de la partida doble para llevar cuentas de gastos, ingresos, activos, y pasivos, registrando las transacciones cronológicamente y detalladas.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema1/img12.svg', alt="" style="max-width: 400px").m-auto
            
            .row(titulo="1988").align-items-center
              .col-lg-6.mb-4.mb-md-0.ajuste-text-bloque1
                h4.mb-3 1988
                p En Estados Unidos, William Burroughs patentó la primera sumadora de teclas, y en 1920 el gobierno, la banca y las bolsas de valores comenzaron a exigir estados financieros certificados por contadores públicos independientes.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema1/img13.svg', alt="" style="max-width: 400px").m-auto

            .row(titulo="1993").align-items-center
              .col-lg-6.mb-4.mb-md-0.ajuste-text-bloque1
                h4.mb-3 1993
                p En Latinoamérica, después de las independencias de los Estados, se continuó usando por mucho tiempo las técnicas contables traídas desde España. En Colombia, en 1993 se reglamentó la contabilidad en general y se expidió a partir del decreto 2649 el compendio de principios o normas de contabilidad generalmente aceptadas (PCGA). Este nombre surge de la traducción del inglés de las NIC (Normas Internacionales de Contabilidad). Con la ley 2420 del 2015 se adoptaron en Colombia, al igual que en el resto de los países, las Normas Internacionales de Información Financiera (NIIF) para dar uniformidad a la presentación de la información financiera de las entidades que cotizan en bolsa; para ser entendida sin importar la nacionalidad de quien utiliza dicha información o la interpreta.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema1/img14.svg', alt="" style="max-width: 400px").m-auto
    
    .row.m-0.mb-5.ajuste-espacios-movil(data-aos="fade-up")
      .caja-text-img-nota
        .col-lg-auto.align-self-center
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/tema1/img15.svg" style="width: 85px").m-auto
        .col-lg
          p.mb-0 De tal suerte que, la contabilidad ha existido desde la antigüedad, cuando se desarrollaban diversas actividades comerciales y financieras. Es un área que ha ido evolucionando notoriamente, convirtiéndose en una herramienta administrativa y de control de suma importancia en el contexto empresarial. Cabe resaltar que hoy en día se utilizan <em>softwares</em> que facilitan y agilizan las actividades contables derivadas de esta profesión. Estos sistemas se parametrizan conforme con los objetivos y requerimientos de cada empresa; aplicando, de esta manera, las normas contables, financieras, tributarias y laborales vigentes.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Objetivos de la información contable
    
    p.mb-4.ajuste-espacios-movil Según el Consejo de Normas Internacionales de Contabilidad (2018), el objetivo de la información financiera es:

    .row.mb-5.align-items-center
      .col-lg-auto
        figure(data-aos="fade-up").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img16.svg" style="max-width: 400px").m-auto
      .col-lg
        .bloque-texto-c.p-4.mb-2(data-aos="fade-left")
          i.fas.fa-quote-right
          h5.mb-4 Proporcionar información financiera sobre la entidad que informa que sea útil a los inversores, prestamistas y otros acreedores existentes y potenciales para tomar decisiones sobre el suministro de recursos a la entidad. Esas decisiones conllevan, comprar, vender o mantener patrimonio e instrumentos de deuda, y proporcionar o liquidar préstamos y otras formas de crédito.
          span (Consejo de Normas Internacionales de Contabilidad 2018 p. 10).
        p.ajuste-espacios-movil-1 Con el fin de ampliar sus conocimientos sobre la temática, por favor revise el Marco Conceptual para la Información Financiera (Consejo de Normas Internacionales de Contabilidad, 2018), a través del siguiente enlace:
        a.anexo.ajuste__anexo.m-2(:href="('http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/enmiendas-iasb-emitidas-en-2018/5-c-marco-conceptual-para-la')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo</strong>. Marco Conceptual para la Información Financiera
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Cualidades de la información contable
    
    .row.mb-5.align-items-center.ajuste-espacios-movil
      .col-lg
        p Las cualidades de la información contable hacen referencia a las características que debe tener la contabilidad, con el fin de ser útil para los usuarios; entre ellos, los inversores, pues su objetivo radica en obtener información comparable, verificable y oportuna para la toma de decisiones.
        p Según el Consejo de Normas Internacionales de Contabilidad (2018), las características cualitativas fundamentales y de mejora son:
      .col-lg-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img17.svg" style="max-width: 450px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Características cualitativas fundamentales
    
    p.mb-5.ajuste-espacios-movil A continuación, se presentan las características cualitativas fundamentales de la información contable, destacando dos aspectos centrales:

    .row.mb-5.ajuste-espacios-movil(data-aos="fade-up")
      .col-lg-6.caja-color-1
        .row.mb-4
          .col-auto
            figure(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img18.svg" style="max-width: 100px").m-auto
          .col.ajuste-h4
            h4.mb-0 Relevancia
        p.white.m-0 También denominado materialidad o importancia relativa, hace referencia al reconocimiento o no de un hecho económico, el cual puede afectar significativamente la toma de decisiones.
      .col-lg-6.caja-color-2
        .row.mb-4
          .col-auto
            figure(data-aos="fade-left")
              img(src="@/assets/curso/tema1/img19.svg" style="max-width: 100px").m-auto
          .col.ajuste-h4
            h4.mb-0 Representación fiel
        p.m-0 La información debe estar completa de acuerdo con los hechos económicos presentados. Así mismo, debe ser neutral y objetiva, evitando los sesgos en la información presentada y garantizando que esté libre de error.
    
    .caja-titulos-tercer-nivel.mb-5.ajuste-espacios-movil(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Características de mejora
    
    p.mb-5.ajuste-espacios-movil A continuación, se presentan las características de mejora de la información contable: 

    TabsA.color-acento-botones.mb-4.ajuste-espacios-movil(data-aos="fade-up")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Comparabilidad")
        .row.align-items-center
          .col
            h4 Comparabilidad
            p.m-0 Se refiere a la comparación que se realiza con otras entidades con información similar o con la misma entidad en diferentes periodos.
          .col-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img20.svg" style="max-width: 172px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Verificabilidad")
        .row.align-items-center
          .col
            h4 Verificabilidad
            p.m-0 Es la representación fiel de los hechos económicos, a partir de la revisión del registro de las operaciones y los procesos mediante la observación directa.
          .col-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img21.svg" style="max-width: 172px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Oportunidad")
        .row.align-items-center
          .col
            h4 Oportunidad
            p.m-0 Consiste en obtener la información en el momento adecuado para la toma de decisiones, por ende, debe estar actualizada.
          .col-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img22.svg" style="max-width: 172px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Comprensibilidad")
        .row.align-items-center
          .col
            h4 Comprensibilidad
            p.m-0 La información debe ser clara y concisa, garantizando ser comprensible para los diferentes usuarios.
          .col-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img23.svg" style="max-width: 172px").m-auto

    p Para que la información sea útil es importante dar aplicabilidad a las características fundamentales y de mejora simultáneamente, esto garantiza que la información cumpla con los estándares exigidos y contribuya con la toma decisiones.
    
    Separador
    <!-- BLOQUE 2 -->
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Marco conceptual bajo Estándares Internacionales

    p.mb-4 El Consejo de Normas Internacionales de Contabilidad (2018), establece los criterios que se tienen en cuenta para el registro de los hechos económicos y plantea los propósitos del Marco Conceptual para la Información Financiera:

    .row.mb-4.align-items-center
      .col-lg
        .col.ajuste-caja-text-bloque2.mb-2(data-aos="fade-right")
          <ul class="fa-ul">
            <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Ayudar al Consejo de Normas Internacionales de Contabilidad (Consejo) a desarrollar Normas NIIF (Normas) que estén basadas en conceptos congruentes (p. 8). </li>
          </ul>
        .col.ajuste-caja-text-bloque2.mb-2(data-aos="fade-right")
          <ul class="fa-ul">
            <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Asistir a los preparadores para desarrollar políticas contables congruentes cuando no es aplicable ninguna Norma a una transacción específica u otro suceso, o cuando una Norma permite una opción de política contable (p. 8).</li>
          </ul>
        .col.ajuste-caja-text-bloque2.mb-2(data-aos="fade-right")
          <ul class="fa-ul">
            <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Ayudar a todas las partes a comprender e interpretar las Normas (p.8).</li>
          </ul>
      .col-lg-auto
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img24.png', alt="" style="max-width: 400px").m-auto
    
    p.mb-5 El Marco Conceptual para la Información Financiera fue expedido inicialmente en 1989 por el <strong>Comité de Normas Internacionales de Contabilidad (IASC)</strong>. Posteriormente, fue ampliado por la junta internacional de normas de contabilidad (IASB) y publicado en septiembre de 2010, donde permanece el documento inicial y se registran otras novedades. Fue revisado, modificado y emitido una vez más el 29 de marzo de 2018, con el fin de realizar mejoras al documento en cuanto a conceptos de reconocimiento, medición, presentación y revelación en la aplicación contable. Estas últimas disposiciones comenzaron a implementarse a partir del 1 de enero de 2020.
    
    .row.mb-5.ajuste-espacios-movil
      .col-lg-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src='@/assets/curso/tema1/img25.svg', alt="" style="max-width: 450px").m-auto
      .col-lg
        p.mb-0.ajuste-caja-text-bloque2-1(data-aos="fade-left") La relación entre objetivos, características y elementos de los estados financieros de propósito general es importante para la generación de información comparativa que contribuya con la toma de decisiones <strong>(Consejo de Normas Internacionales de Contabilidad, 2018)</strong>.
        p Entre los estados financieros se encuentran:
        <ul class="fa-ul">
          <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Estado de situación financiera.</li>
          <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Estado de resultados integral.</li>
          <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Estado de cambio en el patrimonio.</li>
          <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Estado de flujos de efectivo.</li>
          <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Notas a los estados financieros.</li>
        </ul>
    
    .caja-titulos-tercer-nivel.mb-5.ajuste-espacios-movil(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Elementos de los estados financieros
    
    p.mb-4.ajuste-espacios-movil El Estado de situación financiera refleja la información de los elementos de activo, pasivo y patrimonio, los cuales se detallan en el <strong>Marco Conceptual de Información Financiera y en la Norma Internacional de Contabilidad (NIC)</strong>, de la siguiente manera:

    .row.mb-5
      .col-lg-4.espacio__cajas_movil
        .ajuste-caja-text-bloque2-2.h-100(data-aos="flip-left")
          .col
            figure.mb-3
              img(src='@/assets/curso/tema1/img26.svg', alt="" style="max-width: 95px").m-auto
            h4.text-center.mb-3 Definición de activo
            p.mb-0 Es un recurso económico presente controlado por la entidad como resultado de sucesos pasados, que tiene el potencial de producir beneficios económicos.
      .col-lg-4.espacio__cajas_movil
        .ajuste-caja-text-bloque2-2.h-100(data-aos="flip-left")
          .col
            figure.mb-3
              img(src='@/assets/curso/tema1/img27.svg', alt="" style="max-width: 95px").m-auto
            h4.text-center.mb-3 Definición de pasivo
            p.mb-0 Es una obligación presente de la entidad de transferir un recurso económico como resultado de sucesos pasados.
      .col-lg-4
        .ajuste-caja-text-bloque2-2.h-100(data-aos="flip-left")
          .col
            figure.img-flout.mb-3
              img(src='@/assets/curso/tema1/img28.svg', alt="" style="max-width: 95px").m-auto
            h4.text-center.mb-3 Definición de patrimonio
            p.mb-0 Es la parte residual de los activos de la entidad, una vez deducidos todos sus pasivos.
    
    .row.align-items-center
      .col-lg-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src='@/assets/curso/tema1/img29.svg', alt="" style="max-width: 400px").m-auto
      .col-lg
        p En el estado de resultados integral, se encuentran los elementos de ingresos y gastos <strong>(Consejo de Normas Internacionales de Contabilidad, 2018)</strong>:
        .row.m-0.espacio__PDF_bloque2.ajuste-espacios-movil
          .caja-text-img-nota-1(data-aos="fade-left")
            .col-lg-auto.align-self-center
              figure(data-aos="fade-up").d-none.d-xl-block
                img(src="@/assets/curso/tema1/img30.svg" style="width: 85px").m-auto
            .col-lg
              p.mb-0 <strong>Definición de ingresos</strong>: son incrementos en los activos o disminuciones en los pasivos que dan lugar a incrementos en el patrimonio, distintos de los relacionados con aportaciones de los tenedores de derechos sobre el patrimonio.
          .caja-text-img-nota-1.mb-3(data-aos="fade-left")
            .col-lg-auto.align-self-center
              figure(data-aos="fade-up").d-none.d-xl-block
                img(src="@/assets/curso/tema1/img31.svg" style="width: 85px").m-auto
            .col-lg
              p.mb-0 <strong>Definición de gastos</strong>: disminuciones en los activos o incrementos en los pasivos que dan lugar a disminuciones en el patrimonio, distintos de los relacionados con distribuciones de los tenedores de derechos sobre el patrimonio.
        p Con el fin de ampliar sus conocimientos sobre la temática, por favor revise el Marco Conceptual para la Información Financiera (Consejo de Normas Internacionales de Contabilidad, 2018) a través del siguiente enlace: 
        a.anexo.ajuste__anexo.m-2(:href="('http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/enmiendas-iasb-emitidas-en-2018/5-c-marco-conceptual-para-la')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo</strong>. Marco Conceptual para la Información Financiera

    Separador
    <!-- BLOQUE 3 -->
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Reconocimiento, medición, presentación, revelación y baja de cuentas de los elementos de los estados financieros
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-up")
      .bloque-texto-g__img.ajuste___img__1
        figure
          img(src="@/assets/curso/tema1/img32.svg", alt="" style="max-width: 270px")
      .bloque-texto-g__texto.p-4
        p.mb-0 Se relacionan los criterios de reconocimiento de los elementos de los estados financieros, teniendo en cuenta, para su registro, las cualidades fundamentales de materialidad relativa y representación fiel; aunado a ello, expresa la baja de cuentas cuando los elementos de los estados financieros no cumplen con la definición establecida; por lo tanto, se realiza una eliminación parcial o total de dichas cuentas (Consejo de Normas Internacionales de Contabilidad, 2018).
    
    .row.fondo-tema1.mb-4
      .col-lg-auto
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
          .col
            h3 Reconocimiento
      .row.align-items-center.mb-5.ajuste-espacios-movil
        .col-lg
          p.mb-0.caja-text-bloque2(data-aos="fade-right") Se refiera al proceso de registrar los hechos económicos generados en el transcurso normal de las operaciones de la empresa, los cuales se verán reflejados en los estados financieros una vez se verifica que cumplan con el concepto de sus elementos.
          p.mb-0 Cabe resaltar que un activo, pasivo o patrimonio, para ser reconocido en el estado de situación financiera, debe cumplir con su respectiva definición, atendiendo a las características que se establecen. De igual forma, los ingresos y gastos se reconocerán en el estado de resultados integral solamente si cumplen con la definición respectiva. En consecuencia, el reconocimiento de un activo y un pasivo genera simultáneamente el reconocimiento de un ingreso y un gasto, teniendo en cuenta la transacción realizada. Esto es denominado ocasionalmente correlacional de costos e ingresos; por ejemplo, suele presentarse en la venta de bienes y/o servicios donde se reconoce el ingreso por actividades ordinarias y a su vez el activo (efectivo).
        .col-lg-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/tema1/img34.svg" style="max-width: 400px").m-auto
      .col-lg-auto
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
          .col
            h3 Baja en cuentas
      p.mb-0.ajuste-espacios-movil Cuando se habla de baja, en cuentas de un activo o un pasivo, se hace referencia a la eliminación total o parcial de este elemento a partir de dos situaciones posibles:

    .row.align-items-center.mb-5.ajuste-espacios-movil
      .col-lg-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img35.svg" style="max-width: 400px").m-auto
      .col-lg.m-0
        <ul class="fa-ul">
          <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Que la empresa pierda el control del activo reconocido.</li>
          <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Que la empresa deja de tener una obligación presente.</li>
        </ul>
        p.mb-0.ajuste-caja-text-bloque2-3(data-aos="fade-left") El principal objetivo de dar de baja las cuentas es reflejar la realidad económica de la empresa, donde se registran los elementos que cumplan los criterios de reconocimiento y medición, con el fin de que sean reflejados en los estados financieros y, en consecuencia, se genere información útil, relevante y oportuna.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Medición
    
    p.mb-5.ajuste-espacios-movil A continuación, se describen las bases, características, factores y técnicas para tener en cuenta al momento de realizar la medición de un elemento de los estados financieros (Consejo de Normas Internacionales de Contabilidad, 2018).

    .row.mb-4
      .col.ajuste-h4-bloque2
        h4.mb-0 Bases de medición

    p.mb-4 La base de medición es la cuantificación en términos monetarios de los elementos de los estados financieros. De acuerdo con las políticas y lineamientos normativos se presentan diferentes bases, por ello, es importante seleccionar la base de medición más adecuada para presentar la información financiera atendiendo a los estándares internacionales (Consejo de Normas Internacionales de Contabilidad, 2018):
    
    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-lg-auto
          figure(data-aos="fade-up").d-none.d-xl-block
            img(src="@/assets/curso/tema1/img36.png", alt="" style="width: 370px").m-auto
        .col-lg(data-aos="fade-left")
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Costo histórico").ajuste-cajaAcordion
              p Es el precio de transacción, el valor de adquisición, de compra o creación de un activo. Es el valor de la contraprestación recibida al obtener el pasivo.
            .row(titulo="Valor corriente").ajuste-cajaAcordion
              p "Las mediciones del valor corriente proporcionan información monetaria sobre activos, pasivos, e ingresos y gastos relacionados, usando información actualizada para reflejar las condiciones en la fecha de medición. Debido a la continua actualización, los valores corrientes de activos y pasivos reflejan los cambios, desde la fecha de medición anterior, en las estimaciones de flujos de efectivo y otros factores reflejados en los valores corrientes” (Consejo de Normas Internacionales de Contabilidad, 2018. p. 44).       
            .row(titulo="Valor razonable").ajuste-cajaAcordion
              p "Valor razonable es el precio que se recibiría por vender un activo o que se pagaría por transferir un pasivo en una transacción ordenada entre participantes de mercado, en la fecha de la medición” (Consejo de Normas Internacionales de Contabilidad, 2018. p. 44).
            .row(titulo="Valor en uso y valor de cumplimiento").ajuste-cajaAcordion
              p "El valor en uso es el valor presente de los flujos de efectivo, o de otros beneficios económicos, que una entidad espera obtener del uso de un activo y de su disposición final. El valor de cumplimiento es el valor presente de los flujos de efectivo o de otros beneficios económicos, que una entidad espera verse obligada a transferir a medida que satisface un pasivo” (Consejo de Normas Internacionales de Contabilidad, 2018. p. 45).
            .row(titulo="Costo corriente").ajuste-cajaAcordion
              p "El costo corriente de un activo es el costo de un activo equivalente en la fecha de medición, que comprende la contraprestación que se pagaría en la fecha de medición más los costos de transacción en los que se incurriría en esa fecha” (Consejo de Normas Internacionales de Contabilidad, 2018. p. 45).
    
    .row.mb-5.justify-content-center.ajuste-espacios-movil.m-0(data-aos="fade-up")
      .caja-nota-bloque2
        .col-lg-auto
          p.mb-4 Con el fin de ampliar sus conocimientos sobre la temática, por favor revise el Marco Conceptual para la Información Financiera (Consejo de Normas Internacionales de Contabilidad, 2018) a través del siguiente enlace:
          a.anexo.ajuste__anexo.m-2(:href="('http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/enmiendas-iasb-emitidas-en-2018/5-c-marco-conceptual-para-la')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <strong>Anexo</strong>. Marco Conceptual para la Información Financiera

    .row.align-items-center.ajuste-espacios-movil
      .col-lg-auto
        figure(data-aos="fade-up").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img37.png" style="max-width: 400px").m-auto
      .col-lg
        p Para seleccionar las bases de medición, que se relacionarán en el Manual de políticas contables, es fundamental analizar el tipo de empresa y su entorno, tendiendo en cuenta las circunstancias y eventos que se generen para determinar lo más adecuado para la organización. Aunado a ello, se tiene en cuenta el concepto y características de los elementos de los estados financieros, las cualidades fundamentales y de mejora.
        p Es de suma importancia presentar información financiera confiable, oportuna, comprensible y comparable, con el fin de facilitar la toma de decisiones a la gerencia:
        .bloque-texto-c.p-4.mb-2(data-aos="fade-left")
          i.fas.fa-quote-right
          h5.mb-4 La comunicación efectiva de la información de los estados financieros requiere: (a) centrarse en los objetivos y principios de presentación e información a revelar en lugar de centrarse en reglas; (b) clasificar la información de forma que agrupe las partidas similares juntas y las diferentes de forma separada; y (c) agregar información de forma que no se ensombrezca con detalles innecesarios o agregación excesiva.
          span (Consejo de Normas Internacionales de Contabilidad, 2018).
    
    Separador
    <!-- BLOQUE 4 -->
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Política contable
    
    p.mb-4 En el siguiente video se abordarán conceptos clave relacionados con las organizaciones. Se definirá qué es una empresa y cuáles son sus elementos esenciales, así como las clasificaciones, naturaleza y estructura que determinan su funcionamiento y desempeño.

    figure.mb-5(data-aos="fade-up")
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/NhsdLCBUev4" title="Política Contable" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    p.mb-5.ajuste-espacios-movil Para diseñar las políticas contables es importante identificar el grupo de presentación de información financiera: Grupo 1-NIIF plenas, Grupo 2-NIIF Pymes, Grupo 3-NIF Microempresas. Según los lineamientos del Decreto Único Reglamentario -DUR- 2420 de 2015, el grupo 1, posee las siguientes características:

    .row.mb-5.align-items-center.ajuste-espacios-movil
      .col-lg-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img38.svg" style="max-width: 400px").m-auto
      .col-lg
        ol.lista-ol--cuadro(data-aos="fade-left")
          li 
            .lista-ol--cuadro__vineta
              span a
            | Emisores de valores. Entidades y negocios fiduciarios que tengan valores inscritos en el Registro Nacional de Valores y Emisores - RNVE en los términos del artículo 1.1. 1. 1. 1. del Decreto 2555 de 2010.
        ol.lista-ol--cuadro(data-aos="fade-left")
          li 
            .lista-ol--cuadro__vineta
              span b
            | Entidades y negocios de interés público.
        ol.lista-ol--cuadro(data-aos="fade-left")
          li
            .lista-ol--cuadro__vineta
              span c
            | Entidades que no estén en los literales anteriores, que cuenten con una planta de personal mayor a 200 trabajadores o con activos totales superiores a 30.000 salarios mínimos mensuales legales vigentes (SMMLV) y que, adicionalmente, cumplan con cualquiera de los siguientes parámetros:
          <ul class="fa-ul ajuste-ul-bloque4">
            <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Ser subordinada o sucursal de una compañía extranjera que aplique NIIF plenas.</li>
            <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Ser subordinada o matriz de una compañía nacional que deba aplicar NIIF plenas.</li>
            <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Ser matriz, asociada o negocio conjunto de una o más entidades extranjeras que apliquen NIIF plenas.</li>
            <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Realizar importaciones o exportaciones que representen más del 50% de las compras o de las ventas respectivamente.</li>
          </ul>
    
    p.mb-5.ajuste-espacios-movil Para elaborar las políticas del grupo 1 de empresas se tienen en cuenta los lineamientos estipulados en la Norma Internacional de Contabilidad (NIC 8), la cual expresa:

    TabsB.color-acento-contenido.mb-5.ajuste-espacios-movil(data-aos="fade-up")
      .py-4.py-md-5(titulo="Objetivo" :icono="require('@/assets/curso/tema1/img39.svg')")
        .row.align-items-center
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema1/img41.png', alt="" style="max-width: 400px").m-auto
          .col-xl-6.ajuste__movil_bloque4
            h4 Objetivo
            ol.lista-ol--cuadro1.mb-4
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | El objetivo de esta norma es prescribir los criterios para seleccionar y modificar las políticas contables, así como el tratamiento contable y la información a revelar acerca de los cambios en las políticas contables, de los cambios en las estimaciones contables y de la corrección de errores. La Norma trata de realzar la relevancia y fiabilidad de los estados financieros de una entidad, así como la comparabilidad con los estados financieros emitidos por ésta en periodos anteriores, y con los elaborados por otras entidades. 
            ol.lista-ol--cuadro1
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Los requerimientos de información a revelar relativos a políticas contables, excepto los referentes a cambios en las políticas contables han sido establecidos en la Norma Internacional de Contabilidad (NIC 1).  
      .py-4.py-md-5(titulo="Alcance" :icono="require('@/assets/curso/tema1/img40.svg')")
        .row
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema1/img42.png', alt="" style="max-width: 400px").m-auto
          .col-xl-6.ajuste__movil_bloque4
            h4 Alcance
            ol.lista-ol--cuadro1.mb-4
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Esta norma se aplicará en la selección y aplicación de políticas contables, así como en la contabilización de los cambios en estas, los cambios en las estimaciones contables y en la corrección de errores de periodos anteriores.  
            ol.lista-ol--cuadro1
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | El efecto impositivo de la corrección de los errores de periodos anteriores, así como de los ajustes retroactivos efectuados al realizar cambios en las políticas contables se contabilizará de acuerdo con la Norma Internacional de Contabilidad (NIC 12), y se revelará la información requerida por esta norma.
      
    .row.mb-5.justify-content-center.ajuste-espacios-movil.m-0(data-aos="fade-up")
      .caja-nota-bloque2.ajuste__color
        .col-lg-auto
          p.mb-4 Con el fin de ampliar sus conocimientos sobre la temática, por favor revise la Norma Internacional de Contabilidad -NIC 8- (Consejo Técnico de la Contaduría Pública -CTCP-, 2010), a través del siguiente enlace:
          a.anexo.ajuste__anexo.m-2(:href="('http://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534369239-2962')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p <strong>Anexo</strong>. Norma Internacional de Contabilidad 8

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Elementos
    
    p.mb-5.ajuste-espacios-movil Para elaborar las políticas de la empresa es importante tener en cuenta:

    .row.fondo-tema1-2.justify-content-center.mb-5
      SlyderF(columnas="col-lg-6 col-xl-4").mb-5(data-aos="fade-up")
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/img43.svg' style="max-width: 90px").m-auto
          p Identificar el direccionamiento estratégico de la empresa: misión, visión, políticas, objetivos, principios, etc.
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/img44.svg' style="max-width: 90px").m-auto
          p Analizar el entorno en el cual se desenvuelve y, de esta manera, determinar el tipo de transacciones y la importancia relativa.
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/img45.svg' style="max-width: 90px").m-auto
          p Conocer e interpretar las Normas Internacionales de Información Financiera. De acuerdo con el grupo se aplicarán NIIF plenas, NIIF PYMES y microempresas.
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/img46.svg' style="max-width: 90px").m-auto
          p Establecer las bases de reconocimiento, medición, presentación y revelación de los estados financieros, teniendo en cuenta los estándares internacionales y la dinámica del negocio.
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/img47.svg' style="max-width: 90px").m-auto
          p Poseer el compendio de los estados financieros de propósito general.
            
      p.mb-5 Una vez se tiene claridad de la información, es importante iniciar con el diseño del manual de políticas contables. Para ello, se relacionan los siguientes elementos (<em>Warren, Reeves</em> y <em>Duchac</em>, 2016; Santos-Cid, 2018; Vilches, 2019; Angulo, 2018):

      .row.align-items-center
        .col-lg-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/tema1/img49.svg", alt="" style="max-width: 300px").m-auto
        .col-lg
          <ul class="fa-ul">
            <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Información de la empresa: se presenta la reseña histórica, direccionamiento estratégico, objeto social, proveedores, clientes, recursos.</li>
            <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Marco normativo aplicable.</li>
            <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Identificación y análisis de los requisitos del grupo de presentación de información financiera.</li>
            <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Importancia del diseño e implementación.</li>
            <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Responsabilidades del cargo, de quien prepara el manual de políticas contables.</li>
            <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Definiciones.</li>
            <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Objetivo del manual.</li>
            <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Alcance.</li>
            <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Análisis de las características fundamentales y de mejora.</li>
            <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Definición de los elementos y cuentas de los elementos de los estados financieros.</li>
            <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Reconocimiento de las cuentas de activo, pasivo, patrimonio, ingresos y gastos. Es importante desarrollarlo detalladamente, siendo descriptivo en las bases que se establecen de acuerdo con lo estipulado en la norma internacional, desagregando cada una de las cuentas.</li>
            <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Medición inicial y posterior de cada una de las cuentas pertenecientes a los elementos de los estados financieros.</li>
            <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Presentación y revelación de los estados financieros.</li>
          </ul>

    .row.m-0.ajuste-espacios-movil-2.caja-text-img-nota.ajuste___color(data-aos="fade-right")
      .col-xl-auto.align-self-center
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema1/img50.svg" style="width: 100px").m-auto
      .col-xl-9
        h4.mb-0 Normograma actualizado de las obligaciones del comerciante y funciones de las Cámaras de Comercio en Colombia 
        p.mb-0 Se invita a leer este documento, donde se resumen las normas clave sobre las obligaciones legales de los comerciantes y las funciones de las Cámaras de Comercio en Colombia. Ofrece explicaciones claras y útiles para facilitar el cumplimiento normativo. Ideal para empresarios, estudiantes y profesionales del derecho comercial.
      .col-xl-1.align-self-center
        a.boton.color-acento-botones.ajuste___boton.mb-4(:href="obtenerLink('/downloads/Anexo_Normograma_de_comerciantes_y_camaras_de_comercio_Colombia.pdf')" target="_blank")
          span Descargar
          i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
