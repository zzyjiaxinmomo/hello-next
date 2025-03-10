import './styles.css';

import React from 'react';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>Copyright zzyjiaxinmomo</footer>
      </body>
    </html>
  );
}

export default RootLayout;
