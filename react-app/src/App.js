import './App.css';

function Header(props) {
    return <h1>
        <a href='/'>{props.title}</a>
    </h1>
}

function Nav(props) {
    const lis = []
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(<li key={t.id}>
            <a href={'/read' /+ t.id}>{t.title}</a>
        </li>);
    }
    return (
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>
    );
}

function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}

function App() {
    const topics = [
        {
            id: 1,
            title: 'HTML',
            body: 'HTML is ...'
        }, {
            id: 2,
            title: 'CSS',
            body: 'CSS is ...'
        }, {
            id: 3,
            title: 'JAVASCRIPT',
            body: 'JAVASCRIPT is ...'
        }
    ]
    return (
        <div>
            <Header title="WEB"></Header>
            <Nav topics={topics}></Nav>
            <Article title="WELCOME" body="Hello World"></Article>
        </div>
    );
}

export default App;
