import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class FormDialog extends Component {
  state = {
    open: false,
    asset: {}
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      asset: nextProps.data
    });
  }

  render() {
    return (
      <div style={this.props.styles}>
        {this.props.button}

        <Dialog
          open={this.props.open}
          onClose={() => this.props.onClick()}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{this.props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>Edit the asset details here:</DialogContentText>
            {this.props.fields.map((obj, i) => (
              <TextField
                margin="dense"
                key={i}
                id={obj.label.toLowerCase()}
                label={obj.label}
                type={obj.type}
                defaultValue={obj.value}
                fullWidth
                hidden={
                  this.props.assetType === "single" && obj.type === "number"
                }
                onChange={e => obj.onChange(obj.label.toLowerCase(), e)}
              />
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.props.onClick()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.props.onSubmit()} color="primary">
              {this.props.submitButtonTitle
                ? this.props.submitButtonTitle
                : "Save"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
