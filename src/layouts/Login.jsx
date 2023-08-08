import React from "react";
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import '../App.css';
export default function Login(props) {
    return (
        <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />

                            <Button color='teal' fluid size='big'>
                                Giriş Yap
                            </Button>
                        </Segment>
                    </Form>

                </Grid.Column>
            </Grid>
        </div>
    );
}
