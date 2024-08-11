import { useState } from "react"
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import "./index.css"
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const onChangeName = (e) => {
        setUsername(e.target.value)
    }
    const onChangePass = (e) => {
        setPassword(e.target.value)
    }
    let navigate = useNavigate();
    const onSubmitSuccess = jwtToken => {
        Cookies.set('jwt_token', jwtToken, {
            expires: 30,
        })
        navigate("/home")

    }
    const errorMsg = (errorMsg) => {
        setError(errorMsg)
    }
    const onSubmitBtn = async (e) => {
        e.preventDefault()
        const userDeatils = { username, password }
        const options = {
            method: "POST",
            body: JSON.stringify(userDeatils)
        }

        const response = await fetch("https://apis.ccbp.in/login", options)
        const data = await response.json()
        console.log(data)
        if (response.status === 200) {
            onSubmitSuccess(data.jwt_token)
        } else {
            errorMsg(data.error_msg)
        }

    }
    const jwt = Cookies.get("jwt_token")
    if (jwt !== undefined) {
        return navigate("/home")
    }
    return (

        <>

            <div className="login-page">
                < div className="login-form-container" >
                    <h1 className="login-heading">Admin Login</h1>
                    <form onSubmit={onSubmitBtn}>
                        <div className="cont">
                            <input onChange={onChangeName} type="text" placeholder="username" value={username} className="inp-username" />
                        </div>
                        <div className="cont">
                            <input onChange={onChangePass} type="password" placeholder="password" value={password} className="inp-username" />
                        </div>
                        <p className="error-message">{error}</p>
                        <button className="custom-button inp-username btn">
                            Submit
                        </button>
                    </form>


                </div >
            </div >
        </>
    )
}
export default Login