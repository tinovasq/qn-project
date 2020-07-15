import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function EditProduct({
  product,
  editProduct,
  saveProduct,
  closeProductDialog,
}) {
  if (product === null) {
    return null
  }
  return (
    <Dialog open={true} onClose={closeProductDialog}>
      <DialogContent>
        <TextField
          label="Name"
          value={product.name}
          onChange={(e) => editProduct('name', e.target.value)}
        />
        <TextField
          label="Description"
          value={product.description}
          onChange={(e) => editProduct('description', e.target.value)}
        />
        <TextField
          label="Image URL"
          value={product.image_url}
          onChange={(e) => editProduct('image_url', e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeProductDialog} color="primary">
          Cancel
        </Button>
        <Button onClick={saveProduct} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}
