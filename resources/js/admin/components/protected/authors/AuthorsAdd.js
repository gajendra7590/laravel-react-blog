import React, { useEffect,useState } from "react";
import { connect,useSelector } from 'react-redux';
import { editAuthor } from '../../../redux'; 
import { Link,useLocation } from 'react-router-dom'; 


function AuthorsAdd( props ) {  
    let location = useLocation(); 
    const [loader,updateLoader] = useState(true); 
    const [editUser, editUserUpdate] = useState({
        id : 0,first_name : '',last_name : '',display_name : '',email : '',
        phone : '',address_line : '',city : '',state : '',country : '',zip : '',
    });

    let userId = props.match.params.id;    
    if( (userId != 'undefined') && (userId > 0)){ 
        const author_edit = useSelector(state => state.users.author_edit);  
        if( (Object.keys(author_edit).length) > 0) { 
            if(loader == true) { 
                updateLoader(false);
                editUserUpdate(author_edit); 
            } 
        }   
    }

    useEffect( () => { 
        let userId = props.match.params.id;
        if( (userId != 'undefined') && (userId > 0)){ 
            props.editAuthor({id : userId});  
        }  
    },[]);

    function changeInputField(e){
        const name = e.target.name;
        const value = e.target.value; 
        editUserUpdate({
            ...editUser,
            [name]: value
        });
    }
    return ( <React.Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <div className="in_add_insp_box">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="in_add_insp_heading float_left">
                                        <h3>Add New Author</h3>
                                        { JSON.stringify( editUser ) }
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <form action="" className="form">
                                        <div className="row">
                                            <div className="col-md-1">
                                                <div className="avatar-edit">
                                                    <div className="btnnn">
                                                        <img src="/admin-theme/images/thumbnails/user1.png" alt="img" />
                                                    </div>
                                                    <div className="avatar-preview">
                                                        <div id="imagePreview"></div>
                                                    </div>
                                                    <div className="pr_user_img_cont_wrapper">
                                                        <label htmlFor="imageUpload">Add Image</label>
                                                        <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>First Name</label>
                                                    <input
                                                        type="text"
                                                        name="first_name"
                                                        value={ (editUser.first_name)??'' }
                                                        onChange={ changeInputField }
                                                        placeholder="First name.."
                                                    />
                                                </div> 
                                            </div>
                                            <div className="col-md-6">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>Last Name</label>
                                                    <input
                                                        type="text"
                                                        name="last_name"
                                                        value={ (editUser.last_name)??'' }
                                                        onChange={ changeInputField }
                                                        placeholder="Last name.."
                                                    />
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>Display Name</label>
                                                    <input
                                                        type="text"
                                                        name="display_name"
                                                        value={ (editUser.display_name)??'' }
                                                        onChange={ changeInputField }
                                                        placeholder="Display Name"
                                                    />
                                                </div> 
                                            </div> 
                                            <div className="col-md-6">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>Email Address</label>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        value={ (editUser.email)??'' }
                                                        onChange={ changeInputField }
                                                        placeholder="Email address"
                                                    />
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>Phone</label>
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        value={ (editUser.phone)??'' }
                                                        onChange={ changeInputField }
                                                        placeholder="Phone number"
                                                    />
                                                </div> 
                                            </div>
                                            <div className="col-md-6">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>Password { (editUser.id > 0)?<span>( Please leave empty if not updated )</span>:''} </label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        value={ (editUser.password)??'' }
                                                        onChange={ changeInputField }
                                                        placeholder="Password..."
                                                    />
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>Address Line</label>
                                                    <input
                                                        type="text"
                                                        name="address_line"
                                                        value={ (editUser.address_line)??'' }
                                                        onChange={ changeInputField }
                                                        placeholder="Address line..."
                                                    />
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>City</label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        value={ (editUser.city)??'' }
                                                        onChange={ changeInputField }
                                                        placeholder="City"
                                                    />
                                                </div> 
                                            </div>
                                            <div className="col-md-6">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>State</label>
                                                    <input
                                                        type="text"
                                                        name="state"
                                                        value={ (editUser.state)??'' }
                                                        onChange={ changeInputField }
                                                        placeholder="State"
                                                    />
                                                </div> 
                                            </div> 
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>Country</label>
                                                    <input
                                                        type="text"
                                                        name="country"
                                                        value={ (editUser.country)??'' }
                                                        onChange={ changeInputField }
                                                        placeholder="Country"
                                                    />
                                                </div> 
                                            </div>
                                            <div className="col-md-6">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>Zip</label>
                                                    <input
                                                        type="text"
                                                        name="zip"
                                                        value={ (editUser.zip)??'' }
                                                        onChange={ changeInputField }
                                                        placeholder="Zip Code"
                                                    />
                                                </div> 
                                            </div> 
                                        </div>
                                        <div className="col-md-12">
                                            <div className="in_ad_insp_btn_wrapper float_left">
                                                <ul>
                                                    <li>
                                                        <button
                                                            type="submit"
                                                            className="in_btn"
                                                        >
                                                            Submit
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            type="button"
                                                            className="in_btn"
                                                        >
                                                            <Link to="/admin/authors">Cancel</Link>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    )        
}

const mapStateToProps = state => {
    return {
        
    } 
}

const mapDispatchToProps = dispatch => {
    return {
        editAuthor : (payload) => dispatch(editAuthor( payload ))
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthorsAdd);
