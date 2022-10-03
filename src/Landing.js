import * as React from "react";
import logo from './Landing.svg';
import Button from "@mui/material/Button";

export default function Header(){
    return(
        <tr>
            <td>
        <img src={logo} className="App-logo" alt="logo" /></td>
        <td className="container">
        <div class="not"><strong>Imagine if<br />
        <div className="desgin">Snapchat</div>
        had events.</strong>
        </div>
        <div className="down">Easily host and share events with your friends <br/>
        across any social media.</div>
        <Button className="box" sx={{fontSize:15 ,width:320,pr:8.6,pl:8.6,borderRadius:2.5,mt:6.5}}><strong>&#127881; Create my event</strong></Button>
        </td></tr>
        

    );
}