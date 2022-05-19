module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter' : ['Inter', 'sans-serif'],
        'open-sans' :['Open Sans', 'sans-serif']
      },
      
      colors :{
       'primary' : '#1C3C6B',
        'secondary' : '#FCCD03',
         'background-color' : '#EBF0F4',
         'bg' : '#4963D1',
         'brdr' : '#bcc9dc',
         
   }
    },
    container:{
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1170px',
      }
    }
  },
  plugins: [],
}
