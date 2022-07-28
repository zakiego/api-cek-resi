import { Container, Flex } from "@chakra-ui/react";

interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <Container>
      <Flex mt="6" flexDir="column">
        {children}
      </Flex>
    </Container>
  );
};

export default Page;
