import React, {useContext, useState} from "react";
import { Link } from 'react-router-dom'
import useAuth from '../../CustomHooks/useAuth';
import EditProfile from "../../Components/UserComp/EditProfile";
import ChangePassForm from './../../Components/UserComp/ChangePassForm';
import Profile from "../../Components/UserComp/Profile";

const UserProfile = () => {
  const { userData } = useAuth();
  const [step, setStep] = useState();

  const renderSetting = ()=>{
    switch(step){
      case "ProfilePage":
        return <Profile setStep={setStep}/>;
      case "EditProComp":
        return <EditProfile setStep={setStep}/>;
      case "ChangePassComp":
        return <ChangePassForm setStep={setStep}/>;
      default:
        return <Profile setStep={setStep}/>;
    } 
  }
  return (
    <>
    {renderSetting()}
    </>
  );
};

export default UserProfile;