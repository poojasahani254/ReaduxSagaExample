import React from 'react';
import { connect } from 'react-redux'
const imgStyle = {
    hight: 'auto',
    width: '80%',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
};

const articleStyle = {
    width: '50%',
    margin: '0 auto',
    color: 'olive'
}

let NewsItem = ({ article,testMessage }) => {
    return (article && article.length > 0 || testMessage ?
        article.map((item)=>{return(
            <article style={articleStyle} >
                <div>
                    <h1>{testMessage}</h1>
                    <h1>{item.title}</h1>
                    <img style={imgStyle} src={item.urlToImage} alt="" />
                    <h4>{item.description}</h4>
                    <a href={item.url} target="_blank">READ MORE</a>
                </div>
            </article>
        )}) : <></>
)};

const mapStateToProps = (state) => {
    return({
    article: state.reducer.news,
    testMessage: state.reducer.data,
})
}
export default connect(mapStateToProps,null)(NewsItem)