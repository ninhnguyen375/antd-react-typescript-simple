import * as React from 'react';
import { Form, Input, Col, Row, message } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { Button } from 'antd';

interface IHelloProps {
  form: WrappedFormUtils;
}

// This component make sure that antd work correctly
const Hello: React.FunctionComponent<IHelloProps> = props => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.form.validateFields((err, value) => {
      if (!err) {
        console.log(value);
        message.success('Yeah!! Submited!!');
      } else {
        message.error('Please complete your info!');
      }
    });
  };
  return (
    <Row type='flex' justify='center'>
      <Col lg='10' md='10' sm='18'>
        <h1 style={{ color: 'gray', paddingTop: 50 }}>Sign In</h1>
        {/* Component Form of Antd */}
        <Form autoComplete='off' onSubmit={handleSubmit}>
          {/* Input Email */}
          <Form.Item>
            {props.form.getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Email is required',
                },
                {
                  type: 'email',
                  message: 'Not valid of Email!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          {/* Input Password */}
          <Form.Item>
            {props.form.getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Password is required',
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Button htmlType='submit'>Send</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Form.create({ name: 'Hello' })(Hello);
