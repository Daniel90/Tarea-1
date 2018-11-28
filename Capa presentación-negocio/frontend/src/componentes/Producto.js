import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Menu2 from '../layout/Menu2';

const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
}


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
    button: {
        width: 200,
        margin: theme.spacing.unit,
    },
      input: {
        display: 'none',
    },
    
});


class Producto extends Component {

    constructor(props) {
        super(props);
            this.state = {
                id:'',
                codProducto:'',
                nombreProducto:'',
                tipoProducto: '',
                saldoMinimo: '',
                estado:''
        };
    }

    handleClickCrear = () => {

        if( this.state.id !== '' && 
            this.state.codProducto !== '' &&
            this.state.nombreProducto !== '' &&
            this.state.tipoProducto !== '' &&
            this.state.saldoMinimo !== '' &&
            this.state.estado !== ''){

            axios.post('http://localhost:4000/api/producto', {
                'id': this.state.id,
                'codProducto': this.state.codProducto,
                'nombreProducto': this.state.nombreProducto,
                'tipoProducto': this.state.tipoProducto,
                'saldoMinimo': this.state.saldoMinimo,
                'estado': this.state.estado
            },  )
                .then((result) => {
                    if (result.status === 200){
                            alert("producto creado");
                    }else{
                        alert("Error");
                    }
            })
            .catch((err) => {
                alert(err);
            })
        }else{
            alert('Debe llenar los campos');
        }
    }

    handleClickLeer = () => {
        axios.get('http://localhost:4000/api/productos')
            .then((result) => {
                if(result.status === 200){
                    console.log(result)
                }else{
                    alert("No funciono");
                }

            })
            .catch((err) => {
                alert(err);
            })
    }

    handleClickActualizar = () => {
        if( this.state.id !== '' &&  this.state.codProducto !== '' && this.state.nombreProducto !== '' &&
            this.state.tipoProducto !== '' && this.state.saldoMinimo !== '' && this.state.estado !== ''){

            axios.post('http://localhost:4000/api/producto/update', {
                'id': this.state.id,
                'codProducto': this.state.codProducto,
                'nombreProducto': this.state.nombreProducto,
                'tipoProducto': this.state.tipoProducto,
                'saldoMinimo': this.state.saldoMinimo,
                'estado': this.state.estado
                }, config)
                .then((result) => {
                    if (result.status === 200){
                            alert(result.data.mensaje);
                    }else{
                        alert(result.data.mensaje);
                    }
                })
                .catch((err) => {
                    alert(err);
                })
        }else{
            alert('Debe llenar los campos');
        }
    }

    handleClickEliminar = () => {
        if( 
            this.state.id !== ''){
    
            axios.post('http://localhost:4000/api/producto/delete', {
                'id': this.state.id
            }, config)
                .then((result) => {
                    if (result.status === 200){
                            alert(result.data.mensaje);
                    }else{
                        alert(result.data.mensaje);
                    }
            })
            .catch((err) => {
                alert(err);
            })
        }else{
            alert('Debe llenar los campos');
        }
    }

    render () {
        const { classes } = this.props;
        return (
            <div>
                <Menu2/>
                <center>
                    <TextField
                        id="id"
                        label="id"
                        className={classes.textField}
                        autoComplete="current-password"
                        margin="normal"
                        value={this.state.id}
                        onChange={e => this.setState({ id: e.target.value })}
                    />
                    <br/>
                    <TextField
                        id="codProducto"
                        label="codProducto"
                        className={classes.textField}
                        autoComplete="current-password"
                        margin="normal"
                        value={this.state.codProducto}
                        onChange={e => this.setState({ codProducto: e.target.value })}
                    />
                    <br/>
                    <TextField
                        id="nombreProducto"
                        label="nombreProducto"
                        className={classes.textField}
                        autoComplete="current-password"
                        margin="normal"
                        value={this.state.nombreProducto}
                        onChange={e => this.setState({ nombreProducto: e.target.value })}
                    />
                    <br/>
                    <TextField
                        id="tipoProducto"
                        label="tipoProducto"
                        className={classes.textField}
                        autoComplete="current-password"
                        margin="normal"
                        value={this.state.tipoProducto}
                        onChange={e => this.setState({ tipoProducto: e.target.value })}
                    />
                    <br/>
                    <TextField
                        id="saldoMinimo"
                        label="saldoMinimo"
                        className={classes.textField}
                        autoComplete="current-password"
                        margin="normal"
                        value={this.state.saldoMinimo}
                        onChange={e => this.setState({ saldoMinimo: e.target.value })}
                    />
                    <br/>
                    <TextField
                        id="estado"
                        label="estado"
                        className={classes.textField}
                        autoComplete="current-password"
                        margin="normal"
                        value={this.state.estado}
                        onChange={e => this.setState({ estado: e.target.value })}
                    />
                    <br/>
                    <Button  
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.handleClickCrear}
                    >
                    Crear
                    </Button >
                    <br/>
                    <Button  
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.handleClickLeer}
                    >
                    Leer
                    </Button >
                    <br/>
                    <Button  
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.handleClickActualizar}
                    >
                    Actualizar
                    </Button >
                    <br/>
                    <Button  
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.handleClickEliminar}
                    >
                    Eliminar
                    </Button >
                </center>
            </div>
        );
    }
}

Producto.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Producto);
