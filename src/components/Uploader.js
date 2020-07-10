import React, {useRef} from "react";
import {useStores} from "../stores";
import {observer} from "mobx-react";

const Uploader = observer(() => {
  const imageRef = useRef();
  const {ImageStore} = useStores();
  const handleUpload = () => {
    if (imageRef.current.files.length > 0) {
      ImageStore.setFilename(imageRef.current.files[0].name);
      ImageStore.setFile(imageRef.current.files[0]);
      ImageStore.upload()
        .then(() => {
          console.log('上传成功')
        })
        .catch(() => {
          console.log('上传失败......')
        })
    }
    window.file = imageRef.current
  };

  return (
    <>
      <input type='file' onChange={handleUpload} ref={imageRef}/>

    </>
  )

});

export default Uploader;