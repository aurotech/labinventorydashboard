import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";

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
      <div>
        {this.props.buttonType !== "fab" ? (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.props.onClick()}
          >
            Open form dialog
          </Button>
        ) : (
          <Fab
            color="primary"
            size="small"
            onClick={() => this.props.onClick()}
          >
            <Icon>edit_icon</Icon>
          </Fab>
        )}

        <Dialog
          open={this.props.open}
          onClose={() => this.props.onClick()}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            You can change the details here
          </DialogTitle>
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
                // onChange={obj.onChange()}
                onChange={e => obj.onChange(obj.label.toLowerCase(), e)}
              />
            ))}
            {/* <TextField
              margin="dense"
              id="status"
              label="Status"
              type="text"
              defaultValue={this.state.asset.status}
              fullWidth
              onChange={e => this.props.onChange("status", e)}
            />
            <TextField
              margin="dense"
              id="desc"
              label="Description"
              type="text"
              defaultValue={this.state.asset.description}
              fullWidth
              onChange={e => this.props.onChange("description", e)}
            />
            <TextField
              margin="dense"
              id="comment"
              label="Comment"
              type="text"
              defaultValue={this.state.asset.comment}
              fullWidth
              onChange={e => this.props.onChange("comment", e)}
            />
            <TextField
              margin="dense"
              id="quantity"
              label="Quantity"
              type="text"
              defaultValue={this.state.asset.quantity}
              fullWidth
              onChange={e => this.props.onChange("quantity", e)}
            />
            <TextField
              margin="dense"
              id="threshold"
              label="Threshold"
              type="text"
              defaultValue={this.state.asset.threshold}
              fullWidth
              onChange={e => this.props.onChange("threshold", e)}
            /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.props.onClick()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.props.onSubmit()} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
