import React from 'react';
import Article from './Article';

const ArticleList = ({articles}) => {

    const articleListItems = articles.map((article, index) => {   
        return (
            <li>
               <Article article = {article}/> 
            </li>
        ) 
    })



    return (
        <div className = "article-list">
        <ul>
            {articleListItems}
        </ul>
        </div>
        
    )
}

export default ArticleList;