import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import bg from "./images/bg.png"
import h1 from "./images/h1.png"
import h2 from "./images/h2.png"
import vector from "./images/Vector.png"
import cash from "./images/cash.png"
import access from "./images/access.png"
import anal from "./images/anal.png"

function App() {
  return (
    <>
    <header className="h-[500px] w-[100%] z-1 relative text-white" >
      <img src={bg} className="h-full w-full z-5"/>
      <div className="z-10 absolute top-0 left-[25px] right-0">
      <Navbar/>

      <div className="flex justify-between">
        <div className='mt-[130px] ml-[150px]'>
        <h1 className="font-bold text-5xl mb-[10px] leading-[70px]">Get Your Payment Faster</h1>
        <p>Blindpay help businesses in Africa get paid by anyone,anywhere in the world</p>
        <div className='mt-[20px]'>
          <button className='bg-[#798AC9] text-white w-[150px] p-2'>Start Now</button>
        </div>
        </div>
        <div className='-mt-[30px]'>
        <img src={h2} className="w-[700px]"/>
          <img src={h1} className='-mt-[430px] -ml-[120px]' />
          
        </div>
        
      </div>


      </div>
   

    
    </header>

   <div className='h-[350px]'>
    <div className="flex justify-around mt-[250px]">
      <div className="Features flex gap-[40px] mt-[150px]">
        <div className="feature1 flex flex-col gap-[25px] mt-[50px]">
          <div className="bg-white h-[150px] w-[200px] border-2 border-l-purple-700 shadow" style={{boxShadow:'1px 100px 100px rgba(0,0,0,0.1)'}}>
            <img src={access}/>
            <div>
              <h3></h3>
            </div>
          </div>
            <div className="bg-white h-[150px] w-[200px] border-2 border-l-purple-700" style={{boxShadow:'1px 100px 100px rgba(0,0,0,0.1)'}}></div>
        </div>
        <div className='feature2 flex flex-col gap-[25px] '>
        <div className="bg-white h-[150px] w-[200px] border-2 border-l-purple-700" style={{boxShadow:'1px 100px 100px rgba(0,0,0,0.1)'}}></div>
            <div className="bg-white h-[150px] w-[200px] border-2 border-l-purple-700" style={{boxShadow:'1px 100px 100px rgba(0,0,0,0.1)'}}></div>
        </div>

      </div>
      <div className="w-[400px]">
        <h1 className="text-5xl text-[#857785] ">Make & share <span className="text-[#5C0E62]">Payments</span> With Community</h1>

      </div>
    </div>

   </div>

    <div style={{background:`url(${vector})`}} className="h-[600px]"></div>
    
   
     
    </>
  );
}

export default App;
