import React from 'react';
import {Form, Button} from 'react-bootstrap'


const Search = ({handleChange, handleSubmit}) => {
    return(
        <Form className="search" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="cari disini" onChange={(event) => handleChange(event)}/>
                <Button variant="primary" type="submit">
                    Cari
                </Button>
        </Form.Group>
        </Form>
    )
}

export default Search;