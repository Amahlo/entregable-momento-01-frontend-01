# Sistema de Validación de Acceso

## Descripción

Proyecto que simula un sistema de inicio de sesión mediante ventanas emergentes (`prompt` y `alert`) del navegador. El usuario dispone de un número limitado de intentos para ingresar un usuario y una contraseña correctos; si los agota sin éxito, el sistema bloquea el acceso.

Con fines didácticos, la misma lógica está resuelta de **dos formas distintas**, usando un ciclo `for` y un ciclo `while`, para comparar ambos enfoques sobre un mismo problema.

## Estructura del proyecto

```
├── for/
│   ├── index.html
│   ├── main.js
│   └── validar.js
│
└── while/
    ├── index.html
    ├── main.js
    └── validar.js
```

Cada carpeta contiene una implementación independiente y funcional del mismo ejercicio.

## Descripción de los archivos

- **`index.html`**: documento HTML base que carga el script `main.js` como módulo (`type="module"`).
- **`main.js`**: contiene la función `validarAcceso()`, que gestiona el flujo de intentos de inicio de sesión, solicita las credenciales al usuario y llama a las funciones del módulo `validar.js`.
- **`validar.js`**: módulo con dos funciones exportadas:
  - `validar(usuario, password, usuarioCorrecto, passwordCorrecto)`: compara las credenciales ingresadas contra las correctas y devuelve `true` o `false`.
  - `mensaje(acceso, intentosActuales, intentosMaximos)`: muestra al usuario un mensaje según el resultado del intento (acceso concedido, intento fallido o bloqueo por exceso de intentos).

## Comparación entre las dos soluciones

| Aspecto | Solución con `for` | Solución con `while` |
|---|---|---|
| Ciclo utilizado | `for (let i = 1; i <= INTENTOS_MAXIMOS; i++)` | `while (intentosActuales < INTENTOS_MAXIMOS && !accesoConcedido)` |
| Condición de salida | `return` dentro del ciclo cuando el acceso es válido | Condición doble en el `while`: intentos restantes **y** acceso no concedido |
| Conteo de intentos | Lo controla la variable de iteración del `for` | Se incrementa manualmente con `intentosActuales++` |
| Legibilidad | Más compacta, ideal cuando se conoce el número de repeticiones de antemano | Más explícita sobre las condiciones de continuidad del ciclo |

Ambas soluciones son funcionalmente equivalentes: la lógica de validación (`validar.js`) es idéntica en los dos casos, y lo que cambia es únicamente la estructura de control del ciclo en `main.js`.

## Cómo ejecutar el proyecto

1. Clona el repositorio.
2. Entra a la carpeta de la solución que quieras probar (`solucion-for` o `solucion-while`).
3. Abre el archivo `index.html` en el navegador (por ejemplo, con la extensión **Live Server** de VS Code, ya que los módulos de ES6 requieren un servidor local).
4. Sigue las instrucciones en pantalla para ingresar usuario y contraseña.

**Credenciales de prueba:**
- Usuario: `admin`
- Contraseña: `bcd321`

## Objetivos del ejercicio

- Practicar el uso de módulos en JavaScript (`export` / `import`).
- Comparar el comportamiento y la sintaxis de los ciclos `for` y `while` aplicados a un mismo caso de uso.
- Reforzar el manejo de condicionales y control de flujo en la validación de credenciales.

## Tecnologías utilizadas

- HTML
- JavaScript (ES6 Modules)
- Visual Studio Code