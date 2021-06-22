Webcam.set
({
    width:310,
    height:300,
    image_format: 'png',
    png_quality: 90,
    constrains:{
        facingMode: "environment"
    }
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}