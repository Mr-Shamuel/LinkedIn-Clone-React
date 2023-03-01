import React, { useState } from "react";
import Cropper from "react-easy-crop";

function ImageCropper({ image, onCropDone, onCropCancel }) {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState(null);
    // const [aspectRatio, setAspectRatio] = useState(4 / 4);
    const [toggle, setToggle] = useState(false)

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
        console.log(croppedAreaPixels)
    };

    // const onAspectRatioChange = (event) => {
    //     setAspectRatio(event.target.value);
    // };


    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className="cropper">
            <div>
                <Cropper
                    image={image}
                    //for circle
                    // aspect={aspectRatio}
                    cropShape={toggle ? "rect" : 'round'}

                    aspect={4 / 4}
                    crop={crop}
                    zoom={zoom}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                    style={{
                        containerStyle: {
                            width: "100%",
                            height: "70%",
                            // backgroundColor: "#fff",

                        },
                    }}
                />
            </div>

            <div className="action-btns">
                {/* <div className="aspect-ratios" onChange={onAspectRatioChange}>
                    <input type="radio" value={1 / 1} name="ratio" /> 1:1
                    <input type="radio" value={5 / 4} name="ratio" /> 5:4
                    <input type="radio" value={4 / 3} name="ratio" /> 4:3
                    <input type="radio" value={3 / 2} name="ratio" /> 3:2
                    <input type="radio" value={5 / 3} name="ratio" /> 5:3
                    <input type="radio" value={16 / 9} name="ratio" /> 16:9
                    <input type="radio" value={3 / 1} name="ratio" /> 3:1
                </div> */}

                <button className="btn btn-outline" onClick={onCropCancel}>
                    Cancel
                </button>

                <button
                    className="btn" type='button'
                    onClick={() => {
                        onCropDone(croppedArea);
                    }}
                >
                    Done
                </button>

                {/* {toggle ? <button type='button' onClick={handleToggle}>circle</button> : <button type='button' onClick={handleToggle}>Rect</button>} */}
            </div>
        </div>
    );
}

export default ImageCropper;
