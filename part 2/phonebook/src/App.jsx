import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [message, setMessage] = useState(null);
  const [isErrorMessage, setIsErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const resetForm = () => {
    setNewName("");
    setNewNumber("");
  };

  const handleAddPerson = (event) => {
    event.preventDefault();
    const trimmedName = newName.trim();
    const trimmedNumber = newNumber.trim();

    if (!trimmedName || !trimmedNumber) {
      alert("Please fill in both name and number");
      return;
    }

    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === trimmedName.toLowerCase(),
    );

    if (existingPerson) {
      if (
        window.confirm(
          `${existingPerson.name} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        personService
          .update(existingPerson.id, {
            ...existingPerson,
            number: trimmedNumber,
          })
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === existingPerson.id ? updatedPerson : person,
              ),
            );
            setMessage(`Updated ${updatedPerson.name}`);
            setIsErrorMessage(false);
            setTimeout(() => {
              setMessage(null);
              setIsErrorMessage(null);
            }, 5000);

            resetForm();
          });
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      personService.create(newPerson).then((createdPerson) => {
        setPersons([...persons, createdPerson]);

        setMessage(`Added ${createdPerson.name}`);
        setIsErrorMessage(false);
        setTimeout(() => {
          setMessage(null);
          setIsErrorMessage(null);
        }, 5000);
        resetForm();
      });
    }
  };

  const filteredPersons = persons.filter((person) => {
    const parsedSearch = search.trim().toLowerCase();
    return person.name.toLowerCase().includes(parsedSearch);
  });

  const handleDeletePerson = (id) => {
    const record = persons.find((person) => person.id === id);

    if (window.confirm(`Delete ${record.name}?`)) {
      personService
        .remove(id)
        .then((removedPerson) => {
          console.log(removedPerson);
          setPersons(
            persons.filter((person) => person.id !== removedPerson.id),
          );
        })
        .catch((error) => {
          setMessage(`${record.name} has already been removed from server`);
          setIsErrorMessage(true);
          setTimeout(() => {
            setMessage(null);
            setIsErrorMessage(null);
          }, 5000);
          setPersons(
            persons.filter((person) => person.id !== record.id),
          );
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} isError={isErrorMessage} />
      <Filter value={search} onChange={handleSearchChange} />
      <h2>Add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleAddPerson}
      />
      <h2>Numbers</h2>
      <PersonList
        persons={filteredPersons}
        handleDeleteClick={handleDeletePerson}
      />
    </div>
  );
};

export default App;
