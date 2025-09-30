import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            welcome: "Hi {{name}}, Welcome Back",
            profile: "Your Profile",
            uploadPhoto: "Upload Photo",
            fullName: "Full Name",
            email: "Email",
            phone: "Phone Number",
            language: "Language Preference",
            updates: "Get instant updates on the latest offers, deals, and exclusive offers.",
            save: "Save Changes",
            saving: "Saving...",
        },
    },
    es: {
        translation: {
            welcome: "Hola {{name}}, Bienvenido de nuevo",
            profile: "Tu Perfil",
            uploadPhoto: "Subir Foto",
            fullName: "Nombre Completo",
            email: "Correo electrónico",
            phone: "Número de Teléfono",
            language: "Preferencia de Idioma",
            updates: "Recibe actualizaciones instantáneas sobre las últimas ofertas, promociones y ofertas exclusivas.",
            save: "Guardar Cambios",
            saving: "Guardando...",
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default language
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
