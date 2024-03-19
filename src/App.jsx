import { Button, Modal, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import "@mantine/core/styles.css";

const App = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <button onClick={open}>Add Your paragraph</button>
      <Modal opened={opened} onClose={close} title="Add Your paragraph">
        <Textarea placeholder="content goes here" autosize minRows={15} />
        <br />
        <Button variant="filled">Button</Button>
      </Modal>
    </div>
  );
};

export default App;
