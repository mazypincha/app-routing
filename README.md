# Gestión y Visualización de Datos con Pipes y Servicios - UTN BA

## Descripción del Proyecto
Este proyecto representa la resolución de la actividad práctica correspondiente al Módulo 1 - Unidad 4 del curso "Desarrollo en Angular" de la UTN BA.

## Funcionalidades y Arquitectura de Código
- **Navegación Dinámica Descentralizada:** Se configuró el enrutador principal enlazado a archivos de sub-rutas independientes (`usuarios.routes.ts` y `productos.routes.ts`) garantizando que los recursos se carguen únicamente al activar su respectivo segmento de URL.
- **Rutas Dinámicas (`/productos/:id`):** Implementación de lecturas asincrónicas de parámetros variables desde la ruta utilizando la inyección de `ActivatedRoute` mediante capturas de instantáneas operativas.
- **Persistencia de Sesión (`sessionStorage`):** Almacenamiento clave-valor automatizado en cada ciclo de vida `ngOnInit` para guardar el último módulo de interés del cliente y forzar una redirección inteligente inmediata a través de un componente de control unificado (`HomeComponent`).
- **Navegación Fluida:** Despliegue estructural basado estrictamente en el uso coordinado de las directivas `routerLink` y `<router-outlet>`.

---

## Instrucciones de Instalación y Ejecución

### 1. Clonar el repositorio
Descargue una copia local del proyecto ejecutando:
```bash
git clone git@github.com:mazypincha/app-routing.git
```

### 2. Instalar dependencias
```bash
cd app-productos
npm install
```

### 3. Ejecutar la aplicación
```bash
ng serve
```

### 4. Acceso en el navegador
http://localhost:4200/