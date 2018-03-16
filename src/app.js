console.log('App is running')

// create app obj
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
}


// JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1>
         {/*logical && - show something or show nothing*/}
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);


const user = {
    name: 'Jeremy',
    age: 31,
    location: 'Erwin'
};

function getLocation(location) {
    if(location){
        return <p>Location: {location}</p>
    } else {
        return undefined
    }
}

const template2 = (
    <div>
        {/*Turny operator*/}
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {/*logical &&*/}
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {/*function*/}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);