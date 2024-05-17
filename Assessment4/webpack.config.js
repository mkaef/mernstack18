//1. create a webpack setup, index html and one css file to show css in next questions
//2. how react renders dom in conservative manner - explain
//3. create a class component named - Success and show some quotes (messages) on success in it
//4. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
//5. create SuccessStory as another component, pass this as props in SuccessChild from Success component
//6. create UserSignIn component using uncontrolled way, should be class component
//7. explain how virtual dom works 
//8. pass a random value from SuccessStory component back to Success
//9. Create a class component and show all the life cycle hooks/methods
//10. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.

//=====================Responses==============================

//Q1: create a webpack setup, index html and one css file to show css in next questions
//Ans: Assessment4/src/index.html
//Ans: Assessment4/src/index.css

//Q2: how react renders dom in conservative manner - explain
//Ans;Render in react is used to display the componenet on the UI returned as HTML or JSX components.
//The ReactDOM.render() function takes two arguments, HTML code and HTML element.

//Q3: create a class component named - Success and show some quotes (messages) on success in it
//Ans: sucessComponent.js file

//Q4:create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success

//Q.7:explain how virtual dom works 
//Ans: React applies DOM changes on virtual DOM first, then apply chages on real DOM.
//Modify real DOM when changes occurs. 




let path = require("path"), 
HtmlWebpackPlugin = require('html-webpack-plugin'), 

config = {
    output: {
        path: path.join(__dirname, '/dist'), 
        filename: 'bundle.js'
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        port: 9191,
        historyApiFallback : true 
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /nodeModules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                exclude: /nodeModules/,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })] 
}

module.exports = config;