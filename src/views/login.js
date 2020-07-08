import React from "react";
import {Form, Input, Button} from 'antd';
import styled from "styled-components";
import {useStores} from "../stores";
import {AuthStore} from "../stores/auth";
import {useHistory} from "react-router-dom"
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
  username(rule, value, callback) {
    if (/\W/.test(value)) return Promise.reject('只能是字母数字下划线');
    if (value.length < 4 || value.length > 10) return Promise.reject('最大是10最小是4位');
    return Promise.resolve()
  },
};


const Component = () => {
  const history = useHistory();
  const {AuthStore} = useStores();
  const onFinish = values => {
    console.log('Success:', values);
    AuthStore.setUsername(values.username);
    AuthStore.setPassword(values.password);
    AuthStore.login()
      .then(()=>{
        console.log('登录成功跳转首页');
        history.push('/')
      })
      .catch(()=>{
        console.log('登录失败不跳转')
      })

  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Wrapper>
      <Title>Login</Title>
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