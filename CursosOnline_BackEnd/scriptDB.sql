/* SCRIPT DE LA BDD */

-- ** CONFIGURACION INICIAL **
SET CHARACTER SET utf8;
SET NAMES utf8;


-- ** TABLAS **
-- Tabla ROL
CREATE TABLE rol (
    id_rol INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(16) NOT NULL
);

-- Tabla USUARIO
CREATE TABLE usuario (
    id_usuario VARCHAR(16) NOT NULL PRIMARY KEY,
    nombre_usuario VARCHAR(128) NOT NULL,
    correo_usuario VARCHAR(32) NOT NULL,
    contrasenia_usuario VARCHAR(16) NOT NULL,
    rol_usuario VARCHAR(16) NOT NULL
);

-- Tabla CREADOR
CREATE TABLE creador (
    id_creador VARCHAR(16) NOT NULL PRIMARY KEY,
    nombre_creador VARCHAR(128) NOT NULL,
    correo_creador VARCHAR(32) NOT NULL,
    contrasenia_creador VARCHAR(16) NOT NULL,
    rol_creador VARCHAR(16) NOT NULL,
    cursos_creador INT DEFAULT 0
);

-- Tabla CURSO
CREATE TABLE curso (
    id_curso INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_creador VARCHAR(16) NOT NULL,
    nombre_curso VARCHAR(50) NOT NULL,
    descripcion_curso VARCHAR(255),
    estado_curso VARCHAR(24) NOT NULL,
    fecha_inicio_curso DATE,
    fecha_fin_curso DATE,
    FOREIGN KEY (id_creador) REFERENCES creador(id_creador)
);


-- ** DATOS DE LAS TABLAS **

-- DATOS DE ROL
INSERT INTO rol (nombre_rol) VALUES
('ADMINISTRADOR'),
('CREADOR_C'),
('CONSUMIDOR_C');

-- DATOS DE USUARIO
INSERT INTO usuario (id_usuario, nombre_usuario, correo_usuario, contrasenia_usuario, rol_usuario) VALUES
('1726189754', 'Francisco Suntaxi', 'sfsuntaxi1@espe.edu.ec', 'admin', 'ADMINISTRADOR'),  -- Administrador
('1726189755', 'Nombre del admin', 'admin@admin.com', '12345678', 'ADMINISTRADOR'),  -- Administrador
('1787654321', 'Ricardo Grijalva', 'rsgrijalva@espe.edu.ec', '1234', 'CONSUMIDOR_C');  -- Consumidor de contenido

-- DATOS DE creador
INSERT INTO creador (id_creador, nombre_creador, correo_creador, contrasenia_creador, rol_creador) VALUES
('1012345678', 'Luis Espinosa', 'lxespinosa@espe.edu.ec', '1234', 'CREADOR_C');  -- Creador de contenido


-- DATOS DE CURSO
INSERT INTO curso (id_creador, nombre_curso, descripcion_curso, estado_curso, fecha_inicio_curso, fecha_fin_curso) VALUES
('1012345678','Programación de redes neuronales con python', 'Curso introductorio de programación de redes neuronales convolucionales en Python', 'En construcción', '2024-07-01', '2024-08-30'),  -- Creado por Luis Espinosa
('1012345678','Diseño Gráfico Avanzado', 'Curso avanzado de diseño gráfico', 'Inactivo', '2024-06-15', '2024-08-15'),  -- Creado por Luis Espinosa
('1012345678','Introducción a la Inteligencia Artificial', 'Curso básico sobre IA', 'Activo', '2024-07-10', '2024-09-10');  -- Creado por Nombre del admin
