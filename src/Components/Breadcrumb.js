import {NavLink} from 'react-router-dom';

function Breadcrumb({ paths }) {
    const links = paths.map((path, index) => {
        if (path.link) {
            return <li className="breadcrumb-item" key={index}><NavLink to={path.link}>{path.label}</NavLink></li>
        }

        return <li className="breadcrumb-item" key={index}>{path.label}</li>
    })

    return (
        <div className='container'>
            <div className="row">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        {links}
                    </ol>
                </nav>
            </div>
        </div>
    )
}

export default Breadcrumb;