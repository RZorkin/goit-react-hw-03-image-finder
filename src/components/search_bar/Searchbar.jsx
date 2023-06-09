import '../styles.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    searchQuery: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ searchQuery: value });
  };

  restForm = ({ value }) => {
    
    this.setState({ searchQuery: "" });
  };

  handleOnSubmit = event => {
    event.preventDefault();
   
    this.props.onSubmit(this.state.searchQuery);
    this.restForm();
  };

  render() {
    const { handleOnSubmit, handleChange } = this;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleOnSubmit}>
          <button type="submit" className="SearchForm-button">
            <FiSearch />
            {/* <span className="SearchForm-button-label">Search</span> */}
          </button>

          <input
            className="SearchForm-input"
            onChange={handleChange}
            value={this.state.searchQuery}
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
