import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        {/* Upper Filter */}
        <div className="dashboard-header">
          <div className="dashboard-title">
            <h4>Order</h4>
          </div>
          <div className="dashboard-button">
            <button className="create-button">create order</button>
          </div>
        </div>

        {/* Middle Filter */}
        <div className="dashboard-filters">
          <div className="dashboard-search">
            <h4>What are you looking for?</h4>
            <input type="search" placeholder="Search" />
          </div>

          <div className="dashboard-category">
            <h4>Category</h4>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div className="dashboard-status">
            <h4>Status</h4>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div>
            <button type="submit" className="search-btn">
              Search
            </button>
          </div>
        </div>
      </div>

      <SmallBoxContainer />
    </>
  );
};

export default Dashboard;


const SmallBoxContainer = () => {
  return (
    <div className="dashboard-main-table">
      {/* Summary Section */}
      <div className="summary">
        <p className="summary-name">Summary</p>

        <div className="show">
          <label htmlFor="show-selector" className="show-label">Show</label>
          <select name="show" id="show-selector">
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
          </select>

          <button className="dispatch">Dispatch</button>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <div className="arrow">&lt;</div>
          <div className="page">1</div>
          <div className="page">2</div>
          <div className="page active">3</div>
          <div className="dots">...</div>
          <div className="page">10</div>
          <div className="arrow">&gt;</div>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-content">
        <table className="main-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="ID" id="id-checker" />
                <label htmlFor="id-checker">ID</label>
              </th>
              <th>Name</th>
              <th>Country</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* Table rows go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

