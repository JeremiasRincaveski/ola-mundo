import Banner from "components/Banner"
import styled from './inicio.module.css'
import posts from 'json/posts.json'
import Post from "components/post"

export const Inicio = () => {
    return (
        <main>
            <Banner />
            <ul className={styled.posts}>
                {posts.map(post => 
                <li key={post.id}>
                    <Post post={post} />
                </li>)}
            </ul>
        </main>
    )
}