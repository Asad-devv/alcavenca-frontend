
import { makePayment } from "./makePayment.js";

document.addEventListener("DOMContentLoaded", function () {


    
  const loader = document.querySelector('.loaderforpayment');

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
 

    const name = document.querySelector('input[name="nombre"]').value;
    const country = document.querySelector('input[name="pais"]').value;
    const city = document.querySelector('input[name="ciudad"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const wallet = document.querySelector('input[name="wallet"]').value;

    const payload = {
      formData: {
        formtype: "form3",
        name: name,
        country: country,
        city:city,
        email:email,
        wallet: wallet,
        paymentAmount: 3,
        data01: datoValues["01"] || "0",
        data02: datoValues["02"] || "0",
        data03: datoValues["03"] || "0",
        data04: datoValues["04"] || "0",
        data05: datoValues["05"] || "0",
        data06: datoValues["06"] || "0",
        data07: datoValues["07"] || "0",
        data08: datoValues["08"] || "0",
        data09: datoValues["09"] || "0",
        data10: datoValues["10"] || "0",
        data11: datoValues["11"] || "0",
        data12: datoValues["12"] || "0",
        data13: datoValues["13"] || "0",
        data14: datoValues["14"] || "0",
        data15: datoValues["15"] || "0",
        data16: datoValues["16"] || "0",
        data17: datoValues["17"] || "0",
        data18: datoValues["18"] || "0",
        data19: datoValues["19"] || "0",
        data20: datoValues["20"] || "0",
        data21: datoValues["21"] || "0",
        data22: datoValues["22"] || "0",
        data23: datoValues["23"] || "0",
        data24: datoValues["24"] || "0",
        data25: datoValues["25"] || "0",
        data26: datoValues["26"] || "0",
        data27: datoValues["27"] || "0",
        data28: datoValues["28"] || "0",
        data29: datoValues["29"] || "0",
        data30: datoValues["30"] || "0",
        data31: datoValues["31"] || "0",
        data32: datoValues["32"] || "0",
        data33: datoValues["33"] || "0",
        data34: datoValues["34"] || "0",
        data35: datoValues["35"] || "0",
        data36: datoValues["36"] || "0",
        data37: datoValues["37"] || "0",
        data38: datoValues["38"] || "0",
        data39: datoValues["39"] || "0",
        data40: datoValues["40"] || "0",
        data41: datoValues["41"] || "0",
        data42: datoValues["42"] || "0",
        data43: datoValues["43"] || "0",
        data44: datoValues["44"] || "0",
        data45: datoValues["45"] || "0",
        data46: datoValues["46"] || "0",
        data47: datoValues["47"] || "0",
        data48: datoValues["48"] || "0",
        data49: datoValues["49"] || "0",
        data50: datoValues["50"] || "0",
        data51: datoValues["51"] || "0",
        data52: datoValues["52"] || "0",
        data53: datoValues["53"] || "0",
        data54: datoValues["54"] || "0",
        data55: datoValues["55"] || "0",
        data56: datoValues["56"] || "0",
        data57: datoValues["57"] || "0",
        data58: datoValues["58"] || "0",
        data59: datoValues["59"] || "0",
        data60: datoValues["60"] || "0",
        data61: datoValues["61"] || "0",
        data62: datoValues["62"] || "0",
        data63: datoValues["63"] || "0",
        data64: datoValues["64"] || "0",
        data65: datoValues["65"] || "0",
        data66: datoValues["66"] || "0",
        data67: datoValues["67"] || "0",
        data68: datoValues["68"] || "0",
        data69: datoValues["69"] || "0",
        data70: datoValues["70"] || "0",
        data71: datoValues["71"] || "0",
        data72: datoValues["72"] || "0",
        data73: datoValues["73"] || "0",
        data74: datoValues["74"] || "0",
        data75: datoValues["75"] || "0",
        data76: datoValues["76"] || "0",
        data77: datoValues["77"] || "0",
        data78: datoValues["78"] || "0",
        data79: datoValues["79"] || "0",
        data80: datoValues["80"] || "0",
        data81: datoValues["81"] || "0",
        data82: datoValues["82"] || "0",
        data83: datoValues["83"] || "0",
        data84: datoValues["84"] || "0",
        data85: datoValues["85"] || "0",
        data86: datoValues["86"] || "0",
        data87: datoValues["87"] || "0",
        data88: datoValues["88"] || "0",
        data89: datoValues["89"] || "0",
        data90: datoValues["90"] || "0",
        data91: datoValues["91"] || "0",
        data92: datoValues["92"] || "0",
        data93: datoValues["93"] || "0",
        data94: datoValues["94"] || "0",
        data95: datoValues["95"] || "0",
        data96: datoValues["96"] || "0",
        data97: datoValues["97"] || "0",
        data98: datoValues["98"] || "0",
        data99: datoValues["99"] || "0",
        data00:datoValues["00"] || "0"
      }
    };

      console.log(payload);
    try {
      
      console.log(loader);


      loader.style.display = 'block';

      const paymentSuccessful = await makePayment(3);
      // const paymentSuccessful = true
if(paymentSuccessful) {
      const response = await fetch("https://api.quinielacrypto.com/saveData", {
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
        body: JSON.stringify(payload),
      });
      await response.json();
      alert("Payment Done! Data saved Successfully")
      window.location.href = "index.html";

      loader.style.display = 'none';
    }
      else{
        loader.style.display = 'none';
        alert("An error occured! pleas try again")
      }

    } catch (error) {
      loader.style.display = 'none';
      console.error("Error saving form data:", error);
      alert("Error saving form data, pleas try again")
      console.log(error);
    }
  });
});
