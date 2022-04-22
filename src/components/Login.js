import {useState,useEffect} from 'react';
import axios from 'axios';
const Login=()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [post,setPost] = useState("");
    const [msg,setMsg] = useState("");

    useEffect(function(){
        if(post)
        {
            if(post.status===1)
            {
                var obj={
                    "username":post.username
                    
                }
                localStorage.setItem("obj",JSON.stringify(obj));
                window.location.href="/profile";
            }
            setMsg(post.message);
        }
        else
        {
            setMsg("");
        }
    },[post]);

    const handleForm=(event)=>{
        event.preventDefault();
        var credentials={username:username,password:password};
        axios.post("http://localhost:8000/staff/api/staff/Login",credentials).then(function(rsp){
            setPost(rsp.data);
        },function(err){
            setMsg("Some error occurred!");
        });
    }
    return(
        <form onSubmit={handleForm}>
            <br></br>
            <table>
                <tr>
                    <td>
                        Username:
                    </td>
                    <td>
                        <input type="text" onChange={(event)=>{setUsername(event.target.value)}} value={username}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        Password:
                    </td>
                    <td>
                        <input type="password" onChange={(event)=>{setPassword(event.target.value)}} value={password}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="submit" value="Submit"></input>
                    </td>
                </tr>
            </table>
            <h6 className="text-danger">{msg}</h6>
        </form>
    )
}
export default Login;