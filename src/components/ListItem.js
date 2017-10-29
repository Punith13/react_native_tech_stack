import React, { Component } from 'react'; 
import { Text, 
         TouchableWithoutFeedback, 
         View,
         LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../Actions';

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDetailSection() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles; 
        const { id, title } = this.props.library; 
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection >
                        <Text style={titleStyle} >
                            {title}
                        </Text>
                    </CardSection>
                    { this.renderDetailSection() }
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return {
        expanded 
    };
};

const styles = {
    titleStyle: {
        fontSize: 18, 
        paddingLeft: 15
    },

};

export default connect(mapStateToProps, actions)(ListItem); 

