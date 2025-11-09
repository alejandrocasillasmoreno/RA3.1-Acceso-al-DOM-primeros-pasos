// Espera a que el DOM esté completamente cargado antes de manipular elementos
document.addEventListener("DOMContentLoaded", function() {

    // EJERCICIO 1
    // Modificar el contenido y estilos de elementos existentes en el DOM
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Título modificado desde JavaScript";
    
    const parrafo = document.getElementsByTagName("p")[0];
    parrafo.style.color = "blue";

    // EJERCICIO 2
    // Seleccionar por clase y aplicar estilo a todos los elementos encontrados
    const textos = document.getElementsByClassName("texto");
    for (let i = 0; i < textos.length; i++) {
        textos[i].style.backgroundColor = "gray";
    }

    
    // EJERCICIO 3
    // Seleccionar el primer elemento con la clase .caja y cambiar borde/fondo
    const primeraCaja = document.querySelector(".caja");
    primeraCaja.style.border = "2px solid red";
    primeraCaja.style.backgroundColor = "lightyellow";


    // EJERCICIO 4
    // Actualizar el texto de todos los botones con la clase .btn-dom
    const botones = document.querySelectorAll(".btn-dom");
    botones.forEach(boton => {
        boton.textContent = "DOM listo";
    });

    // EJERCICIO 5
    // Demostración de colecciones vivas (getElementsByTagName) vs estáticas (querySelectorAll)
    const lista = document.getElementById("lista");
    
    // Colección viva: se actualiza cuando cambia el DOM
    const elementoVivo = document.getElementsByTagName("li");
    console.log("Elemento vivo:", elementoVivo.length);
    
    // Colección estática: snapshot en el momento de la consulta
    const elementoEstatico = document.querySelectorAll("li");
    console.log("Elemento estático:", elementoEstatico.length);
    
    // Agregar nuevo elemento para observar la diferencia
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = "Nuevo elemento";
    lista.appendChild(nuevoLi);
    
    console.log("Elemento vivo:", elementoVivo.length);
    console.log("Elementos estáticos después de agregar:", elementoEstatico.length);
    console.log("Elemento nuevo:", nuevoLi.length);

    // EJERCICIO 6
    // Crear y añadir dinámicamente un párrafo al body
    const Parrafo = document.createElement("p");
    Parrafo.textContent = "Creado dinámicamente";
    document.body.appendChild(Parrafo);

    // EJERCICIO 7
    // Crear un nodo de texto puro y anexarlo a un contenedor
    const contenedor = document.getElementById("contenedor");
    const textoNuevo = document.createTextNode("Este es un nodo de texto creado dinámicamente");
    contenedor.appendChild(textoNuevo);

    // EJERCICIO 8
    // Crear una imagen y establecer atributos src/alt
    const imagen = document.createElement("img");
    imagen.setAttribute("src", "https://img.freepik.com/vector-gratis/coche-sedan-rojo-estilo-dibujos-animados-aislado-sobre-fondo-blanco_1308-64900.jpg");
    imagen.setAttribute("alt", "Imagen generada por JS");


    // EJERCICIO 9
    // Construir una tarjeta (card) completa en el DOM usando createElement y appendChild
    // Estructura: container > card > card-body > (title, text, button)
    const tarjetaContenedor = document.createElement("div");
    tarjetaContenedor.className = "container";

    const tarjetaCard = document.createElement("div");
    tarjetaCard.className = "card";

    const tarjetaBody = document.createElement("div");
    tarjetaBody.className = "card-body";

    const tarjetaTitulo = document.createElement("h5");
    tarjetaTitulo.className = "card-title";
    tarjetaTitulo.textContent = "Título de la tarjeta";

    const tarjetaTexto = document.createElement("p");
    tarjetaTexto.className = "card-text";
    tarjetaTexto.textContent = "Este es el texto de la tarjeta creada dinámicamente";

    const tarjetaBoton = document.createElement("button");
    tarjetaBoton.className = "btn btn-primary";
    tarjetaBoton.textContent = "Botón";

    tarjetaBody.appendChild(tarjetaTitulo);
    tarjetaBody.appendChild(tarjetaTexto);
    tarjetaBody.appendChild(tarjetaBoton);
    tarjetaCard.appendChild(tarjetaBody);
    tarjetaContenedor.appendChild(tarjetaCard);
    document.body.appendChild(tarjetaContenedor);



    // EJERCICIO 10
    // Insertar elementos en distintas posiciones usando append, prepend, before y after
    const listaInsertar = document.getElementById("lista-insertar");
    
    // Añadir al final
    const liFinal = document.createElement("li");
    liFinal.textContent = "En este se a usado append()";
    listaInsertar.append(liFinal);
    
    // Añadir al inicio
    const liInicio = document.createElement("li");
    liInicio.textContent = "En este se a usado prepend()";
    listaInsertar.prepend(liInicio);
    
    // Insertar antes del elemento seleccionado
    const antesLista = document.createElement("p");
    antesLista.textContent = "En este se a usado before()";
    listaInsertar.before(antesLista);
    
    // Insertar después del elemento seleccionado
    const despuesLista = document.createElement("p");
    despuesLista.textContent = "En este se a usado after()";
    listaInsertar.after(despuesLista);



    // EJERCICIO 11
    // Reemplazar y eliminar nodos con replaceWith() y remove(); enlazar a botones
    const parrafoObjetivo = document.createElement("p");
    const botonEliminar = document.getElementById("eliminar");
    const botonReemplazar = document.getElementById("reemplazar");
    
    botonEliminar.addEventListener("click", function() {
        parrafoObjetivo.remove();
        console.log("Párrafo eliminado");
    });
    
    botonReemplazar.addEventListener("click", function() {
        const nuevoParrafo = document.createElement("p");
        nuevoParrafo.textContent = "Este párrafo ha reemplazado al anterior";
        parrafoObjetivo.replaceWith(nuevoParrafo);
    });

    // EJERCICIO 12
    // Clonar un nodo completo con cloneNode(true), modificar su contenido y añadirlo tras el original
            const tarjetaOriginal = document.querySelector("#tarjeta-original");
            const ClonarTarjeta = document.querySelector("#btn-clonar");
            let contadorClones = 1;

            ClonarTarjeta.addEventListener("click", () => {
                const clon = tarjetaOriginal.cloneNode(true);
                
                // Cambiar texto en el clon si existe el elemento con la clase especificada
                const textoClon = clon.querySelector(".texto-clonable");
                if (textoClon) {
                    textoClon.textContent = `¡Clon N° ${contadorClones} creado! (Texto cambiado)`;
                }
                       
                // Insertar el clon justo después de la tarjeta original
                tarjetaOriginal.parentNode.insertBefore(clon, tarjetaOriginal.nextSibling);

                contadorClones++;
            });

    // EJERCICIO 13
    // Añadir dinámicamente <li> a una lista cuando se pulsa un botón
  const listaElementos  = document.querySelector("#lista-dinamica");
            const btnAgregar = document.querySelector("#btn-agregar");
            let contadorElementos = 3; 

            btnAgregar.addEventListener("click", () => {
                // Crear nuevo <li>, asignar texto y clases, y añadir al final de la lista
                const nuevoLi = document.createElement("li");
                nuevoLi.textContent = `Elemento Dinámico ${contadorElementos}`; 
                nuevoLi.classList.add("item", "list-group-item"); 
                listaElementos.appendChild(nuevoLi); 
                
                contadorElementos++;
            });
    // EJERCICIO 14
    // Eliminar el último elemento de una lista (si existe) al pulsar el botón
    const btnEliminar = document.querySelector("#btn-eliminar-ultimo");
            
            btnEliminar.addEventListener("click", () => {
                const ultimoElemento = lista.lastElementChild;
                
                if (ultimoElemento) {
                    ultimoElemento.remove(); 
                    console.log("El ultimo <li> ha sido eliminado");
                }
            });

    // EJERCICIO 15
    // Recorrer una colección de elementos y aplicar numeración y estilos alternados
    const btnNumerar = document.querySelector("#btn-numerar");

            btnNumerar.addEventListener("click", () => {
                const items = document.querySelectorAll(".item"); 

                if (items.length > 0) {
                    items.forEach((elemento, indice) => {
                        elemento.textContent = `Elemento ${indice + 1} (Numerado automáticamente)`;
                        elemento.style.backgroundColor = (indice % 2 === 0) ? "#e9ecef" : "#f8f9fa";
                    });
                    console.log(`Se han numerado ${items.length} elementos.`);
                } else {
                    console.log("No se encontraron elementos con la clase '.item' para numerar.");
                }
            });
        });

    // EJERCICIO 16
    // Generar una galería local a partir de un array JSON (simulado) y montar tarjetas con imagen y título
    const actividad16Galeria = () => {
                const imagenesJSON = [ // Array JSON local 
                    { titulo: "Montaña", url: "https://via.placeholder.com/150/1" },
                    { titulo: "Lago", url: "https://via.placeholder.com/150/2" },
                    { titulo: "Bosque", url: "https://via.placeholder.com/150/3" }
                ];

                const contenedor = document.querySelector("#contenedor-galeria-local");

                // Recorrer el array y crear una card por cada objeto
                imagenesJSON.forEach(imagen => { 
                    
                    const card = document.createElement("div"); 
                    card.classList.add("card"); 
                    card.style.width = "150px";

                    const img = document.createElement("img");
                    img.src = imagen.url; // establecer src directamente
                    img.alt = imagen.titulo;
                    img.classList.add("card-img-top");

                    const title = document.createElement("h6");
                    title.classList.add("card-title", "p-2", "text-center");
                    title.textContent = imagen.titulo; 

                    // Montar la estructura y añadir al contenedor
                    card.append(img, title); 
                    contenedor.appendChild(card); 
                });
            };

    // EJERCICIO 17
    // Obtener usuarios desde una API (fetch) y disparar funciones que procesan los datos
    const obtenerYProcesarUsuarios = async () => {
                const ulLista = document.querySelector("#lista-usuarios");
                ulLista.innerHTML = `<li class="list-group-item disabled text-center">⏳ Obteniendo datos...</li>`;
                
                try {
                    const respuesta = await fetch(API_USERS_URL); // petición a la API
                    
                    if (!respuesta.ok) {
                        throw new Error(`Error HTTP: ${respuesta.status}`);
                    }
                    
                    const usuarios = await respuesta.json(); // parsear JSON
                    
                    // Usar los datos para rellenar lista, tabla y filtrados
                    actividad17MostrarLista(usuarios);
                    actividad18MostrarTabla(usuarios);
                    actividad19FiltrarYMostrar(usuarios);
                    
                } catch (error) {
                    console.error("Error al cargar datos:", error);
                    ulLista.innerHTML = `<li class="list-group-item list-group-item-danger">Error de carga: ${error.message}</li>`;
                }
            };

    // EJERCICIO 17 
    // Renderizar una lista simple con nombre y email de cada usuario
    const actividad17MostrarLista = (usuarios) => {
                const ulLista = document.querySelector("#lista-usuarios");
                ulLista.innerHTML = ""; 
                
                usuarios.forEach(usuario => {
                    const li = document.createElement("li");
                    li.classList.add("list-group-item");
                    // Mostrar nombre y correo
                    li.textContent = `${usuario.name} | Email: ${usuario.email}`;
                    ulLista.appendChild(li);
                });
            };

    // EJERCICIO 18 
    // Construir una tabla con datos anidados (address.city) de los usuarios
    const actividad18MostrarTabla = (datosUsuarios) => {
                const contenedorTablaResultados = document.querySelector("#contenedor-tabla");
                contenedorTablaResultados.innerHTML = ""; 

                const elementoTabla = document.createElement("table"); // crear tabla
                elementoTabla.classList.add("table", "table-bordered", "table-hover");

                const cabeceraTabla = document.createElement("thead");
                const cuerpoTabla = document.createElement("tbody");
                
                // Cabeceras fijas
                const filaEncabezados = document.createElement("tr");
                ["Nombre", "Email", "Ciudad (address.city)"].forEach(textoEncabezado => {
                    const celdaEncabezado = document.createElement("th");
                    celdaEncabezado.textContent = textoEncabezado;
                    filaEncabezados.appendChild(celdaEncabezado);
                });
                cabeceraTabla.appendChild(filaEncabezados);
                
                // Rellenar filas con datos (comprobando existencia de address)
                datosUsuarios.forEach(usuario => {
                    const filaDatos = document.createElement("tr");
                    
                    const ciudad = usuario.address ? usuario.address.city : "N/A";
                    
                    const celdaNombre = document.createElement("td"); 
                    celdaNombre.textContent = usuario.name;
                    
                    const celdaCorreo = document.createElement("td"); 
                    celdaCorreo.textContent = usuario.email;
                    
                    const celdaCiudad = document.createElement("td"); 
                    celdaCiudad.textContent = ciudad; 

                    filaDatos.append(celdaNombre, celdaCorreo, celdaCiudad); 
                    cuerpoTabla.appendChild(filaDatos);
                });

                elementoTabla.append(cabeceraTabla, cuerpoTabla);
                contenedorTablaResultados.appendChild(elementoTabla);
            };

    // EJERCICIO 19
    // Filtrar usuarios cuyo email termina en ".biz" y crear tarjetas Bootstrap con innerHTML
    const crearTarjetaUsuarioFiltrado = (usuario) => {
                const { name, email, company } = usuario;
                const nombreCompania = company ? company.name : "N/A"; 

                const card = document.createElement("div");
                card.classList.add("card", "p-2", "shadow-sm", "border-danger");
                
                // Usar innerHTML para generar rápidamente la estructura interna
                card.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title text-danger">${name}</h5>
                        <p class="card-text">${email}</p>
                        <span class="badge bg-danger">${nombreCompania}</span>
                    </div>
                `;
                return card;
            };

            const actividad19FiltrarYMostrar = (usuarios) => {
                const contenedorDestino = document.querySelector("#contenedor-filtrado");
                contenedorDestino.innerHTML = "<p class='text-secondary'>Usuarios filtrados (email termina en .biz):</p>";

                // Filtrar mediante Array.prototype.filter y endsWith
                const usuariosFiltrados = usuarios.filter(user => 
                    user.email && user.email.toLowerCase().endsWith(".biz")
                );

                // Crear y añadir una tarjeta por cada usuario filtrado
                usuariosFiltrados.forEach(usuario => {
                    const tarjeta = crearTarjetaUsuarioFiltrado(usuario); 
                    contenedorDestino.appendChild(tarjeta); 
                });
            };

    // EJERCICIO 20
    // Mini "visor de usuarios": cargar usuarios, mostrar tarjetas, clonar y eliminar
    const btnCargar = document.querySelector("#btn-cargar-usuarios");
            const btnClonar = document.querySelector("#btn-clonar-ultimo");
            const contenedorVisor = document.querySelector("#contenedor-visor");

            const crearTarjetaUsuarioVisor = (user, esClon = false) => {
                const card = document.createElement("div");
                const city = user.address ? user.address.city : "Ciudad desconocida";
                
                // Diferenciar visualmente clones y originales
                const color = esClon ? "bg-secondary" : "bg-success";
                card.classList.add("card", color, "text-white", "shadow");
                card.style.width = "18rem";
                
                card.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <p class="card-text">
                            <strong>Correo:</strong> ${user.email} <br>
                            <strong>Ciudad:</strong> ${city}
                        </p>
                        <!-- Botón para eliminar (4) -->
                        <button class="btn btn-sm btn-light btn-eliminar-card">Eliminar Tarjeta</button>
                    </div>
                `;
                
                // Añadir manejador para eliminar la tarjeta del DOM
                const btnEliminar = card.querySelector(".btn-eliminar-card");
                btnEliminar.addEventListener("click", () => {
                    card.remove();
                    console.log(`Tarjeta de ${user.name} eliminada del DOM.`);
                });
                
                return card;
            };

            // Cargar usuarios desde la API y mostrar tarjetas; almacenar la última referencia de usuario
            btnCargar.addEventListener("click", async () => {
                contenedorVisor.innerHTML = "<p class='text-info'>Cargando usuarios...</p>";
                try {
                    const respuesta = await fetch(API_USERS_URL);
                    const usuarios = await respuesta.json();
                    
                    contenedorVisor.innerHTML = "";
                    
                    usuarios.forEach(user => {
                        const tarjeta = crearTarjetaUsuarioVisor(user, false);
                        contenedorVisor.appendChild(tarjeta); // añadir tarjeta al visor
                        // Guardar referencia al objeto usuario (no al nodo)
                        ultimaTarjetaMostrada = user; 
                    });
                    
                    btnClonar.disabled = false;
                    
                } catch (error) {
                    contenedorVisor.innerHTML = "<p class='text-danger'>Error al cargar usuarios para el visor.</p>";
                    btnClonar.disabled = true;
                    console.error(error);
                }
            });

            // Clonar la última tarjeta visible: use cloneNode(true), actualizar contenido y volver a enlazar eventos
            btnClonar.addEventListener("click", () => {
                if (ultimaTarjetaMostrada) {
                    
                    // Tomar la última tarjeta añadida al contenedor
                    const tarjetaOriginal = contenedorVisor.lastElementChild;
                    if (!tarjetaOriginal) return console.warn("No hay tarjeta visible para clonar.");

                    // Copia profunda del nodo (children incluidos)
                    const clon = tarjetaOriginal.cloneNode(true); 
                    
                    // Actualizar título del clon para indicar que es copiado
                    const tituloClon = clon.querySelector(".card-title");
                    tituloClon.textContent = `${tituloClon.textContent} (CLONADO)`;
                    
                    // Ajustar clases para distinguir estéticamente
                    clon.classList.remove("bg-success");
                    clon.classList.add("bg-danger");

                    // Reasignar el evento de eliminar al botón del clon
                    const btnEliminarClon = clon.querySelector(".btn-eliminar-card");
                    btnEliminarClon.addEventListener("click", () => {
                        clon.remove();
                        console.log("Tarjeta clonada eliminada del DOM.");
                    });

                    // Añadir el clon al final del visor
                    contenedorVisor.appendChild(clon); 
                    console.log("Tarjeta clonada y agregada al DOM con cloneNode(true).");
                } else {
                    alert("Primero debe cargar los usuarios.");
                }
            });


            // Ejecutar la carga inicial para poblar lista, tabla y filtrado al abrir la página
            obtenerYProcesarUsuarios();
