import './App.css'

function App() {
  const handleAddUser = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    // console.log(user);
  }
  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' id='' /><br />
        <input type="email" name='email' id='' /><br />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}

export default App
