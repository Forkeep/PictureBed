import React from "react";
import {Form, Input, Button} from 'antd';
import styled from "styled-components";
import {useStores} from "../stores";

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

const Validators = {
  username(rule, value) {
    if (/\W/.test(value)) return Promise.reject('只能是字母数字下划线');
    if (value.length < 4 || value.length > 10) return Promise.reject('最大是10最小是4位');
    return Promise.resolve()
  },
};


const Component = () => {
  const {AuthStore} = useStores();

  const onFinish = values => {
    console.log('Success:', values);
    AuthStore.setUsername(values.username);
    AuthStore.setPassword(values.password);
    AuthStore.register()
      .then(()=>{
        console.log('注册成功跳转到首页....')
      })
      .catch(()=>{
        console.log('注册失败请重新注册')
      })
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);

  };

  const validateConfirmPassword = ({getFieldValue}) => {
    return {
      validator(rule, value) {
        if (getFieldValue('password') === value) return Promise.resolve();
        return Promise.reject('两次密码不一致')
      }
    }
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
          rules={[{required: true, message: 'Please input your username!'}, {validator: Validators.username}]}
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
          rules={[{required: true, message: 'Please input your password!'}, validateConfirmPassword]}
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