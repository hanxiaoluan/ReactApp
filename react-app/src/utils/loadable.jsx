import React, { Component } from "react";
import Loadable from 'react-loadable';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css'
class LoadingComponent extends Component {
    constructor(props) {
        super(props)
        Nprogress.start()
    }
    componentDidMount() {
        Nprogress.done()
    }
    render() {
        return <div />
    }
}
export default (loader, loading=LoadingComponent) => {
    return Loadable({
        loader,
        loading
    })
}
