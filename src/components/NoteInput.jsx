import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notTitle: "",
      bodNote: "",
    };

    this.onNotTitleHandler = this.onNotTitleHandler.bind(this);
    this.onBodNoteHandler = this.onBodNoteHandler.bind(this);
    this.onBtnBuatHandler = this.onBtnBuatHandler.bind(this);
  }
  onNotTitleHandler(event) {
    this.setState(() => {
      return {
        notTitle: event.target.value,
      };
    });
  }
  onBodNoteHandler(event) {
    this.setState(() => {
      return {
        bodNote: event.target.value,
      };
    });
  }
  onBtnBuatHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onBtnBuatHandler}>
        <input type="text" placeholder="Note Title" value={this.state.notTitle} onChange={this.onNotTitleHandler} />
        <textarea cols={30} rows={6} type="text" placeholder="Enter your notes here" value={this.state.bodNote} onChange={this.onBodNoteHandler}></textarea>
        <button type="submit">Buat</button>
      </form>
    );
  }
}
export default NoteInput;
