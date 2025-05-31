import { useState } from 'react'
import '../../App.css'
import Footer       from "../../components/footer/Footer";
import GlassModal   from "../../components/modal/GlassModal";

const IndexView = () => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App position-relative min-vh-100 d-flex flex-column justify-content-end">
      
      <GlassModal 
        show={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />

      <Footer onButtonClick={() => setModalOpen(true)} />
    
    </div>
  );


} 

export default IndexView;