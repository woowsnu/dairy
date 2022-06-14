import Document from "next/document";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import styled from "styled-components";
import MyDocument from "../../pages/_document";



// const Backdrop = (props) => {
//   return <div></div>;
// };

// const ModalOverlay = (props) => {
//   return (
//     <div>
//       <div>content{props.children}</div>
//     </div>
//   );
// };


const Modal = ({selector}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(()=>{
    setMounted(true)
    return () => setMounted(false)
  }, [selector])

  return mounted ? createPortal(document.querySelector(selector)) : null
      {/* {ReactDOM.createPortal(<Backdrop/>, portalElement)} */}
      

};

export default Modal;

// const StyledModalBody = styled.div`
//   padding-top: 10px;
// `;

// const StyledModalHeader = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   font-size: 25px;
// `;

// const StyledModal = styled.div`
//   background: white;
//   width: 500px;
//   height: 600px;
//   border-radius: 15px;
//   padding: 15px;
// `;
// const StyledModalOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.5);
// `;
