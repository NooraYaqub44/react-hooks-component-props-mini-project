import React from 'react'
import Article from './Article'

export default function ArticleList({ posts }) {
const posts=posts.map((item)=>{return<div key={item.id}key={item.id} title={item.title} date={item.date} preview={item.preview}>item</div>})

    return (
        <main>
         <ArticleList posts={posts} />
        </main>
    )
}
/*  {posts.map((item) =>
<Article key={item.id} title={item.title} date={item.date} preview={item.preview} minutes={item.minutes}>item</Article>)}*/