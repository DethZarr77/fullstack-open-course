const PersonList = (props) => {
    const {persons, handleDeleteClick} = props;

    return (
        <ul>
        {persons.map((person) => {
          return (
            <li key={person.name}>
              {person.name} {person.number}
              <button onClick={() => handleDeleteClick(person.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    )
};

export default PersonList;