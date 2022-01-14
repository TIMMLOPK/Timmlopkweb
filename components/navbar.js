import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon, AttachmentIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import dynamic from 'next/dynamic'
import { FaBlog } from 'react-icons/fa'

const Music = dynamic(() => import('../components/music'))

const LinkItem = ({ href, path, _target, children,isExternal,...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? '#B0E0E6' : undefined}
        color={active ? '#202023' : inactiveColor}
        _hover='none'
        boxShadow='none'
        variant="ghost"
        _target={_target}
        isExternal={isExternal}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="x1" >

            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/shares" path={path}>
            Sharing
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="/blog"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <FaBlog />
            blog
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://github.com/TIMMLOPK"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            isExternal={true}
          >
            <IoLogoGithub />
            Github
          </LinkItem>

        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block' }}>
            <Music />
          </Box>

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazytrue id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="ghost"
                transition="linear"
              />
              <MenuList bg={useColorModeValue('#f0e7db', '#202025')}>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/shares" passHref>
                  <MenuItem as={Link}>Sharing</MenuItem>
                </NextLink>
                <MenuItem as={Link} href="https://github.com/TIMMLOPK">
                  Github
                </MenuItem>
                <NextLink href="/blog" passHref>
                  <MenuItem as={Link} icon={<AttachmentIcon />}>
                    Blog
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
