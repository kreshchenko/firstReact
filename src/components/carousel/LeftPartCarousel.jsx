import React from "react";

class LeftPartCarousel extends React.Component{
    render(){
        return  <div id="divHeaderText" className="page-content">
                    <div id="divHeaderLine1">Текст важного сообщения</div><br />
                    <div id="divHeaderLine2">Короткое описание текста важного сообщения..</div><br />
                    <div id="divHeaderLine3"><a className="btn btn-danger" href="#">Читать больше</a></div>
                </div>
    }
}

export default LeftPartCarousel;