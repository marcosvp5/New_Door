Descripción del Proyecto; Está desarrollado en lenguaje Javascript para promocionar servicios de compra y alquiler de inmuebles.

En este proyecto se aplica todo el conocimiento adquirido durante la cursada de "Full Stack Developer". El desarrollo se basa en la Arquitectura de la Información y el Diseño UI especificados por un pool de tarjetas de trabajo asignadas dentro de un cronograma sprint.

El producto pretende mejorar la experiencia del usuario buscando el impacto visual de los productos a través de la estetica minimalista para mejorar el enfoque hacia el objetivo pretendido.

Funciones y aplicaciones (funcionalidades):

Perfil de Administrador para administrar usuarios y gerenciar inmuebles.

Perfil de usuario para registrarse como usuario y también como administrador e iniciar sesión.

Ver una lista general de inmuebles traido desde la base de datos.

Filtrar los inmuebles por categoría según un criterio con 6 opciones.

Ver los detalles del producto seleccionado,

Tecnologías utilizadas:

JWT, para generar la credencial y mantener la persistencia del logueo.

Material UI, para visualizar los productos y experimentar las funcionalidades con estilos de la librería Material.

React, para renderizar los componentes desarrollados para las funcionalidades.

Postgre SQL, para administrar los datos de usuarios y productos de forma relacional manteniendo los cambios en memoria estática.

Sequelize, para crear y realizar cambios en la base de datos.

Redux, para crear y administrar cambios de estado de los elementos y actualizando la información hacia las entidades suscriptas.

Esta última tecnología nos permite una fácil manutención hacia un sitio web escalable y versatil a la hora de crecer.

Instrucciones para la instalación de la app:

Para instalar las dependencias ejecutar lo siguiente dentro del directorio principal:

npm install

Para sedear la base de datos ejecutar desde el directorio principal lo siguiente:

npm run seed

Para iniciar el servidor y el cliente ejecutar desde el directorio principal:

npm start

Se debe crear un archivo .env en la raiz de la carpeta server con las siguientes lineas:

PORT=3001 SECRET=palabraSecreta