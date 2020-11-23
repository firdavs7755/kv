import React, { useEffect } from 'react'
import st from './blog_card.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import {  connect } from 'react-redux';
import parse from 'react-html-parser';

function BlogCard ({_id,img,title,createdAt,avtor,description,seenCount,to}){
    // const { data } = props;
    // const { lang ,type } = props.lang;

    return (
        <div className={cx('blogCard')}>    
            <div className={st.card}>
                <div className={cx(st.card_header)}>
                    {console.log(title)}
                    <img src={img} alt="" className={cx(st.card_img,'img-fluid')}/>
                </div>
                <div className={cx(st.card_title)}>
                    <Link to={`/blog/experts/${_id}`} className={cx(st.card_title_link)}>{title}</Link>
                    <div className={cx(st.content)}>
                        <span className={cx(st.content_span)}>
                            <span className={cx(st.avtor)}> </span> {avtor}
                        </span>
                        <span className={cx(st.content_span)}>
                            {createdAt}
                        </span>
                        <span className={cx(st.content_span)}>
                            <i className={cx('fas fa-eye', st.eye)}></i>
                            {seenCount}
                        </span>
                    </div>
                </div>
                <div className={cx(st.text)}>
                    <p className={cx(st.text_p)}>
                        {parse(description)}
                    </p>
                </div>
                <div>
                    <Link to={`/blogs/${_id}`} className={cx(st.link)}>
                        Ko'proq
                    </Link>
                </div>
            </div>
        </div>

    );
}

const mstp = state => (state);

export default connect(mstp,null)(BlogCard);