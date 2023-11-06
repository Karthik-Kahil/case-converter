function UploadInput() {
  return (
    <div>
      <input
        type="file"
        onChange="dragNdrop(event)"
        ondragover="drag()"
        ondrop="drop()"
        id="uploadFile"
      />
    </div>
  );
}

export default UploadInput;
