# MÓDULO 3 DESAFÍO ACADEMIA LATAM
# 💻 Desafío 1 - Javascript: Calculando el Total

Este proyecto consiste en una **tarjeta de producto interactiva** para una tienda online. El usuario puede aumentar o disminuir la cantidad de productos, y se calcula automáticamente el total a pagar en base al **precio del producto**.


## 🧠 Aprendizajes aplicados

- Uso de **JavaScript** para manipular el DOM.
- Aplicación de **querySelector** para acceder a elementos HTML.
- Uso de **eventos onclick** en botones.
- Actualización dinámica de contenido en pantalla usando `innerHTML`.
- Control de **variables numéricas** (`let`) y elementos HTML (`const`).



## ⚙️ Lógica del proyecto

1. **Variables numéricas (`let`)**
   - `precio`: representa el valor unitario del producto.
   - `cantidad`: número de productos seleccionados.

2. **Selectores (`const`)**
   - `precioSpan`: referencia al HTML donde se muestra el precio.
   - `cantidadSpan`: referencia al HTML donde se muestra la cantidad.
   - `totalSpan`: referencia al HTML donde se muestra el total.
   - `btnSumar` y `btnRestar`: botones para aumentar o disminuir la cantidad.

3. **Función `actualizarTotal()`**
   - Se encarga de mostrar la **cantidad actualizada** y el **total** en pantalla.
   - Se reutiliza tanto en el botón de sumar como en el de restar.

4. **Lógica de botones**
   - El botón **sumar** aumenta la cantidad sin límite.
   - El botón **restar** solo funciona si la cantidad es mayor a cero, evitando números negativos.



## 🧩 Ejemplo de funcionalidad

- Precio base: `$400.000`
- Si el usuario hace clic en **“+”** 3 veces, el total mostrado será `$1.200.000`.
- Si luego hace clic en **“–”**, el total baja a `$800.000`.

---

## ✅ Resultado esperado

El usuario debe ver en pantalla:

- El precio base del producto.
- La cantidad seleccionada.
- El total a pagar actualizado dinámicamente según la cantidad.

---

