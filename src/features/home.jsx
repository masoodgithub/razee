import '../../src/App.css';

const Home = () => {

return (
  <div className='app'>
      <h2 className='cmd'>Current Month Distribution</h2>
       
      <h3 className='cms'> Salary </h3>
        <h4>Current Month Salary</h4>
        <div>
          <span>Total Salary</span> 
          <span>{"salary"}</span>
        </div>
      <h3 className='cmdo'> Donation</h3>
        <h4>Current Month Donation</h4>
        <div>
          <span>Total Donation</span> 
          <span>{"donation"} TK</span>
        </div>

      <h3 className='cmox'> Other Expence</h3>
        <h4>Current Month Other Expence</h4>
        <div>
          <span>Total Expence</span> 
          <span>{"expense"} TK</span>
        </div>

  </div>
  
)
}

export default Home;
