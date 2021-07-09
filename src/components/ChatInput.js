import React, { useState } from "react";
import { auth, db } from "../firebase";
import firebase from "firebase";
import { Button } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";

function ChatInput({ channelName, channelId, chatRef }) {
    const [input, setInput] = useState("");
    const [user] = useAuthState(auth);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(channelId);

        if (!channelId) {
        return false;
        }

        db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        // user: "Jason Rillera",
        // userImage:"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
        user: user.displayName,
        userImage: user.photoURL,
        });

        chatRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        });
        setInput("");
    };
    return (
        <ChatInputContainer>
            <form>
                <input
                placeholder={`Message #${channelName.toLowerCase()}`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                />
                <Button hidden type="submit" onClick={sendMessage}>
                SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;
    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    > form > button {
        display: none !important;
    }
`;