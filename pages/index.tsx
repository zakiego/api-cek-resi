import { Box } from "@chakra-ui/react";

import Endpoint from "~/components/Endpoint";
import InputResi from "~/components/InputResi";
import Navbar from "~/components/Navbar";
import Page from "~/components/Page";
import TestEndpoint from "~/components/TestEndpoint";

export default function Index() {
  return (
    <>
      <Page>
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
