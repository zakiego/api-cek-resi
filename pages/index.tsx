import { Box } from "@chakra-ui/react";

import Endpoint from "~/components/Endpoint";
import Header from "~/components/Header";
import InputResi from "~/components/InputResi";
import Navbar from "~/components/Navbar";
import Page from "~/components/Page";
import TestEndpoint from "~/components/TestEndpoint";

export default function Index() {
  return (
    <>
      <Page>
        <Header />
        <Navbar />
        <Box pt="7" />
        <InputResi />
        <Box pt="7" />
        <Endpoint />
        <Box pt="8" />
        <TestEndpoint />
      </Page>
    </>
  );
}
