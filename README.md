# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

## 📧 Configuración SMTP para correos (sin APIs de terceros)

Para que el formulario envíe correos automáticamente al guardar la cotización, configura SMTP:

1) Crea un archivo `.env` en la raíz con:

```
SMTP_HOST=smtp.tu_proveedor.com
SMTP_PORT=465
SMTP_USER=tu_usuario@tu_dominio.com
SMTP_PASS=tu_contraseña
TO_EMAIL=ecantarero@Ferrecarmen.com
```

2) Inicia el servidor de desarrollo:

```
npm run dev
```

Notas:
- El endpoint está en `src/pages/api/send-email.ts` y usa Nodemailer.
- Acepta POST con JSON: `{ nombre, telefono, cantidad, ciudad, departamento, mensaje }`.
- Funciona en desarrollo y producción del servidor. En hosting estático puro no se ejecutará.

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
