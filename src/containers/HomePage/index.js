import { connect } from 'react-redux';
import HomePageLayout from './layout';
import { fetchApiData, setSelectedEntityId } from '../../redux/actions';
import { getApiData, getSelectedEntityId } from '../../redux/selectors';

const mapStateToProps = (state) => ({
    apiData: getApiData(state),
    selectedEntityId: getSelectedEntityId(state)
});

const actions = {
    fetchApiData,
    setSelectedEntityId
}

export default connect(mapStateToProps, actions)(HomePageLayout);