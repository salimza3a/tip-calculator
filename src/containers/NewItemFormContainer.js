import { connect } from 'react-redux';
import { NewItemForm } from '../components/NewItemForm';
import { addnewItem } from '../store/items/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (name, price) => dispatch(addnewItem(name, price))
  };
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
