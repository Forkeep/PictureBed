import React from "react";
import {Form, Input, Button} from 'antd';
import styled from "styled-components";

const Wrapper = styled.div`
max-width: 600px;
padding: 20px;
margin: 30px auto;
border-radius: 10px;
box-shadow: 3px 3px 3px 3px rgba(0,0,0,0.2);
`;

const Title = styled.h1`
margin: 10px auto;
text-align: center;
`;

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};
const tailLayout = {
  wrapperCol: {offset: 8, span: 16},
};

const Component = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Wrapper>
      <Title>Register</Title>
      <Form
        {...layout}
        name="basic"
        initialValues={{remember: true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{required: true, message: 'Please input your username!'}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{required: true, message: 'Please input your password!'}, {max: 10, message: 'At most 10! '}]}
        >
          <Input.Password/>
        </Form.Item>
        <Form.Item
          label="Confirm"
          name="confirmPassword"
          rules={[{required: true, message: 'Please input your password!'}]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default Component;