// import React, { PureComponent } from 'react';

// class Main extends PureComponent {
//   render() {
//     return (
//       <main className="main">
//         <div>{this.props.groups[0].groupName}</div>
//       </main>
//     );
//   }
// }

// export default Main;

import React from 'react';
import Column from './Column';
import '../styles/Main.scss';

function Main({ groups }) {
  return (
    <main className="main">
      <Column groups={groups} />
    </main>
  );
}

export default Main;
