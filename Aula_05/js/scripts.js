window.onload = function createContent() {
    const body = document.getElementsByTagName("body")[0];
    const bodyStyle = {
        "display": "flex",
        "justify-content": "center",
        "align-items": "center"
    }
    Object.assign(body.style, bodyStyle);

    const contentDiv = document.getElementById("content");
    const contentDivStyle = { 
        "width": "400px",
        "height": "600px",
        "border": "1px solid black",
        "border-radius": "10px",
        "background-color": "aqua"
    };
    Object.assign(contentDiv.style, contentDivStyle);

    // input class
    const inputStyle = {
        "width": "100px",
        "height": "50px",
        "border": "1px solid black",
        "border-radius": "10px"
    } 
}