# Proyecto luis

## Descripción

Este es un sencillo juego interactivo de trivia que obtiene preguntas de una API externa (Open Trivia Database) y permite a los usuarios responderlas. El juego muestra una pregunta a la vez, y los usuarios pueden seleccionar una de las respuestas de opción múltiple. Además, el juego valida si la respuesta seleccionada es correcta y da retroalimentación visual al usuario.

## Características

- **Carga dinámica de preguntas**: Obtiene preguntas desde la [API de Open Trivia Database](https://opentdb.com/).
- **Respuestas desordenadas**: Las posibles respuestas se desordenan para asegurar que su posición sea aleatoria cada vez.
- **Validación de respuestas**: Resalta las respuestas correctas en verde y las incorrectas en rojo.
- **Botón de siguiente pregunta**: Después de responder una pregunta, el usuario puede hacer clic en el botón "Siguiente" para ir a la siguiente pregunta.
- **Botón de reinicio**: Una vez que se responden todas las preguntas, el botón "Iniciar" cambia a "Reiniciar" para permitir comenzar el quiz nuevamente.

## Tecnologías utilizadas

- **HTML**: Para estructurar la página.
- **CSS**: Para el estilo de la página y la retroalimentación visual de respuestas correctas/incorrectas.
- **JavaScript**: Para manejar la lógica, interactuar con la API y gestionar el flujo del quiz.
- **Axios**: Un cliente HTTP basado en promesas utilizado para obtener las preguntas desde la API de Open Trivia Database.

## ¿Cómo funciona?

1. **Iniciar el juego**: Cuando el usuario hace clic en el botón "Iniciar", el juego comienza obteniendo un conjunto de preguntas de trivia.
2. **Mostrar las preguntas**: La pregunta y las posibles respuestas se muestran al usuario. Las respuestas se ordenan de forma aleatoria.
3. **Responder las preguntas**: El usuario hace clic en uno de los botones de respuesta, lo que verifica si la respuesta es correcta. Las respuestas correctas se resaltan en verde, y las incorrectas en rojo.
4. **Siguiente pregunta**: Después de responder, el usuario puede hacer clic en el botón "Siguiente" para avanzar a la siguiente pregunta. Una vez que todas las preguntas han sido respondidas, el botón "Iniciar" se convierte en "Reiniciar".
5. **Reiniciar el quiz**: Al hacer clic en el botón "Reiniciar", el quiz se restablece y comienza de nuevo desde la primera pregunta.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

/index.html # El archivo HTML principal /style.css # El archivo CSS para los estilos /main.js # El archivo JavaScript con la lógica del quiz

markdown
Copiar código

## Empezando

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/trivia-quiz.git
    cd trivia-quiz
    ```

2. Abre el archivo `index.html` en tu navegador.

3. El juego comenzará cuando hagas clic en el botón "Iniciar". Responde las preguntas, haz clic en "Siguiente" y disfruta del quiz.

## Cómo Personalizarlo

- **Cambiar el número de preguntas**: Puedes modificar el número de preguntas obtenidas desde la API actualizando el parámetro `amount` en la URL de `axios.get` dentro de `main.js`. Por ejemplo, cambia `amount=10` a `amount=5` para obtener 5 preguntas.
  
- **Cambiar la dificultad**: Puedes cambiar la dificultad de las preguntas modificando el parámetro `difficulty` en la URL de la API (por ejemplo, `difficulty=easy`, `difficulty=medium`, `difficulty=hard`).

- **Estilos**: Puedes modificar el archivo `style.css` para cambiar el diseño visual del quiz.

## Ejemplo de la URL de la API

Las preguntas se obtienen desde la API de Open Trivia Database. Aquí tienes la URL utilizada para obtener las preguntas:

```bash
https://opentdb.com/api.php?amount=10&difficulty=easy
