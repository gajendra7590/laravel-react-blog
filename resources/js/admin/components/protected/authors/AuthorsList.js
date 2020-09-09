import React, { Component,useState,useEffect } from "react";
import { Link } from 'react-router-dom'; 
import DataTable from 'react-data-table-component'; 

import Axios from '../../../api-axios/Common.js';


function AuthorsList() {
    const [tableData, setTableData] = useState([]); 
    useEffect( ()=> {
        getAuthors()
       
    });

    const columns = [
        { name: 'First Name', selector: 'first_name', sortable: true },
        { name: 'Last Name',  selector: 'last_name', sortable: true,right: true},
    ];

    function getAuthors(){
        Axios.GET('admin/getAuthors')
        .then( (result) => { 
            setTableData(result)
        })
        .catch( (error) => {
            console.log(error)
        }); 
    } 

    return (
        <React.Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <div className="pr_dash_right_heading">
                            <h3>All Authors</h3>
                        </div>
                        <div className="pr_dash_right_add_btns">
                            <ul> 
                                <li>
                                    <Link
                                        to="/admin/authors/add"
                                        className="in_btn"
                                    >
                                        Add New
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    { JSON.stringify(tableData)}
                    <div className="col-md-12">
                        <div className="pr_dash_data_table float_left">
                            <DataTable 
                                columns={columns}
                                data={tableData}
                                id="example"
                                className="display nowrap"
                                style={{width: "100%"}}
                            />
                            {/* <table
                                id="example"
                                className="display nowrap"
                                style={{width: "100%"}}
                            >
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name </th>
                                        <th>E-mail Address</th>
                                        <th>Contact No.</th>
                                        <th>Address</th>
                                        <th>City</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    <tr>
                                        <td>Topias</td>
                                        <td>Kantola</td>
                                        <td>topiaskantola@gmail.com</td>
                                        <td>888 747 8574</td>
                                        <td>110 W Broadway St</td>
                                        <td>San Diego</td>
                                        <td>
                                            <small
                                                data-toggle="collapse"
                                                data-target="#r3"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="4.065"
                                                    height="18.294"
                                                    viewBox="0 0 4.065 18.294"
                                                >
                                                    <defs></defs>
                                                    <g transform="translate(-149.333)">
                                                        <g transform="translate(149.333 0)">
                                                            <g transform="translate(0)">
                                                                <circle
                                                                    className="a"
                                                                    cx="2.033"
                                                                    cy="2.033"
                                                                    r="2.033"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g transform="translate(149.333 7.114)">
                                                            <g transform="translate(0)">
                                                                <circle
                                                                    className="a"
                                                                    cx="2.033"
                                                                    cy="2.033"
                                                                    r="2.033"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g transform="translate(149.333 14.229)">
                                                            <g transform="translate(0)">
                                                                <circle
                                                                    className="a"
                                                                    cx="2.033"
                                                                    cy="2.033"
                                                                    r="2.033"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </small>
                                            <div
                                                id="r3"
                                                className="collapse collapsible is_table_dropdown"
                                            >
                                                <h4>
                                                    <a href="#">Edit</a>
                                                </h4>
                                                <h4>
                                                    <a href="#">Delete</a>
                                                </h4>
                                                <h4>
                                                    <a href="#">Disable</a>
                                                </h4>
                                            </div>
                                        </td>
                                    </tr> 
                                </tbody>
                            </table> */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
    )
} 
export default AuthorsList;
