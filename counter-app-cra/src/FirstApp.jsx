import PropTypes from 'prop-types';

const newMessage = {
    message: 'Hola mundo',
    title: 'Lisandro'
};

const messageFunc = (obj) => {
    const { title } = obj;

    return `My name is ${title} `;
}

export const FirstApp = ({title = 'Hola, soy Lisandro', subtitle}) => {
  console.log('esto es props:', title)
  return (
    <>
    <h1>{title}</h1>
    <h2>{subtitle + 2}</h2>
    <code>{JSON.stringify(newMessage)}</code>
    <h2>{messageFunc(newMessage)} Bohorquez</h2>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired, 
  subtitle: PropTypes.number
}

FirstApp.defaultProps = {
  title: 'No hay titulo'
}
