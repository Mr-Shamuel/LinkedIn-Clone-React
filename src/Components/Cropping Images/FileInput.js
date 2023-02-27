import React from "react";

function FileInput({ onImageSelected, inputRef }) {


    const handleOnChange = (event) => {

        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (e) {
                onImageSelected(reader.result);


            };



        }
    };


    // const onChooseImg = () => {
    //     inputRef.current.click();
    // };

    return (
        <div>

            <input className="btn"
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleOnChange}
                style={{ display: 'none' }}

            />







        </div>
    );
}

export default FileInput;
