import { useRef } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Form, { FormHandle } from './components/Form';
import Input from './components/input';

function App() {
  const customForm = useRef<FormHandle>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }
  return (
    <main>
      {/* <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number " />

      <p>
        <Button>A button</Button>
      </p>
      <p>
        <Button href="https://www.google.com">A Link</Button>
      </p> */}
      <Container as={Button}>Hihi</Container>
      <Container as={'a'} href="sdf">
        sa
      </Container>

      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" name="name" />
        <Input type="number" label="Aame" id="age" name="age" />
        <p>
          <Button>Submit</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
