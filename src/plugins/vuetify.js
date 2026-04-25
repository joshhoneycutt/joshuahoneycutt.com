import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#0F172A',
          surface: '#1E293B',
          'surface-variant': '#293548',
          primary: '#38BDF8',
          secondary: '#818CF8',
          error: '#F87171',
          info: '#38BDF8',
          success: '#34D399',
          warning: '#FBBF24',
        },
      },
    },
  },
})
