// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState }from 'react';
import { Container,Row,Col } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



// function App() {
//   return (
   
// import { Button} from '@mui/material';
// import {Row,Col, CardImg} from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';

function App() {

  const [mydata,setdata]=useState([]);
  const  apiget =()=>{
    fetch("https://inshorts.me/news/trending?offset=0&limit=21")
    .then((response)=>response.json())
    .then((json)=>{
      // console.log(json);
      setdata(json.data.articles);
      // setdata(json.cases_time_series)
      console.log(json.data.articles);
      // console.log(json.statewise);
    })
  }
 useEffect(()=>{
  apiget();
  const interval=setInterval(()=>{apiget();},50000);
  return ()=>clearInterval(interval);
 },[]);
  
 return (
     <Container fluid className='container'>
      <Row xs={1} md={3} className="g-4">
    {
      mydata.map((value)=>{
        return(
          <>
          <Col className='col-md-4'>
          <CardGroup >
         <Card >
         <Card.Img variant="top"  style={{width:'auto',height:'200px'}} src={value.imageUrl} />
          <Card.Body style={{width:"auto",height:"300px"}}>
          <Card.Title>{value.title}</Card.Title>
          <Card.Text>
           {value.content}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {/* <small className="text-muted"></small> */}
          <Card.Link href={value.sourceUrl} style={{textDecoration:"none"}}>Read More</Card.Link>
          {/* <Card.Link href={value.sourceUrl}>{value.sourceName}</Card.Link> */}
        </Card.Footer>
      </Card>
      
     </CardGroup>
          
          </Col>
          </>
        )
      })
    }
      </Row>
     </Container>


     )

 }

export default App;
