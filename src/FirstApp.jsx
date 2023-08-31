import PropTypes from 'prop-types'

const newMEssage = {
    message: 'Este es un mensaje',
    title: 'Gamaliel'
}

const showMessge = () => {
    return newMEssage.message;
};

export const FirstApp = ( { title, subTitle, name } ) => {
    if (!title) {
        throw new Error('El titulo no existe');
    }

    return (
        <>
            <h1> { title } </h1>
            <p> { subTitle } </p>
            {/* <h1> { showMessge() } </h1>} */}
            {/* <h1> { JSON.stringify(newMEssage) } </h1> */}
            <h1>Soy un titulo</h1>

            <p> { name } </p>
        </>
    );
}

FirstApp.PropTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay Sub titulo',
    name: 'Soy un nombre por defecto'
}