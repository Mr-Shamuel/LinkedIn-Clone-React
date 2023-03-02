import React, { useState } from "react";
import ImageCropper from "./ImageCropper";
import FileInput from "./FileInput";
import './CropImg.css'

function CropImg({ setImageFiles, inputRef }) {
    const [image, setImage] = useState("");
    const [currentPage, setCurrentPage] = useState("choose-img");
    const [imgAfterCrop, setImgAfterCrop] = useState("");


    const [toggle, setToggle] = useState(false)
    const handleToggle = (res) => {

        setToggle(!toggle)

    }



    // Invoked when new image file is selected
    const onImageSelected = (selectedImg) => {

        setImage(selectedImg);
        setCurrentPage("crop-img");

    };


    // Generating Cropped Image When Done Button Clicked
    const onCropDone = (imgCroppedArea) => {

        const canvasEle = document.createElement("canvas");
        canvasEle.width = imgCroppedArea.width;
        canvasEle.height = imgCroppedArea.height;

        const context = canvasEle.getContext("2d");

        let imageObj1 = new Image();
        imageObj1.src = image;

        imageObj1.onload = function () {

            // for circle 
            context.fillStyle = "#ffffff"; // Replace with desired color
            context.fillRect(0, 0, canvasEle.width, canvasEle.height);

            !toggle && context.beginPath();
            !toggle && context.arc(imgCroppedArea.width / 2, imgCroppedArea.height / 2, imgCroppedArea.width / 2, 0, 2 * Math.PI);
            !toggle && context.clip();


            //drow or show img
            context.drawImage(
                imageObj1,
                imgCroppedArea.x,
                imgCroppedArea.y,
                imgCroppedArea.width,
                imgCroppedArea.height,
                0,
                0,
                imgCroppedArea.width,
                imgCroppedArea.height
            );



            const dataURL = canvasEle.toDataURL("image/jpeg");
            setImgAfterCrop(dataURL);
            setCurrentPage("img-cropped");
            //if done then 
            // setImageFiles(dataURL) 
            setImageFiles(dataURL)
        };

    };



    // Handle Cancel Button Click
    const onCropCancel = () => {
        setCurrentPage("choose-img");
        setImage("");
    };



    return (
        <div className="Crop_container">
            {currentPage === "choose-img" ? (
                <FileInput setImage={setImage} onImageSelected={onImageSelected} inputRef={inputRef} />
            ) : currentPage === "crop-img" ? (
                <ImageCropper
                    image={image}
                    onCropDone={onCropDone}
                    onCropCancel={onCropCancel}
                    handleToggle={handleToggle}
                    toggle={toggle}

                />
            ) : (
                <div className="crop_container">
                    <div className="cropped-img_con">


                        <img src={imgAfterCrop} className="cropped-img" alt="img" />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button
                            onClick={() => {
                                setCurrentPage("crop-img");
                            }}
                            className="btn crop_btn"
                        >
                            <i class="fa-sharp   fa-solid fa-crop-simple"></i> Crop Again
                        </button>
                    </div>



                </div>
            )}
        </div>
    );
}

export default CropImg;
