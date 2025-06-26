import { Button, Result } from 'antd';
import React from 'react'
import PageWrapper from '../shared/pageWrapper';

export default function errorPage() {

    // Uncaught ReferenceError: path is not defined
    return  <PageWrapper> <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />
  </PageWrapper>
  
 

}
