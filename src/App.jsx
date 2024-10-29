import MyBook from "./components/MyBook"

import Bg from './assets/BG.jpg'
 const BgStyle={
   backgroundImage:`url(${Bg})`,
   backgroundRepeat:"no-repeat",
   backgroundSize:"cover",
   backgroundPosition:"center",
   minHeight:"100vh",
   width:"100%",
   
 }

const App = () => {
  return (
    <div style={BgStyle} className="w-full h-full flex justify-center items-center">
      <MyBook />
    </div>
  )
}

export default App