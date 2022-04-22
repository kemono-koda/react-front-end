import {useState,useEffect} from 'react';
import axios from 'axios';
const Register=()=>{
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [cpassword,setCpassword]=useState("");
    const [gender,setGender]=useState("");
    const [phone,setContact]=useState("");
    const [dob,setDob]=useState("");
    const [branch,setBranch]=useState("");
    const [expertise_area,setExpertise_area]=useState("");
   
    const [verifypost,setVerifypost]=useState("");
    
    
    const [post,setPost] = useState("");
    
    const [validateusername,setValidateusername]=useState("");
    const [validateemail,setValidateemail]=useState("");
    const [validatepassword,setValidatepassword]=useState("");
    const [validateconfpassword,setValidateconfpassword]=useState("");
    const [validategender,setValidategender]=useState("");
    const [validatecontact,setValidatecontact]=useState("");
    const [validatedob,setValidatedob]=useState("");
    const [validatebranch,setValidatebranch]=useState("");
    const [validateexpertisearea,setValidateexpertisearea]=useState("");
    

    useEffect(function(){
        if(post)
        {
            if(post.status===1)
            {
                var infos={
                    "email":email,
                }
                localStorage.setItem("infos",JSON.stringify(infos));
                axios.post("http://localhost:8000/staff/api/staff/Verification",infos).then(function(rsp){
                    setVerifypost(rsp.data);        
                    var infos={
                        "email":email,
                        
                    }
                    localStorage.setItem("infos",JSON.stringify(infos));
                    window.location.href="/verification";
                },function(err){
                    
                });
            }
            if(post.status===2)
            {
                if(post.errors.username)
                {
                    setValidateusername(post.errors.username);
                }
                else
                {
                    setValidateusername("");
                }

                if(post.errors.email)
                {
                    setValidateemail(post.errors.email);
                }
                else
                {
                    setValidateemail("");
                }

                if(post.errors.password)
                {
                    setValidatepassword(post.errors.password);
                }
                else
                {
                    setValidatepassword("");
                }

                if(post.errors.confPassword)
                {
                    setValidateconfpassword(post.errors.confPassword);
                }
                else
                {
                    setValidateconfpassword("");
                }
                if(post.errors.gender)
                {
                    setValidategender(post.errors.gender);
                }
                else
                {
                    setValidategender("");
                }

                if(post.errors.contact)
                {
                    setValidatecontact(post.errors.contact);
                }
                else
                {
                    setValidatecontact("");
                }
                

                if(post.errors.dob)
                {
                    setValidatedob(post.errors.dob);
                }
                else
                {
                    setValidatedob("");
                }
                if(post.errors.branch)
                {
                    setValidatebranch(post.errors.branch);
                }
                else
                {
                    setValidatebranch("");
                }
                if(post.errors.expertise_area)
                {
                    setValidateexpertisearea(post.errors.expertise_area);
                }
                else
                {
                    setValidateexpertisearea("");
                }
            }
        }
        else
        {
            setValidateusername("");
            setValidateemail("");
            setValidatepassword("");
            setValidateconfpassword("");
            setValidategender("");
            setValidatecontact("");
            setValidatedob("");
            setValidatebranch("");
            setValidateexpertisearea("");
           
        }
    },[post]);


    const handleForm=(event)=>{
        event.preventDefault();
        var informations={"username":username,
                        "email":email,
                        "password":password,
                        "cpassword":cpassword,
                        "gender":gender,
                        "phone":phone,
                        "dob":dob,
                        "branch":branch,
                        "expertise_area":expertise_area,
                    };
        axios.post("http://localhost:8000/staff/api/staff/Register",informations).then(function(rsp){
            setPost(rsp.data);
        },function(err){
            setValidateusername("");
            setValidateemail("");
            setValidatepassword("");
            setValidateconfpassword("");
            setValidategender("");
            setValidatecontact("");
            setValidatedob("");
            setValidatebranch("");
            setValidateexpertisearea("");
            
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
                    <td>
                        {validateusername}
                    </td>
                </tr>
                <tr>
                    <td>
                        Email:
                    </td>
                    <td>
                        <input type="text" onChange={(event)=>{setEmail(event.target.value)}} value={email}></input>
                    </td>
                    <td>
                        {validateemail}
                    </td>
                </tr>
                <tr>
                    <td>
                        Password:
                    </td>
                    <td>
                        <input type="password" onChange={(event)=>{setPassword(event.target.value)}} value={password}></input>
                    </td>
                    <td>
                        {validatepassword}
                    </td>
                </tr>
                <tr>
                    <td>
                        Confirm password:
                    </td>
                    <td>
                        <input type="password" onChange={(event)=>{setCpassword(event.target.value)}} value={cpassword}></input>
                    </td>
                    <td>
                        {validateconfpassword}
                    </td>
                </tr>
                <tr>
                    <td>
                        Gender:
                    </td>
                    <td>
                        <input type="radio" value="Male"  name="gender"  onChange={(event)=>{setGender(event.target.value)}} />
                        <label for="gender">Male</label><br></br>
                        <input type="radio" value="Female"  name="gender" onChange={(event)=>{setGender(event.target.value)}} /> 
                        <label for="gender">Female</label><br></br>
                    </td>
                    <td>
                        {validategender}
                    </td>
                </tr>
                <tr>
                    <td>
                        Date of Birth:
                    </td>
                    <td>
                        <input type="date" onChange={(event)=>{setDob(event.target.value)}} value={dob}  />
                    </td>
                    <td>
                        {validatedob}
                    </td>
                </tr>
                <tr>
                    <td>
                        Contact number:
                    </td>
                    <td>
                        <input type="text" onChange={(event)=>{setContact(event.target.value)}} value={phone}></input>
                    </td>
                    <td>
                        {validatecontact}
                    </td>
                </tr>
                <tr>
                    <td>
                        Branch:
                    </td>
                    <td>
                        <input type="text" onChange={(event)=>{setBranch(event.target.value)}} value={branch}></input>
                    </td>
                    <td>
                        {validatebranch}
                    </td>
                </tr>
                
                <tr>
                    <td>
                        Expertise Area:
                    </td>
                    <td>
                        <input type="text" onChange={(event)=>{setExpertise_area(event.target.value)}} value={expertise_area}></input>
                    </td>
                    <td>
                        {validateexpertisearea}
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="submit" value="Submit"></input>
                    </td>
                </tr>
            </table>
        </form>
    )
}
export default Register;