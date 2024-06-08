/* SCRIPT DE LA BDD */

SET CHARACTER SET utf8;
SET NAMES utf8;

-- Tabla ROL
CREATE TABLE rol (
    id_rol INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(15) NOT NULL
);

-- Tabla USUARIO
CREATE TABLE usuario (
    id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombres_usuario VARCHAR(30) NOT NULL,
    apellidos_usuario VARCHAR(30) NOT NULL,
    email_usuario VARCHAR(50) NOT NULL,
    contrasenia_usuario VARCHAR(50) NOT NULL,
    id_rol INT NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES rol(id_rol)
);

-- Tabla CURSO
CREATE TABLE curso (
    id_curso INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_curso VARCHAR(50) NOT NULL,
    descripcion_curso VARCHAR(255),
    estado_curso VARCHAR(20) NOT NULL,
    cupo_maximo_curso INT,
    precio_curso DECIMAL(10, 2),
    fecha_inicio_curso DATE,
    fecha_fin_curso DATE,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);


-- DATOS DE ROL
INSERT INTO rol (nombre_rol) VALUES
('ADMINISTRADOR'),
('CREADOR_C'),
('CONSUMIDOR_C');

-- DATOS DE USUARIO
INSERT INTO usuario (nombres_usuario, apellidos_usuario, email_usuario, contrasenia_usuario, id_rol) VALUES
('Francisco', 'Suntaxi', 'sfsuntaxi1@espe.edu.ec', 'admin', 1),  -- Administrador
('Nombre del admin', 'Apellido del admin', 'admin@admin.com', '12345678', 1),  -- Administrador
('Luis', 'Espinosa', 'lxespinosa@espe.edu.ec', '1234', 2),  -- Creador de contenido
('Ricardo', 'Grijalva', 'rsgrijalva@espe.edu.ec', '1234', 3);  -- Consumidor de contenido

-- DATOS DE CURSO
INSERT INTO curso (nombre_curso, descripcion_curso, estado_curso, cupo_maximo_curso, precio_curso, fecha_inicio_curso, fecha_fin_curso, id_usuario) VALUES
('Programación de redes neuronales con python', 'Curso introductorio de programación de redes neuronales convolucionales en Python', 'En construcción', 20, 99.99, '2024-07-01', '2024-08-30', 3),  -- Creado por Luis Espinosa
('Diseño Gráfico Avanzado', 'Curso avanzado de diseño gráfico', 'Inactivo', 15, 149.99, '2024-06-15', '2024-08-15', 3),  -- Creado por Luis Espinosa
('Introducción a la Inteligencia Artificial', 'Curso básico sobre IA', 'Activo', 30, 79.99, '2024-07-10', '2024-09-10', 3);  -- Creado por Nombre del admin
