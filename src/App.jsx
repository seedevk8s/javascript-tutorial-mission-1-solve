import './App.css'
import CourseItem from './components/CourseItem'

function App() {

  return (
    <>
      <main>
        <div class="card">
          <div class="card__header">강의 목록</div>
          <div class="card__body">
            <div class="courses">
              <CourseItem />
              <CourseItem />
              <CourseItem />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
