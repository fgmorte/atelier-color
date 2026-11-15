# Atelier Color — Demo 0.2

PWA estática para GitHub Pages. Sin backend, sin cuentas y sin publicidad.

## Archivos
- `index.html`: interfaz y lógica de la aplicación.
- `catalogo.json`: catálogo de láminas de demostración.
- `assets/*.svg`: láminas vectoriales coloreables por números.
- `manifest.json`: configuración instalable PWA.
- `sw.js`: caché offline.
- `icons/`: iconos de instalación.

## Publicar en GitHub Pages
1. Crea un repositorio público llamado `atelier-color` (o el nombre que prefieras).
2. Sube el contenido de esta carpeta a la raíz de la rama `main`.
3. En Settings → Pages, selecciona Deploy from a branch → `main` → `/ (root)`.
4. Espera a que GitHub Pages publique la web.
5. Abre la URL HTTPS en el móvil. La primera visita necesita conexión para descargar la aplicación y sus láminas.
6. En Android/Chrome, usa el menú del navegador → Añadir a pantalla de inicio / Instalar aplicación.

## Añadir una lámina por números
1. Crea un SVG con regiones cerradas.
2. A cada región asigna `class="region"`, `data-n="1"` y `data-color="#hex"`.
3. Añade el SVG en `assets/` y una entrada en `catalogo.json`.
4. Añade el nuevo SVG a `SHELL` en `sw.js` y cambia el nombre de caché (actualmente `atelier-color-v02`) en cada actualización; utiliza `atelier-color-v03` para la siguiente versión.

Ejemplo de región:
```html
<path class="region" data-n="1" data-color="#e98775" fill="#fff" d="..." />
```

## Limitaciones conocidas de esta demo
- El coloreado por números funciona con las tres láminas vectoriales incluidas.
- Las imágenes importadas se colorean con pincel libre, no se convierten automáticamente a números todavía.
- El progreso se guarda en el almacenamiento del navegador del dispositivo. No se sincroniza entre móviles.
- En esta primera versión, la herramienta de deshacer cubre los cambios recientes de las láminas por números.
- Las imágenes importadas se almacenan en el navegador; exporta tus resultados si quieres conservarlos fuera del dispositivo.


## Colección ampliada 0.2
Incluye diez nuevas láminas vectoriales originales: Montañas al amanecer, Día de playa, Bosque tranquilo, El faro costero, Zorro del bosque, Gato curioso, Tortuga marina, Búho de la noche, Ballena viajera y Ciervo del prado. Se mantienen las tres láminas iniciales. Todas las nuevas láminas incluyen regiones SVG cerradas para coloreado por números.
