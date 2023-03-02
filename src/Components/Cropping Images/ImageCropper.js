import React, { useState } from "react";
import Cropper from "react-easy-crop";

function ImageCropper({ image, onCropDone, onCropCancel, handleToggle, toggle }) {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState(null);

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
        console.log(croppedAreaPixels)
    };






    return (
        <div className="cropper">
            <div>
                <Cropper
                    image={image}
                    //for circle && rect

                    cropShape={toggle ? "rect" : 'round'}


                    // aspect={ 4 / 4}
                    aspect={toggle ? 4 / 3 : 4 / 4}
                    crop={crop}
                    zoom={zoom}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                    style={{
                        containerStyle: {
                            width: "100%",
                            height: "70%",


                        },
                    }}
                />
            </div>

            <div className="action-btns">


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

                {toggle ? <button className=" shapeBtn" type='button' value='round' onClick={(e) => handleToggle(e.target.value)}> Circle</button>
                    : <button className=" shapeBtn" type='button' value='rect' onClick={(e) => handleToggle(e.target.value)}>  Rect</button>}

            </div>
        </div>
    );
}

export default ImageCropper;
