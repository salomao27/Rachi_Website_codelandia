/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'max-md': {'max': '768px'},
        // Adicione outras media queries com 'max' aqui, se necessário
        'max-lg': {'max': '1024px'},
        'max-sm': {'max': '640px'},
      },

      colors:{
        primary: "#293145",
        header_text: "#6E7275",
        cadastro: "#EFF8FF",
        button_cadastro: "#0F9AFE"
      },

      margin:{
        header: "569px"
      },

      fontFamily:{
        sora: ["sora"],
        inter: ["inter"],
        roboto: ["roboto"],
        nunito: ["nunito"]
      },

      height:{
        cadastro: "640px",
        baixar_app:"475px",
        card: "471px"
      },
      width:{
        paragraph_app: "500px",
        text_planos: "570px",
        card: "370px"
      }

    },
   
  },
  plugins: [],
}

