import React, { useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../Styles/globalStyles";
import GetStartedBtn from "./getStartedBtn";
import { auto } from "@popperjs/core";
import plus from '../assets/plus.jpg'
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const GetStarted = () => {

  const navigate = useNavigate();
  // State for form values
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  // State for form errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  // State for form touched fields
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    confirm_password: false,
  });

  // Function to handle form value changes
  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });

  //   setTouched({
  //     ...touched,
  //     [name]: true,
  //   });
  // };

  // Function to handle form field blur
  // const handleBlur = (e) => {
  //   const { name } = e.target;

  //   // Validate the field on blur
  //   // Implement your validation logic here and update the errors state
  //   // Example: validateName(values.name);
  //   // Update errors state accordingly
  // };

  // Function to handle form submission

  const BACKEND_URL = "https://tsec-backend.onrender.com";


  const handleSubmit = async () => {

    const response = await fetch(`${BACKEND_URL}/api/v1/dashboard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Cookie.get("id"),
        room: {
          name: name,
          totalAmount: totalAmount,
          paidAmount: amountPaid,
        }

      }),
    });
    const data = await response.json();
    console.log(data);

    setTimeout(() => {
      navigate("/home");
    }, 1000);

  };
  const [addTask, setAddTask] = React.useState(false);
  const [task, setTask] = React.useState("");
  const [taskList, setTaskList] = React.useState([]);
  const [totalAmount, setTotalAmount] = React.useState(0);
  const [amountPaid, setAmountPaid] = React.useState(0);
  const [name, setName] = React.useState("");

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">
                  Lets get started with building your house :)
                </p>
                <form onSubmit={handleSubmit}>
                  <GetStartedBtn title="Wall Colours" ></GetStartedBtn>
                  <GetStartedBtn title="Name" type="name" setName={setName}></GetStartedBtn>
                  <GetStartedBtn title="Total Amount" setTotalAmount={setTotalAmount} type="TotalAmt"></GetStartedBtn>
                  <GetStartedBtn title="Amount Paid" setAmountPaid={setAmountPaid} type="PaidAmt"></GetStartedBtn>
                  <div className="flex flex-col">
                    {/* <div className="grid grid-cols-2 gap-4"> */}
                    {taskList.map((task, index) => (
                      <div
                        key={index}
                        className="flex justify-center gap-20 item-center"
                      >
                        <GetStartedBtn title={task}></GetStartedBtn>
                      </div>
                    ))}
                    {/* </div> */}
                    {addTask ? (
                      <input
                        className="flex h-20 w-full rounded-md border border-gray-300"
                        type="text"
                        placeholder="Add some new task"
                        onChange={(e) => setTask(e.target.value)}
                        onBlur={() => {
                          setTaskList([...taskList, task]);
                          setTask("");
                          setAddTask(false);
                        }}
                      />
                    ) : (
                      <></>
                    )}
                    <div
                      className="flex w-full pt-3 pb-3 pl-2 pr-2 justify-center item-center hover:shadow-md"
                      onClick={() => setAddTask(true)}
                      onBlur={() => setAddTask(false)}
                    >
                      <img
                        src={plus}
                        alt="Add task"
                        style={{
                          width: "25px",
                        }}
                      />
                    </div>

                  </div>
                  <div className="modal-buttons">
                    {/* <a href="#" className="">
                    Want to register using Gmail?
                  </a> */}
                    <button className="input-button" type="button" onClick={handleSubmit}>
                      Save
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal-right">
                <img
                  src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;

export default GetStarted;
