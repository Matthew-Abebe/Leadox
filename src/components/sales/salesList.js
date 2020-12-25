import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import './sales.css'



export default class SalesList extends Component {

    // state = {

    // } 

    handleClick = (e) => {
        e.preventDefault()
        console.log("clicked link")
    }

    render() {
        return (

            <React.Fragment>
            <div>
                <section className="salesList">
                    <h1 className="salesHeader">Sales</h1>
                    {
                        this.props.sales.map(sale =>
                            <div key={sale.id}>

                        <Card body inverse className="salesCard" style={{ backgroundColor: '#cd5c5c', borderColor: '#333' }}>
                            <CardTitle>
                                <CardText><h3>{sale.selectedLead}</h3></CardText>
                                    <p>{sale.dateTime}</p>

                                        <br></br>

                            </CardTitle>
                                    <Link to={`/sales/${sale.id}/details`}>
                        <Button className="purchaseDetailsBtn" color="success" size="sm">
                            Details
                        </Button>
                        </Link>
                                </Card>

                                </div>

                        )}
                    </section>
                </div>

            </React.Fragment>
        )
    }
}