import React, { Component } from "react";
import {Card, Col, Row,  Button} from 'react-bootstrap';
import ModalMovie from './ModalMovie';
import axios from "axios";


class ListMovies extends Component{
    constructor(props){
        super(props)
        this.state = {
            showModal : false,
            title : '',
            year : '',
            genre : '',
            director: '',
            poster : undefined
        }
        // console.log(this.props)
    }
    

    handleShow = (movie) => {
        this.setState({
            showModal : true,
        })
        
        axios.get(`http://www.omdbapi.com/?t=${movie.Title}&apikey=a5f2548a`)
        .then(res => {
          const dataDetail = res.data;
          this.setState({ 
            title : dataDetail.Title,
            year : dataDetail.Year,
            genre : dataDetail.Genre,
            director: dataDetail.Director,
            poster : dataDetail.Poster
         })
          console.log(this.state)
          
        })
        .catch(err => console.log("ADA EROR LUR, " + err))
    }

    handleClose = () => [
        this.setState({
            showModal : false,
        })
    ]

    render(){
        const {movies} = this.props;
        return(
           
            <Row className="ListMovies">

                {movies.Search && movies.Search.map((item, index) => 
                    <Col xs={6} lg={3}>
                        <Card key={index} >
                            <Card.Img variant="top" src={item.Poster} />
                             <Card.Body>
                            <Card.Title>{item.Title}</Card.Title>
                                <Card.Text>
                                    Tahun : {item.Year}
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                        <Button variant="primary" onClick={() => this.handleShow(item)}>
                            Open
                        </Button>
                        </Card.Body>
                    </Card>
                  </Col>
                )}

                <ModalMovie {...this.state} handleClose={this.handleClose}/>

           
            </Row>
            

            
        )
    }
}

export default ListMovies;