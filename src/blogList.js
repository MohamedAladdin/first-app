const BlogList = (props) => {

    const blogs = props.blogs;

    return ( 
        <ul>
            {
                blogs.map((blog) => (
        
                    <li key={blog.id}> { blog.title } </li>
        
                ))
            }
        </ul> 
    );
}
 
export default BlogList;