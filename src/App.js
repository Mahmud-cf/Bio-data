import logo from './logo.svg';
import './App.css';
import MyWork from './component/component';
import Course from './component1';

function App() {
  return (
    <div className="App">
      
      <MyWork
        name="Jakariya Masud"
        age="20"
        class="14"
        facebook="facebook/jakariya masud"
        linkedIn="linkedin/jakariya masud"
        twitter="twitter/jakariya masud"
        skills={['Node JS','Vue JS', 'Wordprees','Java']}
      />
      <MyWork
        name="Mahmud Ahmed"
        age="18"
        class="12"
        facebook="facebook/mahmud ahmed"
        linkedIn="linkedin/mahmud ahmed"
        twitter="twitter/mahmud ahmed"
        skills={['HTML','CSS', 'Javascript','React','Python','Django','Java']}
      />
      <Course
        name="Complete Video Editing Course Batch 4"
        price="1000"
        newPrice="600"
      />
      <Course
        name="Laravel For Beginners"
        price="5000"
        newPrice="1500"
      />
      <Course
        name="Spoken English Learning Path"
        price="6000"
        newPrice="2000"
      />
      
    </div>
  );
}

export default App;
