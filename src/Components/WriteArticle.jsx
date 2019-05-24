import React from 'react'
import { Form, Container } from 'semantic-ui-react'

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
        </Form>
      </Container>
    </>
  )
}

export default WriteArticle