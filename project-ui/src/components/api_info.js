import './api_info.css';

function Api_info() {
  return (
    <div className="api">
      <div className='search'>
        <input type='search' id='searchBox' placeholder='Search for API' ></input>
        <button className='button'>Search</button>
      </div>
      <div className='infoApi'>
        <table className='apiData' border='1'>
          <thead>
            <th className='field'>Field</th>
            <th className='value'>Value</th>
          </thead>
          <tbody>
            <tr>
              <td>Api</td>
              <td></td>
            </tr> 
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Api_info;
