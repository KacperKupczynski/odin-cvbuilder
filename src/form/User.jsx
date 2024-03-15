import PropTypes from 'prop-types';

const User = ({ onChange }) => {
    const section = "user"

    return (
        <div className={"section"}>
            <div className={"item"}>
                <h2>General info</h2>
                <input type="text" placeholder="First Name" onChange={(event) => onChange(section, 0, "firstName", event.target.value)} id={"firstName"} />
                <input type="text" placeholder="Last Name" onChange={(event) => onChange(section, 0, "lastName", event.target.value)} id={"lastName"} />
                <input type="text" placeholder="Email" onChange={(event) => onChange(section, 0, "email", event.target.value)} id={"email"} />
                <input type="text" placeholder="Telephone" onChange={(event) => onChange(section, 0, "tel", event.target.value)} id={"tel"} />
                <input type="text" placeholder="Address" onChange={(event) => onChange(section, 0, "address", event.target.value)} id={"address"} />            </div>
        </div>
    )
}

User.propTypes = {
    onChange: PropTypes.func,
    userData: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        tel: PropTypes.string,
        address: PropTypes.string,
    }),
};

export default User;