import BlogList from "./BlogList";
import useFetch from "./useFetch";
import myJson from './db.json' ;

const Home = () => {
//  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
 const b = myJson.blogs;
 console.log(b);
  return (
    <div className="home">
      {/* { error && <div>{ error }</div> }  */}
      {/* { isPending && <div>Loading...</div> }     */}
      {/* {{ blogs && <BlogList blogs={blogs} /> } */}
      { b && <BlogList blogs={b} /> }
    </div>
  );
}
 
export default Home;