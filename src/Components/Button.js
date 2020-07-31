import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../Redux/actions';

let Button=({getNews})=>{
    debugger
    return (
        <button onClick={getNews}>Press to see news</button>
    )
}

const mapDispatchToProps = {
    getNews: getNews,
};

export default connect(null,mapDispatchToProps)(Button);
