/**
 * Genera el HTML de una tarjeta (card) de propiedad.
 * @param {Object} propiedad - Objeto con los datos de la propiedad.
 * @returns {string} HTML de la tarjeta.
 */
function generarCard(propiedad) {
  const smokeHtml = propiedad.smoke
    ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
    : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;

  const petsHtml = propiedad.pets
    ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
    : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`;

  return `
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p>
            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad.banos} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toLocaleString('es-CL')}</p>
          ${smokeHtml}
          ${petsHtml}
        </div>
      </div>
    </div>
  `;
}

/**
 * Renderiza un arreglo de propiedades dentro de un contenedor del DOM.
 * @param {Array}  propiedades  - Arreglo de objetos de propiedades.
 * @param {string} containerId  - ID del elemento HTML contenedor.
 * @param {number} [limite]     - Cantidad máxima de propiedades a mostrar (opcional).
 */
function renderizarPropiedades(propiedades, containerId, limite) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const lista = limite ? propiedades.slice(0, limite) : propiedades;
  container.innerHTML = lista.map(generarCard).join('');
}
