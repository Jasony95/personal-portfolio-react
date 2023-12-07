import git from '../assets/images/git.png'
import link from '../assets/images/link.png';
import stack from '../assets/images/stack.png';



export default function Footer() {



  return (
    
    <>
      <div className="foot">
        <a href='https://github.com/Jasony95'><img src={git} alt='git' width='150' height='150' align='middle'></img></a>
        <a href='https://www.linkedin.com/in/jason-yang24/'><img src={link} width='150' height='150' align='middle' alt='link'></img></a>
        <a href='https://stackoverflow.com/users/22517559/jyang232'><img src={stack} alt='git' width="400" height='100' align='middle'></img></a>
      </div>
    </>


  )



}