import React from 'react';

class PaginationLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: true,
      active: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onclick(e);
  }

  render() {
    let classes = (this.state.active && this.state.enabled) ? 'active ' : '';
    classes += ( ! this.state.enabled ) ? 'disabled' : '';

    return (
      <a href="#" className={'page-link ' + classes} onClick={this.handleClick}>{this.props.text}</a>
    );
  }
}

export default PaginationLink;