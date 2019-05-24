import React from 'react'
import { Form, Container, Button } from 'semantic-ui-react'

const WriteArticle = () => {
  return (
    <>
      <Container>
        <Form type="medium" id="write-article">
          <Form.Input
            fluid
            id="title"
            placeholder="Title"
          />
          <Form.TextArea
            fluid
            id="ingress"
            placeholder="Ingress"
          />
          <Form.TextArea
            fluid
            id="body"
            placeholder="Body"
            />
          <Form.Input
            fluid
            id="written_by"
            placeholder="Written By"
          />
          <Form.Input
            fluid
            id="image"
            placeholder="https://image.com"
          />
          <Button id="create">Create Article</Button>
        </Form>
      </Container>
    </>
  )
}

export default WriteArticle