export let handleSubmit = (formid) => {
    const form = document.querySelector('form');
    if(form) form.addEventListener('submit', handle);
};

export const postJson = (formdata,url) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log("Successful");
        } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
            console.log("Something went wrong");
        }
    }
    xhr.send(JSON.stringify(formdata));
}

const handle = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log({ value });
    postJson(value);
};

export const greet = () => {
    return {
        message: "Thank you",
        messageText: "",
        showMessage() {
            alert("foo");
        }
    };
};

//handleSubmit("contactform");
