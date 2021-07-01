import React from 'react';
// import AccessTimeIcon from '@material-ui/icons/AccessTime';
import styled from "styled-components";
import { Avatar } from "@material-ui/core";


function Header() {
    return (
        <HeaderContainer>
            {/* Header left */}
            <HeaderLeft>
                <HeaderAvatar
                // onClick={() => auth.signOut()}
                // alt={user?.displayName}
                // src={user?.photoURL}
                />
                {/* <AccessTimeIcon /> */}
            </HeaderLeft>

            {/* Header Search */}

            {/* Header Right */}
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;