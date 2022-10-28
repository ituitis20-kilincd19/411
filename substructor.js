import express from "express";
import {Server} from "socket.io";
const app=express();
const server= app.listen(2200,function(){ });
import axios from "axios";
import {from,of,filter,pipe} from "rxjs";
app.get('/',function(req,res){
     res.sendFile("C:\\Users\\Asus\\WebstormProjects\\untitled11\\index.html");
});
const io=new Server(server,{});
io.on("connection",socket=>{
     from(axios.get("https://www.network.com.tr/lacivert-pantolon-p-136723?_sgm_campaign=scn_ae5d6e0c98000&_sgm_source=1082275001&_sgm_action=click")).subscribe(e=>socket.send(e.data.indexOf("NETWORK")));
     socket.on("message",(msg)=>{

           });
});


