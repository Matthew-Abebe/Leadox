import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'
import { Link } from 'react-router-dom'
import { Card, CardText, CardBody, CardTitle, Button, } from 'reactstrap';

import './sales.css'


export default class SalesDetails extends Component {

    state = {
        saleId: "",
        selectedLead: "",
        selectedProduct: "",
        saleTime: ""
    }

    componentDidMount() {
        DbCalls.getSale(this.props.match.params.saleId)
            .then(sale => {
                this.setState({
                    saleId: sale.id,
                    selectedLead: sale.selectedLead,
                    selectedProduct: sale.selectedProduct,
                    saleTime: sale.saleTime
                })
            }
        )
    }

    render() {
        return (
            <React.Fragment>
                
            <div>
                    <Card body inverse className="salesDetailsCard" style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardBody>
                        <CardTitle>
                            <p>Name: {this.state.selectedLead}</p>
                            <p>Product: {this.state.selectedProduct}</p>
                            <p>Timestamp: {this.state.saleTime}</p>
                        </CardTitle>
                        <Link to={`/sales/${this.state.saleId}/edit`}>
                            <Button color="success" size="sm" className="editSaleBtn">Edit</Button>
                        </Link>
                        <Link to="/sales">
                        <Button color="success" size="sm" onClick={() =>
                            this.props.deleteSale(this.state.saleId)} className="deleteSaleBtn">Delete
                            </Button>
                            </Link>
                    </CardBody>
                </Card>
            </div>
        
        </React.Fragment>
        )
    }
}