import { createRoot } from 'react-dom/client';

const myTable = (
  <table>
    <tr>
      <th>Name</th>
      <th>Hobby</th>
    </tr>

    <tr>
      <td>Tiago</td>
      <td>Music</td>
    </tr>

    <tr>
      <td>James</td>
      <td>Eating</td>
    </tr>
  </table>
);

createRoot(document.getElementById('root')).render(
  myTable
)
