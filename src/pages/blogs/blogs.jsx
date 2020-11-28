import React, {useEffect, useState} from 'react'
import st from './blogs.module.scss'
import cx from 'classnames'
import BlogSidebar from './blogSidebar/blogSidebar';

import { BlogCard, Partner } from '../../components';

import radius from '../../img/radius2.jpg'
import img1 from '../../img/industry_2.jpg'
import img2 from '../../img/industry_1.jpg'
import img3 from '../../img/innov_1.jpg'
import Axios from "axios";
import {baseUrl} from "../../api/api";
import Slider from "react-slick";


const Blogs = () => {

    const [data,setData] = useState({
            experts : [],
            hot : []
        });
    // const[data,setData] = useState([])

    useEffect(()=>{
        Axios.get(`${baseUrl}ui`)
            .then( res =>{
                setData({
                    experts : res.data.experts,
                    hot : res.data.goryachi
                });
            })
    },[data]);

    // const cardData = [
    //     {_id:1, img: img1, title: 'Davlat xizmatchilari uchun raqamli transformatsiya', avtor:'Admin', seenCount: Math.floor(Math.random() * 150), to:'/blogs/12',createdAt:new Date().toLocaleString(),description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloremque excepturi exercitationem iusto modi, pariatur saepe suscipit vel veritatis!'},
    //     {_id:2, img: img2, title: 'Davlat xizmatchilari uchun raqamli transformatsiya', avtor:'Admin', seenCount: Math.floor(Math.random() * 150), to:'/blogs/12',createdAt:new Date().toLocaleString(),description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloremque excepturi exercitationem iusto modi, pariatur saepe suscipit vel veritatis!'},
    //     {_id:3, img: img3, title: 'Davlat xizmatchilari uchun raqamli transformatsiya', avtor:'Admin', seenCount: Math.floor(Math.random() * 150), to:'/blogs/12',createdAt:new Date().toLocaleString(),description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloremque excepturi exercitationem iusto modi, pariatur saepe suscipit vel veritatis!'},
    // ];

    // const cards = cardData.map((i, index) => (
    //     <BlogCard datum={...i} key={index} />
    // ))

    return (
        <div className={cx(st.blogs)}>
            <div className={cx('container')}>
                <BlogSidebar/>
                <div className={cx(st.box)}>
                    <img src={radius} alt="" className={cx(st.box_img)}/>
                </div>
                <h1 className={cx('home_blog_title')}>sarlavha</h1>
                <div className={cx('row')}>
                    {
                        data.hot.map((i,index)=>{
                            return(
                                <BlogCard data={i} key={i._id}/>
                            )
                        })
                    }
                    {
                        data.experts.map((i,index)=>{
                            return(
                                <BlogCard data={i} key={i._id}/>
                            )
                        })
                    }
                </div>
                <Partner />
            </div>
        </div>
    );
}

export default Blogs;