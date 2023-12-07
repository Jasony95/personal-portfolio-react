import pass from '../assets/images/password-generator.jpg'
import quiz from '../assets/images/quiz.jpg'
import tasks from '../assets/images/tasks.jpg'
import weather from '../assets/images/weather.jpg'
import api from '../assets/images/api.jpg'
import social from '../assets/images/social.jpg'
import text from '../assets/images/text.jpg'
import game from '../assets/images/game.jpg'
import place from '../assets/images/place.jpg'

export default function Project() {


  return (
    
    <>
      <h1 className='head1'>Mini Projects:</h1>
      <div className='card'>
        <h2 className='head-card'>Password Generator</h2>
        <a href="https://jasony95.github.io/Password-Generator/"><img src={pass} width="500px"></img></a>
        <a href="https://github.com/Jasony95/Password-Generator#usage" className='repo'>Password Generator Repo</a>
      </div>
      <div className='card'>
        <h2 className='head-card'>JavaScript Quiz</h2>
        <a href="https://jasony95.github.io/Code-Quiz/"><img src={quiz} width="500px"></img></a>
        <a href="https://github.com/Jasony95/Code-Quiz" className='repo'>JavaScript Quiz Repo</a>
      </div>
      <div className='card'>
        <h2 className='head-card'>Work Day Scheduler</h2>
        <a href="https://jasony95.github.io/work-day-scheduler/" className='repo'><img src={tasks} width="500px"></img></a>
        <a href="https://github.com/Jasony95/work-day-scheduler" className='repo'>Work Day Scheduler Repo</a>
      </div>
      <div className='card'>
        <h2 className='head-card'>Weather Dashboard</h2>
        <a href="https://jasony95.github.io/weather-dashboard/"><img src={weather} width="500px"></img></a>
        <a href="https://github.com/Jasony95/weather-dashboard" className='repo'>Weather Dashboard Repo</a>
      </div>
      <div className='card'>
        <h2 className='head-card'>E-Commerce-API</h2>
        <a href="https://github.com/Jasony95/e-commerce-api"><img src={api} width="500px"></img></a>
      </div>
      <div className='card'>
        <h2 className='head-card'>Social Network API</h2>
        <a href="https://github.com/Jasony95/social-network-api"><img src={social} width="500px"></img></a>
      </div>
      <div className='card'>
        <h2 className='head-card'>Offline Text Editor</h2>
        <a href="https://text-file-app-40a0a9322cca.herokuapp.com/"><img src={text} width="500px"></img></a>
        <a href="https://github.com/Jasony95/Text-Editor" className='repo'>Offline Text Editor Repo</a>
      </div>
      <h1 className='group-head'>Group Projects:</h1>
      <div className='card'>
        <h2 className='head-card'>Game Finder</h2>
        <a href="https://keeslingb.github.io/group1/"><img src={game} width="500px"></img></a>
        <a href="https://github.com/KeeslingB/group1" className='repo'>Game Finder</a>
      </div>
      <div className='card'>
        <h2 className='head-card'>MyPlace</h2>
        <a href="https://myplaces-a26ea100f1c3.herokuapp.com/"><img src={place} width="500px"></img></a>
        <a href="https://github.com/Jasony95/myPlace" className='repo'>MyPlace Repo</a>
      </div>
      
      

    </>
    

  )



}