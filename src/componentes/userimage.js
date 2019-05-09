import React from "react";

function UserImage(props) {
    const { image } = props;
    return image ? ( <img className = "userimage"
        src = { image }/>
    ) : ( < img className = "userimage"
        src = "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" /
        >
    );
}

export default UserImage