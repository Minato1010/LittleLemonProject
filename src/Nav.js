import { Box, Center, HStack } from "@chakra-ui/react";
import logo from './icons_assets/Logo.svg';
function Nav(){
    return (
    <nav>
        <Box backgroundColor="white" maxWidth="1440px" margin="15px">

        
        <HStack spacing={8} textStyle={"bold"}>
            
        <a href=""> <img src={logo} alt="Logo" style={{ width: '200px', marginLeft: '150px', marginRight: '150px' }} /></a>
        <a href="">HOME</a>
        <a href="">ABOUT</a>
        <a href="">MENU</a>
        <a href="">RESERVATIONS</a>
        <a href="">ORDER ONLINE</a>
        <a href="">LOGIN</a>
        
        </HStack>
        </Box>       
        
    </nav>);
}
export default Nav;
