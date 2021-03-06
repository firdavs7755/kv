import React from 'react';
import st from '../../../components/header/higher/higher.module.scss';
import cx from 'classnames'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { authApi } from '../../../service/authService';
import { userActions , langActions } from '../../../redux/actions';
import { connect } from 'react-redux';
import uz from '../../../img/uz.svg';
import ru from '../../../img/ru.svg';

const SignIn = (props) => {

    const [logged, setlogged] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [data , setData] = useState({
        phone : "",
        password : ""
    })

const lang = props.lang.lang;

    useEffect(() => {
        setlogged(props.user.isLoggedIn)
    },[props])

    const [requestProgress , setRequestProgress ] = useState({
        isRequest : false,
        isError : false
    })


    const login = e => {
        e.preventDefault();
        setRequestProgress( prev => ({...prev , isRequest : true}))
        authApi.login(data).then( res => {
            const { token } = res.data;
            localStorage.setItem("token",token);
            setRequestProgress({ isRequest : false , isError : false })
            setToggle(false);
            window.location.replace('/profile');
        } , err => {
            setRequestProgress({ isRequest : false , isError : true })
            console.log(err)
        });
    }


        return(

            <div className={cx(st.sign_in, toggle ? st.show : st.close)}  >
                <div className={cx(st.sign_in_dark)} onClick={() => setToggle(false)}></div>
                <div className={cx(st.sign_in_box)}>
                    <h1 className={cx(st.sign_in_h1)}>{ lang.loginTitle} </h1>
                    <form onSubmit={ login }>
                        <div className={cx('form-group')}>
                            <label className={cx(st.sign_in_label)}> {lang.phone} </label>
                            <input onChange={ e => setData({...data , phone : e.target.value })} type="tel" className={cx(st.sign_in_input, 'form-control')} placeholder="+998XXZZZZZZZ"  required/>
                        </div>
                        <div className={cx('form-group')}>
                            <label className={cx(st.sign_in_label)}> {lang.password} </label>
                            <input onChange={ e => setData({...data , password : e.target.value })} type="password" className={cx(st.sign_in_input, 'form-control')} placeholder="Введите ваш пароль"  required/>
                        </div>
                        {
                            requestProgress.isError && 
                            <div className="alert alert-danger">
                                <i className="fa fa-fw fa-exclamation-triangle"></i>
                                { lang.loginError }
                            </div>
                        }
                        <button disabled={ requestProgress.isRequest } type="submit" className={cx(st.sign_in_but)} >
                            { lang.enter } { requestProgress.isRequest && <i className="fa fa-fw fa-circle-notch fa-spin"></i> }
                        </button>
                    </form>
                    <div className={cx(st.sign_in_content)}>
                        <div>
                        <span>{ lang.haveNotAccount }</span><br/>
                        <Link to="/sign-up" className={cx(st.sign_up_link)} onClick={() => setToggle(false)}>
                        {lang.registerWithLogin}
                        </Link>
                        </div>
                        <Link to="/resetpassword" className={cx(st.password_forget)} onClick={() => setToggle(false)}>
                            { lang.forgotPassTitle }
                        </Link>
                    </div>
                </div>
                <span className={cx(st.close_button, 'far fa-times-circle')} onClick={() => setToggle(false)}></span>
            </div>  
        )
}

export default SignIn;