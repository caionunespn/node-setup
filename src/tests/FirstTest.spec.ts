import User from '@models/User'

test('It should be ok', () => {
  const user = new User()

  expect(user.name).toEqual('Caio Nunes')
})
