import "./Home.css";
import {Navigation} from "./Navigation";
import Image from "./Image";
import Card from "./Card";
import  Contact from "./Contact";



function Home() {
  return (
    <div >
    <Navigation/>
    <Image/>
    
<h1 id="course"> Courses</h1>

    <div style={{ width: '100%', display: 'flex', justifyContent: "center", alignItems: 'strech',  }}>
      
   
    <Card
          
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkh1N8WUp8UiaJaABanIsM2W7gN4dJHUR4lHvONNvUKQiIG0sOL_yNFLyNFpcp8__fn0k&usqp=CAU"
          name="Computer-Science"
          desc="Computer science deals with the theoretical foundations of information, algorithms and the architectures of its computation as well as practical techniques for their application. Computer science is the study of computation, automation, and information."
        />
        <Card
          img="https://www.collegechalo.com/news/wp-content/uploads/2021/12/Electronics-Engineering.jpg"
          name="Electronics and Telecommunication"
          desc="Electronics and Telecommunication Engineering subjects such as analog electronics, linear integrated circuits, network analysis and synthesis, and digital signal processing provide the students with adequate knowledge to design , test, and maintain communication systems."
         
        />
        <Card
          img="https://www.articlering.com/wp-content/uploads/2021/07/Information-Technology-Courses-Webpage-Image-2.png"
          name="Information Technology"
          desc="Information Technology (IT) is the application of technology to solve organizational and business problems. This field of engineering uses computers, networks, storage, and other technical infrastructure both hardware and software, to deal with and manipulate information/data."
          
        />
     
      
      
      <div>
      <h2 id="Aboutus"> About us</h2> 
        <p>Vivekanand Education Society was founded in 1959 by Shri. Hashu Advani, along with ten other members, who shared the dream of providing qualitative education to the youth of our country. In the beginning, Vivekanand Education Society had a very modest launch, with just 256 students and six classrooms, in the humble barracks of Chembur Camp. But today, it proudly boast of having 3, 75, 000 sq. ft. land, housing 12 buildings and 28 Institutions, ranging from a crèche to Ph.D. Centers. It has over 2000 teaching and non-teaching staff, and more than 18,000 students who pass through its hallowed portals each year.</p>
      </div>
    </div>
    <Contact/>
    </div>
  );
}

export default Home;
