import asciifyImage from "asciify-image";

const asciiGenerator = () => {
  const options = {
    fit: "box",
    width: 200,
    height: 100,
  };

  asciifyImage(
    "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    options,
    function (err, asciified) {
      if (err) throw err;

      // Print to console
      console.log(asciified);
    }
  );
};

export default asciiGenerator;
