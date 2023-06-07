import {Route, Routes} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.tsx";
import FooterComponent from "./components/FooterComponent/FooterComponent.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contacts from "./pages/Contacts.tsx";
import {ColorScheme, ColorSchemeProvider, MantineProvider} from "@mantine/core";
import {useState} from "react";


function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

 const links = [
     {link: '/', label: 'Главная', links: null},
     {link: '/about', label: 'О нас', links: null},
     {link: '/contacts', label: 'Контакты', links: null},
 ]
    const data = [
        {
            title: 'Portal',
            links:[
                {link: '/about', label:'О нас'},
                {link:'/contacts', label: 'Контакты'},
                {link:'/services', label: 'Услуги'}
            ]
        },
        {
            title: 'Еще столбик',
            links:[
                {link: '/', label:'Ссылка 1'},
                {link:'/', label: 'Ссылка 2'},
                {link:'/', label: 'Ссылка 3'}
            ]
        },
    ]
  return (
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{
              white:'#FFF',
              black:'#000',
              colorScheme: colorScheme,
              primaryColor: colorScheme === 'dark'? 'dark': 'gray',
          }}>
              <HeaderComponent links={links} />
              <main style={{backgroundColor: colorScheme === 'dark'? '#333': '#FFF'}}>
                  <Routes>
                      <Route path='/' element={<Home/>}/>
                      <Route path='/about' element={<About/>}/>
                      <Route path='/contacts' element={<Contacts/>}/>
                  </Routes>
              </main>
              <FooterComponent data={data}/>
          </MantineProvider>
      </ColorSchemeProvider>

  )
}

export default App
