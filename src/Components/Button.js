import React from 'react';
import { connect } from 'react-redux';
import { getNews,Test } from '../Redux/actions';

let Button=({getNews,Test})=>{
    return (
        <div>
            <button onClick={getNews}>Press to see news</button>
            <button onClick={Test}>Call Another Saga</button>
        </div>
    )
}

const mapDispatchToProps = {
    getNews: getNews,
    Test: Test
};
export default connect(null,mapDispatchToProps)(Button);
