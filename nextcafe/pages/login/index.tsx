import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import type { NextPage } from 'next' 

const Login: NextPage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.200", "gray.700" )
  return (
    <Flex align="center" justify="center" h="100vh">
      <Flex direction="column" p={12}bg={formBackground} rounded={6}>
        <Heading mb={6}>Log In</Heading>
        <Input mb={3} placeholder="Chakra@test.com" type="email" variant="filled"/>
        <Input mb={6} placeholder="*****" type="password" variant="filled"/>
        <Button mb={6} colorScheme="teal">Log In</Button>
        <Button colorScheme="teal" onClick={ toggleColorMode }>Toggle DarkMode</Button>
      </Flex>
    </Flex>
  )
}

export default Login
