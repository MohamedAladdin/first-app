const BlogList = ({ blogs }) => { // can type props without curlypraces to access all props 

    return ( 
        <ul>
            {
                blogs.map((blog) => (
        
                    <li key={blog.id}> { blog.title }  :: { blog.author } </li>
        
                ))
            }
        </ul> 
    );
}
 
export default BlogList;