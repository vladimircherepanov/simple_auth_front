import React, {useState} from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";

const LoginTabs = () => {
    const [key, setKey] = useState('home');

return (
    <div className="login-tab">
    <Tabs id="controlled-tab"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
          justify>
        <Tab eventKey="home" title="SIGN UP">
            <SignupForm />
        </Tab>
        <Tab eventKey="profile" title="SIGN IN">
            <SigninForm />
        </Tab>
    </Tabs>
    </div>
);
};


export default LoginTabs;