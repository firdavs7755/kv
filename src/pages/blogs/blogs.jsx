import React from 'react'
import st from './blogs.module.scss'
import cx from 'classnames'
import BlogSidebar from './blogSidebar/blogSidebar';

import { BlogCard, Partner } from '../../components';

import radius from '../../img/radius2.jpg'
import img1 from '../../img/industry_2.jpg'
import img2 from '../../img/industry_1.jpg'
import img3 from '../../img/innov_1.jpg'


const Blogs = () => {

    const cardData = [
        {_id:1, img: img1, title: 'Цифровая трансформация для госслужащих', avtor:'Admin', seenCount: Math.floor(Math.random() * 99), to:'/blogs/12',createdAt:new Date().toLocaleString(),description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloremque excepturi exercitationem iusto modi, pariatur saepe suscipit vel veritatis!'},
        {_id:2, img: img2, title: 'Цифровая трансформация для госслужащих', avtor:'Admin', seenCount: Math.floor(Math.random() * 99), to:'/blogs/12',createdAt:new Date().toLocaleString(),description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloremque excepturi exercitationem iusto modi, pariatur saepe suscipit vel veritatis!'},
        {_id:3, img: img1, title: 'Цифровая трансформация для госслужащих', avtor:'Admin', seenCount: Math.floor(Math.random() * 99), to:'/blogs/12',createdAt:new Date().toLocaleString(),description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloremque excepturi exercitationem iusto modi, pariatur saepe suscipit vel veritatis!'},
    ];

    // const cards = cardData.map((i, index) => (
    //     <BlogCard datum={...i} key={index} />
    // ))

    return (
        <div className={cx(st.blogs)}>
            <div className={cx('container')}>
                <BlogSidebar />
                <div className={cx(st.box)}>
                    <img src={radius} alt="" className={cx(st.box_img)}/>
                </div>
                <h1 className={cx('home_blog_title')}>рубрика</h1>
                <div className={cx('row')}>
                    {
                        cardData.map((item,index)=><BlogCard key={index} {...item}/>)
                    }
                    {/*{cards}*/}
                    {/*{console.log(cards)}*/}
                </div>
                <Partner />
            </div>
        </div>
    );
}

export default Blogs;