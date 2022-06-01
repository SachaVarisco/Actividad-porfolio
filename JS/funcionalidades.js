    function func_EJ1() {
        // alert ("Me ejecuto dentro de una función")
        let EJ1_N1 = parseFloat (document.getElementById('EJ1_N1').value);
       let EJ1_N2 = parseFloat (document.getElementById('EJ1_N2').value);
        let EJ1_N3 = parseFloat (document.getElementById('EJ1_N3').value);

        //const suma =  EJ1_N1 + EJ1_N2 + EJ1_N3
    

        if (EJ1_N1>EJ1_N2 && EJ1_N1>EJ1_N3) {
             var suma = EJ1_N1
            } else {
          if (EJ1_N2>EJ1_N1 && EJ1_N2>EJ1_N3) {
              var suma = EJ1_N2
          }else { var suma = EJ1_N3

         }
     
         }
        document.getElementById("EJ1_R1").value = suma 
     }
 function func_EJ2() {
     let EJ2_N1 = parseFloat (document.getElementById('EJ2_N1').value);
        let EJ2_N2 = parseFloat (document.getElementById('EJ2_N2').value);
     const suma =  EJ2_N1 + EJ2_N2
     document.getElementById("EJ2_R2").value = suma
    }

 function func_EJ3() {
        let EJ3_T1 = (document.getElementById('EJ3_T1').value);
        let EJ3_N1 = parseFloat (document.getElementById('EJ3_N1').value);
        let frase = ""
        for (let index = 0; index < EJ3_N1; index++) {
         frase = frase + EJ3_T1
         
         }
     document.getElementById("EJ3_R1").value = frase
    }
    function func_EJ4() {
        let ej4_n1 = parseFloat (document.getElementById('EJ4_N1').value);
        let ej4_n2 = parseFloat (document.getElementById('EJ4_N2').value);
        if (ej4_n1 == 0 && ej4_n2!=0) {
           const celsius = ((ej4_n2 - 32) * (5/9)) 
    
             document.getElementById('EJ4_N2').value = 0
            document.getElementById('EJ4_N1').value = celsius
        } else {
            const farentheit = ((ej4_n1 * (9/5)) +32)
            document.getElementById('EJ4_N2').value = farentheit
            document.getElementById('EJ4_N1').value = 0
        }
        
    }
 function func_EJ5(){
     const palabra = document.getElementById("EJ5_T1").value;
     const resultado = document.getElementById("EJ5_R1");
     resultado.textContent = "La palabra " + palabra + " tiene " + palabra.length + " letras"
    }


 function func_EJ6() {
     let EJ6_N1 = (document.getElementById('EJ6_N1').value);
     if (EJ6_N1%2==0) {
         const par = "SI LO ES"
         document.getElementById("EJ6_R1").value = par
     } else {
         const par = "NO LO ES"
         document.getElementById("EJ6_R1").value = par
     }
 }
    function func_EJ7(){
     const num1 = parseInt(document.getElementById("EJ7_N1").value);
     const num2 = parseInt(document.getElementById("EJ7_N2").value);
     const resultado = document.getElementById("EJ7_R1");


     resultado.textContent = "";

     if(num1 < num2){
      for(let i=num1+1; i < num2; i++){
             let resto1 = (i % 3);
             if (resto1 == 0){
             resultado.textContent = resultado.innerHTML + " | " + i;
            }
         }
        }else{
            for(let i=num1+1; i < num1; i++){
          let resto2 = (i % 3);
          if(resto2 == 0){
              resultado.textContent = resultado.innerHTML + " | " + i;
            }
         }
      }

    }
    function func_EJ8(){
     const num1 = parseInt(document.getElementById("EJ8_N1").value);
     const resultado = document.getElementById("EJ8_R1");

     const esPrimo = (num) => {
         for (let i = 2; i < num; i++) {
             if (num % i === 0) {
              return false;
             }
            return true;
         }
     }
     for (let x = 0; x <= num1; x++) {
         esPrimo(x) && (resultado.textContent = resultado.innerHTML + " | " + x);
        }
    }

 function func_EJ9(){
     const nombre = document.getElementById("EJ9_T1").value;
     const apellido = document.getElementById("EJ9_T2").value;
     const edad = parseInt(document.getElementById("EJ9_N1").value);
     const ciudad = document.getElementById("EJ9_T3").value;
     const resultado = document.getElementById("EJ9_R1");
     resultado.textContent = "Mi nombre es " + nombre + " " + apellido + " , tengo " + edad + " años. Nací en la ciudad de " + ciudad;
 }

 function func_EJ10(){
     const num1 = parseInt(document.getElementById("EJ10_N1").value);
     const num2 = parseInt(document.getElementById("EJ10_N2").value);
     const resultado = document.getElementById("EJ10_R1");

     if(num1 < num2){
         for(let i=num1+1; i < num2; i++){
             resultado.textContent = resultado.innerHTML + " | " + i;
         }
     }else{
         for(let i=num1+1; i < num1; i++){
             resultado.textContent = resultado.innerHTML + " | " + i;
         }
     }
 }