import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Heading,
  HStack,
  Icon,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <IconButton
        variant="outline"
        aria-label="Toggle light/dark mode"
        icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
      <Spacer />
      <Heading size="lg">API Lacak Resi</Heading>
      <Spacer />
      <IconButton
        as="a"
        href="https://github.com/zakiego"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Menu"
        variant="outline"
        rounded="xl"
        icon={<GoMarkGithub />}
      />
    </HStack>
  );
};

export default Navbar;
