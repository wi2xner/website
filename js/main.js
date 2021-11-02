function CopyToClipboard(containerid) {
 const textarea = document.createElement("textarea");
 textarea.id = "temp_element";
 textarea.style.height = 0;
 document.body.appendChild(textarea);
 textarea.value = document.getElementById(containerid).innerText;
 const selector = document.querySelector("#temp_element");
 selector.select();
 document.execCommand("copy");
 document.body.removeChild(textarea);
 alert("Copied");
}