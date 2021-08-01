import { useRef } from 'react'; 
import { useViewportSpy } from 'beautiful-react-hooks'; 


const Container = ({ children }) => {
  const ref = useRef();
   const isVisible = useViewportSpy(ref);
  return (
    <div ref={ref}>
      {isVisible && children}
    </div>
  )
};

export default Container