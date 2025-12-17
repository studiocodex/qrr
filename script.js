// Función para desplazar el carrusel
function scrollCarousel(id, direction) {
  const container = document.getElementById(id);
  const scrollAmount = 320; // ajustá según el ancho de tus imágenes
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Función para abrir el popup con la imagen seleccionada
function openPopup(src) {
  const popup = document.getElementById('popup-container');
  const popupImage = document.getElementById('popup-image');
  popupImage.src = src;
  popup.classList.add('popup-visible');
}

// Función para cerrar el popup
function closePopup() {
  const popup = document.getElementById('popup-container');
  popup.classList.remove('popup-visible');
}

// Cargar y ocultar el loader al cargar la página
window.onload = function() {
  document.getElementById('loader').style.display = 'none';
};

