import React from 'react'
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
const NewsletterSignup = () => {
    const SignupContainer = styled.section`
    background: linear-gradient(90deg, #141414, #1a1a1a 52%, #1e1e1e 63%, #212121 72%, #1f1f1f 86%);
    padding: 20px;
    text-align: center;

    @media (min-width: 768px) {
        padding: 50px;
    }

    .header
    {
        margin-bottom: 20px;
        color: #fff;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const EmailInput = styled.input`
    width: 100%;
    max-width: 300px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    border:none;
    outline: none;
    transition: box-shadow 0.5s;
    animation: shake 0.2s ease-in-out 0s 2;

    @media (min-width: 768px) {
        font-size: 18px;
    }
`;

const ErrorMessage = styled.span`
  color: red;
  margin-bottom: 10px;
  font-size: 14px;
`;

const SubmitButton = styled.button`
    width: 100%;
    max-width: 300px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }

    @media (min-width: 768px) {
        font-size: 18px;
    }
`;

const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit = data => {;
  console.log(data);
};

  return (
    <SignupContainer>
            <p className="header">Sign Up for Our Newsletter</p>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <EmailInput id = "name" type="text"
          placeholder="Full Name"
          {...register('name', { required: 'Name is required' })} />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                <EmailInput type="email"
          placeholder="Email Address"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: 'Enter a valid email address',
            },
          })} />
           {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                <SubmitButton type="submit">Subscribe</SubmitButton>
            </Form>
        </SignupContainer>
  )
}

export default NewsletterSignup;