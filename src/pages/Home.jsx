
import Footer from "../components/common/Footer/Footer";
import GetInt from "../components/common/GetInt/GetInt";
import  Header  from "../components/common/Header/Header";
import Navbar from "../components/common/Navbar/Navbar";
// import Subcribe from "../components/common/Subcribe/Subcribe";
import Intro from "./Intro";
import More from "./More";
import Services from "./Services";



const Home =() => {


return (

<>

<Header/>
{/* <Carrousel/> */}
<Navbar/>

<Intro/>
<Services/>
<More/>
{/* <Subcribe/> */}
<GetInt/>

<Footer/>

</>


)



}

export default Home;