<h1 align="center">JW Reports Auth Web</h1>

<br>

Este es un pequeño sitio web para las confirmaciones de correo y restablecimiento de contraseñas para la aplicación
JW Reports. Se creo puesto que el servicio de Supabase no ofrece un sitio para realizar estás funcionalidades.

Este es un pequeño documento que explica las tecnologías, entorno de desarrollo, correr en desarrollo y test del sitio.

## 1) Tecnologías

### 1.1) React
Es una **biblioteca Javascript de código abierto** diseñada para crear interfaces de usuario con el objetivo de **facilitar
el desarrollo de aplicaciones** en una sola página. Es mantenido por Facebook y la comunidad de software libre. 

React intenta ayudar a los desarrolladores a construir **aplicaciones que usan datos que cambian todo el tiempo.** Su objetivo
es ser **sencillo, declarativo y fácil de combinar.** React sólo maneja la interfaz de usuario en una aplicación; React es la 
Vista en un contexto en el que se use el patrón MVC o MVVM.

### 1.2) TypeScript
Es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un **superconjunto 
de JavaScript**, que esencialmente añade tipos estáticos y objetos basados en clases. **Extiende la sintaxis de JavaScript**,
por tanto cualquier código JavaScript existente debería funcionar sin problemas.

Soporta **ficheros de definición** que contengan información sobre los tipos de librerías JavaScript existentes, similares
a los ficheros de cabeceras de C/C++ que describen la estructura de ficheros de objetos existentes. Esto permite a otros
programas usar los valores definidos en los ficheros como si fueran entidades TypeScript de tipado estático.

### 1.3) Sass
Es un **preprocesador de css.** Permite a los desarrolladores **escribir CSS de manera más eficiente y con mayor
flexibilidad.** Sass agrega funcionalidades adicionales a CSS, como **variables, funciones y bucles,** lo que facilita la
escritura y la gestión de grandes hojas de estilo.

Esos archivos se compilan en hojas de estilo CSS que se pueden utilizar en una aplicación web.

### 1.4) Supabase
Es una **alternativa de Firebase de código abierto.** Una **plataforma de bases de datos en la nube** que combina la
simplicidad y la accesibilidad de una **herramienta de gestión de bases de datos** no relacionales con la potencia y
la escalabilidad de una base de datos relacional.

Supabase es una opción popular para desarrolladores y empresas que buscan una solución de bases de datos en la nube para
sus aplicaciones y proyectos.

### 1.5) Vitest
Es un un **test runner** el cuál nos permitirá **ejecutar nuestros tests de una manera muy rápida.** Los test runner son
frameworks los cuáles nos permiten escribir tests con JavaScript y ejecutarlos.

### 1.6) React Testing Library
Es una **biblioteca de pruebas** para aplicaciones construidas con React, una biblioteca de JavaScript para el desarrollo
de aplicaciones web. React Testing Library **proporciona un conjunto de herramientas y funciones que facilitan la escritura
de pruebas** unitarias y de integración para componentes React.

Se **centra en probar la funcionalidad de la aplicación** desde el punto de vista del usuario, en lugar de centrarse en
los detalles internos de cómo está construido el componente.

### 1.7) Enlaces
* [React](https://es.reactjs.org)  
* [TypeScript](https://www.typescriptlang.org)  
* [Sass](https://sass-lang.com)  
* [Supabase](https://supabase.com)  
* [Vitest](https://vitest.dev)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

<br>

## 2) Entorno de desarrollo

Para montar el entorno de desarrollo y correr la aplicación se necesitan los siguientes programas:

### 2.1) Node.js
Es un **entorno en tiempo de ejecución multiplataforma para la capa del servidor** (en el lado del servidor) basado en 
JavaScript. Controlado por eventos, diseñado para crear aplicaciones escalables, permitiéndote establecer y gestionar 
múltiples conexiones al mismo tiempo. Gracias a esta característica, no tienes que preocuparte con el bloqueo de procesos, 
pues no hay bloqueos.

Node.js está **basado en el motor V8 de Google**, uno de los intérpretes de lenguaje de programación que existen. Este 
motor se encarga de compilar el código JavaScript en código de máquina, un código de nivel más bajo que no hace falta 
que sea interpretado por el navegador.

### 2.2) Pnpm (opcional)
Es un **gestor de paquetes de JavaScript** para aplicaciones web y Node.js. Es una **alternativa a npm y yarn,** dos de los gestores 
de paquetes más populares de la industria.

Pnpm se destaca por su **enfoque en el rendimiento y la eficiencia.** En lugar de descargar cada paquete en el directorio de
node_modules de cada proyecto, pnpm **utiliza un único almacén central para todos los paquetes instalados en un sistema,** lo 
que significa que los paquetes se descargan una sola vez y se comparten entre los diferentes proyectos. Esto **reduce el tamaño 
de los proyectos y acelera el proceso de instalación** de paquetes.

### 2.3) Enlaces
 * [Node.js](https://nodejs.org)
 * [Pnpm](https://pnpm.io/es)

<br>

## 3) Correr en desarrollo
Apartir de aquí se explicará cómom levantar el sitio en desarrollo.

### 3.1) Clonar respositorio
Lo primero es clonar el repositorio de git, para ello **abre una terminal** (cmd, powershell, gitbash, etc) y escribe el 
siguente comando:
```
git clone https://github.com/KristhDev/JW-Reports-auth-web.git
```

### 3.2) Variables de entorno
En el repositorio está un **archivo de ejemplo de variables de entorno** `.env.example`. Copia ese archivo y renombralo
cómo `.env`. Luego **reemplaza los valores por los que da Supabase.** Recuerda que para ello ya **debes tener una cuenta**
en Supabase y haber **creado un proyecto.**

| VITE_SUPABASE_APY_KEY | VITE_SUPABASE_URL |
|-----------------------|-------------------|
| Es la clave para hacer las operaciones necesarias con un proyecto de Supabase | Es la url del proyecto de Supabase |

### 3.3) Instalar dependencias
Una vez clonado y con las variables de entorno haz un ```cd``` a la **raíz del proyecto** y ejecuta el siguiente comando:
```
pnpm install
``` 
<br>

En el punto anterior se mencionó que **pnpm es opcional**, puedes usar el gestor que desees, sea ```npm``` o ```yarn```, si 
vas a cambiar pnpm asegurate de borrar el archivo ```pnpm-lock.yaml```

Si usas npm:
```
npm install
```

Si usas yarn:
```
yarn install
```

### 3.4) Correr aplicación
Una vez instaladas las dependencias ejecuta el siguiente comando:


Si usas pnpm:
```
pnpm dev
```

Si usas yarn:
```
yarn dev
``` 

Si usas npm:
```
npm run dev
```

<br>

Y listo, la aplicación ya estará corriendo localmente.

<br>

## 4) Test

### 4.1) Rama testing
Como habrá notado en el respositorio hay varias ramas, toda la configuración y test se encuentran en la rama ```testing```,
así que ejecute en la terminal:

```
git checkout testing
```

### 4.2) Instalación de dependencias
Ejecute el siguiente comando para instalar las dependencias necesarias

```
pnpm install
```
<br>

Nuevamente, si usa otro gestor de dependencias que ```no sea pnpm``` borre el archivo ```pnpm-lock.yaml``` y ejecute:

Si usas npm:
```
npm install
```

Si usas yarn:
```
yarn install
```

### 4.3) Ejecutar tests
Tiene dos comandos para la ejecución de tests para distintos casos:

* Ejecutar y ver en terminal:

  Si usas pnpm:
  ```
  pnpm test
  ```

  Si usas yarn:
  ```
  yarn test
  ``` 

  Si usas npm:
  ```
  npm run test
  ```
  <br>

* Ejecutar y ver resultados tanto en terminal como en el navegador:
  
  Si usas pnpm:
  ```
  pnpm test:ui
  ```

  Si usas yarn:
  ```
  yarn test:ui
  ``` 

  Si usas npm:
  ```
  npm run test:ui
  ```
  <br>

___

Para más información contactar a kristhdev@gmail.com

