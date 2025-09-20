# Configuración de Supabase y EmailJS para el Formulario de Cotización

## ✅ Supabase - Configurado

La integración con Supabase ya está configurada y funcionando. Los datos se guardarán en la tabla `cotizacion` con la siguiente estructura:

- `id` (int8, Primary Key, auto-increment)
- `created_at` (timestamp, default: now())
- `nombre` (text)
- `telefono` (text)
- `cantidad` (text)
- `ciudad` (text)
- `departamento` (text)
- `mensaje` (text)

## 📧 EmailJS - Configuración Requerida

Para que el envío de correos funcione, necesitas configurar EmailJS:

### 1. Crear cuenta en EmailJS
1. Ve a [emailjs.com](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Configurar el servicio de email
1. En el dashboard, ve a "Email Services"
2. Agrega un nuevo servicio (Gmail, Outlook, etc.)
3. Sigue las instrucciones para conectar tu email
4. Copia el **Service ID** (ej: `service_abc123`)

### 3. Crear template de email
1. Ve a "Email Templates"
2. Crea un nuevo template
3. Usa este contenido:

**Asunto:**
```
Nueva Solicitud de Cotización - Marvex
```

**Contenido:**
```
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
```

4. Copia el **Template ID** (ej: `template_xyz789`)

### 4. Obtener Public Key
1. Ve a "Account" → "General"
2. Copia tu **Public Key** (ej: `user_abc123def456`)

### 5. Actualizar configuración
Edita el archivo `src/config/emailjs.js` y reemplaza los valores:

```javascript
export const EMAILJS_CONFIG = {
    SERVICE_ID: 'tu_service_id_aqui',
    TEMPLATE_ID: 'tu_template_id_aqui',
    PUBLIC_KEY: 'tu_public_key_aqui',
    TO_EMAIL: 'ecantarero@Ferrecarmen.com'
};
```

## 🧪 Pruebas

### Probar Supabase
1. Abre la consola del navegador (F12)
2. Llena y envía el formulario
3. Verifica en la consola que aparezca: "Datos guardados exitosamente"

### Probar EmailJS
1. Configura EmailJS según las instrucciones anteriores
2. Envía el formulario
3. Verifica que llegue el correo a `ecantarero@Ferrecarmen.com`

## 🔧 Solución de Problemas

### Error de Supabase
- Verifica que la tabla `cotizacion` exista en tu proyecto de Supabase
- Asegúrate de que Row Level Security (RLS) esté configurado correctamente
- Revisa que las políticas permitan INSERT en la tabla

### Error de EmailJS
- Verifica que todos los IDs estén correctos en `src/config/emailjs.js`
- Asegúrate de que el template tenga las variables correctas
- Revisa que el servicio de email esté conectado correctamente

### Fallback
Si EmailJS falla, los datos se mostrarán en la consola del navegador para envío manual.

## 📱 Funcionalidades Implementadas

✅ Formulario de cotización completo
✅ Validación en tiempo real
✅ Integración con Supabase
✅ Envío de correos con EmailJS
✅ Manejo de errores
✅ Interfaz responsive
✅ Animaciones y UX mejorada

## 🚀 Próximos Pasos

1. Configurar EmailJS según las instrucciones
2. Probar el formulario completo
3. Verificar que los datos lleguen a Supabase
4. Confirmar que los correos lleguen al destinatario
5. Opcional: Agregar más validaciones o campos al formulario
