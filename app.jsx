import React from 'react';

class App extends React.Component {
  render() {
    // Create a new date object
    const date = new Date();

    // Format the date in European style (day/month/year)
    const europeanDate = date.toLocaleDateString('en-GB');

    return (
      <div>
        <h1>European Date Format Example</h1>
        <p>Today's date in European format is: {europeanDate}</p>
      </div>
    );
  }
}

export default App;