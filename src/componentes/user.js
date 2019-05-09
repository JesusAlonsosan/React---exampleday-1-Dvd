
import React from "react";
import UserImage from "./userimage";

function User(props) {
    const { name, lastname, email, image } = props.user;
    return ( <div>
            <UserImage image={image} />
            <h3 className="username" > {`${name} ${lastname}`} </h3>
            <p> {email} </p>
        </div>
    );
}

export default User;