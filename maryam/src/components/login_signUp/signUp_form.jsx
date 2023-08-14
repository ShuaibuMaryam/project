import React from "react";
import {Box, Button, Divider, Flex, FormControl, FormLabel, Input, Text} from "@chakra-ui/react";
import Link from "next/link";
import {Field, Formik, Form} from "formik";
import * as Yup from "yup";
import axiosInstance from "../../utils/axios";
import {FaFacebookF} from "react-icons/fa";
import {AiOutlineTwitter, AiOutlineGoogle} from "react-icons/ai";


const SignUpSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email("Invalid email").required("Required"),
    phone_number: Yup.number().required("Required"),
    password: Yup.string()
        .required("Required")
        .min(6, 'Password must be at least 6 characters long')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*?&])[A-Za-z\d@$!%*?&]/,
            'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
        ),
});
export const SignUpForm = ({activeTab, setActiveTab}) => {
    const handleLoginLinkClick = () => {
        setActiveTab(0); // Set the active tab index to the signup tab
    };

    return (
        <Box>
            <Text opacity={"0.7"} py={"10px"}>Welcome back to a World of affordable  comfort</Text>
            <Formik
                initialValues={{
                    username: '',
                    password:'',
                    email:'',
                    phone_number:'',
                }}
                validationSchema={SignUpSchema}
                onSubmit={async (values, {setSubmitting, isSignUp}) => {

                    try {
                        // const response = await axiosInstance.post("/", values);
                        toast({
                            title: "Thank you!",
                            description: "We will be in touch with you shortly",
                            status: "success",
                            duration: 5000,
                            isClosable: true,
                        });
                        setSubmitting(false);
                    } catch (error) {
                        console.error(error);
                        setSubmitting(false);

                        toast({
                            title: "An error occurred",
                            description:
                                "There was an error submitting your response. Please try again.",
                            status: "error",
                            duration: 5000,
                            isClosable: true,
                        });
                    }
                    console.log(values);
                    isSignUp();
                }}
            >
                {({errors, touched, setFieldTouched, setFieldValue, values, isSubmitting}) => (
                    <Form>
                        <Field name="username">
                            {({field}) => (
                                <FormControl opacity={"0.7"}>
                                    <FormLabel>Username</FormLabel>
                                    <Input {...field}  type='text'
                                           onChange={(e) => setFieldValue('username', e.target.value)}
                                           onBlur={(e) => setFieldTouched('username', true)}
                                           bg={"white"}
                                           mb={"1rem"}
                                    />
                                    {errors.username && touched.username ? (
                                        <Box color={"red"}>{errors.username}</Box>
                                    ) : null}
                                </FormControl>
                            )}
                        </Field>
                        <Field name="phone_number">
                            {({field}) => (
                                <FormControl opacity={"0.7"}>
                                    <FormLabel>Phone Number</FormLabel>
                                    <Input {...field}  type='number'
                                           placeholder='+1234567890'
                                           onChange={(e) => setFieldValue('username', e.target.value)}
                                           onBlur={(e) => setFieldTouched('username', true)}
                                           bg={"white"}
                                           mb={"1rem"}
                                    />
                                    {errors.phone_number && touched.phone_number? (
                                        <Box color={"red"}>{errors.phone_number}</Box>
                                    ) : null}
                                </FormControl>
                            )}
                        </Field>
                        <Field name="email">
                            {({field}) => (
                                <FormControl opacity={"0.7"}>
                                    <FormLabel>Email</FormLabel>
                                    <Input {...field}  type='email'
                                           placeholder='example@gmail.com'
                                           onChange={(e) => setFieldValue('email', e.target.value)}
                                           onBlur={(e) => setFieldTouched('email', true)}
                                           bg={"white"}
                                           mb={"1rem"}
                                    />
                                    {errors.email && touched.email ? (
                                        <Box color={"red"}>{errors.email}</Box>
                                    ) : null}
                                </FormControl>
                            )}
                        </Field>
                        <Field name="Password">
                            {({field}) => (
                                <FormControl opacity={"0.7"}>
                                    <FormLabel>Password</FormLabel>
                                    <Input {...field}  type='password'
                                           placeholder='············'
                                           onChange={(e) => setFieldValue('password', e.target.value)}
                                           onBlur={(e) => setFieldTouched('password', true)}
                                           bg={"white"}
                                           mb={"1rem"}
                                    />
                                    {errors.password && touched.password ? (
                                        <Box color={"red"}>{errors.password}</Box>
                                    ) : null}
                                </FormControl>
                            )}
                        </Field>
            <Flex opacity={"0.7"} gap={"2"}>
                <input type={"checkbox"}/>
                <Link href={""}>I agree to <span style={{ color:"#FE83C6"}}>privacy policy & terms</span></Link>
            </Flex>
            <Button
                mt={4}
                bg={"#DB0090"}
                color={"white"}
                w={"100%"}
                type='submit'
            >
                Sign up
            </Button>
            <Box opacity={"0.7"} py={"15px"} textAlign={"center"}>
                <Text onClick={handleLoginLinkClick}>Already have an account? <span style={{ color:"#FE83C6"}}>Log in instead</span></Text>
            </Box>
            <Box display="flex" alignItems="center" w={{base: "", md: "", lg: "70%"}} mx={"auto"}>
                <Divider flex="1" borderColor="gray.300"/>
                <Text px={4} color={"rgba(75, 70, 92, 1)"}>Or</Text>
                <Divider flex="1" borderColor="gray.300"/>
            </Box>
            <Flex justifyContent={"center"} mt={"1rem"}>
                <Box mr={"1rem"} bg={"rgba(66, 103, 178, 0.16)"} width={"38px"} height={"38px"}
                     p={"1rem 2rem 2em 1rem"} borderRadius={"5px"}>
                    <FaFacebookF color={"rgba(66, 103, 178, 1)"} fontSize={"1.3rem"}/>
                </Box>
                <Box mr={"1rem"} bg={"rgba(29, 161, 242, 0.16)"} width={"38px"} height={"38px"}
                     p={"1rem 2rem 2em 1rem"} borderRadius={"5px"}>
                    <AiOutlineTwitter color={"rgba(29, 161, 242, 1)"} fontSize={"1.3rem"}/>
                </Box>
                <Box mr={"1rem"} bg={"rgba(219, 68, 55, 0.16)"} width={"38px"} height={"38px"}
                     p={"1rem 2rem 2em 1rem"} borderRadius={"5px"}>
                    <AiOutlineGoogle color={"#DB4437"} fontSize={"1.3rem"}/>
                </Box>

            </Flex>
                    </Form>
                )}
            </Formik>
        </Box>
    )
};