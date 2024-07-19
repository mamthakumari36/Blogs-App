import { createContext, useReducer, useState, useEffect } from "react";

export const AllDataLists = createContext({
    userdataList: [],
    blogDataList: [],
    userFetching: false,
    blogFetching: false,
});

const userdataListReducer = (currDataList, action) => {

    let newPostList = currDataList;
    if (action.type === 'ADD_USER_POST')
        newPostList = action.payload.posts;

    return newPostList;
}
const blogDataListReducer = (currDataList, action) => {

    let newPostList = currDataList;
    if (action.type === 'ADD_BLOGS_POST')
        newPostList = action.payload.posts;

    return newPostList;
}


const DataListProvider = ({ children }) => {

    const [userdataList, dispatchDataList] = useReducer(userdataListReducer, [])
    const [blogDataList, dispatchBlogDataList] = useReducer(blogDataListReducer, [])
    const [userFetching, setUserFetching] = useState(false);
    const [blogFetching, setBlogFetching] = useState(false);

    const addUserInitialPosts = (posts) => {
        dispatchDataList({
            type: 'ADD_USER_POST',
            payload: {
                posts,
            }
        })
    }

    const addBlogInitialPosts = (posts) => {
        dispatchBlogDataList({
            type: 'ADD_BLOGS_POST',
            payload: {
                posts,
            }
        })
    }

    useEffect(() => {
        setUserFetching(true);
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://jsonplaceholder.typicode.com/users', { signal })
            .then(res => res.json())
            .then(data => {
                addUserInitialPosts(data)
                setUserFetching(false)
            })
            .catch(err => { throw err })

        // return () => {
        //     console.log("cleanup useEffect")
        //     controller.abort()
        // };
    }, [])


    useEffect(() => {
        setBlogFetching(true);
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://jsonplaceholder.typicode.com/posts', { signal })
            .then(res => res.json())
            .then(data => {
                addBlogInitialPosts(data)
                setBlogFetching(false)
            })
            .catch(err => { throw err })

        // return () => {
        //     console.log("cleanup useEffect")
        //     controller.abort()
        // };
    }, [])

    return (
        <AllDataLists.Provider value={{
            userdataList: userdataList,
            blogDataList: blogDataList,
            userFetching: userFetching,
            blogFetching: blogFetching,
        }}>
            {children}
        </AllDataLists.Provider>
    )
}

export default DataListProvider;
