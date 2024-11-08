export const createUser = async (
  fullName: string,
  email: string,
  password: string,
  role: string,
) => {
  console.log('running createUser')

  await fetch('/api/create-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName: fullName,
      email: email,
      password: password,
      role: role,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        console.log('User created:', data.user)
      } else {
        console.error('Error:', data.error)
      }
    })
}
