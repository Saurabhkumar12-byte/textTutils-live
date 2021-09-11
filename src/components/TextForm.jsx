import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  function uppercaseFunc() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");

  }
  const [myStyle, setmyStyle] = useState({
    color: "#212529",
    backgroundColor: "white",
  });
  const [buttonText, setButtonText] = useState("Dark Mode");
  const [copyText, setCopyText] = useState("Copy");
  function lowercaseFunc() {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }
  function changed(e) {
    // console.log("textarea changed");
    setText(e.target.value);
  }
  function prevFunc() {
    const collapse = document.getElementById("collapseOne");
    const contain = collapse.classList.contains("show");
    if (!contain) {
      collapse.classList.add("show");
    } else {
      collapse.classList.remove("show");
    }
  }
  function clearFunc() {
    setText("");
    props.showAlert("TextBox Cleared","success");

  }
  function toggleMode() {
    let toggle = document.getElementById("toggle");
    if (myStyle.color === "#212529") {
      setmyStyle({
        color: "white",
        backgroundColor: "#212529",
      });
      toggle.classList.remove("btn-dark");
      toggle.classList.add("btn-light");
      setButtonText("Light Mode");
    } else {
      setmyStyle({
        color: "#212529",
        backgroundColor: "white",
      });
      setButtonText("Dark Mode");
      toggle.classList.remove("btn-light");
      toggle.classList.add("btn-dark");
    }
  }
  function copyFunc() {
    var mybox = document.getElementById("mybox");
    // mybox.select();
    navigator.clipboard.writeText(mybox.value);
    setCopyText("Copied");
    const copy = document.getElementById("copy");
    copy.classList.remove("btn-success");
    copy.classList.add("btn-secondary");
    setTimeout(() => {
      setCopyText("Copy");
      copy.classList.remove("btn-secondary");
      copy.classList.add("btn-success");
    }, 3000);
    props.showAlert("Text Copied","success");

  }

  function removeSpace() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("All Extra Spaces Removed","success");

  }
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-1 my-3">
          <h1>{props.heading}</h1>

          <textarea
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(0 0 0 / 50%)" : "white",
              color: props.mode === "dark" ? "white" : "black",
              boxShadow:
                "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
              borderRadius: "8px",
            }}
            className="form-control fs-4"
            id="mybox"
            rows="8"
            value={text}
            onChange={changed}
            placeholder="Do experiments with your text..."
          ></textarea>
          <button className="btn btn-primary my-2" onClick={uppercaseFunc}>
            Uppercase
          </button>
          <button className="btn btn-warning my-2 mx-2" onClick={prevFunc}>
            Preview
          </button>
          <button className="btn btn-info my-2" onClick={lowercaseFunc}>
            Lowercase
          </button>
          <button className="btn btn-danger mx-2 my-2" onClick={clearFunc}>
            Clear
          </button>
          <button
            className="btn btn-dark my-2"
            onClick={toggleMode}
            id="toggle"
          >
            {buttonText}
          </button>
          <button
            className="btn btn-success mx-2 my-2"
            onClick={copyFunc}
            id="copy"
          >
            {copyText}
          </button>
          <button
            className="btn  my-2"
            style={{
              backgroundColor: "#e44125",
              border: "#e44125",
              color: "white",
            }}
            onClick={removeSpace}
          >
            Remove Spaces
          </button>
        </div>
      </div>
      <div
        className="container "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p className="fs-5">
          <strong>{text.split(" ").length - 1}</strong> words{" "}
          <strong>{text.length}</strong> character
        </p>
        <p className="fs-5">
          <strong>{0.008 * (text.split(" ").length - 1)}</strong> minutes to
          read above paragraph
        </p>
      </div>

      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "rgb(3 16 45)" : "white",
        }}
      >
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button fs-4"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "rgb(3 2 12 / 93%)" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                  boxShadow:
                    "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
                }}
              >
                Preview of textarea
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={{
                backgroundColor:
                  props.mode === "dark" ? "rgb(85 112 135)" : "white",
                // color:
                // props.mode === "dark" ? "white" : "black"
              }}
            >
              <div className="accordion-body fs-5">
                {text.length > 0 ? text : "Your textbox is empty"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
