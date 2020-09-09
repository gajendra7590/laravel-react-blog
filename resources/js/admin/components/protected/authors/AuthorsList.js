import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getAuthor } from '../../../redux'; 
import { Link } from 'react-router-dom';  

function AuthorsList( props ) {
    useEffect( ()=> {
        props.getAuthor();       
    },[]);  
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
                    { 
                       //JSON.stringify(props.users)
                    }
                    <div className="col-md-12">
                        <div className="pr_dash_data_table"> 
                            <table
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
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>  
                                    { (props.users.author_list.length > 0) && props.users.author_list.map( (author,index) => {
                                        return  <tr key={index}>
                                                        <td>{ (author.first_name)??'---' }</td>
                                                        <td>{ (author.last_name)??'---' }</td>
                                                        <td>{ (author.email)??'---' }</td>
                                                        <td>{ (author.phone)??'---' }</td>
                                                        <td>{ (author.address_line)??'---' }</td>
                                                        <td>{ (author.city)??'---' }</td>
                                                        <td>
                                                            <a href="" className="in_btn table_btn_grp">delete</a>
                                                            <Link to={`/admin/authors/edit/${author.id}`} className="in_btn table_btn_grp">edit</Link>
                                                        </td> 
                                                </tr> 
                                    }) } 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    )
} 


const mapStateToProps = state => {
    return {
        users : state.users
    } 
}

const mapDispatchToProps = dispatch => {
    return {
        getAuthor : () => dispatch(getAuthor())
    } 
}

 
export default connect(mapStateToProps,mapDispatchToProps)(AuthorsList);
