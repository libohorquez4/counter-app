const newMessage = {
    message: 'Hola mundo',
    title: 'Lisandro'
};

const messageFunc = (obj) => {
    const { title } = obj;

    return `My name is ${title} `;
}

export const FirstApp = () => {
  return (
    <>
    <code>{JSON.stringify(newMessage)}</code>
    <h2>{messageFunc(newMessage)} Bohorquez</h2>
    </>
  )
}
