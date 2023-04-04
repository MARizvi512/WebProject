import React, { useEffect, useState } from 'react';
import { ToastBody, ToastContainer, ToastHeader } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import { CardBody, Collapse } from 'reactstrap';
import { AiOutlineArrowsAlt, AiOutlineSend } from "react-icons/ai";


const About = () => {
    const [chat, setChat] = useState([]);
    const [userInput, setuserInput] = useState('');
    const [collapseFlag, setCollapseFlag ] = useState('');
    const [screenAdjustFlag, setscreenAdjustFlag] = useState('');

    const ChatResponse = (messageTxt) =>{
        fetch("https://api.openai.com/v1/chat/completions",{
            "method":"POST",
            "headers":{
                "Content-Type":"application/json",
                "Authorization":"Bearer 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"
            },
            "body": JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [
                    {
                        "role": "user", 
                        "content": messageTxt
                    }
                ]
            })
        })
        .then(response => response.json())
        .then(response =>{
            let respChoices=response?.choices?.[0];
            let val=respChoices.message.content;
            let role=respChoices.message.role;
            AddChat(val, '', role);
        })
        .catch(err => {
            console.log(err);
        });
    }


    const AddChat = (val, changetxt, _role) => {
        let chatList=chat;
        chatList.push({txt: val, role: _role});
        setChat(chatList);
        setuserInput(changetxt); 
    }

    const SendMessages = (val) =>{
        AddChat(val, ' ', 'You');
        ChatResponse(val);
    }

    const ShowChat = () => {
        return chat.map((msg, index) =>{
            return (
                <>  
                    <Toast bg={msg.role.toLowerCase()==="you" ? "info" : "success" } position='middle-end'>
                        <ToastHeader closeButton={false} >
                            <strong className='me-auto'>{msg.role}</strong>
                        </ToastHeader>
                        <ToastBody>{msg.txt}</ToastBody>
                    </Toast>
                </>
                
            );
        })

    }

    const toggleChat = () =>
    {
        setCollapseFlag(!collapseFlag);

    }
    const screenAdjust = () => {
        setscreenAdjustFlag(!screenAdjustFlag);
    }
    return (
        <>
        <div className='row container mr-0' style={{display: screenAdjustFlag ? '' :'none'}}>
            <div className='col-md-4'></div>
            <div className='col-md-6'>
                <div className='row'>
                    <div className='col-md-11'>
                        <h1> Chat Application </h1>
                    </div>
                    <div className='col-md-1' style={{cursor:'pointer'}}>
                        <AiOutlineArrowsAlt onClick={()=>screenAdjust()} style={{ fontSize: "1.7em", float:"right"}}/>        
                    </div>
                </div>
                
                
                <div className='row'>
                    <div className='col-md-8' style={{overflowY:"scroll", height:"70vh", position:"absolute", display:"flex", flexDirection:"column-reverse"}}>
                        <ToastContainer>
                            {ShowChat()}
                        </ToastContainer>
                    </div>
                </div>
                <div className='row mb-5' style={{position : "fixed", bottom : "0px", width: "100%"}}>
                    <div className='col-md-6'>
                        <input type="text" className='form-control' value={userInput} onChange={(e) => setuserInput(e.target.value)} />
                    </div>
                    <div className='col-md-4'>
                        <button type='button' className='btn btn-success' onClick={() => SendMessages(userInput)}>Send</button>
                    </div>
                </div>

            </div>
        </div>
        
        <div style={{display: screenAdjustFlag ? 'none' :''}}>
        <div onClick={toggleChat} className='col-md-3 m-0 p-2' style={{  cursor:'pointer', position:"fixed", height: "5vh", bottom: "0px", right:"0px", borderStyle:'solid', borderColor: '#db3d44', borderWidth:'2px 2px 0px 2px', borderRadius:'14px 14px 0px 0px', backgroundColor:"#db3d44", color:"white" }}><b>This is new Chatbot</b></div>
        <Collapse isOpen={collapseFlag}>
            <div className='col-md-3' style={{  zIndex:"1" ,position:"fixed", height: "50vh", bottom: "0px", right:"0px", borderStyle:'solid', borderColor: '#db3d44', borderWidth:'2px 2px 0px 2px', borderRadius:'14px 14px 0px 0px', backgroundColor:"white" }}>
                <p className='m-0 p-3' onClick={toggleChat} style={{ cursor:'pointer' ,borderStyle:'solid', borderColor: '#db3d44', borderWidth:'2px 2px 0px 2px', borderRadius:'14px 14px 0px 0px', backgroundColor:"#db3d44", fontWeight:'bold', color:'white'}}>This is new ChatBot <AiOutlineArrowsAlt onClick={()=>screenAdjust()} style={{ fontSize: "1.7em", float:"right"}}/></p>
                <div className='col-md-12 m-0 p-5 pl-1' style={{ zIndex: "-1", overflowY:"scroll", height:"40vh", position:"absolute", display:"flex", flexDirection:"column-reverse" }}>
                    <ToastContainer>
                        {ShowChat()}
                    </ToastContainer>
                </div>
                
                
                <div className='input-group' style={{  position:"absolute", bottom:"0px"}}>
                    <input type='text' className='form-control' value={userInput} onChange={(e) => setuserInput(e.target.value)} />
                    <div className='input-group-append'>
                        <button className='btn btn-success pb-2' onClick={() => SendMessages(userInput)}><AiOutlineSend /></button>
                    </div>
                </div>
            </div>            

        </Collapse>   
        </div>
        </>
    );
}
export default About;