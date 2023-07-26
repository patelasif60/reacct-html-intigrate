import React from 'react';


//module.exports = {
    const CommonCss = () => {
        return (
            <header>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Tailor App</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
            <link rel="stylesheet" href="assets/lib/fontawesome/css/all.min.css" />
            <link rel="stylesheet" href="assets/css/style.css" />
            </header>
        );
    };
    const CommonJs = () => {
        return (
            <>
            <script src="assets/js/jquery.js"></script>
            <script src="assets/js/bootstrap.bundle.js"></script>
            <script src="assets/lib/fontawesome/js/all.min.js"></script>
            <script src="assets/js/scripts.js"></script>
            </>
        );
    };
//}

export { CommonCss, CommonJs };
