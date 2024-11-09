import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

// function Greeting() {
//   return React.createElement('h3', {}, 'Hey')
// }

// function Greeting() {
//   return (
//     <>
//       <div className="someValue">
//         <Person />
//         <ul>
//           <li>
//             <a href="#">Link</a>
//           </li>
//         </ul>
//       </div>
//       <Message />
//       <input type="text" name="" id="" />
//     </>
//   )
// }

// const Person = () => <h3>Hey Kit</h3>
// const Message = () => {
//   return <h3>Click Above</h3>
// }

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  )
}
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}
const Image = () => (
  <img
    src="https://c.media-amazon.com/images/I/81z7-AZGsyL._AC_UL480_FMwebp_QL65_.jpg"
    alt="An American Beauty"
  />
)
const Title = () => <h3>An American Beauty</h3>
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  }
  return <h4 style={{ inlineHeadingStyles }}>Shana Abe</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
