import React from 'react';
import s from './ContactForm.module.css';

class ContactForm extends React.Component {
    state = {
        name: '',
        number: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            name: '',
            number: ''
        });
    }

    render() {
        return (
            <form className={s.form} onSubmit={this.handleSubmit}>
                <label>
                    <p className={s.title}>Name:</p>
                    <input
                        className={s.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    <p className={s.title}>Number:</p>
                    <input
                        className={s.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </label>
                <button className={s.button} type="submit">Add contact</button>
            </form>
        );
    }
}

export default ContactForm;
// import { Component } from "react";
// import PropTypes from "prop-types";

// class ContactForm extends Component{

//     state = {
//         name: '',
//         number: '',
//     };
    
//     handleChange = e => {  
//         const { name, value } = e.target;
//         this.setState({[name]: value });
//         // const { name, value } = event.target;
//         // const id = shortid.generate();
//         // this.setState((prev) => ({id, ...prev, [name]: value }));
//         // console.log(this.state);
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state);
//         this.setState({name:"",number:""});
//     };

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter name"
//                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                     title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//                     value={this.state.name}
//                     onChange={this.handleChange}
//                     required
//                     />
//                 </label>
//                 <label>
//                     <input
//                     type="tel"
//                     name="number"
//                     value={this.state.number}
//                     onChange={this.handleChange}
//                     placeholder="Enter number"
//                     pattern="38[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
//                     title="Номер может состоять только из цифр. Например 380956665557."
//                     required
//                     />
//                 </label>
//                 <button type="submit">Save</button>
//             </form> 
//         )
//     }
// }

// ContactForm.propTypes = {
//     onSubmit: PropTypes.func,
// }

// export default ContactForm;