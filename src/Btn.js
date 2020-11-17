import React from 'react';

class Btn extends React.Component {

    render() {
        return (
            <div>
                <button>1st</button>
                <button onClick={this.props.parentModify}>2nd</button>
                <button>3rd</button>
            </div>
        );
    }

}

export default Btn;