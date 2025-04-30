import React from 'react';
import '../styles/floatingBox.css';

function FloatingBox(props) {
  return React.createElement(
    'div',
    {
      className: 'floating-box',
      style: { borderTopColor: props.color || '#4a90e2' }
    },
    [
      React.createElement(
        'h3',
        { style: { color: props.color || '#4a90e2' }, key: 'title' },
        props.title
      ),
      React.createElement(
        'div',
        { className: 'box-content', key: 'content' },
        props.children
      )
    ]
  );
}

export default FloatingBox;