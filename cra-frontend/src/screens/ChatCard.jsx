import React from "react";
import { TbMessages } from "react-icons/tb";
import { VscSend } from "react-icons/vsc";

const ChatCard = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "1.5rem",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        {/* <img
          src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=w8SlKv-4u6xYyU07CXeBRvfW6F0iYx-a7HR2ChM8ZbU="
          alt="Profile photo"
          style={{
            borderRadius: "3rem",
            height: "3rem",
            width: "3rem",
            objectFit: "cover",
          }}
        /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "2.5rem",
            minHeight: "2.5rem",
            backgroundColor: "red",
            opacity: "0.65",
            borderRadius: "0.5rem",
          }}
        >
          <TbMessages style={{ color: "white", fontSize: "1.4rem" }} />
        </div>
        <div style={{ fontSize: "1.5rem", fontWeight: 550 }}>
          Mobility Challenges
        </div>
      </div>
      <hr />
      <div
        style={{
          backgroundColor: "lightgray",
          borderRadius: "1.5rem",
          padding: "1rem",
          width: "100%",
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            backgroundColor: "gray",
            width: "fit-content",
            padding: "1rem",
            borderRadius: "1rem",
            margin: "1rem",
            fontSize: "1.25rem",
            fontWeight: "550",
            color: "white",
          }}
        >
          Receiver chat
        </div>
        <div
          style={{
            backgroundColor: "#2234da",
            width: "fit-content",
            padding: "1rem",
            borderRadius: "1rem",
            margin: "1rem",
            marginLeft: "auto",
            color: "white",
            fontSize: "1.25rem",
            fontWeight: "550",
          }}
        >
          Sender chat
        </div>
        <div
          style={{
            backgroundColor: "gray",
            width: "fit-content",
            padding: "1rem",
            borderRadius: "1rem",
            margin: "1rem",
            fontSize: "1.25rem",
            color: "white",
            fontWeight: "550",
          }}
        >
          Receiver chat
        </div>
        <div
          style={{
            backgroundColor: "#2234da",
            width: "fit-content",
            padding: "1rem",
            borderRadius: "1rem",
            margin: "1rem",
            marginLeft: "auto",
            color: "white",
            fontSize: "1.25rem",
            fontWeight: "550",
          }}
        >
          Sender chat
        </div>
      </div>
      <div
        style={{
          backgroundColor: "lightgray",
          borderRadius: "1.5rem",
          padding: "1rem",
          width: "100%",
          marginTop: "1.5rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          height: "5.5rem",
        }}
      >
        <input
          type="text"
          placeholder="Enter message"
          style={{
            color: "#2234da",
            width: "100%",
            fontSize: "1rem",
            borderRadius: "1rem",
            padding: "1rem",
          }}
        />
        <button
          style={{
            backgroundColor: "#2234da",
            width: "fit-content",
            padding: "1rem",
            borderRadius: "1rem",
            margin: "1rem",
            color: "white",
            fontSize: "1.25rem",
            fontWeight: "550",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <a href="">Send</a>
          <VscSend />
        </button>
      </div>
    </div>
  );
};

export default ChatCard;
