<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fundamentos contables
    
    p.mb-4 En los fundamentos contables, las políticas contables son esenciales para garantizar la claridad y transparencia de la información financiera, facilitando el análisis y toma de decisiones en la gestión empresarial.

    p.mb-4 A continuación: se presenta los fundamentos contables, resaltando la importancia de comprender conceptos clave como activo, pasivo, patrimonio, ingresos y gastos.
  
    figure(data-aos="fade-up")
      .video
       <iframe width="560" height="315" src="https://www.youtube.com/embed/lok_ojpOwcc" title="Fundamentos contables" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    Separador
    <!-- BLOQUE 1 -->
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Hecho contable: concepto, clasificación
    
    figure.mb-5
      img(src='@/assets/curso/tema2/img1.png', alt="").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Concepto

    .row.mb-5.align-items-center.ajuste-espacios-movil
      .col-lg
        p El hecho contable hace referencia a la transacción u operación realizada por la empresa que debe ser registrada de acuerdo con los criterios de reconocimiento y medición. Además, se deben tener en cuenta las políticas diseñadas por la entidad.
        p.mb-0.caja-text-bloque1(data-aos="fade-right") Esta parte es fundamental, aquí se tiene en cuenta si la transacción que se generó hace parte de un activo, pasivo, patrimonio, ingresos o gastos; de allí, la importancia de conocer la definición y características establecidas para su reconocimiento. De igual forma, se tienen en cuenta las bases de medición, las cuales se encuentran registradas en las políticas contables que fueron diseñadas conforme las directrices señaladas en la NIC 8 (CTCP, 2010).
      .col-lg-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema2/img2.png" style="max-width: 400px").m-auto
    
    .row.mb-5.align-items-center.ajuste-espacios-movil
      .col-lg-auto.ajuste-img-tall
        figure(data-aos="fade-right").d-none.d-xl-block 
          img(src="@/assets/curso/tema2/img3.png" style="max-width: 400px").m-auto
      .col-lg
        p Se presenta con frecuencia la confusión entre una cuenta del activo con una cuenta del patrimonio o un pasivo con un gasto. Por lo anterior, es muy importante analizar los conceptos y, de esta manera, determinar su clasificación de acuerdo con los elementos de los estados financieros, seguidamente, registrarlos en la contabilidad. Cabe resaltar, que un error en la contabilización de estos hechos contables genera información no confiable para la toma de decisiones y se infringen las cualidades de la información contable. Por tanto, cualquier error u omisión debe generar un ajuste contable, con el fin de emitir información confiable y oportuna. Debe recordarse que el registro se hace de forma cronológica, en el idioma castellano, utilizando la moneda funcional.
        p.mb-0 De acuerdo con lo anterior, se requiere de personal con suficiente experticia para llevar a cabo los procesos contables de forma óptima, garantizando, de esta manera, la representación fiel de las transacciones generadas. En consecuencia, se emitirán los estados financieros y respectivos análisis que permitan evaluar el desempeño de la entidad y, así mismo, se tomarán acciones para alcanzar los objetivos deseados.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Clasificación

    p.mb-5.ajuste-espacios-movil Una vez se ha realizado la clasificación de los elementos que intervienen en las transacciones generadas en la empresa, se realiza la contabilización a través de un asiento contable, los cuales se clasifican de la siguiente manera (Warren, Reeves y Duchac, 2016; Santos-Cid, 2018; Vilches, 2019; Angulo, 2018):

    .row.mb-4(data-aos="fade-right")
      .col.ajuste-h4-bloque2
        h4.mb-0 Asiento simple
    
    p.mb-4 Es cuando intervienen dos cuentas, una que se registra en el <strong>debe</strong> y la otra en el <strong>haber</strong>, dependiendo del tipo de operación y el elemento de los estados financieros que se haya clasificado. 

    .row.justify-content-center.mb-5.m-0
      .fondo-color1
        h4 Ejemplo:
        p Cuando se realiza una consignación bancaria, se utilizan dos cuentas del activo. Se debita la cuenta de banco, registrando el aumento y la cuenta de efectivo (caja), se acredita registrando la disminución, como se relaciona a continuación:
        .row.align-items-center
          .col-lg-auto
            figure(data-aos="fade-right").d-none.d-xl-block
              img(src="@/assets/curso/tema2/img4.png" style="max-width: 400px").m-auto
          .col-lg
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 1.
              span Registro contable de traslado de efectivo de bancos a caja
            .tabla-a.mb-4(data-aos="fade-up")
              table
                thead
                  tr
                    th.ajuste-border-tabla Cuenta
                    th.ajuste-border-tabla Debe
                    th Haber
                tbody
                  tr  
                    td.ajuste-border-tabla Bancos
                    td.ajuste-border-tabla.ajuste___right $1.000.000
                    td.ajuste___right -
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Caja
                    td.ajuste-border-tabla.ajuste___right -
                    td.ajuste___right $1.000.000
                  tr  
                    td.ajuste-border-tabla Total
                    td.ajuste-border-tabla.ajuste___right $1.000.000
                    td.ajuste___right $1.000.000
            p.mb-0 De acuerdo con lo anterior, se observa que en el débito y crédito se registra el mismo valor, presentan un equilibrio en la transacción; es decir, se igualan débitos y créditos, lo que es denominado principio de partida doble.

    .row.mb-4(data-aos="fade-right")
      .col.ajuste-h4-bloque2
        h4.mb-0 Asiento compuesto

    p.mb-4 Es la operación donde intervienen más de dos cuentas. Generalmente, sucede cuando se registran compras y ventas de productos, donde se relacionan cuentas como el impuesto sobre las ventas por pagar (IVA) y retenciones en la fuente por renta, retenciones del Impuesto de Industria y Comercio (ICA) o Retenciones de IVA.
    
    .row.justify-content-center.m-0
      .fondo-color1
        h4 Ejemplo:
        p Se realiza una venta por $10.000.000 a crédito, calcular IVA del 19 %.  En esta transacción intervienen tres cuentas: ingresos por actividad ordinarias (crédito) correspondiente a los ingresos, IVA generado (débito) de los pasivos y, finalmente, la cuenta de clientes (crédito) perteneciente al activo. De acuerdo con la naturaleza de las cuentas y si se presenta un aumento o disminución, se registra la transacción mediante el asiento contable como se observa a continuación:
        .row.align-items-center.mb-2
          .col-lg-auto
            figure(data-aos="fade-right").d-none.d-xl-block
              img(src="@/assets/curso/tema2/img5.png" style="max-width: 400px").m-auto
          .col-lg
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 2.
              span Registro contable de venta con IVA generado
            .tabla-a.mb-4(data-aos="fade-up")
              table
                thead
                  tr
                    th.ajuste-border-tabla Cuenta
                    th.ajuste-border-tabla Debe
                    th Haber
                tbody
                  tr  
                    td.ajuste-border-tabla Clientes
                    td.ajuste-border-tabla.ajuste___right $11.900.000
                    td.ajuste___right -
                  tr.ajuste-color-tabla 
                    td.ajuste-border-tabla IVA generado
                    td.ajuste-border-tabla.ajuste___right -
                    td.ajuste___right $1.900.000
                  tr  
                    td.ajuste-border-tabla Ingresos por actividades ordinarias
                    td.ajuste-border-tabla.ajuste___right -
                    td.ajuste___right $10.000.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Total
                    td.ajuste-border-tabla.ajuste___right $ 11.900.000
                    td.ajuste___right $11.900.000
        p.mb-0 Es importante resaltar que en el registro anterior se aplica nuevamente el principio de partida doble, donde se registra el ingreso por el valor monetario de la transacción ($10.000.000), posteriormente se calcula el valor del IVA correspondiente a la tarifa vigente del año 2020 del 19 %, el cual da como resultado $1.900.000. Finalmente, se determina el valor de clientes, donde se suma el valor del ingreso y el IVA, teniendo en cuenta que este último aumenta el valor del producto y, por ende, incrementa la cuenta por cobrar (clientes), donde se registra un valor total de $11.900.000.
                
    Separador
    <!-- BLOQUE 2 -->
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Cuenta: concepto y clasificación
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-up")
      .bloque-texto-g__img.ajuste___img__2
        figure
          img(src="@/assets/curso/tema2/img6.svg", alt="" style="max-width: 320px")
      .bloque-texto-g__texto.p-4
        p.mb-0 En el numeral anterior se habló de hechos económicos y la forma de registrar una transacción de acuerdo con la clasificación de este. Por ende, se continúan fortaleciendo estos conceptos mediante la orientación de la definición de cuenta y su clasificación.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Cuenta

    p.mb-4.ajuste-espacios-movil A través de las cuentas se clasifican y registran las transacciones. Es el nombre con el cual se registran de forma ordenada las diferentes operaciones comerciales generadas en una empresa. Es esencial que estas operaciones se elaboren en el momento que suceden; contribuyendo así a la obtención de información contable comprensible y oportuna (Warren, Reeves y Duchac, 2016; Santos-Cid, 2018; Vilches, 2019; Angulo, 2018).

    p.mb-4 La cuenta se encuentra integrada por los siguientes elementos:

    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/img7.svg', alt="" style="max-width: 95px").m-auto
          h3.text-center Nombre
          p Debe registrarse de forma completa de acuerdo con la asignación establecida.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/img8.svg', alt="" style="max-width: 95px").m-auto
          h3.text-center El debe
          p Se registra en el lado izquierdo para indicar los débitos de la transacción.
      .col-lg-4.mb-4.mb-sm-0(data-aos="fade-left")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/img9.svg', alt="" style="max-width: 95px").m-auto
          h3.text-center El haber
          p Se relaciona en la parte derecha para registrar los créditos de la operación comercial.
    
    .row.mb-5.align-items-center.ajuste-espacios-movil
      .col-lg-auto.ajuste-img-tall-1
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema2/img10.png" style="max-width: 500px").m-auto
      .col-lg
        p.mb-4 Cuando se registran las operaciones comerciales en el comprobante diario se procede a determinar el saldo de las cuentas. En caso de manejar software contable, se posibilita extraer los auxiliares de cada cuenta según la necesidad que surja para su análisis o consulta (Warren, Reeves y Duchac, 2016; Santos-Cid, 2018; Vilches, 2019; Angulo, 2018). 
        p.mb-0 Determinar el saldo significa restar los valores monetarios que se encuentran registrados en el <strong>debe</strong> y en el <strong>haber</strong>. Esta acción se realiza con la misma cuenta. Por ejemplo, se desea conocer el saldo de la cuenta de caja, entonces se revisan todos los movimientos débitos y los créditos; seguidamente, se determina la diferencia y el resultado de esta operación es el saldo de la cuenta caja; este saldo refleja el dinero con que se cuenta en efectivo y, por ser del activo, su naturaleza es débito.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Clasificación de las cuentas

    .row.mb-5.align-items-center.ajuste-espacios-movil
      .col-lg
        p.caja-text-bloque1(data-aos="fade-right") En la primera unidad temática se analizó el concepto de los elementos de los estados financieros, conforme a lo estipulado en el Marco Conceptual de Información Financiera (CTCP, 2010). A partir de ello, se profundizó en el concepto y se analizó su naturaleza con el fin de registrar la transacción de forma correcta y, de esta manera generar reportes útiles para la administración. 
        p.mb-0 Las cuentas de acuerdo con su naturaleza se encuentran clasificadas en reales o de balance, y nominales o de resultado (Warren, Reeves y Duchac, 2016; Santos-Cid, 2018; Vilches, 2019; Angulo, 2018; CTCP, 2010):
      .col-lg-auto
        figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/tema2/img11.svg" style="max-width: 400px").m-auto

    .row.mb-4(data-aos="fade-right")
      .col.ajuste-h4-bloque2
        h4.mb-0 Cuentas reales o del balance (situación financiera)
    
    p.mb-4 Son aquellas que intervienen en la elaboración del Estado de situación Financiera. Entre ellas, se encuentran: activo, pasivo y patrimonio. 

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-lg-auto
          figure(data-aos="fade-up").d-none.d-xl-block
            img(src="@/assets/curso/tema2/img12.svg", alt="" style="width: 400px").m-auto
        .col-lg(data-aos="fade-left")
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Activo").ajuste-cajaAcordion-1
              <ul class="fa-ul ajuste-ul-bloque4">
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Recurso controlado por la entidad.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Surge de eventos pasados. </li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>En un futuro se espera recibir beneficios económicos.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Es fiable su valor.</li>
              </ul>
              h3.mb-3 Movimiento de las cuentas del activo
              <ul class="fa-ul ajuste-ul-bloque4">
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Inician y aumentan en el débito.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Disminuyen y se cancelan en el crédito.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Su saldo es débito.</li>
              </ul>
            .row(titulo="Pasivo").ajuste-cajaAcordion-1
              <ul class="fa-ul ajuste-ul-bloque4">
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Obligación presente de la entidad.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Surge de eventos pasados.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Se espera desprender de beneficios económicos cuando se cancele parcial o totalmente la deuda.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Su valor sea fiable.</li>
              </ul>
              h3.mb-3 Movimiento de las cuentas del pasivo
              <ul class="fa-ul ajuste-ul-bloque4">
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Inician y aumentan en el crédito.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Disminuyen y se cancelan en el débito.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Su saldo es crédito.</li>
              </ul>      
            .row(titulo="Patrimonio").ajuste-cajaAcordion-1
              <ul class="fa-ul ajuste-ul-bloque4">
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Es la diferencia entre el activo y pasivo.</li>
              </ul>
              h3.mb-3 Movimiento de las cuentas del patrimonio
              <ul class="fa-ul ajuste-ul-bloque4">
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Inician y aumentan en el crédito.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Disminuyen y se cancelan en el débito.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Su saldo es crédito.</li>
              </ul>

    .row.mb-4(data-aos="fade-right")
      .col.ajuste-h4-bloque2
        h4.mb-0 Cuentas nominales o de resultado
    
    p.mb-4 Denominadas de esta forma porque pertenecen al estado de resultados. Son aquellas cuentas que determinan la utilidad o pérdida del ejercicio al finalizar el periodo contable. Se componen de las cuentas de ingresos, gastos y costos de venta o producción, de acuerdo con el tipo de empresa y la norma local (Colombia), que se relaciona en el Decreto 2649 de 1993. Considérese que bajo normas internacionales no se relaciona la figura de costos, pues estos hacen parte de los gastos, los cuales disminuyen los beneficios económicos. Sin embargo, se relaciona su concepto para dar claridad al contenido.

    .bg--img_03.mb-4
      .row.h-100.align-items-center
        .col-lg(data-aos="fade-right")
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Ingresos").ajuste-cajaAcordion-1
              <ul class="fa-ul ajuste-ul-bloque4">
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Hace referencia a los incrementos de los beneficios económicos.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Su incremento aumenta el patrimonio neto. </li>
              </ul>
              h3.mb-3 Movimiento de las cuentas de ingresos
              <ul class="fa-ul ajuste-ul-bloque4">
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Inician y aumentan en el crédito.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Disminuyen y se cancelan en el débito.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Su saldo es crédito.</li>
              </ul>
            .row(titulo="Gastos").ajuste-cajaAcordion-1
              <ul class="fa-ul ajuste-ul-bloque4">
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Relaciona las disminuciones de los beneficios económicos.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Dan como resultado disminuciones en el patrimonio neto.</li>
              </ul>
              h3.mb-3 Movimiento de las cuentas de gastos
              <ul class="fa-ul ajuste-ul-bloque4">
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Inician y aumentan en el débito.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Disminuyen y se cancelan en el crédito.</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Su saldo es débito.</li>
              </ul>      
            .row(titulo="Costos").ajuste-cajaAcordion-2
              p.p-0 Hace referencia a la inversión que se realiza para adquirir el producto que se desea ofertar o se pretender fabricar, depende del objeto social de la empresa. Se clasifican en costos de ventas y costos de producción:
              <ul class="fa-ul ajuste-ul-bloque4">
                <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span><strong>Costos de ventas</strong>: son aplicados por las empresas comerciales, que se dedican a la compra y venta de bienes. El costo de estas empresas es el valor de adquisición del bien.</li>
                <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span><strong>Costos de producción</strong>: son calculados por las empresas industriales que se encargan de transformar materia prima en producto terminado. Allí intervienen los elementos del costo: Materia Prima Directa (MPD), Mano de Obra Directa (MOD), Costos Indirectos de Fabricación (CIF).</li>
                <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span><strong>Movimiento de las cuentas de costos</strong>:</li>
                <ul class="fa-ul ajuste-ul-bloque4">
                  <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Inician y aumentan en el débito.</li>
                  <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Disminuyen y se cancelan en el crédito.</li>
                  <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Su saldo es débito.</li>
                </ul>
              </ul>
        .col-lg-auto
          figure(data-aos="fade-up").d-none.d-xl-block
            img(src="@/assets/curso/tema2/img13.svg", alt="" style="width: 400px").m-auto

    p.mb-4 Finalmente, para resumir el movimiento y naturaleza de las cuentas, lo invitamos a revisar el siguiente gráfico:

    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span Dinámica contable según la naturaleza de las cuentas
        .tabla-a.mb-4(data-aos="fade-up")
          table
            thead
              tr
                th.ajuste-border-tabla Clases de cuentas
                th.ajuste-border-tabla Aumento
                th Disminuye
            tbody
              tr  
                td.ajuste___left.ajuste-border-tabla Activo
                td.ajuste-border-tabla.ajuste___left Débito
                td.ajuste___left Crédito
              tr.ajuste-color-tabla-1
                td.ajuste___left.ajuste-border-tabla Pasivo
                td.ajuste-border-tabla.ajuste___left Crédito
                td.ajuste___left Débito
              tr  
                td.ajuste___left.ajuste-border-tabla Patrimonio
                td.ajuste-border-tabla.ajuste___left Crédito
                td.ajuste___left Débito
              tr.ajuste-color-tabla-1
                td.ajuste___left.ajuste-border-tabla Ingresos
                td.ajuste-border-tabla.ajuste___left Crédito
                td.ajuste___left Débito
              tr
                td.ajuste___left.ajuste-border-tabla Gastos
                td.ajuste-border-tabla.ajuste___left Débito
                td.ajuste___left Crédito
              tr.ajuste-color-tabla-1
                td.ajuste___left.ajuste-border-tabla Costos
                td.ajuste-border-tabla.ajuste___left Débito
                td.ajuste___left Crédito
    
    p.mb-5 Para lograr uniformidad en el momento de registrar las transacciones realizadas por las empresas y, dar claridad y confiabilidad en dichos registros se crea el Plan Único de Cuentas -PUC-. Por este motivo, en Colombia existen 19 PUC, entre ellos se encuentran el decreto 2650 de 1993, que es utilizado para comerciantes.

    .row.align-items-center.mb-5.ajuste-espacios-movil
      .col-lg-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema2/img14.svg" style="max-width: 400px").m-auto
      .col-lg
        p El PUC se encuentra integrado por el catálogo de cuentas, descripciones y dinámicas que orientan y facilitan el registro de las transacciones generadas.
        p.mb-0.caja-text-bloque2-1(data-aos="fade-left") En coherencia con las normas internacionales no se utiliza el Plan Único de Cuentas. Sin embargo, en Colombia las empresas siguen utilizándolo. Los PUC han sido modificados conforme a las necesidades de las empresas a través del tiempo. En algunos casos se incorporan o eliminan cuentas. También, se cambian nombres y códigos con el fin de generar estados financieros que cumplan con la taxonomía XBRL.
    
    p.mb-4.ajuste-espacios-movil La taxonomía XBRL (<em>eXtensible Business Reporting Language</em>) es una norma que se usa para comunicar información financiera entre preparadores y usuarios de la información financiera. La Fundación IFRS es responsable del desarrollo de la representación XBRL de las NIIF - incluyendo las Normas NIC, las Interpretaciones CINIIF y la Norma NIIF para las PYMES - emitida por el Consejo de Normas Internacionales de Contabilidad (2018), conocida como la Taxonomía NIIF, la cual establece (IFRS <em>Foundation</em>, 2019): 

    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/img15.svg', alt="" style="max-width: 95px").m-auto
          p La jerarquía de la taxonomía y los elementos que la componen. 
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/img16.svg', alt="" style="max-width: 95px").m-auto
          p El formato requerido de estos elementos, tales como texto, valores monetarios, etc. 
      .col-lg-4.mb-4.mb-sm-0(data-aos="fade-left")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/img17.svg', alt="" style="max-width: 95px").m-auto
          p La referencia a las Normas NIIF con las que se relacionan estos elementos.  

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img2.svg" style="max-width: 70px").m-auto
      .col
        h3 Catálogo de cuentas

    p.mb-4.ajuste-espacios-movil Allí se encuentran registradas las cuentas con sus respectivos niveles, los cuales se revisan a continuación con un ejemplo:

    .row.mb-5.justify-content-center.m-0
      .row.fondo-color2.align-items-center
        .col-lg
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 4.
            span Estructura del plan único de cuentas (PUC)
          .tabla-a.mb-4(data-aos="fade-up")
            table.ajuste___left_1
              caption Fuente: Decreto 2650 de 1993.
              thead
                tr
                  th.ajuste-border-tabla Clase
                  th.ajuste-border-tabla El primer dígito
                  th 1 ACTIVO
              tbody
                tr  
                  td.ajuste-border-tabla Grupo
                  td.ajuste-border-tabla Los dos primeros dígitos.
                  td 11 Disponible.
                tr.ajuste-color-tabla-1
                  td.ajuste-border-tabla Cuenta
                  td.ajuste-border-tabla Los cuatro primeros dígitos.
                  td 1110 Bancos.
                tr  
                  td.ajuste-border-tabla Subcuenta
                  td.ajuste-border-tabla Los seis primeros dígitos.
                  td 111005 Bancos nacionales.
                tr.ajuste-color-tabla-1
                  td.ajuste-border-tabla Auxiliares
                  td.ajuste-border-tabla Con siete o más dígitos.
                  td 11100501 Banco BBVA.
        .col-lg-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/tema2/img18.svg" style="max-width: 400px").m-auto
    
    p.mb-4 Las clases que expresan cada dígito son:

    .row.justify-content-center.m-0
      .row.fondo-color3.align-items-center
        .col-lg-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/tema2/img19.svg" style="max-width: 400px").m-auto
        .col-lg
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 5. 
            span Clasificación de las cuentas según el Plan Único de Cuentas (Decreto 2650 de 1993)
          .tabla-a.mb-4(data-aos="fade-up")
            table.ajuste___left_1
              caption Fuente: Decreto 2650 de 1993.
              thead
                tr
                  th(colspan="2") Denominación contable
              tbody
                tr  
                  td.ajuste-border-tabla Clase 1
                  td Activo.
                tr.ajuste-color-tabla-1
                  td.ajuste-border-tabla Clase 2
                  td Pasivo.
                tr  
                  td.ajuste-border-tabla Clase 3
                  td Patrimonio.
                tr.ajuste-color-tabla-1
                  td.ajuste-border-tabla Clase 4
                  td Ingresos.
                tr  
                  td.ajuste-border-tabla Clase 5
                  td Gastos.
                tr.ajuste-color-tabla-1
                  td.ajuste-border-tabla Clase 6
                  td Costos de ventas.
                tr  
                  td.ajuste-border-tabla Clase 7
                  td Costos de producción.
    
    Separador
    <!-- BLOQUE 3 -->
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Partida doble
    
    .row.fondo-tema2
      .row.align-items-center.mb-5
        .col-lg
          p Como se mencionó en el tema sobre hechos contables, es importante que, al momento de registrar la transacción, se afecten por lo menos dos cuentas, donde una se debita y la otra se acredita. Estas deben relacionar el mismo valor, con el fin de que se aplique el principio de partida doble. Este principio consiste en la igualdad o equilibrio que deben presentar las operaciones, donde existe un deudor y un acreedor con el fin de reflejar la realidad económica de la empresa.
          p.mb-0 En el caso de que se presenten más de dos cuentas, como sucede en el asiento compuesto, de igual forma los débitos y créditos se deben igualar. Por ende, se clasifican y registran los elementos de acuerdo con la operación comercial y naturaleza de las cuentas.
        .col-lg-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/tema2/img20.png" style="max-width: 400px").m-auto
      
      p.mb-4.ajuste-espacios-movil <strong>Ejemplo 1.</strong> Se adquiere mercancía por valor de $2.000.000 a crédito, se aplica IVA a la tarifa del 19 %.

      .row.justify-content-center.mb-4
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 6. 
            span Registro contable de compra con IVA descontable
          .tabla-a.mb-4(data-aos="fade-up")
            table
              thead
                tr
                  th.ajuste-border-tabla Cuenta
                  th.ajuste-border-tabla Debe
                  th Haber
              tbody
                tr  
                  td.ajuste___left.ajuste-border-tabla Inventarios
                  td.ajuste___right.ajuste-border-tabla $2.000.000
                  td.ajuste___right -
                tr.ajuste-color-tabla-1
                  td.ajuste___left.ajuste-border-tabla IVA descontable
                  td.ajuste___right.ajuste-border-tabla $380.000
                  td.ajuste___right -
                tr  
                  td.ajuste___left.ajuste-border-tabla Proveedores Nacionales
                  td.ajuste-border-tabla.ajuste___right -
                  td.ajuste___right $2.380.000
                tr.ajuste-color-tabla-1
                  td.ajuste___left.ajuste-border-tabla Total
                  td.ajuste___right.ajuste-border-tabla $2.380.000
                  td.ajuste___right $2.380.000
      
      p.mb-5 En el ejemplo anterior, se tiene el valor del inventario por $2.000.000, se calcula el IVA del 19 % sobre este valor, dando el resultado de $380.000. Finalmente, se determina el total de la cuenta por pagar (proveedores nacionales); donde se suma el valor del inventario y el IVA. Esto, teniendo en cuenta que el IVA incrementa el valor del producto que, como su nombre lo indica, es un valor agregado. Así mismo, se observa que se cumple con el principio de partida doble, reflejando igualdad entre el <strong>debe</strong> y <strong>haber</strong> por valor de $2.380.000.

      p.mb-4.ajuste-espacios-movil <strong>Ejemplo 2.</strong> El 15 de septiembre de 2020, se adquiere un computador por valor de $3.800.000, para uso en la empresa, se cancela a 30 días. 

      .row.justify-content-center.mb-4
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 7. 
            span Registro contable del pago a acreedores mediante bancos
          .tabla-a.mb-4(data-aos="fade-up")
            table
              thead
                tr
                  th.ajuste-border-tabla Cuenta
                  th.ajuste-border-tabla Debe
                  th Haber
              tbody
                tr  
                  td.ajuste___left.ajuste-border-tabla Equipo computación
                  td.ajuste___right.ajuste-border-tabla $3.800.000
                  td.ajuste___right -
                tr.ajuste-color-tabla-1
                  td.ajuste___left.ajuste-border-tabla Acreedores varios
                  td.ajuste-border-tabla.ajuste___right -
                  td.ajuste___right $3.800.000
                tr  
                  td.ajuste___left.ajuste-border-tabla Total
                  td.ajuste___right.ajuste-border-tabla $3.800.000
                  td.ajuste___right $3.800.000

      p.mb-5 Se registra el activo- equipo de computación, presentando aumento (débito) y acreedores varios en el pasivo (crédito) incrementando el valor de la deuda.

      p.mb-4.ajuste-espacios-movil <strong>Ejemplo 3.</strong> El 15 de octubre se cancela el valor de adquisición del equipo de computación relacionado en el ejercicio anterior, con cheque.

      .row.justify-content-center.mb-4
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 8. 
            span Registro contable de acreedores y bancos
          .tabla-a.mb-4(data-aos="fade-up")
            table
              thead
                tr
                  th.ajuste-border-tabla Cuenta
                  th.ajuste-border-tabla Debe
                  th Haber
              tbody
                tr  
                  td.ajuste___left.ajuste-border-tabla Acreedores varios
                  td.ajuste___right.ajuste-border-tabla $3.800.000
                  td.ajuste___right -
                tr.ajuste-color-tabla-1
                  td.ajuste___left.ajuste-border-tabla Bancos
                  td.ajuste-border-tabla.ajuste___right -
                  td.ajuste___right $3.800.000
                tr  
                  td.ajuste___left.ajuste-border-tabla Total
                  td.ajuste___right.ajuste-border-tabla $3.800.000
                  td.ajuste___right $3.800.000
                  
      p.mb-5 Teniendo en cuenta que se cancela la deuda, disminuye el pasivo- acreedores varios (débito) y a su vez la cuenta de banco (crédito), considerando que se presenta una salida de dinero. Cabe resaltar, que esta clase de cuentas tienen naturaleza diferente.

      p.mb-4.ajuste-espacios-movil <strong>Ejemplo 4.</strong> Se constituye la empresa Sandles SAS, un socio aporta $10.000.000 en efectivo y el segundo socio aporta maquinaria y equipo por $10.000.000. 

      .row.justify-content-center.mb-4
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 9.  
            span Registro contable de aportes sociales en efectivo y maquinaria
          .tabla-a.mb-4(data-aos="fade-up")
            table
              thead
                tr
                  th.ajuste-border-tabla Cuenta
                  th.ajuste-border-tabla Debe
                  th Haber
              tbody
                tr  
                  td.ajuste___left.ajuste-border-tabla Efectivo
                  td.ajuste___right.ajuste-border-tabla $10.000.000
                  td.ajuste___right -
                tr.ajuste-color-tabla-1
                  td.ajuste___left.ajuste-border-tabla Maquinaria y equipo
                  td.ajuste___right.ajuste-border-tabla $10.000.000
                  td.ajuste___right -
                tr  
                  td.ajuste___left.ajuste-border-tabla Aportes sociales
                  td.ajuste-border-tabla.ajuste___right -
                  td.ajuste___right $20.000.000
                tr.ajuste-color-tabla-1
                  td.ajuste___left.ajuste-border-tabla Total
                  td.ajuste___right.ajuste-border-tabla $20.000.000
                  td.ajuste___right $20.000.000
                  
      p.mb-5 Se registra el aumento (débito) del activo en las cuentas de efectivo y maquinaria de equipo, a su vez, el aumento (crédito) en la cuenta de patrimonio-aportes sociales. 

      p.mb-4.ajuste-espacios-movil <strong>Ejemplo 5.</strong> La empresa cancela arriendo del mes de octubre por valor de $800.000 en efectivo.

      .row.justify-content-center.mb-4
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 10.   
            span Registro contable del pago de gastos de arrendamiento en efectivo
          .tabla-a.mb-4(data-aos="fade-up")
            table
              thead
                tr
                  th.ajuste-border-tabla Cuenta
                  th.ajuste-border-tabla Debe
                  th Haber
              tbody
                tr  
                  td.ajuste___left.ajuste-border-tabla Gastos de arrendamiento
                  td.ajuste___right.ajuste-border-tabla $800.000
                  td.ajuste___right -
                tr.ajuste-color-tabla-1
                  td.ajuste___left.ajuste-border-tabla Efectivo
                  td.ajuste-border-tabla.ajuste___right -
                  td.ajuste___right $800.000
                tr  
                  td.ajuste___left.ajuste-border-tabla Total
                  td.ajuste___right.ajuste-border-tabla $800.000
                  td.ajuste___right $800.000
                  
    p.mb-4.ajuste-espacios-movil Recuerde que, para realizar el registro de las operaciones en los comprobantes y libros contables, es indispensable tener en cuenta:

    .row.justify-content-center
      .estilo-caja-ol
        .row
          .col-lg-auto
            figure(data-aos="fade-right").d-none.d-xl-block
              img(src="@/assets/curso/tema2/img22.png" style="max-width: 400px").m-auto
          .col-lg
            ol.lista-ol--cuadro-3(data-aos="fade-left")
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Identificar la transacción y clasificar las cuentas que se utilizarán, realizando el debido reconocimiento conforme el concepto y características establecidas en las normas internacionales.
            ol.lista-ol--cuadro-3(data-aos="fade-left")
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | De acuerdo con la transacción y naturaleza de las cuentas establecer cuál se debita y cuál se acredita.
            ol.lista-ol--cuadro-3(data-aos="fade-left")
              li
                .lista-ol--cuadro__vineta
                  span 3
                | Verificar la aplicación del principio de partida doble, donde el valor de los débitos sea igual al de los créditos.

    Separador
    <!-- BLOQUE 4 -->
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Ecuación contable

    p.mb-5 El principio de partida doble contribuye al cumplimiento de la ecuación contable o patrimonial, teniendo en cuenta que al presentarse la igualdad entre los débitos y los créditos se reflejará el equilibrio de las cuentas de activo, pasivo y patrimonio, denominadas comúnmente como cuentas reales o de balance. Estas son utilizadas para elaborar el estado de situación financiera (Tapia y Jiménez, 2018; Cuaspa, 2013; Vilches; 2019; Angulo, 2018).

    .row.mb-5.ajuste-espacios-movil
      .col-lg
        .row.mb-3.ajuste___bloque4
          .col-lg-2
          .col-lg-5.caja-text-tema2-bloque4(data-aos="fade-right")
            h5.mb-0 Activo
          .col-lg-5.p-0
            h5.mb-0.caja-text-tema2-bloque4-1(data-aos="fade-up") Pasivo
            h5.mb-0.caja-text-tema2-bloque4-2(data-aos="fade-up") Patrimonio
        p La ecuación contable se encuentra representada de la siguiente forma:
        .row.justify-content-center(data-aos="fade-right").m-0
          h5.mb-0.caja-text-tema2-bloque4-3 Activo = Pasivo + Patrimonio
      .col-lg-auto
        figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/tema2/img23.svg" style="max-width: 400px").m-auto

    p.mb-5.ajuste-espacios-movil Lo anterior indica, que la sumatoria de pasivo y patrimonio debe ser igual al activo. Así, si el total activo se encuentra representado por $15.000.000, la suma del pasivo y patrimonio debe dar el mismo valor. De esta manera, se cumple con la ecuación contable (Tapia y Jiménez, 2018; Cuaspa, 2013; Vilches; 2019; Angulo, 2018).

    .row.justify-content-center.mb-5.ajuste-espacios-movil
      .col-lg-auto
        figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/tema2/img24.svg" style="max-width: 400px").m-auto
      .col-lg
        p.mb-4 En términos matemáticos, la ecuación puede reestructurarse de las siguientes formas:
        h5.mb-0.caja-text-tema2-bloque4-1.ajuste___width.espacio___caja(data-aos="fade-left") Pasivo = Activo - Patrimonio
        h5.mb-0.caja-text-tema2-bloque4-2.ajuste___width(data-aos="fade-left") Patrimonio = Activo - Pasivo
    
    p.mb-4.ajuste-espacios-movil <strong>Ejemplo 1.</strong> La empresa Surtimodas SAS, posee la siguiente información a corte de 31 de diciembre de 2020. Se solicita determinar la ecuación contable:

    .row.justify-content-center.mb-4
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 11.   
          span Saldos de cuentas contables al cierre del periodo
        .tabla-a.mb-4(data-aos="fade-up").ajuste___tabla
          table
            thead
              tr
                th.ajuste-border-tabla Cuenta
                th Valor
            tbody
              tr  
                td.ajuste___left.ajuste-border-tabla Efectivo
                td.ajuste___right $2.500.000 
              tr.ajuste-color-tabla-1
                td.ajuste___left.ajuste-border-tabla Deudores
                td.ajuste___right $2.000.000 
              tr  
                td.ajuste___left.ajuste-border-tabla Inventarios
                td.ajuste___right $2.800.000 
              tr.ajuste-color-tabla-1
                td.ajuste___left.ajuste-border-tabla Propiedad, planta y equipo
                td.ajuste___right $6.500.000 
              tr  
                td.ajuste___left.ajuste-border-tabla Proveedores nacionales
                td.ajuste___right $8.800.000 
              tr.ajuste-color-tabla-1
                td.ajuste___left.ajuste-border-tabla Capital
                td.ajuste___right $5.000.000 
              tr  
                td.ajuste___left.ajuste-border-tabla Ingresos actividades ordinarias
                td.ajuste___right $10.000.000 
              tr.ajuste-color-tabla-1
                td.ajuste___left.ajuste-border-tabla Gastos
                td.ajuste___right $4.000.000 
                
    p.mb-4.ajuste-espacios-movil La ecuación que debe verificarse es la siguiente:

    h5.mb-5.caja-text-tema2-bloque4-3.ajuste___width_1(data-aos="fade-right") Activo = Pasivo + Patrimonio

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 1.    
      span Representación de la ecuación contable básica
    
    .row.mb-5
      .col-lg-auto
        figure(data-aos="fade-up")
          img(src="@/assets/curso/tema2/img25.svg" alt="Tabla sobre la ecuación contable con dos columnas principales: Activo y Pasivo. La columna de Activo incluye efectivo, deudores, inventarios y propiedad, planta y equipo, sumando $19.500.000. La columna de Pasivo contiene obligaciones financieras por $15.000.000, y en la sección de Patrimonio se registra capital por $4.500.000, totalizando $19.500.000 entre pasivo y patrimonio." style="max-width: 1230px").m-auto

    p.mb-4.ajuste-espacios-movil Para determinar la ecuación contable, se clasifican los elementos de los estados financieros correspondientes a las cuentas de activo, pasivo y patrimonio. Se omiten las cuentas relacionadas de ingresos y gastos en la información suministrada, teniendo en cuenta que estas se incorporan en el estado de resultados integral. Así mismo, se observa que el valor de activos correspondiente a $13.800.000, es igual a la sumatoria de pasivo y patrimonio, cumpliendo con lo estipulado en la ecuación.

    p.mb-4 <strong>Ejemplo 2.</strong> La empresa Carvajal SAS, suministra la siguiente información del periodo contable 2020. Determine el patrimonio de la empresa:

    .row.justify-content-center.mb-4
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 12.   
          span Cálculo del capital a partir de activos y pasivos
        .tabla-a.mb-4(data-aos="fade-up").ajuste___tabla
          table
            thead
              tr
                th.ajuste-border-tabla Cuenta
                th Valor
            tbody
              tr  
                td.ajuste-border-tabla.ajuste___left Efectivo
                td.ajuste___right $5.000.000 
              tr.ajuste-color-tabla-1
                td.ajuste-border-tabla.ajuste___left Deudores
                td.ajuste___right $3.500.000 
              tr  
                td.ajuste-border-tabla.ajuste___left Inventarios
                td.ajuste___right $2.000.000 
              tr.ajuste-color-tabla-1
                td.ajuste-border-tabla.ajuste___left Propiedad, planta y equipo
                td.ajuste___right $9.000.000 
              tr  
                td.ajuste-border-tabla.ajuste___left Obligaciones financieras
                td.ajuste___right $15.000.000 
              tr.ajuste-color-tabla-1
                td.ajuste-border-tabla.ajuste___left Capital
                td.ajuste___right ?

    p.mb-4.ajuste-espacios-movil La ecuación aplicable en este caso es la siguiente:

    h5.mb-5.caja-text-tema2-bloque4-2.ajuste___width_1(data-aos="fade-right") Patrimonio = Activo - Pasivo

    .titulo-sexto.color-acento-contenido.mb-3.ajuste-espacios-movil
      h5 Figura 2.    
      span Balance general simplificado: Activos, pasivos y patrimonio
    
    .row.mb-5
      .col-lg-auto
        figure(data-aos="fade-up")
          img(src="@/assets/curso/tema2/img26.svg" alt="Tabla que ilustra la ecuación contable, mostrando la relación entre activo, pasivo y patrimonio. Se detallan valores en efectivo, deudores, inventarios y propiedades en la columna de activos, mientras que en la de pasivos aparecen las obligaciones financieras. El patrimonio se compone de capital, reflejando el equilibrio entre ambos lados de la ecuación." style="max-width: 1230px").m-auto

    p.mb-4.ajuste-espacios-movil Podemos observar que se refleja la ecuación contable, donde se tiene:

    .row.mb-4
      .col-lg-4
        h5.caja-text-tema2-bloque4-2.ajuste___width_2(data-aos="fade-right") Patrimonio = Activo - Pasivo
      .col-lg-4
        h5.caja-text-tema2-bloque4-2.ajuste___width_3(data-aos="fade-up") Patrimonio = $19.500.000 - $15.000.000
      .col-lg-4
        h5.caja-text-tema2-bloque4-2.ajuste___width_2(data-aos="fade-left") Patrimonio = $4.500.000

    .row.m-0.justify-content-center(data-aos="fade-right")
      .caja-text-img-nota__4
        .col-lg-auto
          figure.d-none.d-xl-block
            img(src="@/assets/curso/tema2/img27.svg" style="width: 200px").m-auto
        .col-lg.ajuste__parrafo_4
          p Con el fin de ampliar sus conocimientos sobre la temática, por favor revise las referencias bibliográficas propuestas de la biblioteca SENA, entre ellas se encuentra:
          p.mb-0 <strong>Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. Ediciones de la U. Bogotá: Colombia. </strong>

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
