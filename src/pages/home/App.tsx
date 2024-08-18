import './App.css'

import React from 'react';
import { useFetchUsers } from '../../lib/controllers/users';
import { UseFetchUsersResult } from '../../lib/controllers/users/UseFetchUsersResult';

function isSampleOne(sample: Record<string, unknown>): sample is SampleOne {
  return sample['test'] !== undefined
}

const ulStyles: React.CSSProperties = {
  listStyleType: 'none',
  padding: 0,
  margin: '20px 0',
  backgroundColor: '#f5f5f5',
  borderRadius: '5px',
  border: '1px solid #ddd',
};

const liStyles: React.CSSProperties = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
  color: '#333',
};

const lastLiStyles: React.CSSProperties = {
  ...liStyles,
  borderBottom: 'none',
};

const App: React.FC<SampleThreeReadonlyProps> = (props: SampleThreeReadonlyProps) => {
  const { users, loading }: UseFetchUsersResult = useFetchUsers();
  const test: SampleOne = {
    test: 2,
    testTwo: "string | null",
  }
  
  console.log("Sample of ReduxToolkit: Loading = " + loading);
  console.log("Sample of Global Types= " + test.testTwo);
  console.log("Sample of Typed props= " + props.test);
  console.log("Sample of Typescript type guard=" + isSampleOne(test));
  
  return (
    <div>
      <ul style={ulStyles}>
        {users.map((user, index) => (
          <li key={user.id} style={index === users.length - 1 ? lastLiStyles : liStyles}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
