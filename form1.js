
import { connectWallet,makePayment } from "./makePayment.js";

document.addEventListener("DOMContentLoaded", function () {


    
  const loader = document.querySelector('.loaderforpayment');
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

    const name = document.querySelector('input[name="nombre"]').value;
    const country = document.querySelector('input[name="pais"]').value;
    const city = document.querySelector('input[name="ciudad"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const wallet = document.querySelector('input[name="wallet"]').value;

    const payload = {
      formData: {
        formtype: "form1",
        name: name,
        country: country,
        city:city,
        email:email,
        wallet: wallet,
        paymentAmount: 1,
        data01: datoValues["01"],
        data02: datoValues["02"],
        data03: datoValues["03"],
        data04: datoValues["04"],
        data05: datoValues["05"],
        data06: datoValues["06"],
        data07: datoValues["07"],
        data08: datoValues["08"],
        data09: datoValues["09"],
        data10: datoValues["10"],
        data11: datoValues["11"],
        data12: datoValues["12"],
        data13: datoValues["13"],
        data14: datoValues["14"],
        data15: datoValues["15"],
        data16: datoValues["16"],
        data17: datoValues["17"],
        data18: datoValues["18"],
        data19: datoValues["19"],
        data20: datoValues["20"],
        data21: datoValues["21"],
        data22: datoValues["22"],
        data23: datoValues["23"],
        data24: datoValues["24"],
        data25: datoValues["25"],
        data26: datoValues["26"],
        data27: datoValues["27"],
        data28: datoValues["28"],
        data29: datoValues["29"],
        data30: datoValues["30"],
        data31: datoValues["31"],
        data32: datoValues["32"],
        data33: datoValues["33"],
        data34: datoValues["34"],
        data35: datoValues["35"],
        data36: datoValues["36"],
        data37: datoValues["37"],
        data38: datoValues["38"],
        data39: datoValues["39"],
        data40: datoValues["40"],
        data41: datoValues["41"],
        data42: datoValues["42"],
        data43: datoValues["43"],
        data44: datoValues["44"],
        data45: datoValues["45"],
        data46: datoValues["46"],
        data47: datoValues["47"],
        data48: datoValues["48"],
        data49: datoValues["49"],
        data50: datoValues["50"],
        data51: datoValues["51"],
        data52: datoValues["52"],
        data53: datoValues["53"],
        data54: datoValues["54"],
        data55: datoValues["55"],
        data56: datoValues["56"],
        data57: datoValues["57"],
        data58: datoValues["58"],
        data59: datoValues["59"],
        data60: datoValues["60"],
        data61: datoValues["61"],
        data62: datoValues["62"],
        data63: datoValues["63"],
        data64: datoValues["64"],
        data65: datoValues["65"],
        data66: datoValues["66"],
        data67: datoValues["67"],
        data68: datoValues["68"],
        data69: datoValues["69"],
        data70: datoValues["70"],
        data71: datoValues["71"],
        data72: datoValues["72"],
        data73: datoValues["73"],
        data74: datoValues["74"],
        data75: datoValues["75"],
        data76: datoValues["76"],
        data77: datoValues["77"],
        data78: datoValues["78"],
        data79: datoValues["79"],
        data80: datoValues["80"],
        data81: datoValues["81"],
        data82: datoValues["82"],
        data83: datoValues["83"],
        data84: datoValues["84"],
        data85: datoValues["85"],
        data86: datoValues["86"],
        data87: datoValues["87"],
        data88: datoValues["88"],
        data89: datoValues["89"],
        data90: datoValues["90"],
        data91: datoValues["91"],
        data92: datoValues["92"],
        data93: datoValues["93"],
        data94: datoValues["94"],
        data95: datoValues["95"],
        data96: datoValues["96"],
        data97: datoValues["97"],
        data98: datoValues["98"],
        data99: datoValues["99"],
        data00:datoValues["00"]
      }
    };
    

    try {
      
      


      loader.style.display = 'block';
      const paymentSuccessful = await makePayment(0.01);


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
      console.log(response.json());
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
