import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';

function Home() {
    const [posts, setPosts] = useState([]);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        if (isAuthenticated) {
            appwriteService.getPosts([]).then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            });
        } else {
            // Reset posts when user logs out
            setPosts([]);
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
    return (
        <div className="w-full py-8">
            <Container>
                <h1 className="text-3xl font-bold mb-6">Mega Blog</h1>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-full md:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
