
import { connectWallet,makePayment } from "./makePayment.js";

document.addEventListener("DOMContentLoaded", function () {


    

    // Add event listener to the connect wallet button
    document.getElementById('connectWalletButton').addEventListener('click', connectWallet);

  const button = document.getElementById("Enviar");
  const datoValues = {};

  // Update datoValues when selectors change
  const datoElements = document.querySelectorAll('[name^="dato"]');
  datoElements.forEach((element) => {
    element.addEventListener("change", function () {
      const datoNum = element.name.slice(4);
      const datoValue = element.value;
      datoValues[datoNum] = datoValue;
    });
  });

  button.addEventListener("click", async function (event) {
    event.preventDefault();
    const form = document.querySelector('form');
    // if (!form.checkValidity()) {
    //     alert("Please fill all the fields")
    //     return; 
    //     // Exit if the form is not valid
    // }

    const nombre = document.querySelector('input[name="nombre"]').value;
    const pais = document.querySelector('input[name="pais"]').value;
    const ciudad = document.querySelector('input[name="ciudad"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const wallet = document.querySelector('input[name="wallet"]').value;

    const payload = {
        formData: {
          name: nombre || "",
          country: pais || "",
          city: ciudad || "",
          email: email  || "" ,
          wallet: wallet   || "" ,
          formtype: "form1"  ,
          paymentAmount: 1, 
          Logros: datoValues["01"]  || "" ,
          Concretados_fase_1: datoValues["02"]  || "" ,
          fase_1: datoValues["03"]  || "" ,
          Concretados: datoValues["04"]  || "" ,
          fase_2: datoValues["05"]  || "" ,
          Concretados_fase_2: datoValues["06"]  || "" ,
          por_llamar1: datoValues["07"]  || "" ,
          er_llamado1: datoValues["08"]  || "" ,
          por_llamar2: datoValues["09"]  || "" ,
          llamado_2do: datoValues["10"]  || "" ,
          Total_Administrativo: datoValues["11"]  || "" ,
          Pendientes: datoValues[""]  || "" ,
          Salidas: datoValues["13"]  || "" ,
          Ingresos: datoValues["14"]  || "" ,
          zona_1: datoValues["15"]  || "" ,
          zona_2: datoValues["16"]  || "" ,
          total_zona_1: datoValues["17"]  || "" ,
          total_zona_2: datoValues["18"]  || "" ,
          Contratacion_1: datoValues["19"]  || "" ,
          Contratacion_2: datoValues["20"]  || "" ,
          Conflictos_1: datoValues["21"]  || "" ,
          Conflictos_2: datoValues["22"]  || "" ,
          Capacitacion_1: datoValues["23"]  || "" ,
          Capacitacion_2: datoValues["24"]  || "" ,
          Mayorista_1: datoValues["25"]  || "" ,
          Mayorista_2: datoValues["26"]  || "" ,
          Minorista_1: datoValues["27"]  || "" ,
          Minorista_2: datoValues["28"]  || "" ,
          Comisionista_1: datoValues["29"]  || "" ,
          Comisionista_2: datoValues["30"]  || "" ,
          Dist_Zona_1: datoValues["31"]  || "" ,
          Dist_Zona_2: datoValues["32"]  || "" ,
          Enlace_1: datoValues["33"]  || "" ,
          Enlace_2: datoValues["34"]  || "" ,
          prod_er_Nivel1: datoValues["35"]  || "" ,
          prod_do_Nivel2: datoValues["36"]  || "" ,
          Pronóstico_1: datoValues["37"]  || "" ,
          Pronóstico_2: datoValues["38"]  || "" ,
          Adquisición_Productos_1: datoValues["39"]  || "" ,
          Adquisición_Productos_2: datoValues["40"]  || "" ,
          Inventario_1: datoValues["41"]  || "" ,
          Inventario_2: datoValues["42"]  || "" ,
          Almacenamiento_1: datoValues["43"]  || "" ,
          Almacenamiento_2: datoValues["44"]  || "" ,
          Conservación_y_preservación_de_los_productos_1: datoValues["45"]  || "" ,
          Conservación_y_preservación_de_los_productos_2: datoValues["46"]  || "" ,
          Picking_productos_1: datoValues["47"]  || "" ,
          Picking_productos_2: datoValues["48"]  || "" ,
        },
        mgmtData: {
          Metas_alcanzar_org1: datoValues["49"]  || "" ,
          Seleccionar1_org1: datoValues["50"]  || "" ,
          Seleccionar2_org1: datoValues["51"]  || "" ,
          Seleccionar3_org1: datoValues["52"]  || "" ,
          Seleccionar4_org1: datoValues["53"]  || "" ,
          Imposiciones_org1: datoValues["54"]  || "" ,
          Metas_alcanzar_org2: datoValues["55"]  || "" ,
          Seleccionar1_org2: datoValues["56"]  || "" ,
          Seleccionar2_org2: datoValues["57"]  || "" ,
          Seleccionar3_org2: datoValues["58"]  || "" ,
          Seleccionar4_org2: datoValues["59"]  || "" ,
          Imposiciones_org2: datoValues["60"]  || "" ,
          Metas_alcanzar_org3: datoValues["61"]  || "" ,
          Seleccionar1_org3: datoValues["62"]  || "" ,
          Seleccionar2_org3: datoValues["63"]  || "" ,
          Seleccionar3_org3: datoValues["64"]  || "" ,
          Seleccionar4_org3: datoValues["65"]  || "" ,
          Imposiciones_org3: datoValues["66"]  || "" ,
          Metas_alcanzar_org4: datoValues["67"]  || "" ,
          Seleccionar1_org4: datoValues["68"]  || "" ,
          Seleccionar2_org4: datoValues["69"]  || "" ,
          Seleccionar3_org4: datoValues["70"]  || "" ,
          Seleccionar4_org4: datoValues["71"]  || "" ,
          Imposiciones_org4: datoValues["72"]  || "" ,
          // Assuming a fixed formtype value
          Control_de_Gestión: datoValues["73"]  || "" ,
          ControlGestión1: datoValues["74"]  || "" ,
          ControlGestión2: datoValues["75"]  || "" ,
          ControlGestión3: datoValues["76"]  || "" ,
          ControlGestión4: datoValues["77"]  || "" ,
          Asistencia_a_la_dirección: datoValues["78"]  || "" ,
          Estructura_contable: datoValues["79"]  || "" ,
          selection_Estructura_1: datoValues["80"]  || "" ,
          selection_Estructura_2: datoValues["81"]  || "" ,
          selection_Estructura_3: datoValues["82"]  || "" ,
          selection_Estructura_4: datoValues["83"]  || "" ,
          Coordinación_y_optimización: datoValues["84"]  || "" ,
          transacciones_Seleccionar: datoValues["85"]  || "" ,
          Servicio_al_Cliente_1: datoValues["86"]  || "" ,
          Servicio_al_Cliente_2: datoValues["87"]  || "" ,
          Servicio_al_Cliente_3: datoValues["88"]  || "" ,
          Servicio_al_Cliente_4: datoValues["89"]  || "" ,
          Servicio_al_Cliente_5: datoValues["90"]  || "" ,
          Servicio_al_Cliente_6: datoValues["91"]  || "" ,
          problemas_resueltos_Seleccionar: datoValues["92"]  || "" ,
          Reuniones_con_zonas_Seleccionar: datoValues["93"]  || "" ,
          Dirección_Generalestrategias_1: datoValues["94"]  || "" ,
          Dirección_Generalestrategias_2: datoValues["95"]  || "" ,
          Dirección_Generalestrategias_3: datoValues["96"]  || "" ,
          Dirección_Generalestrategias_4: datoValues["97"]  || "" ,
          Dirección_Generalestrategias_5: datoValues["98"]  || "" ,
          Dirección_Generalestrategias_6: datoValues["99"]  || "" ,
          politicas_nuevas_Seleccionar: datoValues["00"]  || "" ,
        }
      };

      console.log(payload);
    try {
      
      

    //  const trx =await    makePayment(1);

      const response = await fetch("http://localhost:3002/saveData", {
        method: "POST",
        mode: "cors", // no-cors, *cors, same-origin
        credentials: "same-origin", // include, *same-origin, omit
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
        headers: {
          "Content-Type": "application/json",
          // Add CORS headers
          "Access-Control-Allow-Origin": "*", // Allow requests from any origin
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE", // Allow specific HTTP methods
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        },
        body: JSON.stringify(payload.formData),
      });
console.log(response);
      const responseData = await response.json();
      console.log(responseData);

    } catch (error) {
      console.error("Error saving form data:", error);
      console.log(error);
    }
  });
});
