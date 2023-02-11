/* Styles */
import './styles.scss';

/**
 * This page is to inform that the requested page was not found.
 */
const NotFound = () => {
    return (
        <div className="container center-content">
            <h2>No encontrado</h2>
            <h1>404</h1>
            <h3>Lo sentimos pero no se encuentra la página solicitada</h3>
        </div>
    );
}

export default NotFound;