import React, { Component } from "react";
import ApiService from "../../ApiService";

class WebBoardListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: [],
      message: null,
    };
  }

  componentDidMount() {
    this.reloadWebBoardList();
  }

  reloadWebBoardList = () => {
    ApiService.fetchWebBoards()
      .then((res) => {
        console.log(res);
        this.setState({
          boards: res.data,
        });
      })
      .catch((err) => {
        console.log("reloadWebBoardList() Error!", err);
      });
  };

  render() {
    return (
      <>
        <div>
          <h2>WebBoard List</h2>
          <table>
            <thead>
              <tr>
                <th>Bno</th>
                <th>Title</th>
                <th>Wirter</th>
                <th>Content</th>
                <th>Regdate</th>
                <th>Updatedate</th>
              </tr>
            </thead>
            <tbody>
              {this.state.boards.map((board) => (
                <tr key={board.bno}>
                  <td>{board.bno}</td>
                  <td>{board.title}</td>
                  <td>{board.writer}</td>
                  <td>{board.content}</td>
                  <td>{board.regdate}</td>
                  <td>{board.updatedate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default WebBoardListComponent;
