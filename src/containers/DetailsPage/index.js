import { connect } from 'react-redux';
import DetailsPageLayout from './layout';
import { getSelectedEntity } from '../../redux/selectors';

const mapStateToProps = (state) => ({
    selectedEntity: getSelectedEntity(state),
});


export default connect(mapStateToProps)(DetailsPageLayout);