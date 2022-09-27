const Model = ({clickedImage, handleRotationRight, handleRotationLeft, setClickedImg}) => {
    
    const handleEvt = (e) => {
        if(e.target.classList.contains("dismiss")){
            setClickedImg(null)
            
        }
    }

    return (
        <div className="overlay dismiss" onClick={handleEvt}>
            <img src={clickedImage} alt={"bigger"}/>
            <span className="dismiss" onClick={handleEvt}>X</span>
            <div onClick={handleRotationLeft} className="overlay-arrows_left" > Prev </div>
            <div onClick={handleRotationRight} className="overlay-arrows_right" > Next </div>
        </div>
    )
};

export default Model