import React from 'react'

class Timeline extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <div className="timeline">
                    <dl className="timeline--entry">
                        <dt className="timeline--entry__title">Title A</dt>
                        <dd className="timeline--entry__detail">12/05/89</dd>
                    </dl>
                    <dl className="timeline--entry">
                        <dt className="timeline--entry__title">Title B</dt>
                        <dd className="timeline--entry__detail">12/05/89</dd>
                    </dl>
                    <dl className="timeline--entry">
                        <dt className="timeline--entry__title">Title C</dt>
                        <dd className="timeline--entry__detail">12/05/89</dd>
                    </dl>
                    <dl className="timeline--entry">
                        <dt className="timeline--entry__title">Title D</dt>
                        <dd className="timeline--entry__detail">12/05/89</dd>
                    </dl>
                    <dl className="timeline--entry">
                        <dt className="timeline--entry__title">Title D</dt>
                        <dd className="timeline--entry__detail">12/05/89</dd>
                    </dl>
                </div>
            </div>
        );
    }
}


export default Timeline;