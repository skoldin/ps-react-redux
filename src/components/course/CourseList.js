import React, { PropTypes } from 'react';
import CourseListRow from './CourseListRow';
import PaginationLink from './PaginationLink';

class CourseList extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      coursesPerPage: 2,
      currentPage: 0
    };

    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.switchPage = this.switchPage.bind(this);
  }

  switchPage(e) {
    const page = +e.target.text - 1;

    this.setState({
      currentPage: page
    });
  }

  prevPage() {
    this.setState(prevstate => ({
      currentPage: prevstate.currentPage - 1
    }));
  }

  nextPage() {
    this.setState(prevstate => ({
      currentPage: prevstate.currentPage + 1
    }));
  }

  render() {
    const currentPage = this.state.currentPage;
    const coursesPerPage = this.state.coursesPerPage;
    const numberOfPages = Math.ceil(this.props.courses.length / coursesPerPage);
    const offset = currentPage * coursesPerPage;

    return (
      <div>
        <table className="table">
          <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
          </tr>
          </thead>
          <tbody>
          {this.props.courses.slice(offset, coursesPerPage + offset).map(course =>
            <CourseListRow key={course.id} course={course}/>
          )}
          </tbody>
        </table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <PaginationLink text="Previous" onclick={this.prevPage}/>
              {
                Array(numberOfPages).fill('').map((x, i) => <PaginationLink active={i + 1 === this.state.currentPage} key={i} text={i + 1} onclick={this.switchPage}/>)
              }
              <PaginationLink text="Next" onclick={this.nextPage}/>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;