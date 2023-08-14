import {Field, Form, Formik} from "formik";
import axiosInstance from "../../../../utils/axios";
import {Box, Button, FormControl, Input, Text} from "@chakra-ui/react";
import React from "react";
import * as Yup from "yup";


const ForgotPasswordSchema = Yup.object().shape({

    email: Yup.string().email("Invalid email").required("Required"),

})

function ForgotPasswordForm() {

    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                }}
                validationSchema={ForgotPasswordSchema}
                onSubmit={async (values, {setSubmitting, resetForm}) => {
                    try {
                        const response = await axiosInstance.post("/auth/forgot-password/", values);
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
                    resetForm();
                }}
            >
                {({errors, touched, setFieldTouched, setFieldValue, values, isSubmitting}) => (
                    <Form>
                        <Field name="email"  >
                            {({field}) => (

                                <FormControl mb={"1rem"} mt={"1rem"}  w={{base: "90%", md: "80%", lg: "70%"}}
                                             ml={{base: "1rem", md: "3rem", lg: "4rem"}}
                                >
                                    <Text color={"#808587"} fontSize={"15px"}
                                          fontWeight={"400"} fontFamily={"'Public Sans', sans-serif"} mb={"0.3rem"}>8 digits Code
                                    </Text>
                                    <Input {...field} id="email" placeholder="********"
                                           onChange={(e) => setFieldValue('email', e.target.value)}
                                           onBlur={(e) => setFieldTouched('email', true)}
                                           bg={"rgba(255, 255, 255, 1)"}
                                    />


                                    {errors.email && touched.email ? (
                                        <Box color={"red"}>{errors.email}</Box>
                                    ) : null}


                                </FormControl>
                            )}
                        </Field>

                        <Button type={"submit"} mt={"1rem"}   ml={{base: "1rem", md: "3rem", lg: "4rem"}}
                                width={{base: "90%", md: "80%", lg: "70%"}}
                                height={"2.375rem"}
                                fontWeight={"500"}
                                fontSize={"15px"}
                                fontFamily={"'Public Sans', sans-serif"}
                                bg={"rgba(219, 0, 144, 1)"}
                                letterSpacing={"1px"}
                                color={"white"}>Reset Password</Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default ForgotPasswordForm