import React, { useState } from 'react';

import Components from './components';

const Card = ({ title, ...props }) => {
  return (
    <button
      {...props}
      style={{
        margin: '10px',
        padding: '8px',
        display: 'flex',
        justifyContent: 'center',
        border: '2px solid #000',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {title}
    </button>
  );
};

const App = () => {
  const [components, setComponents] = useState([]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '20%',
          borderRight: '5px solid #C4C4C4',
        }}
      >
        {Object.values(Components).map(({ title, component }, index) => {
          const stringifier = component.toString().match(/()\w+/g)?.join(' ');
          const props = stringifier
            ?.slice(0, stringifier.indexOf('return'))
            .trim()
            .split(' ');

          return (
            <Card
              key={index}
              title={title}
              onClick={() =>
                setComponents([
                  ...components,
                  {
                    title,
                    component,
                    props: props.reduce((a, v) => ({ ...a, [v]: v }), {}),
                  },
                ])
              }
            />
          );
        })}
      </div>
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ overflow: 'auto' }}>
          {components.map(({ component, props }, index) => {
            const element = React.createElement(component, props);

            return <div key={index}>{element}</div>;
          })}
        </div>
        <div
          style={{
            width: '100%',
            minHeight: '20%',
            maxHeight: '20%',
            borderTop: '5px solid #C4C4C4',
            overflow: 'auto',
          }}
        >
          <table style={{ width: '100%' }}>
            <tr>
              <th
                style={{
                  border: '1px solid #dddddd',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                Component
              </th>
              <th
                style={{
                  border: '1px solid #dddddd',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                Prop
              </th>
              <th
                style={{
                  border: '1px solid #dddddd',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                Value
              </th>
            </tr>
            {components.map(({ title, props }, index) => {
              const arr = Object.entries(props);

              return arr.map(([key, value], index) => (
                <tr key={index}>
                  <td
                    style={{
                      border: '1px solid #dddddd',
                      textAlign: 'left',
                      padding: '8px',
                    }}
                  >
                    {title}
                  </td>
                  <td
                    style={{
                      border: '1px solid #dddddd',
                      textAlign: 'left',
                      padding: '8px',
                    }}
                  >
                    {key}
                  </td>
                  <td
                    style={{
                      border: '1px solid #dddddd',
                      textAlign: 'left',
                      padding: '8px',
                    }}
                  >
                    {value}
                  </td>
                </tr>
              ));
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
