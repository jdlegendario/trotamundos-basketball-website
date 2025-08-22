# 🗄️ Configuración de Base de Datos con Supabase

## 📋 Pasos para configurar Supabase

### 1. Crear cuenta en Supabase
1. Ve a [https://supabase.com](https://supabase.com)
2. Haz clic en "Start your project"
3. Crea una cuenta gratuita

### 2. Crear nuevo proyecto
1. Haz clic en "New Project"
2. Nombre del proyecto: `trotamundos-basketball`
3. Contraseña de la base de datos: (crea una segura)
4. Región: Selecciona la más cercana
5. Haz clic en "Create new project"

### 3. Obtener credenciales
Una vez creado el proyecto:
1. Ve a "Settings" → "API"
2. Copia:
   - **Project URL** (algo como: `https://xyzabc123.supabase.co`)
   - **Project API Key (anon public)** (una clave larga que empieza con `eyJhbGciOi...`)

### 4. Configurar variables de entorno
1. Crea el archivo `.env.local` en la raíz del proyecto
2. Agrega las credenciales:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.tu-clave-completa...
```

### 5. Crear las tablas
1. En Supabase, ve a "SQL Editor"
2. Copia y pega el contenido del archivo `database/setup.sql`
3. Haz clic en "Run" para ejecutar el script
4. Verifica que se crearon las tablas en "Table Editor"

### 6. Verificar datos de ejemplo
Las tablas deberían tener datos de ejemplo:
- **news**: 3 noticias
- **events**: 3 eventos
- **teams**: 4 equipos
- **gallery**: 4 imágenes

## 🔒 Configuración de Seguridad (Opcional)

Si quieres que solo los administradores puedan editar:

1. Ve a "Authentication" → "Policies"
2. Activa RLS (Row Level Security) para cada tabla
3. Crea políticas personalizadas

## 🚀 Después de la configuración

Una vez configurado, el panel de administración:
- ✅ Guardará datos permanentemente
- ✅ Los cambios se verán en el sitio web
- ✅ Funcionará para múltiples usuarios
- ✅ Tendrá backup automático

## ❓ Solución de problemas

### Error de conexión:
- Verifica que las URLs sean correctas
- Asegúrate de que el archivo `.env.local` esté en la raíz
- Reinicia el servidor de desarrollo

### No aparecen los datos:
- Verifica que las tablas se crearon correctamente
- Revisa la consola del navegador para errores
- Comprueba que `published = true` en los datos
