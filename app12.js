const khungchat = document.querySelector(".khungchat");
const chat = document.querySelector(".chat");
const mes = document.querySelector(".mes");
const ochat = document.getElementById("ochat");
const send = document.querySelector(".send");
const del = document.querySelector(".del");

mes.onclick = () => {
  khungchat.classList.toggle("invi");
};

send.onclick = () => {
  let imes = document.createElement("span");
  imes.classList.add("spanright");
  imes.innerHTML = `${ochat.value}<br>`;
  chat.appendChild(imes);
  if (((ochat.value).toLowerCase()).trim() == "hello") {
    let smes = document.createElement("span");
    smes.innerHTML = `<img src="https://img.jamja.vn/jamja-prod/gcs_full_5abf932c76ec572ec86d0f4f-2018-03-31-135453.jpeg?cache=1">Xin chào và cảm ơn b đã liên hệ với chúng tôi .Chúng tôi có thể giúp gì cho bạn?<br>`;
    chat.appendChild(smes);
  }
  ochat.value = `----Bạn nói j đi`;
};

del.onclick = () => {
  chat.innerHTML = ``;
};

ochat.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      send.onclick();
  }
});
ochat.onclick = () =>{
  ochat.value = ``;
}
