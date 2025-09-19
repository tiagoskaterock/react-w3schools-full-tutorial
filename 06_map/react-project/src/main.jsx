import { createRoot } from 'react-dom/client';

const fruits = ['banana', 'cherry', 'peach', 'apple'];

const cats = [
  {id: 1, name: 'Bobby', age: 3},
  {id: 2, name: 'Natasho', age: 3},
  {id: 3, name: 'James', age: 2}
]

function ShowCats() {
  return (
    <ul>
      {cats.map(cat =>
        <li key={cat.id}>
          {cat.name} is {cat.age} years old
        </li>
      )}
    </ul>
  )
}

createRoot(document.getElementById('root')).render(
  <div>
    <ul>
      {fruits.map(fruit =>
        <li>{fruit}</li>
      )}
    </ul>
    <hr />
    <ShowCats />
  </div>
)
