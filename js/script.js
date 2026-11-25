document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const usuario = document.getElementById("usuario").value.trim();
            const password = document.getElementById("password").value.trim();
            const mensajeError = document.getElementById("mensajeError");

            //CREDENCIALES DEL SISTEMA
            const USER_VALIDO = "admin@fitmar.com";
            const PASS_VALIDA = "12345";

            if (usuario === "" || password === "") {
                mensajeError.textContent = "⚠️ Por favor, completa todos los campos.";
                mensajeError.style.display = "block";
                return;
            }

            if (usuario === USER_VALIDO && password === PASS_VALIDA) {
                mensajeError.style.display = "none";
                localStorage.setItem("usuarioActivo", usuario);
                window.location.href = "pages/inicio.html";
            } else {
                mensajeError.textContent = "❌ Usuario o contraseña incorrectos.";
                mensajeError.style.display = "block";
            }
        });
    }

    
    const btnCerrarSesion = document.getElementById("btnCerrarSesion");
    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener("click", () => {
            localStorage.removeItem("usuarioActivo");
            window.location.href = "../index.html";
        });
    }

    //CALCULADORA DE IMC
    const imcForm = document.getElementById("imcForm");
    if (imcForm) {
        imcForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const peso = parseFloat(document.getElementById("peso").value);
            const alturaCm = parseFloat(document.getElementById("altura").value);
            const resultado = document.getElementById("resultadoIMC");

            if (peso > 0 && alturaCm > 0) {
                const alturaM = alturaCm / 100;
                const imc = (peso / (alturaM * alturaM)).toFixed(1);
                let estado = imc < 18.5 ? "Bajo peso" : imc < 25 ? "Peso normal" : imc < 30 ? "Sobrepeso" : "Obesidad";
                resultado.textContent = `IMC: ${imc} (${estado})`;
            }
        });
    }

    //REGISTRO DE SOCIOS
    const formSocio = document.getElementById("formSocio");
    if (formSocio) {
        formSocio.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("nombreSocio").value.trim();
            const ci = document.getElementById("ciSocio").value.trim();
            const plan = document.getElementById("planSocio").value;
            const tabla = document.getElementById("tablaSocios");

            const nuevaFila = document.createElement("tr");
            nuevaFila.innerHTML = `
                <td>${nombre}</td>
                <td>${ci}</td>
                <td>${plan}</td>
                <td><span class="badge">Activo</span></td>
            `;
            tabla.appendChild(nuevaFila);
            formSocio.reset();
        });
    }
});
