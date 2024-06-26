<h1 align="center">JW Reports Auth Web</h1>

Este es un pequeño sitio web para las confirmaciones de correo y restablecimiento de contraseñas para la aplicación
JW Reports. Se creo puesto que el servicio de Supabase no ofrece un sitio para realizar estás funcionalidades.

Este es un pequeño documento que explica las tecnologías, entorno de desarrollo, correr en desarrollo y test del sitio.

<br>

<p align="center">
  <a href="https://creativecommons.org/licenses/by/4.0">
    <img alt="License: Attribution 4.0 International" src="https://img.shields.io/badge/License-Attribution%204.0%20International-blue.svg" />
  </a>
  <a href="https://github.com/KristhDev/ReactTasks-backend/releases/tag/v1.1.0">
    <img alt="Web version" src="https://img.shields.io/badge/Version-%201.1.0%20-brightgreen.svg" />
  </a>
</p>

<br>

## Indice
- [1. Tecnologías](#1.-tecnologias)
 - [1.1. React](#1.1.-react)
 - [1.2. TypeScript](#1.2.-typescript)
 - [1.3. Sass](#1.3.-sass)
 - [1.4. Supabase](#1.4.-supabase)
 - [1.5. Vitest](#1.5.-vitest)
 - [1.6. React Testing Library](#1.6.-react-testing-library)
 - [1.7. Enlaces](#1.7.-enlaces)
- [2. Entorno de desarrollo](#2.-entorno-de-desarrollo)
 - [2.1. Node.js](#2.1.-node.js)
 - [2.2. Pnpm (opcional)](#2.2.-pnpm-opcional)
 - [2.3. Enlaces](#2.3.-enlaces)
- [3. Correr en desarrollo](#3.-correr-en-desarrollo)
 - [3.1. Clonar repositorio](#3.1.-clonar-repositorio)
 - [3.2. Variables de entorno](#3.2.-variables-de-entorno)
 - [3.3. Instalar dependencias](#3.3.-instalar-dependencias)
 - [3.4. Correr aplicación](#3.4.-correr-aplicacion)  
- [4. Test](#4.-test)
 - [4.1. Rama testing](#4.1.-rama-testing)
 - [4.2. Instalación de dependencias](#4.2.-instalacion-de-dependencias)
 - [4.3. Ejecutar tests](#4.3.-ejecutar-tests)
  - [4.3.1 Correr todos los tests](#4.3.1.-correr-todos-los-tests)
  - [4.3.2 Correr tests en una interfaz de usuario](#4.3.2.-correr-tests-en-una-interfaz-de-usuario)
  - [4.3.3 Correr tests unitarios](#4.3.3.-correr-tests-unitarios)
  - [4.3.4 Correr tests generando el reporte de coverage](#4.3.4.-correr-tests-generando-el-reporte-de-coverage)

<a name="1.-tecnologias"></a>
## 1. Tecnologías

<a name="1.1.-react"></a>
### 1.1. React
Es una **biblioteca Javascript de código abierto** diseñada para crear interfaces de usuario con el objetivo de **facilitar
el desarrollo de aplicaciones** en una sola página. Es mantenido por Facebook y la comunidad de software libre. 

React intenta ayudar a los desarrolladores a construir **aplicaciones que usan datos que cambian todo el tiempo.** Su objetivo
es ser **sencillo, declarativo y fácil de combinar.** React sólo maneja la interfaz de usuario en una aplicación; React es la 
Vista en un contexto en el que se use el patrón MVC o MVVM.

<a name="1.2.-typescript"></a>
### 1.2. TypeScript
Es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un **superconjunto 
de JavaScript**, que esencialmente añade tipos estáticos y objetos basados en clases. **Extiende la sintaxis de JavaScript**,
por tanto cualquier código JavaScript existente debería funcionar sin problemas.

Soporta **ficheros de definición** que contengan información sobre los tipos de librerías JavaScript existentes, similares
a los ficheros de cabeceras de C/C++ que describen la estructura de ficheros de objetos existentes. Esto permite a otros
programas usar los valores definidos en los ficheros como si fueran entidades TypeScript de tipado estático.

<a name="1.3.-sass"></a>
### 1.3. Sass
Es un **preprocesador de css.** Permite a los desarrolladores **escribir CSS de manera más eficiente y con mayor
flexibilidad.** Sass agrega funcionalidades adicionales a CSS, como **variables, funciones y bucles,** lo que facilita la
escritura y la gestión de grandes hojas de estilo.

Esos archivos se compilan en hojas de estilo CSS que se pueden utilizar en una aplicación web.

<a name="1.4.-supabase"></a>
### 1.4. Supabase
Es una **alternativa de Firebase de código abierto.** Una **plataforma de bases de datos en la nube** que combina la
simplicidad y la accesibilidad de una **herramienta de gestión de bases de datos** no relacionales con la potencia y
la escalabilidad de una base de datos relacional.

Supabase es una opción popular para desarrolladores y empresas que buscan una solución de bases de datos en la nube para
sus aplicaciones y proyectos.

<a name="1.5.-vitest"></a>
### 1.5. Vitest
Es un un **test runner** el cuál nos permitirá **ejecutar nuestros tests de una manera muy rápida.** Los test runner son
frameworks los cuáles nos permiten escribir tests con JavaScript y ejecutarlos.

<a name="1.6.-react-testing-library"></a>
### 1.6. React Testing Library
Es una **biblioteca de pruebas** para aplicaciones construidas con React, una biblioteca de JavaScript para el desarrollo
de aplicaciones web. React Testing Library **proporciona un conjunto de herramientas y funciones que facilitan la escritura
de pruebas** unitarias y de integración para componentes React.

Se **centra en probar la funcionalidad de la aplicación** desde el punto de vista del usuario, en lugar de centrarse en
los detalles internos de cómo está construido el componente.

<a name="1.7.-enlaces"></a>
### 1.7. Enlaces
* [React](https://es.reactjs.org)  
* [TypeScript](https://www.typescriptlang.org)  
* [Sass](https://sass-lang.com)  
* [Supabase](https://supabase.com)  
* [Vitest](https://vitest.dev)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

<br>

<a name="2.-entorno-de-desarrollo"></a>
## 2. Entorno de desarrollo
Para montar el entorno de desarrollo y correr la aplicación se necesitan los siguientes programas:

<a name="2.1.-node.js"></a>
### 2.1. Node.js
Es un **entorno en tiempo de ejecución multiplataforma para la capa del servidor** (en el lado del servidor) basado en 
JavaScript. Controlado por eventos, diseñado para crear aplicaciones escalables, permitiéndote establecer y gestionar 
múltiples conexiones al mismo tiempo. Gracias a esta característica, no tienes que preocuparte con el bloqueo de procesos, 
pues no hay bloqueos.

Node.js está **basado en el motor V8 de Google**, uno de los intérpretes de lenguaje de programación que existen. Este 
motor se encarga de compilar el código JavaScript en código de máquina, un código de nivel más bajo que no hace falta 
que sea interpretado por el navegador.

<a name="2.2.-pnpm-opcional"></a>
### 2.2. Pnpm (opcional)
Es un **gestor de paquetes de JavaScript** para aplicaciones web y Node.js. Es una **alternativa a npm y yarn,** dos de los gestores 
de paquetes más populares de la industria.

Pnpm se destaca por su **enfoque en el rendimiento y la eficiencia.** En lugar de descargar cada paquete en el directorio de
node_modules de cada proyecto, pnpm **utiliza un único almacén central para todos los paquetes instalados en un sistema,** lo 
que significa que los paquetes se descargan una sola vez y se comparten entre los diferentes proyectos. Esto **reduce el tamaño 
de los proyectos y acelera el proceso de instalación** de paquetes.

<a name="2.3.-enlaces"></a>
### 2.3. Enlaces
 * [Node.js](https://nodejs.org)
 * [Pnpm](https://pnpm.io/es)

<br>

<a name="3.-correr-en-desarrollo"></a>
## 3. Correr en desarrollo
Apartir de aquí se explicará cómo levantar el sitio en desarrollo.

<a name="3.1.-clonar-repositorio"></a>
### 3.1. Clonar repositorio
Lo primero es clonar el repositorio de git, para ello **abra una terminal** (cmd, powershell, gitbash, etc) y escriba el 
siguente comando:

```bash
git clone https://github.com/KristhDev/JW-Reports-auth-web.git
```

<a name="3.2.-variables-de-entorno"></a>
### 3.2. Variables de entorno
En el repositorio está un **archivo de ejemplo de variables de entorno** `.env.example`. Copie ese archivo y renombrelo
cómo `.env`. Luego **reemplacé los valores por los que da Supabase.** Recuerde que para ello ya **debe tener una cuenta**
en Supabase y haber **creado un proyecto.**

| VITE_SUPABASE_APY_KEY | VITE_SUPABASE_URL |
|-----------------------|-------------------|
| Es la clave para hacer las operaciones necesarias con un proyecto de Supabase | Es la url del proyecto de Supabase |

<a name="3.3.-instalar-dependencias"></a>
### 3.3. Instalar dependencias
Una vez clonado y con las variables de entorno haga un ```cd``` a la **raíz del proyecto** y ejecute el siguiente comando:

```bash
pnpm install
```

<a name="3.4.-correr-aplicacion"></a>
### 3.4. Correr aplicación
Una vez instaladas las dependencias ejecute el siguiente comando:

```bash
pnpm dev
```

Y listo, la aplicación ya estará corriendo localmente.

<br>

<a name="4.-test"></a>
## 4. Test

<a name="4.1.-rama-testing"></a>
### 4.1. Rama testing
Como habrá notado en el respositorio hay varias ramas, toda la configuración y test se encuentran en la rama ```testing```,
así que ejecute en la terminal:

```bash
git switch testing
```

<a name="4.2.-instalacion-de-dependencias"></a>
### 4.2. Instalación de dependencias
Ejecute el siguiente comando para instalar las dependencias necesarias

```bash
pnpm install
```

<a name="4.3.-ejecutar-tests"></a>
### 4.3. Ejecutar tests
Dispone de varios comandos para ejecturar los tests, cada uno diferentes propositos:

<a name="4.3.1.-correr-todos-los-tests"></a>
#### 4.3.1 Correr todos los tests
Este es el primer comando para ejecutar los tests, lo que hará es ejecutar todos los tests.

```bash
pnpm test
```

<a name="4.3.2.-correr-tests-en-una-interfaz-de-usuario"></a>
#### 4.3.2 Correr tests en una interfaz de usuario
Vitest tiene un modo ui donde ejecuta los tests y se muestra en una interfaz gráfica.

```bash
pnpm test:ui
```

<a name="4.3.3.-correr-tests-unitarios"></a>
#### 4.3.3 Correr tests unitarios
Este comando es un filtro que ejecuta unicamente los tests unitarios.

```bash
pnpm test:unit
```

<a name="4.3.4.-correr-tests-generando-el-reporte-de-coverage"></a>
#### 4.3.4 Correr tests generando el reporte de coverage
Este comando ejecuta todos los test y genera el reporte de coverage.

```bash
pnpm test:coverage
```

<br>

___

Para más información contactar a kristhdev@gmail.com

