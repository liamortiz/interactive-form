import React, { useState, useRef } from 'react';

const InteractiveForm = () => {

    const leftEye = useRef(null);
    const rightEye = useRef(null);
    const formContainer = useRef(null);
    const emailLabel = useRef(null);
    const passwordLabel = useRef(null);
    const showPasswordButton = useRef(null);

    const [showingPassword, setShowingPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function toggleLabelEffect({ target }) {
        if (target.name === "email") {
            emailLabel.current.classList.toggle("shrink-hide");
        } else {
            passwordLabel.current.classList.toggle("shrink-hide");
        }
    }

    function handleInputChange({ target }) {
        if (target.name === "email") {
            setEmail(target.value);
        } else {
            setPassword(target.value);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log({email, password});       
    }

    function togglePasswordView() {
        setShowingPassword(!showingPassword);
        showPasswordButton.current.classList.toggle("active");
    }
 
    function trackMouse(event) {
        const offsetWidth = formContainer.current.offsetLeft;
        const offsetHeight = formContainer.current.offsetTop;
        let mouseX = event.clientX - offsetWidth;
        let mouseY = event.clientY - offsetHeight;  
        
        mouseX -= 100;
        mouseY -= 100;

        mouseX = Math.min(150, mouseX);
        mouseY = Math.min(120, mouseY);

        leftEye.current.style.transform =`translate(${mouseX / 15}px, ${mouseY / 15}px)`;
        rightEye.current.style.transform =`translate(${mouseX / 15}px, ${mouseY / 15}px)`;
    }

    return (
        <div ref={formContainer} className="form-container" onMouseMove={trackMouse}>
            <div className="face-mask">
                <div ref={leftEye} className="eyeball left-eye"></div>
                <div ref={rightEye} className="eyeball right-eye"></div>
            </div>
            <form autoComplete="off" onSubmit={handleSubmit}>

                <div className="input-container">
                <span ref={emailLabel}>Email</span>
                    <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    required 
                    onChange={handleInputChange} 
                    onFocus={toggleLabelEffect} 
                    onBlur={toggleLabelEffect}
                    />
                </div>

                <div className="input-container">
                <span ref={passwordLabel}>Password</span>
                    <input 
                    type={showingPassword ? "text" : "password" } 
                    name="password" value={password} 
                    required 
                    onChange={handleInputChange} 
                    onFocus={toggleLabelEffect} 
                    onBlur={toggleLabelEffect}
                    />
                <button ref={showPasswordButton} type="button" onClick={togglePasswordView} className="togglePasswordView"></button>
                </div>

                <a href="/">Forgot password?</a>
                <button type="submit" className="submit">Login</button>
            </form>
            
            <svg className="blob blob1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#FFB957" d="M36.4,-49.7C43.6,-37.4,43.3,-22.5,50.3,-5.5C57.3,11.5,71.7,30.6,69.4,45.3C67.1,59.9,48.2,70.2,30.1,72.2C12,74.2,-5.2,68,-22.5,61.7C-39.8,55.5,-57.1,49.2,-59.7,37.8C-62.3,26.4,-50.1,9.9,-44.1,-4.9C-38.1,-19.7,-38.2,-32.7,-31.9,-45.2C-25.6,-57.6,-12.8,-69.5,0.9,-70.6C14.6,-71.7,29.3,-62,36.4,-49.7Z" transform="translate(100 100)" /></svg>
            <svg className="blob blob2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#FFB957" d="M14,-13.5C27.8,-16.2,55.4,-32.1,65.1,-32C74.8,-31.9,66.6,-16,63.6,-1.8C60.5,12.4,62.5,24.8,57.9,33.8C53.4,42.8,42.2,48.3,31.5,48.8C20.7,49.3,10.3,44.8,-0.8,46.2C-12,47.6,-23.9,54.9,-31.5,52.5C-39.1,50.2,-42.3,38.2,-47.9,27.9C-53.5,17.5,-61.6,8.7,-67.2,-3.2C-72.8,-15.2,-76,-30.5,-72.2,-44.1C-68.5,-57.6,-57.8,-69.6,-44.6,-67.2C-31.4,-64.8,-15.7,-48.1,-7.8,-34.6C0.1,-21.1,0.2,-10.7,14,-13.5Z" transform="translate(100 100)" /></svg>
            <svg className="blob blob3" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#FFB957" d="M12.5,-27.4C15.3,-20,16,-14.8,14.7,-10.7C13.4,-6.5,10.1,-3.2,8.5,-0.9C6.9,1.4,7.1,2.8,6.2,3.1C5.2,3.4,3.1,2.5,1.9,11.2C0.7,19.8,0.3,37.8,-4,44.8C-8.4,51.8,-16.8,47.7,-29.4,45.6C-41.9,43.6,-58.7,43.6,-65.3,36.3C-72,29,-68.5,14.5,-58.5,5.8C-48.4,-2.9,-31.8,-5.8,-26.6,-15.7C-21.5,-25.5,-27.8,-42.3,-25.3,-49.9C-22.7,-57.5,-11.4,-56,-3.3,-50.3C4.8,-44.7,9.7,-34.9,12.5,-27.4Z" transform="translate(100 100)" /></svg>
            <svg className="blob blob4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#FFB957" d="M13.7,4.4C13.7,20.7,6.8,41.3,-8.2,41.3C-23.3,41.3,-46.5,20.7,-46.5,4.4C-46.5,-11.8,-23.3,-23.6,-8.2,-23.6C6.8,-23.6,13.7,-11.8,13.7,4.4Z" transform="translate(100 100)" /></svg> 
        </div>
    )
}
export default InteractiveForm;