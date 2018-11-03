import * as React from 'react';
import Figicon from '../reactcomponent/Figicon';
import * as figicons from '../../figicons.json';

const Home = () => (
    <React.Fragment>
        <main className="mw7 center tc">
            <h1 className="mb3">Design &amp; use your icons in minutes. No fuss.</h1>
            <p className="large">
                Beautiful, customizable SVG icons, based on a 24px grid. Completely open source, MIT licensed and designed in Figma.
            </p>
            <div className="more">
                <div className="button">Open Icons in Figma</div>
                <div className="split" />
                <a>See on Github</a>
            </div>
        </main>
        <section className="mw7 center">
            <h2>Using icons</h2>
            <p className="mt3">
                Fig icons are currently programmatically supported as Web Components and as React Components.{' '}
                <a>Read more docs on Usage.</a>
            </p>
            <div className="snippets">
                <div className="snippet">
                    <small>
                        Web Component <a>Copy</a>
                    </small>
                    <code>
                        <span>
                            &lt;
                            <span className="yellow">fig-icon</span> <span className="orange">name</span>=
                            <span className="green">"heart"</span>
                            &gt;&lt;/
                            <span className="yellow">fig-icon</span>
                            &gt;
                        </span>
                    </code>
                </div>
                <div className="snippet">
                    <small>
                        React Component <a>Copy</a>
                    </small>
                    <code>
                        <span>
                            &lt;
                            <span className="yellow">Figicon</span> <span className="orange">name</span>=
                            <span className="green">"heart"</span>
                            /&gt;
                        </span>
                    </code>
                </div>
            </div>
        </section>
        <section className="mw7 center">
            <h2>Default icons</h2>
            <div className="svgs">
                {Object.keys(figicons).map(name => (
                    <div className="svg">
                        <div className="icon">
                            <Figicon key={name} name={name} />
                        </div>
                        <div className="desc">{name}</div>
                    </div>
                ))}
            </div>
        </section>
    </React.Fragment>
);

export default Home;