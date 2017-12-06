import * as React from 'react';

export interface AppProps {
    message: string;
}

type AppState = {
    mounted: boolean;
}

export class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = { mounted: false };
    }
    render() {
        return <div>
            {this.props.message}
            {this.state.mounted ? <div>Mounted!</div> : null}
        </div>
    }

    componentDidMount() {
        this.setState({ mounted: true });
    }
}

export default App;