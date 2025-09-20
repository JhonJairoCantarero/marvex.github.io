// Configuración de EmailJS para el envío de correos
// IMPORTANTE: Reemplaza estos valores con los de tu cuenta de EmailJS

export const EMAILJS_CONFIG = {
    // Tu Service ID de EmailJS (ej: service_abc123)
    SERVICE_ID: 'service_marvex',
    
    // Tu Template ID de EmailJS (ej: template_xyz789)
    TEMPLATE_ID: 'template_cotizacion',
    
    // Tu Public Key de EmailJS (ej: user_abc123def456)
    PUBLIC_KEY: 'your_public_key_here',
    
    // Email de destino para las notificaciones
    TO_EMAIL: 'ecantarero@Ferrecarmen.com'
};

// Template de correo sugerido para EmailJS:
/*
Asunto: Nueva Solicitud de Cotización - Marvex

Hola,

Has recibido una nueva solicitud de cotización a través del sitio web de Marvex:

Datos del Cliente:
- Nombre: {{nombre_cliente}}
- Teléfono: {{telefono_cliente}}
- Cantidad de cajas: {{cantidad_cajas}}
- Ciudad: {{ciudad_cliente}}
- Departamento: {{departamento_cliente}}
- Mensaje: {{mensaje_cliente}}
- Fecha de solicitud: {{fecha_solicitud}}

Por favor, contacta al cliente lo antes posible.

Saludos,
Sistema Marvex
*/
