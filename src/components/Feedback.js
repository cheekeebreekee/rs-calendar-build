import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from './../selectors';
import Header from './Header';
import { Link } from 'react-router-dom';
import { Button, Textarea, RadioGroup, Radio, Form } from 'react-lightning-design-system';

class Feedback extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Form className="feedback">
                    <Textarea className="feedback__textarea" label="Please leave your request about event. It's important for us!"/>
                    <RadioGroup className="feedback__radio" label="Choose mark" name="radiogroup1">
                        <Radio label="Bad" />
                        <Radio label="Medium" />
                        <Radio label="Good" />
                        <Radio label="Awesome" />
                    </RadioGroup>
                    <Button className="feedback__submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Feedback);
